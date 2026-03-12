import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Simple in-memory rate limiting
const attempts = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(email) {
  const now = Date.now();
  const key = email.toLowerCase().trim();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) { attempts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS }); return true; }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

async function verifyToken(email, token) {
  const secret = process.env.CANCEL_HMAC_SECRET;
  if (!secret) { console.warn('CANCEL_HMAC_SECRET not set'); return true; }
  if (!token) return false;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(email.toLowerCase().trim()));
  const expectedToken = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
  if (token.length !== expectedToken.length) return false;
  let mismatch = 0;
  for (let i = 0; i < token.length; i++) mismatch |= token.charCodeAt(i) ^ expectedToken.charCodeAt(i);
  return mismatch === 0;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { email, reason, token } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required' });

  const normalizedEmail = email.toLowerCase().trim();

  if (!checkRateLimit(normalizedEmail)) {
    return res.status(429).json({ error: 'Too many attempts. Please try again in 15 minutes or email info@whvguides.com.au.' });
  }

  const tokenValid = await verifyToken(normalizedEmail, token);
  if (!tokenValid) return res.status(403).json({ error: 'Verification failed. Please use the cancellation link from your confirmation email, or contact info@whvguides.com.au.' });

  try {
    const customers = await stripe.customers.list({ email: normalizedEmail, limit: 100 });
    if (customers.data.length === 0) return res.status(404).json({ error: 'No active subscription found for this email address.' });

    let activeSubscriptions = [];
    for (const customer of customers.data) {
      const subs = await stripe.subscriptions.list({ customer: customer.id, status: 'active' });
      const pastDue = await stripe.subscriptions.list({ customer: customer.id, status: 'past_due' });
      activeSubscriptions = [...activeSubscriptions, ...subs.data, ...pastDue.data];
    }

    if (activeSubscriptions.length === 0) return res.status(404).json({ error: 'No active subscription found for this email address.' });

    const cancelled = [];
    for (const sub of activeSubscriptions) {
      const updated = await stripe.subscriptions.update(sub.id, { cancel_at_period_end: true });
      cancelled.push({ id: updated.id, cancelAt: new Date(updated.cancel_at * 1000).toISOString() });
    }

    return res.status(200).json({
      success: true,
      message: `${cancelled.length} subscription(s) will be cancelled at the end of the current billing period.`,
      count: cancelled.length,
    });

  } catch (error) {
    console.error('cancelSubscription error:', error);
    return res.status(500).json({ error: 'An unexpected error occurred. Please contact info@whvguides.com.au.' });
  }
}

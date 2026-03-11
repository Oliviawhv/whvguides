import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// In-memory rate limiting (resets on cold start, but fine for low-traffic)
const attempts = new Map();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function checkRateLimit(key) {
  const now = Date.now();
  const entry = attempts.get(key);
  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

async function verifyToken(email, token) {
  const secret = process.env.CANCEL_HMAC_SECRET;
  if (!secret) { console.warn('CANCEL_HMAC_SECRET not set — skipping HMAC verification'); return true; }
  if (!token || typeof token !== 'string') return false;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(email.toLowerCase().trim()));
  const expected = Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
  // Constant-time compare
  if (token.length !== expected.length) return false;
  let mismatch = 0;
  for (let i = 0; i < token.length; i++) mismatch |= token.charCodeAt(i) ^ expected.charCodeAt(i);
  return mismatch === 0;
}

function sanitize(str, max = 254) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, max);
}

const ALLOWED_ORIGIN = 'https://whvguides.com.au';

export default async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  // CORS
  const origin = req.headers['origin'] || '';
  if (origin && origin !== ALLOWED_ORIGIN) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  res.setHeader('Access-Control-Allow-Origin', ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const ct = req.headers['content-type'] || '';
  if (!ct.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json' });
  }

  const email = sanitize(req.body?.email, 254).toLowerCase();
  const reason = sanitize(req.body?.reason, 500);
  const token = sanitize(req.body?.token, 128);

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required' });
  }

  if (!checkRateLimit(email)) {
    return res.status(429).json({ error: 'Too many attempts. Please try again in 15 minutes or email info@whvguides.com.au.' });
  }

  const tokenValid = await verifyToken(email, token);
  if (!tokenValid) {
    return res.status(403).json({ error: 'Verification failed. Please contact info@whvguides.com.au to cancel.' });
  }

  try {
    const customers = await stripe.customers.list({ email, limit: 10 });
    if (customers.data.length === 0) {
      return res.status(404).json({ error: 'No subscription found for this email address.' });
    }

    let activeSubscriptions = [];
    for (const customer of customers.data) {
      const [active, pastDue] = await Promise.all([
        stripe.subscriptions.list({ customer: customer.id, status: 'active' }),
        stripe.subscriptions.list({ customer: customer.id, status: 'past_due' }),
      ]);
      activeSubscriptions = [...activeSubscriptions, ...active.data, ...pastDue.data];
    }

    if (activeSubscriptions.length === 0) {
      return res.status(404).json({ error: 'No active subscription found for this email address.' });
    }

    const cancelled = await Promise.all(
      activeSubscriptions.map(sub =>
        stripe.subscriptions.update(sub.id, { cancel_at_period_end: true })
      )
    );

    return res.status(200).json({
      success: true,
      message: `Your subscription will be cancelled at the end of the current billing period.`,
      count: cancelled.length,
    });

  } catch (error) {
    console.error('cancelSubscription error:', error.message);
    return res.status(500).json({ error: 'An unexpected error occurred. Please contact info@whvguides.com.au.' });
  }
}

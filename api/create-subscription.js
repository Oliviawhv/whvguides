import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const ALLOWED_ORIGIN = 'https://whvguides.com.au';
const PRICE_ID = 'price_1T1nxG0m2a7toiMMLQ26yXNC';

function isValidEmail(email) {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

function sanitize(str, maxLen = 120) {
  if (typeof str !== 'string') return '';
  return str.trim().slice(0, maxLen);
}

function isValidPhone(phone) {
  if (!phone) return true; // optional
  return typeof phone === 'string' && /^[\d\s\+\-\(\)]{6,20}$/.test(phone.trim());
}

function idempotencyKey(email) {
  const day = new Date().toISOString().slice(0, 10);
  return `sub_create_${email}_${PRICE_ID}_${day}`;
}

export default async function handler(req, res) {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Validate content-type
  const ct = req.headers['content-type'] || '';
  if (!ct.includes('application/json')) {
    return res.status(415).json({ error: 'Content-Type must be application/json' });
  }

  const {
    email: rawEmail,
    contactName: rawContact,
    whatsappNumber: rawPhone,
    state: rawState,
  } = req.body ?? {};

  // Sanitize
  const email = sanitize(rawEmail, 254).toLowerCase();
  const contactName = sanitize(rawContact, 80);
  const whatsappNumber = sanitize(rawPhone, 20);
  const state = sanitize(rawState, 60).toLowerCase();

  // Validate
  const missing = [];
  if (!email) missing.push('email');
  if (!contactName) missing.push('contactName');
  if (!state) missing.push('state');
  if (missing.length > 0) return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
  if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email address' });
  if (!isValidPhone(whatsappNumber)) return res.status(400).json({ error: 'Invalid WhatsApp number format' });

  try {
    // Check for existing active subscription
    const existingCustomers = await stripe.customers.list({ email, limit: 10 });
    for (const customer of existingCustomers.data) {
      const activeSubs = await stripe.subscriptions.list({ customer: customer.id, status: 'active', limit: 1 });
      if (activeSubs.data.length > 0) {
        return res.status(409).json({ error: 'An active subscription already exists for this email address.' });
      }
    }

    const customer = await stripe.customers.create(
      { email, name: contactName, metadata: { whatsappNumber, state, source: 'WHV Australia' } },
      { idempotencyKey: `customer_${email}` }
    );

    const subscription = await stripe.subscriptions.create(
      {
        customer: customer.id,
        items: [{ price: PRICE_ID }],
        payment_behavior: 'default_incomplete',
        payment_settings: { payment_method_types: ['card'], save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
        metadata: { whatsappNumber, state, createdAt: new Date().toISOString() },
      },
      { idempotencyKey: idempotencyKey(email) }
    );

    const paymentIntent = subscription.latest_invoice?.payment_intent;
    if (!paymentIntent?.client_secret) throw new Error('No client_secret returned from Stripe');

    return res.status(200).json({
      success: true,
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error('createSubscription error:', error.message);
    const safeMessage = error.type?.startsWith('Stripe')
      ? error.message
      : 'An unexpected error occurred. Please try again.';
    return res.status(500).json({ success: false, error: safeMessage });
  }
}

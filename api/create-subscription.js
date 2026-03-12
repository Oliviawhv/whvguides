import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function idempotencyKey(email, priceId) {
  const day = new Date().toISOString().slice(0, 10);
  return `sub_create_${email}_${priceId}_${day}`;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, businessName, contactName, whatsappNumber, city } = req.body;

  // Validate inputs
  const missing = [];
  if (!email) missing.push('email');
  if (!businessName) missing.push('businessName');
  if (!contactName) missing.push('contactName');
  if (!city) missing.push('city');
  if (missing.length > 0) return res.status(400).json({ error: `Missing required fields: ${missing.join(', ')}` });
  if (!isValidEmail(email)) return res.status(400).json({ error: 'Invalid email address' });

  try {
    // Check for existing active subscription
    const existingCustomers = await stripe.customers.list({ email, limit: 100 });
    for (const customer of existingCustomers.data) {
      const activeSubs = await stripe.subscriptions.list({ customer: customer.id, status: 'active', limit: 1 });
      if (activeSubs.data.length > 0) {
        return res.status(409).json({ error: 'An active subscription already exists for this email address.' });
      }
    }

    const PRICE_ID = 'price_1T1nxG0m2a7toiMMLQ26yXNC';

    // Create customer
    const customer = await stripe.customers.create(
      { email, name: contactName, metadata: { businessName, whatsappNumber: whatsappNumber || '', city, source: 'WHV Australia' } },
      { idempotencyKey: `customer_create_${email}` }
    );

    // Create subscription
    const subscription = await stripe.subscriptions.create(
      {
        customer: customer.id,
        items: [{ price: PRICE_ID }],
        payment_behavior: 'default_incomplete',
        payment_settings: { payment_method_types: ['card'], save_default_payment_method: 'on_subscription' },
        expand: ['latest_invoice.payment_intent'],
        metadata: { businessName, whatsappNumber: whatsappNumber || '', city, createdAt: new Date().toISOString() },
      },
      { idempotencyKey: idempotencyKey(email, PRICE_ID) }
    );

    const paymentIntent = subscription.latest_invoice.payment_intent;
    if (!paymentIntent?.client_secret) throw new Error('No client_secret returned from Stripe');

    return res.status(200).json({
      success: true,
      customerId: customer.id,
      subscriptionId: subscription.id,
      clientSecret: paymentIntent.client_secret,
      amount: 900,
    });

  } catch (error) {
    console.error('createSubscription error:', error);
    const safeMessage = error.type?.startsWith('Stripe') ? error.message : 'An unexpected error occurred. Please try again.';
    return res.status(500).json({ success: false, error: safeMessage });
  }
}

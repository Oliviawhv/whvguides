import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const ADMIN_EMAIL = 'info@whvguides.com.au';

function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}



// Disable body parsing — Stripe needs the raw body to verify signature
export const config = { api: { bodyParser: false } };

async function sendEmail(to, subject, html) {
  // Using Resend (free tier: 3,000 emails/month)
  // Sign up at resend.com and set RESEND_API_KEY in Vercel env vars
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) { console.warn('RESEND_API_KEY not set — skipping email'); return; }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ from: 'WHV Australia <noreply@whvguides.com.au>', to, subject, html }),
  });
  if (!res.ok) console.error('Email send failed:', await res.text());
}

export default async function handler(req, res) {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  if (req.method !== 'POST') return res.status(405).send('Method not allowed');

  const sig = req.headers['stripe-signature'];
  if (!sig) return res.status(400).send('Missing stripe-signature');

  let event;
  try {
    const rawBody = await buffer(req);
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(403).send('Invalid signature');
  }

  console.log(`Webhook event: ${event.id} type: ${event.type}`);

  try {
    switch (event.type) {

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        const customer = await stripe.customers.retrieve(invoice.customer);
        if (customer.deleted) break;

        if (invoice.billing_reason === 'subscription_create') {
          await sendEmail(customer.email, '🎉 Welcome to WHV Australia — Subscription Confirmed', `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b;">
              <h2>Welcome to WHV Australia 🎉</h2>
              <p>Hi ${escHtml(customer.name) || 'there'},</p>
              <p>Your subscription is now active. You'll be manually added to your WhatsApp groups within a few hours.</p>
              <h3>Subscription details</h3>
              <ul><li><strong>Amount:</strong> $9 AUD per week</li><li><strong>Status:</strong> Active</li></ul>
              <p>Cancel anytime at <a href="https://whvguides.com.au/cancel">whvguides.com.au/cancel</a></p>
              <p>— The WHV Australia Team</p>
            </div>
          `);
        }
        await sendEmail(ADMIN_EMAIL, `💰 Payment received — ${customer.email}`, `
          <h2>New Payment Received</h2>
          <p><strong>Customer:</strong> ${escHtml(customer.name) || 'N/A'} (${escHtml(customer.email)})</p>
          <p><strong>Amount:</strong> $${(invoice.amount_paid / 100).toFixed(2)} AUD</p>
          <p><strong>Business:</strong> ${escHtml(customer.metadata?.businessName) || 'N/A'}</p>
          <p><strong>City:</strong> ${escHtml(customer.metadata?.city) || 'N/A'}</p>
        `);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        const customer = await stripe.customers.retrieve(invoice.customer);
        if (customer.deleted) break;

        await sendEmail(customer.email, '⚠️ Payment failed — please update your payment method', `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b;">
            <h2>Payment Failed</h2>
            <p>Hi ${escHtml(customer.name) || 'there'},</p>
            <p>We were unable to process your weekly payment. Please update your payment method to avoid losing access.</p>
            ${invoice.hosted_invoice_url ? `<p><a href="${invoice.hosted_invoice_url}" style="background:#c9a24a;color:#fff;padding:12px 24px;text-decoration:none;border-radius:4px;">Update Payment Method</a></p>` : ''}
            <p>— The WHV Australia Team</p>
          </div>
        `);
        await sendEmail(ADMIN_EMAIL, `⚠️ Payment failed — ${escHtml(customer.email)} (attempt ${invoice.attempt_count})`, `
          <h2>Payment Failed</h2>
          <p><strong>Customer:</strong> ${escHtml(customer.email)}</p>
          <p><strong>Amount:</strong> $${(invoice.amount_due / 100).toFixed(2)} AUD</p>
          <p><strong>Attempt:</strong> ${invoice.attempt_count}</p>
        `);
        break;
      }

      case 'customer.subscription.deleted': {
        const sub = event.data.object;
        const customer = await stripe.customers.retrieve(sub.customer);
        if (customer.deleted) break;
        const dateStr = sub.current_period_end
          ? new Date(sub.current_period_end * 1000).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
          : 'the end of your billing period';
        await sendEmail(customer.email, 'Your WHV Australia subscription has ended', `
          <div style="font-family:sans-serif;max-width:600px;color:#1e293b;">
            <h2>Subscription Cancelled</h2>
            <p>Hi ${escHtml(customer.name) || 'there'}, your access continued until <strong>${dateStr}</strong>.</p>
            <p>Resubscribe anytime at <a href="https://whvguides.com.au/get-started">whvguides.com.au/get-started</a></p>
            <p>— The WHV Australia Team</p>
          </div>
        `);
        break;
      }

      case 'customer.subscription.updated': {
        const sub = event.data.object;
        const prev = event.data.previous_attributes;
        if (sub.cancel_at_period_end === true && prev?.cancel_at_period_end === false) {
          const customer = await stripe.customers.retrieve(sub.customer);
          if (!customer.deleted) {
            const dateStr = sub.cancel_at ? new Date(sub.cancel_at * 1000).toLocaleDateString('en-AU') : 'soon';
            await sendEmail(customer.email, 'Cancellation confirmed — WHV Australia', `
              <p>Hi ${escHtml(customer.name) || 'there'}, your subscription will be cancelled on <strong>${dateStr}</strong>.</p>
            `);
          }
        }
        break;
      }

      default:
        console.log(`Unhandled event: ${event.type}`);
    }
  } catch (err) {
    console.error(`Handler error for ${event.type}:`, err.message);
  }

  return res.status(200).json({ received: true });
}

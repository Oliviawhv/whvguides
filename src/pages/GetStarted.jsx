import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

function PaymentForm({ formData, setFormData }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { businessName, contactName, email, whatsappNumber } = formData;
    if (!businessName || !contactName || !email || !whatsappNumber) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!stripe || !elements) return;
    setProcessing(true);
    try {
      const res = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, businessName, contactName, whatsappNumber, city: 'all' }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.error || 'Failed to create subscription');

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        result.clientSecret,
        { payment_method: { card: elements.getElement(CardElement), billing_details: { name: contactName, email } } }
      );
      if (confirmError) throw new Error(confirmError.message);
      if (paymentIntent.status === 'succeeded') {
        navigate('/success');
      }
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '40px 24px 64px' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .gs-card { background: #ffffff; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); max-width: 520px; width: 100%; padding: 48px 44px; }
        .gs-h1 { font-family: 'DM Sans', sans-serif; font-size: 1.75rem; font-weight: 600; color: #1a1208; margin-bottom: 8px; text-align: center; line-height: 1.2; }
        .gs-sub { font-size: 0.9rem; font-weight: 400; color: rgba(26,18,8,0.55); line-height: 1.6; margin-bottom: 36px; text-align: center; }
        .gs-label { display: block; font-size: 0.75rem; font-weight: 600; color: rgba(26,18,8,0.55); letter-spacing: 0.04em; margin-bottom: 6px; }
        .gs-field { margin-bottom: 16px; }
        .gs-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .gs-input { width: 100%; background: #f8faf9; border: 1px solid rgba(26,18,8,0.14); color: #1a1208; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; padding: 11px 14px; border-radius: 8px; outline: none; transition: border-color 0.2s; -webkit-appearance: none; }
        .gs-input:focus { border-color: #25D366; background: #fff; }
        .gs-card-wrap { background: #f8faf9; border: 1px solid rgba(26,18,8,0.14); padding: 13px 14px; border-radius: 8px; transition: border-color 0.2s; margin-bottom: 24px; }
        .gs-card-wrap:focus-within { border-color: #25D366; }
        .gs-section-divider { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(26,18,8,0.35); margin: 24px 0 16px; display: flex; align-items: center; gap: 10px; }
        .gs-section-divider::before, .gs-section-divider::after { content: ''; flex: 1; height: 1px; background: rgba(26,18,8,0.1); }
        .gs-error { background: rgba(220,38,38,0.07); border: 1px solid rgba(220,38,38,0.2); color: #dc2626; font-size: 0.83rem; padding: 11px 14px; border-radius: 8px; margin-bottom: 16px; }
        .gs-submit { width: 100%; background: #25D366; color: #ffffff; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 600; padding: 14px; border: none; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background 0.2s, transform 0.15s; }
        .gs-submit:hover:not(:disabled) { background: #20bd5a; transform: translateY(-1px); }
        .gs-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .gs-trust { display: flex; align-items: center; justify-content: center; gap: 18px; margin-top: 14px; flex-wrap: wrap; }
        .gs-trust-item { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: rgba(26,18,8,0.38); }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 600px) {
          .gs-card { padding: 32px 20px; }
          .gs-field-row { grid-template-columns: 1fr; }
          .gs-trust { gap: 12px; }
          .gs-h1 { font-size: 1.45rem; }
        }
      `}</style>

      <div className="gs-card">
        <h1 className="gs-h1">Get full access to the WHV Community</h1>
        <p className="gs-sub">Subscribe for $9/week and get instant access to our entire community 30+ WhatsApp groups covering jobs, cities, and more across Australia.</p>

        {error && <div className="gs-error" role="alert" aria-live="polite">{error}</div>}

        <div className="gs-field-row">
          <div className="gs-field">
            <label className="gs-label" htmlFor="gs-businessName">Business Name *</label>
            <input id="gs-businessName" className="gs-input" autoComplete="organization" value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your business name" maxLength={120} />
          </div>
          <div className="gs-field">
            <label className="gs-label" htmlFor="gs-contactName">Your Name *</label>
            <input id="gs-contactName" className="gs-input" autoComplete="name" value={formData.contactName} onChange={e => setFormData({ ...formData, contactName: e.target.value })} placeholder="Contact name" maxLength={80} />
          </div>
        </div>

        <div className="gs-field-row">
          <div className="gs-field">
            <label className="gs-label" htmlFor="gs-email">Email *</label>
            <input id="gs-email" className="gs-input" type="email" autoComplete="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
          </div>
          <div className="gs-field">
            <label className="gs-label" htmlFor="gs-whatsapp">WhatsApp Number *</label>
            <input id="gs-whatsapp" className="gs-input" type="tel" autoComplete="tel" value={formData.whatsappNumber} onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })} placeholder="+61 4XX XXX XXX" maxLength={20} />
          </div>
        </div>

        <div className="gs-section-divider">Payment Details</div>

        <div className="gs-card-wrap">
          <CardElement options={{ style: { base: { fontSize: '15px', color: '#1a1208', fontFamily: "'DM Sans', sans-serif", '::placeholder': { color: 'rgba(26,18,8,0.35)' } }, invalid: { color: '#dc2626' } } }} />
        </div>

        <button type="submit" className="gs-submit" disabled={processing || !stripe}>
          {processing
            ? (<><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/></svg>Processing…</>)
            : 'Subscribe - $9 / week'}
        </button>

        <div className="gs-trust">
          <div className="gs-trust-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Secured by Stripe</div>
          <div className="gs-trust-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>Cancel anytime</div>
          <div className="gs-trust-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>30+ groups included</div>
        </div>
      </div>
    </form>
  );
}

export default function GetStarted() {
  const [formData, setFormData] = useState({ businessName: '', contactName: '', email: '', whatsappNumber: '' });
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#f2faf5', minHeight: '100vh' }}>
      <Elements stripe={stripePromise} options={{ locale: 'en' }}>
        <PaymentForm formData={formData} setFormData={setFormData} />
      </Elements>
    </div>
  );
}

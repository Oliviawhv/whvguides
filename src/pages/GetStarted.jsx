import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const CITIES = [
  'Sydney', 'Melbourne', 'Byron Bay',
  'Brisbane', 'Gold Coast', 'Sunshine Coast', 'Noosa', 'Cairns', 'Airlie Beach',
  'Perth', 'Broome', 'Margaret River',
  'Darwin', 'Alice Springs', 'Adelaide', 'Hobart',
];

function PaymentForm({ formData, setFormData }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const { businessName, contactName, email, whatsappNumber, city } = formData;
    if (!businessName || !contactName || !email || !whatsappNumber || !city) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!stripe || !elements) return;
    setProcessing(true);
    try {
      // Call Vercel serverless API route
      const res = await fetch('/api/create-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, businessName, contactName, whatsappNumber, city: city.toLowerCase() }),
      });
      const result = await res.json();
      if (!result.success) throw new Error(result.error || 'Failed to create subscription');

      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        result.clientSecret,
        { payment_method: { card: elements.getElement(CardElement), billing_details: { name: contactName, email } } }
      );
      if (confirmError) throw new Error(confirmError.message);
      if (paymentIntent.status === 'succeeded') {
        navigate(`/success?city=${encodeURIComponent(city.toLowerCase())}`);
      }
    } catch (err) {
      setError(err.message || 'Payment failed. Please try again.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .gs-root { font-family: 'DM Sans', sans-serif; background: #080c18; min-height: 100vh; color: #e0dbd0; }
        .gs-layout { display: grid; grid-template-columns: 1fr 420px; min-height: 100vh; }
        .gs-left { padding: 100px 64px 64px; background: #080c18; border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; }
        .gs-right { padding: 100px 48px 64px; background: #0b101e; position: sticky; top: 0; height: 100vh; overflow-y: auto; display: flex; flex-direction: column; }
        .gs-back { display: inline-flex; align-items: center; gap: 8px; font-size: 0.75rem; color: rgba(224,219,208,0.35); text-decoration: none; letter-spacing: 0.08em; text-transform: uppercase; font-weight: 500; transition: color 0.2s; margin-bottom: 40px; }
        .gs-back:hover { color: rgba(224,219,208,0.7); }
        .gs-eyebrow { font-size: 0.67rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #c9a24a; margin-bottom: 14px; display: flex; align-items: center; gap: 10px; }
        .gs-eyebrow::before { content: ''; display: block; width: 24px; height: 1px; background: #c9a24a; }
        .gs-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 3.5vw, 3.2rem); font-weight: 400; line-height: 1.1; letter-spacing: -0.025em; color: #f5f0e8; margin-bottom: 12px; }
        .gs-sub { font-size: 0.9rem; font-weight: 300; color: rgba(224,219,208,0.45); line-height: 1.7; margin-bottom: 48px; max-width: 480px; }
        .gs-form-section { margin-bottom: 36px; padding-bottom: 36px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .gs-form-section:last-of-type { border-bottom: none; }
        .gs-section-title { font-size: 0.67rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(224,219,208,0.3); margin-bottom: 20px; }
        .gs-field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .gs-field { margin-bottom: 16px; }
        .gs-label { display: block; font-size: 0.75rem; font-weight: 600; color: rgba(224,219,208,0.5); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 8px; }
        .gs-input { width: 100%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); color: #e0dbd0; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; font-weight: 400; padding: 12px 14px; border-radius: 2px; transition: border-color 0.2s, background 0.2s; outline: none; -webkit-appearance: none; }
        .gs-input:focus { border-color: rgba(201,162,74,0.5); background: rgba(255,255,255,0.06); }
        .gs-input option { background: #0b101e; }
        .gs-card-wrap { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); padding: 14px; border-radius: 2px; transition: border-color 0.2s; }
        .gs-card-wrap:focus-within { border-color: rgba(201,162,74,0.5); }
        .gs-error { background: rgba(220,38,38,0.1); border: 1px solid rgba(220,38,38,0.25); color: #f87171; font-size: 0.82rem; padding: 12px 16px; border-radius: 2px; margin-bottom: 20px; }
        .gs-submit { width: 100%; background: #c9a24a; color: #080c18; font-family: 'DM Sans', sans-serif; font-size: 0.82rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 16px; border: none; border-radius: 2px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; transition: background 0.2s, transform 0.15s; }
        .gs-submit:hover:not(:disabled) { background: #d4b060; transform: translateY(-1px); }
        .gs-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .gs-trust { display: flex; align-items: center; justify-content: center; gap: 20px; margin-top: 16px; flex-wrap: wrap; }
        .gs-trust-item { display: flex; align-items: center; gap: 5px; font-size: 0.72rem; color: rgba(224,219,208,0.3); }
        .gs-summary-title { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #f5f0e8; margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.07); }
        .gs-price-big { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 400; line-height: 1; letter-spacing: -0.04em; color: #f5f0e8; }
        .gs-price-currency { font-size: 1.2rem; color: rgba(240,235,226,0.45); font-family: 'Cormorant Garamond', serif; }
        .gs-price-period { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(224,219,208,0.3); margin-bottom: 28px; }
        .gs-summary-items { list-style: none; margin-bottom: 28px; }
        .gs-summary-items li { display: flex; align-items: flex-start; gap: 10px; font-size: 0.82rem; font-weight: 300; color: rgba(224,219,208,0.55); padding: 9px 0; border-bottom: 1px solid rgba(255,255,255,0.05); line-height: 1.5; }
        .gs-summary-items li:last-child { border-bottom: none; }
        .gs-sum-check { color: #c9a24a; flex-shrink: 0; margin-top: 1px; }
        .gs-cancel-note { font-size: 0.75rem; color: rgba(224,219,208,0.25); line-height: 1.6; text-align: center; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.05); }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .gs-layout { grid-template-columns: 1fr; }
          .gs-right { position: static; height: auto; padding: 48px 24px; }
          .gs-left { padding: 100px 24px 48px; }
          .gs-field-row { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="gs-layout">
        <div className="gs-left">
          <Link to="/for-business" className="gs-back">← Back to For Employers</Link>
          <div className="gs-eyebrow">Get Started</div>
          <h1 className="gs-h1">Complete your<br />subscription</h1>
          <p className="gs-sub">You'll be added to WhatsApp groups within a few hours of payment.</p>
          {error && <div className="gs-error">{error}</div>}

          <div className="gs-form-section">
            <div className="gs-section-title">Business Details</div>
            <div className="gs-field-row">
              <div className="gs-field">
                <label className="gs-label">Business Name *</label>
                <input className="gs-input" value={formData.businessName} onChange={e => setFormData({ ...formData, businessName: e.target.value })} placeholder="Your business name" />
              </div>
              <div className="gs-field">
                <label className="gs-label">Your Name *</label>
                <input className="gs-input" value={formData.contactName} onChange={e => setFormData({ ...formData, contactName: e.target.value })} placeholder="Contact name" />
              </div>
            </div>
            <div className="gs-field-row">
              <div className="gs-field">
                <label className="gs-label">Email *</label>
                <input className="gs-input" type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" />
              </div>
              <div className="gs-field">
                <label className="gs-label">WhatsApp Number *</label>
                <input className="gs-input" type="tel" value={formData.whatsappNumber} onChange={e => setFormData({ ...formData, whatsappNumber: e.target.value })} placeholder="+61 4XX XXX XXX" />
              </div>
            </div>
            <div className="gs-field">
              <label className="gs-label">Primary City / Region *</label>
              <select className="gs-input" value={formData.city} onChange={e => setFormData({ ...formData, city: e.target.value })}>
                <option value="">Select your city</option>
                {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          <div className="gs-form-section">
            <div className="gs-section-title">Payment Details</div>
            <div className="gs-field">
              <label className="gs-label">Card Details *</label>
              <div className="gs-card-wrap">
                <CardElement options={{ style: { base: { fontSize: '15px', color: '#e0dbd0', fontFamily: "'DM Sans', sans-serif", '::placeholder': { color: 'rgba(224,219,208,0.3)' } }, invalid: { color: '#f87171' } } }} />
              </div>
            </div>
          </div>

          <button type="submit" className="gs-submit" disabled={processing || !stripe}>
            {processing ? (<><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/></svg>Processing…</>) : 'Subscribe — $9/week'}
          </button>
          <div className="gs-trust">
            <div className="gs-trust-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>Secured by Stripe</div>
            <div className="gs-trust-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>Cancel anytime</div>
            <div className="gs-trust-item"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>Added within hours</div>
          </div>
        </div>

        <div className="gs-right">
          <div className="gs-summary-title">Order Summary</div>
          <div><span className="gs-price-big">$9</span><span className="gs-price-currency"> AUD</span></div>
          <div className="gs-price-period">per week · billed weekly</div>
          <ul className="gs-summary-items">
            {['National Jobs WhatsApp group', 'City or region community group', 'Unlimited job posts', 'Direct candidate messages', 'Job post writing assistance', 'No contracts, cancel anytime'].map(item => (
              <li key={item}><svg className="gs-sum-check" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>{item}</li>
            ))}
          </ul>
          <div className="gs-cancel-note">You can cancel at any time by emailing us at info@whvguides.com.au. Your access continues until the end of the billing period.</div>
        </div>
      </div>
    </form>
  );
}

export default function GetStarted() {
  const [formData, setFormData] = useState({ businessName: '', contactName: '', email: '', whatsappNumber: '', city: '' });
  return (
    <div className="gs-root">
      <Elements stripe={stripePromise} options={{ locale: 'en' }}>
        <PaymentForm formData={formData} setFormData={setFormData} />
      </Elements>
    </div>
  );
}

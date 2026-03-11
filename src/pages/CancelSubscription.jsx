import React, { useState } from 'react';
import { Link } from 'react-router-dom';

async function generateCancelToken(email) {
  const secret = import.meta.env.VITE_CANCEL_HMAC_SECRET;
  if (!secret) return '';
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, encoder.encode(email.toLowerCase().trim()));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function CancelSubscription() {
  const [formData, setFormData] = useState({ email: '', reason: '' });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) { setStatus('error'); setMessage('Please enter your email address.'); return; }
    setLoading(true); setStatus(null);
    try {
      const token = await generateCancelToken(formData.email);
      const res = await fetch('/api/cancel-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, reason: formData.reason, token }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus('success');
        setMessage(result.message || 'Your subscription has been cancelled.');
        setFormData({ email: '', reason: '' });
      } else {
        setStatus('error');
        setMessage(result.error || 'Something went wrong. Please try again or email us.');
      }
    } catch {
      setStatus('error');
      setMessage('Unable to process cancellation. Please email info@whvguides.com.au directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#f2faf5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 24px 64px', color: '#1a1208' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; }
        .cs-wrap { max-width: 480px; width: 100%; }
        .cs-back { display: inline-flex; align-items: center; gap: 6px; font-size: 0.78rem; font-weight: 500; color: rgba(26,18,8,0.45); text-decoration: none; margin-bottom: 32px; transition: color 0.2s; }
        .cs-back:hover { color: #1a1208; }
        .cs-h1 { font-family: 'DM Sans', sans-serif; font-size: 2rem; font-weight: 600; color: #1a1208; margin-bottom: 8px; line-height: 1.2; }
        .cs-sub { font-size: 0.88rem; font-weight: 400; color: rgba(26,18,8,0.55); line-height: 1.7; margin-bottom: 32px; }
        .cs-card { background: #ffffff; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.07); padding: 36px; }
        .cs-label { display: block; font-size: 0.75rem; font-weight: 600; letter-spacing: 0.04em; color: rgba(26,18,8,0.5); margin-bottom: 6px; }
        .cs-input { width: 100%; background: #f8faf9; border: 1px solid rgba(26,18,8,0.14); color: #1a1208; font-family: 'DM Sans', sans-serif; font-size: 0.9rem; padding: 11px 14px; border-radius: 8px; outline: none; transition: border-color 0.2s; margin-bottom: 16px; }
        .cs-input:focus { border-color: #25D366; }
        .cs-textarea { resize: vertical; min-height: 90px; }
        .cs-btn { width: 100%; background: rgba(220,38,38,0.08); border: 1px solid rgba(220,38,38,0.22); color: #dc2626; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600; padding: 13px; border-radius: 8px; cursor: pointer; transition: background 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
        .cs-btn:hover:not(:disabled) { background: rgba(220,38,38,0.14); }
        .cs-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .cs-success { background: rgba(37,211,102,0.08); border: 1px solid rgba(37,211,102,0.25); color: #15803d; font-size: 0.85rem; padding: 13px 16px; margin-bottom: 20px; border-radius: 8px; line-height: 1.6; }
        .cs-error { background: rgba(220,38,38,0.07); border: 1px solid rgba(220,38,38,0.2); color: #dc2626; font-size: 0.85rem; padding: 13px 16px; margin-bottom: 20px; border-radius: 8px; line-height: 1.6; }
        .cs-alt { font-size: 0.78rem; color: rgba(26,18,8,0.4); text-align: center; margin-top: 20px; line-height: 1.6; }
        .cs-alt a { color: #25D366; text-decoration: none; }
        .cs-alt a:hover { text-decoration: underline; }
        .cs-security-note { display: flex; align-items: flex-start; gap: 10px; background: rgba(37,211,102,0.06); border: 1px solid rgba(37,211,102,0.15); padding: 12px 14px; margin-bottom: 20px; border-radius: 8px; font-size: 0.75rem; color: rgba(26,18,8,0.45); line-height: 1.6; }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <div className="cs-wrap">
        <Link to="/" className="cs-back">← Back to home</Link>
        <h1 className="cs-h1">Cancel subscription</h1>
        <p className="cs-sub">We're sorry to see you go. Enter your email below and we'll process your cancellation. Your subscription will remain active until the end of your billing period.</p>

        <div className="cs-card">
          {status === 'success' && <div className="cs-success" role="alert" aria-live="polite">{message}</div>}
          {status === 'error' && <div className="cs-error" role="alert" aria-live="polite">{message}</div>}

          {status !== 'success' && (
            <>
              <div className="cs-security-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0, marginTop: 1 }}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Your cancellation is verified against the email used to subscribe, preventing unauthorised cancellations.
              </div>
              <form onSubmit={handleSubmit}>
                <label className="cs-label" htmlFor="cs-email">Email address *</label>
                <input id="cs-email" className="cs-input" type="email" autoComplete="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="The email you subscribed with" />
                <button type="submit" className="cs-btn" disabled={loading}>
                  {loading ? (<><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ animation: 'spin 0.8s linear infinite' }}><circle cx="12" cy="12" r="10" strokeOpacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round"/></svg>Processing…</>) : 'Cancel My Subscription'}
                </button>
              </form>
            </>
          )}
        </div>
        <p className="cs-alt">Prefer to cancel by email? <a href="mailto:info@whvguides.com.au">info@whvguides.com.au</a></p>
      </div>
    </div>
  );
}

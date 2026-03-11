import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import confetti from 'canvas-confetti';

const COMMUNITY_LINKS = {
  nsw: { name: 'NSW WHV Community', link: 'https://chat.whatsapp.com/Hw7DbXFsVhl3cFRzFEbyii' },
  vic: { name: 'VIC WHV Community', link: 'https://chat.whatsapp.com/LoaUaSm0usW3SI4gOIPmsw' },
  qld: { name: 'QLD WHV Community', link: 'https://chat.whatsapp.com/K1DynFTkcaZHxM2E7sIqU0' },
  wa:  { name: 'WA WHV Community',  link: 'https://chat.whatsapp.com/F7QNf3jOomoEE3aHicU5FB' },
  sa:  { name: 'SA WHV Community',  link: 'https://chat.whatsapp.com/LwYrcbb2Aj7GRjZYq1GlYE' },
  nt:  { name: 'NT WHV Community',  link: 'https://chat.whatsapp.com/F0KaowZ2xci8CibSHMjJTP' },
  tas: { name: 'TAS WHV Community', link: 'https://chat.whatsapp.com/CBJo6KDLCoP3tB5Ll4U0rU' },
};

export default function SubscriptionSuccess() {
  const [searchParams] = useSearchParams();
  const stateCode = (searchParams.get('city') || '').toLowerCase();
  const community = COMMUNITY_LINKS[stateCode] || null;

  useEffect(() => {
    const end = Date.now() + 2800;
    const frame = () => {
      if (Date.now() > end) return;
      confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#25D366', '#ffffff', '#1a1208'] });
      confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#25D366', '#ffffff', '#1a1208'] });
      requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#f2faf5', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 24px 48px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .ss-card { background: #ffffff; border-radius: 12px; box-shadow: 0 2px 16px rgba(0,0,0,0.08); max-width: 520px; width: 100%; padding: 52px 44px; text-align: center; }
        .ss-icon { width: 64px; height: 64px; border-radius: 50%; background: rgba(37,211,102,0.12); border: 1px solid rgba(37,211,102,0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; }
        .ss-h1 { font-family: 'DM Sans', sans-serif; font-size: 2rem; font-weight: 600; color: #1a1208; margin-bottom: 12px; line-height: 1.2; }
        .ss-sub { font-size: 0.9rem; font-weight: 400; color: rgba(26,18,8,0.55); line-height: 1.7; margin-bottom: 36px; }
        .ss-divider { height: 1px; background: rgba(26,18,8,0.08); margin-bottom: 28px; }
        .ss-label { font-size: 0.67rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(26,18,8,0.35); margin-bottom: 16px; }
        .ss-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px 24px; font-family: 'DM Sans', sans-serif; font-size: 0.88rem; font-weight: 600; border: none; border-radius: 8px; cursor: pointer; text-decoration: none; transition: all 0.2s; margin-bottom: 10px; }
        .ss-btn-green { background: #25D366; color: #ffffff; }
        .ss-btn-green:hover { background: #20bd5a; transform: translateY(-1px); }
        .ss-btn-outline { background: transparent; color: #1a1208; border: 1px solid rgba(26,18,8,0.18); }
        .ss-btn-outline:hover { border-color: #25D366; color: #25D366; }
        .ss-note { font-size: 0.78rem; color: rgba(26,18,8,0.38); margin-top: 24px; line-height: 1.6; }
        @media (max-width: 600px) { .ss-card { padding: 36px 20px; } }
      `}</style>

      <div className="ss-card">
        <div className="ss-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="2.5"><polyline points="20,6 9,17 4,12"/></svg>
        </div>
        <h1 className="ss-h1">Welcome to the WHV Guides Community 🎉</h1>
        <p className="ss-sub">Your subscription is active. We'll add you to your WhatsApp groups within a few hours. You'll receive a confirmation email shortly.</p>
        <div className="ss-divider" />
        <div className="ss-label">Join your community now</div>

        {community && (
          <a href={community.link} target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-green">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Join {community.name}
          </a>
        )}

        <p className="ss-note">Questions? Email us at <a href="mailto:info@whvguides.com.au" style={{ color: '#25D366', textDecoration: 'none' }}>info@whvguides.com.au</a></p>
      </div>
    </div>
  );
}

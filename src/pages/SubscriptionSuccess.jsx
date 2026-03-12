import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const GROUPS = [
  { city: 'sydney', name: 'NSW & Victoria', link: 'https://chat.whatsapp.com/BljvaCMVSen7eiGi3dmhWS' },
  { city: 'melbourne', name: 'NSW & Victoria', link: 'https://chat.whatsapp.com/BljvaCMVSen7eiGi3dmhWS' },
  { city: 'byron bay', name: 'NSW & Victoria', link: 'https://chat.whatsapp.com/BljvaCMVSen7eiGi3dmhWS' },
  { city: 'brisbane', name: 'Queensland', link: 'https://chat.whatsapp.com/EiAvkNqsfPYHIUM3Byz3LU' },
  { city: 'gold coast', name: 'Queensland', link: 'https://chat.whatsapp.com/EiAvkNqsfPYHIUM3Byz3LU' },
  { city: 'sunshine coast', name: 'Queensland', link: 'https://chat.whatsapp.com/EiAvkNqsfPYHIUM3Byz3LU' },
  { city: 'noosa', name: 'Queensland', link: 'https://chat.whatsapp.com/EiAvkNqsfPYHIUM3Byz3LU' },
  { city: 'cairns', name: 'Queensland', link: 'https://chat.whatsapp.com/EiAvkNqsfPYHIUM3Byz3LU' },
  { city: 'airlie beach', name: 'Queensland', link: 'https://chat.whatsapp.com/EiAvkNqsfPYHIUM3Byz3LU' },
  { city: 'perth', name: 'Western Australia', link: 'https://chat.whatsapp.com/DXUn50oH2N90XVn7UC91Zy' },
  { city: 'broome', name: 'Western Australia', link: 'https://chat.whatsapp.com/DXUn50oH2N90XVn7UC91Zy' },
  { city: 'margaret river', name: 'Western Australia', link: 'https://chat.whatsapp.com/DXUn50oH2N90XVn7UC91Zy' },
  { city: 'darwin', name: 'NT, SA & Tasmania', link: 'https://chat.whatsapp.com/BdrGWQhl9Rw0bHKXECaqve' },
  { city: 'alice springs', name: 'NT, SA & Tasmania', link: 'https://chat.whatsapp.com/BdrGWQhl9Rw0bHKXECaqve' },
  { city: 'adelaide', name: 'NT, SA & Tasmania', link: 'https://chat.whatsapp.com/BdrGWQhl9Rw0bHKXECaqve' },
  { city: 'hobart', name: 'NT, SA & Tasmania', link: 'https://chat.whatsapp.com/BdrGWQhl9Rw0bHKXECaqve' },
];

const JOBS_GROUP = { name: 'Jobs Australia', link: 'https://chat.whatsapp.com/J83QNuXIJ7u2ICParC3M0S' };

export default function SubscriptionSuccess() {
  const [searchParams] = useSearchParams();
  const city = searchParams.get('city') || '';
  const cityGroup = GROUPS.find(g => g.city === city.toLowerCase());

  useEffect(() => {
    const end = Date.now() + 2800;
    const frame = () => {
      if (Date.now() > end) return;
      confetti({ particleCount: 2, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#c9a24a', '#f5f0e8', '#25D366'] });
      confetti({ particleCount: 2, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#c9a24a', '#f5f0e8', '#25D366'] });
      requestAnimationFrame(frame);
    };
    frame();
  }, []);

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#080c18', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 24px 48px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; }
        .ss-card { background: #0b101e; border: 1px solid rgba(201,162,74,0.2); max-width: 560px; width: 100%; padding: 56px 52px; text-align: center; }
        .ss-icon { width: 64px; height: 64px; border-radius: 50%; background: rgba(201,162,74,0.1); border: 1px solid rgba(201,162,74,0.3); display: flex; align-items: center; justify-content: center; margin: 0 auto 32px; }
        .ss-h1 { font-family: 'Cormorant Garamond', serif; font-size: 2.8rem; font-weight: 400; letter-spacing: -0.025em; color: #f5f0e8; margin-bottom: 12px; line-height: 1.1; }
        .ss-sub { font-size: 0.9rem; font-weight: 300; color: rgba(224,219,208,0.5); line-height: 1.7; margin-bottom: 40px; }
        .ss-divider { height: 1px; background: rgba(255,255,255,0.06); margin-bottom: 32px; }
        .ss-steps-title { font-size: 0.67rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(224,219,208,0.3); margin-bottom: 20px; }
        .ss-btn { display: flex; align-items: center; justify-content: center; gap: 10px; width: 100%; padding: 14px 24px; font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 600; border: none; border-radius: 2px; cursor: pointer; text-decoration: none; transition: all 0.2s; margin-bottom: 10px; }
        .ss-btn-gold { background: #c9a24a; color: #080c18; }
        .ss-btn-gold:hover { background: #d4b060; transform: translateY(-1px); }
        .ss-btn-outline { background: transparent; color: rgba(224,219,208,0.6); border: 1px solid rgba(255,255,255,0.1); }
        .ss-btn-outline:hover { border-color: rgba(255,255,255,0.2); color: #e0dbd0; }
        .ss-note { font-size: 0.75rem; color: rgba(224,219,208,0.25); margin-top: 20px; line-height: 1.6; }
      `}</style>

      <motion.div className="ss-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="ss-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c9a24a" strokeWidth="2"><polyline points="20,6 9,17 4,12"/></svg>
        </div>
        <h1 className="ss-h1">You're in. 🎉</h1>
        <p className="ss-sub">Your subscription is active. We'll add you to your WhatsApp groups within a few hours. You'll receive a confirmation email shortly.</p>
        <div className="ss-divider" />
        <div className="ss-steps-title">Join your groups now</div>
        <a href={JOBS_GROUP.link} target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-gold">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Join Jobs Australia Group
        </a>
        {cityGroup && (
          <a href={cityGroup.link} target="_blank" rel="noopener noreferrer" className="ss-btn ss-btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Join {cityGroup.name} Group
          </a>
        )}
        <p className="ss-note">Questions? Email us at <a href="mailto:info@whvguides.com.au" style={{ color: 'rgba(201,162,74,0.7)', textDecoration: 'none' }}>info@whvguides.com.au</a></p>
      </motion.div>
    </div>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const COMMUNITY = {
  name: 'WHV Community',
  image: '/groups/1.png',
  link: 'https://chat.whatsapp.com/ElCt7BWby5dLVyBR88QSMt',
  subtitle: 'Join the main community → access all 30+ groups inside',
};

const GROUPS = [
  { id: 2,  name: 'Buy & Sell Cars', sub: 'WA',  image: '/groups/2.png',  link: 'https://chat.whatsapp.com/DGIczqqiXno0wLfogGIDlz' },
  { id: 3,  name: 'Buy & Sell Cars', sub: 'VIC', image: '/groups/3.png',  link: 'https://chat.whatsapp.com/LR2yde6Qh0v4tEydVtbm7l' },
  { id: 4,  name: 'Buy & Sell Cars', sub: 'NSW', image: '/groups/4.png',  link: 'https://chat.whatsapp.com/KTascnKGydV3zzwuQmcM0k' },
  { id: 5,  name: 'Buy & Sell Cars', sub: 'QLD', image: '/groups/5.png',  link: 'https://chat.whatsapp.com/LCjzmSoc7p7EV8UgwAdZrY' },
  { id: 6,  name: 'Buy & Sell Cars', sub: 'NT',  image: '/groups/6.png',  link: 'https://chat.whatsapp.com/ENRHA4Ool6VL9khD5Xmhl9' },
  { id: 7,  name: 'Jobs',            sub: 'VIC', image: '/groups/7.png',  link: 'https://chat.whatsapp.com/LuBhOlkGR1TBZpMtbxf95w' },
  { id: 8,  name: 'Jobs',            sub: 'QLD', image: '/groups/8.png',  link: 'https://chat.whatsapp.com/EFUt5PNC6DUEyQS7NnGhfK' },
  { id: 9,  name: 'Jobs',            sub: 'NSW', image: '/groups/9.png',  link: 'https://chat.whatsapp.com/CXvugFq0gseLt652KB7xBx' },
  { id: 10, name: 'Jobs',            sub: 'NT',  image: '/groups/10.png', link: 'https://chat.whatsapp.com/I3EAEOU1aA0AGMsEUKtrCE' },
  { id: 11, name: 'Jobs',            sub: 'WA',  image: '/groups/11.png', link: 'https://chat.whatsapp.com/EFNv8KkoNyE3P0zuVsUuRx' },
  { id: 12, name: 'Jobs',            sub: 'TAS', image: '/groups/12.png', link: 'https://chat.whatsapp.com/Hz5xlMnMX0IFDPQw94LLSi' },
  { id: 13, name: 'Perth',           sub: '',    image: '/groups/13.png', link: 'https://chat.whatsapp.com/J3ZtoKZaPDa102k2Z3OGfA' },
  { id: 14, name: 'Cairns',          sub: '',    image: '/groups/14.png', link: 'https://chat.whatsapp.com/Ca8bZpQbYBKB9QcYC3aESb' },
  { id: 15, name: 'Airlie Beach',    sub: '',    image: '/groups/15.png', link: 'https://chat.whatsapp.com/Kigf29Qa0LZ1XfMLuVhtHD' },
  { id: 16, name: 'Melbourne',       sub: '',    image: '/groups/16.png', link: 'https://chat.whatsapp.com/IQ6lDihVfz41hQqXiax3Ou' },
  { id: 17, name: 'Sydney',          sub: '',    image: '/groups/17.png', link: 'https://chat.whatsapp.com/DpKVf4wK4dt3YJDaajOJxz' },
  { id: 18, name: 'Byron Bay',       sub: '',    image: '/groups/18.png', link: 'https://chat.whatsapp.com/Fjtl3dCTfkA1uquvTA92oR' },
  { id: 19, name: 'Brisbane',        sub: '',    image: '/groups/19.png', link: 'https://chat.whatsapp.com/CNZRIFjS4NQ464NE6IZIfq' },
  { id: 20, name: 'Tasmania',        sub: '',    image: '/groups/20.png', link: 'https://chat.whatsapp.com/G9vJ2AmnvOS3Km4GzHyZt4' },
  { id: 21, name: 'Broome',          sub: '',    image: '/groups/21.png', link: 'https://chat.whatsapp.com/Dx6QbCQNnJ7ANThbIA5EDp' },
  { id: 22, name: 'Port Douglas',    sub: '',    image: '/groups/22.png', link: 'https://chat.whatsapp.com/GJq86wxrehmDHmPdFHzwnq' },
  { id: 23, name: 'Darwin',          sub: '',    image: '/groups/23.png', link: 'https://chat.whatsapp.com/JY0Vdhwgld4LLUB9wnfWEi' },
  { id: 24, name: 'Gold Coast',      sub: '',    image: '/groups/24.png', link: 'https://chat.whatsapp.com/DoQzI0zfPYu26ze7D4XZ7d' },
  { id: 25, name: 'Sunshine Coast',  sub: '',    image: '/groups/25.png', link: 'https://chat.whatsapp.com/EQu5ZAxkSHa0Wh0zssEoVm' },
  { id: 26, name: 'Alice Springs',   sub: '',    image: '/groups/26.png', link: 'https://chat.whatsapp.com/CKPofzEh2TfIlsMRA4ZjUp' },
  { id: 27, name: 'Noosa',           sub: '',    image: '/groups/27.png', link: 'https://chat.whatsapp.com/K2f5uYAqtXL2ZXPg1McIuu' },
  { id: 28, name: 'East Coast',      sub: '',    image: '/groups/28.png', link: 'https://chat.whatsapp.com/FD0zdXMqy5dGgUnyWkMbeT' },
  { id: 29, name: 'Adelaide',        sub: '',    image: '/groups/29.png', link: 'https://chat.whatsapp.com/Jhl9CFbTtySHSEuJDMe3F6' },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function NavBar() {
  return (
    <nav aria-label="Site header" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '0 32px', pointerEvents: 'none',
    }}>
      <span style={{
        fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.22em',
        textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
        fontFamily: "'DM Sans', sans-serif",
      }}>
        For WHV Only
      </span>
    </nav>
  );
}

function GroupCircle({ group, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  return (
    <motion.a
      ref={ref}
      href={group.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Join ${group.name}${group.sub ? ' ' + group.sub : ''} WhatsApp group`}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group-circle"
    >
      <div className="group-circle-img">
        <img src={group.image} alt={group.name} loading="lazy" decoding="async" />
      </div>
      <div className="group-circle-label">
        <span className="group-circle-name">{group.name}</span>
        {group.sub && <span className="group-circle-sub">{group.sub}</span>}
      </div>
    </motion.a>
  );
}

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);
  return (
    <motion.a
      href="https://wa.me/message/5ZNAYAFQRV6ON1"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.8 }}
      transition={{ duration: 0.4 }}
      aria-label="Contact us on WhatsApp"
      style={{
        position: 'fixed', bottom: 28, right: 28, zIndex: 999,
        width: 56, height: 56, borderRadius: '50%',
        background: '#25D366', display: 'flex', alignItems: 'center',
        justifyContent: 'center', boxShadow: '0 4px 20px rgba(37,211,102,0.4)',
        textDecoration: 'none',
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </motion.a>
  );
}

export default function Home() {
  return (
    <main style={{ background: '#f2faf5', color: '#1a1208', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        h1, h2, h3 { font-weight: inherit; font-size: inherit; }

        .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; background: #1a4d2e; }
        .hero-bg { position: absolute; inset: 0; background: url('/hero.jpg') center 60%/cover no-repeat; animation: kenburns 20s ease-in-out infinite alternate; filter: brightness(0.7); }
        @keyframes kenburns { from { transform: scale(1); } to { transform: scale(1.06); } }
        .hero-content { position: relative; z-index: 2; padding: 64px 80px 40px; max-width: 760px; }
        .hero-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.2rem, 7vw, 6.5rem); font-weight: 400; line-height: 1.05; letter-spacing: -0.03em; color: #ffffff; margin-bottom: 20px; }
        .hero-h1 em { font-style: italic; color: rgba(255,255,255,0.65); }
        .hero-sub { font-size: clamp(0.9rem, 1.5vw, 1.05rem); font-weight: 300; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 28px; max-width: 560px; }
        .hero-sub strong { color: #ffffff; font-weight: 600; }
        .btn-join { display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: #fff; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 15px 32px; text-decoration: none; border-radius: 8px; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(37,211,102,0.25); }
        .btn-join:hover { background: #1fb857; transform: translateY(-2px); box-shadow: 0 6px 28px rgba(37,211,102,0.35); }
        .hero-proof { position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; padding: 16px 80px; }
        .proof-stat { padding: 0 36px; border-right: 1px solid rgba(255,255,255,0.3); }
        .proof-stat:last-child { border-right: none; }
        .proof-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: #ffffff; line-height: 1; }
        .proof-label { font-size: 0.66rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 4px; }

        .section-eyebrow { font-size: 0.66rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #1a9e52; margin-bottom: 10px; }
        .section-h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; letter-spacing: -0.025em; color: #1a1208; margin-bottom: 40px; line-height: 1.15; }

        .community-section { padding: 60px 40px 72px; text-align: center; }
        .community-section-inner { max-width: 1100px; margin: 0 auto; }

        .main-community-wrap { display: flex; flex-direction: column; align-items: center; margin-bottom: 60px; }
        .main-circle-link { display: flex; flex-direction: column; align-items: center; gap: 16px; text-decoration: none; }
        .main-circle-img { width: 150px; height: 150px; border-radius: 50%; overflow: hidden; box-shadow: 0 8px 36px rgba(0,0,0,0.16); transition: transform 0.2s, box-shadow 0.2s; }
        .main-circle-link:hover .main-circle-img { transform: scale(1.06); box-shadow: 0 12px 48px rgba(0,0,0,0.22); }
        .main-circle-img img { width: 100%; height: 100%; object-fit: contain; display: block; background: #fff; }
        .main-circle-name { font-family: 'Cormorant Garamond', serif; font-size: 1.7rem; font-weight: 600; color: #1a1208; }
        .main-circle-sub { font-size: 0.82rem; color: rgba(30,18,8,0.45); font-weight: 300; max-width: 300px; line-height: 1.6; }

        .groups-divider { display: flex; align-items: center; gap: 16px; margin-bottom: 44px; }
        .groups-divider-line { flex: 1; height: 1px; background: rgba(30,18,8,0.1); }
        .groups-divider-text { font-size: 0.62rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(30,18,8,0.28); white-space: nowrap; }

        .groups-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 36px 28px; }

        .group-circle { display: flex; flex-direction: column; align-items: center; gap: 10px; text-decoration: none; cursor: pointer; width: 96px; }
        .group-circle-img { width: 88px; height: 88px; border-radius: 50%; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.12); transition: transform 0.2s, box-shadow 0.2s; }
        .group-circle:hover .group-circle-img { transform: scale(1.09); box-shadow: 0 6px 24px rgba(0,0,0,0.2); }
        .group-circle-img img { width: 100%; height: 100%; object-fit: contain; display: block; background: #fff; }
        .group-circle-label { text-align: center; }
        .group-circle-name { display: block; font-size: 0.75rem; font-weight: 600; color: #1a1208; line-height: 1.3; }
        .group-circle-sub { display: block; font-size: 0.66rem; color: rgba(30,18,8,0.4); margin-top: 2px; }

        .home-footer { background: #e8f5ee; border-top: 1px solid rgba(30,18,8,0.1); padding: 32px 80px 24px; }
        .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 28px; }
        .footer-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 600; color: #1a1208; margin-bottom: 10px; }
        .footer-tagline { font-size: 0.83rem; font-weight: 300; color: rgba(30,18,8,0.45); line-height: 1.7; max-width: 260px; }
        .footer-col-title { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(30,18,8,0.35); margin-bottom: 16px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { font-size: 0.83rem; color: rgba(30,18,8,0.5); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 7px; }
        .footer-links a:hover { color: #1a1208; }
        .footer-bottom { display: flex; align-items: center; padding-top: 20px; border-top: 1px solid rgba(30,18,8,0.07); }
        .footer-copy { font-size: 0.72rem; color: rgba(30,18,8,0.25); }

        @media (max-width: 768px) {
          .hero { min-height: unset; }
          .hero-content { padding: 32px 24px 40px; }
          .hero-proof { padding: 22px 24px; display: grid !important; grid-template-columns: 1fr 1fr; row-gap: 24px; }
          .proof-stat { padding: 0; border-right: none !important; }
          .community-section { padding: 40px 20px 52px; }
          .groups-grid { gap: 28px 20px; }
          .group-circle { width: 80px; }
          .group-circle-img { width: 72px; height: 72px; }
          .home-footer { padding: 32px 24px 20px; }
          .footer-top { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>

      <NavBar />

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" role="img" aria-label="WHV travelers in Australia" />
        <div className="hero-content">
          <h1 className="hero-h1">Your community<br /><em>starts here.</em></h1>
          <p className="hero-sub">
            Join thousands of WHV travelers already connected across Australia. Find jobs, buy and sell cars, discover new cities, and connect with other backpackers — all through <strong>30+ active WhatsApp groups</strong>.
          </p>
          <a href="#community" className="btn-join">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Join the Community
          </a>
        </div>
        <div className="hero-proof" aria-label="Community statistics">
          <div className="proof-stat"><div className="proof-num">4,800+</div><div className="proof-label">WHV Members</div></div>
          <div className="proof-stat"><div className="proof-num">30+</div><div className="proof-label">Active Groups</div></div>
          <div className="proof-stat"><div className="proof-num">7</div><div className="proof-label">States & Territories</div></div>
          <div className="proof-stat"><div className="proof-num">Daily</div><div className="proof-label">New Opportunities</div></div>
        </div>
      </section>

      {/* COMMUNITY + GROUPS */}
      <section className="community-section" id="community" aria-labelledby="community-heading">
        <div className="community-section-inner">
          <div className="section-eyebrow">Community</div>
          <h2 className="section-h2" id="community-heading">Join us on WhatsApp</h2>

          <div className="main-community-wrap">
            <motion.a
              href={COMMUNITY.link}
              target="_blank"
              rel="noopener noreferrer"
              className="main-circle-link"
              aria-label="Join WHV Community on WhatsApp"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="main-circle-img">
                <img src={COMMUNITY.image} alt={COMMUNITY.name} />
              </div>
              <div className="main-circle-name">{COMMUNITY.name}</div>
              <div className="main-circle-sub">{COMMUNITY.subtitle}</div>
            </motion.a>
          </div>

          <div className="groups-divider">
            <div className="groups-divider-line" />
            <div className="groups-divider-text">All groups inside the community</div>
            <div className="groups-divider-line" />
          </div>

          <div className="groups-grid">
            {GROUPS.map((group, index) => (
              <GroupCircle key={group.id} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer" aria-label="Site footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">WHV Guides Australia</div>
            <p className="footer-tagline">The go-to WhatsApp community for Working Holiday Visa holders across Australia.</p>
          </div>
          <nav aria-label="Contact links">
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:info@whvguides.com.au">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@whvguides.com.au
              </a></li>
              <li><a href="https://www.tiktok.com/@whvguides" target="_blank" rel="noopener noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
                TikTok
              </a></li>
            </ul>
          </nav>
          <nav aria-label="Site links">
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li><a href="#community">Join Community</a></li>
              <li><a href="/hire">For Business</a></li>
            </ul>
          </nav>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© {new Date().getFullYear()} WHV Guides Australia. All rights reserved.</span>
        </div>
      </footer>

      <FloatingWhatsApp />
    </main>
  );
}

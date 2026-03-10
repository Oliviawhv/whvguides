import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const COMMUNITIES = [
  { id: 1, name: 'New South Wales',    groups: ['Buy & Sell Cars', 'Jobs in NSW', 'Sydney', 'Byron Bay'],                                                                            link: 'https://chat.whatsapp.com/Hw7DbXFsVhl3cFRzFEbyii', image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=75&fit=crop' },
  { id: 2, name: 'Victoria',           groups: ['Buy & Sell Cars', 'Jobs in Victoria', 'Melbourne'],                                                                                  link: 'https://chat.whatsapp.com/LoaUaSm0usW3SI4gOIPmsw', image: 'https://images.unsplash.com/photo-1545044846-351ba102b6d5?w=800&q=75&fit=crop' },
  { id: 3, name: 'Queensland',         groups: ['Buy & Sell Cars', 'Jobs in QLD', 'Gold Coast', 'Cairns', 'Noosa', 'Sunshine Coast', 'Airlie Beach', 'East Coast', 'Port Douglas'], link: 'https://chat.whatsapp.com/K1DynFTkcaZHxM2E7sIqU0', image: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=75&fit=crop' },
  { id: 4, name: 'Western Australia',  groups: ['Buy & Sell Cars', 'Jobs in WA', 'Perth', 'Broome'],                                                                                 link: 'https://chat.whatsapp.com/F7QNf3jOomoEE3aHicU5FB', image: 'https://images.unsplash.com/photo-1573935448851-09212b3a9c0c?w=800&q=75&fit=crop' },
  { id: 5, name: 'South Australia',    groups: ['Buy & Sell Cars', 'Jobs in SA', 'Adelaide'],                                                                                         link: 'https://chat.whatsapp.com/LwYrcbb2Aj7GRjZYq1GlYE', image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=75&fit=crop' },
  { id: 6, name: 'Northern Territory', groups: ['Buy & Sell Cars', 'Jobs in NT', 'Darwin', 'Alice Springs'],                                                                          link: 'https://chat.whatsapp.com/F0KaowZ2xci8CibSHMjJTP', image: 'https://images.unsplash.com/photo-1529108190281-9a4f620bc2d8?w=800&q=75&fit=crop' },
  { id: 7, name: 'Tasmania',           groups: ['Buy & Sell Cars', 'Jobs in TAS', 'Hobart', 'Launceston'],                                                                            link: 'https://chat.whatsapp.com/CBJo6KDLCoP3tB5Ll4U0rU', image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=75&fit=crop' },
];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function NavBar() {
  return (
    <nav aria-label="Site header" style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      height: 64, display: 'flex', alignItems: 'center', justifyContent: 'center',
      pointerEvents: 'none',
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

function CommunityCard({ community, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.5, delay: index === 0 ? 0 : index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ height: '420px', display: 'block' }}
    >
      <a
        href={community.link}
        target="_blank"
        rel="noopener noreferrer"
        className="community-card"
        aria-label={`Join ${community.name} WhatsApp community`}
      >
        <div className="card-img-wrap">
          <img src={community.image} alt={`${community.name} Australia`} className="card-img" loading={index === 0 ? 'eager' : 'lazy'} decoding="async" width="400" height="533" />
          <div className="card-overlay" />
        </div>
        <div className="card-body">
          <h3 className="card-name">{community.name}</h3>
          <ul className="card-groups" aria-label="Groups in this community">
            {community.groups.map((g) => (
              <li key={g} className="card-group-item">{g}</li>
            ))}
          </ul>
        </div>
        <div className="card-cta" aria-hidden="true">
          <span>Join Community</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </a>
    </motion.div>
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
    <main style={{ background: '#f2faf5', color: '#1a1208', fontFamily: "'DM Sans', sans-serif", minHeight: '100vh', direction: 'ltr' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        /* HERO */
        .hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; background: #1a4d2e; }
        .hero-bg { position: absolute; inset: 0; background: url('/hero.jpg') center 15%/cover no-repeat; animation: kenburns 20s ease-in-out infinite alternate; }
        @keyframes kenburns { from { transform: scale(1); } to { transform: scale(1.06); } }
        .hero-scrim { position: absolute; inset: 0; background: rgba(37,211,102,0.13); }
        .hero-content { position: relative; z-index: 2; padding: 80px 80px 56px; max-width: 760px; text-align: left; display: flex; flex-direction: column; align-items: flex-start; }
        .hero-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.2rem, 7vw, 6.5rem); font-weight: 400; line-height: 1.05; letter-spacing: -0.03em; color: #ffffff; margin-bottom: 20px; }
        .hero-h1 em { font-style: italic; color: rgba(255,255,255,0.65); }
        .hero-sub { font-size: clamp(0.9rem, 1.5vw, 1.05rem); font-weight: 300; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 36px; max-width: 560px; }
        .hero-sub strong { color: #ffffff; font-weight: 600; }
        .btn-join { display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: #fff; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 15px 32px; text-decoration: none; border-radius: 8px; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(37,211,102,0.25); }
        .btn-join:hover { background: #1fb857; transform: translateY(-2px); box-shadow: 0 6px 28px rgba(37,211,102,0.35); }
        .hero-proof { position: relative; z-index: 2; display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 22px 80px; white-space: nowrap; }
        .proof-stat { padding: 0 36px; border-right: 1px solid rgba(255,255,255,0.3); }
        .proof-stat:last-child { border-right: none; }
        .proof-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: #ffffff; line-height: 1; }
        .proof-label { font-size: 0.66rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 4px; }

        /* HOW IT WORKS */
        .how-section { background: #edf7f0; padding: 56px 80px; text-align: center; }
        .how-inner { max-width: 1200px; margin: 0 auto; padding-bottom: 56px; position: relative; }
        .how-inner::after { content: ''; position: absolute; bottom: 0; left: 5%; right: 5%; height: 1px; background: linear-gradient(to right, transparent 0%, rgba(30,18,8,0.07) 10%, rgba(30,18,8,0.07) 90%, transparent 100%); }
        .section-eyebrow { font-size: 0.66rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #1a9e52; margin-bottom: 10px; }
        .section-h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; letter-spacing: -0.025em; color: #1a1208; margin-bottom: 32px; line-height: 1.15; }
        .steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .step { display: flex; flex-direction: column; align-items: center; }
        .step-num { font-family: 'Cormorant Garamond', serif; font-size: 3.2rem; font-weight: 400; color: rgba(30,18,8,0.08); line-height: 1; margin-bottom: 12px; }
        .step-title { font-size: 1rem; font-weight: 600; color: #1a1208; margin-bottom: 8px; }
        .step-body { font-size: 0.87rem; font-weight: 300; color: rgba(30,18,8,0.55); line-height: 1.8; text-align: center; max-width: 260px; margin: 0 auto; }

        /* COMMUNITIES */
        .communities-section { padding: 40px 80px 64px; }
        .communities-header { max-width: 1400px; margin: 0 auto 24px; text-align: center; }
        .communities-subtitle { font-size: 0.87rem; font-weight: 300; color: rgba(30,18,8,0.5); line-height: 1.75; max-width: 560px; margin: 12px auto 0; }
        .communities-subtitle strong { color: #25D366; font-weight: 600; }
        .communities-grid { display: flex; flex-wrap: wrap; gap: 12px; max-width: 1400px; margin: 0 auto; justify-content: center; align-items: stretch; }
        .communities-grid > * { flex: 0 0 calc(25% - 9px); min-height: 420px; }

        /* CARD */
        .community-card { display: flex; flex-direction: column; text-decoration: none; color: inherit; position: relative; overflow: hidden; height: 420px; background: #0f1520; border-radius: 6px; transition: transform 0.2s; }
        .community-card:hover { transform: translateY(-4px); }
        .community-card:hover .card-img { transform: scale(1.05); }
        .community-card:focus-visible { outline: 3px solid #25D366; outline-offset: 2px; }
        .card-img-wrap { position: absolute; inset: 0; overflow: hidden; border-radius: 6px; }
        .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .card-overlay { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(6,8,14,0.25) 0%, rgba(6,8,14,0.6) 50%, rgba(6,8,14,0.92) 100%); }
        .card-body { position: absolute; top: 0; left: 0; right: 0; bottom: 48px; padding: 16px 16px 10px; display: flex; flex-direction: column; z-index: 1; }
        .card-name { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 600; color: #ffffff; margin-bottom: 10px; line-height: 1.2; flex-shrink: 0; }
        .card-groups { list-style: none; flex: 1; display: flex; flex-direction: column; justify-content: space-evenly; }
        .card-group-item { font-size: 0.74rem; font-weight: 400; color: rgba(255,255,255,0.65); padding-left: 12px; position: relative; text-align: left; }
        .card-group-item::before { content: "-"; position: absolute; left: 0; color: rgba(255,255,255,0.65); }
        .card-cta { position: absolute; bottom: 0; left: 0; right: 0; height: 48px; display: flex; align-items: center; padding: 0 16px; gap: 6px; font-size: 0.7rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #25D366; border-top: 1px solid rgba(255,255,255,0.08); background: rgba(6,8,14,0.65); transition: gap 0.2s; z-index: 1; }
        .community-card:hover .card-cta { gap: 10px; }

        /* FOOTER */
        .home-footer { background: #e8f5ee; border-top: 1px solid rgba(30,18,8,0.1); padding: 40px 80px 32px; }
        .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 36px; }
        .footer-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 600; color: #1a1208; margin-bottom: 10px; }
        .footer-tagline { font-size: 0.83rem; font-weight: 300; color: rgba(30,18,8,0.45); line-height: 1.7; max-width: 260px; }
        .footer-col-title { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(30,18,8,0.35); margin-bottom: 16px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { font-size: 0.83rem; color: rgba(30,18,8,0.5); text-decoration: none; transition: color 0.2s; display: flex; align-items: center; gap: 7px; }
        .footer-links a:hover { color: #1a1208; }
        .footer-bottom { display: flex; align-items: center; justify-content: center; padding-top: 28px; border-top: 1px solid rgba(30,18,8,0.07); }
        .footer-copy { font-size: 0.72rem; color: rgba(30,18,8,0.25); }

        /* RESPONSIVE */
        @media (max-width: 1024px) { .communities-grid > * { flex: 0 0 calc(50% - 6px); } }
        @media (max-width: 768px) {
          .hero-content { padding: 80px 24px 40px; }
          .hero-proof { padding: 22px 24px; display: grid !important; grid-template-columns: 1fr 1fr; row-gap: 24px; column-gap: 16px; white-space: normal; }
          .proof-stat { padding: 0; border-right: none !important; }
          .how-section { padding: 48px 24px; }
          .steps-grid { grid-template-columns: 1fr; gap: 32px; }
          .communities-section { padding: 32px 16px 48px; }
          .communities-grid { gap: 10px; }
          .communities-grid > * { flex: 0 0 100%; }
          .home-footer { padding: 40px 24px 28px; }
          .footer-top { grid-template-columns: 1fr; gap: 28px; }
        }
      `}</style>

      <NavBar />

      {/* HERO */}
      <section className="hero" aria-label="Hero">
        <div className="hero-bg" role="img" aria-label="WHV travelers on Australian beach" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="hero-h1">Your community<br /><em>starts here.</em></h1>
          <p className="hero-sub">
            Join thousands of WHV travelers already connected across Australia. Find jobs, buy and sell cars, discover new cities, and connect with other backpackers, all through <strong>30+ active WhatsApp groups</strong>.
          </p>
          <a href="#communities" className="btn-join">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Choose Your State
          </a>
        </div>
        <div className="hero-proof" aria-label="Community statistics">
          <div className="proof-stat"><div className="proof-num">4,800+</div><div className="proof-label">WHV Members</div></div>
          <div className="proof-stat"><div className="proof-num">30+</div><div className="proof-label">Active Groups</div></div>
          <div className="proof-stat"><div className="proof-num">7</div><div className="proof-label">States and Territories</div></div>
          <div className="proof-stat"><div className="proof-num">Daily</div><div className="proof-label">New Opportunities</div></div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works" aria-labelledby="how-heading">
        <div className="how-inner">
          <div className="section-eyebrow">How it works</div>
          <h2 className="section-h2" id="how-heading">Three steps to your<br />WHV network</h2>
          <div className="steps-grid">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Join your state community</div>
              <div className="step-body">Pick the state you are in or heading to. One tap connects you to a network of WHV travelers sharing jobs, tips, and local updates.</div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Explore your groups</div>
              <div className="step-body">Inside each community you will find groups for jobs, buying and selling cars, specific cities, farm work, and travel tips. Choose what matters to you.</div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Connect, work and explore</div>
              <div className="step-body">Post your availability, grab a job lead, find a car, or meet fellow backpackers who have been where you are going. Your Australian adventure starts here.</div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITIES */}
      <section className="communities-section" id="communities" aria-labelledby="communities-heading">
        <div className="communities-header">
          <div className="section-eyebrow">Communities</div>
          <h2 className="section-h2" id="communities-heading">Choose your state</h2>
          <p className="communities-subtitle">
            Each community connects you to all the WhatsApp groups in that state, including jobs, buying and selling cars, and groups for different cities. <strong>Join one community and get access to everything you need.</strong>
          </p>
        </div>
        <div className="communities-grid">
          {COMMUNITIES.map((c, i) => <CommunityCard key={c.id} community={c} index={i} />)}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer" aria-label="Site footer">
        <div className="footer-top">
          <div>
            <div className="footer-brand">WHV Guides Australia</div>
            <p className="footer-tagline">The go-to WhatsApp community for Working Holiday Visa holders across Australia.</p>
          </div>
          <nav aria-label="Site links">
            <div className="footer-col-title">Community</div>
            <ul className="footer-links">
              <li><a href="#communities">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
                Find Your State
              </a></li>
              <li><a href="#how-it-works">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                How It Works
              </a></li>
            </ul>
          </nav>
          <nav aria-label="Contact links">
            <div className="footer-col-title">Contact</div>
            <ul className="footer-links">
              <li><a href="mailto:info@whvguides.com.au">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@whvguides.com.au
              </a></li>
              <li><a href="https://www.tiktok.com/@whvguides?_r=1&_t=ZS-94YaXMHoswT" target="_blank" rel="noopener noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
                TikTok
              </a></li>
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

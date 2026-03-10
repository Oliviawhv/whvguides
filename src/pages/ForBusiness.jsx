import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const LOCATIONS = [
  { state: 'New South Wales', cities: 'Sydney · Byron Bay · Newcastle', count: '1,200+' },
  { state: 'Victoria', cities: 'Melbourne · Mildura · Shepparton', count: '980+' },
  { state: 'Queensland', cities: 'Gold Coast · Cairns · Airlie Beach · Noosa', count: '1,500+' },
  { state: 'Western Australia', cities: 'Perth · Broome · Kalgoorlie', count: '680+' },
  { state: 'South Australia', cities: 'Adelaide · Barossa Valley', count: '420+' },
  { state: 'Northern Territory', cities: 'Darwin · Alice Springs', count: '310+' },
  { state: 'Tasmania', cities: 'Hobart · Launceston', count: '280+' },
];

const FEATURES = [
  { num: '01', title: 'Direct WhatsApp — no algorithm', body: "Your job post lands directly in candidates' phone notifications. No feed. No algorithm. No buried posts. WhatsApp open rates are 5× higher than email and 10× higher than Facebook." },
  { num: '02', title: '100% verified WHV holders', body: 'Every member holds a valid Working Holiday Visa. English-speaking, legally authorised to work, and actively looking. Zero irrelevant applicants.' },
  { num: '03', title: 'Responses within the hour', body: 'Most job posts receive multiple genuine replies within 60 minutes. Fill urgent shifts the same day you post.' },
  { num: '04', title: 'No middleman. No commissions.', body: 'Candidates message you directly on WhatsApp. No recruitment agency fees, no third-party platforms. Just $9 per week.' },
];

const STEPS = [
  { label: 'Subscribe', body: 'Sign up for $9/week. No lock-in contracts, cancel anytime.' },
  { label: 'Get added', body: 'We manually add your WhatsApp number to the Jobs group and your chosen city group.' },
  { label: 'Post your job', body: 'Write a brief message describing the role, pay, and start date. Post it yourself, anytime.' },
  { label: 'Hire', body: 'Receive direct messages from candidates. Interview and hire — all on WhatsApp.' },
];

const INCLUSIONS = [
  'National Jobs WhatsApp group — post anytime',
  '1 state or city community of your choice',
  'Unlimited job posts — as often as you need',
  'Candidates message you directly on WhatsApp',
  'Job post writing tips from our team',
  'Responses typically within 60 minutes',
  'Zero recruitment commissions or agency fees',
  'Cancel anytime — no questions asked',
];

const COMPARISON = [
  { label: 'Verified WHV holders only', them1: '✗ No verification', them2: '✗ Anyone applies', us: '✓ Every member verified' },
  { label: 'Time to first response', them1: '✗ Days or never', them2: '✗ 3–7 days', us: '✓ Under 1 hour' },
  { label: 'Cost per week', them1: 'Free (worthless)', them2: '✗ $200–$500/post', us: '✓ $9 — unlimited posts' },
  { label: 'Direct candidate contact', them1: 'Chaotic / spam', them2: '✗ Via platform only', us: '✓ Straight to WhatsApp' },
  { label: 'Active members in Australia', them1: '✗ Mostly inactive', them2: 'Mixed', us: '✓ 4,800+ active now' },
  { label: 'Cancel anytime', them1: 'N/A', them2: '✗ Contracts', us: '✓ One email to cancel' },
];

export default function ForBusiness() {
  const navigate = useNavigate();

  return (
    <main className="fb-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .fb-root { font-family: 'DM Sans', sans-serif; background: #06080f; color: #e0dbd0; min-height: 100vh; overflow-x: hidden; }

        /* NAV */
        .fb-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 22px 64px; display: flex; align-items: center; justify-content: space-between; background: linear-gradient(to bottom, rgba(6,8,15,0.92) 0%, transparent 100%); }
        .fb-nav-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #f5f0e8; text-decoration: none; }
        .fb-nav-cta { background: #c9a24a; color: #06080f; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 24px; border-radius: 2px; text-decoration: none; transition: background 0.2s; }
        .fb-nav-cta:hover { background: #d4b060; }

        /* HERO */
        .fb-hero { min-height: 100vh; display: grid; place-items: center; position: relative; overflow: hidden; padding: 120px 64px 100px; }
        .fb-hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 90% 70% at 50% 0%, rgba(201,162,74,0.08) 0%, transparent 55%), linear-gradient(180deg, #0d1525 0%, #06080f 100%); }
        .fb-hero-line { position: absolute; top: 0; left: 50%; transform: translateX(-50%); width: 1px; height: 100px; background: linear-gradient(to bottom, transparent, #c9a24a, transparent); animation: lineDrop 1.4s ease forwards; }
        @keyframes lineDrop { from { opacity: 0; height: 0; } to { opacity: 1; height: 100px; } }
        .fb-hero-inner { position: relative; max-width: 900px; text-align: center; z-index: 1; }
        .fb-hero-label { display: inline-flex; align-items: center; gap: 12px; font-size: 0.65rem; font-weight: 600; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a24a; margin-bottom: 32px; animation: fadeUp 0.8s 0.3s both; }
        .fb-hero-label span { display: block; width: 36px; height: 1px; background: #c9a24a; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: translateY(0); } }
        .fb-hero-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.6rem, 8vw, 7.5rem); font-weight: 300; line-height: 0.95; letter-spacing: -0.03em; color: #f5f0e8; margin-bottom: 28px; animation: fadeUp 0.8s 0.5s both; }
        .fb-hero-h1 em { font-style: italic; color: #c9a24a; display: block; }
        .fb-hero-sub { font-size: clamp(1rem, 1.6vw, 1.15rem); font-weight: 300; color: rgba(245,240,232,0.5); line-height: 1.8; max-width: 560px; margin: 0 auto 48px; animation: fadeUp 0.8s 0.7s both; }
        .fb-hero-sub strong { color: #f5f0e8; font-weight: 500; }
        .fb-hero-actions { display: flex; align-items: center; justify-content: center; gap: 24px; animation: fadeUp 0.8s 0.9s both; flex-wrap: wrap; }
        .fb-btn-gold { display: inline-flex; align-items: center; justify-content: center; gap: 10px; background: #c9a24a; color: #06080f; font-size: 0.8rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 18px 48px; border: none; border-radius: 2px; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; box-shadow: 0 0 40px rgba(201,162,74,0.2); }
        .fb-btn-gold:hover { background: #d4b060; transform: translateY(-2px); box-shadow: 0 8px 40px rgba(201,162,74,0.35); }
        .fb-btn-gold:focus-visible { outline: 3px solid #f5f0e8; outline-offset: 3px; }
        .fb-btn-ghost { color: rgba(245,240,232,0.5); font-size: 0.82rem; text-decoration: none; border-bottom: 1px solid rgba(245,240,232,0.2); padding-bottom: 2px; transition: color 0.2s, border-color 0.2s; }
        .fb-btn-ghost:hover { color: #f5f0e8; border-color: rgba(245,240,232,0.5); }

        /* HERO PROOF BAR */
        .fb-proof { position: absolute; bottom: 0; left: 0; right: 0; display: flex; border-top: 1px solid rgba(255,255,255,0.06); animation: fadeUp 0.8s 1.1s both; }
        .fb-proof-item { flex: 1; padding: 24px 32px; border-right: 1px solid rgba(255,255,255,0.06); text-align: center; }
        .fb-proof-item:last-child { border-right: none; }
        .fb-proof-n { font-family: 'Cormorant Garamond', serif; font-size: 2rem; color: #f5f0e8; line-height: 1; }
        .fb-proof-l { font-size: 0.62rem; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(245,240,232,0.28); margin-top: 5px; }

        /* DIVIDER */
        .fb-divider { height: 1px; background: linear-gradient(90deg, transparent, rgba(201,162,74,0.18) 30%, rgba(201,162,74,0.18) 70%, transparent); }

        /* PAIN */
        .fb-pain { background: #090c16; padding: 100px 64px; position: relative; overflow: hidden; }
        .fb-pain::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 3px; background: linear-gradient(to bottom, transparent, rgba(201,162,74,0.5), transparent); }
        .fb-pain-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .fb-eyebrow { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #c9a24a; margin-bottom: 16px; }
        .fb-h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.4rem); font-weight: 300; line-height: 1.1; color: #f5f0e8; margin-bottom: 20px; }
        .fb-h2 em { font-style: italic; color: rgba(245,240,232,0.3); }
        .fb-lead { font-size: 0.95rem; font-weight: 300; color: rgba(245,240,232,0.5); line-height: 1.85; }
        .fb-lead strong { color: #f5f0e8; font-weight: 500; }
        .fb-pain-cards { display: flex; flex-direction: column; gap: 2px; }
        .fb-pain-card { background: rgba(255,255,255,0.025); border: 1px solid rgba(255,255,255,0.05); padding: 24px 28px; display: flex; align-items: flex-start; gap: 18px; transition: border-color 0.3s; }
        .fb-pain-card:hover { border-color: rgba(201,162,74,0.2); }
        .fb-pain-icon { font-size: 1.2rem; flex-shrink: 0; }
        .fb-pain-title { font-size: 0.9rem; font-weight: 600; color: #f5f0e8; margin-bottom: 5px; }
        .fb-pain-body { font-size: 0.82rem; font-weight: 300; color: rgba(245,240,232,0.45); line-height: 1.65; }

        /* QUOTE */
        .fb-quote { padding: 96px 64px; text-align: center; background: linear-gradient(180deg, #06080f 0%, #0c1020 100%); }
        .fb-quote-mark { font-family: 'Cormorant Garamond', serif; font-size: 7rem; line-height: 0.5; color: rgba(201,162,74,0.12); margin-bottom: 12px; }
        .fb-quote-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.6rem, 3.5vw, 2.8rem); font-weight: 300; font-style: italic; color: rgba(245,240,232,0.3); line-height: 1.3; max-width: 720px; margin: 0 auto 16px; }
        .fb-quote-text strong { color: #f5f0e8; font-style: normal; font-weight: 400; }
        .fb-quote-source { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(245,240,232,0.2); }

        /* FEATURES */
        .fb-section { padding: 100px 64px; max-width: 1200px; margin: 0 auto; }
        .fb-section-top { text-align: center; margin-bottom: 64px; }
        .fb-section-sub { font-size: 0.95rem; font-weight: 300; color: rgba(245,240,232,0.45); line-height: 1.8; max-width: 480px; margin: 14px auto 0; }
        .fb-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: rgba(255,255,255,0.04); }
        .fb-feature { background: #06080f; padding: 44px; position: relative; overflow: hidden; transition: background 0.3s; }
        .fb-feature::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(to right, transparent, #c9a24a, transparent); transform: scaleX(0); transition: transform 0.4s; }
        .fb-feature:hover { background: rgba(201,162,74,0.03); }
        .fb-feature:hover::after { transform: scaleX(1); }
        .fb-feat-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; color: rgba(201,162,74,0.1); line-height: 1; margin-bottom: 18px; }
        .fb-feat-title { font-size: 1rem; font-weight: 600; color: #f5f0e8; margin-bottom: 10px; }
        .fb-feat-body { font-size: 0.87rem; font-weight: 300; color: rgba(245,240,232,0.45); line-height: 1.8; }

        /* COMPARISON */
        .fb-comp-wrap { background: #090c16; padding: 100px 64px; }
        .fb-comp-inner { max-width: 1000px; margin: 0 auto; }
        .fb-comp-top { text-align: center; margin-bottom: 52px; }
        .fb-comp-table { width: 100%; border-collapse: collapse; }
        .fb-comp-table th { padding: 14px 24px; text-align: left; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; }
        .fb-comp-table th:first-child { color: rgba(245,240,232,0.25); width: 38%; }
        .fb-comp-table th.col-them { color: rgba(245,240,232,0.25); }
        .fb-comp-table th.col-us { color: #c9a24a; background: rgba(201,162,74,0.06); }
        .fb-comp-table td { padding: 16px 24px; font-size: 0.86rem; font-weight: 300; border-top: 1px solid rgba(255,255,255,0.05); }
        .fb-comp-table td:first-child { color: rgba(245,240,232,0.45); }
        .fb-comp-table td.col-them { color: rgba(245,240,232,0.28); }
        .fb-comp-table td.col-us { color: #f5f0e8; background: rgba(201,162,74,0.04); font-weight: 500; }

        /* COVERAGE */
        .fb-coverage { padding: 100px 64px; max-width: 1200px; margin: 0 auto; }
        .fb-cov-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; background: rgba(255,255,255,0.04); margin-top: 48px; }
        .fb-cov-card { background: #06080f; padding: 28px 24px; transition: background 0.3s; }
        .fb-cov-card:hover { background: rgba(201,162,74,0.04); }
        .fb-cov-n { font-family: 'Cormorant Garamond', serif; font-size: 2.4rem; color: #c9a24a; line-height: 1; margin-bottom: 7px; }
        .fb-cov-state { font-size: 0.87rem; font-weight: 600; color: #f5f0e8; margin-bottom: 5px; }
        .fb-cov-cities { font-size: 0.75rem; font-weight: 300; color: rgba(245,240,232,0.28); line-height: 1.6; }

        /* STEPS */
        .fb-steps-wrap { background: #0c1020; padding: 100px 64px; }
        .fb-steps-inner { max-width: 1100px; margin: 0 auto; }
        .fb-steps-top { text-align: center; margin-bottom: 64px; }
        .fb-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
        .fb-steps-grid::before { content: ''; position: absolute; top: 17px; left: 12.5%; right: 12.5%; height: 1px; background: linear-gradient(to right, transparent, rgba(201,162,74,0.2) 20%, rgba(201,162,74,0.2) 80%, transparent); }
        .fb-step { padding: 0 20px; text-align: center; }
        .fb-step-dot { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(201,162,74,0.4); background: #0c1020; display: flex; align-items: center; justify-content: center; margin: 0 auto 22px; font-size: 0.72rem; font-weight: 600; color: #c9a24a; position: relative; z-index: 1; }
        .fb-step-label { font-size: 0.95rem; font-weight: 600; color: #f5f0e8; margin-bottom: 10px; }
        .fb-step-body { font-size: 0.82rem; font-weight: 300; color: rgba(245,240,232,0.4); line-height: 1.7; }

        /* PRICING */
        .fb-pricing-wrap { padding: 100px 64px; max-width: 1000px; margin: 0 auto; }
        .fb-pricing-top { text-align: center; margin-bottom: 52px; }
        .fb-pricing-card { display: grid; grid-template-columns: 1fr 1.5fr; border: 1px solid rgba(201,162,74,0.2); background: #090c16; position: relative; overflow: hidden; }
        .fb-pricing-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(to right, transparent, #c9a24a 30%, #c9a24a 70%, transparent); }
        .fb-price-left { padding: 52px 44px; border-right: 1px solid rgba(255,255,255,0.06); }
        .fb-price-badge { display: inline-block; background: rgba(201,162,74,0.12); border: 1px solid rgba(201,162,74,0.28); color: #c9a24a; font-size: 0.62rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 2px; margin-bottom: 26px; }
        .fb-price-amount { display: flex; align-items: baseline; gap: 6px; margin-bottom: 6px; }
        .fb-price-currency { font-size: 1.3rem; color: rgba(245,240,232,0.4); margin-top: 14px; }
        .fb-price-num { font-family: 'Cormorant Garamond', serif; font-size: 5rem; font-weight: 300; color: #f5f0e8; line-height: 1; }
        .fb-price-period { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #c9a24a; margin-bottom: 24px; }
        .fb-price-note { font-size: 0.84rem; font-weight: 300; color: rgba(245,240,232,0.4); line-height: 1.8; }
        .fb-price-right { padding: 52px 44px; }
        .fb-price-right-title { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(245,240,232,0.25); margin-bottom: 26px; }
        .fb-inclusions { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
        .fb-inclusions li { display: flex; align-items: flex-start; gap: 11px; font-size: 0.87rem; font-weight: 300; color: rgba(245,240,232,0.65); line-height: 1.5; }
        .fb-check { width: 15px; height: 15px; flex-shrink: 0; margin-top: 2px; color: #c9a24a; }
        .fb-price-guarantee { text-align: center; margin-top: 12px; font-size: 0.73rem; color: rgba(245,240,232,0.2); }

        /* FINAL CTA */
        .fb-final { padding: 140px 64px; text-align: center; position: relative; overflow: hidden; }
        .fb-final-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(201,162,74,0.09) 0%, transparent 70%); pointer-events: none; }
        .fb-final-inner { position: relative; max-width: 620px; margin: 0 auto; }
        .fb-final-h { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 6vw, 5.2rem); font-weight: 300; line-height: 1.0; color: #f5f0e8; margin-bottom: 22px; }
        .fb-final-h em { font-style: italic; color: #c9a24a; }
        .fb-final-sub { font-size: 1rem; font-weight: 300; color: rgba(245,240,232,0.45); line-height: 1.8; margin-bottom: 44px; }
        .fb-final-fine { margin-top: 18px; font-size: 0.72rem; color: rgba(245,240,232,0.2); letter-spacing: 0.04em; }

        /* FOOTER */
        .fb-footer { background: #030508; border-top: 1px solid rgba(255,255,255,0.05); padding: 24px 64px; display: flex; align-items: center; justify-content: space-between; }
        .fb-footer-copy { font-size: 0.72rem; color: rgba(245,240,232,0.2); }
        .fb-footer-links { display: flex; gap: 28px; list-style: none; }
        .fb-footer-links a { font-size: 0.72rem; color: rgba(245,240,232,0.25); text-decoration: none; transition: color 0.2s; }
        .fb-footer-links a:hover { color: rgba(245,240,232,0.5); }
        .fb-footer-links a:focus-visible { outline: 2px solid #c9a24a; outline-offset: 2px; border-radius: 2px; }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .fb-cov-grid { grid-template-columns: repeat(2, 1fr); }
          .fb-pain-inner { grid-template-columns: 1fr; gap: 48px; }
        }
        @media (max-width: 768px) {
          .fb-nav { padding: 18px 24px; }
          .fb-hero { padding: 100px 24px 80px; }
          .fb-proof { display: grid; grid-template-columns: 1fr 1fr; }
          .fb-proof-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .fb-pain { padding: 72px 24px; }
          .fb-quote { padding: 72px 24px; }
          .fb-section { padding: 72px 24px; }
          .fb-features { grid-template-columns: 1fr; }
          .fb-comp-wrap { padding: 72px 24px; }
          .fb-coverage { padding: 72px 24px; }
          .fb-cov-grid { grid-template-columns: 1fr 1fr; }
          .fb-steps-wrap { padding: 72px 24px; }
          .fb-steps-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .fb-steps-grid::before { display: none; }
          .fb-pricing-wrap { padding: 72px 24px; }
          .fb-pricing-card { grid-template-columns: 1fr; }
          .fb-price-left { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 40px 32px; }
          .fb-price-right { padding: 40px 32px; }
          .fb-final { padding: 100px 24px; }
          .fb-footer { padding: 20px 24px; flex-direction: column; gap: 14px; align-items: flex-start; }
          .fb-comp-table { font-size: 0.78rem; }
          .fb-comp-table th, .fb-comp-table td { padding: 12px 14px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="fb-nav" aria-label="Employer page header">
        <Link to="/" className="fb-nav-brand">WHV Guides</Link>
        <button onClick={() => navigate('/get-started')} className="fb-nav-cta">Start Hiring — $9/wk</button>
      </nav>

      {/* HERO */}
      <section className="fb-hero" aria-label="Hero">
        <div className="fb-hero-bg" aria-hidden="true" />
        <div className="fb-hero-line" aria-hidden="true" />
        <div className="fb-hero-inner">
          <div className="fb-hero-label" aria-label="For Australian Employers">
            <span aria-hidden="true" />For Australian Employers<span aria-hidden="true" />
          </div>
          <h1 className="fb-hero-h1">Find WHV workers<em>within the hour.</em></h1>
          <p className="fb-hero-sub">
            4,800+ verified Working Holiday Visa holders across every Australian state. <strong>All active. All legally authorised. All looking for work right now.</strong>
          </p>
          <div className="fb-hero-actions">
            <button onClick={() => navigate('/get-started')} className="fb-btn-gold">Start Hiring — $9 / week</button>
            <a href="#how-it-works" className="fb-btn-ghost">See how it works ↓</a>
          </div>
        </div>
        <div className="fb-proof" aria-label="Key stats">
          <div className="fb-proof-item"><div className="fb-proof-n">4,800+</div><div className="fb-proof-l">Verified WHV workers</div></div>
          <div className="fb-proof-item"><div className="fb-proof-n">&lt;1hr</div><div className="fb-proof-l">Avg. first response</div></div>
          <div className="fb-proof-item"><div className="fb-proof-n">7</div><div className="fb-proof-l">States covered</div></div>
          <div className="fb-proof-item"><div className="fb-proof-n">$9</div><div className="fb-proof-l">Per week, cancel anytime</div></div>
        </div>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* PAIN */}
      <section className="fb-pain" aria-labelledby="pain-heading">
        <div className="fb-pain-inner">
          <Reveal>
            <div className="fb-eyebrow">The problem</div>
            <h2 className="fb-h2" id="pain-heading">Finding reliable WHV workers<br /><em>has never been harder.</em></h2>
            <p className="fb-lead">
              Facebook groups are full of spam, fake profiles, and people who left Australia months ago. Job boards charge hundreds for applications from people not even on a working visa. You post, you wait, you get nothing — or worse, people who cannot legally work.
              <br /><br />
              You need workers who are <strong>here, ready, and authorised</strong>. That is exactly who we have.
            </p>
          </Reveal>
          <div className="fb-pain-cards">
            {[
              { icon: '💀', title: 'Facebook groups are dead', body: 'Overcrowded with spam, scammers, and members who haven\'t been in Australia for years. Your post disappears in minutes.' },
              { icon: '💸', title: 'Job boards cost a fortune', body: '$200–$500 per post, with no guarantee the applicants hold a WHV or can start this week.' },
              { icon: '⏳', title: 'You need someone today', body: 'Shift coverage, harvest season, summer rush — you cannot wait days for applications that may never come.' },
              { icon: '🚫', title: 'Visa compliance is your risk', body: 'Hiring without the right visa can cost thousands in fines. You need workers verified and legal from day one.' },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.07}>
                <div className="fb-pain-card">
                  <div className="fb-pain-icon" aria-hidden="true">{c.icon}</div>
                  <div>
                    <div className="fb-pain-title">{c.title}</div>
                    <div className="fb-pain-body">{c.body}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* QUOTE */}
      <section className="fb-quote" aria-label="Employer testimonial">
        <div className="fb-quote-mark" aria-hidden="true">"</div>
        <p className="fb-quote-text">
          "I posted on Facebook three days ago.<br />
          <strong>Still waiting for one decent application."</strong>
        </p>
        <p className="fb-quote-source">— Hostel manager, Cairns</p>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* WHY IT WORKS */}
      <section className="fb-section" aria-labelledby="solution-heading">
        <Reveal>
          <div className="fb-section-top">
            <div className="fb-eyebrow">The solution</div>
            <h2 className="fb-h2" id="solution-heading">Direct access to workers<br />who are <em>ready right now.</em></h2>
            <p className="fb-section-sub">30+ active WhatsApp groups across Australia — real verification, no spam, no inactive accounts.</p>
          </div>
        </Reveal>
        <div className="fb-features">
          {FEATURES.map((f, i) => (
            <Reveal key={f.num} delay={i * 0.07}>
              <div className="fb-feature">
                <div className="fb-feat-num" aria-hidden="true">{f.num}</div>
                <div className="fb-feat-title">{f.title}</div>
                <div className="fb-feat-body">{f.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* COMPARISON */}
      <section className="fb-comp-wrap" aria-labelledby="comp-heading">
        <div className="fb-comp-inner">
          <Reveal>
            <div className="fb-comp-top">
              <div className="fb-eyebrow">vs. the alternatives</div>
              <h2 className="fb-h2" id="comp-heading">Why employers switch<br />to <em>WHV Guides.</em></h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <table className="fb-comp-table" role="table" aria-label="Comparison table">
              <thead>
                <tr>
                  <th scope="col" />
                  <th scope="col" className="col-them">Facebook Groups</th>
                  <th scope="col" className="col-them">Job Boards</th>
                  <th scope="col" className="col-us">WHV Guides</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(row => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className="col-them">{row.them1}</td>
                    <td className="col-them">{row.them2}</td>
                    <td className="col-us">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* COVERAGE */}
      <section className="fb-coverage" aria-labelledby="coverage-heading">
        <Reveal>
          <div className="fb-eyebrow">Coverage</div>
          <h2 className="fb-h2" id="coverage-heading">Wherever you are,<br /><em>we have workers nearby.</em></h2>
        </Reveal>
        <div className="fb-cov-grid">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.state} delay={i * 0.06}>
              <div className="fb-cov-card">
                <div className="fb-cov-n">{l.count}</div>
                <div className="fb-cov-state">{l.state}</div>
                <div className="fb-cov-cities">{l.cities}</div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.42}>
            <div className="fb-cov-card" style={{ background: 'rgba(201,162,74,0.04)', border: '1px dashed rgba(201,162,74,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a24a', marginBottom: 8 }}>National</div>
                <div style={{ fontSize: '0.88rem', color: '#f5f0e8', fontWeight: 500 }}>Jobs group included</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.25)', marginTop: 4 }}>All states · All industries</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* HOW IT WORKS */}
      <section className="fb-steps-wrap" id="how-it-works" aria-labelledby="steps-heading">
        <div className="fb-steps-inner">
          <Reveal>
            <div className="fb-steps-top">
              <div className="fb-eyebrow">Process</div>
              <h2 className="fb-h2" id="steps-heading">Up and running<br /><em>in under 10 minutes.</em></h2>
            </div>
          </Reveal>
          <div className="fb-steps-grid">
            {STEPS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="fb-step">
                  <div className="fb-step-dot" aria-label={`Step ${i + 1}`}>{i + 1}</div>
                  <div className="fb-step-label">{s.label}</div>
                  <div className="fb-step-body">{s.body}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="fb-divider" aria-hidden="true" />

      {/* PRICING */}
      <section className="fb-pricing-wrap" id="pricing" aria-labelledby="pricing-heading">
        <Reveal>
          <div className="fb-pricing-top">
            <div className="fb-eyebrow">Pricing</div>
            <h2 className="fb-h2" id="pricing-heading">Simple, honest pricing.<br /><em>No hidden fees.</em></h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="fb-pricing-card">
            <div className="fb-price-left">
              <div className="fb-price-badge">Most popular</div>
              <div className="fb-price-amount">
                <span className="fb-price-currency">$</span>
                <span className="fb-price-num">9</span>
              </div>
              <div className="fb-price-period">AUD per week · billed weekly</div>
              <p className="fb-price-note">
                Less than a coffee a day to access Australia's largest network of verified, job-ready WHV workers. No lock-in. No setup fees. No commissions per hire.
                <br /><br />
                Cancel anytime with a single email to info@whvguides.com.au.
              </p>
            </div>
            <div className="fb-price-right">
              <div className="fb-price-right-title">Everything included</div>
              <ul className="fb-inclusions">
                {INCLUSIONS.map(item => (
                  <li key={item}>
                    <svg className="fb-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/get-started')} className="fb-btn-gold" style={{ width: '100%' }}>
                Start Hiring Today →
              </button>
              <p className="fb-price-guarantee">🔒 Secured payment · Cancel anytime by email</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="fb-final" aria-label="Final call to action">
        <div className="fb-final-glow" aria-hidden="true" />
        <Reveal className="fb-final-inner">
          <h2 className="fb-final-h">Stop waiting.<br /><em>Start hiring.</em></h2>
          <p className="fb-final-sub">
            Every day you spend waiting for Facebook applications is a day your vacancy goes unfilled. WHV Guides gets you in front of thousands of motivated, verified, work-ready travelers — for less than a coffee a day.
          </p>
          <button onClick={() => navigate('/get-started')} className="fb-btn-gold">
            Start Hiring — $9 / week
          </button>
          <p className="fb-final-fine">No contracts · Cancel anytime · info@whvguides.com.au</p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="fb-footer" aria-label="Site footer">
        <span className="fb-footer-copy">© {new Date().getFullYear()} WHV Guides Australia · info@whvguides.com.au</span>
        <ul className="fb-footer-links">
          <li><Link to="/">WHV Community</Link></li>
          <li><a href="mailto:info@whvguides.com.au">Contact</a></li>
          <li><Link to="/cancel">Cancel Subscription</Link></li>
        </ul>
      </footer>
    </main>
  );
}

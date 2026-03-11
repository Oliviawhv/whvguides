import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={fadeUp} transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }} className={className}>
      {children}
    </motion.div>
  );
}

const LOCATIONS = [
  { state: 'New South Wales', cities: 'Sydney - Byron Bay - Newcastle', count: '1,200+' },
  { state: 'Victoria', cities: 'Melbourne - Mildura - Shepparton', count: '980+' },
  { state: 'Queensland', cities: 'Gold Coast - Cairns - Airlie Beach - Noosa', count: '1,500+' },
  { state: 'Western Australia', cities: 'Perth - Broome - Kalgoorlie', count: '680+' },
  { state: 'South Australia', cities: 'Adelaide - Barossa Valley', count: '420+' },
  { state: 'Northern Territory', cities: 'Darwin - Alice Springs', count: '310+' },
  { state: 'Tasmania', cities: 'Hobart - Launceston', count: '280+' },
];

const FEATURES = [
  { num: '01', title: 'Direct WhatsApp - no algorithm', body: "Your job post lands directly in candidates' phone notifications. No feed. No algorithm. No buried posts. WhatsApp open rates are 5x higher than email and 10x higher than Facebook." },
  { num: '02', title: '100% verified WHV holders', body: 'Every member holds a valid Working Holiday Visa. English-speaking, legally authorised to work, and actively looking. Zero irrelevant applicants.' },
  { num: '03', title: 'Responses within the hour', body: 'Most job posts receive multiple genuine replies within 60 minutes. Fill urgent shifts the same day you post.' },
  { num: '04', title: 'No middleman. No commissions.', body: 'Candidates message you directly on WhatsApp. No recruitment agency fees, no third-party platforms. Just $9 per week.' },
];

const STEPS = [
  { label: 'Subscribe', body: 'Sign up for $9/week. No lock-in contracts, cancel anytime.' },
  { label: 'Get added', body: 'We manually add your WhatsApp number to the Jobs group and your chosen city group.' },
  { label: 'Post your job', body: 'Write a brief message describing the role, pay, and start date. Post it yourself, anytime.' },
  { label: 'Hire', body: 'Receive direct messages from candidates. Interview and hire - all on WhatsApp.' },
];

const INCLUSIONS = [
  'National Jobs WhatsApp group - post anytime',
  '1 state or city community of your choice',
  'Unlimited job posts - as often as you need',
  'Candidates message you directly on WhatsApp',
  'Job post writing tips from our team',
  'Responses typically within 60 minutes',
  'Zero recruitment commissions or agency fees',
  'Cancel anytime - no questions asked',
];

const COMPARISON = [
  { label: 'Verified WHV holders only', them1: 'No verification', them2: 'Anyone applies', us: 'Every member verified' },
  { label: 'Time to first response', them1: 'Days or never', them2: '3-7 days', us: 'Under 1 hour' },
  { label: 'Cost per week', them1: 'Free (worthless)', them2: '$200-$500/post', us: '$9 - unlimited posts' },
  { label: 'Direct candidate contact', them1: 'Chaotic / spam', them2: 'Via platform only', us: 'Straight to WhatsApp' },
  { label: 'Active members in Australia', them1: 'Mostly inactive', them2: 'Mixed', us: '4,800+ active now' },
  { label: 'Cancel anytime', them1: 'N/A', them2: 'Contracts', us: 'One email to cancel' },
];

export default function ForBusiness() {
  const navigate = useNavigate();

  return (
    <main className="fb-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .fb-root { font-family: 'DM Sans', sans-serif; background: #f2faf5; color: #1a1208; min-height: 100vh; overflow-x: hidden; }

        /* NAV */
        .fb-nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; height: 64px; display: flex; align-items: center; justify-content: space-between; padding: 0 64px; background: transparent; }
        .fb-nav-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 600; color: #1a1208; text-decoration: none; }
        .fb-nav-label { font-size: 0.7rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: rgba(255,255,255,0.85); position: absolute; left: 50%; transform: translateX(-50%); pointer-events: none; text-shadow: 0 1px 4px rgba(0,0,0,0.5); }
        .fb-nav-cta { background: #25D366; color: #fff; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; padding: 10px 24px; border-radius: 8px; text-decoration: none; border: none; cursor: pointer; transition: background 0.2s; font-family: 'DM Sans', sans-serif; }
        .fb-nav-cta:hover { background: #1fb857; }

        /* HERO */
        .fb-hero { position: relative; min-height: 100vh; display: flex; flex-direction: column; justify-content: flex-end; overflow: hidden; background: #1a4d2e; }
        .fb-hero-bg { position: absolute; inset: 0; background: url('https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1800&q=80') center 30%/cover no-repeat; animation: kenburns 20s ease-in-out infinite alternate; will-change: transform; }
        @keyframes kenburns { from { transform: scale(1); } to { transform: scale(1.06); } }
        .fb-hero-scrim { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,40,20,0.93) 0%, rgba(10,40,20,0.17) 50%, rgba(10,40,20,0.06) 100%); }
        .fb-hero-content { position: relative; z-index: 2; padding: 80px 80px 56px; max-width: 760px; }
        .fb-hero-h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(3.2rem, 7vw, 6.5rem); font-weight: 400; line-height: 1.05; letter-spacing: -0.03em; color: #ffffff; margin-bottom: 20px; }
        .fb-hero-h1 em { font-style: italic; color: rgba(255,255,255,0.65); }
        .fb-hero-sub { font-size: clamp(0.9rem, 1.5vw, 1.05rem); font-weight: 300; color: rgba(255,255,255,0.85); line-height: 1.8; margin-bottom: 36px; max-width: 560px; }
        .fb-hero-sub strong { color: #ffffff; font-weight: 600; }
        .fb-btn-green { display: inline-flex; align-items: center; gap: 10px; background: #25D366; color: #fff; font-size: 0.78rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; padding: 15px 32px; text-decoration: none; border-radius: 8px; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; transition: background 0.2s, transform 0.15s, box-shadow 0.2s; box-shadow: 0 4px 20px rgba(37,211,102,0.25); }
        .fb-btn-green:hover { background: #1fb857; transform: translateY(-2px); box-shadow: 0 6px 28px rgba(37,211,102,0.35); }
        .fb-hero-proof { position: relative; z-index: 2; display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 22px 80px; white-space: nowrap; }
        .fb-proof-stat { padding: 0 36px; border-right: 1px solid rgba(255,255,255,0.3); }
        .fb-proof-stat:last-child { border-right: none; }
        .fb-proof-num { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 400; color: #ffffff; line-height: 1; }
        .fb-proof-label { font-size: 0.66rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.65); margin-top: 4px; }

        /* SHARED */
        .fb-section { padding: 80px; max-width: 1200px; margin: 0 auto; }
        .fb-eyebrow { font-size: 0.66rem; font-weight: 600; letter-spacing: 0.22em; text-transform: uppercase; color: #1a9e52; margin-bottom: 14px; }
        .fb-h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 400; letter-spacing: -0.025em; color: #1a1208; margin-bottom: 20px; line-height: 1.15; }
        .fb-h2 em { font-style: italic; color: rgba(30,18,8,0.35); }
        .fb-lead { font-size: 0.95rem; font-weight: 300; color: rgba(30,18,8,0.55); line-height: 1.85; }
        .fb-lead strong { color: #1a1208; font-weight: 600; }

        /* PAIN */
        .fb-pain { background: #eaf6ee; padding: 80px; }
        .fb-pain-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .fb-pain-cards { display: flex; flex-direction: column; gap: 8px; }
        .fb-pain-card { background: #fff; border: 1px solid rgba(30,18,8,0.07); padding: 24px 28px; display: flex; align-items: flex-start; gap: 18px; transition: border-color 0.3s, box-shadow 0.3s; border-radius: 4px; }
        .fb-pain-card:hover { border-color: rgba(37,211,102,0.3); box-shadow: 0 4px 20px rgba(37,211,102,0.08); }
        .fb-pain-icon { font-size: 1.2rem; flex-shrink: 0; }
        .fb-pain-title { font-size: 0.9rem; font-weight: 600; color: #1a1208; margin-bottom: 5px; }
        .fb-pain-body { font-size: 0.82rem; font-weight: 300; color: rgba(30,18,8,0.5); line-height: 1.65; }

        /* QUOTE */
        .fb-quote { padding: 80px; text-align: center; background: #f2faf5; }
        .fb-quote-inner { max-width: 700px; margin: 0 auto; }
        .fb-quote-mark { font-family: 'Cormorant Garamond', serif; font-size: 6rem; line-height: 0.5; color: rgba(37,211,102,0.2); margin-bottom: 12px; }
        .fb-quote-text { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.6rem, 3.5vw, 2.6rem); font-weight: 400; font-style: italic; color: rgba(30,18,8,0.45); line-height: 1.3; margin-bottom: 16px; }
        .fb-quote-text strong { color: #1a1208; font-style: normal; font-weight: 600; }
        .fb-quote-source { font-size: 0.72rem; letter-spacing: 0.15em; text-transform: uppercase; color: rgba(30,18,8,0.3); }

        /* FEATURES grid (original style) */
        .fb-features { display: grid; grid-template-columns: repeat(2, 1fr); gap: 2px; background: rgba(30,18,8,0.06); }
        .fb-feature { background: #f2faf5; padding: 44px; position: relative; overflow: hidden; transition: background 0.3s; }
        .fb-feature::after { content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: linear-gradient(to right, transparent, #25D366, transparent); transform: scaleX(0); transition: transform 0.4s; }
        .fb-feature:hover { background: rgba(37,211,102,0.04); }
        .fb-feature:hover::after { transform: scaleX(1); }
        .fb-feat-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; color: rgba(37,211,102,0.15); line-height: 1; margin-bottom: 18px; }
        .fb-feat-title { font-size: 1rem; font-weight: 600; color: #1a1208; margin-bottom: 10px; }
        .fb-feat-body { font-size: 0.87rem; font-weight: 300; color: rgba(30,18,8,0.55); line-height: 1.8; }

        /* COMPARISON */
        .fb-comp-wrap { background: #eaf6ee; padding: 80px; }
        .fb-comp-inner { max-width: 1000px; margin: 0 auto; }
        .fb-comp-top { text-align: center; margin-bottom: 52px; }
        .fb-comp-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 2px 20px rgba(30,18,8,0.06); }
        .fb-comp-table th { padding: 14px 24px; text-align: left; font-size: 0.68rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; background: #f2faf5; }
        .fb-comp-table th:first-child { color: rgba(30,18,8,0.35); width: 38%; }
        .fb-comp-table th.col-them { color: rgba(30,18,8,0.35); }
        .fb-comp-table th.col-us { color: #1a9e52; background: rgba(37,211,102,0.08); }
        .fb-comp-table td { padding: 16px 24px; font-size: 0.86rem; font-weight: 300; border-top: 1px solid rgba(30,18,8,0.05); }
        .fb-comp-table td:first-child { color: rgba(30,18,8,0.55); }
        .fb-comp-table td.col-them { color: rgba(30,18,8,0.3); }
        .fb-comp-table td.col-us { color: #1a1208; background: rgba(37,211,102,0.04); font-weight: 500; }

        /* COVERAGE */
        .fb-coverage { padding: 80px; max-width: 1200px; margin: 0 auto; }
        .fb-cov-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 48px; }
        .fb-cov-card { background: #fff; border: 1px solid rgba(30,18,8,0.07); padding: 24px; border-radius: 6px; transition: border-color 0.3s, box-shadow 0.3s; min-height: 130px; display: flex; flex-direction: column; justify-content: center; }
        .fb-cov-card:hover { border-color: rgba(37,211,102,0.3); box-shadow: 0 4px 16px rgba(37,211,102,0.08); }
        .fb-cov-n { font-family: 'Cormorant Garamond', serif; font-size: 2.2rem; color: #25D366; line-height: 1; margin-bottom: 7px; }
        .fb-cov-state { font-size: 0.87rem; font-weight: 600; color: #1a1208; margin-bottom: 5px; }
        .fb-cov-cities { font-size: 0.75rem; font-weight: 300; color: rgba(30,18,8,0.4); line-height: 1.6; }

        /* HOW IT WORKS */
        .fb-steps-wrap { background: #eaf6ee; padding: 80px; }
        .fb-steps-inner { max-width: 1100px; margin: 0 auto; }
        .fb-steps-top { text-align: center; margin-bottom: 64px; }
        .fb-steps-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; position: relative; }
        .fb-steps-grid::before { content: ''; position: absolute; top: 17px; left: 12.5%; right: 12.5%; height: 1px; background: linear-gradient(to right, transparent, rgba(37,211,102,0.3) 20%, rgba(37,211,102,0.3) 80%, transparent); }
        .fb-step { padding: 0 20px; text-align: center; }
        .fb-step-dot { width: 34px; height: 34px; border-radius: 50%; border: 1px solid rgba(37,211,102,0.5); background: #eaf6ee; display: flex; align-items: center; justify-content: center; margin: 0 auto 22px; font-size: 0.72rem; font-weight: 600; color: #1a9e52; position: relative; z-index: 1; }
        .fb-step-label { font-size: 0.95rem; font-weight: 600; color: #1a1208; margin-bottom: 10px; }
        .fb-step-body { font-size: 0.82rem; font-weight: 300; color: rgba(30,18,8,0.5); line-height: 1.7; }

        /* PRICING */
        .fb-pricing-wrap { padding: 80px; max-width: 1000px; margin: 0 auto; }
        .fb-pricing-top { text-align: center; margin-bottom: 52px; }
        .fb-pricing-card { display: grid; grid-template-columns: 1fr 1.5fr; border: 1px solid rgba(37,211,102,0.25); background: #fff; border-radius: 6px; overflow: hidden; box-shadow: 0 4px 32px rgba(37,211,102,0.1); position: relative; }
        .fb-pricing-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(to right, transparent, #25D366 30%, #25D366 70%, transparent); }
        .fb-price-left { padding: 52px 44px; border-right: 1px solid rgba(30,18,8,0.06); background: #f2faf5; }
        .fb-price-badge { display: inline-block; background: rgba(37,211,102,0.12); border: 1px solid rgba(37,211,102,0.3); color: #1a9e52; font-size: 0.62rem; font-weight: 600; letter-spacing: 0.15em; text-transform: uppercase; padding: 4px 12px; border-radius: 4px; margin-bottom: 26px; }
        .fb-price-amount { display: flex; align-items: baseline; gap: 6px; margin-bottom: 6px; }
        .fb-price-currency { font-size: 1.3rem; color: rgba(30,18,8,0.35); margin-top: 14px; }
        .fb-price-num { font-family: 'Cormorant Garamond', serif; font-size: 5rem; font-weight: 400; color: #1a1208; line-height: 1; }
        .fb-price-period { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: #1a9e52; margin-bottom: 24px; }
        .fb-price-note { font-size: 0.84rem; font-weight: 300; color: rgba(30,18,8,0.45); line-height: 1.8; }
        .fb-price-right { padding: 52px 44px; }
        .fb-price-right-title { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(30,18,8,0.3); margin-bottom: 26px; }
        .fb-inclusions { list-style: none; display: flex; flex-direction: column; gap: 12px; margin-bottom: 36px; }
        .fb-inclusions li { display: flex; align-items: flex-start; gap: 11px; font-size: 0.87rem; font-weight: 300; color: rgba(30,18,8,0.65); line-height: 1.5; }
        .fb-check { width: 15px; height: 15px; flex-shrink: 0; margin-top: 2px; color: #25D366; }
        .fb-price-guarantee { text-align: center; margin-top: 12px; font-size: 0.73rem; color: rgba(30,18,8,0.3); }

        /* FINAL CTA */
        .fb-final { padding: 120px 80px; text-align: center; background: #eaf6ee; position: relative; overflow: hidden; }
        .fb-final-glow { position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); width: 600px; height: 400px; background: radial-gradient(ellipse, rgba(37,211,102,0.12) 0%, transparent 70%); pointer-events: none; }
        .fb-final-inner { position: relative; max-width: 620px; margin: 0 auto; }
        .fb-final-h { font-family: 'Cormorant Garamond', serif; font-size: clamp(3rem, 6vw, 5rem); font-weight: 400; line-height: 1.05; color: #1a1208; margin-bottom: 22px; }
        .fb-final-h em { font-style: italic; color: #1a9e52; }
        .fb-final-sub { font-size: 1rem; font-weight: 300; color: rgba(30,18,8,0.5); line-height: 1.8; margin-bottom: 44px; }
        .fb-final-fine { margin-top: 18px; font-size: 0.72rem; color: rgba(30,18,8,0.3); letter-spacing: 0.04em; }

        /* FOOTER */
        .fb-footer { background: #e8f5ee; border-top: 1px solid rgba(30,18,8,0.1); padding: 48px 80px 36px; }
        .fb-footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; margin-bottom: 36px; }
        .fb-footer-brand { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 600; color: #1a1208; margin-bottom: 10px; }
        .fb-footer-tagline { font-size: 0.83rem; font-weight: 300; color: rgba(30,18,8,0.45); line-height: 1.7; max-width: 260px; }
        .fb-footer-col-title { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(30,18,8,0.35); margin-bottom: 16px; }
        .fb-footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .fb-footer-links a, .fb-footer-links button { font-size: 0.83rem; color: rgba(30,18,8,0.5); text-decoration: none; transition: color 0.2s; background: none; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif; padding: 0; text-align: left; display: flex; align-items: center; gap: 7px; }
        .fb-footer-links a:hover, .fb-footer-links button:hover { color: #1a1208; }
        .fb-footer-bottom { display: flex; align-items: center; justify-content: center; padding-top: 28px; }
        .fb-footer-copy { font-size: 0.72rem; color: rgba(30,18,8,0.25); }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .fb-cov-grid { grid-template-columns: repeat(2, 1fr); }
          .fb-pain-inner { grid-template-columns: 1fr; gap: 48px; }
          .fb-footer-top { grid-template-columns: 1fr 1fr; gap: 32px; }
        }
        @media (max-width: 768px) {
          .fb-nav { padding: 0 24px; }
          .fb-nav-label { display: none; }
          .fb-hero-content { padding: 80px 24px 40px; }
          .fb-hero-proof { padding: 22px 24px; display: grid !important; grid-template-columns: 1fr 1fr; row-gap: 24px; column-gap: 16px; white-space: normal; }
          .fb-proof-stat { padding: 0; border-right: none !important; }
          .fb-pain { padding: 60px 24px; }
          .fb-quote { padding: 60px 24px; }
          .fb-section { padding: 60px 24px; }
          .fb-features { grid-template-columns: 1fr; }
          .fb-comp-wrap { padding: 60px 24px; }
          .fb-coverage { padding: 60px 24px; }
          .fb-cov-grid { grid-template-columns: 1fr 1fr; }
          .fb-steps-wrap { padding: 60px 24px; }
          .fb-steps-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .fb-steps-grid::before { display: none; }
          .fb-pricing-wrap { padding: 60px 24px; }
          .fb-pricing-card { grid-template-columns: 1fr; }
          .fb-price-left { border-right: none; border-bottom: 1px solid rgba(30,18,8,0.06); padding: 40px 32px; }
          .fb-price-right { padding: 40px 32px; }
          .fb-final { padding: 80px 24px; }
          .fb-footer { padding: 48px 24px 32px; }
          .fb-footer-top { grid-template-columns: 1fr; gap: 28px; }
          .fb-comp-table { font-size: 0.78rem; }
          .fb-comp-table th, .fb-comp-table td { padding: 12px 14px; }
        }
      `}</style>

      {/* NAV */}
      <nav className="fb-nav" aria-label="Employer page header">
        <Link to="/" className="fb-nav-brand">WHV Guides</Link>
        <span className="fb-nav-label">For Australian Employers</span>
        <button onClick={() => navigate('/get-started')} className="fb-nav-cta">Start Hiring - $9/wk</button>
      </nav>

      {/* HERO */}
      <section className="fb-hero" aria-label="Hero">
        <div className="fb-hero-bg" role="img" aria-label="WHV workers in Australia" />
        <div className="fb-hero-scrim" aria-hidden="true" />
        <div className="fb-hero-content">
          <h1 className="fb-hero-h1">Find WHV workers<br /><em>within the hour.</em></h1>
          <p className="fb-hero-sub">
            4,800+ verified Working Holiday Visa holders across every Australian state. <strong>All active. All legally authorised. All looking for work right now.</strong>
          </p>
          <button onClick={() => navigate('/get-started')} className="fb-btn-green">
            Start Hiring - $9 / week
          </button>
        </div>
        <div className="fb-hero-proof" aria-label="Key stats">
          <div className="fb-proof-stat"><div className="fb-proof-num">4,800+</div><div className="fb-proof-label">Verified WHV workers</div></div>
          <div className="fb-proof-stat"><div className="fb-proof-num">&lt;1hr</div><div className="fb-proof-label">Avg. first response</div></div>
          <div className="fb-proof-stat"><div className="fb-proof-num">7</div><div className="fb-proof-label">States covered</div></div>
          <div className="fb-proof-stat"><div className="fb-proof-num">$9</div><div className="fb-proof-label">Per week, cancel anytime</div></div>
        </div>
      </section>

      {/* PAIN */}
      <section className="fb-pain" aria-labelledby="pain-heading">
        <div className="fb-pain-inner">
          <Reveal>
            <div className="fb-eyebrow">The problem</div>
            <h2 className="fb-h2" id="pain-heading">Finding reliable WHV workers<br /><em>has never been harder.</em></h2>
            <p className="fb-lead">
              Facebook groups are full of spam, fake profiles, and people who left Australia months ago. Job boards charge hundreds for applications from people not even on a working visa.<br /><br />
              You need workers who are <strong>here, ready, and authorised</strong>. That is exactly who we have.
            </p>
          </Reveal>
          <div className="fb-pain-cards">
            {[
              { icon: '💀', title: 'Facebook groups are dead', body: 'Overcrowded with spam, scammers, and members who have not been in Australia for years.' },
              { icon: '💸', title: 'Job boards cost a fortune', body: '$200-$500 per post, with no guarantee applicants hold a WHV or can start this week.' },
              { icon: '⏳', title: 'You need someone today', body: 'Shift coverage, harvest season, summer rush - you cannot wait days for applications.' },
              { icon: '🚫', title: 'Visa compliance is your risk', body: 'Hiring without the right visa can cost thousands in fines. You need workers verified from day one.' },
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

      {/* QUOTE */}
      <section className="fb-quote" aria-label="Employer testimonial">
        <Reveal>
          <div className="fb-quote-inner">
            <div className="fb-quote-mark" aria-hidden="true">"</div>
            <p className="fb-quote-text">"I posted on Facebook three days ago.<br /><strong>Still waiting for one decent application."</strong></p>
            <p className="fb-quote-source">- Hostel manager, Cairns</p>
          </div>
        </Reveal>
      </section>

      {/* WHY IT WORKS */}
      <section className="fb-section" aria-labelledby="solution-heading">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="fb-eyebrow">The solution</div>
            <h2 className="fb-h2" id="solution-heading">Direct access to workers<br />who are <em>ready right now.</em></h2>
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
            <div className="fb-cov-card" style={{ background: 'rgba(37,211,102,0.06)', border: '1px dashed rgba(37,211,102,0.3)' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1a9e52', marginBottom: 8 }}>National</div>
              <div style={{ fontSize: '0.88rem', color: '#1a1208', fontWeight: 500 }}>Jobs group included</div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(30,18,8,0.35)', marginTop: 4 }}>All states - All industries</div>
            </div>
          </Reveal>
        </div>
      </section>

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
              <div className="fb-price-period">AUD per week - billed weekly</div>
              <p className="fb-price-note">Less than a coffee a day to access Australia's largest network of verified, job-ready WHV workers. No lock-in. No setup fees. No commissions per hire.<br /><br />Cancel anytime with a single email to info@whvguides.com.au.</p>
            </div>
            <div className="fb-price-right">
              <div className="fb-price-right-title">Everything included</div>
              <ul className="fb-inclusions">
                {INCLUSIONS.map(item => (
                  <li key={item}>
                    <svg className="fb-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="20,6 9,17 4,12" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/get-started')} className="fb-btn-green" style={{ width: '100%', justifyContent: 'center' }}>
                Start Hiring Today
              </button>
              <p className="fb-price-guarantee">Secured payment - Cancel anytime by email</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="fb-final" aria-label="Final call to action">
        <div className="fb-final-glow" aria-hidden="true" />
        <Reveal className="fb-final-inner">
          <h2 className="fb-final-h">Stop waiting.<br /><em>Start hiring.</em></h2>
          <p className="fb-final-sub">Every day you spend waiting is a day your vacancy goes unfilled. WHV Guides gets you in front of thousands of motivated, verified, work-ready travelers - for less than a coffee a day.</p>
          <button onClick={() => navigate('/get-started')} className="fb-btn-green" style={{ margin: '0 auto' }}>
            Start Hiring - $9 / week
          </button>
          <p className="fb-final-fine">No contracts - Cancel anytime - info@whvguides.com.au</p>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="fb-footer" aria-label="Site footer">
        <div className="fb-footer-top">
          <div>
            <div className="fb-footer-brand">WHV Guides Australia</div>
            <p className="fb-footer-tagline">The fastest way to hire verified Working Holiday Visa workers across Australia.</p>
          </div>
          <nav aria-label="Employer links">
            <div className="fb-footer-col-title">For Employers</div>
            <ul className="fb-footer-links">
              <li><a href="#how-it-works">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                How It Works
              </a></li>
              <li><a href="#pricing">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14H11v-2h2v2zm0-4H11V7h2v5z"/></svg>
                Pricing
              </a></li>
              <li><button onClick={() => navigate('/get-started')}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                Start Hiring
              </button></li>
            </ul>
          </nav>
          <nav aria-label="Community links">
            <div className="fb-footer-col-title">Community</div>
            <ul className="fb-footer-links">
              <li><Link to="/#communities">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                WHV Community
              </Link></li>
              <li><a href="https://www.tiktok.com/@whvguides?_r=1&_t=ZS-94YaXMHoswT" target="_blank" rel="noopener noreferrer">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/></svg>
                TikTok
              </a></li>
            </ul>
          </nav>
          <nav aria-label="Support links">
            <div className="fb-footer-col-title">Support</div>
            <ul className="fb-footer-links">
              <li><a href="mailto:info@whvguides.com.au">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@whvguides.com.au
              </a></li>
              <li><Link to="/cancel">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>
                Cancel Subscription
              </Link></li>
            </ul>
          </nav>
        </div>
        <div className="fb-footer-bottom">
          <span className="fb-footer-copy">© {new Date().getFullYear()} WHV Guides Australia. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}

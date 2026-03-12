import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';


const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };

function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp} transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}>
      {children}
    </motion.div>
  );
}

const LOCATIONS = [
  { state: 'NSW & VIC', cities: 'Sydney · Melbourne · Byron Bay', count: '1,850+' },
  { state: 'Queensland', cities: 'Brisbane · Gold Coast · Cairns · Airlie Beach', count: '1,500+' },
  { state: 'Western Australia', cities: 'Perth · Broome · Margaret River', count: '680+' },
  { state: 'NT, SA & Tasmania', cities: 'Darwin · Adelaide · Alice Springs · Hobart', count: '520+' },
  { state: 'Jobs — National', cities: 'All industries · All levels', count: '850+' },
];

const FEATURES = [
  {
    num: '01',
    title: 'Direct WhatsApp reach',
    body: 'Your job post lands directly in candidates\' phone notifications. No algorithms. No buried posts. Read rates far exceed email or job boards.',
  },
  {
    num: '02',
    title: 'Verified WHV members only',
    body: 'Every member holds a valid Working Holiday Visa. English-speaking, legally authorised to work, and actively looking. Zero irrelevant applicants.',
  },
  {
    num: '03',
    title: 'Responses within the hour',
    body: 'Most job posts receive multiple suitable applications within 60 minutes. Fill urgent shifts the same day you post.',
  },
  {
    num: '04',
    title: 'Hire directly, no middleman',
    body: 'Candidates message you directly on WhatsApp. No recruitment agency fees, no third-party platforms. You own the conversation.',
  },
];

const STEPS = [
  { label: 'Subscribe', body: 'Sign up for $9/week. No lock-in contracts, cancel anytime.' },
  { label: 'Get added', body: 'We manually add your WhatsApp number to the Jobs group and your chosen city group.' },
  { label: 'Post your job', body: 'Write a brief message describing the role, pay, and start date. Post it yourself, anytime.' },
  { label: 'Hire', body: 'Receive direct messages from candidates. Interview and hire — all on WhatsApp.' },
];

export default function ForBusiness() {
  const navigate = useNavigate();

  return (
    <div className="fb-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        .fb-root {
          font-family: 'DM Sans', sans-serif;
          background: #080c18;
          color: #e0dbd0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── HERO ── */
        .fb-hero {
          min-height: 100vh;
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 0 64px 88px;
          position: relative; overflow: hidden;
        }
        .fb-hero-bg {
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 70% 55% at 65% 25%, rgba(201,162,74,0.1) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 10% 85%, rgba(37,211,102,0.04) 0%, transparent 50%),
            linear-gradient(160deg, #0e1628 0%, #080c18 55%, #050810 100%);
        }
        .fb-grid-overlay {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 65% 65% at 65% 25%, black 0%, transparent 70%);
        }
        .fb-hero-content { position: relative; max-width: 820px; }
        .fb-hero-tag {
          display: inline-flex; align-items: center; gap: 10px;
          font-size: 0.68rem; font-weight: 600; letter-spacing: 0.18em;
          text-transform: uppercase; color: #c9a24a;
          margin-bottom: 28px;
          animation: fbFadeUp 0.7s 0.1s both;
        }
        .fb-hero-tag::before {
          content: ''; display: block;
          width: 36px; height: 1px; background: #c9a24a;
        }
        @keyframes fbFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fb-hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3.2rem, 7.5vw, 7rem);
          font-weight: 400; line-height: 0.98;
          letter-spacing: -0.03em; color: #f5f0e8;
          margin-bottom: 32px;
          animation: fbFadeUp 0.7s 0.25s both;
        }
        .fb-hero-h1 em { font-style: italic; color: #c9a24a; }
        .fb-hero-sub {
          font-size: 1.05rem; font-weight: 300;
          color: rgba(224,219,208,0.55);
          line-height: 1.75; max-width: 460px;
          margin-bottom: 48px;
          animation: fbFadeUp 0.7s 0.4s both;
        }
        .fb-hero-actions {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
          animation: fbFadeUp 0.7s 0.55s both;
        }
        .fb-btn-gold {
          display: inline-flex; align-items: center; gap: 10px;
          background: #c9a24a; color: #080c18;
          font-size: 0.8rem; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          padding: 16px 40px; border: none; border-radius: 2px;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
        }
        .fb-btn-gold:hover {
          background: #d4b060; transform: translateY(-2px);
          box-shadow: 0 14px 40px rgba(201,162,74,0.28);
        }
        .fb-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: rgba(224,219,208,0.6);
          font-size: 0.8rem; font-weight: 500;
          padding: 16px 0; border: none;
          border-bottom: 1px solid rgba(224,219,208,0.2);
          cursor: pointer; text-decoration: none;
          transition: color 0.2s, border-color 0.2s;
        }
        .fb-btn-ghost:hover { color: #e0dbd0; border-color: rgba(224,219,208,0.5); }

        .fb-hero-stats {
          position: absolute; right: 64px; bottom: 88px;
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 28px;
          animation: fbFadeUp 0.7s 0.7s both;
        }
        .fb-stat { text-align: right; }
        .fb-stat-n {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.8rem; font-weight: 600;
          line-height: 1; letter-spacing: -0.03em; color: #f5f0e8;
        }
        .fb-stat-l {
          font-size: 0.67rem; letter-spacing: 0.12em; text-transform: uppercase;
          color: rgba(224,219,208,0.35); margin-top: 4px;
        }
        .fb-stat-div { width: 1px; height: 28px; background: rgba(255,255,255,0.1); margin-left: auto; }

        /* ── DIVIDER ── */
        .fb-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,162,74,0.2) 30%, rgba(201,162,74,0.2) 70%, transparent);
        }

        /* ── PROBLEM ── */
        .fb-problem {
          background: #0b101e;
          padding: 96px 64px;
          text-align: center;
        }
        .fb-problem-inner { max-width: 840px; margin: 0 auto; }
        .fb-problem-q {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.9rem, 3.8vw, 3.2rem);
          font-weight: 400; font-style: italic;
          color: rgba(224,219,208,0.28);
          line-height: 1.35; letter-spacing: -0.01em;
          margin-bottom: 32px;
        }
        .fb-problem-q strong { color: #e0dbd0; font-style: normal; font-weight: 400; }
        .fb-problem-ans {
          font-size: 1rem; font-weight: 300;
          color: rgba(224,219,208,0.5); line-height: 1.8;
          max-width: 600px; margin: 0 auto;
        }

        /* ── SECTIONS ── */
        .fb-section { padding: 100px 64px; max-width: 1200px; margin: 0 auto; }
        .fb-eyebrow {
          font-size: 0.67rem; font-weight: 600;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: #c9a24a; margin-bottom: 18px;
          display: flex; align-items: center; gap: 10px;
        }
        .fb-eyebrow::before { content: ''; display: block; width: 28px; height: 1px; background: #c9a24a; }
        .fb-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4vw, 3.8rem);
          font-weight: 400; line-height: 1.1;
          letter-spacing: -0.025em; color: #f5f0e8;
          margin-bottom: 20px;
        }
        .fb-h2 em { font-style: italic; color: #c9a24a; }
        .fb-lead {
          font-size: 1rem; font-weight: 300;
          color: rgba(224,219,208,0.5);
          line-height: 1.75; max-width: 520px;
        }

        /* ── FEATURES GRID ── */
        .fb-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(255,255,255,0.05);
          margin-top: 64px;
        }
        .fb-feature {
          background: #080c18;
          padding: 44px 40px;
          transition: background 0.25s;
        }
        .fb-feature:hover { background: #0d1226; }
        .fb-feat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 3rem; font-weight: 400; line-height: 1;
          color: rgba(255,255,255,0.05);
          margin-bottom: 20px; letter-spacing: -0.04em;
        }
        .fb-feat-title {
          font-size: 0.98rem; font-weight: 600;
          color: #f5f0e8; margin-bottom: 12px;
          letter-spacing: 0.01em;
        }
        .fb-feat-body {
          font-size: 0.87rem; font-weight: 300;
          color: rgba(224,219,208,0.48); line-height: 1.75;
        }

        /* ── COVERAGE ── */
        .fb-coverage-wrap { background: #0b101e; padding: 100px 64px; }
        .fb-coverage { max-width: 1200px; margin: 0 auto; }
        .fb-coverage-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.06);
          margin-top: 64px;
        }
        .fb-loc {
          background: #080c18;
          padding: 28px 24px;
          transition: background 0.2s;
        }
        .fb-loc:hover { background: #0d1226; }
        .fb-loc-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem; font-weight: 600;
          color: #c9a24a; line-height: 1;
          margin-bottom: 8px;
        }
        .fb-loc-state {
          font-size: 0.82rem; font-weight: 600;
          color: #f5f0e8; margin-bottom: 4px;
        }
        .fb-loc-cities {
          font-size: 0.73rem; font-weight: 300;
          color: rgba(224,219,208,0.35); line-height: 1.6;
        }

        /* ── HOW IT WORKS ── */
        .fb-steps {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; position: relative;
          margin-top: 64px;
        }
        .fb-steps::before {
          content: ''; position: absolute;
          top: 20px; left: calc(12.5% + 10px); right: calc(12.5% + 10px);
          height: 1px; background: rgba(201,162,74,0.2);
          pointer-events: none;
        }
        .fb-step { padding: 0 24px; }
        .fb-step-dot {
          width: 40px; height: 40px; border-radius: 50%;
          background: #0b101e;
          border: 1px solid rgba(201,162,74,0.3);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem; font-weight: 600; color: #c9a24a;
          margin-bottom: 24px; position: relative; z-index: 1;
        }
        .fb-step-label {
          font-size: 0.9rem; font-weight: 600;
          color: #f5f0e8; margin-bottom: 10px;
        }
        .fb-step-body {
          font-size: 0.82rem; font-weight: 300;
          color: rgba(224,219,208,0.45); line-height: 1.7;
        }

        /* ── PRICING ── */
        .fb-pricing-wrap { background: #0b101e; padding: 100px 64px; }
        .fb-pricing { max-width: 1200px; margin: 0 auto; }
        .fb-pricing-card {
          display: grid; grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(201,162,74,0.2);
          background: #0a0e1c;
          margin-top: 64px;
        }
        .fb-price-left {
          padding: 64px 56px;
          border-right: 1px solid rgba(201,162,74,0.12);
          display: flex; flex-direction: column; justify-content: center;
        }
        .fb-price-amount {
          display: flex; align-items: baseline; gap: 8px;
          margin-bottom: 8px;
        }
        .fb-price-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 6rem; font-weight: 400; line-height: 1;
          letter-spacing: -0.04em; color: #f5f0e8;
        }
        .fb-price-unit {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.8rem; font-weight: 400; color: rgba(240,235,226,0.5);
        }
        .fb-price-period {
          font-size: 0.78rem; font-weight: 500;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(224,219,208,0.35); margin-bottom: 32px;
        }
        .fb-price-note {
          font-size: 0.8rem; font-weight: 300;
          color: rgba(224,219,208,0.4); line-height: 1.7;
        }
        .fb-price-right { padding: 56px; }
        .fb-price-right-title {
          font-size: 0.7rem; font-weight: 600;
          letter-spacing: 0.15em; text-transform: uppercase;
          color: rgba(224,219,208,0.35); margin-bottom: 28px;
        }
        .fb-inclusions { list-style: none; margin-bottom: 44px; }
        .fb-inclusions li {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          font-size: 0.88rem; font-weight: 400;
          color: rgba(224,219,208,0.7);
        }
        .fb-inclusions li:last-child { border-bottom: none; }
        .fb-check {
          width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px;
          color: #c9a24a;
        }

        /* ── FINAL CTA ── */
        .fb-cta-wrap {
          padding: 120px 64px;
          text-align: center; position: relative; overflow: hidden;
        }
        .fb-cta-bg {
          position: absolute; inset: 0;
          background: radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,162,74,0.07) 0%, transparent 70%);
        }
        .fb-cta-content { position: relative; max-width: 680px; margin: 0 auto; }
        .fb-cta-h {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 4.5rem);
          font-weight: 400; line-height: 1.1;
          letter-spacing: -0.025em; color: #f5f0e8;
          margin-bottom: 20px;
        }
        .fb-cta-h em { font-style: italic; color: #c9a24a; }
        .fb-cta-sub {
          font-size: 0.95rem; font-weight: 300;
          color: rgba(224,219,208,0.45); line-height: 1.8;
          margin-bottom: 48px;
        }
        .fb-cta-fine {
          margin-top: 20px; font-size: 0.75rem;
          color: rgba(224,219,208,0.25);
        }

        /* ── FOOTER ── */
        .fb-footer {
          background: #050608;
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 40px 64px;
        }
        .fb-footer-inner {
          max-width: 1200px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 16px;
        }
        .fb-footer-copy { font-size: 0.75rem; color: rgba(224,219,208,0.25); }
        .fb-footer-links {
          display: flex; align-items: center; gap: 24px; list-style: none;
        }
        .fb-footer-links a {
          font-size: 0.75rem; color: rgba(224,219,208,0.35);
          text-decoration: none; transition: color 0.2s;
        }
        .fb-footer-links a:hover { color: rgba(224,219,208,0.7); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .fb-hero { padding: 0 40px 72px; }
          .fb-hero-stats { right: 40px; bottom: 72px; }
          .fb-section, .fb-coverage-wrap, .fb-pricing-wrap, .fb-cta-wrap, .fb-problem, .fb-footer { padding-left: 40px; padding-right: 40px; }
          .fb-coverage-grid { grid-template-columns: repeat(3, 1fr); }
          .fb-steps { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .fb-steps::before { display: none; }
        }
        @media (max-width: 768px) {
          .fb-hero { padding: 0 24px 64px; }
          .fb-hero-stats { display: none; }
          .fb-section, .fb-coverage-wrap, .fb-pricing-wrap, .fb-cta-wrap, .fb-problem, .fb-footer { padding-left: 24px; padding-right: 24px; }
          .fb-features { grid-template-columns: 1fr; }
          .fb-coverage-grid { grid-template-columns: 1fr 1fr; }
          .fb-steps { grid-template-columns: 1fr; gap: 32px; }
          .fb-pricing-card { grid-template-columns: 1fr; }
          .fb-price-left { border-right: none; border-bottom: 1px solid rgba(201,162,74,0.12); padding: 44px 32px; }
          .fb-price-right { padding: 40px 32px; }
          .fb-footer-inner { flex-direction: column; align-items: flex-start; gap: 20px; }
        }
        @media (max-width: 500px) {
          .fb-coverage-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="fb-hero">
        <div className="fb-hero-bg" />
        <div className="fb-grid-overlay" />
        <div className="fb-hero-content">
          <div className="fb-hero-tag">For Employers</div>
          <h1 className="fb-hero-h1">
            Your next hire<br />
            is one <em>message</em><br />
            away.
          </h1>
          <p className="fb-hero-sub">
            Reach 4,800+ Working Holiday Visa holders across Australia directly on WhatsApp. Post unlimited jobs, get responses within the hour.
          </p>
          <div className="fb-hero-actions">
            <button onClick={() => navigate('/get-started')} className="fb-btn-gold">
              Start Hiring — $9 / week
            </button>
            <a href="#how-it-works" className="fb-btn-ghost">See how it works ↓</a>
          </div>
        </div>

        <div className="fb-hero-stats">
          <div className="fb-stat">
            <div className="fb-stat-n">4,800+</div>
            <div className="fb-stat-l">WHV members</div>
          </div>
          <div className="fb-stat-div" />
          <div className="fb-stat">
            <div className="fb-stat-n">&lt;1hr</div>
            <div className="fb-stat-l">avg. first response</div>
          </div>
          <div className="fb-stat-div" />
          <div className="fb-stat">
            <div className="fb-stat-n">$9</div>
            <div className="fb-stat-l">per week</div>
          </div>
        </div>
      </section>

      <div className="fb-divider" />

      {/* ── PROBLEM ── */}
      <div className="fb-problem">
        <Reveal className="fb-problem-inner">
          <p className="fb-problem-q">
            "I posted on Facebook three days ago.<br />
            <strong>Still waiting for one decent application."</strong>
          </p>
          <p className="fb-problem-ans">
            Facebook groups are overcrowded with spam and inactive members. Job boards charge hundreds for uncertain results. WhatsApp puts your vacancy directly in front of workers who are active, verified, and looking right now.
          </p>
        </Reveal>
      </div>

      <div className="fb-divider" />

      {/* ── WHY IT WORKS ── */}
      <section className="fb-section">
        <Reveal>
          <div className="fb-eyebrow">Why it works</div>
          <h2 className="fb-h2">Built for <em>speed.</em><br />Designed for results.</h2>
          <p className="fb-lead">
            We built this network as WHV holders ourselves. We know what workers want and what employers need.
          </p>
        </Reveal>
        <div className="fb-features">
          {FEATURES.map((f, i) => (
            <Reveal key={f.num} delay={i * 0.08} className="">
              <div className="fb-feature">
                <div className="fb-feat-num">{f.num}</div>
                <div className="fb-feat-title">{f.title}</div>
                <div className="fb-feat-body">{f.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="fb-divider" />

      {/* ── COVERAGE ── */}
      <div className="fb-coverage-wrap">
        <div className="fb-coverage">
          <Reveal>
            <div className="fb-eyebrow">Coverage</div>
            <h2 className="fb-h2">From Perth to Sydney,<br /><em>we've got you covered.</em></h2>
            <p className="fb-lead">
              7 active communities spanning every major WHV destination in Australia.
            </p>
          </Reveal>
          <div className="fb-coverage-grid">
            {LOCATIONS.map((l, i) => (
              <Reveal key={l.state} delay={i * 0.07}>
                <div className="fb-loc">
                  <div className="fb-loc-count">{l.count}</div>
                  <div className="fb-loc-state">{l.state}</div>
                  <div className="fb-loc-cities">{l.cities}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="fb-divider" />

      {/* ── HOW IT WORKS ── */}
      <section className="fb-section" id="how-it-works">
        <Reveal>
          <div className="fb-eyebrow">Process</div>
          <h2 className="fb-h2">Up and running<br /><em>in under 10 minutes.</em></h2>
        </Reveal>
        <div className="fb-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="fb-step">
                <div className="fb-step-dot">{i + 1}</div>
                <div className="fb-step-label">{s.label}</div>
                <div className="fb-step-body">{s.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="fb-divider" />

      {/* ── PRICING ── */}
      <div className="fb-pricing-wrap">
        <div className="fb-pricing">
          <Reveal>
            <div className="fb-eyebrow">Pricing</div>
            <h2 className="fb-h2">Simple, honest pricing.<br /><em>No hidden fees.</em></h2>
          </Reveal>
          <div className="fb-pricing-card">
            <div className="fb-price-left">
              <div className="fb-price-amount">
                <span className="fb-price-num">$9</span>
                <span className="fb-price-unit">AUD</span>
              </div>
              <div className="fb-price-period">per week · billed weekly</div>
              <p className="fb-price-note">
                No setup fees. No lock-in contracts. Cancel any time with a single email. Less than a coffee per day to access Australia's largest network of job-ready WHV workers.
              </p>
            </div>
            <div className="fb-price-right">
              <div className="fb-price-right-title">What's included</div>
              <ul className="fb-inclusions">
                {[
                  'Access to the national Jobs WhatsApp group',
                  'Access to 1 city or region-based community',
                  'Unlimited job posts — post as often as you need',
                  'Direct messages with candidates on WhatsApp',
                  'Job post writing assistance from our team',
                  'Responses typically within the first hour',
                  'No recruitment agency fees or commissions',
                  'Cancel anytime, no questions asked',
                ].map(item => (
                  <li key={item}>
                    <svg className="fb-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('/get-started')} className="fb-btn-gold" style={{ width: '100%', justifyContent: 'center' }}>
                Start Hiring Today
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── FINAL CTA ── */}
      <div className="fb-cta-wrap">
        <div className="fb-cta-bg" />
        <Reveal className="fb-cta-content">
          <h2 className="fb-cta-h">
            Ready to find your<br /><em>next great hire?</em>
          </h2>
          <p className="fb-cta-sub">
            Join employers across Australia who skip the job boards and hire Working Holiday Makers directly on WhatsApp.
          </p>
          <button onClick={() => navigate('/get-started')} className="fb-btn-gold">
            Start Hiring — $9 / week
          </button>
          <p className="fb-cta-fine">No contracts · Cancel anytime · info@whvguides.com.au</p>
        </Reveal>
      </div>

      {/* ── FOOTER ── */}
      <footer className="fb-footer">
        <div className="fb-footer-inner">
          <span className="fb-footer-copy">© {new Date().getFullYear()} WHV Australia · info@whvguides.com.au</span>
          <ul className="fb-footer-links">
            <li><Link to={'/'} style={{color:'rgba(224,219,208,0.35)',textDecoration:'none',fontSize:'0.75rem',transition:'color 0.2s'}}>Communities</Link></li>
            <li><a href="mailto:info@whvguides.com.au">Contact</a></li>
            <li><Link to={'/cancel'} style={{color:'rgba(224,219,208,0.35)',textDecoration:'none',fontSize:'0.75rem',transition:'color 0.2s'}}>Cancel Subscription</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

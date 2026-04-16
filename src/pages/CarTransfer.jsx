import React, { useEffect, useState } from 'react'

const NAVY = '#0B1F3A'
const GREEN = '#16A34A'
const GREEN_LIGHT = '#DCFCE7'
const GREEN_DARK = '#15803D'
const GRAY = '#64748B'
const BORDER = '#E2E8F0'
const OFFWHITE = '#F8FAFC'
const LIGHT = '#F1F5F9'

const Logo = ({ size = 52 }) => (
  <svg width={size} height={Math.round(size * 0.65)} viewBox="0 0 58 38" fill="none">
    <line x1="2" y1="13" x2="16" y2="13" stroke={GREEN} strokeWidth="3" strokeLinecap="round" opacity=".35"/>
    <line x1="2" y1="19" x2="11" y2="19" stroke={GREEN} strokeWidth="3" strokeLinecap="round" opacity=".65"/>
    <line x1="2" y1="25" x2="16" y2="25" stroke={GREEN} strokeWidth="3" strokeLinecap="round" opacity=".35"/>
    <rect x="16" y="9" width="40" height="20" rx="4.5" fill={GREEN}/>
    <path d="M20 9 L25 2 L46 2 L51 9" fill={GREEN_DARK}/>
    <circle cx="23" cy="29" r="4" fill={NAVY} stroke={GREEN_LIGHT} strokeWidth="1.5"/>
    <circle cx="47" cy="29" r="4" fill={NAVY} stroke={GREEN_LIGHT} strokeWidth="1.5"/>
    <rect x="19" y="12" width="9" height="6" rx="1.5" fill="rgba(255,255,255,.35)"/>
    <rect x="31" y="12" width="9" height="6" rx="1.5" fill="rgba(255,255,255,.35)"/>
    <rect x="48" y="13" width="6" height="4" rx="1" fill={GREEN_LIGHT} opacity=".8"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 6 5 9 10 3"/>
  </svg>
)



export default function CarTransfer() {
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.documentElement.style.margin = '0'
    document.documentElement.style.padding = '0'
    document.title = 'WHV Guides Car Transfer - Australia-wide Vehicle Relocation'
    const setMeta = (name, content, prop) => {
      let el = document.querySelector(prop ? `meta[property="${name}"]` : `meta[name="${name}"]`)
      if (!el) { el = document.createElement('meta'); prop ? el.setAttribute('property', name) : el.setAttribute('name', name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    setMeta('description', 'Vehicle relocation confirmed in 30-60 minutes. We source drivers from our network of 1,600+ working holiday travellers across Australia. One email, we handle everything.')
    setMeta('robots', 'index, follow')
    setMeta('og:title', 'WHV Guides Car Transfer - Australia-wide Vehicle Relocation', true)
    setMeta('og:description', 'Confirmed in 30-60 minutes. 1,600+ drivers. No hassle, no stress.', true)
    setMeta('og:url', 'https://www.whvguides.com.au/car', true)
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://www.whvguides.com.au/car')
    return () => {
      document.body.style.margin = ''
      document.body.style.padding = ''
      document.title = 'WHV Guides Australia - Working Holiday Visa Communities'
    }
  }, [])

  const faqs = [
    { q: 'What happens if the driver doesn\'t show up?', a: 'We monitor every booking and stay in contact with the driver throughout. If a driver cancels or becomes unavailable, we immediately source a replacement. You\'re always our first call - you\'ll never be left without a solution.' },
    { q: 'Who is responsible if there\'s damage to the vehicle?', a: 'As a coordination platform (similar to how Uber works), liability for damage during a transfer rests between the driver and your insurance policy. We strongly recommend confirming your vehicle is covered for third-party drivers before each transfer. We always advise photographing the vehicle at pickup and delivery.' },
    { q: 'How does payment work?', a: 'We send you a written quote before every job. Payment is due within 7 days of transfer completion via bank transfer or card. We handle the driver\'s payment on your behalf - you only deal with us, never the driver directly.' },
    { q: 'Do you cover regional and remote areas?', a: 'Yes. Our network of 1,600+ working holiday travellers spans all of Australia, including regional areas. Routes to remote locations may take slightly longer to confirm, but we cover the whole country.' },
  ]


  return (
    <>
      <style>{`
        html, body { margin: 0 !important; padding: 0 !important; }
        * { box-sizing: border-box; }
        #root { margin: 0; padding: 0; }
        input:focus, textarea:focus, select:focus { border-color: #16A34A !important; }
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-cta { display: none !important; }
          .hero-h1 { font-size: 28px !important; line-height: 1.15 !important; }
          .hero-p { font-size: 14px !important; }
          .hero-btns { flex-direction: column !important; align-items: stretch !important; }
          .hero-btns a { text-align: center !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(3) { border-top: 1px solid #E2E8F0 !important; }
          .stats-grid > div:nth-child(4) { border-top: 1px solid #E2E8F0 !important; }
          .how-cards { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
          .why-wide-inner { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 1.5rem !important; }
          .footer-brand { grid-column: 1 / -1 !important; }
          .section-pad { padding: 2rem 1.25rem !important; }
          .hero-pad { padding: 2rem 1.25rem !important; }
          .h2-mobile { font-size: 24px !important; }
          .testimonial-role { font-size: 11px !important; }
        }
      `}</style>
      <div style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif', color: '#0F172A', margin: 0, padding: 0 }}>

        {/* NAV */}
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: 58, background: NAVY, position: 'sticky', top: 0, zIndex: 100, margin: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Logo size={46}/>
            <div>
              <div style={{ fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: '-.2px' }}>WHV Guides</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>Car Transfer</div>
            </div>
          </div>
          <div className="nav-links" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', gap: 0 }}>
            {['How it works', 'Why us', 'Pricing', 'Request'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', padding: '6px 16px', textDecoration: 'none', whiteSpace: 'nowrap' }}>{l}</a>
            ))}
          </div>
          <div className="nav-cta" style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }}>
            <a href="mailto:info@whvguides.com.au" style={{ background: GREEN, color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 20px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>Request Transfer</a>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero-pad" style={{ background: '#fff', padding: '2rem 2rem 1.5rem', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'left' }}>
            <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.6rem' }}>
              For car rental companies, dealerships &amp; fleet operators
            </div>
            <h1 className="hero-h1" style={{ fontSize: 22, fontWeight: 800, color: NAVY, lineHeight: 1.2, marginBottom: '.5rem', marginTop: 0 }}>
              The easiest way to move a rental car.<span style={{ color: GREEN }}> Without touching a driver.</span>
            </h1>
            <p className="hero-p" style={{ fontSize: 15, color: GRAY, lineHeight: 1.7, maxWidth: 520, margin: '0 0 1rem' }}>
              Send us the pickup location, destination, and date. We find the driver, handle all communication, and confirm within 30-60 minutes - day or night.
            </p>
            <div className="hero-btns" style={{ display: 'flex', gap: 12, justifyContent: 'flex-start', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <a href="mailto:info@whvguides.com.au" style={{ background: GREEN, color: '#fff', border: 'none', padding: '14px 28px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>Request a transfer</a>
              <a href="https://wa.me/61403873376" style={{ background: 'transparent', color: NAVY, border: `2px solid ${BORDER}`, padding: '13px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Chat on WhatsApp</a>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `2px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', background: OFFWHITE, marginBottom: '2rem' }}>
              {[
                { v: '1,600+', c: GREEN, l: 'Active drivers' },
                { v: '30-60', sub: 'min', l: 'To confirm' },
                { v: '$0.60', l: 'Per km' },
                { v: '24/7', l: 'Available' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '.9rem .5rem', textAlign: 'center', borderRight: i < 3 ? `1px solid ${BORDER}` : 'none' }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: s.c || '#0F172A' }}>{s.v}{s.sub && <span style={{ fontSize: 11, color: GREEN, marginLeft: 2 }}>{s.sub}</span>}</div>
                  <div style={{ fontSize: 11, color: GRAY, marginTop: 3, fontWeight: 500 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div id="how-it-works" className="section-pad" style={{ padding: '2rem 2rem', background: LIGHT }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: '#DBEAFE', color: '#1E40AF', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>How it works</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>Four steps. One email.</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>We've made it as simple as possible so you can get back to running your business.</p>
          </div>
          <div className="how-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, maxWidth: 740, margin: '0 auto', width: '100%' }}>
            {[
              { n: 1, title: 'Send your request', desc: 'Email us the pickup location, drop-off address, vehicle details, and required date/time.' },
              { n: 2, title: 'Confirmed in 30-60 min', desc: 'We match the job to an available driver from our WhatsApp network and send you confirmed details straight away.' },
              { n: 3, title: 'We manage everything', desc: 'All driver communication, logistics, and payment handled entirely by WHV Guides. You hear from us, not the driver.' },
              { n: 4, title: 'Vehicle delivered', desc: 'Driver completes the transfer. We confirm successful handover at the destination - no chasing required.' },
            ].map(s => (
              <div key={s.n} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '1.25rem' }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: NAVY, color: '#fff', fontSize: 15, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>{s.n}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: GRAY, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* WHY */}
        <div id="why-us" className="section-pad" style={{ padding: '2rem 2rem', background: '#fff' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>Why choose us</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>We remove every pain point.</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>From finding the driver to confirming delivery - we take care of the entire process.</p>
          </div>
          <div className="why-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, maxWidth: 820, margin: '0 auto' }}>
            {[
              { icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>, title: 'Zero driver headaches', desc: 'We source and brief every driver. You never deal with drivers directly - no calls, no chasing, no stress.' },
              { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, title: '30-60 min, every time', desc: 'Emergency relocation? Last-minute need? We confirm a driver in 30-60 minutes, 24 hours a day, 7 days a week.' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title: 'We handle everything', desc: 'Communication, payment, tracking, and handover confirmation. You just send one request and we do the rest.' },
            ].map((c, i) => (
              <div key={i} style={{ background: OFFWHITE, border: `1.5px solid ${BORDER}`, borderRadius: 16, padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: GREEN_LIGHT, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={GREEN_DARK} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: NAVY, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: GRAY, lineHeight: 1.7 }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ background: NAVY, borderRadius: 16, padding: '1.75rem 2rem', maxWidth: 820, margin: '14px auto 0' }}>
            <div className="why-wide-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 10 }}>From emergencies to everyday moves - we're always ready.</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.7, margin: 0 }}>Whether it's a breakdown recovery, urgent interstate transfer, or routine fleet repositioning, there's always a driver ready.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Emergency same-day transfers confirmed in under an hour', 'Interstate and intra-city coverage Australia-wide', 'Zero direct driver management - we handle it all', 'Available 24/7 including weekends and public holidays'].map((t, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 20, height: 20, minWidth: 20, borderRadius: '50%', background: GREEN, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CheckIcon/></div>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,.7)', lineHeight: 1.5, margin: 0 }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIALS */}
        <div className="section-pad" style={{ padding: '2rem 2rem', background: LIGHT }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem', maxWidth: 780, margin: '0 auto 1.75rem' }}>
            <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>Client stories</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>What rental companies say</h2>
            <p style={{ fontSize: 15, color: GRAY, lineHeight: 1.65 }}>Operators across Australia trust us with their fleet every day.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 780, margin: '0 auto' }}>
            {[
              { init: 'TR', name: 'Tom R.', q: 'We had 3 vehicles stranded in Cairns that needed to be in Brisbane urgently. WHV Guides confirmed drivers within 50 minutes on a Sunday evening. Saved us a fortune and a massive headache.' },
              { init: 'MC', name: 'Michelle C.', q: 'As a regional operator we used to spend hours finding drivers for interstate moves. Now I send one email and WHV Guides handles everything. We\'ve done over 40 relocations with them this year - not a single issue.' },
              { init: 'BW', name: 'Ben W.', q: 'The pricing is transparent, the response is fast, and the drivers are reliable. What I love most is that I never have to speak to a driver directly. That alone is worth it.' },
            ].map((t, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, border: `1.5px solid ${BORDER}`, display: 'flex', overflow: 'hidden' }}>
                <div style={{ width: 5, minWidth: 5, background: GREEN }}/>
                <div style={{ padding: '1.5rem 1.75rem', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem', gap: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 42, height: 42, minWidth: 42, borderRadius: '50%', background: NAVY, color: '#fff', fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.init}</div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: '#0F172A' }}>{t.name}</div>
                    </div>
                    <div style={{ fontSize: 13, color: GREEN, letterSpacing: 2, whiteSpace: 'nowrap' }}>★★★★★</div>
                  </div>
                  <p style={{ fontSize: 14, color: '#334155', lineHeight: 1.75, fontStyle: 'italic', margin: 0 }}>"{t.q}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <div id="pricing" className="section-pad" style={{ padding: '2rem 2rem', background: '#fff' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: '#DBEAFE', color: '#1E40AF', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>Pricing</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>Simple, transparent pricing</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>No hidden fees. A written quote confirmed before every transfer.</p>
          </div>
          <div style={{ maxWidth: 600, margin: '0 auto', border: `1.5px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ background: NAVY, padding: '1.6rem 2rem' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>Standard rate - all transfers</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>$0.60 per kilometre</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', marginTop: 4 }}>All-inclusive quote provided before every job</div>
            </div>
            {[['Base rate', '$0.60 / km'], ['Fuel costs (where required)', 'Added to final invoice'], ['Driver return trip', 'Added to final invoice'], ['Overnight stay required', '+ $100 per night'], ['Response time', '30-60 minutes guaranteed'], ['Driver admin and payment', 'Managed by us - free'], ['Payment terms', '7 days from completion']].map(([l, v], i, arr) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 2rem', borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none', fontSize: 14 }}>
                <span style={{ color: GRAY }}>{l}</span>
                <span style={{ fontWeight: 700, color: GREEN }}>{v}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', maxWidth: 500, margin: '1.25rem auto 0' }}>All prices in AUD. No hidden fees. You only pay after the job is done.</p>
        </div>

        {/* FAQ */}
        <div className="section-pad" style={{ padding: '2rem 2rem', background: LIGHT }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: '#DBEAFE', color: '#1E40AF', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>FAQ</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>Common questions</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>Everything you need to know before your first transfer.</p>
          </div>
          <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: '#fff', border: `1.5px solid ${openFaq === i ? GREEN : BORDER}`, borderRadius: 14, overflow: 'hidden', transition: 'border-color .15s' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 1.4rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: NAVY }}>{faq.q}</span>
                  <span style={{ fontSize: 20, color: GREEN, flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform .15s', lineHeight: 1 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 1.4rem 1.1rem' }}>
                    <p style={{ fontSize: 14, color: GRAY, lineHeight: 1.75, margin: 0 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div id="contact" className="section-pad" style={{ padding: '1.75rem 2rem', background: LIGHT }}>
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <h2 className="h2-mobile" style={{ fontSize: 22, fontWeight: 800, color: NAVY, marginBottom: '.3rem' }}>Get in touch</h2>
            <p style={{ fontSize: 14, color: GRAY, margin: 0 }}>Available 24/7, including emergencies.</p>
          </div>
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, maxWidth: 520, margin: '0 auto' }}>
            <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '1.25rem', display: 'flex', gap: 12 }}>
              <div style={{ width: 42, height: 42, minWidth: 42, background: NAVY, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#86EFAC"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 3 }}>Email</div>
                <a href="mailto:info@whvguides.com.au" style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', textDecoration: 'none' }}>info@whvguides.com.au</a>
                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>Reply within 30 min</div>
              </div>
            </div>
            <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '1.25rem', display: 'flex', gap: 12 }}>
              <div style={{ width: 42, height: 42, minWidth: 42, background: NAVY, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#86EFAC"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', marginBottom: 3 }}>WhatsApp</div>
                <a href="https://wa.me/61403873376" style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', textDecoration: 'none' }}>+61 403 873 376</a>
                <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>Available 24/7</div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div style={{ background: NAVY, padding: '1rem 2rem 0.75rem' }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <div className="footer-brand" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Logo size={46}/>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>WHV Guides</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', marginTop: 1 }}>Car Transfer</div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.5, maxWidth: 200, margin: 0 }}>Australia-wide vehicle relocation. Confirmed in 30-60 minutes, 24 hours a day, 7 days a week.</p>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>Legal</div>
              <a href="/car/legal" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', marginBottom: 8 }}>Client Agreement</a>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>Contact</div>
              <a href="mailto:info@whvguides.com.au" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', marginBottom: 8 }}>info@whvguides.com.au</a>
              <a href="tel:+61403873376" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', marginBottom: 8 }}>+61 403 873 376</a>
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,.5)', textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: 14 }}>Quick links</div>
              <a href="#how-it-works" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', marginBottom: 8 }}>How it works</a>
              <a href="#pricing" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', marginBottom: 8 }}>Pricing</a>
              <a href="mailto:info@whvguides.com.au" style={{ display: 'block', fontSize: 13, color: 'rgba(255,255,255,.6)', textDecoration: 'none', marginBottom: 8 }}>Request a transfer</a>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>&copy; 2026 WHV Guides Car Transfer. All rights reserved.</div>
          </div>
        </div>

      </div>
    </>
  )
}

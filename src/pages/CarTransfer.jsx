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
    { q: 'Where do your drivers come from?', a: 'We tap into a community of over 1,600 working holiday visa travellers across Australia, organised into 30+ groups covering every region of the country. Every driver is part of our vetted network - so we can source reliable, available drivers fast, wherever you need them.' },
    { q: 'Who is responsible if there\'s damage to the vehicle?', a: 'We operate as a coordination platform, and liability for any damage during transit sits between the driver and your insurance coverage. We recommend ensuring your vehicle is insured for third-party drivers prior to each transfer. For added protection, we also advise taking photos at both pickup and delivery.' },
    { q: 'How does payment work?', a: 'Every job starts with a written quote for full transparency. Once the transfer is complete, payment is due within 7 days via bank transfer or card. We manage all driver payments internally - giving you one simple point of contact.' },
    { q: 'Do you cover regional and remote areas?', a: 'Yes - we provide nationwide coverage across Australia, including regional and remote areas. Our extensive driver network ensures we can reach even less accessible locations, with slightly longer confirmation times where required.' },
    { q: 'What types of vehicles can you move?', a: 'We handle a wide range of vehicles including standard cars, rental fleets, dealership vehicles, and light commercial vehicles.' },
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
          .hero-btns { flex-wrap: wrap !important; }
          .hero-btns a { flex: 1 1 auto !important; text-align: center !important; min-width: 140px !important; }
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .stats-grid > div:nth-child(2) { border-right: none !important; }
          .stats-grid > div:nth-child(3) { border-top: 1px solid #E2E8F0 !important; }
          .stats-grid > div:nth-child(4) { border-top: 1px solid #E2E8F0 !important; }
          .how-cards { grid-template-columns: 1fr !important; }
          .why-cards { grid-template-columns: 1fr !important; }
          .why-wide-inner { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 1.25rem !important; }
          .footer-brand { grid-column: 1 !important; }
          .section-pad { padding: 2rem 1.25rem !important; }
          .hero-pad { padding: 1.5rem 1.25rem 1.25rem !important; }
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
            {['How it works', 'Why choose us', 'Pricing'].map(l => (
              <a key={l} href={`#${l.toLowerCase().replace(/ /g, '-')}`} style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', padding: '6px 16px', textDecoration: 'none', whiteSpace: 'nowrap' }}>{l}</a>
            ))}
          </div>
          <div className="nav-cta" style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 'auto' }}>
            <a href="mailto:info@whvguides.com.au" style={{ background: GREEN, color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 20px', borderRadius: 8, textDecoration: 'none', whiteSpace: 'nowrap' }}>Request Transfer</a>
          </div>
        </nav>

        {/* HERO */}
        <div className="hero-pad" style={{ background: '#fff', padding: '2rem 2rem 1.5rem', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ maxWidth: 780, margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.6rem' }}>
              Australia-wide coverage | Secure, verified drivers within 30-60 min, 24/7
            </div>
            <h1 className="hero-h1" style={{ fontSize: 42, fontWeight: 800, color: NAVY, lineHeight: 1.1, marginBottom: '.5rem', marginTop: 0 }}>
              Need a car moved?<br/><span style={{ color: GREEN }}>Consider it done.</span>
            </h1>
            <p style={{ fontSize: 16, fontWeight: 600, color: NAVY, lineHeight: 1.5, maxWidth: 520, margin: '0 auto .5rem' }}>
              Fast, seamless vehicle transfers - handled for you.
            </p>
            <p className="hero-p" style={{ fontSize: 15, color: GRAY, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 1rem' }}>
              Send us the pickup location, destination, and date - we'll get you the driver, handle all communication, and confirm within 30–60 minutes, day or night.
            </p>
            <div className="hero-btns" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
              <a href="mailto:info@whvguides.com.au" style={{ background: GREEN, color: '#fff', border: 'none', padding: '14px 28px', borderRadius: 10, fontSize: 15, fontWeight: 700, textDecoration: 'none', display: 'inline-block' }}>Request a transfer</a>
              <a href="https://wa.me/61403873376" style={{ background: 'transparent', color: NAVY, border: `2px solid ${BORDER}`, padding: '13px 28px', borderRadius: 10, fontSize: 15, fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Chat on WhatsApp</a>
            </div>
            <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', border: `2px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', background: OFFWHITE, marginBottom: '2rem' }}>
              {[
                { v: '1,600+', l: 'Active drivers' },
                { v: '30-60', sub: 'min', l: 'To confirm' },
                { v: '$0.60', l: 'Per km' },
                { v: '24/7', l: 'Availability' },
              ].map((s, i) => (
                <div key={i} style={{ padding: '.9rem .5rem', textAlign: 'center', borderRight: i < 3 ? `1px solid ${BORDER}` : 'none' }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#0F172A' }}>{s.v}{s.sub && <span style={{ fontSize: 11, color: '#0F172A', marginLeft: 1, fontWeight: 800 }}>{s.sub}</span>}</div>
                  <div style={{ fontSize: 11, color: GREEN, marginTop: 3, fontWeight: 600 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <div id="how-it-works" className="section-pad" style={{ padding: '2rem 2rem', background: LIGHT }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: '#DBEAFE', color: '#1E40AF', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>How it works</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>Four simple steps. One point of contact.</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>We've made vehicle transfers effortless - so you can stay focused on your business.</p>
          </div>
          <div className="how-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, maxWidth: 740, margin: '0 auto', width: '100%' }}>
            {[
              { n: 1, title: 'Send your request', desc: 'Email us the pickup location, drop-off address, vehicle details, and timing.' },
              { n: 2, title: 'Driver secured in 30 - 60 minutes', desc: 'We match your request with a trusted driver and confirm all details - quickly and seamlessly.' },
              { n: 3, title: 'Fully managed service', desc: 'All communication, logistics, and payments are handled seamlessly by our team - so you don\'t have to worry about a thing.' },
              { n: 4, title: 'Vehicle delivered', desc: 'The driver completes the transfer, and we confirm successful handover at the destination - no follow-ups required.' },
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
        <div id="why-choose-us" className="section-pad" style={{ padding: '2rem 2rem', background: '#fff' }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>Why choose us</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>A fully managed service - built to remove every operational hassle.</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 580, margin: '0 auto', lineHeight: 1.65 }}>From driver allocation to delivery confirmation - we take care of it all. No drivers to chase. No logistics to manage. No delays. We handle the entire process - start to finish.</p>
          </div>
          <div className="why-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 14, maxWidth: 820, margin: '0 auto' }}>
            {[
              { icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>, title: 'No driver chasing. Ever.', desc: 'We source, vet, and manage every driver - so you never deal with coordination, calls, or follow-ups.' },
              { icon: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>, title: 'Ready in 30–60 minutes.', desc: 'Urgent or last-minute? A driver is secured and confirmed fast - available 24/7 across Australia.' },
              { icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>, title: 'Fully managed end-to-end service', desc: 'From dispatch and communication to tracking, payment, and handover confirmation - everything is handled for you.' },
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
                <h3 style={{ fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 10 }}>From emergencies to everyday fleet moves - we're always ready.</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,.55)', lineHeight: 1.7, margin: 0 }}>Whether it's breakdown recovery, urgent interstate transfers, or routine fleet repositioning - we've got it covered.</p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Australia-wide coverage (interstate & intra-city)', 'Zero driver management on your end', 'Available 24/7 - including weekends and public holidays'].map((t, i) => (
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
            <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>What our clients say</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>What our clients say</h2>
            <p style={{ fontSize: 15, color: GRAY, lineHeight: 1.65 }}>Trusted by rental companies and fleet operators across Australia for fast, reliable vehicle transfers.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 780, margin: '0 auto' }}>
            {[
              { init: 'T', name: 'Tom', q: 'We had three vehicles stranded in Cairns that needed to be in Brisbane urgently. WHV Guides confirmed drivers within 40 minutes on a Sunday evening. They saved us a fortune and a massive headache.' },
              { init: 'M', name: 'Michelle', q: 'As a regional operator, we used to spend hours finding drivers for interstate moves. Now I send one email and WHV Guides handles everything. We\'ve completed over 50 relocations with them this year - not a single issue.' },
              { init: 'B', name: 'Ben', q: 'The pricing is transparent, the response is fast, and the drivers are reliable. What I love most is that I never have to speak to a driver directly - that alone makes the service worth it.' },
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
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>Simple, transparent pricing.</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>A written quote is confirmed before every transfer - no hidden fees.</p>
          </div>
          <div style={{ maxWidth: 600, margin: '0 auto', border: `1.5px solid ${BORDER}`, borderRadius: 16, overflow: 'hidden' }}>
            <div style={{ background: NAVY, padding: '1.6rem 2rem' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: 6 }}>Standard rate - all transfers</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: '#fff' }}>$0.60 per kilometre</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,.45)', marginTop: 4 }}>All-inclusive quote provided before every job</div>
            </div>
            {[
              ['Base rate', '$0.60 / km'],
              ['Fuel costs (where required)', 'Added to final quote'],
              ['Return trip', 'Added to final quote'],
              ['Overnight stay required', '\$100+ per night'],
              ['Response time', '30–60 minutes guaranteed'],
              ['Driver admin', '\$0'],
              ['Payment due', 'Within 7 days after job completion'],
            ].map(([l, v], i, arr) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 1.25rem', borderBottom: i < arr.length - 1 ? `1px solid ${BORDER}` : 'none', fontSize: 13, gap: 12 }}>
                <span style={{ color: GRAY }}>{l}</span>
                <span style={{ fontWeight: 700, color: GREEN, whiteSpace: 'nowrap' }}>{v}</span>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 12, color: '#94A3B8', textAlign: 'center', maxWidth: 500, margin: '1.25rem auto 0' }}>All prices are in AUD. You only pay once the job is completed.</p>
        </div>

        {/* FAQ */}
        <div className="section-pad" style={{ padding: '2rem 2rem', background: LIGHT }}>
          <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
            <div style={{ display: 'inline-block', background: '#DBEAFE', color: '#1E40AF', fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '.8rem' }}>FAQ</div>
            <h2 className="h2-mobile" style={{ fontSize: 30, fontWeight: 800, color: NAVY, marginBottom: '.4rem' }}>Common questions</h2>
            <p style={{ fontSize: 15, color: GRAY, maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>Clear, upfront answers so you can book with confidence from your very first transfer.</p>
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
            <p style={{ fontSize: 14, color: GRAY, margin: 0 }}>Available 24/7 for bookings and urgent vehicle transfers.</p>
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
        <div style={{ background: NAVY, padding: '2rem 2rem 1rem' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,.08)' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 200 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Logo size={46}/>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>WHV Guides</div>
                  <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', marginTop: 1 }}>Car Transfer</div>
                </div>
              </div>
              <p style={{ fontSize: 12, color: 'rgba(255,255,255,.4)', lineHeight: 1.5, margin: 0 }}>Australia-wide vehicle relocation. Confirmed in 30-60 minutes, 24 hours a day, 7 days a week.</p>
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
          <div style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto' }}>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,.35)' }}>&copy; 2026 WHV Guides Car Transfer. All rights reserved.</div>
          </div>
        </div>

      </div>
    </>
  )
}

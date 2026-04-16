import React from 'react'

const NAVY = '#0B1F3A'
const GREEN = '#16A34A'
const GREEN_LIGHT = '#DCFCE7'
const GREEN_DARK = '#15803D'
const GRAY = '#64748B'
const BORDER = '#E2E8F0'

const Logo = () => (
  <svg width="46" height="30" viewBox="0 0 58 38" fill="none">
    <line x1="2" y1="13" x2="16" y2="13" stroke={GREEN} strokeWidth="3" strokeLinecap="round" opacity=".35"/>
    <line x1="2" y1="19" x2="11" y2="19" stroke={GREEN} strokeWidth="3" strokeLinecap="round" opacity=".65"/>
    <line x1="2" y1="25" x2="16" y2="25" stroke={GREEN} strokeWidth="3" strokeLinecap="round" opacity=".35"/>
    <rect x="16" y="9" width="40" height="20" rx="4.5" fill={GREEN}/>
    <path d="M20 9 L25 2 L46 2 L51 9" fill={GREEN_DARK}/>
    <circle cx="23" cy="29" r="4" fill={NAVY} stroke={GREEN_LIGHT} strokeWidth="1.5"/>
    <circle cx="47" cy="29" r="4" fill={NAVY} stroke={GREEN_LIGHT} strokeWidth="1.5"/>
    <rect x="19" y="12" width="9" height="6" rx="1.5" fill="rgba(255,255,255,.35)"/>
    <rect x="31" y="12" width="9" height="6" rx="1.5" fill="rgba(255,255,255,.35)"/>
  </svg>
)

const Section = ({ num, title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: '1rem' }}>
      <div style={{ minWidth: 32, height: 32, borderRadius: '50%', background: NAVY, color: '#fff', fontSize: 13, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>{num}</div>
      <h2 style={{ fontSize: 17, fontWeight: 800, color: NAVY, margin: 0, paddingTop: 5 }}>{title}</h2>
    </div>
    <div style={{ paddingLeft: 46 }}>{children}</div>
  </div>
)

const P = ({ children }) => (
  <p style={{ fontSize: 14, color: GRAY, lineHeight: 1.85, marginBottom: '.85rem', marginTop: 0 }}>{children}</p>
)

const UL = ({ items }) => (
  <ul style={{ paddingLeft: '1.4rem', margin: '0 0 .85rem 0' }}>
    {items.map((item, i) => (
      <li key={i} style={{ fontSize: 14, color: GRAY, lineHeight: 1.85, marginBottom: '.35rem' }}>{item}</li>
    ))}
  </ul>
)

export default function CarTransferLegal() {
  React.useEffect(() => {
    document.title = 'Client Agreement - WHV Guides Car Transfer'
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`)
      if (!el) { el = document.createElement('meta'); el.setAttribute('name', name); document.head.appendChild(el) }
      el.setAttribute('content', content)
    }
    setMeta('description', 'Client Agreement for WHV Guides Car Transfer - Australia-wide vehicle relocation intermediary service.')
    setMeta('robots', 'noindex, follow')
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical) }
    canonical.setAttribute('href', 'https://www.whvguides.com.au/car/legal')
    return () => { document.title = 'WHV Guides Australia - Working Holiday Visa Communities' }
  }, [])

  return (
    <div style={{ fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif', background: '#F8FAFC', minHeight: '100vh' }}>

      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: 58, background: NAVY, position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/car" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Logo />
          <div>
            <div style={{ fontSize: 15, fontWeight: 800, color: '#fff' }}>WHV Guides</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,.4)', marginTop: 2 }}>Car Transfer</div>
          </div>
        </a>
        <a href="mailto:info@whvguides.com.au" style={{ background: GREEN, color: '#fff', fontSize: 13, fontWeight: 700, padding: '9px 20px', borderRadius: 8, textDecoration: 'none' }}>Request Transfer</a>
      </nav>

      <div style={{ maxWidth: 780, margin: '0 auto', padding: '3rem 2rem 6rem' }}>
        <a href="/car" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: GREEN_DARK, fontSize: 14, fontWeight: 600, textDecoration: 'none', marginBottom: '2.5rem' }}>Back to main site</a>

        <div style={{ marginBottom: '3rem', paddingBottom: '2rem', borderBottom: `2px solid ${BORDER}` }}>
          <div style={{ display: 'inline-block', background: GREEN_LIGHT, color: GREEN_DARK, fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', padding: '4px 14px', borderRadius: 30, marginBottom: '1rem' }}>Legal Document</div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: NAVY, marginBottom: '.75rem', marginTop: 0 }}>Client Agreement</h1>
          <p style={{ fontSize: 14, color: GRAY, lineHeight: 1.8, marginBottom: '1.25rem', marginTop: 0 }}>
            <strong>Effective date:</strong> April 2026. This agreement covers all vehicle relocation requests made through WHV Guides Car Transfer. By submitting a request - by email, WhatsApp, phone, or any other channel - you agree to these terms.
          </p>
          <P>Think of us like Uber, but for vehicle relocations. We connect clients who need a car moved with available drivers from our community network. We handle the coordination and payment - we don't drive, own, or control any vehicle ourselves. All driving is done by independent drivers who are not employed by or affiliated with WHV Guides.</P>
        </div>

        <Section num="1" title="Parties">
          <P>This agreement is between WHV Guides Car Transfer ("WHV Guides", "we") and the person or business requesting a vehicle relocation ("Client", "you").</P>
          <P>It applies from the moment a request is submitted, whether or not a formal quote has been confirmed.</P>
        </Section>

        <Section num="2" title="What We Do">
          <P>Our role is to coordinate the transfer on your behalf. That means:</P>
          <UL items={[
            'Receiving your relocation request and gathering the relevant details;',
            'Finding an available driver from our community network;',
            'Sharing the transfer details with the driver and confirming the booking;',
            'Collecting payment from you and passing the driver\'s fee on to them.',
          ]} />
          <P>We don't employ drivers, handle the vehicle, or provide insurance. Drivers are independent individuals who accept bookings through our platform - similar to how ride-share or delivery platforms operate.</P>
        </Section>

        <Section num="3" title="Your Responsibilities">
          <P>Before a transfer takes place, please make sure:</P>
          <UL items={[
            'The vehicle is registered, roadworthy, and legal to drive in the relevant state or territory;',
            'Your insurance policy covers the vehicle when driven by a third party - if it doesn\'t, please arrange cover before the transfer;',
            'The vehicle has enough fuel, or you\'ve let us know how to handle fuel along the way;',
            'Personal belongings and valuables have been removed;',
            'You\'ve given us accurate pickup and drop-off details, and you\'re reachable during the transfer.',
          ]} />
        </Section>

        <Section num="4" title="Insurance">
          <P>We don't provide or arrange insurance for any transfer. It's your responsibility to ensure your vehicle is covered when driven by someone outside your policy.</P>
          <P>Most comprehensive car insurance policies can be extended to cover third-party drivers - we recommend checking with your insurer before booking. If you're unsure, a short-term insurance add-on is usually straightforward to arrange.</P>
          <P>If a claim is declined because third-party driving wasn't covered, that falls outside what we're able to assist with.</P>
        </Section>

        <Section num="5" title="About Our Drivers">
          <P>Drivers in our network are independent individuals - they're not employees, contractors, or representatives of WHV Guides. We match them to transfers based on availability and route.</P>
          <P>We don't carry out formal background checks or licence verifications. You're engaging the driver as an independent person, and we'd recommend documenting the vehicle's condition at pickup as a precaution.</P>
        </Section>

        <Section num="6" title="Our Liability">
          <P>As a coordination platform, our liability is limited to the fee you paid for the specific transfer in question. We're not in a position to cover vehicle damage, third-party claims, delays, or losses arising from a driver's actions - these are the responsibility of the parties directly involved.</P>
          <P>Nothing here affects any rights you may have under the Australian Consumer Law.</P>
        </Section>

        <Section num="7" title="Pricing and Payment">
          <UL items={[
            'Base rate: $0.60 per kilometre (AUD), based on driving distance from pickup to destination;',
            'Fuel: if the vehicle doesn\'t have sufficient fuel at pickup, actual fuel costs will be added;',
            'Overnight stays: if the route requires an overnight stop, a $100/night accommodation allowance applies;',
            'A written quote is provided before every transfer - nothing proceeds without your confirmation;',
            'Payment is due within 7 days of the invoice date;',
            'We manage payment to the driver on your behalf - please don\'t pay the driver directly unless we\'ve agreed otherwise;',
            'All amounts are in AUD and include GST where applicable.',
          ]} />
        </Section>

        <Section num="8" title="Cancellations">
          <UL items={[
            'More than 4 hours before pickup: no charge;',
            'Less than 4 hours before pickup: up to $50 may apply;',
            'After the driver has already left for pickup: up to $100 may apply;',
            'No-show without notice: the full invoice may be issued;',
            'If we can\'t find a driver for your booking: you\'ll be notified promptly and there\'s no charge.',
          ]} />
        </Section>

        <Section num="9" title="Vehicle Condition">
          <P>We recommend taking photos of your vehicle before handover and noting any pre-existing damage with the driver at pickup. This protects both parties if there's any question about the vehicle's condition after delivery.</P>
          <P>If you notice anything after delivery, please let us know within 24 hours - after that, the vehicle is considered accepted in its delivered condition.</P>
        </Section>

        <Section num="10" title="Indemnification">
          <P>If a third-party claim arises from a transfer you requested - particularly where inaccurate information was provided or insurance wasn't in place - you agree to cover any reasonable costs that result for WHV Guides.</P>
        </Section>

        <Section num="11" title="Your Confirmation">
          <P>By submitting a request, you confirm that:</P>
          <UL items={[
            'You have the authority to arrange the transfer of the vehicle;',
            'The vehicle is lawfully in your possession;',
            'The information you\'ve provided is accurate;',
            'You\'re at least 18, or acting on behalf of a registered business.',
          ]} />
        </Section>

        <Section num="12" title="Unexpected Circumstances">
          <P>If something outside our control - severe weather, road closures, government restrictions, or similar - affects a transfer, we'll let you know as soon as possible and work with you to reschedule.</P>
        </Section>

        <Section num="13" title="Disputes">
          <P>If something goes wrong, reach out to us directly - most issues can be resolved quickly. If needed, we're happy to engage a mediator before either party considers formal proceedings. This agreement is governed by the laws of Victoria, Australia.</P>
        </Section>

        <Section num="14" title="General">
          <UL items={[
            'These terms represent the full agreement between us for each transfer;',
            'If any part is found unenforceable, the rest remains in effect;',
            'We may update these terms from time to time - the current version is always on our website;',
            'Notices should be sent by email to the relevant contact address.',
          ]} />
        </Section>

        <Section num="15" title="Acceptance">
          <P>Submitting a transfer request - by any channel - means you've read and agreed to these terms. No signature needed.</P>
          <div style={{ background: NAVY, borderRadius: 12, padding: '1.25rem 1.5rem', marginTop: '1.25rem' }}>
            <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.9, margin: 0 }}>
              <strong style={{ color: '#fff' }}>WHV Guides Car Transfer</strong><br />
              Email: <a href="mailto:info@whvguides.com.au" style={{ color: '#86EFAC' }}>info@whvguides.com.au</a><br />
              WhatsApp: <a href="https://wa.me/61403873376" style={{ color: '#86EFAC' }}>+61 403 873 376</a><br />
              Jurisdiction: Victoria, Australia
            </p>
          </div>
        </Section>

      </div>

      <div style={{ background: NAVY, padding: '1.25rem 2rem', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,.3)' }}>
        &copy; 2026 WHV Guides Car Transfer - All rights reserved
      </div>
    </div>
  )
}

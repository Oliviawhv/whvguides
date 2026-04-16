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
            <strong>Effective date:</strong> April 2026. This agreement applies to all vehicle relocation requests made through WHV Guides Car Transfer ("WHV Guides", "we", "us"). By submitting a request via email, WhatsApp, phone, or any other channel, you ("Client", "you") agree to be bound by these terms.
          </p>
          <P>We act solely as a coordination platform, connecting clients with independent drivers. We do not own, operate, or control any vehicles, and we do not provide transport services directly. All driving is carried out by independent third-party drivers who are not employees, agents, or representatives of WHV Guides.</P>
        </div>

        <Section num="1" title="Parties">
          <P>This agreement is between WHV Guides Car Transfer ("WHV Guides") and the person or business requesting a vehicle relocation ("Client").</P>
          <P>It applies from the moment a request is submitted, whether or not a formal quote has been confirmed.</P>
        </Section>

        <Section num="2" title="Scope of Service">
          <P>WHV Guides acts solely as a coordination platform. Our role is limited to:</P>
          <UL items={[
            'processing your request;',
            'matching you with an available driver;',
            'facilitating the booking; and',
            'managing payment.',
          ]} />
          <P>We do not provide transport services, operate vehicles, or employ drivers. All driving services are carried out by independent third-party drivers, and WHV Guides has no control over their actions or performance.</P>
        </Section>

        <Section num="3" title="Client Responsibilities">
          <P>You must ensure, prior to any transfer, that:</P>
          <UL items={[
            'the vehicle is legally compliant, roadworthy, and safe to drive;',
            'appropriate insurance is in place for third-party drivers;',
            'all information provided is accurate and complete;',
            'the vehicle is prepared for transfer, including fuel and removal of personal items;',
            'you are available and contactable as required.',
          ]} />
          <P>WHV Guides accepts no responsibility for any issues arising from failure to meet these obligations.</P>
        </Section>

        <Section num="4" title="Insurance">
          <P>WHV Guides does not provide, arrange, or verify insurance for any transfer.</P>
          <P>You must ensure that your vehicle is fully insured and that your policy covers use by third-party drivers prior to the transfer. If such coverage is not in place, you accept full responsibility for any resulting loss or damage.</P>
          <P>WHV Guides is not liable for any claim, loss, or damage where insurance is unavailable, insufficient, or declined for any reason.</P>
        </Section>

        <Section num="5" title="Drivers">
          <P>All drivers are independent third parties. Nothing in this agreement creates any employment, agency, or contractual relationship between WHV Guides and any driver.</P>
          <P>WHV Guides does not control, supervise, or direct drivers and accepts no responsibility for their actions, omissions, or performance.</P>
          <P>Drivers are matched to transfers based on availability and route.</P>
        </Section>

        <Section num="6" title="Limitation of Liability">
          <P>To the maximum extent permitted by law, WHV Guides excludes all liability arising in connection with any vehicle transfer.</P>
          <P>WHV Guides is not liable for any:</P>
          <UL items={[
            'damage to, loss of, or theft of the vehicle;',
            'delays, disruptions, or failure to complete a transfer;',
            'acts, omissions, or negligence of any driver;',
            'third-party claims or liabilities;',
            'loss of income, business interruption, or any indirect or consequential loss.',
          ]} />
          <P>All risks associated with the transfer remain solely between the Client and the driver.</P>
          <P>Where liability cannot be excluded under applicable law, WHV Guides' total liability is strictly limited to the amount paid for the relevant transfer.</P>
          <P>Nothing in this agreement excludes or limits any rights you may have under the Australian Consumer Law.</P>
        </Section>

        <Section num="7" title="Pricing and Payment">
          <UL items={[
            'All pricing is provided in Australian Dollars (AUD).',
            'Base rate: $0.60 per kilometre, calculated based on the estimated driving distance;',
            'Additional costs may apply, including fuel, return travel, and overnight accommodation where required;',
            'A written quote is issued prior to each transfer and must be approved before the booking proceeds;',
            'Payment is due within 7 days of the invoice date;',
            'WHV Guides facilitates payment to the driver - direct payment to drivers is not permitted unless agreed;',
            'All amounts exclude GST unless otherwise specified.',
          ]} />
        </Section>

        <Section num="8" title="Cancellation Policy">
          <P>Cancellations are subject to the following terms:</P>
          <UL items={[
            'More than 4 hours before pickup: no charge;',
            'Less than 4 hours before pickup: up to $50 cancellation fee;',
            'After driver dispatch: up to $100 cancellation fee;',
            'No-show without notice: full booking fee may be charged;',
            'If no driver is available, no fee will be charged.',
          ]} />
          <P>Cancellation fees reflect administrative and operational costs already incurred. WHV Guides reserves full discretion in determining applicable fees.</P>
        </Section>

        <Section num="9" title="Vehicle Condition">
          <P>The Client is solely responsible for documenting the condition of the vehicle prior to transfer. It is required that photos are taken at both pickup and delivery, and any pre-existing damage is recorded at the time of handover.</P>
          <P>Any claims relating to vehicle condition must be submitted within 24 hours of delivery, after which the vehicle is deemed fully accepted in its delivered condition.</P>
        </Section>

        <Section num="10" title="Indemnification">
          <P>To the fullest extent permitted by law, you agree to indemnify, defend, and hold harmless WHV Guides and its officers, employees, and affiliates from and against any and all claims, demands, liabilities, damages, losses, costs, or expenses (including legal fees) arising out of or in connection with:</P>
          <UL items={[
            'inaccurate or incomplete information provided by you;',
            'failure to ensure appropriate insurance coverage;',
            'breach of this agreement; or',
            'any third-party claim related to a transfer arranged at your request.',
          ]} />
          <P>This indemnity survives completion of the transfer.</P>
        </Section>

        <Section num="11" title="Client Warranties">
          <P>By submitting a request, you confirm and warrant that:</P>
          <UL items={[
            'you are legally authorised to arrange the transfer;',
            'the vehicle is lawfully in your possession and eligible for transfer;',
            'all information provided to WHV Guides is accurate, complete, and not misleading;',
            'you are at least 18 years old or duly authorised to act for a business.',
          ]} />
        </Section>

        <Section num="12" title="Unexpected Circumstances">
          <P>WHV Guides shall not be liable for any delay, suspension, or failure to perform its obligations where such delay or failure is caused by events beyond its reasonable control, including but not limited to severe weather, road closures, traffic incidents, mechanical breakdowns, or government actions. Where such circumstances occur, WHV Guides will use reasonable efforts to notify the Client and reschedule the transfer where possible.</P>
        </Section>

        <Section num="13" title="Disputes">
          <P>The parties agree to use their best efforts to resolve any dispute arising out of or in connection with this agreement through direct communication in the first instance. If the dispute remains unresolved, the parties may proceed to mediation prior to commencing any court proceedings.</P>
          <P>This agreement is governed by the laws of Victoria, Australia. The parties irrevocably submit to the exclusive jurisdiction of the courts of Victoria.</P>
        </Section>

        <Section num="14" title="General">
          <UL items={[
            'This agreement constitutes the entire agreement between the parties in relation to each transfer and supersedes all prior agreements, representations, or understandings.',
            'If any provision is held to be invalid or unenforceable, that provision will be severed and the remainder will remain in full force and effect.',
            'WHV Guides reserves the right to amend these terms at any time. The updated version will be published on our website and will apply to all future transfers.',
            'Any notices under this agreement must be made in writing and sent via email to the designated contact address.',
          ]} />
        </Section>

        <Section num="15" title="Acceptance">
          <P>By submitting a transfer request, whether by email, WhatsApp, phone, or any other method, you confirm that you have read, understood, and agree to be bound by these terms and conditions. This agreement is legally binding and does not require a physical or electronic signature.</P>
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

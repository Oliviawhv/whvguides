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

const Section = ({ title, children }) => (
  <div style={{ marginBottom:'2.5rem' }}>
    <h3 style={{ fontSize:14, fontWeight:700, color:GREEN_DARK, textTransform:'uppercase', letterSpacing:'.06em', marginBottom:'.5rem', marginTop:'1.25rem' }}>{title}</h3>
    {children}
  </div>
)

export default function CarTransferLegal() {
  return (
    <div style={{ fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif', background:'#F8FAFC', minHeight:'100vh' }}>

      <nav style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 2rem', height:58, background:NAVY, position:'sticky', top:0, zIndex:100 }}>
        <a href="/whvguides/car" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
          <Logo/>
          <div>
            <div style={{ fontSize:15, fontWeight:800, color:'#fff' }}>WHV Guides</div>
            <div style={{ fontSize:10, color:'rgba(255,255,255,.4)', marginTop:2 }}>Car Transfer</div>
          </div>
        </a>
        <a href="mailto:info@srtgsdfg.com.au" style={{ background:GREEN, color:'#fff', fontSize:13, fontWeight:700, padding:'9px 20px', borderRadius:8, textDecoration:'none' }}>Request Transfer</a>
      </nav>

      <div style={{ maxWidth:760, margin:'0 auto', padding:'3rem 2rem 5rem' }}>
        <a href="/whvguides/car" style={{ display:'inline-flex', alignItems:'center', gap:6, color:GREEN_DARK, fontSize:14, fontWeight:600, textDecoration:'none', marginBottom:'2rem' }}>← Back to main site</a>

        {/* CLIENT AGREEMENT */}
        <div style={{ marginBottom:'2.5rem' }}>
          <h1 style={{ fontSize:32, fontWeight:800, color:NAVY, marginBottom:'.5rem' }}>Client Agreement</h1>
          <p style={{ fontSize:14, color:GRAY, marginBottom:'3rem', paddingBottom:'1.5rem', borderBottom:`1px solid ${BORDER}` }}>
            Effective from the date of first use. By submitting a vehicle transfer request, the Client agrees to the following terms.
          </p>

          <Section title="1. Parties">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>This agreement is between WHV Guides Car Transfer ("WHV Guides", "we", "us") and the rental company or individual submitting a vehicle transfer request ("Client", "you").</p>
          </Section>

          <Section title="2. Nature of service - intermediary only">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>WHV Guides acts solely as an intermediary and coordination service. We connect Clients with independent drivers sourced from our community network. WHV Guides is not a transport company, not a carrier, and does not take possession of, operate, or have any control over any vehicle at any time. All driving is performed by the independent driver engaged for the specific transfer.</p>
          </Section>

          <Section title="3. Limitation of liability">
            <ul style={{ paddingLeft:'1.25rem', marginBottom:'.75rem' }}>
              {[
                'WHV Guides accepts no liability for any damage to, loss of, or theft of the vehicle during transit.',
                'WHV Guides accepts no liability for any delay, failure to deliver, or consequential losses arising from a transfer.',
                'The Client acknowledges that the driver is an independent third party and not an employee or agent of WHV Guides.',
                "The Client's sole recourse for any vehicle-related claim lies against the driver and/or the applicable insurance policy.",
              ].map((item, i) => (
                <li key={i} style={{ fontSize:14, color:GRAY, lineHeight:1.8, marginBottom:'.25rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="4. Insurance">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>It is the Client's responsibility to ensure an appropriate insurance policy is in place covering the driver prior to the transfer commencing. WHV Guides does not arrange, provide, or guarantee any insurance coverage. We strongly recommend the Client confirm insurance with their insurer or fleet provider before confirming any booking.</p>
          </Section>

          <Section title="5. Payment">
            <ul style={{ paddingLeft:'1.25rem', marginBottom:'.75rem' }}>
              {[
                'Pricing is calculated at $0.60 per kilometre, plus fuel costs where applicable, plus $100 per night if an overnight stay is required.',
                'A confirmed written quote will be provided before each transfer commences.',
                'Payment is due within 7 days of invoice unless otherwise agreed in writing.',
                "WHV Guides manages all payment to the driver on the Client's behalf.",
              ].map((item, i) => (
                <li key={i} style={{ fontSize:14, color:GRAY, lineHeight:1.8, marginBottom:'.25rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="6. Cancellation">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>Cancellations must be made in writing (email) at least 4 hours before the scheduled pickup. Cancellations made after the driver has been dispatched may incur a cancellation fee of up to $50 to cover the driver's time.</p>
          </Section>

          <Section title="7. Governing law">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>This agreement is governed by the laws of the State of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.</p>
          </Section>
        </div>

        <hr style={{ border:'none', borderTop:`2px solid ${BORDER}`, margin:'3rem 0' }} id="privacy"/>

        {/* PRIVACY POLICY */}
        <div>
          <h1 style={{ fontSize:32, fontWeight:800, color:NAVY, marginBottom:'.5rem' }}>Privacy Policy</h1>
          <p style={{ fontSize:14, color:GRAY, marginBottom:'3rem', paddingBottom:'1.5rem', borderBottom:`1px solid ${BORDER}` }}>
            Last updated: April 2026. Compliant with the Australian Privacy Act 1988.
          </p>

          <Section title="1. Information we collect">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>We collect information you provide when submitting a transfer request, including: company name, contact name, email address, phone number, vehicle details, pickup and drop-off locations, and transfer date/time.</p>
          </Section>

          <Section title="2. How we use your information">
            <ul style={{ paddingLeft:'1.25rem', marginBottom:'.75rem' }}>
              {[
                'To coordinate and confirm your vehicle transfer.',
                'To communicate with you about the status of your request.',
                'To issue invoices and process payments.',
                'To maintain internal records and improve our service.',
              ].map((item, i) => (
                <li key={i} style={{ fontSize:14, color:GRAY, lineHeight:1.8, marginBottom:'.25rem' }}>{item}</li>
              ))}
            </ul>
          </Section>

          <Section title="3. Sharing of information">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>We share only the minimum necessary information (such as pickup address and contact details) with the assigned driver for the purpose of completing the transfer. We do not sell, rent, or otherwise disclose your personal information to third parties for marketing purposes.</p>
          </Section>

          <Section title="4. Data retention">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>We retain transfer and contact records for a period of 2 years for record-keeping and dispute resolution purposes, after which they are securely deleted.</p>
          </Section>

          <Section title="5. Your rights">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>Under the Australian Privacy Act 1988, you have the right to access, correct, or request deletion of your personal information. To exercise these rights, contact us at <a href="mailto:info@srtgsdfg.com.au" style={{ color:GREEN }}>info@srtgsdfg.com.au</a>.</p>
          </Section>

          <Section title="6. Contact">
            <p style={{ fontSize:14, color:GRAY, lineHeight:1.8 }}>For any privacy-related queries, please contact WHV Guides at <a href="mailto:info@srtgsdfg.com.au" style={{ color:GREEN }}>info@srtgsdfg.com.au</a>.</p>
          </Section>
        </div>
      </div>

      <div style={{ background:NAVY, padding:'1.25rem 2rem', textAlign:'center', fontSize:12, color:'rgba(255,255,255,.3)' }}>
        &copy; 2026 WHV Guides Car Transfer - ABN [your ABN here] - All rights reserved
      </div>
    </div>
  )
}

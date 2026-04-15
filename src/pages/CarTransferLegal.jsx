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

const Highlight = ({ children }) => (
  <div style={{ background: '#FEF9C3', border: '1px solid #FDE047', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '1rem' }}>
    <p style={{ fontSize: 13.5, color: '#713F12', lineHeight: 1.8, margin: 0, fontWeight: 500 }}>{children}</p>
  </div>
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
            <strong>Effective date:</strong> April 2026. This agreement governs all vehicle relocation requests submitted to WHV Guides Car Transfer. By submitting a transfer request — whether by email, WhatsApp, phone, or any other means — the Client accepts these terms in full, without reservation.
          </p>
          <Highlight>
            IMPORTANT: WHV Guides acts exclusively as an independent intermediary. We are not a transport company, not a carrier, and not a logistics operator. We do not drive, possess, operate, or control any vehicle at any time. All driving is performed entirely by independent third-party drivers who are not employees, contractors, or agents of WHV Guides. The Client acknowledges and accepts this distinction before placing any request.
          </Highlight>
        </div>

        <Section num="1" title="Parties to This Agreement">
          <P>This Agreement is entered into between:</P>
          <UL items={[
            'WHV Guides Car Transfer ("WHV Guides", "we", "us", "our") — the intermediary coordination service, operated in Australia; and',
            'The rental company, fleet operator, car dealership, individual, or any other person or entity submitting a vehicle relocation request ("Client", "you", "your").',
          ]} />
          <P>This Agreement applies to every transfer request submitted, regardless of whether a formal written quote has been accepted. Submission of a request constitutes acceptance of these terms.</P>
        </Section>

        <Section num="2" title="Nature of Service — Intermediary Role Only">
          <P>WHV Guides provides a coordination and intermediary service only. Our role is limited to:</P>
          <UL items={[
            'Receiving relocation requests from the Client;',
            'Identifying and contacting an available independent driver from our community network;',
            'Communicating transfer details (pickup location, destination, vehicle description, timing) to the driver;',
            'Confirming the booking to the Client once a driver has accepted;',
            'Managing payment from the Client and remitting the driver\'s fee; and',
            'Following up with the driver and Client to confirm completion.',
          ]} />
          <P>WHV Guides does not:</P>
          <UL items={[
            'Employ, engage, or subcontract any driver — all drivers are independent individuals operating on their own account;',
            'Take physical possession, custody, or control of any vehicle at any point;',
            'Drive or operate any vehicle;',
            'Provide, arrange, or underwrite any insurance of any kind;',
            'Guarantee the conduct, skill, licensing status, or sobriety of any driver;',
            'Carry or accept any goods, property, or passengers on behalf of the Client.',
          ]} />
          <Highlight>
            The relationship between WHV Guides and any driver is that of an independent referral only. No employment, agency, partnership, or joint venture exists between WHV Guides and any driver at any time. The Client acknowledges that the driver is an entirely independent third party and that WHV Guides has no capacity to direct, instruct, or supervise the driver once a booking has been confirmed.
          </Highlight>
        </Section>

        <Section num="3" title="Client Responsibilities">
          <P>The Client agrees and warrants that, prior to any transfer commencing:</P>
          <UL items={[
            'The vehicle is registered and roadworthy under the applicable laws of the relevant Australian state or territory;',
            'The vehicle is covered by a valid comprehensive or third-party insurance policy that extends coverage to drivers who are not the registered owner or a named driver — if the existing policy does not extend to third-party drivers, the Client must obtain appropriate coverage before the transfer commences;',
            'The Client has notified their insurer that an independent driver will be operating the vehicle and has received confirmation that such use is covered;',
            'The vehicle has sufficient fuel for the journey or has communicated fuel arrangements to WHV Guides in advance;',
            'All personal belongings and valuables have been removed from the vehicle prior to handover to the driver;',
            'The vehicle is in a safe and driveable condition, with no mechanical defects that could endanger the driver or other road users;',
            'The Client will provide accurate and complete information regarding pickup location, destination, vehicle details, and any access requirements;',
            'The Client will be contactable (or nominate a contactable representative) during the transfer period.',
          ]} />
          <P>The Client indemnifies and holds harmless WHV Guides from any loss, claim, fine, or liability arising from a failure to meet any of the above obligations.</P>
        </Section>

        <Section num="4" title="Insurance — Critical Disclaimer">
          <Highlight>
            WHV Guides does not provide, arrange, procure, or guarantee any insurance policy of any kind in connection with any vehicle transfer. This is an absolute and unconditional exclusion.
          </Highlight>
          <P>It is the Client's sole and non-delegable responsibility to:</P>
          <UL items={[
            'Ensure that a valid and appropriate insurance policy is in force before any transfer commences;',
            'Confirm with their insurer in writing that the policy covers the vehicle when operated by a third-party driver who is not a named driver;',
            'Confirm that Working Holiday Visa holders and foreign nationals with valid Australian driving licences or international driving permits are covered under the policy;',
            'Accept full financial liability for any vehicle damage, third-party damage, personal injury, property damage, or any other loss that occurs during a transfer if insurance is not in place or if the insurer declines a claim for any reason.',
          ]} />
          <P>WHV Guides accepts zero liability for any claim or loss arising from the absence, inadequacy, or refusal of any insurance policy. This limitation applies regardless of the reason for the insurance failure, including but not limited to: unlicensed driver, driver visa status, excluded driver category, or mechanical failure pre-existing at the time of handover.</P>
          <P>The Client acknowledges that they have been expressly advised to verify insurance coverage and that proceeding with a transfer constitutes a representation that adequate coverage is in force.</P>
        </Section>

        <Section num="5" title="Driver Independence and No Agency">
          <P>All drivers sourced by WHV Guides are independent individuals operating entirely on their own account. The following terms apply absolutely:</P>
          <UL items={[
            'No driver is an employee, officer, agent, representative, or subcontractor of WHV Guides;',
            'WHV Guides has no authority to direct the manner in which any driver operates a vehicle;',
            'WHV Guides does not verify, guarantee, or warrant any driver\'s: current licence validity; driving history or prior traffic or criminal offences; physical or mental fitness to drive; compliance with road laws during the transfer; blood alcohol level or sobriety at the time of driving; or visa or work entitlement status;',
            'WHV Guides does not conduct formal police checks or formal licensing verification on drivers;',
            'The Client accepts the driver on an "as-is" basis and bears all risk associated with engaging an independent driver through our coordination service.',
          ]} />
          <P>To the maximum extent permitted by applicable law, WHV Guides expressly excludes all liability for any act, omission, negligence, recklessness, or unlawful conduct of any driver engaged through our network.</P>
        </Section>

        <Section num="6" title="Limitation of Liability">
          <Highlight>
            To the fullest extent permitted by Australian law, WHV Guides' total aggregate liability to the Client for any claim arising out of or in connection with these terms or any transfer — whether in contract, tort (including negligence), statute, or otherwise — is limited to the fee paid by the Client to WHV Guides for the specific transfer giving rise to the claim.
          </Highlight>
          <P>Without limiting the foregoing, WHV Guides expressly excludes all liability for:</P>
          <UL items={[
            'Any damage to, theft of, destruction of, or loss of the vehicle during or after a transfer;',
            'Any damage to third-party property caused by the driver;',
            'Any personal injury to the driver, any occupant, or any third party;',
            'Any delay in delivery or failure to deliver the vehicle on time;',
            'Consequential, indirect, special, incidental, or punitive loss of any kind, including lost revenue, lost profits, loss of use, or business interruption;',
            'Any claim arising from the driver\'s breach of road laws, criminal conduct, or negligence;',
            'Any loss arising from a breakdown, mechanical failure, or accident;',
            'Any loss arising from the Client\'s failure to maintain adequate insurance;',
            'Any claim arising from incorrect information provided by the Client at the time of booking.',
          ]} />
          <P>Nothing in this Agreement excludes any guarantee, right, or remedy that cannot be excluded under the Australian Consumer Law or any other applicable legislation.</P>
        </Section>

        <Section num="7" title="Pricing and Payment">
          <P>The following pricing structure applies to all transfers unless otherwise agreed in writing:</P>
          <UL items={[
            'Base rate: $0.60 (AUD) per kilometre, calculated on the driving distance from pickup to destination;',
            'Fuel costs: where the vehicle does not have sufficient fuel at the time of pickup, actual fuel costs incurred by the driver will be added to the invoice;',
            'Overnight accommodation: where a transfer requires the driver to stay overnight, an accommodation allowance of $100 (AUD) per night will be added;',
            'A written quote will be provided by WHV Guides before any transfer commences — no transfer will proceed without a confirmed quote;',
            'The confirmed quote is based on information provided by the Client — if actual driving distance or circumstances differ materially, WHV Guides reserves the right to adjust the final invoice with prior notice;',
            'Payment is due within 7 (seven) days of the invoice date unless otherwise agreed in writing;',
            'Overdue invoices may attract a late payment fee of 10% per annum, calculated daily;',
            'WHV Guides manages all payment to the driver on the Client\'s behalf — the Client does not pay the driver directly unless otherwise agreed in writing;',
            'All prices are in Australian Dollars (AUD) and are inclusive of GST where applicable.',
          ]} />
        </Section>

        <Section num="8" title="Cancellation and Modification">
          <UL items={[
            'Cancellations notified in writing more than 4 hours before the scheduled pickup: no cancellation fee;',
            'Cancellations less than 4 hours before scheduled pickup: a cancellation fee of up to $50 (AUD) may apply;',
            'Cancellations after the driver has commenced travel to the pickup location: a cancellation fee of up to $100 (AUD) may apply;',
            'No-show by the Client at the agreed pickup location without prior notice: full invoice may be issued;',
            'Transfer date or location modifications must be requested in writing and are subject to driver availability;',
            'If WHV Guides is unable to source a suitable driver for a confirmed booking, the Client will be notified as soon as practicable and no charge will apply.',
          ]} />
        </Section>

        <Section num="9" title="Vehicle Condition and Handover">
          <UL items={[
            'It is the Client\'s responsibility to document the pre-transfer condition of the vehicle (including photographs) before handing the vehicle to the driver;',
            'WHV Guides strongly recommends a condition inspection with the driver at pickup, with any pre-existing damage noted in writing;',
            'WHV Guides does not conduct vehicle inspections and accepts no liability for any alleged damage where no pre-transfer condition documentation exists;',
            'Upon delivery, the Client must inspect the vehicle and notify WHV Guides of any damage within 24 hours of confirmed delivery — failure to notify within this period constitutes acceptance of the vehicle in its delivered condition;',
            'WHV Guides will confirm delivery completion with the Client once the driver reports successful handover.',
          ]} />
        </Section>

        <Section num="10" title="Indemnification">
          <P>The Client agrees to indemnify, defend, and hold harmless WHV Guides, its owners, officers, representatives, and associates from and against any and all claims, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to:</P>
          <UL items={[
            'The Client\'s use of WHV Guides\' coordination service;',
            'Any transfer conducted pursuant to a request by the Client;',
            'Any breach of this Agreement by the Client;',
            'Any third-party claim arising from the operation of the vehicle by a driver sourced through WHV Guides;',
            'The Client\'s failure to maintain adequate insurance coverage;',
            'Inaccurate or incomplete information provided by the Client at the time of booking.',
          ]} />
        </Section>

        <Section num="11" title="Warranties and Representations">
          <P>By submitting a transfer request, the Client warrants and represents that:</P>
          <UL items={[
            'They have full legal authority to authorise the transfer of the vehicle;',
            'The vehicle is lawfully owned or in the lawful possession of the Client;',
            'The Client has not withheld any material information that would affect WHV Guides\' willingness to accept the booking;',
            'All information provided in connection with the transfer request is accurate, complete, and not misleading;',
            'The Client is not in breach of any contractual obligation to a third party (including a vehicle financier or fleet lessor) by authorising the transfer;',
            'The Client is at least 18 years of age or is acting on behalf of a legally registered business entity.',
          ]} />
        </Section>

        <Section num="12" title="Force Majeure">
          <P>WHV Guides will not be liable for any failure or delay in performing its obligations where such failure results from circumstances beyond its reasonable control, including but not limited to: natural disasters, extreme weather events, road closures, government restrictions, pandemic-related interruptions, civil unrest, or failure of third-party communication services.</P>
          <P>In such circumstances, WHV Guides will notify the Client as soon as practicable and will use reasonable endeavours to reschedule the transfer.</P>
        </Section>

        <Section num="13" title="Dispute Resolution">
          <UL items={[
            'Step 1 — Direct negotiation: the Client must notify WHV Guides in writing of the dispute with reasonable detail. WHV Guides will respond within 5 business days and the parties will attempt resolution by good-faith negotiation within 14 days;',
            'Step 2 — Mediation: if direct negotiation fails, the parties agree to engage a mutually agreed independent mediator before commencing formal legal proceedings;',
            'Step 3 — Litigation: if mediation is unsuccessful, either party may pursue the matter through the courts of the applicable jurisdiction.',
          ]} />
          <P>Nothing in this clause prevents WHV Guides from seeking urgent injunctive or interlocutory relief from a court of competent jurisdiction where necessary to protect its rights.</P>
        </Section>

        <Section num="14" title="Governing Law and Jurisdiction">
          <P>This Agreement is governed by the laws of the State of Victoria, Australia. The parties submit to the exclusive jurisdiction of the courts of Victoria for the resolution of any dispute arising under or in connection with this Agreement, except where Australian Consumer Law provides otherwise.</P>
        </Section>

        <Section num="15" title="General Provisions">
          <UL items={[
            'Entire agreement: this Agreement constitutes the entire agreement between the parties regarding the subject matter and supersedes all prior representations, negotiations, and communications;',
            'Severability: if any provision is found to be invalid or unenforceable, the remaining provisions continue in full force and effect;',
            'No waiver: a failure by WHV Guides to exercise any right under this Agreement does not constitute a waiver of that right;',
            'Variation: WHV Guides may update these terms at any time by publishing a revised version on its website — continued use of the service after publication constitutes acceptance;',
            'Assignment: the Client may not assign any rights or obligations without the prior written consent of WHV Guides;',
            'Notices: all notices must be in writing and delivered by email to the contact address of each party.',
          ]} />
        </Section>

        <Section num="16" title="Acceptance">
          <P>By submitting a vehicle transfer request to WHV Guides — whether by email, WhatsApp, phone, or any other communication channel — the Client confirms that they have read, understood, and agree to be bound by this Client Agreement in its entirety.</P>
          <P>No signature is required. Submission of a request constitutes full and binding acceptance of these terms.</P>
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
        &copy; 2026 WHV Guides Car Transfer — All rights reserved
      </div>
    </div>
  )
}

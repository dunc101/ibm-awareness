import { usePageTitle } from '../hooks/usePageTitle'

export default function AdvancedTravelPage() {
  usePageTitle('Travel Tips', 'Airline travel, accessible hotels, emergency preparedness, and TMA resources for traveling with IBM.')
  return (
    <>
      <div className="page-header">
        <h1>Travel Tips for Advanced IBM</h1>
        <p className="subtitle">Comprehensive guide to traveling with complex medical equipment and mobility limitations</p>
      </div>

      <div className="info-box warning">
        <strong>Planning is essential</strong>
        Traveling with advanced IBM requires extensive preparation. Start planning weeks or months
        in advance. The more equipment and care needs you have, the earlier you should begin.
      </div>

      <div className="card">
        <h2>Airline Travel</h2>
        <h3>Before You Book</h3>
        <ul>
          <li><strong>Contact the airline 48+ hours before travel</strong> to arrange wheelchair assistance and medical equipment transport</li>
          <li><strong>Request bulkhead or aisle seats</strong> for easier transfer</li>
          <li><strong>Know your rights</strong> under the Air Carrier Access Act</li>
          <li><strong>Consider travel insurance</strong> that covers medical equipment damage or loss</li>
        </ul>

        <h3>Wheelchair Transport</h3>
        <ul>
          <li>You can remain in your own wheelchair until the gate — it will be gate-checked</li>
          <li>Get a claim tag and document condition with photos before and after</li>
          <li>Some airlines allow folding power chairs as carry-on if they fit</li>
          <li>Request aisle chairs for boarding</li>
          <li>Consider shipping durable medical equipment (DME) ahead rather than relying on airline handling</li>
        </ul>

        <h3>Medical Equipment</h3>
        <ul>
          <li>Portable ventilators, suction machines, and CPAP/BiPAP are permitted as carry-on medical devices under FAA regulations</li>
          <li>Lithium batteries in power wheelchairs have specific IATA regulations — check airline policy in advance</li>
          <li>Carry documentation of all medical devices</li>
          <li>TSA provides PreCheck lanes for mobility devices</li>
        </ul>

        <div className="info-box danger">
          <strong>Wheelchair damage is common</strong>
          Airlines have a documented record of wheelchair damage. Always photograph your wheelchair
          before and after travel, and keep the claim tag. Consider shipping critical equipment
          ahead to your destination.
        </div>
      </div>

      <div className="card">
        <h2>Accessible Hotels</h2>
        <ul>
          <li><strong>Book ADA rooms early</strong> — roll-in shower rooms sell out quickly</li>
          <li><strong>Call ahead to confirm</strong> specific accessibility features</li>
          <li><strong>Request:</strong> Roll-in showers, grab bars, lowered beds, accessible bathrooms, wide doorways</li>
          <li><strong>Lower floors</strong> for easier evacuation</li>
          <li><strong>Verify</strong> wheelchair accessibility of restaurants, attractions, and transportation at your destination</li>
        </ul>
        <div className="info-box info">
          <strong>Accessibility review sites</strong>
          AccessibleGO and Wheel the World provide detailed hotel accessibility reviews from
          wheelchair users. Use these resources when planning your stay.
        </div>
      </div>

      <div className="card">
        <h2>Train Travel</h2>
        <ul>
          <li>Most Amtrak trains are wheelchair accessible</li>
          <li>Reserve accessible bedrooms or rooms in advance</li>
          <li>Stations have accessible boarding with lifts or ramps</li>
          <li>Plan extra time for transfers at stations</li>
        </ul>
      </div>

      <div className="card">
        <h2>Cruise Ships</h2>
        <ul>
          <li>Many cruise lines accommodate wheelchair users (Carnival, Royal Caribbean, Celebrity, Princess have accessible cabins)</li>
          <li><strong>Book early</strong> — accessible cabins are limited</li>
          <li>Request a cabin near elevators</li>
          <li>Contact the cruise line's accessibility desk in advance</li>
          <li>Research shore excursion accessibility in advance</li>
        </ul>
      </div>

      <div className="card">
        <h2>General Travel Tips</h2>
        <ul>
          <li>Plan extra time for all transfers and security</li>
          <li>Bring medications in carry-on luggage</li>
          <li>Carry a letter from your doctor explaining your condition and equipment</li>
          <li>Research medical facilities at your destination</li>
          <li>Download TMA's emergency resources to your phone</li>
          <li>Keep the Myositis Emergency Card in your wallet</li>
          <li>Bring backup supplies for all medical equipment</li>
        </ul>
      </div>

      <div className="card">
        <h2>Emergency Preparedness While Traveling</h2>
        <p>
          When traveling with IBM, you may end up in an ER far from your regular doctors.
          ER physicians almost never see IBM — it's rare enough that most have never encountered
          it. Without context, they may make wrong assumptions (e.g., treating it like regular
          polymyositis with high-dose steroids, which don't work for IBM and can cause harm).
          TMA's emergency resources solve this problem.
        </p>

        <h3>TMA Emergency Resources Kit</h3>
        <p>
          Download the full kit from{' '}
          <a href="https://myositis.org/myositis-library/myositis-resources/resources-for-an-emergency/" target="_blank" rel="noopener noreferrer">
            myositis.org
          </a>{' '}
          — it includes three essential documents:
        </p>

        <div className="tip-item">
          <div className="tip-icon">1</div>
          <div className="tip-content">
            <h4>Myositis Emergency Card</h4>
            <p>
              A wallet-sized card documenting your diagnosis, current medications, allergies,
              emergency contacts, and key medical details. Hand this to ER staff immediately
              upon arrival — it gives them the critical context they need in seconds.
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">2</div>
          <div className="tip-content">
            <h4>"Before You Dial 911: The 411 on Myositis in the ER"</h4>
            <p>
              A one-page guide written specifically for emergency room physicians. It explains
              what myositis is, why standard treatments like high-dose steroids don't work for
              IBM, and critical considerations: the patient may need their BiPAP/ventilator
              settings matched, dysphagia means aspiration risk during any sedation, CK levels
              may be normal despite active disease, and EMG findings can be misinterpreted.
              Keep copies in your wallet, phone, luggage, and with your travel companion.
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">3</div>
          <div className="tip-content">
            <h4>"My MyoHistory" Form</h4>
            <p>
              A pre-filled form that tells your medical story — when symptoms started, how the
              disease has progressed, what treatments you've tried, what works and what doesn't,
              your current equipment needs, and your care team's contact information. When you
              can't speak for yourself or time is critical, this form speaks for you.
            </p>
          </div>
        </div>


        <div style={{ margin: '20px 0' }}>
          <a
            href="https://myositis.org/myositis-library/myositis-resources/resources-for-an-emergency/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
            style={{ display: 'inline-flex', textDecoration: 'none' }}
          >
            <div className="resource-icon">📥</div>
            <div className="resource-info">
              <h4 style={{ color: 'var(--text)', fontFamily: 'Inter, sans-serif', fontWeight: 600, marginBottom: 4 }}>
                Download TMA Emergency Resources Kit
              </h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                myositis.org — Free PDF download. Print and carry all three documents.
              </p>
            </div>
          </a>
        </div>

        <div className="info-box warning">
          <strong>Print multiple copies</strong>
          Keep these documents in: your wallet, phone (photo or PDF), checked luggage, carry-on,
          hotel room, and with your travel companion. For wheelchair users, store copies in the
          wheelchair's storage compartment as well.
        </div>

        <h3>Before You Travel</h3>
        <ul>
          <li>Research hospitals and ERs at your destination — academic medical centers with neuromuscular programs are best</li>
          <li>Inform your travel companion about your condition, equipment, and emergency needs</li>
          <li>Carry copies of all prescriptions, medical records, and insurance information</li>
          <li>Save TMA's emergency hotline number in your phone: 800-821-7356</li>
          <li>Bring backup supplies for all medical equipment (batteries, tubing, supplies)</li>
        </ul>
      </div>
    </>
  )
}

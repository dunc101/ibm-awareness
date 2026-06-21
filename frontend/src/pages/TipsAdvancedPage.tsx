import { usePageTitle } from '../hooks/usePageTitle'

export default function TipsAdvancedPage() {
  usePageTitle('Advanced Stage Tips', 'Wheelchair selection, respiratory support, nutrition, pain management, and technology aids.')
  return (
    <>
      <div className="page-header">
        <h1>Advanced Stage Tips</h1>
        <p className="subtitle">Comprehensive guidance for wheelchair-bound patients — maintaining quality of life and safety</p>
      </div>

      <div className="info-box info">
        <strong>For patients and caregivers</strong>
        This page covers practical tips for advanced-stage IBM patients who are wheelchair-bound
        or have severe mobility limitations. For detailed information on travel and equipment,
        see the dedicated sections in the Advanced Stage section.
      </div>

      <div className="card">
        <h2>Wheelchair Selection and Use</h2>
        <div className="tip-item">
          <div className="tip-icon">椅</div>
          <div className="tip-content">
            <h4>Power vs. Manual Wheelchair</h4>
            <p>
              IBM typically requires a power wheelchair due to progressive arm weakness. A
              lightweight manual chair may work for short-term use but won't be sufficient
              as the disease progresses.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">座</div>
          <div className="tip-content">
            <h4>Essential Features</h4>
            <p>
              Tilt and recline for pressure relief, seat elevation for reaching counters and
              interacting at eye level, adequate battery life (15-20+ miles), and custom seating
              from a qualified ATP (Assistive Technology Professional).
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">护</div>
          <div className="tip-content">
            <h4>Pressure Relief</h4>
            <p>
              Perform weight shifts every 15-30 minutes to prevent pressure sores. Use a
              pressure-relieving cushion (gel, air, or memory foam). Inspect skin daily for
              redness or breakdown.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Home Care Setup</h2>
        <ul>
          <li><strong>Ceiling track lift:</strong> Enables safe transfers in bedroom and bathroom — the gold standard for home transfers</li>
          <li><strong>Portable Hoyer lift:</strong> Alternative to ceiling lift; can be moved between rooms</li>
          <li><strong>Transfer boards:</strong> For lateral transfers between surfaces</li>
          <li><strong>Widened doorways:</strong> Minimum 32 inches clearance for wheelchair access</li>
          <li><strong>Ramps:</strong> For all entry points; meet ADA slope requirements (1:12 ratio)</li>
          <li><strong>Emergency plan:</strong> Keep a medical information form accessible; inform EMS about your condition</li>
        </ul>
        <div className="info-box info">
          <strong>Training is essential</strong>
          All caregivers should receive proper transfer training from physical or occupational
          therapists. Improper technique can cause injury to both patient and caregiver.
        </div>
      </div>

      <div className="card">
        <h2>Communication Aids</h2>
        <ul>
          <li><strong>Voice-to-text software:</strong> For phones and computers when typing is difficult</li>
          <li><strong>Large touchscreen tablets:</strong> Easier than phones; stylus-compatible</li>
          <li><strong>Eye-tracking devices:</strong> For severe hand weakness — allows computer control with eye movements</li>
          <li><strong>AAC devices:</strong> Augmentative and Alternative Communication for speech difficulties</li>
          <li><strong>Smart speakers:</strong> Alexa, Google Home for voice-controlled home management</li>
          <li><strong>Simplified remotes:</strong> Large-button TV remotes and environmental controls</li>
        </ul>
      </div>

      <div className="card">
        <h2>Respiratory Support</h2>
        <p>
          IBM can eventually affect respiratory muscles. Regular monitoring and proactive management
          are essential.
        </p>
        <ul>
          <li><strong>BiPAP/BiPAP-ST:</strong> Non-invasive ventilation for sleep-disordered breathing; the most common respiratory intervention</li>
          <li><strong>Cough assist machines:</strong> Help clear secretions when cough becomes weak — critical for preventing pneumonia</li>
          <li><strong>Suction machines:</strong> For clearing secretions in severe cases</li>
          <li><strong>Pulmonary function monitoring:</strong> Regular PFTs including FVC and MIP/MEP at least annually</li>
        </ul>
        <div className="info-box warning">
          <strong>Sleep study recommended</strong>
          IBM patients are at increased risk for obstructive sleep apnea due to pharyngeal
          muscle weakness. A sleep study (polysomnography) should be part of routine monitoring.
        </div>
      </div>

      <div className="card">
        <h2>Nutrition Support</h2>
        <p>
          When swallowing becomes unsafe or inadequate, nutritional support is essential for
          maintaining strength and health.
        </p>
        <div className="info-box success">
          <strong>Feeding tubes are NOT end-of-life decisions</strong>
          For IBM patients, a feeding tube is a nutritional tool that maintains strength and
          health. Patients can continue eating orally while receiving tube nutrition as a
          supplement. Modern tubes are easy to care for and can be concealed under clothing.
        </div>
        <ul>
          <li><strong>PEG/G-tube:</strong> Most common for long-term use; tube surgically placed into the stomach</li>
          <li><strong>Formula options:</strong> Many nutritional formulas designed for tube feeding</li>
          <li><strong>Oley Foundation:</strong> Dedicated support organization for tube feeding (oley.org)</li>
          <li><strong>Consult a dietitian:</strong> Experienced with tube feeding for personalized nutrition plan</li>
        </ul>
      </div>

      <div className="card">
        <h2>Pain Management</h2>
        <p>
          IBM can cause pain from muscle cramps, joint stiffness, neuropathic pain, pressure
          sores, and muscle overuse from compensation.
        </p>
        <ul>
          <li>Discuss medications with your neurologist (muscle relaxants, neuropathic pain agents)</li>
          <li>Heat therapy: warm compresses for muscle stiffness</li>
          <li>Gentle stretching and range-of-motion exercises</li>
          <li>Massage therapy (gentle techniques)</li>
          <li>Regular weight shifts and proper cushion for pressure relief</li>
          <li>Acupuncture or TENS for some patients</li>
        </ul>
      </div>

      <div className="card">
        <h2>Technology Aids</h2>
        <ul>
          <li><strong>Smart home:</strong> Voice-controlled lights, thermostats, locks, and appliances</li>
          <li><strong>Eye-tracking computers:</strong> For severe hand weakness</li>
          <li><strong>Adaptive keyboards:</strong> Large keys, trackball mice, or eye-tracking input</li>
          <li><strong>Medical alert systems:</strong> Wearable buttons for emergency calls</li>
          <li><strong>Remote patient monitoring:</strong> At-home vital sign monitoring programs</li>
          <li><strong>Video calling:</strong> Staying connected with family, friends, and medical providers</li>
        </ul>
      </div>
    </>
  )
}

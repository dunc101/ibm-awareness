export default function AdvancedEquipmentPage() {
  return (
    <>
      <div className="page-header">
        <h1>Equipment Guide</h1>
        <p className="subtitle">Essential medical equipment for advanced IBM — what you need, costs, and insurance coverage</p>
      </div>

      <div className="card">
        <h2>Power Wheelchairs</h2>
        <p>
          When walking becomes unsafe or impossible, a power wheelchair becomes essential.
          IBM typically requires a power wheelchair due to progressive arm weakness.
        </p>
        <h3>Essential Features</h3>
        <ul>
          <li><strong>Tilt and recline:</strong> Essential for pressure relief and comfort throughout the day</li>
          <li><strong>Seat elevation:</strong> Allows reaching counters and interacting at eye level</li>
          <li><strong>Battery life:</strong> Ensure range meets daily needs (15-20+ miles for lead-acid; more for lithium)</li>
          <li><strong>Weight capacity:</strong> Choose a chair rated for your weight plus accessories</li>
          <li><strong>Portability:</strong> Consider a folding power chair if travel is important</li>
          <li><strong>Custom seating:</strong> Work with a seating specialist (ATP) for proper support</li>
        </ul>
        <h3>Costs and Insurance</h3>
        <ul>
          <li><strong>Cost:</strong> $5,000–$50,000+ depending on features</li>
          <li><strong>Medicare Part B:</strong> Covers power wheelchairs when documented as medically necessary</li>
          <li><strong>Requirements:</strong> Face-to-face evaluation, prescription, proof that manual wheelchair is insufficient</li>
          <li><strong>Tip:</strong> Work with a Complex Rehab Technology (CRT) supplier and get a seating evaluation from a qualified ATP</li>
        </ul>
      </div>

      <div className="card">
        <h2>Hospital Beds</h2>
        <p>
          Hospital beds are needed when transfers become unsafe, when head elevation is required
          for dysphagia, or when positioning for respiratory support is necessary.
        </p>
        <ul>
          <li><strong>Semi-electric:</strong> Head/foot adjustment powered, height manual</li>
          <li><strong>Full-electric:</strong> All adjustments powered — easier for caregivers</li>
          <li><strong>Cost:</strong> $500–$5,000+ depending on features</li>
          <li><strong>Insurance:</strong> Medicare and most insurers cover when medically necessary with physician documentation</li>
        </ul>
      </div>

      <div className="card">
        <h2>Ventilators (Non-Invasive)</h2>
        <p>
          IBM can cause respiratory muscle weakness requiring BiPAP or CPAP support, particularly
          at night.
        </p>
        <ul>
          <li><strong>BiPAP/BiPAP-ST:</strong> Most commonly used; provides two pressure levels</li>
          <li><strong>When needed:</strong> When sleep-disordered breathing or hypoventilation is detected</li>
          <li><strong>Cost:</strong> $1,500–$8,000+ for NIV units</li>
          <li><strong>Insurance:</strong> Covered when prescribed by pulmonologist/neurologist with documented respiratory compromise</li>
          <li><strong>Tip:</strong> Battery backup is essential for power outages</li>
        </ul>
        <div className="info-box warning">
          <strong>Hospital NIV availability</strong>
          Non-invasive ventilation units may not be available in all hospitals. Emergency
          departments may not have BiPAP machines immediately available. Always communicate
          your respiratory device settings to ER staff.
        </div>
      </div>

      <div className="card">
        <h2>Cough Assist Devices</h2>
        <p>
          Mechanical insufflation-exsufflation devices help patients cough effectively when
          respiratory muscles are too weak. Critical for clearing secretions and preventing
          pneumonia.
        </p>
        <ul>
          <li><strong>Examples:</strong> Philips CoughAssist, Emerson CoughAssist</li>
          <li><strong>When needed:</strong> When peak cough flow drops below 270 L/min, or frequent respiratory infections</li>
          <li><strong>Cost:</strong> $2,500–$5,000</li>
          <li><strong>Insurance:</strong> Generally covered by Medicare and commercial insurance with documentation</li>
        </ul>
      </div>

      <div className="card">
        <h2>Suction Machines</h2>
        <ul>
          <li><strong>When needed:</strong> For patients with dysphagia at risk of aspiration, or those on ventilators</li>
          <li><strong>Types:</strong> Portable (battery-powered for travel) and stationary units</li>
          <li><strong>Cost:</strong> $100–$2,000</li>
          <li><strong>Insurance:</strong> Usually covered by Medicare and commercial insurance with physician order</li>
        </ul>
      </div>

      <div className="card">
        <h2>Feeding Tubes</h2>
        <p>
          When dysphagia leads to inadequate nutrition, dehydration, or repeated aspiration
          pneumonia despite diet modifications.
        </p>
        <ul>
          <li><strong>PEG/G-tube:</strong> Most common for long-term use; tube surgically placed into the stomach</li>
          <li><strong>Nasogastric:</strong> Short-term use only</li>
          <li><strong>J-tube:</strong> Jejunostomy; for patients who can't tolerate gastric feeding</li>
          <li><strong>Cost:</strong> PEG placement: $2,000–$5,000; ongoing supplies: $200–$800/month</li>
          <li><strong>Insurance:</strong> Medicare and most insurers cover when medically necessary</li>
        </ul>
        <div className="info-box success">
          <strong>Feeding tubes are nutritional tools</strong>
          For IBM patients, a feeding tube is NOT an end-of-life intervention. The goal is
          maintaining nutrition and strength. Patients can still eat orally while receiving tube
          nutrition as a supplement.
        </div>
      </div>

      <div className="card">
        <h2>Braces and Splints</h2>
        <ul>
          <li><strong>Ankle-foot orthoses (AFOs):</strong> For foot drop</li>
          <li><strong>Wrist splints:</strong> For grip weakness</li>
          <li><strong>Knee braces:</strong> For quadriceps weakness</li>
          <li><strong>Cost:</strong> $100–$1,500 depending on type</li>
          <li><strong>Insurance:</strong> Typically covered by Medicare and commercial insurance with prescription</li>
        </ul>
      </div>

      <div className="card">
        <h2>Navigating Insurance for Equipment</h2>
        <ul>
          <li><strong>Denials are common:</strong> Many patients face initial denials. Document all functional limitations</li>
          <li><strong>Use the IBM Functional Rating Scale</strong> as supporting documentation (available at myositis.org)</li>
          <li><strong>Work with knowledgeable suppliers</strong> who can assist with prior authorizations and appeals</li>
          <li><strong>Medicare covers 80%</strong> of DME costs; supplemental insurance typically covers the remaining 20%</li>
          <li><strong>Ensure supplier is Medicare-enrolled</strong></li>
          <li><strong>Keep detailed records</strong> of all equipment needs, prescriptions, and denials</li>
        </ul>
        <div className="info-box info">
          <strong>TMA Practical Resources</strong>
          The Myositis Association maintains a list of patient assistance programs for medications
          and equipment costs at myositis.org.
        </div>
      </div>
    </>
  )
}

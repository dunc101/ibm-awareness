export default function AdvancedOverviewPage() {
  return (
    <>
      <div className="page-header">
        <h1>Advanced Stage IBM</h1>
        <p className="subtitle">Comprehensive support for wheelchair-bound patients and their caregivers</p>
      </div>

      <div className="info-box danger">
        <strong>Important</strong>
        This section is dedicated to people in the advanced stage of IBM who are completely
        immobile or wheelchair-bound. The challenges here are unique — from equipment needs
        to travel difficulties to finding hospitals with adequate resources. You are not alone.
      </div>

      <div className="card">
        <h2>What Defines the Advanced Stage</h2>
        <p>
          The advanced stage of IBM (typically 10+ years from symptom onset) is characterized by:
        </p>
        <ul>
          <li><strong>Wheelchair dependence:</strong> Most patients are unable to walk safely or at all</li>
          <li><strong>Severe limb weakness:</strong> Arms and legs significantly weakened; fine motor tasks nearly impossible</li>
          <li><strong>Respiratory involvement:</strong> Breathing may require assistance, especially during sleep</li>
          <li><strong>Severe dysphagia:</strong> Difficulty with both solids and liquids; possible feeding tube need</li>
          <li><strong>Full-time care needs:</strong> Most activities of daily living require assistance</li>
        </ul>
      </div>

      <div className="card">
        <h2>The Unique Challenge: Rare Disease + Equipment Dependency</h2>
        <p>
          IBM creates a particularly difficult situation for advanced-stage patients. The disease
          requires specialized equipment and care, but because it is relatively rare (affecting
          approximately 20,000 people in the US), many hospitals and healthcare facilities lack
          the necessary resources.
        </p>
        <div className="info-box warning">
          <strong>Hospital equipment shortages are real</strong>
          Many community hospitals do not stock MRI-compatible wheelchairs, specialized beds with
          tilt functions, adequate ventilator support, or EMG machines with trained technicians.
          This means advanced IBM patients often need to travel to academic medical centers for
          routine care — creating additional barriers.
        </div>
      </div>

      <div className="card">
        <h2>Key Challenges</h2>
        <div className="stat-row">
          <div className="stat-card">
            <div className="stat-number">50%</div>
            <div className="stat-label">of IBM patients develop dysphagia</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">48hr</div>
            <div className="stat-label">minimum airline notice for wheelchair</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">$5K-50K</div>
            <div className="stat-label">power wheelchair cost range</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">#1</div>
            <div className="stat-label">aspiration pneumonia is top cause of death</div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Navigation</h2>
        <p>Explore the dedicated sub-sections for detailed guidance:</p>
        <ul>
          <li><strong>Travel Tips:</strong> Airlines, accessible hotels, emergency preparedness</li>
          <li><strong>Equipment Guide:</strong> Wheelchairs, hospital beds, ventilators, feeding tubes</li>
          <li><strong>Caregiving:</strong> Transfers, daily care, caregiver burnout, respite options</li>
        </ul>
      </div>

      <div className="card">
        <h2>Emergency Preparedness</h2>
        <p>
          TMA provides essential emergency resources that every IBM patient should have:
        </p>
        <ul>
          <li><strong>Myositis Emergency Card:</strong> Wallet-sized card documenting essential information</li>
          <li><strong>"Before You Dial 911: The 411 on Myositis in the ER":</strong> One-page ER guidelines</li>
          <li><strong>"My MyoHistory" form:</strong> For telling your story to providers when time is critical</li>
        </ul>
        <div className="info-box info">
          <strong>Download these now</strong>
          Keep these in your wallet, phone, and with your travel companion at all times.
          Available at myositis.org/myositis-library/myositis-resources/resources-for-an-emergency/
        </div>
      </div>
    </>
  )
}

import { usePageTitle } from '../hooks/usePageTitle'

export default function TipsGeneralPage() {
  usePageTitle('General Tips', 'Explaining IBM to others, insurance navigation, support groups, clinical trials, and disability benefits.')
  return (
    <>
      <div className="page-header">
        <h1>General Tips</h1>
        <p className="subtitle">Practical advice that applies at any stage — from explaining IBM to others to navigating insurance</p>
      </div>

      <div className="card">
        <h2>Explaining IBM to Others</h2>
        <p>
          IBM is rare and invisible, making it difficult for others to understand. Here are
          ways to communicate effectively:
        </p>
        <ul>
          <li><strong>Simple explanation:</strong> "IBM is a progressive muscle disease that makes my muscles weak and tired. It's not contagious, and it's not something I did to myself."</li>
          <li><strong>Be specific about limitations:</strong> Instead of saying "I'm tired," say "I need to rest because my muscles fatigue quickly with activity."</li>
          <li><strong>Provide written information:</strong> Share TMA resources or printed fact sheets with family, friends, and coworkers</li>
          <li><strong>Educate your medical providers:</strong> Many doctors unfamiliar with IBM may not understand its progression; bring information to appointments</li>
          <li><strong>Use the IBM Functional Rating Scale:</strong> A standardized tool that helps quantify functional limitations (available at myositis.org)</li>
        </ul>
      </div>

      <div className="card">
        <h2>Insurance Navigation</h2>
        <p>
          Navigating insurance with a rare disease requires persistence and documentation.
        </p>
        <ul>
          <li><strong>Document everything:</strong> Keep detailed records of symptoms, limitations, doctor visits, and treatments</li>
          <li><strong>Get prior authorization:</strong> For specialized equipment, treatments, or therapies</li>
          <li><strong>Appeal denials:</strong> Many insurance denials can be overturned with proper documentation and physician letters</li>
          <li><strong>Use patient assistance programs:</strong> TMA maintains a list of pharmaceutical assistance programs</li>
          <li><strong>Medicare/Medicaid:</strong> Medicare covers power wheelchairs and home modifications with proper documentation</li>
          <li><strong>Long-term care insurance:</strong> File claims early — before you need extensive care</li>
          <li><strong>Disability insurance:</strong> Apply for SSDI or SSI if you can no longer work</li>
        </ul>
        <div className="info-box info">
          <strong>IBM Functional Rating Scale</strong>
          This standardized tool (available as PDF from TMA) helps quantify your functional
          limitations and strengthens insurance claims and disability applications.
        </div>
      </div>

      <div className="card">
        <h2>Finding Specialists</h2>
        <ul>
          <li><strong>TMA Find a Doctor:</strong> myositis.org/patient-support/find-doctor</li>
          <li><strong>Academic medical centers:</strong> Major university hospitals with neuromuscular disease programs often have the most experience</li>
          <li><strong>Myositis specialist teams:</strong> Some centers have multidisciplinary teams</li>
          <li><strong>Second opinions:</strong> Worth traveling to see an IBM specialist</li>
          <li><strong>Telemedicine:</strong> Many specialists now offer virtual consultations</li>
        </ul>
      </div>

      <div className="card">
        <h2>Support Groups and Communities</h2>
        <ul>
          <li><strong>TMA Support Groups:</strong> In-person and virtual groups organized by region and interest</li>
          <li><strong>TMA Affinity Groups:</strong> Men Managing Myositis, Young Adults, Caregivers</li>
          <li><strong>TMA Community Forum:</strong> Password-protected online discussion board</li>
          <li><strong>MyoCon:</strong> TMA's annual global myositis patient conference</li>
          <li><strong>Facebook groups:</strong> Search "Inclusion Body Myositis" on Facebook</li>
          <li><strong>International groups:</strong> TMA lists groups in Canada, Australia, New Zealand, Europe, and Asia</li>
        </ul>
      </div>

      <div className="card">
        <h2>Clinical Trials</h2>
        <p>
          Clinical trials are essential for advancing IBM treatment. Current research areas include:
        </p>
        <ul>
          <li>Rapamycin/sirolimus (mTOR inhibitor)</li>
          <li>BCG vaccine immunotherapy</li>
          <li>Anti-amyloid therapies</li>
          <li>Stem cell therapies</li>
          <li>Gene therapy approaches</li>
        </ul>
        <p style={{ marginTop: 8 }}>
          <strong>How to participate:</strong>
        </p>
        <ul>
          <li>Search ClinicalTrials.gov for "Inclusion Body Myositis"</li>
          <li>Talk to your neurologist about trials you may be eligible for</li>
          <li>TMA's website lists current IBM clinical trials</li>
          <li>Consider donating your brain post-mortem through brain bank programs</li>
        </ul>
      </div>

      <div className="card">
        <h2>Disability Benefits</h2>
        <h3>Social Security Disability Insurance (SSDI)</h3>
        <ul>
          <li>IBM is listed under Section 11.15 (Disorders of the Peripheral Nervous System) in the SSA Blue Book</li>
          <li>Requires documentation that you cannot perform substantial work</li>
          <li>The IBM Functional Rating Scale can support your application</li>
          <li>Apply as soon as you can no longer work — the process takes 3-6 months typically</li>
          <li>Consider a disability attorney or advocate</li>
        </ul>
        <h3>Supplemental Security Income (SSI)</h3>
        <ul>
          <li>For those with limited income and resources</li>
          <li>Asset limits apply</li>
        </ul>
        <h3>Vocational Rehabilitation</h3>
        <ul>
          <li>State programs can help with job modifications, retraining, or career transition</li>
        </ul>
        <h3>Veterans Benefits</h3>
        <ul>
          <li>IBM may be service-connected for veterans</li>
          <li>TMA provides resources for veterans at myositis.org</li>
        </ul>
      </div>
    </>
  )
}

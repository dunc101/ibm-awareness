import { usePageTitle } from '../hooks/usePageTitle'

export default function ResourcesPage() {
  usePageTitle('Resources', 'TMA, NINDS, MDA, clinical trials, support groups, and specialist directories for IBM.')
  return (
    <>
      <div className="page-header">
        <h1>Resources</h1>
        <p className="subtitle">Organizations, support groups, clinical trials, and essential tools for IBM patients and caregivers</p>
      </div>

      <div className="card">
        <h2>Key Organizations</h2>
        <div className="resource-grid">
          <a className="resource-link" href="https://myositis.org" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◎</div>
            <div className="resource-info">
              <h4>The Myositis Association (TMA)</h4>
              <p>800-821-7356 — Primary patient resource: support groups, find-a-doctor, emergency resources</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.ninds.nih.gov/health-information/disorders/inclusion-body-myositis" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◈</div>
            <div className="resource-info">
              <h4>NINDS / NIH</h4>
              <p>National Institute of Neurological Disorders and Stroke — IBM overview and research</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.mda.org" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◆</div>
            <div className="resource-info">
              <h4>Muscular Dystrophy Association</h4>
              <p>800-572-1717 — Care centers, research funding, clinical trial finder</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.nichd.nih.gov" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◇</div>
            <div className="resource-info">
              <h4>NICHD</h4>
              <p>National Institute of Child Health and Human Development — neuromuscular research</p>
            </div>
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Essential Tools and Downloads</h2>
        <div className="resource-grid">
          <div className="resource-link">
            <div className="resource-icon">📄</div>
            <div className="resource-info">
              <h4>IBM Functional Rating Scale</h4>
              <p>PDF download from myositis.org — Quantify functional limitations for insurance claims</p>
            </div>
          </div>
          <div className="resource-link">
            <div className="resource-icon">🆘</div>
            <div className="resource-info">
              <h4>TMA Emergency Resources</h4>
              <p>Wallet card, ER guide, My MyoHistory form — Download from myositis.org</p>
            </div>
          </div>
          <div className="resource-link">
            <div className="resource-icon">💪</div>
            <div className="resource-info">
              <h4>IBM Home Exercise Program</h4>
              <p>PDF from myositis.org — Tailored exercises for IBM patients</p>
            </div>
          </div>
          <div className="resource-link">
            <div className="resource-icon">📖</div>
            <div className="resource-info">
              <h4>The Dysphagia Cookbook</h4>
              <p>By Elayne Achilles — Available through TMA for safe eating strategies</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Clinical Trials</h2>
        <p>
          Clinical trials are essential for advancing IBM treatment. Current areas of active
          research include:
        </p>
        <ul>
          <li><strong>Rapamycin (Sirolimus):</strong> mTOR inhibitor enhancing autophagy to clear protein aggregates</li>
          <li><strong>BCG Vaccine:</strong> Immunomodulatory effects being studied</li>
          <li><strong>Anti-amyloid therapies:</strong> Targeting the beta-amyloid hypothesis</li>
          <li><strong>Stem cell therapies:</strong> Mesenchymal stem cells for muscle regeneration</li>
          <li><strong>Gene therapy:</strong> Approaches targeting specific genetic variants</li>
        </ul>
        <div className="resource-grid" style={{ marginTop: 16 }}>
          <a className="resource-link" href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">🔬</div>
            <div className="resource-info">
              <h4>ClinicalTrials.gov</h4>
              <p>Search "Inclusion Body Myositis" for active trials</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.mda.org/research/clinical-trials" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">🔍</div>
            <div className="resource-info">
              <h4>MDA Clinical Trials Finder</h4>
              <p>Search for neuromuscular disease clinical trials</p>
            </div>
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Support Groups</h2>
        <ul>
          <li><strong>TMA Support Groups:</strong> In-person and virtual groups organized by region and interest</li>
          <li><strong>TMA Affinity Groups:</strong> Men Managing Myositis, Young Adults, Caregivers</li>
          <li><strong>TMA Community Forum:</strong> Password-protected online discussion board</li>
          <li><strong>MyoCon:</strong> TMA's annual global myositis patient conference</li>
          <li><strong>Facebook Groups:</strong> Search "Inclusion Body Myositis" on Facebook</li>
          <li><strong>International:</strong> Groups in Canada, Australia, New Zealand, Europe, and Asia</li>
        </ul>
      </div>

      <div className="card">
        <h2>Finding Specialists</h2>
        <ul>
          <li><strong>TMA Find a Doctor:</strong> myositis.org/patient-support/find-doctor</li>
          <li><strong>Major centers:</strong> Mayo Clinic, Cleveland Clinic, Johns Hopkins, Massachusetts General, UCSF</li>
          <li><strong>Telemedicine:</strong> Many specialists now offer virtual consultations</li>
        </ul>
        <div className="info-box info">
          <strong>Travel for expertise</strong>
          IBM is rare enough that most general neurologists see very few cases. It's worth
          traveling to see a specialist experienced with IBM. TMA can help identify them.
        </div>
      </div>

      <div className="card">
        <h2>Additional Resources</h2>
        <div className="resource-grid">
          <a className="resource-link" href="https://www.oley.org" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◎</div>
            <div className="resource-info">
              <h4>The Oley Foundation</h4>
              <p>Support for tube feeding and home IV nutrition (oley.org)</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.iddsi.org" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◈</div>
            <div className="resource-info">
              <h4>IDDSI</h4>
              <p>International Dysphagia Diet Standardisation Initiative (iddsi.org)</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.caregiveraction.org" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◆</div>
            <div className="resource-info">
              <h4>Caregiver Action Network</h4>
              <p>Resources and support for caregivers (caregiveraction.org)</p>
            </div>
          </a>
          <a className="resource-link" href="https://www.acl.gov" target="_blank" rel="noopener noreferrer">
            <div className="resource-icon">◇</div>
            <div className="resource-info">
              <h4>Administration on Aging</h4>
              <p>Federal aging and disability resources (acl.gov)</p>
            </div>
          </a>
        </div>
      </div>

      <div className="card">
        <h2>Key Researchers and Institutions</h2>
        <ul>
          <li><strong>Dr. Marinos Dalakas</strong> (Thomas Jefferson University) — Pioneer in IBM research; established IVIg efficacy</li>
          <li><strong>Dr. Steven Greenberg</strong> (Brigham and Women's Hospital/Harvard) — Leading researcher on IBM pathogenesis</li>
          <li><strong>Dr. Conrad Weihl</strong> (Washington University) — Clinical features research</li>
          <li><strong>Dr. Julie Paik</strong> (Johns Hopkins University) — Clinical management</li>
          <li><strong>Dr. Pedro Machado</strong> (University College London) — Sporadic IBM research</li>
          <li><strong>Dr. Vanda Askanas and Dr. Walter Engel</strong> (USC) — Pioneered the degenerative/amyloid hypothesis</li>
          <li><strong>Mayo Clinic</strong> — Major center for IBM diagnosis and research</li>
          <li><strong>Johns Hopkins Myositis Center</strong> — Clinical care and research</li>
        </ul>
      </div>
    </>
  )
}

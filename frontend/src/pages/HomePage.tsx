import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <div className="page-header">
        <h1>Inclusion Body Myositis (IBM)</h1>
        <p className="subtitle">Understanding the most common acquired muscle disease in adults over 50</p>
      </div>

      <div className="stat-row">
        <div className="stat-card">
          <div className="stat-number">~20,000</div>
          <div className="stat-label">People affected in the US</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">2:1</div>
          <div className="stat-label">Male to female ratio</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">46/million</div>
          <div className="stat-label">Prevalence rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">5-10 yrs</div>
          <div className="stat-label">Avg. diagnostic delay</div>
        </div>
      </div>

      <div className="card">
        <h2>What is IBM?</h2>
        <p>
          Inclusion Body Myositis (IBM) is one of the idiopathic inflammatory myopathies (IIMs),
          a group of rare muscle diseases characterized by chronic, progressive muscle inflammation
          accompanied by muscle weakness. It is the most common inflammatory muscle disease in
          older adults. The "inclusion body" in its name refers to a histological finding of
          rimmed vacuoles — abnormal cellular structures containing aggregated proteins — visible
          in muscle tissue on biopsy.
        </p>
        <p style={{ marginTop: 12 }}>
          IBM is distinguished from other inflammatory myopathies by the simultaneous presence of
          two pathological processes: an autoimmune inflammatory reaction where immune cells
          (particularly CD8+ T cells) invade muscle fibers, and a degenerative process characterized
          by protein misfolding, vacuolar degeneration, and abnormal intracellular protein
          accumulations including amyloid-beta, tau, TDP-43, and ubiquitinated proteins.
        </p>
      </div>

      <div className="card">
        <h2>Key Characteristics</h2>
        <ul>
          <li><strong>Asymmetric weakness</strong> — Unlike other myopathies, IBM often affects muscles on one side more than the other</li>
          <li><strong>Distal AND proximal weakness</strong> — Both thigh muscles (difficulty climbing stairs, rising from chairs) and forearm/hand muscles (difficulty gripping, buttoning shirts) are affected</li>
          <li><strong>Slow progression</strong> — The disease progresses gradually over months to years</li>
          <li><strong>Resistant to treatment</strong> — Unlike polymyositis and dermatomyositis, IBM does not respond well to corticosteroids or immunosuppressive drugs</li>
          <li><strong>Dysphagia</strong> — Difficulty swallowing affects approximately 40-85% of patients</li>
          <li><strong>Falls risk</strong> — Quadriceps weakness leads to frequent falls, which can cause serious injuries including hip and skull fractures</li>
        </ul>
      </div>

      <div className="card">
        <h2>How IBM Affects the Body</h2>
        <p>
          IBM targets specific muscle groups in a characteristic pattern. In the lower body, the
          quadriceps (particularly the rectus femoris) and tibialis anterior are typically affected
          first, leading to difficulty with stairs, walking, and frequent tripping from foot drop.
          In the upper body, the deep finger flexors and wrist flexors weaken early, making tasks
          like gripping objects, turning keys, and buttoning shirts increasingly difficult.
        </p>
        <p style={{ marginTop: 12 }}>
          As the disease progresses, swallowing muscles may also become involved, leading to
          dysphagia — difficulty with both solids and liquids. In advanced stages, respiratory
          muscles can weaken, potentially requiring ventilatory support.
        </p>

        <div className="info-box info">
          <strong>Why IBM is often misdiagnosed</strong>
          Due to its rarity and overlapping symptoms with other conditions, IBM is frequently
          misdiagnosed as polymyositis, normal aging, or deconditioning. The average diagnostic
          delay is 5-10 years from symptom onset. If you or a loved one experience progressive
          muscle weakness, especially with the characteristic pattern of thigh and hand weakness,
          seek evaluation at a neuromuscular disease center.
        </div>
      </div>

      <div className="card">
        <h2>Types of IBM</h2>
        <p>
          IBM encompasses several distinct forms, from the most common sporadic form to rare
          hereditary variants. Understanding which type you have is important for prognosis
          and management.
        </p>
        <div style={{ marginTop: 16 }}>
          <Link to="/types" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            Learn about all types of IBM →
          </Link>
        </div>
      </div>

      <div className="card">
        <h2>Disease Stages</h2>
        <p>
          IBM follows a slowly progressive course. While the rate of progression varies between
          individuals, the disease can be broadly characterized into early, middle, and advanced
          stages — each with distinct challenges and management strategies.
        </p>
        <div style={{ marginTop: 16 }}>
          <Link to="/stages" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            Explore disease stages →
          </Link>
        </div>
      </div>

      <div className="card">
        <h2>No Cure, But Hope</h2>
        <p>
          As of 2024, there are no FDA-approved treatments specifically for IBM. However, active
          research is underway exploring rapamycin, BCG vaccine immunotherapy, anti-amyloid
          therapies, and stem cell approaches. Physical therapy remains the cornerstone of
          management, and adaptive strategies can significantly improve quality of life.
        </p>
        <div className="info-box success">
          <strong>Research gives hope</strong>
          Multiple clinical trials are investigating promising treatments for IBM. Organizations
          like The Myositis Association (TMA) and the Cure IBM Foundation are driving research
          forward. Staying informed about clinical trial opportunities can provide access to
          cutting-edge treatments.
        </div>
        <div style={{ marginTop: 16 }}>
          <Link to="/resources" style={{ color: 'var(--primary)', fontWeight: 600 }}>
            Find resources and support →
          </Link>
        </div>
      </div>
    </>
  )
}

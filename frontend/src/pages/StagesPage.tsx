import { usePageTitle } from '../hooks/usePageTitle'

export default function StagesPage() {
  usePageTitle('Disease Stages', 'Early, middle, and advanced stages of IBM — timeline, muscles affected, and care needs.')
  return (
    <>
      <div className="page-header">
        <h1>Disease Stages</h1>
        <p className="subtitle">IBM follows a slowly progressive course — understanding each stage helps with planning and management</p>
      </div>

      <div className="info-box info">
        <strong>Important note</strong>
        IBM does not follow a rigid stage-by-stage progression. The rate of progression varies
        significantly between individuals. Some patients may plateau for extended periods before
        worsening. These stages represent general milestones in disease progression.
      </div>

      <div className="stage-grid">
        <div className="stage-card">
          <div className="stage-card-header early">
            <span>●</span> Early Stage (Years 0-5)
          </div>
          <div className="stage-card-body">
            <p>
              Symptoms develop insidiously over months to years. This is often the most frustrating
              stage because IBM is frequently misdiagnosed during this period.
            </p>

            <h4>Muscles Affected First</h4>
            <ul>
              <li><strong>Quadriceps weakness</strong> — Difficulty rising from chairs, climbing stairs, and walking on uneven ground</li>
              <li><strong>Tibialis anterior weakness</strong> — Foot drop, frequent tripping</li>
              <li><strong>Deep finger flexors</strong> — Difficulty gripping objects, turning keys, buttoning shirts</li>
              <li><strong>Wrist flexors</strong> — Decreased grip strength</li>
            </ul>

            <h4>Functional Capabilities</h4>
            <ul>
              <li>Generally still ambulatory but with increasing difficulty on stairs</li>
              <li>May notice frequent falls or near-falls</li>
              <li>Fine motor tasks becoming progressively more difficult</li>
              <li>May be able to work but with increasing limitations</li>
            </ul>

            <h4>Care Needs</h4>
            <ul>
              <li>Physical therapy assessment and home exercise program</li>
              <li>Fall prevention measures (removing tripping hazards, grab bars)</li>
              <li>Occupational therapy for adaptive strategies</li>
              <li>Regular monitoring by neurologist/rheumatologist</li>
              <li>EMG, CK levels, and potentially muscle biopsy for diagnosis</li>
            </ul>
          </div>
        </div>

        <div className="stage-card">
          <div className="stage-card-header middle">
            <span>●</span> Middle Stage (Years 5-10)
          </div>
          <div className="stage-card-body">
            <p>
              Progressive worsening with increasing functional limitations. Most patients require
              assistive devices by this stage.
            </p>

            <h4>Worsening Muscle Weakness</h4>
            <ul>
              <li><strong>Lower extremities:</strong> Significantly weakened quadriceps; difficulty standing from seated; progressive foot drop; hip and gluteal weakness</li>
              <li><strong>Upper extremities:</strong> Severely weakened wrist and finger flexors; biceps/triceps weakness; difficulty lifting objects, reaching overhead</li>
              <li><strong>Dysphagia:</strong> Difficulty swallowing present in 40-85% of cases; upper esophageal constriction</li>
            </ul>

            <h4>Functional Capabilities</h4>
            <ul>
              <li>Walking becomes increasingly difficult and precarious</li>
              <li>Significant fall risk — falls can cause hip fractures, skull fractures</li>
              <li>Most patients require assistive devices (cane, walker)</li>
              <li>Many patients can no longer work</li>
              <li>Activities of daily living become increasingly challenging</li>
              <li>Driving may become unsafe</li>
            </ul>

            <h4>Care Needs</h4>
            <ul>
              <li>Regular physical therapy focusing on mobility and fall prevention</li>
              <li>Occupational therapy for adaptive equipment (button hooks, grabbers, modified utensils)</li>
              <li>Speech-language pathology for dysphagia assessment and management</li>
              <li>Dietary modifications (soft foods, thickened liquids)</li>
              <li>Wheelchair or scooter for longer distances</li>
              <li>Home modifications (ramp access, stair lift, walk-in shower)</li>
            </ul>

            <div className="info-box warning">
              <strong>Dysphagia is serious</strong>
              Difficulty swallowing affects 40-85% of IBM patients and is a major cause of
              morbidity and mortality. Aspiration pneumonia is the #1 cause of death in myositis
              patients. Early evaluation by a speech-language pathologist is critical.
            </div>
          </div>
        </div>

        <div className="stage-card">
          <div className="stage-card-header advanced">
            <span>●</span> Advanced Stage (10+ Years)
          </div>
          <div className="stage-card-body">
            <p>
              Severe disability with widespread muscle weakness. Most patients are wheelchair-dependent.
              Full-time caregiver assistance may be necessary.
            </p>

            <h4>Widespread Muscle Weakness</h4>
            <ul>
              <li><strong>Legs:</strong> May be unable to stand or walk independently; wheelchair-dependent</li>
              <li><strong>Arms:</strong> Significant weakness; difficulty with all upper extremity tasks</li>
              <li><strong>Respiratory muscles:</strong> Can weaken, potentially leading to respiratory failure</li>
              <li><strong>Pharyngeal/esophageal muscles:</strong> Severe dysphagia</li>
            </ul>

            <h4>Functional Capabilities</h4>
            <ul>
              <li>Most patients are wheelchair-dependent</li>
              <li>Finger functions severely impaired — unable to manipulate pens, keys, buttons</li>
              <li>Unable to perform most ADLs independently</li>
              <li>Speech may be affected</li>
              <li>Breathing may require assistance (especially during sleep)</li>
            </ul>

            <h4>Care Needs</h4>
            <ul>
              <li>Full-time caregiver assistance or nursing facility may be needed</li>
              <li>Power wheelchair with appropriate positioning and pressure relief</li>
              <li>Respiratory monitoring and possible ventilatory support</li>
              <li>Nutritional support — feeding tube if needed</li>
              <li>Ongoing physical therapy to prevent contractures</li>
              <li>Palliative care considerations</li>
              <li>Advanced care planning</li>
            </ul>

            <div className="info-box danger">
              <strong>For advanced stage patients</strong>
              If you or a loved one is in the advanced stage of IBM, visit our dedicated{' '}
              <a href="/advanced" style={{ color: 'inherit', fontWeight: 600 }}>
                Advanced Stage section
              </a>{' '}
              for detailed information on travel, equipment, and caregiving.
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Key Facts About IBM Progression</h2>
        <ul>
          <li>IBM does NOT typically significantly reduce life expectancy, though complications can be fatal</li>
          <li>The rate of progression is highly variable between individuals</li>
          <li>Symptoms may plateau for periods before worsening</li>
          <li>Most patients eventually require wheelchair use, but some remain ambulatory with assistance for many years</li>
          <li>Falls are a major concern — they can cause serious injuries including hip and skull fractures</li>
          <li>Dysphagia (swallowing difficulty) is a significant source of morbidity and mortality</li>
        </ul>
      </div>

      <div className="card">
        <h2>Recommendations by Stage</h2>
        <div className="info-box info">
          <strong>Early Stage</strong>
          Focus on maintaining function through tailored exercise programs, fall prevention,
          and building a strong medical team. Consider joining a support group early.
        </div>
        <div className="info-box warning">
          <strong>Middle Stage</strong>
          Prioritize adaptive equipment, home modifications, and swallowing assessment.
          Begin planning for eventual wheelchair use. Evaluate driving safety.
        </div>
        <div className="info-box danger">
          <strong>Advanced Stage</strong>
          Ensure respiratory monitoring, nutritional support, and appropriate caregiver training.
          Consider palliative care and advanced care planning.
        </div>

        <div className="info-box info">
          <strong>Related pages</strong>
          <a href="/tips/early">Early stage tips</a> · <a href="/tips/middle">Middle stage tips</a> · <a href="/tips/advanced">Advanced stage tips</a> · <a href="/advanced">Advanced stage overview</a>
        </div>
      </div>

      <div className="card">
        <h2>Frequently Asked Questions</h2>
        <details style={{ marginBottom: 12, borderBottom: '1px solid var(--border-light)', paddingBottom: 12 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem', padding: '4px 0' }}>
            How long does each stage of IBM last?
          </summary>
          <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            IBM does not follow a rigid timeline. Early stage typically spans years 0-5 from symptom onset,
            middle stage years 5-10, and advanced stage 10+ years. However, progression varies significantly
            between individuals — some plateau for extended periods before worsening.
          </p>
        </details>
        <details style={{ marginBottom: 12, borderBottom: '1px solid var(--border-light)', paddingBottom: 12 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem', padding: '4px 0' }}>
            Will I definitely need a wheelchair?
          </summary>
          <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Most IBM patients eventually require a wheelchair, but the timeline varies. Some remain
            ambulatory with assistance for many years. A cane or walker is typically needed first,
            followed by a wheelchair for longer distances, and eventually full-time wheelchair use.
          </p>
        </details>
        <details style={{ marginBottom: 12, borderBottom: '1px solid var(--border-light)', paddingBottom: 12 }}>
          <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem', padding: '4px 0' }}>
            Can IBM be stopped from progressing?
          </summary>
          <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Currently, there is no treatment that halts IBM progression. The disease is resistant to
            corticosteroids and immunosuppressants that work for other myopathies. Physical therapy
            and adaptive strategies can maintain function and quality of life. Active clinical trials
            are investigating potential treatments.
          </p>
        </details>
      </div>
    </>
  )
}

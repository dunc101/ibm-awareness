import { usePageTitle } from '../hooks/usePageTitle'

const steps = [
  {
    num: 1,
    title: 'Get the Right Diagnosis',
    content: 'If you suspect IBM or have been told you have polymyositis but treatment isn\'t working, ask for:',
    items: [
      'Muscle biopsy — the gold standard for IBM diagnosis',
      'Anti-NT5C1A blood test — a key biomarker for IBM',
      'EMG (electromyography) — to assess muscle function',
      'CK blood test — may be elevated but often only mildly',
    ],
    link: '/types',
    linkText: 'Learn about IBM types',
  },
  {
    num: 2,
    title: 'Find a Specialist',
    content: 'General neurologists may not have experience with IBM. Seek out:',
    items: [
      'Neuromuscular disease specialist or neurologist',
      'Rheumatologist experienced with inflammatory myopathies',
      'Speech-language pathologist for swallowing evaluation',
      'Use TMA\'s Find a Doctor tool at myositis.org',
    ],
    link: '/resources',
    linkText: 'Find resources and specialists',
  },
  {
    num: 3,
    title: 'Understand Your Stage',
    content: 'IBM progresses slowly. Knowing where you are helps you plan:',
    items: [
      'Early stage: Focus on exercise, fall prevention, and building your medical team',
      'Middle stage: Adaptive equipment, home modifications, and swallowing assessment',
      'Advanced stage: Respiratory monitoring, caregiver support, and equipment planning',
    ],
    link: '/stages',
    linkText: 'Learn about disease stages',
  },
  {
    num: 4,
    title: 'Start an Exercise Program',
    content: 'Exercise is the only current treatment recommendation for IBM. It\'s safe and important:',
    items: [
      'Walking at your own pace — the easiest way to stay active',
      'Aquatic therapy — water supports your weight',
      'Light resistance training — maintain what you have',
      'Balance training — critical for fall prevention',
    ],
    link: '/tips/early',
    linkText: 'Early stage exercise tips',
  },
  {
    num: 5,
    title: 'Build Your Support Network',
    content: 'You are not alone. Connect with others who understand:',
    items: [
      'The Myositis Association — support groups, conferences, resources',
      'TMA Community Forum — online discussion with other IBM patients',
      'Facebook groups — search "Inclusion Body Myositis"',
      'Consider counseling — a therapist experienced with chronic illness',
    ],
    link: '/resources',
    linkText: 'Find support groups',
  },
  {
    num: 6,
    title: 'Plan for the Future',
    content: 'IBM is progressive. Early planning makes the journey easier:',
    items: [
      'Discuss disability benefits with a social worker (IBM qualifies for SSDI)',
      'Review your insurance coverage for DME (durable medical equipment)',
      'Consider advance care planning and healthcare proxy',
      'Explore clinical trials at ClinicalTrials.gov',
    ],
    link: '/tips/general',
    linkText: 'General planning tips',
  },
]

export default function JustDiagnosedPage() {
  usePageTitle('Just Diagnosed with IBM', 'Newly diagnosed with Inclusion Body Myositis? Here is your step-by-step guide to understanding IBM, finding specialists, and planning your next steps.')

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'What to Do After an IBM Diagnosis',
    description: 'A step-by-step guide for people newly diagnosed with Inclusion Body Myositis (IBM).',
    step: steps.map(s => ({
      '@type': 'HowToStep',
      position: s.num,
      name: s.title,
      text: s.content,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div className="page-header">
        <h1>Just Diagnosed with IBM</h1>
        <p className="subtitle">A step-by-step guide for your first 30 days after diagnosis</p>
      </div>

      <div className="info-box danger">
        <strong>Breathe. You have time.</strong>
        IBM is a slow-progressing disease. You don't need to figure everything out today.
        This guide walks you through the most important steps, one at a time. Bookmark this
        page and come back to it as you work through each step.
      </div>

      <div className="card">
        <h2>Your First 30 Days — Step by Step</h2>
        <p>
          A new diagnosis can feel overwhelming. Here are the six most important things to do,
          in order of priority.
        </p>
      </div>

      {steps.map(step => (
        <div key={step.num} className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              background: 'var(--primary)',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'Fraunces', Georgia, serif",
              fontSize: '1.3rem',
              fontWeight: 700,
              flexShrink: 0,
            }}>
              {step.num}
            </div>
            <h2 style={{ margin: 0 }}>{step.title}</h2>
          </div>
          <p>{step.content}</p>
          <ul style={{ marginTop: 8 }}>
            {step.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div style={{ marginTop: 16 }}>
            <a href={step.link} style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem' }}>
              {step.linkText} →
            </a>
          </div>
        </div>
      ))}

      <div className="card">
        <h2>What NOT to Do</h2>
        <ul>
          <li><strong>Don't panic about wheelchair use</strong> — Most patients walk for years with assistance before needing a wheelchair full-time</li>
          <li><strong>Don't stop moving</strong> — Exercise is safe and important. Muscles lose strength within 24-48 hours of inactivity</li>
          <li><strong>Don't accept "it's just aging"</strong> — If your doctor dismisses your symptoms, seek a second opinion at a neuromuscular center</li>
          <li><strong>Don't isolate yourself</strong> — Connect with the IBM community early. Other patients understand what you're going through</li>
          <li><strong>Don't wait to plan for disability benefits</strong> — The application process takes 3-6 months. Start early</li>
        </ul>
      </div>

      <div className="card">
        <h2>Essential Resources</h2>
        <ul>
          <li><a href="https://myositis.org" target="_blank" rel="noopener noreferrer">The Myositis Association (TMA)</a> — Primary resource for IBM patients</li>
          <li><a href="https://www.ninds.nih.gov/health-information/disorders/inclusion-body-myositis" target="_blank" rel="noopener noreferrer">NINDS — IBM Information</a> — Government health information</li>
          <li><a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer">ClinicalTrials.gov</a> — Search for IBM clinical trials</li>
          <li><a href="https://www.mda.org" target="_blank" rel="noopener noreferrer">Muscular Dystrophy Association</a> — Care centers and research</li>
        </ul>
      </div>
    </>
  )
}

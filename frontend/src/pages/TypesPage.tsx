import { usePageTitle } from '../hooks/usePageTitle'

const typesFaq = [
  {
    q: 'What is the difference between sporadic and hereditary IBM?',
    a: 'Sporadic IBM (sIBM) is the most common form — it occurs randomly, is NOT inherited, and features prominent inflammation. Hereditary IBM (hIBM) is passed genetically, has little or no inflammation, and is classified as a myopathy rather than a myositis. About 67% of sIBM patients carry a specific HLA gene that creates susceptibility, but it is not directly inherited.',
  },
  {
    q: 'Can IBM be misdiagnosed as another type?',
    a: 'Yes. IBM is frequently misdiagnosed as polymyositis, especially in early stages. It is also sometimes confused with ALS, normal aging, fibromyalgia, or cervical spinal stenosis. A muscle biopsy showing rimmed vacuoles and the anti-NT5C1A antibody test are key for accurate diagnosis.',
  },
]

export default function TypesPage() {
  usePageTitle('Types of IBM', 'Sporadic, familial, and hereditary inclusion body myositis — differences, genetics, onset, and prognosis.')

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: typesFaq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="page-header">
        <h1>Types of Inclusion Body Myositis</h1>
        <p className="subtitle">Understanding the different forms of IBM — from common sporadic cases to rare hereditary variants</p>
      </div>

      <div className="type-card">
        <span className="badge common">Most Common</span>
        <h3>Sporadic Inclusion Body Myositis (sIBM)</h3>
        <p>
          Sporadic IBM is by far the most common form, occurring at random in individuals with
          no family history of the disease. It is the form most commonly referred to simply as
          "IBM." Approximately 67% of patients carry a particular HLA haplotype (8.1 ancestral
          haplotype), indicating genetic susceptibility, though sIBM is not inherited from
          generation to generation.
        </p>
        <h4>Key Features</h4>
        <ul>
          <li><strong>Onset:</strong> Typically after age 50 (mean age 61-68)</li>
          <li><strong>Progression:</strong> Slow and insidious over months to years</li>
          <li><strong>Pattern:</strong> Asymmetric weakness affecting both proximal (thighs) and distal (forearms, hands) muscles</li>
          <li><strong>Diagnosis:</strong> Muscle biopsy showing rimmed vacuoles, inflammatory cell invasion, and protein inclusions; anti-NT5C1A antibody positivity</li>
          <li><strong>Treatment response:</strong> Poor — generally resistant to corticosteroids, immunosuppressants, and immunomodulatory drugs</li>
          <li><strong>Prognosis:</strong> Does not significantly affect life expectancy, though complications (aspiration pneumonia, falls) can be serious</li>
        </ul>
        <div className="info-box info">
          <strong>What makes sIBM unique</strong>
          Unlike other inflammatory myopathies, sIBM features a dual pathology: autoimmune inflammation AND degenerative protein aggregation (amyloid-beta, TDP-43). This explains why immunotherapy alone is insufficient — the degenerative component continues regardless of immune suppression.
        </div>
      </div>

      <div className="type-card">
        <span className="badge rare">Rare</span>
        <h3>Familial Inflammatory IBM (fIBM)</h3>
        <p>
          Familial IBM is a rare variant where multiple siblings within the same generation
          develop IBM-like disease. Unlike sporadic IBM, there is a clear family pattern, though
          it does not follow a simple inheritance pattern from generation to generation. It may
          involve autosomal recessive or multifactorial genetic mechanisms.
        </p>
        <h4>Key Features</h4>
        <ul>
          <li><strong>Onset:</strong> Similar to sIBM but may present earlier</li>
          <li><strong>Progression:</strong> Similar to sIBM</li>
          <li><strong>Key distinction:</strong> The inflammatory component IS present (unlike hereditary IBM myopathies), making it a true myositis</li>
          <li><strong>Diagnosis:</strong> Same criteria as sIBM, but with family history of IBM in siblings</li>
          <li><strong>Prevalence:</strong> Very rare; exact numbers unknown</li>
        </ul>
      </div>

      <div className="type-card">
        <span className="badge hereditary">Hereditary</span>
        <h3>Hereditary Inclusion Body Myopathies (hIBM)</h3>
        <p>
          Hereditary IBM (hIBM) is a distinct group of genetic muscle diseases that share the
          histological feature of rimmed vacuoles/inclusion bodies but are classified as
          <em> myopathies</em> (not myositis) because inflammation is not a primary feature.
          Unlike sIBM, these conditions are passed from generation to generation.
        </p>

        <div style={{ marginTop: 16 }}>
          <h4>1. GNE Myopathy (Nonaka Myopathy / Distal Myopathy with Rimmed Vacuoles)</h4>
          <ul>
            <li><strong>Genetics:</strong> Autosomal recessive; mutations in the GNE gene</li>
            <li><strong>Onset:</strong> Typically 20-40 years old (earlier than sIBM)</li>
            <li><strong>Presentation:</strong> Initial distal weakness (foot drop), then hand muscles; later proximal involvement</li>
            <li><strong>Geography:</strong> More common in Middle Eastern, Japanese, and Indian populations</li>
            <li><strong>No inflammation on biopsy</strong> — this is the key difference from sIBM</li>
          </ul>

          <h4>2. IBM with VCP Mutations (IBMPFD)</h4>
          <ul>
            <li><strong>Genetics:</strong> Autosomal dominant; mutations in VCP (valosin-containing protein) gene</li>
            <li><strong>Onset:</strong> 40-60 years</li>
            <li><strong>Presentation:</strong> Inclusion body myopathy combined with Paget's disease of bone and/or frontotemporal dementia</li>
            <li><strong>Note:</strong> Part of multisystem proteinopathy spectrum; a small percentage initially diagnosed with sIBM are later found to have VCP mutations</li>
          </ul>

          <h4>3. IBM with SQSTM1 Mutations</h4>
          <ul>
            <li><strong>Genetics:</strong> Mutations in SQSTM1 (p62) gene</li>
            <li><strong>Presentation:</strong> Can mimic sIBM both clinically and histologically</li>
            <li><strong>Note:</strong> Important to test for genetic mutations if IBM is diagnosed before age 50 or if there is family history</li>
          </ul>

          <h4>4. Bethlem Myopathy / VBMD</h4>
          <ul>
            <li><strong>Genetics:</strong> Autosomal dominant or recessive; mutations in COL6A1, COL6A2, or COL6A3 genes</li>
            <li><strong>Onset:</strong> Childhood to young adulthood</li>
            <li><strong>Presentation:</strong> Proximal weakness, contractures (especially of fingers), respiratory involvement</li>
          </ul>

          <h4>5. Other Rare Forms</h4>
          <ul>
            <li>IBM with MYHC (myosin heavy chain) mutations</li>
            <li>IBM with TIA1 mutations</li>
            <li>Other gene-specific variants under ongoing research</li>
          </ul>
        </div>
      </div>

      <div className="card">
        <h2>Comparison: sIBM vs hIBM</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Sporadic IBM (sIBM)</th>
              <th>Hereditary IBM (hIBM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Inheritance</strong></td>
              <td>Sporadic (non-inherited)</td>
              <td>Inherited (various patterns)</td>
            </tr>
            <tr>
              <td><strong>Inflammation</strong></td>
              <td>Prominent (autoimmune)</td>
              <td>Absent or minimal</td>
            </tr>
            <tr>
              <td><strong>Classification</strong></td>
              <td>Myositis</td>
              <td>Myopathy</td>
            </tr>
            <tr>
              <td><strong>Typical onset age</strong></td>
              <td>&gt;50 years</td>
              <td>Variable (20s-60s)</td>
            </tr>
            <tr>
              <td><strong>CK levels</strong></td>
              <td>Elevated (up to 10x normal)</td>
              <td>Normal or mildly elevated</td>
            </tr>
            <tr>
              <td><strong>Treatment response</strong></td>
              <td>Poor to immunotherapy</td>
              <td>No immunotherapy benefit</td>
            </tr>
            <tr>
              <td><strong>Pathogenesis</strong></td>
              <td>Autoimmune + degenerative</td>
              <td>Primarily degenerative</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card">
        <h2>Diagnosis</h2>
        <p>
          Diagnosing IBM requires a combination of clinical evaluation, blood tests, and often
          muscle biopsy. Key diagnostic tools include:
        </p>
        <ul>
          <li><strong>Muscle biopsy:</strong> The gold standard — showing rimmed vacuoles, CD8+ T cell invasion of non-necrotic muscle fibers, and protein inclusions</li>
          <li><strong>CK (creatine kinase) levels:</strong> Typically elevated but often less than 10x normal; can be normal in some cases</li>
          <li><strong>EMG (electromyography):</strong> Shows myopathic changes</li>
          <li><strong>Anti-NT5C1A antibody:</strong> A promising diagnostic biomarker strongly associated with IBM</li>
          <li><strong>MRI:</strong> Can show characteristic muscle involvement patterns and guide biopsy site selection</li>
          <li><strong>Genetic testing:</strong> Important for ruling out hereditary forms, especially in younger patients</li>
        </ul>

        <div className="info-box warning">
          <strong>Diagnostic challenges</strong>
          IBM is frequently misdiagnosed as polymyositis because early symptoms overlap. The average
          diagnostic delay is 5-10 years. If you have progressive muscle weakness that doesn't
          respond to standard myositis treatment, seek evaluation at a specialized neuromuscular
          disease center.
        </div>

        <div className="info-box info">
          <strong>Related pages</strong>
          <a href="/stages">Learn about disease stages</a> · <a href="/tips/early">Early stage tips</a> · <a href="/resources">Find a specialist</a>
        </div>
      </div>

      <div className="card">
        <h2>Frequently Asked Questions</h2>
        {typesFaq.map((item, i) => (
          <details key={i} style={{ marginBottom: 12, borderBottom: '1px solid var(--border-light)', paddingBottom: 12 }}>
            <summary style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text)', fontSize: '0.95rem', padding: '4px 0' }}>
              {item.q}
            </summary>
            <p style={{ marginTop: 8, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </>
  )
}

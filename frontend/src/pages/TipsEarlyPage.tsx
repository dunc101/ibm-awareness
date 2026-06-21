export default function TipsEarlyPage() {
  return (
    <>
      <div className="page-header">
        <h1>Early Stage Tips</h1>
        <p className="subtitle">Practical advice for the first years after diagnosis — building a foundation for living well with IBM</p>
      </div>

      <div className="card">
        <h2>Exercise and Physical Therapy</h2>
        <p>
          Exercise is currently the only treatment recommendation for IBM. Research confirms
          exercise is safe and can improve quality of life. The key is finding the right balance.
        </p>
        <div className="tip-item">
          <div className="tip-icon">1</div>
          <div className="tip-content">
            <h4>Start Slow and Smart</h4>
            <p>
              Begin with TMA's IBM Home Exercise Program (myositis.org). Start with one or two
              exercises and progress gradually over 6-12 weeks. Walking is always safe at your
              own pace — it's the easiest way to stay active.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">2</div>
          <div className="tip-content">
            <h4>Listen to Your Body</h4>
            <p>
              Muscles lose strength within 24-48 hours of inactivity. If muscle soreness hinders
              daily activities, you've done too much. 30-60 minutes of recovery after exercise
              is normal; longer recovery means dial back intensity.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">3</div>
          <div className="tip-content">
            <h4>Best Exercise Types</h4>
            <p>
              Walking (adjust to ability), aquatic therapy (water supports weight), light resistance
              training, balance training (critical for fall prevention), and hand/finger exercises.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">4</div>
          <div className="tip-content">
            <h4>Find a Myositis-Experienced PT</h4>
            <p>
              TMA maintains a directory of myositis-experienced physical therapists at myositis.org.
              A knowledgeable PT can tailor your program and prevent injury.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Energy Conservation</h2>
        <p>
          IBM causes fatigue because weakened muscles require surrounding muscles to work harder.
          Energy conservation helps you accomplish more while managing fatigue.
        </p>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Prioritize Tasks</h4>
            <p>
              Identify what must be done today vs. what can wait. Plan important activities
              during your best energy times (usually morning).
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Pace Yourself</h4>
            <p>
              Alternate activity with rest periods. Don't try to do everything at once.
              Sit when possible — use a stool for kitchen tasks, shower chair, or grabber
              tools to avoid bending.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Delegate and Simplify</h4>
            <p>
              Let family or friends handle heavy tasks. Batch errands, prepare meals in advance,
              use online shopping and delivery services.
            </p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Workplace Accommodations</h2>
        <p>
          The Americans with Disabilities Act (ADA) requires reasonable accommodations for
          qualifying conditions. Don't wait until limitations become severe.
        </p>
        <ul>
          <li>Request accommodations early: ergonomic tools, voice-to-text software, modified schedules, or remote work options</li>
          <li>Document your limitations — keep records of specific activities that are difficult</li>
          <li>You are not required to disclose your diagnosis, but explaining functional limitations helps secure accommodations</li>
          <li>Consider vocational rehabilitation: state programs can help with job modifications or career transitions</li>
        </ul>
      </div>

      <div className="card">
        <h2>Finding Specialists</h2>
        <p>
          Building the right medical team early is crucial for optimal management.
        </p>
        <ul>
          <li><strong>Neurologist or Rheumatologist:</strong> Seek one experienced with inflammatory myopathies</li>
          <li><strong>Speech-Language Pathologist (SLP):</strong> Essential for evaluating swallowing — don't wait for symptoms</li>
          <li><strong>Physical Therapist:</strong> Use TMA's directory of myositis-experienced PTs</li>
          <li><strong>Occupational Therapist:</strong> Can recommend adaptive strategies early</li>
        </ul>
        <div className="info-box info">
          <strong>Use TMA's Find a Doctor tool</strong>
          The Myositis Association maintains a directory at myositis.org to help you locate
          specialists experienced with IBM in your area.
        </div>
      </div>

      <div className="card">
        <h2>Psychological Adjustment</h2>
        <p>
          Receiving a diagnosis of a rare, progressive disease is life-changing. These strategies
          can help you cope:
        </p>
        <ul>
          <li><strong>Join a support group:</strong> TMA offers in-person and virtual groups, including IBM-specific and affinity groups (e.g., Men Managing Myositis)</li>
          <li><strong>Use TMA's Community Forum:</strong> Password-protected online space for IBM patients and caregivers</li>
          <li><strong>Consider counseling:</strong> A therapist experienced with chronic illness can help process grief, anxiety, or depression</li>
          <li><strong>Educate yourself:</strong> Knowledge reduces fear — read about IBM, attend webinars, ask questions</li>
          <li><strong>Connect with others:</strong> Research shows social support improves outcomes</li>
        </ul>
      </div>

      <div className="card">
        <h2>Nutrition</h2>
        <ul>
          <li>Eat a balanced diet rich in fruits, vegetables, lean proteins, and whole grains</li>
          <li>Maintain adequate protein intake to support muscle health</li>
          <li>Stay well-hydrated, especially if swallowing difficulties develop</li>
          <li>Monitor weight — unintentional weight loss may indicate swallowing problems</li>
          <li>Consider consulting a registered dietitian familiar with neuromuscular diseases</li>
        </ul>
      </div>
    </>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-disclaimer">
        <strong>Medical Disclaimer:</strong> The information on this website is for general informational and educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or emergency services immediately.
      </div>
      <div className="footer-content">
        <div>
          <h3>Inclusion Body Myositis Awareness</h3>
          <p>
            IBM is the most common acquired muscle disease in adults over 50, affecting approximately
            20,000 people in the United States. While there is currently no cure, understanding the
            disease and connecting with resources can significantly improve quality of life.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="https://myositis.org" target="_blank" rel="noopener noreferrer">The Myositis Association</a></li>
            <li><a href="https://www.ninds.nih.gov/health-information/disorders/inclusion-body-myositis" target="_blank" rel="noopener noreferrer">NINDS - IBM</a></li>
            <li><a href="https://clinicaltrials.gov" target="_blank" rel="noopener noreferrer">Clinical Trials</a></li>
            <li><a href="https://www.mda.org" target="_blank" rel="noopener noreferrer">MDA</a></li>
          </ul>
        </div>
        <div>
          <h3>Emergency</h3>
          <ul className="footer-links">
            <li>TMA: 800-821-7356</li>
            <li>MDA: 800-572-1717</li>
            <li>Emergency: 911</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        IBM Awareness — Built with care for the IBM community — Not a substitute for medical advice
        <div style={{ marginTop: 8, opacity: 0.5, fontSize: '0.72rem' }}>
          Visitors: <span data-goatcounter-uptime="ibm-awareness" data-goatcounter-display-attribution="false" data-goatcounter-format="arrow"></span>
        </div>
      </div>
    </footer>
  )
}

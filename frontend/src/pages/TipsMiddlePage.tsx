import { usePageTitle } from '../hooks/usePageTitle'

export default function TipsMiddlePage() {
  usePageTitle('Middle Stage Tips', 'Adaptive equipment, home modifications, driving, and dysphagia management for middle-stage IBM.')
  return (
    <>
      <div className="page-header">
        <h1>Middle Stage Tips</h1>
        <p className="subtitle">Adapting to increasing limitations while maintaining independence and quality of life</p>
      </div>

      <div className="card">
        <h2>Adaptive Equipment</h2>
        <p>
          As IBM progresses, adaptive tools become essential for maintaining independence.
          The right equipment can make a significant difference in daily life.
        </p>
        <h3>Hand and Arm Aids</h3>
        <ul>
          <li>Built-up handle grips for utensils, toothbrushes, keys, and pens</li>
          <li>Velcro-strap glove aids to help grip objects</li>
          <li>Key turners and lever-style door handles (easier than knobs)</li>
          <li>Electric can openers and jar openers</li>
          <li>Button hooks and zipper pulls for dressing</li>
          <li>Lightweight reacher/grabber tools for items on high or low shelves</li>
          <li>Touchscreen stylus for phones/tablets if finger weakness makes tapping difficult</li>
        </ul>
        <h3>Mobility Aids</h3>
        <ul>
          <li>Walking cane or trekking poles for stability</li>
          <li>Rollator walker with seat for longer outings</li>
          <li>Stairlift for multi-level homes (plan ahead — installation takes time)</li>
          <li>Wheelchair or scooter for longer distances</li>
        </ul>
      </div>

      <div className="card">
        <h2>Home Modifications</h2>
        <h3>Bathroom</h3>
        <ul>
          <li>Install grab bars near toilet, shower, and bathtub (screwed into studs, not just suction cups)</li>
          <li>Shower chair or bench for seated bathing</li>
          <li>Handheld showerhead</li>
          <li>Raised toilet seat or toilet frame with armrests</li>
          <li>Non-slip bath mats</li>
          <li>Walk-in shower or walk-in bathtub (if remodeling)</li>
        </ul>
        <h3>Kitchen</h3>
        <ul>
          <li>Pull-out shelving in cabinets</li>
          <li>Lazy Susans for accessible storage</li>
          <li>D-shaped cabinet handles instead of knobs</li>
          <li>Stovetop fire extinguisher (in case of falls while cooking)</li>
          <li>Seat or stool for tasks that can be done sitting</li>
        </ul>
        <h3>Bedroom</h3>
        <ul>
          <li>Adjustable bed or bed risers for easier transfer</li>
          <li>Bed rails or transfer pole</li>
          <li>Firm mattress (easier to get out of than soft)</li>
          <li>Bedside table within easy reach</li>
          <li>Good lighting with easy-access switches</li>
        </ul>
        <h3>General</h3>
        <ul>
          <li>Remove throw rugs and tripping hazards</li>
          <li>Ensure clear pathways through the home</li>
          <li>Install motion-activated nightlights</li>
          <li>Consider a single-floor living arrangement if stairs become impossible</li>
          <li>Lever-style door handles throughout</li>
        </ul>
      </div>

      <div className="card">
        <h2>Modified Exercise</h2>
        <ul>
          <li>Transition to seated or aquatic exercise as standing becomes difficult</li>
          <li>Focus on maintaining range of motion and preventing contractures</li>
          <li>Use resistance bands instead of free weights</li>
          <li>Prioritize balance and transfer training</li>
          <li>Continue hand and finger exercises to maintain function</li>
          <li>Work closely with your physical therapist to adapt your program</li>
        </ul>
      </div>

      <div className="card">
        <h2>Driving Modifications</h2>
        <ul>
          <li>Hand controls for accelerator and brake (if leg weakness progresses)</li>
          <li>Spinner knob for steering wheel</li>
          <li>Extended key reachers</li>
          <li>Power door locks and trunk openers</li>
          <li>Seat swivel devices for easier entry/exit</li>
          <li>Contact your state's vocational rehabilitation program for driving evaluations</li>
        </ul>
        <div className="info-box warning">
          <strong>Driving safety</strong>
          If you notice increasing difficulty with pedals, steering, or reaction time, discuss
          driving safety with your doctor. It's better to plan for alternatives proactively.
        </div>
      </div>

      <div className="card">
        <h2>Swallowing Safety (Dysphagia)</h2>
        <p>
          Dysphagia affects approximately half of IBM patients and is one of the most serious
          complications. Aspiration pneumonia is the #1 cause of death in myositis patients.
        </p>
        <h3>Diet Modifications</h3>
        <ul>
          <li>Follow the IDDSI (International Dysphagia Diet Standardisation Initiative) framework for food texture levels (iddsi.org)</li>
          <li>Thicken liquids if thin liquids cause coughing</li>
          <li>Alternate solids and sips of liquid during meals</li>
          <li>Choose soft, moist, easy-to-swallow foods</li>
          <li>Avoid dry, crumbly foods (crackers, rice, popcorn)</li>
          <li>Cut food into small pieces and chew thoroughly</li>
        </ul>
        <h3>Positioning and Technique</h3>
        <ul>
          <li>Sit upright during meals and for 30 minutes afterward</li>
          <li>Tuck chin slightly when swallowing (the "chin tuck" maneuver)</li>
          <li>Take small bites and small sips</li>
          <li>Eat slowly and without distractions</li>
        </ul>
        <h3>Warning Signs</h3>
        <ul>
          <li>Coughing/choking during meals</li>
          <li>Wet vocal quality after eating</li>
          <li>Frequent throat clearing</li>
          <li>Unexplained fevers or pneumonia</li>
        </ul>
        <div className="info-box danger">
          <strong>Seek evaluation immediately</strong>
          If you experience any swallowing difficulties, get a swallowing evaluation from a
          speech-language pathologist. Early intervention can prevent aspiration pneumonia.
        </div>
      </div>
    </>
  )
}

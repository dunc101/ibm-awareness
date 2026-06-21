import { usePageTitle } from '../hooks/usePageTitle'

export default function HomeModsPage() {
  usePageTitle('Home Modifications & Hacks', 'Ramps, zero-entry solutions, smart home, and practical modifications for IBM patients who cannot navigate steps or use standard fixtures.')

  return (
    <>
      <div className="page-header">
        <h1>Home Modifications & Hacks</h1>
        <p className="subtitle">When even one step is too much — ramps, zero-entry solutions, smart home, and practical house hacks for IBM patients</p>
      </div>

      <div className="info-box danger">
        <strong>Even one step is a barrier</strong>
        IBM patients often cannot lift their legs high enough to climb a single step. A 6-inch
        threshold can be as impassable as a flight of stairs. Every entry point, every doorway,
        every transition between rooms needs to be evaluated.
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          RAMPS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Ramps — Getting In and Out</h2>
        <p>
          A wheelchair ramp is the single most important modification for IBM patients. Without
          one, you're trapped inside your home. There are options for every situation.
        </p>

        <h3>Permanent Ramps</h3>
        <div className="tip-item">
          <div className="tip-icon">1</div>
          <div className="tip-content">
            <h4>Concrete or Wooden Ramp (Custom Built)</h4>
            <p>
              Permanent ramp installed at your front door (and any other entry). ADA slope
              ratio is 1:12 — for every 1 inch of rise, you need 12 inches of ramp length.
              A 6-inch step needs a 6-foot ramp. Cost: $1,500-5,000 installed.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">2</div>
          <div className="tip-content">
            <h4>Modular Aluminum Ramp — ~$1,000-3,000</h4>
            <p>
              Pre-built sections that snap together. Can be installed in hours, removed if you
              move, and adjusted for different heights. No construction needed. Popular brands:
              Prairie View Industries, EZ-ACCESS. Available on Amazon and home improvement stores.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=modular+aluminum+wheelchair+ramp" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <h3>Portable Ramps</h3>
        <div className="tip-item">
          <div className="tip-icon">3</div>
          <div className="tip-content">
            <h4>Threshold Ramps — ~$25-100</h4>
            <p>
              Small rubber or aluminum ramps that bridge the gap at door thresholds. Typically
              1-6 inches high. Essential for every doorway in the house. No installation needed
              — just place them.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=threshold+ramp+wheelchair" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">4</div>
          <div className="tip-content">
            <h4>Folding Portable Ramp — ~$100-400</h4>
            <p>
              Folds in half for transport. Used for car trunks, visiting friends, restaurants.
              Lengths from 2-8 feet. Weight capacity 600-1000 lbs. Essential for any IBM patient
              who leaves the house.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=folding+portable+wheelchair+ramp" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">5</div>
          <div className="tip-content">
            <h4>Telescoping Ramp — ~$200-600</h4>
            <p>
              Extends and retracts to fit different heights. Great for curbs, single steps,
              and variable-height transitions. More expensive but extremely versatile.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=telescoping+wheelchair+ramp" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          DOORWAYS & ZERO-ENTRY
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Doorways & Zero-Entry Solutions</h2>

        <h3>Zero-Entry Door Hinges</h3>
        <p>
          Standard door hinges leave a gap at the bottom and require pushing the door open wide
          enough for a wheelchair. Zero-entry (or offset) hinges mount the door on the frame
          edge, giving you the full doorway width without needing to widen the door frame.
        </p>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Zero-Entry Hinges — ~$20-50 per set</h4>
            <p>
              Mount on the existing door frame, no construction needed. Gain 2+ inches of
              doorway width. The door swings clear of the frame, giving wheelchair users the
              full opening. Install in 30 minutes with a screwdriver.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=zero+entry+door+hinges+wheelchair" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <h3>Doorway Widening</h3>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Minimum 32" Clear Width</h4>
            <p>
              Standard doorways are 28-30 inches. Wheelchairs need 32 inches minimum. Options:
              remove the door entirely (free), use offset hinges (cheap), or hire a carpenter
              to widen the frame ($200-1,000 per doorway).
            </p>
          </div>
        </div>

        <h3>Door Closers and Openers</h3>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Automatic Door Opener — ~$200-500</h4>
            <p>
              Push-button or sensor-activated door openers for interior and exterior doors.
              Hold a fob or press a button and the door opens automatically. Essential for
              patients who can't push a door open with weak arms.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=automatic+door+opener+wheelchair+accessibility" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Lever Door Handles — ~$5-20 each</h4>
            <p>
              Replace all round doorknobs with lever-style handles. Levers can be operated
              with an elbow, fist, or weak hand. Round knobs require grip strength that IBM
              patients lose early. This is the cheapest, easiest mod you can make.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=lever+door+handle+set" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          STAIRS & MOBILITY BETWEEN FLOORS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Stairs & Multi-Floor Mobility</h2>
        <p>
          If your home has stairs, you need a plan. Options range from simple to complex.
        </p>

        <div className="tip-item">
          <div className="tip-icon">1</div>
          <div className="tip-content">
            <h4>Stairlift — $3,000-15,000</h4>
            <p>
              Motorized chair that rides along a rail mounted to the stairs. Carries the patient
              up and down. For straight stairs: $3,000-5,000. For curved stairs: $10,000-15,000.
              Installation takes 1 day. Popular brands: Bruno, Harmar, Stannah.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">2</div>
          <div className="tip-content">
            <h4>Vertical Platform Lift (VPL) — $5,000-20,000</h4>
            <p>
              Like a small elevator for one or two floors. Wheelchair rolls directly onto the
              platform. More expensive than stairlifts but the patient stays in their wheelchair.
              Required for power wheelchair users who cannot transfer to a stairlift chair.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">3</div>
          <div className="tip-content">
            <h4>Ceiling Track Lift System — $3,000-10,000 installed</h4>
            <p>
              The best solution for multi-floor homes. A motorized lift on ceiling-mounted tracks
              that can move a patient between rooms — even through doorways using "Tarzan"
              portable track connections. Eliminates caregiver lifting entirely. SureHands,
              Prism Medical, and Handicare make these systems.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">4</div>
          <div className="tip-content">
            <h4>Single-Floor Living (Free)</h4>
            <p>
              The cheapest option: convert one floor of your home into a complete living space.
              Move the bedroom downstairs, set up a bathroom with roll-in shower, install a
              ceiling lift on that floor. Avoid the stairs entirely.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          KITCHEN HACKS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Kitchen Hacks</h2>

        <div className="tip-item">
          <div className="tip-icon">🍳</div>
          <div className="tip-content">
            <h4>Height-Adjustable Counter — ~$200-800</h4>
            <p>
              Electric or manual sit-stand desk converters placed on existing counters. Allows
              a wheelchair user to roll under and work at the right height. Alternatively,
              lower one section of counter to 28-30 inches (wheelchair height) during a remodel.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🍳</div>
          <div className="tip-content">
            <h4>Pull-Out Shelving — ~$30-100 per shelf</h4>
            <p>
              Slide-out shelves in lower cabinets eliminate the need to reach into dark cabinets.
              Pull the shelf out to you. Available at Home Depot, IKEA, or Amazon.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=pull+out+shelving+cabinet" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🍳</div>
          <div className="tip-content">
            <h4>Lazy Susan / Turntable — ~$10-30</h4>
            <p>
              Put one in every corner cabinet and deep shelf. Spin to reach items instead of
              reaching into the back. The simplest kitchen hack that makes a huge difference.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=lazy+susan+ cabinet+organizer" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🍳</div>
          <div className="tip-content">
            <h4>D-Shaped Cabinet Handles — ~$3-10 each</h4>
            <p>
              Replace all round cabinet knobs with D-shaped bar pulls. Easier to hook a finger
              or fist through than to grip a round knob. Same concept as lever door handles.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=D+shaped+cabinet+pulls" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🍳</div>
          <div className="tip-content">
            <h4>Electric Can Opener / Jar Opener — ~$15-40</h4>
            <p>
              Push-button can openers and under-cabinet jar openers eliminate the need to grip
              and twist. Essential when hand strength is declining.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=electric+can+opener+one+touch" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🍳</div>
          <div className="tip-content">
            <h4>Rolling Kitchen Cart — ~$50-200</h4>
            <p>
              Mobile island on wheels that can be positioned where needed. Provides extra
              counter space at wheelchair height and can be rolled to the dining table.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SMART HOME
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Smart Home — Voice Control Everything</h2>
        <p>
          When you can't reach light switches, door locks, or thermostats, voice control becomes
          essential — not a luxury. A $30 smart speaker can change your life.
        </p>

        <div className="tip-item">
          <div className="tip-icon">🏠</div>
          <div className="tip-content">
            <h4>Amazon Echo / Google Home — $25-100</h4>
            <p>
              Voice-controlled speaker that can control lights, locks, thermostat, TV, and more.
              "Alexa, turn on the lights." "Hey Google, lock the front door." The single best
              investment for an IBM patient's independence.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🏠</div>
          <div className="tip-content">
            <h4>Smart Light Bulbs — ~$10-30 per bulb</h4>
            <p>
              Replace all light switches with smart bulbs (Philips Hue, Wyze, TP-Link Kasa).
              Control by voice, phone, or automation. No more getting up to flip switches.
              Pair with smart switches for wall-mounted control.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=smart+light+bulb+alexa" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🏠</div>
          <div className="tip-content">
            <h4>Smart Door Lock — ~$100-250</h4>
            <p>
              Yale, August, or Schlage smart locks. Lock/unlock by voice, phone, or code.
              No more fumbling with keys. Let caregivers in remotely.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=smart+door+lock+alexa" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🏠</div>
          <div className="tip-content">
            <h4>Smart Thermostat — ~$100-250</h4>
            <p>
              Nest or Ecobee. Control temperature by voice or phone. Never get up to adjust
              the thermostat again. Also saves energy.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=nest+thermostat" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🏠</div>
          <div className="tip-content">
            <h4>Smart TV Remote / Fire Stick — ~$25-50</h4>
            <p>
              Voice-controlled TV. "Alexa, play Netflix." "Alexa, volume up." No more hunting
              for the remote or struggling with small buttons.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BEDROOM
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Bedroom Modifications</h2>

        <div className="tip-item">
          <div className="tip-icon">🛏</div>
          <div className="tip-content">
            <h4>Adjustable Bed Frame — ~$300-1,500</h4>
            <p>
              Head and foot elevation via remote control. Sit up to read, eat, or watch TV
              without pillows. Critical for dysphagia — sleeping with head elevated reduces
              aspiration risk. Some models have built-in massage.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=adjustable+bed+frame+electric" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🛏</div>
          <div className="tip-content">
            <h4>Hospital Bed — $500-5,000</h4>
            <p>
              Full-electric hospital bed with powered height, head, and foot adjustment.
              Essential for patients who need help getting in and out of bed. Medicare covers
              with physician documentation.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🛏</div>
          <div className="tip-content">
            <h4>Bed Rail / Transfer Pole — ~$30-150</h4>
            <p>
              Grab bar that attaches to the bed frame. Gives the patient something to hold
              when rolling over or transferring. Transfer poles mount floor-to-ceiling and
              serve as a pivot point for standing.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=bed+rail+transfer+pole" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🛏</div>
          <div className="tip-content">
            <h4>Overhead Trapeze Bar — ~$50-200</h4>
            <p>
              A bar above the bed that the patient can grab to reposition themselves. Helps
              with rolling over and sitting up. Attaches to bed frame or wall.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🛏</div>
          <div className="tip-content">
            <h4>Motion-Activated Nightlights — ~$10-20 for a pack</h4>
            <p>
              Plug-in or adhesive lights that turn on when they detect movement. No more
              fumbling for light switches in the dark. Install in hallway, bathroom, bedroom.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=motion+activated+nightlight" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BATHROOM (QUICK REFERENCE)
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Bathroom Quick Reference</h2>
        <p>
          For full bathroom details, see the <a href="/advanced/bathroom">Bathroom & Toileting page</a>.
          Here are the essential quick wins:
        </p>
        <ul>
          <li><strong>Grab bars:</strong> $20-60 each — install near toilet, in shower, at entry (screw into studs!)</li>
          <li><strong>Raised toilet seat:</strong> $25-100 — reduces transfer distance</li>
          <li><strong>Shower chair:</strong> $50-300 — seated showering</li>
          <li><strong>Handheld showerhead:</strong> $20-80 — direct water where needed</li>
          <li><strong>Bidet seat:</strong> $41-550 — eliminates need for wiping</li>
          <li><strong>Non-slip mats:</strong> $10-30 — essential safety</li>
          <li><strong>Anti-scald valve:</strong> $30-100 — prevents burns from temperature spikes</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          VEHICLE MODIFICATIONS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Vehicle Modifications</h2>

        <div className="tip-item">
          <div className="tip-icon">🚗</div>
          <div className="tip-content">
            <h4>Wheelchair Accessible Van — $30,000-80,000+</h4>
            <p>
              Full-size van with lowered floor, ramp, and wheelchair tie-down. The gold
              standard for wheelchair users who travel. Companies: BraunAbility, Vantage
              Mobility, Mobility Works. Some states offer financial assistance.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🚗</div>
          <div className="tip-content">
            <h4>Portable Ramp for Car — $100-400</h4>
            <p>
              Folding ramp to get wheelchair in/out of a van or SUV. Lighter and cheaper than
              a full van conversion. Works with standard minivans.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🚗</div>
          <div className="tip-content">
            <h4>Hand Controls — $500-2,000 installed</h4>
            <p>
              For patients who can still drive but can't use foot pedals. Hand-operated
              accelerator and brake. Contact your state's vocational rehabilitation program
              for evaluation and funding.
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">🚗</div>
          <div className="tip-content">
            <h4>Seat Swivel — ~$200-500</h4>
            <p>
              Turns the driver or passenger seat to face outward, making it easier to transfer
              in and out of the vehicle. Power or manual versions available.
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          CHEAP / FREE HACKS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Free or Cheap Hacks</h2>
        <p>
          Not everything needs to cost money. These simple changes make a big difference:
        </p>
        <ul>
          <li><strong>Remove all throw rugs</strong> — Tripping hazard and wheelchair obstacle (free)</li>
          <li><strong>Clear pathways</strong> — Move furniture to create 36" wide paths through the house (free)</li>
          <li><strong>Remove closet doors</strong> — Bi-fold doors block wheelchair access. Take them off (free)</li>
          <li><strong>Lower closet rods</strong> — Move hanging clothes to wheelchair-reachable height (free)</li>
          <li><strong>Use reaching tools</strong> — $10 grabber tools eliminate bending and reaching (cheap)</li>
          <li><strong>Magnetic knife strip</strong> — Wall-mounted, no drawer access needed ($10-20)</li>
          <li><strong>Velcro everything</strong> — Velcro strips for remote controls, phones, tools — keep them where you need them ($5)</li>
          <li><strong>Bedside caddy</strong> — Hangs on bed rail, holds phone, remote, water, meds ($15-25)</li>
          <li><strong>Shower caddy on chair</strong> — Attach to shower chair so supplies are within reach ($10)</li>
          <li><strong>String on zippers</strong> — Tie a loop of string to zipper pulls for easier gripping (free)</li>
          <li><strong>Grooved door handles</strong> — Wrap rubber bands around smooth handles for better grip (free)</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          COST SUMMARY
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Modification Costs at a Glance</h2>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Modification</th>
              <th>Cost Range</th>
              <th>Covers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lever door handles</td>
              <td>$5-20 each</td>
              <td>Every door</td>
            </tr>
            <tr>
              <td>Threshold ramps</td>
              <td>$25-100 each</td>
              <td>Every doorway</td>
            </tr>
            <tr>
              <td>Grab bars</td>
              <td>$20-60 each</td>
              <td>Bathroom, shower</td>
            </tr>
            <tr>
              <td>Zero-entry hinges</td>
              <td>$20-50 per set</td>
              <td>Narrow doorways</td>
            </tr>
            <tr>
              <td>Motion nightlights</td>
              <td>$10-20 pack</td>
              <td>Hallways, bedroom</td>
            </tr>
            <tr>
              <td>Smart speaker</td>
              <td>$25-100</td>
              <td>Whole house voice control</td>
            </tr>
            <tr>
              <td>Portable ramp</td>
              <td>$100-400</td>
              <td>Car, visits, restaurants</td>
            </tr>
            <tr>
              <td>Adjustable bed frame</td>
              <td>$300-1,500</td>
              <td>Bedroom</td>
            </tr>
            <tr>
              <td>Stairlift</td>
              <td>$3,000-15,000</td>
              <td>Stairs</td>
            </tr>
            <tr>
              <td>Ceiling lift</td>
              <td>$3,000-10,000</td>
              <td>Whole floor</td>
            </tr>
            <tr>
              <td>Wheelchair van</td>
              <td>$30,000-80,000+</td>
              <td>Transportation</td>
            </tr>
          </tbody>
        </table>
        <div className="info-box info">
          <strong>Start with the free and cheap mods first</strong>
          Remove throw rugs, clear pathways, install lever handles, add threshold ramps. Then
          add smart home devices. These changes alone can extend independent living by months
          or years.
        </div>
      </div>
    </>
  )
}

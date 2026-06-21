import { usePageTitle } from '../hooks/usePageTitle'

export default function AdvancedBathroomPage() {
  usePageTitle('Bathroom & Toileting', 'Transfer equipment, portable lifts, commodes, urinals, bidets, and bathroom modifications for IBM patients.')
  return (
    <>
      <div className="page-header">
        <h1>Bathroom & Toileting</h1>
        <p className="subtitle">One of the hardest daily challenges for wheelchair-bound IBM patients — and the equipment that can help</p>
      </div>

      <div className="info-box danger">
        <strong>Transfers are the #1 injury risk</strong>
        Moving from a wheelchair to a toilet or shower is where most falls and caregiver injuries
        happen. The combination of weak quadriceps, weak arms, and wet surfaces creates a
        dangerous situation. Proper equipment and technique are not optional — they are essential.
      </div>

      <div className="card">
        <h2>Why Toileting Is So Difficult with IBM</h2>
        <p>
          Standard toilets were designed for people who can stand and bear weight. For wheelchair-bound
          IBM patients, the challenges stack up:
        </p>
        <ul>
          <li><strong>Quadriceps weakness:</strong> You cannot push up from a seated position — the muscles that straighten your legs don't have the strength</li>
          <li><strong>Arm weakness:</strong> You cannot reliably support your body weight on your arms for transfers — the muscles that push you up from armrests are weakened</li>
          <li><strong>Toilet height:</strong> Standard toilets are 15 inches high; wheelchair seats are typically 19-20 inches. This height mismatch means you're transferring <em>down</em> — harder and more dangerous than transferring up</li>
          <li><strong>Narrow base:</strong> Toilet seats are much narrower than wheelchair seats, giving you less surface area to land on</li>
          <li><strong>Wet surfaces:</strong> Bathroom floors are often tile — slippery when wet</li>
          <li><strong>Tight spaces:</strong> Most residential bathrooms are too small for a wheelchair to maneuver alongside the toilet</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          THE HARD TRUTH: WHEN YOU CANNOT TRANSFER AT ALL
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>The Hard Truth: When You Cannot Transfer</h2>
        <p>
          If you or your loved one has reached the point where they <strong>cannot transfer from a
          power wheelchair to a toilet or shower without a mechanical lift</strong>, the options
          become significantly more limited — especially for travel.
        </p>
        <div className="info-box danger">
          <strong>The reality for advanced IBM</strong>
          At home, you may have a ceiling track lift or a full-size Hoyer that makes transfers
          safe. But those are bolted to the ceiling or weigh 70+ lbs. When you travel, you face
          a harsh reality: <strong>most hotels, even ADA-rated ones, provide zero transfer
          equipment</strong>. They have grab bars and maybe a roll-in shower — but nothing to
          actually move a person who cannot move themselves.
        </div>
        <p>
          This is one of the biggest barriers to travel for advanced IBM patients. The equipment
          that makes daily life possible at home simply does not exist in portable, travel-friendly
          form — at least not yet. Here's what <em>does</em> exist, with honest assessments:
        </p>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PORTABLE PATIENT LIFTS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Portable Patient Lifts — What Actually Exists</h2>
        <p>
          The market for portable patient lifts is small. Most lifts are designed for home or
          facility use — heavy, bulky, and not made for travel. Here's what's available, with
          honest assessments:
        </p>

        <h3>Full-Body Sling Lifts (Best for Patients Who Cannot Help)</h3>
        <p>
          These are the lifts that can pick someone up who has <strong>zero ability to assist</strong>.
          A sling wraps around the patient, and the lift does all the work. The problem: they're
          still heavy.
        </p>

        <div className="tip-item">
          <div className="tip-icon">1</div>
          <div className="tip-content">
            <h4>Molift Smart 150 — ~$3,998</h4>
            <p>
              The gold standard for portable full-body lifts. <strong>Weight: 45 lbs.</strong> Capacity: 330 lbs.
              Folds without tools. Battery-powered. Used in hospitals worldwide. The 45 lbs is still heavy
              for a caregiver to load into a car, but it's the lightest full-body sling lift of its class.
              Works with Molift slings for bed, wheelchair, and shower transfers.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Molift+Smart+150" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=Molift+Smart+150+demo" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo videos</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">2</div>
          <div className="tip-content">
            <h4>Hoyer Advance Electric (E340) — ~$2,518</h4>
            <p>
              Foldable, battery-powered. <strong>Weight: 116 lbs.</strong> Capacity: 400 lbs. Significantly
              heavier than the Molift. At 116 lbs, it is NOT practical for travel — this is a
              home-use lift only.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Hoyer+Advance+Electric+E340" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=Hoyer+Advance+Electric+lift+demo" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo videos</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">3</div>
          <div className="tip-content">
            <h4>VOCIC Electric Transfer Lift — ~$1,000</h4>
            <p>
              Budget option. <strong>Weight: ~35 lbs.</strong> Capacity: 330 lbs. Folds for transport. Less
              established brand than Molift/Hoyer, but significantly cheaper. Mixed reviews on durability.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=VOCIC+electric+transfer+lift" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <h3>Sit-to-Stand Lifts (Require Some Patient Strength)</h3>
        <p>
          These lifts help a patient who can <em>partially</em> bear weight stand up and pivot.
          <strong> They do NOT work for patients who cannot bear any weight on their legs.</strong>
          If your loved one's quadriceps are too weak to bear weight at all, skip these.
        </p>

        <div className="tip-item">
          <div className="tip-icon">4</div>
          <div className="tip-content">
            <h4>Molift Raiser Pro — ~$700</h4>
            <p>
              Stand-assist lift for bed ↔ wheelchair ↔ shower transfers. <strong>Weight: ~35 lbs.</strong>
              Capacity: 375 lbs. Requires the patient to have some leg and upper body strength to participate
              in the transfer. More affordable than the Smart 150 but limited to patients who can partially help.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Molift+Raiser+Pro" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=Molift+Raiser+transfer+demo" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo videos</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">5</div>
          <div className="tip-content">
            <h4>Invacare Get-U-Up GHS350 — ~$1,173</h4>
            <p>
              Sit-to-stand patient lift with standing sling. <strong>Weight: ~55 lbs.</strong> Capacity: 350 lbs.
              Hydraulic operation. Designed for patients who can partially bear weight. A realistic
              sit-to-stand option from a major manufacturer.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Invacare+Get+U+Up+GHS350" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=Invacare+sit+to+stand+patient+lift" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo videos</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">6</div>
          <div className="tip-content">
            <h4>Etac Turner PRO — ~$390</h4>
            <p>
              Pivot transfer aid. <strong>Weight: ~15 lbs.</strong> Capacity: 440 lbs. The lightest option,
              but requires the patient to be able to bear weight and pivot. Not suitable for patients
              who cannot stand at all.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Etac+Turner+PRO" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=Etac+Turner+transfer+demo" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo videos</a>
            </p>
          </div>
        </div>

        <h3>Ultra-Light Options (Floor-to-Seat Only)</h3>
        <p>
          These are NOT full-body lifts. They help someone who has fallen to the floor get back
          up to a seated position. Useful as a backup, but they cannot transfer from wheelchair
          to toilet.
        </p>

        <div className="tip-item">
          <div className="tip-icon">7</div>
          <div className="tip-content">
            <h4>SuperHandy GoRise LT — ~$380-450</h4>
            <p>
              The lightest electric lift on the market at <strong>19 lbs</strong>. Waterproof (IP68).
              Folds flat. Lifts from floor level (2") to 20". Capacity: 330 lbs. Great for emergency
              floor recovery, but cannot do wheelchair-to-toilet transfers.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=SuperHandy+GoRise+LT" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=SuperHandy+GoRise+lift+review" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch review videos</a>
            </p>
          </div>
        </div>

        <div className="info-box warning">
          <strong>The honest answer for travel</strong>
          If your loved one cannot transfer from a power wheelchair without a full-body lift,
          <strong> travel is extremely difficult</strong>. The Molift Smart 150 (45 lbs, $4K) is
          the lightest real option, but loading it into a car requires a strong caregiver. There
          is no portable lift on the market that is both lightweight AND capable of lifting a
          person from a power wheelchair. This is a gap in the market that desperately needs
          to be filled.
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          HOME CEILING LIFTS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Home Ceiling Lifts — SureHands and Others</h2>
        <p>
          For home use, a ceiling-mounted lift system is the gold standard. It eliminates
          caregiver lifting entirely — the patient is suspended from a motorized unit that
          travels along a track mounted to the ceiling.
        </p>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>SureHands Ceiling Lift System</h4>
            <p>
              SureHands (surehands.com) makes ceiling-mounted lift systems with a 15-year design life.
              The motor unit weighs only <strong>17.5 lbs</strong> and can be moved between rooms using
              their "Tarzan" connection — a portable track section that swings between rooms under
              doorways, no doorway modifications needed. Capacity: 400-660 lbs depending on model.
            </p>
            <p>
              <strong>Pricing:</strong> Custom quote required. Typical financing: ~$161/month.
              Contact: (800) 724-5305 or surehands.com.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.surehands.com/products/ceiling-lifts" target="_blank" rel="noopener noreferrer">Visit SureHands</a> ·
              <a href="https://www.youtube.com/results?search_query=SureHands+ceiling+lift+review" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo videos</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Prism Medical Portable Ceiling Lift</h4>
            <p>
              Prism Medical makes portable ceiling lift motors (~20 lbs, 440 lb capacity). Sold
              through medical equipment dealers. Contact a local DME provider for pricing and availability.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.google.com/search?q=Prism+Medical+portable+ceiling+lift" target="_blank" rel="noopener noreferrer">Search for Prism Medical dealers</a>
            </p>
          </div>
        </div>

        <div className="info-box info">
          <strong>Ceiling lifts don't travel</strong>
          A ceiling lift is a home installation — it cannot go with you. For travel, you need a
          portable floor lift (see above) or you need to stay in a facility that has lift equipment.
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          RENTAL AND TRIAL OPTIONS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Renting vs. Buying Equipment</h2>
        <p>
          Patient lifts are expensive. Before spending $4,000 on a Molift, consider these options:
        </p>

        <h3>Equipment Rental</h3>
        <ul>
          <li><strong>Local DME (Durable Medical Equipment) companies</strong> — Search "patient lift rental near me" or "DME rental [your city]". Most local DME companies rent Hoyer-style lifts for $100-200/month</li>
          <li><strong>Apria Healthcare</strong> — National DME rental company (apria.com). Rents beds, lifts, wheelchairs</li>
          <li><strong>Medline / Lincare</strong> — Other national DME suppliers with rental programs</li>
          <li><strong>Insurance coverage</strong> — Medicare Part B covers DME rental with a doctor's prescription. Many commercial insurers also cover rentals</li>
        </ul>

        <h3>Try Before You Buy</h3>
        <ul>
          <li><strong>Amazon 30-day return policy</strong> — Buy a lift, try it at home, return if it doesn't work. This is the most practical "try before you buy" option for most families</li>
          <li><strong>SpinLife (1-800-628-6347)</strong> — Medical equipment retailer with product experts who can consult over the phone before you buy</li>
          <li><strong>Rehabmart (1-800-827-8283)</strong> — Another major retailer with consultation services</li>
          <li><strong>Physical/Occupational therapist</strong> — May have equipment in clinic that you can try during a therapy session</li>
          <li><strong>Ask about floor models</strong> — Some DME providers sell demo units at a discount</li>
        </ul>

        <h3>Used Equipment</h3>
        <ul>
          <li><strong>Facebook Marketplace</strong> — Search "patient lift" locally. Many families sell gently used lifts after a loved one passes</li>
          <li><strong>Craigslist</strong> — Medical equipment section</li>
          <li><strong>eBay</strong> — Used patient lifts often available at 50-70% off retail</li>
          <li><strong>Local disability groups on Facebook</strong> — Community members often share or lend equipment</li>
        </ul>

        <div className="info-box success">
          <strong>Tip: Start with rental</strong>
          If you're unsure what you need, rent first. A local DME company can deliver a lift to
          your home, set it up, and train your caregiver. If it works, you can then decide whether
          to buy or continue renting. Medicare often covers the rental cost.
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PORTABLE COMMODES
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Portable Commodes for Hotels</h2>
        <p>
          When hotel bathrooms aren't accessible, a portable commode in the room eliminates the
          need to transfer to the hotel toilet entirely. Combined with a portable lift, this can
          make hotel stays possible.
        </p>
        <div className="tip-item">
          <div className="tip-icon">1</div>
          <div className="tip-content">
            <h4>Drive Medical Folding Steel Commode — ~$31</h4>
            <p>
              #1 best seller. Folds flat, adjustable height, bucket included, 350 lb capacity.
              Fits in a suitcase or carry bag.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Drive+Medical+folding+commode" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">2</div>
          <div className="tip-content">
            <h4>Carex 3-in-1 Folding Commode — ~$55</h4>
            <p>
              Functions as commode, raised toilet seat, and shower chair. Folds for travel,
              300 lb capacity. Best all-around option.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Carex+3-in-1+folding+commode" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          PORTABLE URINALS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Portable Urinals — Toileting Without Transferring</h2>
        <p>
          For situations where even a commode transfer isn't possible — on long car rides, in
          hotel rooms without space, or when you can't find an accessible restroom. These devices
          allow toileting while remaining in the wheelchair.
        </p>

        <h3>Male Urinals</h3>
        <div className="tip-item">
          <div className="tip-icon">♂</div>
          <div className="tip-content">
            <h4>Collapsible Urine Bottle — ~$10</h4>
            <p>
              750ml collapsible bottle with spill-proof lid. Fits in a bag when collapsed.
              The simplest solution for men who can still position a bottle.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=collapsible+urine+bottle+wheelchair" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">♂</div>
          <div className="tip-content">
            <h4>External Catheter (Condom Catheter) — ~$1-3 each</h4>
            <p>
              Self-adhesive sheath that connects to a drainage bag. Worn discreetly under
              clothing. Good for long car rides or outings where restroom access is uncertain.
              Requires no positioning — the device does the work.
            </p>
          </div>
        </div>

        <h3>Female Urinals</h3>
        <div className="tip-item">
          <div className="tip-icon">♀</div>
          <div className="tip-content">
            <h4>pStyle — ~$13</h4>
            <p>
              Made in USA, reusable, highly rated (4.6 stars, 1,500+ reviews). Allows women to
              urinate while seated in a wheelchair. No bags, no disposable parts — rinse and reuse.
              The gold standard for female wheelchair users.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=pStyle+female+urinal" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon">♀</div>
          <div className="tip-content">
            <h4>Loona Premium Female Urinal — ~$40</h4>
            <p>
              32 oz spill-proof female urinal. HSA eligible. Larger capacity for extended outings.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Loona+premium+female+urinal" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BIDETS — CRITICAL FOR IBM
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Bidets — Essential for IBM Patients</h2>
        <p>
          <strong>This is one of the most important pieces of equipment for IBM patients.</strong> People
          with IBM have weak arms and hands — wiping after using the toilet becomes impossible or
          extremely difficult. A bidet eliminates the need for wiping entirely, preserving dignity,
          hygiene, and skin health.
        </p>
        <div className="info-box success">
          <strong>Why bidets matter for IBM</strong>
          Inadequate perineal cleaning leads to urinary tract infections, skin breakdown, and
          infections. For someone who cannot wipe, a bidet isn't a luxury — it's a medical
          necessity. Most bidet seats are HSA/FSA eligible.
        </div>

        <h3>Built-in Bidet Toilet Seats (Home Use)</h3>
        <p>
          These replace your existing toilet seat. Connect to your water supply. The patient
          sits down, presses a button, and the bidet does everything — no wiping needed.
        </p>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Bio Bidet SlimEdge — ~$41</h4>
            <p>
              Non-electric, dual nozzles, adjustable pressure. The most affordable bidet seat.
              No power needed — works from water pressure alone. A great starting point.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Bio+Bidet+SlimEdge" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Brondell Swash Ecoseat — ~$90</h4>
            <p>
              Non-electric, dual nozzle, ambient water temperature. Easy install. A significant
              step up from basic bidets without the cost of electric models.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Brondell+Swash+Ecoseat" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>TUSHY Classic 3.0 — ~$129</h4>
            <p>
              Non-electric, self-cleaning nozzle, adjustable pressure and angle. One of the most
              popular bidet brands. Simple install, no electricity required.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=TUSHY+Classic+bidet" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=TUSHY+bidet+install+review" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch review</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>TOTO Washlet A2 — ~$247</h4>
            <p>
              Electric, heated seat, SoftClose lid. TOTO is the original bidet company. Electric
              models warm the water and seat — more comfortable, especially in winter.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=TOTO+Washlet+A2" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">✦</div>
          <div className="tip-content">
            <h4>Brondell S1400 — ~$550</h4>
            <p>
              Premium electric. Endless warm water, warm air dryer (eliminates need for any
              wiping), nightlight, heated seat. The air dryer is the key feature for IBM patients
              — it dries everything so no towel or wiping is needed at all.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Brondell+S1400" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <h3>Travel Bidets</h3>
        <p>
          Portable squeeze-bottle bidets for use when away from home. Small enough to fit in a
          purse or bag. Use in any restroom or in the hotel room.
        </p>

        <div className="tip-item">
          <div className="tip-icon">~</div>
          <div className="tip-content">
            <h4>Brondell GoSpa GS-70 — ~$10</h4>
            <p>
              Collapsible squeeze bottle, 400ml, 8,600+ reviews. The most popular travel bidet.
              Fits in a purse when collapsed. Simple, effective, no batteries. A must-pack item.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Brondell+GoSpa+GS-70" target="_blank" rel="noopener noreferrer">View on Amazon</a> ·
              <a href="https://www.youtube.com/results?search_query=portable+bidet+for+disabled+wheelchair" target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>Watch demo</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">~</div>
          <div className="tip-content">
            <h4>TUSHY Travel Bidet — ~$25</h4>
            <p>
              Expandable, discreet design. Slightly more refined than the Brondell. Good for
              frequent travelers.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=TUSHY+travel+bidet" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">~</div>
          <div className="tip-content">
            <h4>CuloClean — ~$10</h4>
            <p>
              Ultralight (12 grams!), fits any standard water bottle. The most compact option —
              just a small nozzle that screws onto a bottle. Almost zero pack weight.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=CuloClean+portable+bidet" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>

        <div className="tip-item">
          <div className="tip-icon">~</div>
          <div className="tip-content">
            <h4>VIKKEN Travel Bidet — ~$45</h4>
            <p>
              USB-C rechargeable electric pump, 300ml. Pressurized spray without squeezing.
              Best for patients or caregivers with weak hands who can't squeeze a bottle.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=VIKKEN+travel+bidet" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TRANSFER SLINGS AND GAIT BELTS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Transfer Slings & Gait Belts</h2>
        <div className="tip-item">
          <div className="tip-icon"> sling </div>
          <div className="tip-content">
            <h4>Vive Patient Lift Sling (Full Body) — ~$40</h4>
            <p>
              Mesh material, shower-compatible, 4.7 stars (1,200+ reviews). Works with most
              portable lifts including Molift. Best all-around sling for IBM patients.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=Vive+full+body+patient+lift+sling" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
        <div className="tip-item">
          <div className="tip-icon"> belt </div>
          <div className="tip-content">
            <h4>Gait Belt with 7 Handles — ~$18</h4>
            <p>
              Quick-release buckle, multiple grip points. For patients who can bear some weight
              but need balance support. Gives caregivers something secure to hold.
            </p>
            <p style={{ marginTop: 6, fontSize: '0.82rem', color: 'var(--text-tertiary)' }}>
              <a href="https://www.amazon.com/s?k=gait+belt+with+handles" target="_blank" rel="noopener noreferrer">View on Amazon</a>
            </p>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          YOUTUBE VIDEOS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Watch Equipment Demos on YouTube</h2>
        <p>
          Seeing equipment in action is the best way to understand how it works. Search these
          terms on YouTube for real-world demos and reviews:
        </p>
        <ul>
          <li><a href="https://www.youtube.com/results?search_query=Molift+Smart+150+patient+lift+demo" target="_blank" rel="noopener noreferrer">Molift Smart 150 patient lift demo</a> — Watch the full-body sling lift in action</li>
          <li><a href="https://www.youtube.com/results?search_query=Molift+Raiser+transfer+wheelchair+bed" target="_blank" rel="noopener noreferrer">Molift Raiser transfer wheelchair to bed</a> — Sit-to-stand lift demonstration</li>
          <li><a href="https://www.youtube.com/results?search_query=Invacare+Get+U+Up+sit+to+stand+lift" target="_blank" rel="noopener noreferrer">Invacare Get-U-Up sit-to-stand lift</a> — Sit-to-stand lift demonstration</li>
          <li><a href="https://www.youtube.com/results?search_query=SureHands+ceiling+lift+system" target="_blank" rel="noopener noreferrer">SureHands ceiling lift system</a> — See how ceiling-mounted lifts work</li>
          <li><a href="https://www.youtube.com/results?search_query=SuperHandy+GoRise+lift+review" target="_blank" rel="noopener noreferrer">SuperHandy GoRise lift review</a> — Ultra-light 19 lb lift</li>
          <li><a href="https://www.youtube.com/results?search_query=Etac+Turner+transfer+demo" target="_blank" rel="noopener noreferrer">Etac Turner transfer demo</a> — Pivot transfer aid</li>
          <li><a href="https://www.youtube.com/results?search_query=bidet+toilet+seat+install+wheelchair+user" target="_blank" rel="noopener noreferrer">Bidet toilet seat install for wheelchair user</a> — How bidets help with hygiene</li>
          <li><a href="https://www.youtube.com/results?search_query=portable+bidet+for+disabled" target="_blank" rel="noopener noreferrer">Portable bidet for disabled</a> — Travel bidet demos</li>
          <li><a href="https://www.youtube.com/results?search_query=power+wheelchair+transfer+technique" target="_blank" rel="noopener noreferrer">Power wheelchair transfer technique</a> — Transfer methods and equipment</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          BATHROOM MODIFICATIONS
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Bathroom Modifications</h2>
        <h3>Essential</h3>
        <ul>
          <li><strong>Grab bars:</strong> Near toilet (both sides), inside shower, at shower entry — screwed into studs, NOT suction cups — $20-60 each</li>
          <li><strong>Non-slip flooring:</strong> Non-slip tiles or adhesive strips — $1-5/sq ft</li>
          <li><strong>Handheld showerhead:</strong> Essential for seated showering — $20-80</li>
          <li><strong>Shower chair or bench:</strong> Height-adjustable, padded, with back support — $50-300</li>
          <li><strong>Bidet toilet seat:</strong> See bidet section above — $41-550</li>
        </ul>

        <h3>Strongly Recommended</h3>
        <ul>
          <li><strong>Roll-in shower:</strong> Curbless entry for wheelchair access — $1,000-5,000 to install</li>
          <li><strong>Ceiling track lift:</strong> Motorized lift on ceiling-mounted track — $3,000-8,000 installed, but eliminates caregiver lifting entirely</li>
          <li><strong>Widened doorway:</strong> Minimum 32" clearance — $200-1,000 per door</li>
          <li><strong>Anti-scald valves:</strong> Prevents burns — $30-100</li>
        </ul>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          TRAVEL TOILETING
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Travel Toileting</h2>
        <p>
          Managing toileting while traveling is one of the biggest barriers for wheelchair-bound
          IBM patients. Here's how to plan:
        </p>

        <h3>Hotel Bathroom Assessment</h3>
        <ul>
          <li><strong>Call ahead:</strong> Don't trust "accessible" labels — ask specifically: Is there a roll-in shower? What is the toilet height? Are there grab bars? Is there space for a wheelchair alongside the toilet?</li>
          <li><strong>Request photos:</strong> Ask the hotel to email photos of the accessible bathroom</li>
          <li><strong>Bring your own equipment:</strong> Portable commode, travel bidet, suction cup grab bars, handheld showerhead attachment</li>
          <li><strong>Lower floor:</strong> Request a room on a lower floor for easier evacuation</li>
        </ul>

        <h3>Recommended Travel Kit</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Product</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Portable lift</strong></td>
              <td>Molift Smart 150 (if you can manage 45 lbs)</td>
              <td>~$4,000</td>
            </tr>
            <tr>
              <td><strong>Budget lift</strong></td>
              <td>VOCIC Electric Transfer Lift</td>
              <td>~$1,000</td>
            </tr>
            <tr>
              <td><strong>Portable commode</strong></td>
              <td>Carex 3-in-1 Folding Commode</td>
              <td>~$55</td>
            </tr>
            <tr>
              <td><strong>Transfer sling</strong></td>
              <td>Vive Full Body Mesh Sling</td>
              <td>~$40</td>
            </tr>
            <tr>
              <td><strong>Urinal</strong></td>
              <td>pStyle (female) / Collapsible bottle (male)</td>
              <td>$10-13</td>
            </tr>
            <tr>
              <td><strong>Travel bidet</strong></td>
              <td>Brondell GoSpa GS-70</td>
              <td>~$10</td>
            </tr>
            <tr>
              <td><strong>Grab bars</strong></td>
              <td>Suction cup temporary grab bars (set of 2)</td>
              <td>~$25</td>
            </tr>
          </tbody>
        </table>

        <div className="info-box info">
          <strong>AccessibleGO and Wheel the World</strong>
          These websites provide wheelchair-user-reviewed assessments of hotel bathroom
          accessibility. Check them before booking.
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          SKIN CARE
         ═══════════════════════════════════════════════════════════════ */}
      <div className="card">
        <h2>Skin Care and Hygiene</h2>
        <ul>
          <li><strong>Pressure sores:</strong> Inspect skin daily over bony prominences (sacrum, heels, hips). Use pressure-relieving cushions and perform regular weight shifts</li>
          <li><strong>Moisture management:</strong> Keep skin clean and dry; use moisture barrier creams in skin folds</li>
          <li><strong>Perineal care:</strong> Essential for preventing UTIs and skin breakdown — use a bidet (see above) and gentle cleansers</li>
          <li><strong>Oral care:</strong> Critical for aspiration pneumonia prevention — brush teeth twice daily; if unable, use oral swabs</li>
        </ul>
      </div>
    </>
  )
}

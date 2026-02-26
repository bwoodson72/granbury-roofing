import type { Service } from '@/types/content'

export const services: Service[] = [
  {
    id: 'service-1',
    slug: 'roof-inspections',
    title: 'Roof Inspections',
    shortDescription:
      'Thorough, no-pressure roof inspections to catch problems early and protect your home before small issues become costly repairs.',
    heroHeadline: 'Know Exactly Where Your Roof Stands',
    heroSubtext:
      'Our certified inspectors examine every inch of your roof — shingles, flashing, decking, and drainage — so you have the facts before deciding on repairs.',
    overview:
      'Texas weather is hard on roofs. Between summer heat pushing 105°F, golf-ball-sized hail, and severe spring thunderstorms, a roof that looked fine last year can deteriorate fast. Our comprehensive inspection process goes beyond a quick visual scan. We check shingle condition, granule loss, flashing integrity around chimneys and vents, soffit and fascia health, attic ventilation, and signs of interior water intrusion. You receive a detailed written report with photos, so you understand exactly what we found and what — if anything — needs to be done. There is never any sales pressure.',
    commonProblems: [
      'Missing or cracked shingles after high-wind events',
      'Granule loss exposing asphalt to UV degradation',
      'Failed or lifted flashing around chimneys, skylights, and pipe boots',
      'Sagging decking from long-term moisture infiltration',
      'Blocked ridge vents causing heat buildup and premature aging',
      'Gutter separation allowing water to pool against the fascia',
    ],
    includedWork: [
      'Full exterior shingle-by-shingle inspection with photo documentation',
      'Flashing and sealant condition assessment at all penetrations',
      'Soffit, fascia, and gutter attachment inspection',
      'Attic ventilation and decking evaluation (where accessible)',
      'Written inspection report with prioritized findings',
      'Insurance claim consultation if storm damage is identified',
    ],
    benefits: [
      'Catch small problems before they become expensive emergency repairs',
      'Documented proof of roof condition for insurance or real estate purposes',
      'Unbiased findings — we tell you what you need, not what pads the bill',
      'Fast scheduling, typically within 48 hours in the Granbury area',
    ],
    processSteps: [
      'Schedule your free inspection — we confirm within one business day and arrive on time',
      'Our inspector walks the entire roof and photographs all areas of concern',
      'We review findings with you on-site in plain language, no jargon',
      'You receive a written report by email within 24 hours, with no obligation to proceed',
    ],
    faqIds: ['faq-general-1', 'faq-general-2', 'faq-general-3'],
    relatedServiceSlugs: ['roof-repair', 'storm-damage-restoration'],
    featuredImage: '/images/services/roof-inspection.avif',
    seoTitle: 'Free Roof Inspections in Granbury, TX | Granbury Peak Roofing',
    seoDescription:
      'Get a thorough, no-pressure roof inspection in Granbury, Weatherford, Cleburne, and surrounding areas. Certified inspectors, detailed reports, no obligation.',
  },
  {
    id: 'service-2',
    slug: 'roof-repair',
    title: 'Roof Repair',
    shortDescription:
      'Fast, lasting roof repairs for leaks, damaged shingles, failed flashing, and storm damage — done right the first time.',
    heroHeadline: 'Stop the Leak Before It Costs You More',
    heroSubtext:
      'A small roof problem left unaddressed in Texas heat and humidity turns into rotted decking, mold, and interior damage fast. We respond quickly and fix it right.',
    overview:
      'Not every roofing problem requires a full replacement. Our repair team handles everything from a single missing shingle to multi-section damage from a fallen limb or hail strike. We use materials that match your existing roof as closely as possible and seal every repair to manufacturer standards. All repair work is backed by our workmanship warranty, and we stand behind our jobs. If a repair is not the right call — because the roof is too far gone — we will tell you honestly and walk you through replacement options instead.',
    commonProblems: [
      'Active leaks around chimneys, vents, or in valleys',
      'Wind-lifted or blown-off shingles exposing bare decking',
      'Cracked or deteriorated pipe boot seals',
      'Ice-dam damage along eaves (rare but possible during North Texas winters)',
      'Tree limb impact damage to shingles and decking',
      'Failed caulking and sealant at flashing joints',
    ],
    includedWork: [
      'Leak source identification, including interior attic inspection if needed',
      'Removal and replacement of damaged shingles or sections',
      'Flashing repair or replacement at chimneys, vents, and valleys',
      'Pipe boot seal replacement with long-life rubber or lead boots',
      'Decking repair where water has compromised structural integrity',
      'Final inspection and water-test to confirm the repair is sound',
    ],
    benefits: [
      'Stops water intrusion before it damages insulation, drywall, and framing',
      'Costs a fraction of a full replacement when the rest of the roof is sound',
      'Most repairs completed in a single day with minimal disruption',
      'Workmanship warranty backed by a local company that will still be here tomorrow',
    ],
    processSteps: [
      'Call or book online — we offer same-day or next-day appointments for active leaks',
      'We perform a targeted inspection to pinpoint the exact source of failure',
      'We provide a transparent, itemized quote before any work begins',
      'Repair is completed and inspected; you are notified with before-and-after photos',
    ],
    faqIds: ['faq-repair-1', 'faq-repair-2', 'faq-general-1'],
    relatedServiceSlugs: ['roof-inspections', 'roof-replacement'],
    featuredImage: '/images/services/roof-repair.avif',
    seoTitle: 'Roof Repair in Granbury & Hood County, TX | Granbury Peak Roofing',
    seoDescription:
      'Fast, reliable roof repair in Granbury, Weatherford, Cleburne, and Glen Rose. Leak fixes, shingle replacement, flashing repair — done right the first time.',
  },
  {
    id: 'service-3',
    slug: 'roof-replacement',
    title: 'Roof Replacement',
    shortDescription:
      'Full roof replacements with premium materials built to withstand Texas heat, hail, and high winds — installed by GAF-certified crews.',
    heroHeadline: 'A New Roof That Lasts 30 Years in Texas',
    heroSubtext:
      'When repairs are no longer the right answer, we make the replacement process straightforward — quality materials, clean installs, and no surprise costs.',
    overview:
      'A full roof replacement is one of the largest investments a homeowner makes, and we treat it that way. Our process starts with a detailed assessment to confirm replacement is truly needed — we do not upsell homeowners who only need repairs. When it is time to replace, we offer a curated selection of GAF architectural shingles rated for high-wind and impact resistance, ideal for the weather patterns of Hood County and surrounding areas. Our crews strip the existing roof to bare decking, inspect and replace any compromised decking boards, install proper underlayment and ice-and-water shield at vulnerable edges, and complete the job with thorough cleanup including magnetic nail sweep of your yard.',
    commonProblems: [
      'Roof age exceeding 20–25 years with widespread granule loss',
      'Multiple layers of shingles already in place (Texas code limit)',
      'Widespread hail damage making repair cost-prohibitive',
      'Persistent leaks that cannot be isolated to a single repair point',
      'Significant decking rot or sagging visible from the attic',
    ],
    includedWork: [
      'Complete tear-off and disposal of existing shingle layers',
      'Full decking inspection with replacement of damaged boards',
      'Ice-and-water shield at eaves, valleys, and penetrations',
      'Synthetic or felt underlayment over the full deck',
      'GAF architectural shingle installation per manufacturer specs',
      'Ridge cap, flashing, and drip-edge installation; full cleanup with magnet sweep',
    ],
    benefits: [
      'Manufacturer-backed material warranties up to lifetime on qualifying products',
      'Improved energy efficiency with proper attic ventilation as part of the install',
      'Increased home resale value and curb appeal',
      'Peace of mind knowing your home is protected for decades',
    ],
    processSteps: [
      'Free inspection and honest assessment — replacement only if truly needed',
      'Material selection consultation and detailed written estimate with no hidden fees',
      'Installation day: tear-off, decking check, full new system installed start to finish',
      'Final walkthrough with you, cleanup confirmation, and warranty documentation delivered',
    ],
    faqIds: ['faq-replacement-1', 'faq-replacement-2', 'faq-repair-1'],
    relatedServiceSlugs: ['roof-inspections', 'gutter-installation'],
    featuredImage: '/images/services/roof-replacement.avif',
    seoTitle: 'Roof Replacement in Granbury, TX | GAF Certified | Granbury Peak Roofing',
    seoDescription:
      'Full roof replacement in Granbury, Weatherford, Stephenville, and Cleburne. GAF-certified crews, impact-resistant shingles, transparent pricing, and lasting warranties.',
  },
  {
    id: 'service-4',
    slug: 'storm-damage-restoration',
    title: 'Hail & Storm Damage Restoration',
    shortDescription:
      'Expert hail and storm damage assessment, documentation, and restoration — with full insurance claim support from inspection through final approval.',
    heroHeadline: 'Hail Hit Your Roof. We Handle the Rest.',
    heroSubtext:
      'From emergency tarping the night of the storm to working directly with your adjuster, Granbury Peak guides you through every step of the insurance restoration process.',
    overview:
      'Hood County and the surrounding Hill Country sit squarely in Tornado Alley\'s hail corridor. Severe hailstorms capable of producing 1- to 3-inch hailstones are a near-annual event for Granbury and Weatherford homeowners. Hail damage is not always obvious to the untrained eye — soft-metal denting, granule displacement, and bruised asphalt can hide until the next rain exposes a leak. Our storm damage team is trained to document damage the way insurance adjusters need to see it: precise measurements, material samples, and photo grids that support a full claim. We work with all major carriers and advocate for homeowners to ensure the approved scope covers legitimate damage.',
    commonProblems: [
      'Hail-bruised shingles that appear intact but have lost waterproofing integrity',
      'Dented gutters, downspouts, vents, and soft-metal flashing',
      'Wind-driven rain infiltration through lifted or cracked shingles',
      'Damaged skylights, ridge vents, and pipe boots from large hail',
      'Interior ceiling staining appearing weeks after a storm',
    ],
    includedWork: [
      'Comprehensive storm damage inspection with insurance-grade photo documentation',
      'Emergency tarping and temporary protection to stop active water intrusion',
      'Detailed damage report formatted for insurance adjuster review',
      'On-site meeting with your insurance adjuster upon request',
      'Full restoration — shingles, decking, flashing, gutters — once claim is approved',
      'Supplement negotiation if the initial insurance scope is underpaid',
    ],
    benefits: [
      'One point of contact from emergency response through final restoration',
      'We help ensure your approved claim covers all legitimately damaged components',
      'No out-of-pocket costs beyond your deductible in most approved claim scenarios',
      'Rapid response minimizes secondary water damage inside your home',
      'All restoration work backed by our workmanship warranty',
    ],
    processSteps: [
      'Call us after a storm — we can often tarp and secure your roof the same day',
      'We perform a full damage inspection and prepare your insurance documentation package',
      'We meet your adjuster on-site and present our findings to support a full scope',
      'Once approved, we complete the full restoration and handle all final paperwork',
    ],
    faqIds: ['faq-insurance-1', 'faq-insurance-2', 'faq-emergency-1'],
    relatedServiceSlugs: ['roof-repair', 'roof-replacement'],
    featuredImage: '/images/services/storm-damage.avif',
    seoTitle: 'Hail & Storm Damage Roof Restoration in Granbury, TX | Granbury Peak Roofing',
    seoDescription:
      'Storm damage roof restoration in Granbury, Weatherford, and Hood County. Expert insurance claim support, emergency tarping, and full hail damage repair.',
  },
  {
    id: 'service-5',
    slug: 'gutter-installation',
    title: 'Gutter Installation & Replacement',
    shortDescription:
      'Seamless gutters custom-fabricated on-site to protect your foundation, landscaping, and fascia from Texas downpours.',
    heroHeadline: 'Gutters That Keep Up With Texas Rain',
    heroSubtext:
      'Texas can drop 4 inches of rain in an afternoon. Undersized or clogged gutters mean water against your foundation and rotting fascia. We install gutters built to handle it.',
    overview:
      'Gutters are the last line of defense between your roof and your home\'s foundation. In central Texas, where flash flooding and high-intensity rainfall events are common, properly sized and securely fastened gutters are not optional — they are essential. We fabricate seamless aluminum gutters on-site using a continuous-run machine, which eliminates the joints where sectional gutters fail and leak. Every installation includes proper pitch calculation to prevent standing water, secure hidden hanger mounting rated for Texas wind loads, and downspout placement that directs water well away from the foundation.',
    commonProblems: [
      'Sagging or pulling gutters caused by failed spike-and-ferrule fasteners',
      'Leaking joints on sectional gutters that have separated over time',
      'Undersized 4-inch gutters unable to handle heavy Texas rainfall volumes',
      'Downspouts discharging too close to the foundation, causing erosion or basement seepage',
      'Rotted fascia boards from years of overflowing or back-pitched gutters',
    ],
    includedWork: [
      'Removal and disposal of existing gutters and downspouts',
      'Fascia board inspection and replacement of rotted sections prior to installation',
      'On-site fabrication of custom-length seamless aluminum gutters in standard colors',
      'Hidden hanger installation at code-compliant spacing for wind resistance',
      'Downspout sizing and placement for effective drainage away from the foundation',
      'Gutter guard compatibility assessment and optional leaf guard installation',
    ],
    benefits: [
      'Seamless construction means no joints to separate, caulk, or leak',
      'Protects foundation, landscaping, and exterior paint from water damage',
      'Custom-fabricated on-site to fit your home\'s exact dimensions',
      'Available in a full range of colors to complement your roofline',
    ],
    processSteps: [
      'We measure your roofline and calculate the correct gutter size and downspout count',
      'Fascia and soffit are inspected; any rot is repaired before installation begins',
      'Gutters are fabricated on-site and mounted with hidden hangers at proper pitch',
      'Downspouts are installed and tested with a water flow check before we leave',
    ],
    faqIds: ['faq-gutters-1', 'faq-gutters-2'],
    relatedServiceSlugs: ['roof-inspections', 'roof-replacement'],
    featuredImage: '/images/services/gutter-installation.avif',
    seoTitle: 'Seamless Gutter Installation in Granbury & Hood County, TX | Granbury Peak Roofing',
    seoDescription:
      'Custom seamless gutter installation and replacement in Granbury, Weatherford, Glen Rose, and Cleburne. Protect your foundation from Texas downpours.',
  },
]

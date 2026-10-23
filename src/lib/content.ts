export const site = {
  name: "Anay Consultants & Engineers",
  shortName: "ACE",
  formerName: "Volmaken",
  tagline: "Engineering Data You Can Build On.",
  taglines: [
    "Engineering Data You Can Build On.",
    "Integrated Engineering. Real Impact.",
    "Building Stronger Foundations.",
  ],
  descriptor: "Integrated Technical Collaboration",
  pillarsLine: "Consultant | Inspection | Survey | Testing | Building Inspection",
  promise: "Accurate Data. Reliable Solutions. Sustainable Tomorrow.",
  founded: 2024,
  url: "https://www.aceanay.com",
  serviceArea: "Indore, Madhya Pradesh and Central India",
  email: "info@anayglobalservices.com",
  quotesEmail: "quotes@anayglobalservices.com",
  phone: "+91 731 497 2400",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/network", label: "Network" },
  { href: "/projects", label: "Projects" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

export const offices = [
  {
    id: "indore",
    name: "Indore Head Office",
    city: "Indore",
    role: "Head Office · Testing, Surveying & Consultancy",
    address: [
      "206, 2nd Floor, Giriraj Tower",
      "Bhawar Kuan Square",
      "Indore, Madhya Pradesh 452001",
    ],
    phone: "+91 731 497 2400",
    email: "indore@anayglobalservices.com",
    mapQuery: "Giriraj Tower, Bhawar Kuan Square, Indore, Madhya Pradesh",
    lat: 22.6926,
    lng: 75.8676,
  },
] as const;

export const stats = [
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Institutional Clients" },
  { value: "Indore", label: "Headquarters, MP" },
  { value: "2024", label: "Established Year" },
] as const;

export const trustHighlights = [
  { kicker: "Established", value: "2024" },
  { kicker: "Office", value: "Bhawar Kuan, Indore" },
  { kicker: "Network", value: "5 Specialist Partners" },
  { kicker: "Focus", value: "Data. Design. Delivery." },
] as const;

export type Service = {
  slug: string;
  guide: { href: string; fileName: string };
  number: string;
  name: string;
  short: string;
  summary: string;
  body: string;
  scope: string;
  image: string;
  gallery?: { src: string; alt: string; caption: string }[];
  offerings: string[];
  outcomes: string[];
  partner: string;
  audience: string[];
  industries: string[];
  process: string[];
  deliverables: string[];
  standards: string[];
  serviceArea: string;
  faqs: { question: string; answer: string }[];
  imageIdeas: { subject: string; description: string; keywords: string }[];
  updatedAt: string;
};

/* 
  Order of services: Consultant | Inspection | Survey | Testing | Building Inspection
  01: Engineering, DPR & Turnkey Consultancy (Consultant)
  02: Inspection & Certification (Inspection)
  03: Surveying & Geospatial (Survey)
  04: Civil Material Testing Lab (Testing)
  05: Chemical & Product Testing (Testing)
  06: Environmental Services (Testing & Monitoring)
  07: Residential & Commercial Building Inspection (Building Inspection)
*/
export const services: Service[] = [
  {
    slug: "engineering-dpr-consultancy",
    guide: {
      href: "/docs/service-guides/engineering-dpr-turnkey-consultancy.docx",
      fileName: "engineering-dpr-turnkey-consultancy.docx",
    },
    number: "01",
    name: "Engineering, DPR & Turnkey Consultancy",
    short: "From reconnaissance to DPR, design and PMC — engineering that can be built, billed and audited.",
    summary:
      "Archies Engineers leads design and DPR work inside the ACE network: highways, buildings, industrial plants and water resources, with the testing and survey data already in the room.",
    body: "Most consultancy is a document factory. Ours is a closed loop: survey and laboratory data feed the design; the design feeds the BOQ; inspection and testing follow the same assumptions. Archies Engineers prepares DPRs, structural and infrastructure designs, and turnkey advisory so clients are not translating between three firms that have never shared a drawing register.",
    scope:
      "The assignment can begin with a feasibility question or a live construction problem. The team reviews the brief, site constraints, land and utility information, existing surveys, applicable authority requirements and the intended procurement route. From there, the scope may cover reconnaissance, options and concept development, preliminary and detailed civil or structural design, quantities, estimates, tender documentation, bid clarifications, PMC support, construction-stage technical responses and handover records. The exact package is agreed against the employer's requirements and the authority's submission format before design work starts.",
    image: "/images/consultancy-review.png",
    gallery: [
      {
        src: "/images/consultancy-site-planning.png",
        alt: "Engineers planning a highway construction project at an active site",
        caption: "Site planning connects drawings, quantities, field constraints and construction decisions before work moves forward.",
      },
    ],
    partner: "Archies Engineers",
    offerings: [
      "Feasibility, reconnaissance and option reports for infrastructure proposals",
      "Detailed Project Reports for roads, buildings, water works and industrial civil packages",
      "Preliminary and detailed civil, structural and infrastructure design",
      "Drainage, site-development and constructability inputs where included in the brief",
      "BOQs, quantity take-offs, cost estimates, rate analysis and bid documents",
      "Design review, value-engineering and coordination of survey and laboratory inputs",
      "PMC, owner's-engineer and construction-stage technical support",
      "RFI, variation, measurement, as-built and handover-documentation support",
    ],
    outcomes: [
      "DPRs that authority reviewers can navigate",
      "Designs grounded in measured, not assumed, data",
      "One accountable engineering conversation",
      "Quantities and specifications that connect back to the design basis",
      "Earlier visibility of constructability, cost and approval risks",
      "A coordinated technical record for owners, EPC teams and auditors",
    ],
    audience: ["Owners and developers", "EPC and PMC teams", "Government and infrastructure agencies"],
    industries: ["Highways", "Buildings", "Industrial plants", "Water resources"],
    process: [
      "Review the project brief, site constraints and available survey data",
      "Coordinate surveys, testing inputs and design assumptions",
      "Prepare the DPR, design, quantities and implementation support package",
    ],
    deliverables: ["DPR and feasibility reports", "Design drawings and calculations", "BOQs, estimates and bid documents", "PMC and construction-stage advice"],
    standards: [
      "Employer's requirements, contract conditions and the authority's submission checklist",
      "Current MoRTH Specifications for Road and Bridge Works and applicable NHAI or state PWD requirements",
      "Relevant IRC publications for highway, pavement, bridge and geometric-design work",
      "Applicable IS codes, including IS 456, IS 800, IS 875, IS 10262, IS 1893 and IS 13920 where the design brief requires them",
      "NBC 2016, CPWD specifications or state schedule-of-rates documents where adopted by the project",
      "Project QAP, ITP, geotechnical recommendations and survey-control requirements",
    ],
    serviceArea: "Indore, Madhya Pradesh and Central India",
    faqs: [
      {
        question: "What information is needed to start a DPR or consultancy brief?",
        answer: "Share the site location, project objective, available surveys, land or utility information, design standards, programme and the authority or client format required for submission.",
      },
      {
        question: "Can the consultancy team use ACE survey and laboratory data?",
        answer: "Yes. The integrated model is designed so that survey control, material results and design assumptions can be reviewed together instead of being translated between disconnected vendors.",
      },
      {
        question: "Does turnkey consultancy mean ACE becomes the contractor?",
        answer: "No. Turnkey advisory is scoped to the agreed engineering, coordination and delivery-support role. Principal-contractor duties, statutory approvals and construction liabilities remain with the parties named in the contract.",
      },
    ],
    imageIdeas: [
      {
        subject: "Indian infrastructure design review",
        description: "Engineers reviewing a marked-up highway or public-works drawing beside a site plan, with an active road project and clearly controlled technical references in the background.",
        keywords: "Indian highway DPR engineers design review site plan construction",
      },
      {
        subject: "Highway planning and construction coordination",
        description: "A field engineering team reviewing drawings, quantities and site progress near an active highway or bridge project; keep project documents fictional or unreadable.",
        keywords: "highway construction planning engineers DPR site coordination India",
      },
    ],
    updatedAt: "2026-10-22",
  },
  {
    slug: "inspection-certification",
    guide: {
      href: "/docs/service-guides/inspection-certification.docx",
      fileName: "inspection-certification.docx",
    },
    number: "02",
    name: "Inspection, Audit & Certification",
    short: "Independent inspection, audit and certification-readiness support for vendors, facilities, materials and project handovers.",
    summary:
      "True Certificate gives owners, procurement teams and operators a documented view of quality — from source inspection and stock checks to management-system, safety, energy and sustainability assessments.",
    body: "Quality risk often appears between the purchase order, warehouse, production floor and final release. Our inspection and audit team creates a visible chain of evidence: what was checked, against which requirement, by whom and what remains open. The service supports commercial release, management review and certification preparation without confusing an independent assessment with a statutory or accredited certificate.",
    scope:
      "The assignment is planned around the client's specification, checklist, inspection-and-test plan, management-system objective or certification scheme. Depending on the package, the team can review supplier capability, inspect materials and equipment, reconcile warehouse records, audit storage and operating procedures, assess electrical safety and energy practices, review environmental controls or prepare an organization for external assessment. Findings are prioritized, evidence-linked and closed through an action register. Where a recognized body, laboratory, inspector or scheme owner must issue the final certificate, ACE coordinates the evidence and readiness work without claiming that authority.",
    image: "/images/renewable-energy-inspection-sunset.png",
    gallery: [
      {
        src: "/images/survey-land.jpeg",
        alt: "Aerial land survey view showing a marked site boundary",
        caption: "Site and land context helps inspection teams connect field observations, boundaries and project records.",
      },
      {
        src: "/images/inspection-manufacturing.avif",
        alt: "Quality professional recording notes at a manufacturing facility",
        caption: "Factory and process audits turn observations into evidence-backed corrective actions.",
      },
    ],
    partner: "True Certificate",
    offerings: [
      "Third-party vendor, source, factory and warehouse inspections against the agreed criteria",
      "Incoming material, equipment, quantity, identity, packaging and document-traceability checks",
      "Dimensional, visual, fabrication, workmanship and stage-wise inspection at defined hold points",
      "Welding records, coating preparation, test witnessing and non-destructive examination coordination where specified",
      "Warehouse stock, storage-condition, inventory-control and operating-procedure audits",
      "Supplier quality, process and management-system audits with evidence-based findings",
      "Electrical-safety, energy-use, utility-control and sustainability or green-practice reviews",
      "Certification-readiness support for ISO management systems, MSME ZED-style assessments and hygiene reviews where applicable",
      "NCR, corrective-action, punch-list, waiver, release-note and final dossier compilation",
      "Follow-up verification so owners can see whether agreed actions were actually closed",
    ],
    outcomes: [
      "Clearer release decisions for materials, vendors and project packages",
      "Inspection records and audit findings tied to the actual requirement",
      "Reduced rework, repeat findings and late commissioning surprises",
      "An action list that gives suppliers and site teams a practical route to close gaps",
      "A traceable evidence pack for management review, handover and external assessment",
      "Clear separation between independent assessment, advisory support and final certification authority",
    ],
    audience: ["Asset owners and developers", "EPC, procurement and PMC teams", "Manufacturers, warehouses and suppliers", "MSMEs preparing for external assessment"],
    industries: ["Manufacturing", "Energy and utilities", "Infrastructure", "Warehousing", "Food and consumer products"],
    process: [
      "Define the inspection, audit or certification objective, criteria and evidence required",
      "Inspect the facility, supplier, material or work stage and record objective evidence",
      "Issue a traceable report with findings, priorities and corrective actions",
      "Verify close-out and assemble the release, handover or certification-readiness dossier",
    ],
    deliverables: ["Inspection and release reports", "Vendor, factory and warehouse audit reports", "Safety, energy and sustainability review records", "NCR and corrective-action registers", "Certification-readiness and evidence dossiers"],
    standards: [
      "Approved purchase orders, drawings, ITPs, QAPs, method statements and client release criteria",
      "Applicable IS and ISO requirements for the product, process, facility or management system under review",
      "ISO 9001, ISO 14001, ISO 45001 or ISO 50001 criteria where adopted by the client or assessment body",
      "MSME Sustainable (ZED) scheme criteria or other sector scheme requirements where applicable",
      "Food hygiene, workplace safety, electrical-safety and environmental checklists relevant to the facility",
      "Project, lender, authority and end-user requirements, including approved concessions and corrective-action records",
    ],
    serviceArea: "Indore, Madhya Pradesh and project locations across Central India",
    faqs: [
      {
        question: "When should an inspection or audit team be appointed?",
        answer: "Bring the team in before the purchase order, production schedule or assessment date is fixed. That allows the criteria, evidence, hold points and reporting format to be agreed before work starts.",
      },
      {
        question: "Can ACE issue the final ISO, scheme or statutory certificate?",
        answer: "No. ACE can inspect, audit, advise and prepare the evidence pack. The final certificate or statutory approval must come from the authority, recognized certification body, notified body, accredited laboratory or qualified signatory required for that case.",
      },
      {
        question: "What does a warehouse or facility audit normally review?",
        answer: "The scope can include stock identity, quantity, storage conditions, material traceability, housekeeping, process controls, safety practices, records, staff responsibilities and the corrective actions needed to close gaps.",
      },
      {
        question: "What does an inspection or certification-readiness dossier contain?",
        answer: "Depending on the assignment, it can include the agreed checklist, photographs, certificates, inspection records, audit findings, corrective-action evidence, test results, waivers and final release or assessment documents.",
      },
    ],
    imageIdeas: [
      {
        subject: "Independent inspection at an industrial workshop",
        description: "An inspector checking a fabricated component against a drawing with a calibrated measuring tool, visible PPE and traceable tags without readable private documents.",
        keywords: "third party inspection industrial workshop engineer measuring PPE India",
      },
      {
        subject: "Audit evidence and corrective action review",
        description: "A quality lead reviewing an audit checklist, photographs and a corrective-action register at a warehouse or production facility; keep all client information fictional or unreadable.",
        keywords: "quality audit corrective action warehouse certification readiness India",
      },
    ],
    updatedAt: "2026-10-22",
  },
  {
    slug: "surveying-geospatial",
    guide: {
      href: "/docs/service-guides/surveying-geospatial.docx",
      fileName: "surveying-geospatial.docx",
    },
    number: "03",
    name: "Surveying & Geospatial",
    short: "Ground control, land mapping, corridor surveys and drone-enabled spatial data for design, quantities and construction decisions.",
    summary:
      "Total station, GNSS, land mapping and UAV photogrammetry for highways, irrigation, industrial plots and urban works, with checked CAD, GIS and terrain outputs that designers can use.",
    body: "A reliable survey is more than a set of points. It is a controlled reference system that lets designers, contractors and owners use the same ground truth. Volmaken Engineering field crews establish control, capture terrain and built features, then package checked spatial data for planning, DPRs, construction, billing and handover. Drone mapping is used where it improves coverage without replacing the control that makes the result dependable.",
    scope:
      "Before fieldwork, the team confirms the boundary, coordinate system, datum, accuracy, feature list, access conditions, flight constraints and deliverable formats. It then establishes benchmarks or GNSS/traverse control, captures levels and detail with total station, GNSS or digital levelling equipment, surveys corridors and plots, and processes UAV imagery where permissions and ground-control requirements are satisfied. Outputs are checked against control and independent points before CAD, GIS, DTM, orthomosaic, profile, quantity or as-built files are issued.",
    image: "/images/survey-land.jpeg",
    gallery: [
      {
        src: "/images/survey-total-station.jpeg",
        alt: "Total station set up for a site survey",
        caption: "Total-station capture for controlled site, level and construction survey work.",
      },
      {
        src: "/images/survey-drone.jpg",
        alt: "Survey professional preparing a drone for aerial mapping",
        caption: "UAV mapping can extend coverage for corridors, terrain and stockpile work when flight and control requirements are satisfied.",
      },
    ],
    partner: "Volmaken Engineering Pvt. Ltd.",
    offerings: [
      "Reconnaissance, benchmarks, DGPS/GNSS control networks and traverse checks",
      "Total-station, GNSS and levelling surveys for topography, contours and site development",
      "Land, plot, layout and cadastral-reference surveys where legally permitted",
      "Highway, railway, canal, pipeline and utility-corridor alignment surveys",
      "Longitudinal sections, cross-sections, profiles, chainage and feature inventories",
      "UAV photogrammetry, orthomosaics, point clouds, terrain models and stockpile volumes",
      "LiDAR, remote-sensing, 3D or visual documentation where the brief and equipment require it",
      "GIS databases, thematic maps, asset inventories and spatial data coordination",
      "Multispectral or condition mapping where a suitable platform and analysis brief are approved",
      "As-built verification, earthwork quantities and progress or deviation surveys",
      "Construction set-out plus CAD, GIS, DTM, surface, profile and coordinate-controlled drawing packages",
    ],
    outcomes: [
      "Designers working from one agreed ground file",
      "Quantities that survive joint measurement",
      "Faster corridor and site capture without sacrificing control",
      "An explicit accuracy and coordinate basis for design decisions",
      "Reusable survey outputs for DPR, construction, billing and handover",
      "Fewer alignment, boundary and level disputes between field teams",
    ],
    audience: ["Highway and infrastructure consultants", "Industrial and land developers", "Survey and design teams", "Urban, water and utility authorities"],
    industries: ["Highways and railways", "Canals and water resources", "Industrial plots", "Urban infrastructure", "Agriculture and land planning"],
    process: [
      "Confirm the site boundary, coordinate system, accuracy, features and final drawing requirements",
      "Establish benchmarks, GNSS or traverse control before detailed capture",
      "Collect field, level and UAV data, then process and quality-check the outputs",
      "Issue the checked CAD, GIS, terrain, quantity or as-built package in the agreed formats",
    ],
    deliverables: ["Topographic, land and alignment drawings", "DTM, contours, profiles and 3D surfaces", "Orthomosaics, point clouds and volumetric outputs", "GIS databases, CAD files and as-built packages"],
    standards: [
      "Client-specified coordinate reference, datum, benchmark, accuracy, ground-sample distance and check-point requirements",
      "Survey of India reference or control requirements where adopted by the authority or project brief",
      "Current MoRTH, NHAI, IRC and state PWD survey requirements for applicable road and corridor work",
      "DPR, design, land-record, utility and as-built specifications stated by the employer or authority",
      "Drone Rules 2021, DGCA/Digital Sky airspace and operating requirements, permissions and site restrictions for UAV work",
      "Documented ground control, independent check points, metadata and flight or access safety controls for every deliverable",
    ],
    serviceArea: "Indore, Madhya Pradesh and Central India",
    faqs: [
      {
        question: "Does a drone survey replace ground control?",
        answer: "No. Ground control, check points and an agreed coordinate system are what make UAV photogrammetry suitable for measured design and quantity work.",
      },
      {
        question: "What should a survey brief specify?",
        answer: "Specify the area or boundary, control system, accuracy, required features, coordinate reference, deliverable formats, survey date and any access, safety or flight restrictions.",
      },
      {
        question: "Can a technical survey replace legal boundary demarcation?",
        answer: "Not automatically. ACE can provide technical, layout and cadastral-reference survey support. Legal demarcation, mutation and record-of-rights decisions remain subject to the responsible revenue authority and the qualified professional required for the case.",
      },
      {
        question: "Can ACE fly a UAV anywhere a client requests?",
        answer: "No. UAV work is subject to the applicable Drone Rules, DGCA/Digital Sky permissions, airspace restrictions, site access, safety controls and the project's accuracy requirements. A ground survey remains the appropriate method where those conditions are not met.",
      },
    ],
    imageIdeas: [
      {
        subject: "Total-station survey on an active site",
        description: "A survey professional setting up a total station on a construction or infrastructure site, with realistic terrain and safe working controls.",
        keywords: "total station land survey construction site India surveying equipment",
      },
      {
        subject: "UAV mapping with ground control",
        description: "A field team preparing a compact survey drone and visible ground-control targets on an industrial, agricultural or highway site; avoid implying flight without permission.",
        keywords: "drone photogrammetry ground control India construction survey",
      },
    ],
    updatedAt: "2026-10-22",
  },
  {
    slug: "civil-material-testing",
    guide: {
      href: "/docs/service-guides/civil-material-testing-lab.docx",
      fileName: "civil-material-testing-lab.docx",
    },
    number: "04",
    name: "Civil Material Testing Lab",
    short: "Concrete, soil, steel, aggregates and bitumen tested to the codes that govern your works.",
    summary:
      "A production laboratory that turns samples into decisions — mix designs, compliance reports and field verification for highways, buildings and industrial works.",
    body: "From our central materials laboratory, ACE operates a civil testing bench built around the codes Indian infrastructure actually uses: IS, IRC, MoRTH and project-specific QA plans. We test what is placed in the works — not a brochure version of it — and we write reports that site engineers, consultants and authority laboratories can act on.",
    scope:
      "The laboratory scope begins with the sampling brief: material source, batch or lot identity, collection date, preservation, requested methods, acceptance criteria and report recipient. It can cover laboratory testing and field-verification support for soil, aggregates, cement, concrete, steel, bricks, blocks, pavers, bituminous materials and related construction products. Mix-design and trial-mix work connects test results to the materials actually proposed for the project. The exact method, sample quantity, equipment and reporting status are confirmed before the sample is accepted.",
    image: "/images/civil-material-testing.jpg",
    gallery: [
      {
        src: "/images/civil-material-site.jpg",
        alt: "Field team testing concrete and road materials at an active highway site",
        caption: "Field sampling and in-situ checks connect laboratory results to the material actually placed in the works.",
      },
      {
        src: "/images/civil-bitumen-testing.jpg",
        alt: "Technicians testing asphalt cores and bituminous road material",
        caption: "Bituminous-material checks support pavement quality, density and compliance decisions.",
      },
    ],
    partner: "Volmaken Engineering Pvt. Ltd.",
    offerings: [
      "Soil moisture, grain-size distribution, Atterberg limits, classification, Proctor compaction and CBR",
      "Field-density and compaction verification, with other geotechnical tests where included in the approved scope",
      "Aggregate gradation, flakiness and elongation, impact, crushing, abrasion, soundness, density and absorption",
      "Cement fineness, consistency, setting time, soundness and compressive-strength testing",
      "Concrete slump, cube or specimen strength, flexural strength, core testing and trial-mix or mix-design support",
      "Reinforcement and structural-steel dimensions, mass, tensile, bend and rebend tests where specified",
      "Bitumen and bituminous-mixture testing, including penetration, softening, ductility, viscosity or Marshall-related work where required",
      "Brick, block, paver and masonry-unit dimensions, absorption, compressive strength and related checks",
      "Rebound-hammer, ultrasonic or other in-situ screening coordinated with the project acceptance method",
      "Traceable sample identification, method selection and QA/QC reporting; accredited testing can be coordinated where a tender requires it",
    ],
    outcomes: [
      "Fewer disputes at billing and handover",
      "Traceable results for authority and lender review",
      "Mix designs that hold on real materials, not catalogue values",
      "Earlier rejection of non-conforming source materials or batches",
      "A clearer link between field samples, laboratory results and the project QAP",
      "Better evidence for supplier approval, NCR closure and technical due diligence",
    ],
    audience: ["Highway contractors", "Builders and developers", "Industrial QA/QC teams", "PMC and authority engineers"],
    industries: ["Roads and bridges", "Buildings", "Industrial civil works", "Water and urban infrastructure"],
    process: [
      "Review the test request, sample identity, method and reporting requirement",
      "Receive or collect samples with traceable identification and condition records",
      "Test, review and issue a report that matches the project QA plan",
    ],
    deliverables: ["Concrete and material test certificates", "Mix-design and trial-mix reports", "Soil and aggregate test reports", "Field verification and QA/QC records"],
    standards: [
      "IS 2720 series and IS 1498 for soil testing and classification",
      "IS 2386 series and IS 383 for aggregate testing and concrete aggregates",
      "IS 4031, IS 456, IS 516 series, IS 10262, IS 1199 series and IS 4926 for cement, concrete and mix-related work",
      "IS 1786, IS 2062 and IS 1608 for reinforcement and structural-steel requirements where applicable",
      "IS 1077, IS 3495 series, IS 2185 and IS 15658 for bricks, blocks and paving units",
      "IS 1201–1220 series, IS 73 and applicable bitumen or modified-bitumen standards",
      "IRC:37, IRC:58, IRC:SP:11, IRC:78 and IRC:112 where adopted by the road or bridge contract",
      "Current MoRTH Specifications for Road and Bridge Works, NHAI or state PWD QAP/ITP, and the exact client acceptance criteria",
      "ISO/IEC 17025 and the exact accredited scope only where the client or tender requires accredited results; ACE accreditation is not implied",
    ],
    serviceArea: "Indore, Madhya Pradesh and Central India",
    faqs: [
      {
        question: "What samples can the civil material testing lab handle?",
        answer: "The stated scope includes concrete, soil, steel, aggregates, bitumen, bricks, pavers and related construction materials. The exact test method and sample quantity should be confirmed before dispatch.",
      },
      {
        question: "What should a material testing request include?",
        answer: "Include the material or mix, sample identification, project and location, requested tests, applicable specification, sampling date and the report recipient or authority format.",
      },
      {
        question: "Are all listed tests performed in-house?",
        answer: "The listed items describe the service menu, not an unconditional accreditation or equipment claim. We confirm the exact method, facility, sample quantity and reporting pathway against the project brief before accepting the work.",
      },
    ],
    imageIdeas: [
      {
        subject: "Concrete cube compression testing",
        description: "A technician placing a concrete cube in a compression-testing machine in a clean Indian civil laboratory, with sample IDs visible but no private data.",
        keywords: "concrete cube compression testing laboratory India civil materials",
      },
      {
        subject: "Soil and aggregate testing",
        description: "Sieve-analysis trays, aggregate samples and a field-density kit arranged on a real project QA bench rather than a generic science lab.",
        keywords: "soil sieve analysis aggregate testing laboratory India road quality control",
      },
    ],
    updatedAt: "2026-10-22",
  },
  {
    slug: "chemical-product-testing",
    guide: {
      href: "/docs/service-guides/chemical-product-testing.docx",
      fileName: "chemical-product-testing.docx",
    },
    number: "05",
    name: "Chemical & Product Testing",
    short: "Laboratory testing for water, raw materials, fertilizers, process chemicals and manufactured products — results linked to the decision they need to support.",
    summary:
      "Biosyn brings chemical and product testing into the ACE network so water, raw-material and finished-product questions are answered with a clear sample trail, agreed method and specification-focused report.",
    body: "Good laboratory work does more than produce a number. It explains what was sampled, which batch or process it represents, which method was used and whether the result supports release, procurement, process control or a compliance decision. Biosyn’s testing capability sits beside ACE civil and environmental work, so water, soil or fertilizer samples, process chemicals and manufactured products can be reviewed as part of one technical file.",
    scope:
      "The work starts by translating the business question into a sample plan: what is being tested, how it will be collected and preserved, which batch or process step it represents, which method applies and what specification controls the decision. The service can support water and wastewater analysis, soil and fertilizer or soil-amendment testing, raw-material and chemical characterisation, construction chemicals, paints and coatings, fuels or process materials, packaging and manufactured-product testing, plus technical review of results. Regulatory, BIS or product-conformity submissions are routed through the responsible recognized laboratory, notified body or authority when the assignment requires one.",
    image: "/images/chemical-sample-analysis.webp",
    gallery: [
      {
        src: "/images/water-sample-testing.jpg",
        alt: "Technician collecting a water sample for chemical analysis",
        caption: "Field sampling is planned around sample identity, preservation, chain of custody and the decision the result must support.",
      },
      {
        src: "/images/product-quality-manufacturing.avif",
        alt: "Quality professional recording observations in a manufactured-product facility",
        caption: "Product testing becomes more useful when laboratory results are connected to the production batch, process controls and release criteria.",
      },
    ],
    partner: "Biosyn",
    offerings: [
      "Drinking, process and wastewater testing against the agreed parameter list",
      "Physical and chemical parameters such as pH, conductivity, turbidity, TDS, hardness, alkalinity, chloride, sulphate, nutrients, metals or organics where the method is confirmed",
      "Soil, fertilizer, compost and soil-amendment testing where the requested method and sample condition are suitable",
      "Industrial chemical, raw-material and formulation characterisation, including concentration, purity or physical-property checks where applicable",
      "Cement, admixture, waterproofing, paint, coating, adhesive, sealant, polymer, rubber and packaging test planning against the product specification",
      "Petroleum, lubricant and process-material testing where the applicable method and facility are available",
      "Manufactured-product and component testing for batch release, supplier qualification, complaint investigation or process improvement",
      "Sampling plans, chain of custody, batch or lot traceability and result review",
      "Method selection against applicable IS, ISO, client, FSSAI, CPCB or product protocols",
      "Technical certificate packs for procurement, customer review or statutory-consultant submission",
    ],
    outcomes: [
      "Specifications that purchasing and plant can share",
      "Fewer retests caused by incomplete sampling briefs",
      "A single technical counterpart for mixed lab work",
      "Earlier detection of contamination, formulation drift or raw-material variation",
      "More useful evidence for complaints, NCRs, supplier qualification and batch release",
      "A clearer connection between laboratory results, production controls and product-release decisions",
      "A clear escalation path when a notified, recognized or accredited laboratory is required",
    ],
    audience: ["Manufacturers and plant operators", "Procurement and quality teams", "Water and process engineers", "Agricultural-input and packaged-product suppliers"],
    industries: ["Manufacturing and process plants", "Chemicals and construction products", "Agricultural inputs and fertilizers", "Water and wastewater", "Consumer and industrial products"],
    process: [
      "Define the sample, method, specification and decision the result must support",
      "Coordinate sampling, preservation, chain of custody and laboratory testing",
      "Review results against the agreed specification, identify limitations and issue the report or certificate pack",
    ],
    deliverables: ["Water, soil and wastewater analysis reports", "Chemical, fertilizer and raw-material test reports", "Product test reports and release or certificate packs", "Sampling, traceability and result-review records", "Procurement and statutory filing packs"],
    standards: [
      "IS 3025 series for applicable water and wastewater parameters, and IS 10500 for drinking-water specifications",
      "IS 14543 and IS 13428 for packaged-water work where the applicable product and regulatory pathway is confirmed",
      "IS 101 series for paints and varnishes, IS 1448 series for petroleum products, and IS 228 or IS 1608 where relevant to metals",
      "IS 4031, IS 9103, IS 2645 and IS 9845 for applicable cement, admixture, waterproofing and food-contact material questions",
      "Current BIS product standards, Quality Control Orders, Schemes of Testing and Inspection, and BIS-recognized-laboratory requirements where applicable",
      "ISO/IEC 17025 and the exact accredited scope where an accredited result is specified; ACE accreditation is not implied",
      "FSSAI, Legal Metrology, CDSCO or product-specific requirements only when the product and intended use trigger them",
      "MSIHC Rules, Chemical Accidents Rules, CPCB standards, MPPCB conditions and applicable waste or EPR requirements for regulated chemical work",
    ],
    serviceArea: "Indore, Madhya Pradesh and project locations across Central India",
    faqs: [
      {
        question: "Can chemical testing be combined with civil or environmental work?",
        answer: "Yes. A combined brief can coordinate water, process, product, civil and environmental testing so that sampling, locations and reporting assumptions remain connected.",
      },
      {
        question: "Can you test soil, fertilizer or agricultural-input samples?",
        answer: "These samples can be scoped where the requested parameters, sample condition, method and reporting purpose are confirmed in advance. Share the product or soil description, source, batch, intended use and required specification before dispatch.",
      },
      {
        question: "How should a product testing request be prepared?",
        answer: "Share the product description, batch or lot identity, specification, intended use, required method, sample quantity and certificate format before the sample is dispatched.",
      },
      {
        question: "Does a test report provide BIS certification?",
        answer: "No. A test report documents the agreed results. BIS licensing, registration, notified-laboratory testing or other product-conformity steps remain separate requirements and are confirmed for the specific product and scheme.",
      },
    ],
    imageIdeas: [
      {
        subject: "Water, soil and fertilizer sample analysis",
        description: "A clean laboratory bench with labelled sample bottles, soil or fertilizer material, test tubes and a technician preparing samples; keep all results and client information fictional or unreadable.",
        keywords: "soil fertilizer water sample testing laboratory India chemical analysis",
      },
      {
        subject: "Manufactured-product quality review",
        description: "A quality professional recording observations in a production facility while batch identity, process controls and product-test evidence are reviewed together.",
        keywords: "manufacturing product quality testing laboratory process control India",
      },
    ],
    updatedAt: "2026-10-23",
  },
  {
    slug: "environmental-services",
    guide: {
      href: "/docs/service-guides/environmental-services.docx",
      fileName: "environmental-services.docx",
    },
    number: "06",
    name: "Environmental Services & MPCB Consent Support",
    short: "Consent to Establish, Consent to Operate, renewal and environmental compliance support for industries and infrastructure projects.",
    summary:
      "End-to-end support for MPCB Consent to Establish, Consent to Operate and renewal, backed by air, water, effluent, noise, waste and compliance records through Aadhar Enviro in the ACE network.",
    body: "Environmental consent is not a one-time formality. It connects the proposed site, process, investment, emissions, effluent, waste streams, pollution-control systems and operating conditions to the regulator's review. ACE coordinates the technical file: application inputs, document collation, monitoring, site-readiness checks, replies to queries and renewal evidence — while the project proponent and the competent authority retain their statutory responsibilities.",
    scope:
      "The assignment can begin with a new industrial proposal requiring Consent to Establish, a unit preparing for first Consent to Operate, an operating facility approaching renewal, or a project facing amendment, expansion, change in product, capacity or pollution-control configuration. The team maps the activity, site and land documents, capital investment, manufacturing process, raw materials, water balance, emissions, effluent, hazardous or other waste, biomedical waste where relevant, pollution-control systems and previous consent conditions. It then prepares the agreed technical package, coordinates field and laboratory evidence, supports online submission and tracks queries, inspections, compliance actions and renewal milestones. Environmental clearance, consent, authorization and statutory certification remain with the responsible proponent, competent authority and qualified or recognized signatory required for the case.",
    image: "/images/environmental-sampling.png",
    gallery: [
      {
        src: "/images/environmental-checklist.jpeg",
        alt: "Environmental compliance professional reviewing an industrial consent checklist",
        caption: "A structured compliance checklist helps connect consent conditions, monitoring records, waste controls and site evidence.",
      },
      {
        src: "/images/environmental-smoke.jpeg",
        alt: "Industrial stack releasing visible smoke for air-emission monitoring context",
        caption: "Emission and stack-control questions are assessed against the applicable process, standard, consent condition and monitoring method.",
      },
    ],
    partner: "Aadhar Enviro",
    offerings: [
      "Consent to Establish support before construction, installation or expansion of a potentially polluting unit",
      "Consent to Operate support before production, commercial operation or commissioning of the approved unit",
      "Renewal, amendment, expansion, product-change and consent-condition compliance support",
      "Application preparation, project-report drafting, document collation, online submission and query responses",
      "Site-readiness reviews covering process flow, raw materials, water balance, emissions, effluent, waste and pollution-control systems",
      "Pollution-potential and consent-route screening using the current MPCB/CPCB category, sector and activity requirements",
      "Ambient-air, stack, process-emission, workplace-air and environmental-noise monitoring where the method is confirmed",
      "Surface-water, groundwater, drinking-water, effluent, soil, hazardous-waste and other-waste sampling with laboratory coordination",
      "Biomedical-waste authorization and compliance inputs for eligible healthcare institutions where separately scoped",
      "Consent-condition registers, compliance calendars, monitoring plans, renewal evidence and corrective-action tracking",
      "Technical EIA/EMP, baseline, environmental due-diligence and lender or client reporting inputs",
    ],
    outcomes: [
      "A consent file that connects the proposed activity to its actual site and pollution-control plan",
      "Fewer avoidable gaps in process, water, emission, effluent and waste information",
      "Clearer readiness for MPCB scrutiny, site visits, queries and consent conditions",
      "Monitoring data and compliance records that EHS teams can explain and maintain",
      "Fewer missed renewal dates, incomplete submissions and preventable re-submissions",
      "A traceable bridge between field observations, laboratory results and regulatory commitments",
    ],
    audience: ["Industrial project owners and developers", "EHS, compliance and plant teams", "EPC, PMC and environmental consultants", "Healthcare, infrastructure and mining operators"],
    industries: ["Manufacturing and process plants", "Chemical, pharmaceutical and food units", "Mining, quarrying and construction materials", "Healthcare and biomedical-waste generators", "Energy, utilities and infrastructure projects"],
    process: [
      "Identify the jurisdiction, project stage and required route: Consent to Establish, Consent to Operate, renewal, amendment or authorization",
      "Review the activity, site, investment, process, raw materials, water balance, emissions, effluent, waste and existing approvals",
      "Prepare the application inputs, drawings, reports, declarations, pollution-control plan and evidence schedule",
      "Coordinate field visits, monitoring, sampling, laboratory records, site readiness and responses to authority queries",
      "Track the submitted case, consent conditions, inspection observations, corrective actions and decision records",
      "Maintain the compliance calendar and renewal dossier for the next reporting or consent cycle",
    ],
    deliverables: ["Consent to Establish application and technical submission pack", "Consent to Operate and renewal evidence pack", "Process, water-balance, emission, effluent and waste schedules", "Monitoring plans, sampling records and laboratory coordination files", "Consent-condition register, compliance calendar and corrective-action tracker", "EIA/EMP, baseline, due-diligence and authority-response inputs"],
    standards: [
      "Water (Prevention and Control of Pollution) Act, 1974 and Air (Prevention and Control of Pollution) Act, 1981, together with the applicable rules, notifications and consent conditions",
      "Environment (Protection) Act and Rules, EIA Notification, 2006 as amended, applicable Terms of Reference, EC conditions and PARIVESH requirements where triggered",
      "MPCB consent procedures, current application portal requirements, consent orders, category directions and sector-specific circulars for the Maharashtra site",
      "Current CPCB industry categorization, pollution-index methodology and any revised Red, Orange, Green, White, Blue or sector-specific directions applicable at the time of filing",
      "CPCB National Ambient Air Quality Standards, emission and effluent standards, monitoring guidance and industry-specific requirements",
      "IS 3025 series for water and wastewater, IS 5182 series for air-pollution measurement and authority-prescribed sampling and analysis methods",
      "Hazardous and Other Wastes, Solid Waste, Construction and Demolition Waste, Plastic Waste, E-Waste, Battery Waste and Biomedical Waste rules where triggered",
      "Exact accredited or recognized laboratory and qualified-consultant scope where a regulator, lender or tender requires it; ACE accreditation is not implied",
    ],
    serviceArea: "Maharashtra, Madhya Pradesh and Central India; MPCB consent support for Maharashtra sites",
    faqs: [
      {
        question: "When should Consent to Establish be started?",
        answer: "Start before construction, installation or expansion. The site, process, investment, raw materials, water balance, emissions, effluent, waste and pollution-control plan should be aligned before the application is filed and before works begin.",
      },
      {
        question: "What is needed for Consent to Operate or renewal?",
        answer: "Share the approved project and consent documents, production or operation details, actual pollution-control systems, monitoring and laboratory records, waste records, previous conditions, compliance status and any proposed change in activity or capacity.",
      },
      {
        question: "Which industries need MPCB consent?",
        answer: "The route depends on the activity and its potential to discharge sewage or trade effluent, emit air pollutants, generate or handle regulated waste, or otherwise fall within the Board’s consent or authorization framework. Category and documentation are confirmed against the current MPCB/CPCB directions for the site and sector.",
      },
      {
        question: "How long is an MPCB consent valid?",
        answer: "Validity is not a universal fixed number. It depends on the consent type, category, sector, project stage, consent order and current Board directions. The issued order is the controlling document, and renewal should be planned before its expiry.",
      },
      {
        question: "Can ACE issue the MPCB consent or environmental clearance?",
        answer: "No. ACE can prepare technical inputs, coordinate monitoring and laboratory evidence, support the application, answer queries and maintain compliance records. The competent authority issues the consent or approval, while the project proponent and appointed qualified or recognized consultant retain their statutory responsibilities.",
      },
    ],
    imageIdeas: [
      {
        subject: "Environmental compliance checklist before operation",
        description: "A compliance professional reviewing an industrial consent checklist with process, waste, pollution-control and monitoring evidence; keep all client data fictional or unreadable.",
        keywords: "MPCB consent compliance checklist industrial unit India",
      },
      {
        subject: "Water and effluent sampling",
        description: "A field sampler collecting a labelled surface-water or effluent sample with chain-of-custody materials and safe access controls visible.",
        keywords: "environmental water sampling India effluent monitoring field",
      },
      {
        subject: "Stack-emission monitoring and pollution control",
        description: "An industrial stack or emission-control system used as a visual cue for source monitoring, compliance review and pollution-control planning; do not imply that visible smoke alone proves a violation.",
        keywords: "industrial stack emission monitoring pollution control India",
      },
    ],
    updatedAt: "2026-10-22",
  },
  {
    slug: "residential-commercial-building-inspection",
    guide: {
      href: "/docs/service-guides/residential-commercial-building-inspection.docx",
      fileName: "residential-commercial-building-inspection.docx",
    },
    number: "07",
    name: "Residential & Commercial Building Inspection",
    short: "Room-by-room property inspection, defect diagnosis and practical care planning for homes, apartments, offices and commercial buildings.",
    summary:
      "End-to-end building inspections led by qualified engineers and supported by thermal, moisture, leak-tracing and non-destructive testing methods where the brief requires them.",
    body: "A building inspection should do more than list visible defects. It should connect symptoms to likely causes, show the evidence, explain the risk and give the owner a sensible next step. ACE combines a structured property checklist with instrument-assisted checks for dampness, seepage, concealed leakage, concrete condition, electrical safety, plumbing and water-quality screening so buyers, owners, developers and facility teams can make better maintenance and handover decisions.",
    scope:
      "The scope is set around the property type, age, occupancy, complaint history and decision to be made: pre-purchase, handover, defect-liability review, maintenance planning, renovation or commercial condition assessment. The team carries out a visual room-by-room review and uses thermal imaging, moisture measurement, acoustic or ultrasonic leak tracing, concrete screening and system checks where suitable. Hidden conditions, destructive openings, laboratory tests and statutory approvals are separately identified rather than implied. Recommendations may include repair priorities, monitoring, specialist design, waterproofing treatment or follow-up testing.",
    image: "/images/home-inspection.webp",
    gallery: [
      {
        src: "/images/home-inspection-issues.png",
        alt: "Illustrated home inspection checklist showing cracks, dampness, electrical, flooring and plumbing issues",
        caption: "A room-by-room checklist helps organise findings across structure, finishes, services and safety.",
      },
      {
        src: "/images/project-building.jpg",
        alt: "Modern commercial building inspected for condition and maintenance planning",
        caption: "The same inspection logic can be scaled from a residence to offices, retail, institutions and commercial assets.",
      },
    ],
    partner: "ACE Building Inspection Desk",
    offerings: [
      "Pre-purchase, handover, defect-liability, renovation and periodic property-condition inspections",
      "Room-by-room checklist covering structure, cracks, dampness, finishes, woodwork, flooring, doors, windows and safety access",
      "Moisture, dampness and seepage assessment using thermal imaging and moisture-meter screening where suitable",
      "Concealed water-leak tracing using acoustic or ultrasonic methods, pressure checks and targeted follow-up where appropriate",
      "Concrete and construction-quality screening using rebound hammer, ultrasonic pulse velocity, half-cell potential and related NDT methods where specified",
      "Electrical visual and functional checks for panels, wiring, sockets, lamps, earthing indicators and protection devices by suitably qualified personnel",
      "Internal and external plumbing, drainage, water-supply and blockage-risk checks, including accessible pipework and fixtures",
      "pH and TDS screening with laboratory sampling recommended when potability or regulatory compliance must be demonstrated",
      "Waterproofing diagnosis, repair specifications and treatment options; warranty terms are stated by the approved applicator and system selected",
      "Expert guidance, issue prioritisation, future-care planning and re-inspection after corrective work",
    ],
    outcomes: [
      "A single, organised record of the property’s visible condition and priority defects",
      "Earlier identification of moisture, seepage, leakage, electrical, plumbing and safety risks",
      "Evidence to support purchase, handover, contractor rectification and maintenance decisions",
      "A clearer distinction between cosmetic defects, service failures and issues needing structural review",
      "Repair recommendations that address likely causes rather than only covering symptoms",
      "A practical care plan with suggested urgency, specialist input and follow-up checks",
    ],
    audience: ["Home buyers and homeowners", "Builders and developers", "Apartment and society managers", "Commercial property and facility teams"],
    industries: ["Residential homes and apartments", "Offices and retail", "Schools, hospitals and hotels", "Warehouses and commercial buildings"],
    process: [
      "Confirm the property type, inspection purpose, history of complaints, access and requested checklist",
      "Complete a visual room-by-room review and record photographs, locations, symptoms and accessible measurements",
      "Use thermal, moisture, acoustic, ultrasonic, electrical or NDT methods where the evidence and scope justify them",
      "Classify findings by urgency, likely cause, limitation and recommended next action",
      "Issue the inspection report, maintenance priorities, specialist referrals and follow-up plan",
    ],
    deliverables: [
      "Room-by-room home or commercial property inspection checklist",
      "Photographic defect register with location, severity and recommended action",
      "Moisture, thermal and leak-tracing observations where performed",
      "NDT and construction-quality screening records where included",
      "Electrical, plumbing, drainage and accessible service-condition observations",
      "pH/TDS screening record or laboratory-test recommendation where relevant",
      "Waterproofing, repair-priority and future-care action plan",
    ],
    standards: [
      "National Building Code of India and the approved project, developer, society or handover checklist where applicable",
      "IS 456 concrete requirements and the adopted structural drawings, specifications and quality records",
      "IS 13311 Part 1 and Part 2 principles for ultrasonic pulse velocity and rebound-hammer concrete screening where applicable",
      "IS 516 Part 5 provisions for non-destructive and semi-destructive concrete assessment methods where the selected test requires them",
      "IS 15988 or the structural-evaluation method adopted by the appointed structural engineer for existing buildings where applicable",
      "IS 732, CEA safety requirements and the responsible electrical professional’s checklist for electrical installations where applicable",
      "IS 10500 and the laboratory’s adopted method when water-quality screening progresses to potability or compliance testing",
      "Manufacturer instructions, approved waterproofing system specifications and the written warranty conditions of the responsible applicator",
    ],
    serviceArea: "Indore, Madhya Pradesh and Central India",
    faqs: [
      {
        question: "Is a home inspection the same as a structural safety certificate?",
        answer: "No. A property inspection records the agreed accessible observations and screening results. A structural safety certificate, design opinion or statutory approval requires the scope, calculations, openings, tests and qualified signatory required for that specific case.",
      },
      {
        question: "Can thermal imaging find every damp or hidden leak?",
        answer: "No. Thermal and moisture tools help locate patterns and guide follow-up, but temperature, access, finishes, water pressure and the leak path can limit certainty. Targeted opening, pressure testing or specialist investigation may still be needed.",
      },
      {
        question: "Is rebound hammer testing enough to approve a building?",
        answer: "No. Rebound hammer and other NDT methods are screening or assessment inputs. Interpretation should be linked to the concrete record, visual condition, other tests and the structural engineer’s method; a single reading is not a complete safety decision.",
      },
      {
        question: "Do you provide an 8–15 year waterproofing warranty?",
        answer: "Warranty-backed treatment options may be proposed for eligible systems, but the duration and exclusions depend on the substrate, preparation, product, access, workmanship and the written contract with the responsible applicator. The inspection report itself is not a warranty.",
      },
      {
        question: "What issues are normally recorded during an inspection?",
        answer: "The report can record electrical faults, cracks, safety concerns, dampness, woodwork and flooring defects, plumbing or drainage issues, water-quality observations, waterproofing concerns and other accessible building defects.",
      },
    ],
    imageIdeas: [
      {
        subject: "Home inspector checking concealed plumbing",
        description: "An inspector reviewing an accessible sink, pipe or service cabinet with a checklist and safe working posture; avoid showing private client documents.",
        keywords: "home inspection plumbing checklist property condition India",
      },
      {
        subject: "Thermal and moisture investigation",
        description: "A qualified inspector using a thermal camera or moisture meter near a damp wall, ceiling or service shaft with the defect location documented.",
        keywords: "thermal imaging moisture inspection damp wall building India",
      },
      {
        subject: "Commercial building condition survey",
        description: "A commercial building façade or interior services area being reviewed for maintenance, defects, safety and handover planning.",
        keywords: "commercial building condition assessment inspection India",
      },
    ],
    updatedAt: "2026-10-22",
  },
];

export type Partner = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  body: string;
  capabilities: string[];
  accent: string;
};

/* 
  Five practices ordered 2 - 5 - 3 - 4 - 1:
  1 (orig 2): Aadhar Enviro
  2 (orig 5): Archies Engineers
  3 (orig 3): Biosyn
  4 (orig 4): True Certificate
  5 (orig 1): Volmaken Engineering Pvt. Ltd. (renamed from ACE Core)
*/
export const partners: Partner[] = [
  {
    slug: "aadhar-enviro",
    name: "Aadhar Enviro",
    role: "Environment · Monitoring · Compliance",
    summary:
      "Environmental baseline, monitoring and statutory studies for industry and infrastructure.",
    body: "Aadhar Enviro extends ACE into the environmental sciences: ambient and source monitoring, EIA/EMP support, and the compliance calendar that plants and linear projects cannot afford to improvise.",
    capabilities: [
      "Air, water, noise and stack monitoring",
      "EIA / EMP and baseline studies",
      "Consent and compliance support",
      "Industrial and corridor assessments",
    ],
    accent: "Environment",
  },
  {
    slug: "archies-engineers",
    name: "Archies Engineers",
    role: "DPR · Design · Turnkey Consultancy",
    summary:
      "Engineering design and DPR leadership that consumes ACE data instead of reinventing it.",
    body: "Archies Engineers is the design and consultancy practice in the network. DPRs, structural and infrastructure design, quantities and PMC sit on the same survey and lab evidence the rest of ACE produces.",
    capabilities: [
      "DPR and bid engineering",
      "Civil and structural design",
      "Quantities, rates and construction support",
      "Turnkey owner’s engineer roles",
    ],
    accent: "Design",
  },
  {
    slug: "biosyn",
    name: "Biosyn",
    role: "Chemical · Water · Product Analytics",
    summary:
      "Chemical and product testing that turns samples into specification-ready certificates.",
    body: "Biosyn is the analytical laboratory in the network — water, chemicals and manufactured products — so civil, environmental and process questions can be answered without leaving the collaboration.",
    capabilities: [
      "Water and wastewater chemistry",
      "Industrial chemical characterisation",
      "Product quality testing",
      "Certificate packs for procurement",
    ],
    accent: "Analytics",
  },
  {
    slug: "true-certificate",
    name: "True Certificate",
    role: "Inspection · Audit · Certification",
    summary:
      "Independent inspection and certification so owners are not marking their own homework.",
    body: "True Certificate supplies the third-party layer: vendor inspection, stage-wise ITP work, and certification support that is written for auditors, lenders and commissioning teams.",
    capabilities: [
      "Third-party and vendor inspection",
      "Welding, coating and mechanical checks",
      "Process and system audits",
      "Certification dossiers",
    ],
    accent: "Assurance",
  },
  {
    slug: "volmaken-engineering",
    name: "Volmaken Engineering Pvt. Ltd.",
    role: "Testing · Surveying · Coordination",
    summary:
      "The coordinating heart of the network — civil material testing, surveying, and single-window client delivery.",
    body: "Volmaken Engineering Pvt. Ltd. leads civil material testing, surveying, and project coordination from our Indore headquarters. When a client calls ACE, this is the desk that answers — and the desk that assigns the right specialist partner without making the client run a mini-tender.",
    capabilities: [
      "Civil material testing laboratory",
      "Topographic, GNSS and drone survey",
      "Project coordination and single-window delivery",
      "QA documentation and client reporting",
    ],
    accent: "Laboratory & field",
  },
];

export const journey = [
  {
    year: "2024",
    place: "Indore",
    title: "Foundation & Operations",
    body: "Established in Indore at Bhawar Kuan Square, bringing specialized consulting, inspection, surveying and testing under one roof.",
  },
  {
    year: "2025",
    place: "Central India",
    title: "Five-Practice Technical Collaboration",
    body: "Integrating environmental, chemical, inspection and design engineering practices into a seamless single-window model.",
  },
  {
    year: "2026",
    place: "Scale",
    title: "Infrastructure Delivery",
    body: "Supporting major highways, urban works, and industrial clients with audit-ready engineering data and DPR advisory.",
  },
];

export const values = [
  {
    title: "Measured, not assumed",
    body: "We would rather delay a drawing than invent a number. Data precedes opinion.",
  },
  {
    title: "One file, many specialists",
    body: "Clients should not have to run a supply chain of laboratories and consultants. That is our job.",
  },
  {
    title: "Written for the next reader",
    body: "Reports are written for the engineer, the authority and the auditor who were not in the field with us.",
  },
  {
    title: "Close to the works",
    body: "Our Indore head office and regional field crews are where the teams actually start the day.",
  },
];

export const industries = [
  {
    name: "Highways & Transportation",
    body: "Alignments, pavement materials, QA and DPR support for NH, SH and MDR works.",
  },
  {
    name: "Buildings & Real Estate",
    body: "Geotech support, concrete and steel testing, and inspection for institutional and commercial buildings.",
  },
  {
    name: "Industrial & Manufacturing",
    body: "Plant civil works, vendor inspection, environmental monitoring and product testing.",
  },
  {
    name: "Water Resources",
    body: "Canal and dam-adjacent survey, materials, and DPR inputs for irrigation and urban water.",
  },
  {
    name: "Energy & Power",
    body: "Site survey, civil QA and environmental baselines for thermal, solar and T&D works.",
  },
  {
    name: "Urban Infrastructure",
    body: "Utilities, roads, public buildings and GIS-backed as-builts for urban local bodies.",
  },
];

export type Project = {
  slug: string;
  sector: string;
  name: string;
  location: string;
  summary: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "highway-packages",
    sector: "Highway",
    name: "National & State Highway Packages",
    location: "Madhya Pradesh",
    summary:
      "Material testing, alignment survey and QA documentation for highway packages under NHAI and MPPWD programmes.",
    image: "/images/project-highway.jpg",
  },
  {
    slug: "institutional-buildings",
    sector: "Buildings",
    name: "Institutional & Commercial Buildings",
    location: "Indore · Malwa Region",
    summary:
      "Concrete, steel and geotechnical support for campuses, public buildings and commercial developments.",
    image: "/images/project-building.jpg",
  },
  {
    slug: "industrial-plants",
    sector: "Industrial",
    name: "Industrial Civil & Vendor Works",
    location: "Malwa · Dewas belt",
    summary:
      "Plant civil testing, third-party inspection and environmental monitoring for manufacturing clients.",
    image: "/images/project-industrial.jpg",
  },
  {
    slug: "irrigation-water",
    sector: "Water Resources",
    name: "Irrigation & Urban Water Works",
    location: "Western Madhya Pradesh",
    summary:
      "Topographic survey, canal structures and materials testing for irrigation and urban water schemes.",
    image: "/images/project-water.jpg",
  },
  {
    slug: "geospatial-corridors",
    sector: "Surveying",
    name: "Corridor & Site Geospatial Programmes",
    location: "MP & adjoining states",
    summary:
      "GNSS control, drone photogrammetry and DTM delivery for linear and industrial sites.",
    image: "/images/project-survey.jpg",
  },
  {
    slug: "energy-civil",
    sector: "Energy",
    name: "Energy Civil & Site Development",
    location: "Central India",
    summary:
      "Site survey, civil QA and environmental baselines for generation and T&D-adjacent works.",
    image: "/images/project-energy.jpg",
  },
];

export const clients = [
  { id: "nhai", name: "NHAI" },
  { id: "mppwd", name: "MPPWD" },
  { id: "tata", name: "TATA" },
  { id: "ntpc", name: "NTPC" },
  { id: "jsw", name: "JSW" },
  { id: "adani", name: "Adani" },
  { id: "ultratech", name: "UltraTech" },
  { id: "state-ulbs", name: "State ULBs" },
];

export const clientNames = [
  "NHAI",
  "MPPWD",
  "TATA",
  "NTPC",
  "JSW",
  "Adani",
  "UltraTech",
  "State ULBs",
];

export const testimonials = [
  {
    quote:
      "They treat the laboratory as part of the site, not a vendor in another city. Mix designs and cube results arrived in a form our PMC could actually use.",
    name: "Project Manager",
    org: "National Highway package, Madhya Pradesh",
  },
  {
    quote:
      "Survey, testing and the DPR team spoke the same coordinate system. That sounds basic until you have paid for three firms that did not.",
    name: "Owner’s Engineer",
    org: "Industrial township, Dewas belt",
  },
  {
    quote:
      "Inspection reports were written for the next audit, not for a WhatsApp group. We released vendors on the strength of the dossier.",
    name: "Head of Projects",
    org: "Manufacturing client, Malwa",
  },
];

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
  body: string[];
  author: {
    name: string;
    role: string;
  };
  publishedAt?: string;
  updatedAt: string;
};

export const articles: Article[] = [
  {
    slug: "nabl-aligned-material-testing",
    category: "Standards",
    title: "What NABL-aligned material testing actually changes on a site",
    excerpt:
      "Accreditation language is easy to print on a letterhead. Traceability, method selection and report design are what change disputes at billing.",
    date: "March 2026",
    read: "6 min",
    author: { name: "ACE Technical Desk", role: "Technical editorial team" },
    publishedAt: "2026-03",
    updatedAt: "2026-10-17",
    body: [
      "Most contractors discover their laboratory at the first recovery statement. Cubes are missing IDs, the method on the certificate does not match the QA plan, and nobody can say which batch of cement the trial mix used. NABL alignment is not a logo. It is a habit of traceability.",
      "An ACE report is written so that a junior engineer at the authority laboratory can reconstruct the test without calling us. Sample identity, curing, method, equipment and uncertainty sit in the same place every time. That is what ‘NABL-aligned’ means in practice, whether or not a particular parameter is on a formal scope.",
      "If you are writing a QA plan, specify the methods and the identification scheme — not merely ‘reputed NABL lab’. The laboratory you appoint should be able to show you a sample report before the first cube is cast.",
    ],
  },
  {
    slug: "drone-survey-for-dprs",
    category: "Surveying",
    title: "When drone photogrammetry belongs in a highway DPR — and when it does not",
    excerpt:
      "UAV mapping is not a replacement for control. Used properly, it shortens corridor capture; used as a shortcut, it poisons quantities.",
    date: "January 2026",
    read: "7 min",
    author: { name: "ACE Technical Desk", role: "Surveying and geospatial team" },
    publishedAt: "2026-01",
    updatedAt: "2026-10-17",
    body: [
      "A drone does not know where it is until you tell it. Ground control, check points and a traverse that would satisfy a total-station survey are what make an orthomosaic a survey, not a film.",
      "For highway and irrigation corridors, photogrammetry earns its keep on terrain, stockpiles, borrow areas and as-built surfaces. It does not replace a prism on a boundary stone, a bridge soffit or a dense urban facade. ACE crews establish GNSS control first, fly second, and deliver a DTM in the coordinate system named in the DPR brief.",
      "If a consultant offers ‘drone survey’ as a line item with no control specification, treat it as photography. Ask for the control schematic, GSD, RMS on check points, and the CAD/GIS formats the designer will actually open.",
    ],
  },
  {
    slug: "environmental-clearance-industrial",
    category: "Environment",
    title: "Industrial clearances fail in the baseline, not in the public hearing",
    excerpt:
      "Most delayed EC files are not political. They are incomplete seasons of air and water data, or an EMP that describes a different plant.",
    date: "November 2025",
    read: "5 min",
    author: { name: "ACE Technical Desk", role: "Environmental services team" },
    publishedAt: "2025-11",
    updatedAt: "2026-10-17",
    body: [
      "A public hearing is theatre if the baseline is thin. Seasonality in Malwa is not a footnote: post-monsoon water, winter inversion and pre-monsoon dust are different files. Aadhar Enviro plans monitoring so that the EIA is arguing from a year, not a fortnight.",
      "The second failure mode is a plant that moved. Capacity, fuel, drainage and truck routes change between the application and commissioning. The EMP has to be a living document assigned to a person, not a PDF in a bid folder.",
      "Bring the environmental team in at siting, not at filing. The cost of an extra monitoring season is trivial next to a returned TOR or a consent that does not match operations.",
    ],
  },
  {
    slug: "third-party-inspection-capex",
    category: "Inspection",
    title: "Third-party inspection is cheaper than discovering the mill at commissioning",
    excerpt:
      "Independent inspection is not distrust. It is how owners keep vendor, fabricator and PMC from sharing the same blind spot.",
    date: "August 2025",
    read: "5 min",
    author: { name: "ACE Technical Desk", role: "Inspection and certification team" },
    publishedAt: "2025-08",
    updatedAt: "2026-10-17",
    body: [
      "A mill test certificate is a claim. Witnessing a heat, a weld procedure or a coating DFT is evidence. True Certificate writes inspection so that a lender’s engineer or a commissioning manager can see what was held, what was waived, and who signed.",
      "The inspection test plan should be agreed before the purchase order, not after the consignment leaves the shop. Stage-wise hold points — material, fabrication, coating, packing, erection — are cheaper than a blanket ‘inspect everything’ that nobody staffs.",
      "If your PMC is also your inspector, you have a conflict even if everyone is honest. ACE keeps inspection in a distinct partner for that reason.",
    ],
  },
];

export const resourceLinks = [
  {
    name: "Bureau of Indian Standards",
    href: "https://www.bis.gov.in/",
    note: "IS codes for civil, chemical and product testing",
  },
  {
    name: "NABL",
    href: "https://nabl-india.org/",
    note: "Laboratory accreditation framework",
  },
  {
    name: "MoEFCC",
    href: "https://moef.gov.in/",
    note: "Environmental clearances and notifications",
  },
  {
    name: "Indian Roads Congress",
    href: "https://www.irc.nic.in/",
    note: "Highway standards and publications",
  },
  {
    name: "NHAI",
    href: "https://nhai.gov.in/",
    note: "National highway programme and tenders",
  },
  {
    name: "MoRTH",
    href: "https://morth.nic.in/",
    note: "Specifications for road and bridge works",
  },
];

export const whyTrust = [
  {
    title: "Regional, not remote",
    body: "Work is run from our central headquarters in Indore — the same geography as our sites.",
  },
  {
    title: "Integrated on purpose",
    body: "Consultancy, inspection, survey, and testing share a drawing register and a single client lead.",
  },
  {
    title: "Written to be audited",
    body: "Certificates, ITPs and DPRs are prepared for the reader who was not there.",
  },
  {
    title: "Established 2024",
    body: "A dedicated engineering network built from the ground up for rigorous data, defensible reporting, and turnkey delivery.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}

export function getPartner(slug: string) {
  return partners.find((p) => p.slug === slug);
}

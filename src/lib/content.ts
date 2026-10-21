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
  pillarsLine: "Consultant | Inspection | Survey | Testing",
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
  Order of services: Consultant | Inspection | Survey | Testing
  01: Engineering, DPR & Turnkey Consultancy (Consultant)
  02: Inspection & Certification (Inspection)
  03: Surveying & Geospatial (Survey)
  04: Civil Material Testing Lab (Testing)
  05: Chemical & Product Testing (Testing)
  06: Environmental Services (Testing & Monitoring)
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
    image: "/images/consultancy.jpg",
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
        description: "Engineers reviewing a marked-up highway or public-works drawing beside a site plan, with an active Indian road project in the background.",
        keywords: "Indian highway DPR engineers design review site plan construction",
      },
      {
        subject: "DPR and BOQ coordination",
        description: "A realistic project desk with printed drawings, a quantity sheet, calculator and laptop; avoid staged generic corporate imagery.",
        keywords: "engineering DPR BOQ quantity surveyor India drawings desk",
      },
    ],
    updatedAt: "2026-10-17",
  },
  {
    slug: "inspection-certification",
    guide: {
      href: "/docs/service-guides/inspection-certification.docx",
      fileName: "inspection-certification.docx",
    },
    number: "02",
    name: "Inspection & Certification",
    short: "Third-party eyes on vendors, works and systems — inspection that stands up to audit.",
    summary:
      "True Certificate provides independent inspection, vendor assessment and certification support so owners and PMC teams are not marking their own homework.",
    body: "Capital projects fail quietly in the supply chain: a mill certificate that was never verified, a weld that was never witnessed, a vendor that was never walked. True Certificate gives ACE clients an independent inspection layer — staged, documented and written for the people who sign the next invoice.",
    scope:
      "Inspection starts with the purchase order, approved drawings, material specifications and inspection-and-test plan. The team maps hold points and witness points, checks document and material traceability, verifies dimensions and workmanship, witnesses tests where specified, records non-conformances and follows the package through packing, dispatch, erection and close-out. Any certification, non-destructive examination or statutory release is performed or signed by the appropriately qualified or recognized party required by the contract; ACE does not turn an inspection report into a licence or statutory approval.",
    image: "/images/inspection.jpg",
    partner: "True Certificate",
    offerings: [
      "Vendor, source and mill-capability assessment against the purchase specification",
      "Incoming material, heat-number, mill-certificate and document-traceability checks",
      "Dimensional, visual, fabrication and workmanship inspection at agreed stages",
      "Welding-document, welder-qualification and weld-visual checks where included in the ITP",
      "Coating preparation, application and dry-film-thickness checks where specified",
      "Witnessing or coordination of functional, pressure, performance or non-destructive tests where required",
      "Factory acceptance, packing, dispatch, erection and mechanical-completion checks",
      "NCR, punch-list, waiver, release-note and final dossier compilation",
      "Supplier process and management-system audits against the client's agreed criteria",
    ],
    outcomes: [
      "Defensible release of plant and materials",
      "Inspection records that match the ITP, not a site diary",
      "Reduced rework discovered at commissioning",
      "Earlier visibility of supplier, fabrication and documentation gaps",
      "A traceable basis for payment, dispatch and handover decisions",
      "Clear separation between independent inspection and the party executing the work",
    ],
    audience: ["Asset owners", "EPC and procurement teams", "PMC and lender engineers"],
    industries: ["Manufacturing", "Energy", "Infrastructure", "Industrial fabrication"],
    process: [
      "Review the purchase order, ITP, specifications and inspection hold points",
      "Witness or verify material, fabrication, coating and completion stages",
      "Issue traceable inspection records and close-out documentation",
    ],
    deliverables: ["Inspection and release notes", "Vendor and mill assessment reports", "Welding and coating inspection records", "Certification dossiers"],
    standards: [
      "Approved purchase order, drawings, ITP, QAP, method statements and client release criteria",
      "Applicable IS and ISO requirements for the material, fabrication or management system under review",
      "IS 2062, IS 800, IS 816, IS 9595 and related welding or structural-steel requirements where adopted",
      "IS 1786 and applicable reinforcement, concrete, coating or mechanical-equipment specifications",
      "ISO 3834, ISO 12944 or other international requirements only where the contract specifically adopts them",
      "Project, lender, authority and end-user documentation requirements, including approved concessions and waivers",
    ],
    serviceArea: "Indore, Madhya Pradesh and project locations across Central India",
    faqs: [
      {
        question: "When should third-party inspection be appointed?",
        answer: "Appoint the inspection team before the purchase order or fabrication schedule is fixed so that hold points, witness points, documents and release criteria are agreed before work starts.",
      },
      {
        question: "What does an inspection dossier normally contain?",
        answer: "Depending on the assignment, it can include approved drawings, certificates, inspection reports, photographs, non-conformance records, test results, waivers and final release documentation.",
      },
      {
        question: "Can an inspection report replace a statutory certificate?",
        answer: "No. The report records the agreed inspection evidence. Any statutory, product or conformity certificate must come from the authority, notified body, accredited laboratory or qualified signatory required for that product and project.",
      },
    ],
    imageIdeas: [
      {
        subject: "Fabrication inspection at an Indian workshop",
        description: "An inspector checking a fabricated steel component against a drawing with a calibrated measuring tool, with traceable tags visible but no readable private documents.",
        keywords: "third party inspection steel fabrication India engineer measuring",
      },
      {
        subject: "Weld and coating quality check",
        description: "Close-up of an inspector using a weld gauge or coating thickness meter on industrial fabrication; show PPE and a real workshop setting.",
        keywords: "weld inspection coating thickness gauge industrial quality control India",
      },
    ],
    updatedAt: "2026-10-17",
  },
  {
    slug: "surveying-geospatial",
    guide: {
      href: "/docs/service-guides/surveying-geospatial.docx",
      fileName: "surveying-geospatial.docx",
    },
    number: "03",
    name: "Surveying & Geospatial",
    short: "Control, topography, alignments and drone mapping — the geometry everything else is built on.",
    summary:
      "Total station, GNSS and UAV photogrammetry for highways, irrigation, industrial plots and urban works, with drawings and GIS that designers can actually use.",
    body: "Every DPR, every earthwork bill and every alignment argument starts with a survey. Volmaken Engineering field crews establish control, capture terrain and structures, and deliver drawings in the coordinate system the designer specified — not the one that was convenient on the day. Drone mapping is used where it earns its keep: corridors, stockpiles and sites that would take weeks on foot.",
    scope:
      "The survey brief fixes the coordinate reference, control method, accuracy, feature list, deliverable formats, access limits and safety requirements before fieldwork. The team can then establish GNSS or traverse control, capture levels and detail with total station or GNSS equipment, survey highway, rail, canal and utility corridors, and process UAV imagery when flight permissions and ground-control requirements are satisfied. Outputs are checked against control and independent check points before CAD, GIS, DTM, orthomosaic, profile, quantity or as-built files are issued.",
    image: "/images/surveying.jpg",
    partner: "Volmaken Engineering Pvt. Ltd.",
    offerings: [
      "Reconnaissance, benchmarks, DGPS/GNSS control networks and traverse checks",
      "Total-station, GNSS and levelling surveys for topography, contours and site development",
      "Highway, railway, canal, pipeline and utility-corridor alignment surveys",
      "Longitudinal sections, cross-sections, profiles, chainage and feature inventories",
      "UAV photogrammetry, orthomosaics, point clouds, terrain models and stockpile volumes",
      "Plot, layout, cadastral-reference and construction set-out surveys where legally permitted",
      "As-built verification, earthwork quantities and progress or deviation surveys",
      "CAD, GIS, DTM, surface, profile and coordinate-controlled drawing packages",
    ],
    outcomes: [
      "Designers working from one agreed ground file",
      "Quantities that survive joint measurement",
      "Faster corridor capture without sacrificing control",
      "An explicit accuracy and coordinate basis for design decisions",
      "Reusable survey outputs for DPR, construction, billing and handover",
      "Fewer alignment, boundary and level disputes between field teams",
    ],
    audience: ["Highway and infrastructure consultants", "Industrial developers", "Survey and design teams"],
    industries: ["Highways", "Railways and canals", "Industrial plots", "Urban infrastructure"],
    process: [
      "Confirm the coordinate system, accuracy, control and final drawing requirements",
      "Establish GNSS or survey control before detailed capture",
      "Collect field, UAV and level data, then process and quality-check the outputs",
    ],
    deliverables: ["Topographic and alignment drawings", "DTM, contours and profiles", "Orthomosaics and volumetric outputs", "GIS, CAD and as-built files"],
    standards: [
      "Client-specified coordinate reference, datum, benchmark, accuracy, ground-sample distance and check-point requirements",
      "Survey of India reference or control requirements where adopted by the authority or project brief",
      "Current MoRTH, NHAI, IRC and state PWD survey requirements for applicable road and corridor work",
      "DPR, design, land-record, utility and as-built specifications stated by the employer or authority",
      "Drone Rules 2021, DGCA/Digital Sky airspace and operating requirements, permissions and site restrictions for UAV work",
      "Documented ground control, independent check points and flight or access safety controls for every deliverable",
    ],
    serviceArea: "Indore, Madhya Pradesh and Central India",
    faqs: [
      {
        question: "Does a drone survey replace ground control?",
        answer: "No. Ground control, check points and an agreed coordinate system are what make UAV photogrammetry suitable for measured design and quantity work.",
      },
      {
        question: "What should a survey brief specify?",
        answer: "Specify the area, control system, accuracy, required features, coordinate reference, deliverable formats, survey date and any access, safety or flight restrictions.",
      },
      {
        question: "Can ACE fly a UAV anywhere a client requests?",
        answer: "No. UAV work is subject to the applicable Drone Rules, DGCA/Digital Sky permissions, airspace restrictions, site access, safety controls and the project's accuracy requirements. A ground survey remains the appropriate method where those conditions are not met.",
      },
    ],
    imageIdeas: [
      {
        subject: "GNSS survey on an Indian corridor",
        description: "Surveyors in PPE using a GNSS rover beside a highway or irrigation corridor, with realistic Indian terrain and traffic controls.",
        keywords: "GNSS RTK surveyor highway India topographic survey",
      },
      {
        subject: "UAV mapping with ground control",
        description: "A field team preparing a compact survey drone and visible ground-control targets on an industrial or highway site; avoid implying flight without permission.",
        keywords: "drone photogrammetry ground control India construction survey",
      },
    ],
    updatedAt: "2026-10-17",
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
    image: "/images/lab-civil.jpg",
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
    updatedAt: "2026-10-17",
  },
  {
    slug: "chemical-product-testing",
    guide: {
      href: "/docs/service-guides/chemical-product-testing.docx",
      fileName: "chemical-product-testing.docx",
    },
    number: "05",
    name: "Chemical & Product Testing",
    short: "Laboratory analytics for water, chemicals and manufactured products — numbers you can specify against.",
    summary:
      "Biosyn brings chemical and product testing into the ACE network so quality, safety and specification questions are answered in the same collaboration as civil and environmental work.",
    body: "Product and process decisions stall without a lab that understands both the method and the market. Biosyn’s chemical testing sits beside ACE civil and environmental work, so a water sample, a process chemical or a finished product is not an isolated certificate — it is part of the project file.",
    scope:
      "The work starts by translating the business question into a sample plan: what was sampled, which batch or process step it represents, which method applies, what specification controls the decision and whether an accredited or notified pathway is required. The service can support water and wastewater analysis, raw-material and chemical characterisation, construction-chemical checks, paints and coatings, fuels or process materials, packaging or manufactured-product testing, and technical review of results. Regulatory or product-certification submissions are routed through the responsible recognized laboratory, notified body or authority when the assignment requires one.",
    image: "/images/chemical.jpg",
    partner: "Biosyn",
    offerings: [
      "Drinking, process and wastewater testing against the agreed parameter list",
      "Physical and chemical parameters such as pH, conductivity, turbidity, TDS, hardness, alkalinity, chloride, sulphate, nutrients, metals or organics where the method is confirmed",
      "Industrial chemical, raw-material and formulation characterisation, including concentration, purity or physical-property checks where applicable",
      "Cement, admixture, waterproofing, paint, coating, adhesive, sealant, polymer, rubber and packaging test planning against the product specification",
      "Petroleum, lubricant and process-material testing where the applicable method and facility are available",
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
      "A clear escalation path when a notified, recognized or accredited laboratory is required",
    ],
    audience: ["Manufacturers and plant operators", "Procurement and quality teams", "Water and process engineers"],
    industries: ["Manufacturing", "Chemicals", "Water and wastewater", "Consumer and industrial products"],
    process: [
      "Define the sample, method, specification and decision the result must support",
      "Coordinate sampling, chain of custody and laboratory testing",
      "Review results against the agreed specification and issue the certificate pack",
    ],
    deliverables: ["Water and wastewater analysis reports", "Chemical and raw-material test reports", "Product quality certificates", "Procurement and statutory filing packs"],
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
        subject: "Analytical chemistry sample preparation",
        description: "A technician preparing labelled water or process samples at an analytical bench, with Indian laboratory context and no visible confidential results.",
        keywords: "analytical chemistry laboratory sample bottles India water testing",
      },
      {
        subject: "Industrial product quality check",
        description: "Paint, coating or construction-chemical samples being checked beside a calibrated instrument and batch labels in a practical QA setting.",
        keywords: "paint coating product testing laboratory quality control India",
      },
    ],
    updatedAt: "2026-10-17",
  },
  {
    slug: "environmental-services",
    guide: {
      href: "/docs/service-guides/environmental-services.docx",
      fileName: "environmental-services.docx",
    },
    number: "06",
    name: "Environmental Services",
    short: "Baseline studies, monitoring and compliance that keep projects legally and operationally sound.",
    summary:
      "Air, water, noise and stack monitoring plus EIA/EMP support for industry, mining and linear infrastructure — delivered through Aadhar Enviro in the ACE network.",
    body: "Environmental work only matters if it survives scrutiny. Through Aadhar Enviro we support ambient and source monitoring, baseline studies and EIA/EMP inputs, and help clients organize consent conditions through construction and operations. The laboratory and the field team work as one file, not two vendors.",
    scope:
      "The scope is set against the project stage and approval pathway: site selection, baseline study, construction monitoring, operational compliance, expansion, renewal or lender due diligence. It can include monitoring plans and field sampling for air, water, noise, soil, stack emissions and waste; laboratory coordination; baseline data review; EIA/EMP inputs; consent-condition registers; compliance calendars; and technical responses for the project team. Environmental clearances, consents, authorizations and statutory certifications remain the responsibility of the project proponent, competent authority or appropriately qualified/recognized consultant named for that submission.",
    image: "/images/environmental.jpg",
    partner: "Aadhar Enviro",
    offerings: [
      "Ambient-air monitoring, including PM10, PM2.5 and applicable gaseous parameters",
      "Stack, process-emission and workplace or source-monitoring coordination where the method is confirmed",
      "Surface-water, groundwater, drinking-water, effluent, soil and waste sampling with laboratory coordination",
      "Environmental-noise monitoring and construction or operational impact checks",
      "Baseline environmental studies and technical EIA/EMP inputs for industry, mining and infrastructure",
      "Consent-to-establish/operate support, condition registers, compliance calendars and renewal preparation",
      "Industrial, highway, rail, urban, mining and energy-corridor environmental assessments",
      "CPCB, MPPCB, lender or client reporting packs and follow-up action tracking",
    ],
    outcomes: [
      "Technical files that describe the project that is actually built",
      "Monitoring data your EHS team can defend",
      "One technical language from field to filing",
      "Earlier visibility of air, water, noise, waste and emissions risks",
      "Fewer missed monitoring periods, incomplete records and avoidable re-submissions",
      "A traceable bridge between field observations, laboratory results and consent conditions",
    ],
    audience: ["Industrial project owners", "EHS and compliance teams", "Infrastructure and mining consultants"],
    industries: ["Manufacturing", "Mining", "Highway corridors", "Energy and infrastructure"],
    process: [
      "Confirm the project stage, consent requirement, monitoring locations and parameters",
      "Plan field sampling and laboratory coordination around the required baseline or compliance period",
      "Review the data, prepare the report and identify follow-up actions for the project team",
    ],
    deliverables: ["Ambient and source monitoring reports", "Baseline studies and EIA/EMP inputs", "Consent and compliance support", "Environmental data packs for review"],
    standards: [
      "Environment (Protection) Act and Rules, Air Act, Water Act and applicable project notifications",
      "EIA Notification, 2006 as amended, applicable Terms of Reference, EC conditions and PARIVESH submission requirements",
      "CPCB National Ambient Air Quality Standards, air-monitoring guidance, water-quality criteria and industry-specific emission or effluent standards",
      "IS 3025 series for water and wastewater, IS 5182 series for air-pollution measurement and authority-prescribed methods",
      "Noise Pollution (Regulation and Control) Rules, 2000 and applicable construction or industrial limits",
      "Current Solid Waste, Construction and Demolition Waste, Hazardous and Other Wastes, Plastic, E-Waste and Battery Waste rules and EPR requirements where triggered",
      "MPPCB consent-to-establish/operate, waste authorization, monitoring and reporting conditions; SEIAA-MP/SEAC-MP requirements where applicable",
      "Exact accredited or recognized laboratory scope where a regulator, lender or tender requires it; ACE accreditation is not implied",
    ],
    serviceArea: "Indore, Madhya Pradesh and Central India",
    faqs: [
      {
        question: "When should environmental monitoring begin?",
        answer: "Bring the environmental team in during siting and planning so that monitoring periods, project assumptions and consent requirements are aligned before filing or construction.",
      },
      {
        question: "What information is needed for an environmental-services brief?",
        answer: "Share the project location, activity, capacity, fuel or process details, current approval stage, monitoring history and the authority or consultant format required.",
      },
      {
        question: "Can ACE issue an environmental clearance or consent?",
        answer: "No. ACE can support monitoring, baseline data, technical inputs, coordination and compliance records. The responsible project proponent, competent authority and appointed qualified or recognized consultant handle statutory applications, approvals and certifications.",
      },
    ],
    imageIdeas: [
      {
        subject: "Ambient-air monitoring in Madhya Pradesh",
        description: "An environmental technician in PPE operating a particulate sampler at an industrial or highway site, with realistic Indian surroundings and safe access controls.",
        keywords: "ambient air quality monitoring India PM2.5 field technician",
      },
      {
        subject: "Water and effluent sampling",
        description: "A field sampler collecting a labelled water sample from an industrial drain or surface-water location with chain-of-custody materials visible.",
        keywords: "environmental water sampling India effluent monitoring field",
      },
      {
        subject: "Environmental noise survey",
        description: "A technician using a sound-level meter near a construction or industrial boundary, with no staged unsafe access to machinery.",
        keywords: "environmental noise monitoring sound level meter India construction",
      },
    ],
    updatedAt: "2026-10-17",
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

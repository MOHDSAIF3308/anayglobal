export const site = {
  name: "Anay Global Services",
  shortName: "AGS",
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
  url: "https://anayglobalservices.com",
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
  number: string;
  name: string;
  short: string;
  summary: string;
  body: string;
  image: string;
  offerings: string[];
  outcomes: string[];
  partner: string;
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
    number: "01",
    name: "Engineering, DPR & Turnkey Consultancy",
    short: "From reconnaissance to DPR, design and PMC — engineering that can be built, billed and audited.",
    summary:
      "Archies Engineers leads design and DPR work inside the AGS network: highways, buildings, industrial plants and water resources, with the testing and survey data already in the room.",
    body: "Most consultancy is a document factory. Ours is a closed loop: survey and laboratory data feed the design; the design feeds the BOQ; inspection and testing follow the same assumptions. Archies Engineers prepares DPRs, structural and infrastructure designs, and turnkey advisory so clients are not translating between three firms that have never shared a drawing register.",
    image: "/images/consultancy.jpg",
    partner: "Archies Engineers",
    offerings: [
      "Detailed Project Reports for roads, buildings and water works",
      "Structural, civil and infrastructure design",
      "Quantity estimation, rate analysis and bid engineering",
      "PMC, peer review and construction-stage support",
      "Turnkey technical advisory for owners and developers",
    ],
    outcomes: [
      "DPRs that authority reviewers can navigate",
      "Designs grounded in measured, not assumed, data",
      "One accountable engineering conversation",
    ],
  },
  {
    slug: "inspection-certification",
    number: "02",
    name: "Inspection & Certification",
    short: "Third-party eyes on vendors, works and systems — inspection that stands up to audit.",
    summary:
      "True Certificate provides independent inspection, vendor assessment and certification support so owners and PMC teams are not marking their own homework.",
    body: "Capital projects fail quietly in the supply chain: a mill certificate that was never verified, a weld that was never witnessed, a vendor that was never walked. True Certificate gives AGS clients an independent inspection layer — staged, documented and written for the people who sign the next invoice.",
    image: "/images/inspection.jpg",
    partner: "True Certificate",
    offerings: [
      "Third-party inspection of materials, fabrication and erection",
      "Vendor and mill assessment; stage-wise inspection plans",
      "Welding, coating and mechanical completion checks",
      "Management-system and process audits",
      "Certification support and dossier compilation",
    ],
    outcomes: [
      "Defensible release of plant and materials",
      "Inspection records that match the ITP, not a site diary",
      "Reduced rework discovered at commissioning",
    ],
  },
  {
    slug: "surveying-geospatial",
    number: "03",
    name: "Surveying & Geospatial",
    short: "Control, topography, alignments and drone mapping — the geometry everything else is built on.",
    summary:
      "Total station, GNSS and UAV photogrammetry for highways, irrigation, industrial plots and urban works, with drawings and GIS that designers can actually use.",
    body: "Every DPR, every earthwork bill and every alignment argument starts with a survey. Volmaken Engineering field crews establish control, capture terrain and structures, and deliver drawings in the coordinate system the designer specified — not the one that was convenient on the day. Drone mapping is used where it earns its keep: corridors, stockpiles and sites that would take weeks on foot.",
    image: "/images/surveying.jpg",
    partner: "Volmaken Engineering Pvt. Ltd.",
    offerings: [
      "Topographic and contour surveys; digital terrain models",
      "DGPS / GNSS control networks and traverse",
      "Highway, railway and canal alignment surveys",
      "UAV photogrammetry, orthomosaics and volumetric analysis",
      "Cadastral, layout and as-built surveys; GIS layers",
    ],
    outcomes: [
      "Designers working from one agreed ground file",
      "Quantities that survive joint measurement",
      "Faster corridor capture without sacrificing control",
    ],
  },
  {
    slug: "civil-material-testing",
    number: "04",
    name: "Civil Material Testing Lab",
    short: "Concrete, soil, steel, aggregates and bitumen tested to the codes that govern your works.",
    summary:
      "A production laboratory that turns samples into decisions — mix designs, compliance reports and field verification for highways, buildings and industrial works.",
    body: "From our central materials laboratory, AGS operates a civil testing bench built around the codes Indian infrastructure actually uses: IS, IRC, MoRTH and project-specific QA plans. We test what is placed in the works — not a brochure version of it — and we write reports that site engineers, consultants and authority laboratories can act on.",
    image: "/images/lab-civil.jpg",
    partner: "Volmaken Engineering Pvt. Ltd.",
    offerings: [
      "Concrete cube, beam and core testing; mix design and trial mixes",
      "Soil investigation support: CBR, Proctor, Atterberg, grain size",
      "Steel, aggregates, bitumen, bricks, pavers and masonry units",
      "Field density, rebound hammer and in-situ verification",
      "QA/QC documentation aligned to NABL-style protocols",
    ],
    outcomes: [
      "Fewer disputes at billing and handover",
      "Traceable results for authority and lender review",
      "Mix designs that hold on real materials, not catalogue values",
    ],
  },
  {
    slug: "chemical-product-testing",
    number: "05",
    name: "Chemical & Product Testing",
    short: "Laboratory analytics for water, chemicals and manufactured products — numbers you can specify against.",
    summary:
      "Biosyn brings chemical and product testing into the AGS network so quality, safety and specification questions are answered in the same collaboration as civil and environmental work.",
    body: "Product and process decisions stall without a lab that understands both the method and the market. Biosyn’s chemical testing sits beside AGS civil and environmental work, so a water sample, a process chemical or a finished product is not an isolated certificate — it is part of the project file.",
    image: "/images/chemical.jpg",
    partner: "Biosyn",
    offerings: [
      "Drinking water, wastewater and process-water analysis",
      "Industrial chemicals and raw-material characterisation",
      "Product quality and specification testing",
      "Method selection against IS / ISO / client protocols",
      "Certificate packs for procurement and statutory filings",
    ],
    outcomes: [
      "Specifications that purchasing and plant can share",
      "Fewer retests caused by incomplete sampling briefs",
      "A single technical counterpart for mixed lab work",
    ],
  },
  {
    slug: "environmental-services",
    number: "06",
    name: "Environmental Services",
    short: "Baseline studies, monitoring and compliance that keep projects legally and operationally sound.",
    summary:
      "Air, water, noise and stack monitoring plus EIA/EMP support for industry, mining and linear infrastructure — delivered through Aadhar Enviro in the AGS network.",
    body: "Environmental work only matters if it survives scrutiny. Through Aadhar Enviro we run ambient and source monitoring, prepare the studies regulators expect, and help clients hold consents through construction and operations. The laboratory and the field team work as one file, not two vendors.",
    image: "/images/environmental.jpg",
    partner: "Aadhar Enviro",
    offerings: [
      "Ambient air, water, noise and soil monitoring",
      "Stack and process-emission measurements",
      "EIA, EMP and baseline environmental studies",
      "Consent-to-establish / operate support and compliance calendars",
      "Industrial and highway corridor assessments",
    ],
    outcomes: [
      "Clearances that match the project that is actually built",
      "Monitoring data your EHS team can defend",
      "One technical language from field to filing",
    ],
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
  5 (orig 1): Volmaken Engineering Pvt. Ltd. (renamed from AGS Core)
*/
export const partners: Partner[] = [
  {
    slug: "aadhar-enviro",
    name: "Aadhar Enviro",
    role: "Environment · Monitoring · Compliance",
    summary:
      "Environmental baseline, monitoring and statutory studies for industry and infrastructure.",
    body: "Aadhar Enviro extends AGS into the environmental sciences: ambient and source monitoring, EIA/EMP support, and the compliance calendar that plants and linear projects cannot afford to improvise.",
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
      "Engineering design and DPR leadership that consumes AGS data instead of reinventing it.",
    body: "Archies Engineers is the design and consultancy practice in the network. DPRs, structural and infrastructure design, quantities and PMC sit on the same survey and lab evidence the rest of AGS produces.",
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
    body: "Volmaken Engineering Pvt. Ltd. leads civil material testing, surveying, and project coordination from our Indore headquarters. When a client calls AGS, this is the desk that answers — and the desk that assigns the right specialist partner without making the client run a mini-tender.",
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
    body: [
      "Most contractors discover their laboratory at the first recovery statement. Cubes are missing IDs, the method on the certificate does not match the QA plan, and nobody can say which batch of cement the trial mix used. NABL alignment is not a logo. It is a habit of traceability.",
      "An AGS report is written so that a junior engineer at the authority laboratory can reconstruct the test without calling us. Sample identity, curing, method, equipment and uncertainty sit in the same place every time. That is what ‘NABL-aligned’ means in practice, whether or not a particular parameter is on a formal scope.",
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
    body: [
      "A drone does not know where it is until you tell it. Ground control, check points and a traverse that would satisfy a total-station survey are what make an orthomosaic a survey, not a film.",
      "For highway and irrigation corridors, photogrammetry earns its keep on terrain, stockpiles, borrow areas and as-built surfaces. It does not replace a prism on a boundary stone, a bridge soffit or a dense urban facade. AGS crews establish GNSS control first, fly second, and deliver a DTM in the coordinate system named in the DPR brief.",
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
    body: [
      "A mill test certificate is a claim. Witnessing a heat, a weld procedure or a coating DFT is evidence. True Certificate writes inspection so that a lender’s engineer or a commissioning manager can see what was held, what was waived, and who signed.",
      "The inspection test plan should be agreed before the purchase order, not after the consignment leaves the shop. Stage-wise hold points — material, fabrication, coating, packing, erection — are cheaper than a blanket ‘inspect everything’ that nobody staffs.",
      "If your PMC is also your inspector, you have a conflict even if everyone is honest. AGS keeps inspection in a distinct partner for that reason.",
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

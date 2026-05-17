// ─── OVERVIEW ────────────────────────────────────────────────────────────────
export const fullBudget = [
  { category: "Internet & Connectivity", amount: "96,000,000", percent: "48%", type: "OPEX" },
  { category: "Staff Salaries & Benefits", amount: "10,800,000", percent: "5%", type: "OPEX" },
  { category: "Cloud & Productivity Licenses", amount: "12,000,000", percent: "6%", type: "OPEX" },
  { category: "Security & Firewall Licensing", amount: "8,000,000", percent: "4%", type: "OPEX" },
  { category: "Infrastructure Maintenance & Support", amount: "12,000,000", percent: "6%", type: "OPEX" },
  { category: "Hardware Refresh & Procurement", amount: "18,000,000", percent: "9%", type: "CAPEX" },
  { category: "Access Control & CCTV Systems", amount: "6,000,000", percent: "3%", type: "CAPEX" },
  { category: "Backup, DR & Business Continuity", amount: "5,000,000", percent: "2.5%", type: "OPEX" },
  { category: "IT Projects & Transformation", amount: "15,000,000", percent: "7.5%", type: "CAPEX" },
  { category: "Training & Certifications", amount: "2,000,000", percent: "1%", type: "OPEX" },
  { category: "Vendor Support Contracts", amount: "5,000,000", percent: "2.5%", type: "OPEX" },
  { category: "Power, UPS & Generator Support", amount: "4,000,000", percent: "2%", type: "OPEX" },
  { category: "Monitoring & Management Tools", amount: "3,000,000", percent: "1.5%", type: "OPEX" },
  { category: "Contingency & Emergency Reserve", amount: "3,200,000", percent: "1.6%", type: "OPEX" },
  { category: "Miscellaneous Operational Costs", amount: "200,000", percent: "0.1%", type: "OPEX" },
];

export const opexBreakdown = [
  { category: "Internet & Connectivity", amount: "96,000,000" },
  { category: "Cloud & Productivity Licenses", amount: "12,600,000" },
  { category: "Security & Firewall Renewals", amount: "7,500,000" },
  { category: "Vendor Support Contracts", amount: "4,500,000" },
  { category: "Monitoring & Management Tools", amount: "2,400,000" },
  { category: "Backup & DR Services", amount: "3,000,000" },
  { category: "Power, UPS & Generator Maintenance", amount: "2,500,000" },
  { category: "Training & Certifications", amount: "1,500,000" },
  { category: "Misc Operational Costs", amount: "2,500,000" },
];

export const capexBreakdown = [
  { category: "End User Devices", amount: "18,000,000" },
  { category: "Network Infrastructure", amount: "15,000,000" },
  { category: "Security Infrastructure", amount: "10,000,000" },
  { category: "Access Control & CCTV Expansion", amount: "7,000,000" },
  { category: "Server & Storage Infrastructure", amount: "8,000,000" },
  { category: "Data Center/Server Room Improvements", amount: "3,000,000" },
  { category: "IT Projects & Digital Transformation", amount: "5,000,000" },
  { category: "Contingency Reserve", amount: "2,000,000" },
];

// ─── CONNECTIVITY ─────────────────────────────────────────────────────────────
export const mainCentres = [
  { site: "Main Centre 1 (HQ)", main: "500Mbps – Safaricom", backup: "500Mbps – Liquid", third: "100Mbps – DDA", monthly: "850,000" },
  { site: "Main Centre 2", main: "500Mbps – Liquid", backup: "500Mbps – Safaricom", third: "100Mbps – DDA", monthly: "850,000" },
  { site: "Main Centre 3", main: "300Mbps – Safaricom", backup: "300Mbps – Liquid", third: "100Mbps – DDA", monthly: "620,000" },
  { site: "Main Centre 4", main: "300Mbps – Liquid", backup: "300Mbps – Safaricom", third: "100Mbps – DDA", monthly: "620,000" },
];

export const enterpriseClients = [
  { client: "Amazon (Main)", link: "500Mbps DIA – Safaricom", monthly: "450,000" },
  { client: "Amazon (Backup)", link: "500Mbps DIA – Liquid", monthly: "450,000" },
  { client: "Amazon (3rd ISP)", link: "100Mbps – DDA", monthly: "120,000" },
  { client: "Gates Foundation (Main)", link: "300Mbps DIA – Safaricom", monthly: "320,000" },
  { client: "Gates Foundation (Backup)", link: "300Mbps DIA – Liquid", monthly: "320,000" },
  { client: "Gates Foundation (3rd ISP)", link: "100Mbps – DDA", monthly: "100,000" },
  { client: "GIZ", link: "200Mbps – Safaricom", monthly: "250,000" },
  { client: "Blue Orchard", link: "100Mbps – Liquid", monthly: "180,000" },
  { client: "Village Reach", link: "100Mbps – Safaricom", monthly: "180,000" },
  { client: "Meliore Foundation", link: "100Mbps – DDA", monthly: "150,000" },
  { client: "Oxford Initiatives", link: "150Mbps – Liquid", monthly: "220,000" },
  { client: "Athena", link: "100Mbps – Safaricom", monthly: "120,000" },
  { client: "KFW", link: "100Mbps – Liquid", monthly: "180,000" },
  { client: "Shared SME Clients (7 links)", link: "50Mbps per site", monthly: "600,000" },
];

export const operationalConnectivity = [
  { service: "LTE Failover Links (8 sites)", monthly: "500,000" },
  { service: "Public IP / BGP / Routing", monthly: "200,000" },
  { service: "SD-WAN / MPLS / VPN", monthly: "435,000" },
  { service: "Temporary / Event Links", monthly: "150,000" },
  { service: "Branch Expansion Reserve", monthly: "135,000" },
];

// ─── ACCESS CONTROL & CCTV ────────────────────────────────────────────────────
export const accessControlCosts = [
  { item: "Access Cards & Smart Tags (annual replenishment)", annual: "350,000" },
  { item: "Card Printer Machine Maintenance", annual: "120,000" },
  { item: "Card Printer Toners & Ribbons", annual: "180,000" },
  { item: "Card Printer Consumables (overlays, cleaning kits)", annual: "70,000" },
  { item: "Access Control Software Licensing", annual: "300,000" },
  { item: "Database / Server Licensing", annual: "200,000" },
  { item: "Vendor Support Contracts (Impro/Suprema)", annual: "450,000" },
  { item: "Contractor Support & Installations", annual: "400,000" },
  { item: "Labour – Door Repair & Maintenance", annual: "500,000" },
  { item: "New Door Expansions (4 doors avg)", annual: "1,200,000" },
  { item: "Biometric Devices (fingerprint/face)", annual: "700,000" },
  { item: "Emergency Hardware Repairs", annual: "300,000" },
  { item: "Visitor Management System", annual: "180,000" },
];

export const cctvCosts = [
  { item: "CCTV NVR Storage Expansion (HDD/SSD)", annual: "800,000" },
  { item: "NVR Maintenance & Firmware Support", annual: "350,000" },
  { item: "Camera Replacement (damaged/failed units)", annual: "600,000" },
  { item: "New Camera Deployment (expansion)", annual: "1,200,000" },
  { item: "Structured Cabling & Conduit Installation", annual: "500,000" },
  { item: "Contractor Support & Commissioning", annual: "400,000" },
  { item: "Video Monitoring / VMS Software", annual: "300,000" },
  { item: "UPS Support for CCTV Infrastructure", annual: "250,000" },
  { item: "Emergency Camera Repairs", annual: "300,000" },
];

// ─── BACKUP & DR ──────────────────────────────────────────────────────────────
export const backupCosts = [
  { item: "Cloud Backup Licensing (Veeam/Acronis)", annual: "900,000" },
  { item: "Cloud Backup Storage (Azure/AWS)", annual: "700,000" },
  { item: "NAS/SAN Onsite Maintenance", annual: "500,000" },
  { item: "Backup Server Maintenance & Warranties", annual: "300,000" },
  { item: "Endpoint Backup Licensing (per device)", annual: "400,000" },
  { item: "Offsite Backup Replication Connectivity", annual: "500,000" },
  { item: "DR Site Internet Connectivity", annual: "300,000" },
  { item: "DR Testing & Simulation Exercises (quarterly)", annual: "200,000" },
  { item: "Backup Monitoring & Alerting Systems", annual: "150,000" },
  { item: "Emergency Recovery Support (retainer)", annual: "250,000" },
];

export const bcpCosts = [
  { item: "Failover Infrastructure (cold standby)", annual: "500,000" },
  { item: "Temporary Recovery Equipment Pool", annual: "300,000" },
  { item: "Emergency Operational Support Retainer", annual: "250,000" },
  { item: "Continuity Documentation & Audits", annual: "150,000" },
];

export const drPriorities = [
  { priority: "P1", system: "Internet / Core Infrastructure", rto: "< 15 min" },
  { priority: "P1", system: "Finance & ERP Systems", rto: "< 1 hour" },
  { priority: "P1", system: "Identity & Authentication (AD/SSO)", rto: "< 30 min" },
  { priority: "P1", system: "Access Control Systems", rto: "< 1 hour" },
  { priority: "P1", system: "Email & Communication", rto: "< 2 hours" },
  { priority: "P2", system: "File Servers & Collaboration", rto: "< 4 hours" },
  { priority: "P2", system: "Booking / Operations Systems", rto: "< 4 hours" },
  { priority: "P3", system: "Historical Archives & Reports", rto: "< 24 hours" },
];

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
export const projectAccessControl = [
  { item: "Door Controllers (IP-based, 4-door units)", qty: "15", unit: "80,000", total: "1,200,000" },
  { item: "Card Readers (Suprema / Impro)", qty: "40", unit: "25,000", total: "1,000,000" },
  { item: "Centralized Access Control Server", qty: "1", unit: "500,000", total: "500,000" },
  { item: "Software Licensing (Impro enterprise)", qty: "1", unit: "300,000", total: "300,000" },
  { item: "Structured Cabling & Conduits", qty: "—", unit: "—", total: "400,000" },
  { item: "Installation Labour", qty: "—", unit: "—", total: "700,000" },
  { item: "Testing, Commissioning & Training", qty: "—", unit: "—", total: "200,000" },
  { item: "Biometric Enrollment Terminals", qty: "8", unit: "50,000", total: "400,000" },
  { item: "Contingency (10%)", qty: "—", unit: "—", total: "470,000" },
];

export const projectNetwork = [
  { item: "Enterprise Core Switches (Cisco/Aruba)", qty: "4", unit: "900,000", total: "3,600,000" },
  { item: "Access Layer Switches (24-port PoE)", qty: "15", unit: "180,000", total: "2,700,000" },
  { item: "Enterprise WiFi Access Points", qty: "40", unit: "55,000", total: "2,200,000" },
  { item: "Firewall Expansion (Next-Gen)", qty: "2", unit: "1,000,000", total: "2,000,000" },
  { item: "Structured Cabling & Patch Panels", qty: "—", unit: "—", total: "1,500,000" },
  { item: "Rack & Power Distribution Units", qty: "—", unit: "—", total: "1,000,000" },
  { item: "Network Monitoring System (PRTG/Zabbix)", qty: "—", unit: "—", total: "700,000" },
  { item: "Installation, Configuration & Testing", qty: "—", unit: "—", total: "800,000" },
  { item: "Contingency (10%)", qty: "—", unit: "—", total: "1,200,000" },
];

export const projectERP = [
  { item: "ERP Platform Licensing (Odoo/SAP/NetSuite)", qty: "1", unit: "2,500,000", total: "2,500,000" },
  { item: "Implementation Partner (setup & config)", qty: "—", unit: "—", total: "1,800,000" },
  { item: "API Integration Services", qty: "—", unit: "—", total: "1,200,000" },
  { item: "Data Migration & Cleaning", qty: "—", unit: "—", total: "500,000" },
  { item: "Cloud Hosting (Azure/AWS – 2 year)", qty: "—", unit: "—", total: "700,000" },
  { item: "User Training (all departments)", qty: "—", unit: "—", total: "500,000" },
  { item: "Annual Support Contract", qty: "1yr", unit: "—", total: "600,000" },
  { item: "Contingency (10%)", qty: "—", unit: "—", total: "780,000" },
];

export const projectAI = [
  { item: "AI Platform Licensing (Azure AI / OpenAI API)", qty: "1yr", unit: "—", total: "1,500,000" },
  { item: "Data Integration & Pipeline Setup", qty: "—", unit: "—", total: "800,000" },
  { item: "BI Dashboard Development (Power BI)", qty: "—", unit: "—", total: "600,000" },
  { item: "Reporting & Process Automation", qty: "—", unit: "—", total: "500,000" },
  { item: "Pilot Environment & Testing", qty: "—", unit: "—", total: "400,000" },
  { item: "Staff Training & Change Management", qty: "—", unit: "—", total: "300,000" },
  { item: "Contingency (10%)", qty: "—", unit: "—", total: "410,000" },
];

export const projectSDWAN = [
  { item: "SD-WAN Platform Licensing (Fortinet/Meraki)", qty: "1yr", unit: "—", total: "1,200,000" },
  { item: "Edge Devices (SD-WAN appliances per site)", qty: "8", unit: "200,000", total: "1,600,000" },
  { item: "ISP Integration & Configuration", qty: "—", unit: "—", total: "600,000" },
  { item: "Implementation & Testing", qty: "—", unit: "—", total: "500,000" },
  { item: "Staff Training", qty: "—", unit: "—", total: "200,000" },
  { item: "Contingency (10%)", qty: "—", unit: "—", total: "410,000" },
];

// ─── SCENARIOS ────────────────────────────────────────────────────────────────
export const budgetScenarios = [
  {
    name: "Conservative",
    total: "KES 150M",
    description: "Operational continuity focus. Minimal transformation. Tight cost control.",
    color: "blue",
    opex: "120M",
    capex: "30M",
    focus: ["Internet & connectivity","Security renewals","Licenses","Staff salaries","Vendor support","Emergency reserve"],
    reduced: ["Hardware refresh (minimal)","No major projects","Limited training","No AI/innovation"],
    bestFor: "Economic pressure · Cost reduction mandate · Stability-first organizations",
  },
  {
    name: "Balanced Strategic",
    total: "KES 200M",
    description: "Recommended default. Operational stability + security maturity + controlled transformation.",
    color: "amber",
    opex: "132M",
    capex: "68M",
    focus: ["Full connectivity","Security & compliance","Cloud licensing","Hardware lifecycle","1–2 strategic projects","Training & development"],
    reduced: [],
    bestFor: "Growth-stage enterprises · Multi-site operations · Client-facing environments",
    recommended: true,
  },
  {
    name: "Aggressive Transformation",
    total: "KES 280M",
    description: "Rapid modernization, cloud-first, AI initiatives, large-scale refresh.",
    color: "emerald",
    opex: "150M",
    capex: "130M",
    focus: ["Full connectivity + redundancy","Advanced security (Zero Trust)","Cloud-first migration","Multiple parallel projects","AI & analytics initiatives","Full hardware refresh"],
    reduced: [],
    bestFor: "High-growth organizations · Board-mandated transformation · New leadership mandate",
  },
];

// ─── INTERVIEW Q&A ────────────────────────────────────────────────────────────
export const interviewQA = [
  {
    q: "How would you structure an ICT budget for a multi-site enterprise?",
    a: "I begin with a structured operational and infrastructure assessment — understanding the current technology landscape, lifecycle risks, vendor obligations, and organizational priorities. I then engage stakeholders across Finance, Operations, HR, and leadership to understand growth plans, recurring challenges, and transformation goals. The budget is structured into OPEX and CAPEX categories aligned with operational continuity, cybersecurity, scalability, and long-term strategy. I present the budget in executive language: not 'buying switches', but 'investment in operational resilience and scalability.'",
    tags: ["Budgeting","Multi-site","Strategy"],
  },
  {
    q: "How do you justify high ICT spending to executives and the board?",
    a: "I communicate ICT investment in business outcome language: operational resilience, risk reduction, business continuity, productivity enablement, and client experience. For example, rather than 'firewall renewal at KES 3.5M', I frame it as 'investment protecting the organization against ransomware risk, ensuring 99.95% uptime for client services, and maintaining compliance obligations.' I use KPI dashboards, SLA reporting, and risk heat maps to make the value visible at board level.",
    tags: ["Boardroom","Justification","ROI"],
  },
  {
    q: "How do you optimize ICT spending without reducing service quality?",
    a: "My approach focuses on optimization rather than reduction. I evaluate vendor consolidation, license utilization reviews, infrastructure standardization, cloud efficiency, automation, and lifecycle management. Real examples from my environment include migrating from Cisco telephony to 3CX — saving over KES 5M annually — and migrating from Salto to Impro for access control, saving approximately KES 4M annually. Optimization is always balanced against operational risk and service continuity.",
    tags: ["Cost Optimization","Vendor Consolidation","Efficiency"],
  },
  {
    q: "How do you handle unexpected budget cuts mid-year?",
    a: "I first protect business-critical areas: connectivity, cybersecurity, identity systems, backups, and operational continuity. Then I reassess lower-priority initiatives — delaying non-critical hardware refreshes, pausing innovation projects, renegotiating vendor contracts, and optimizing license utilization. I always maintain a contingency reserve specifically to absorb emergency cost pressures without impacting operations. I also communicate transparently with executive leadership, presenting the risk implications of any budget reduction clearly and professionally.",
    tags: ["Budget Cuts","Prioritization","Risk"],
  },
  {
    q: "How do you forecast future ICT costs?",
    a: "I forecast using a combination of asset lifecycle planning, vendor contract analysis, growth projections, cloud utilization trends, staffing requirements, and security maturity goals. I maintain a lifecycle register for all critical assets — so I know 18 months in advance when firewalls, switches, or servers will need refresh. I also review ISP contracts, license renewals, and cloud consumption trends quarterly to ensure forecasts remain accurate.",
    tags: ["Forecasting","Lifecycle","Planning"],
  },
  {
    q: "How do you separate internal ICT costs from client-recoverable costs?",
    a: "This is critical in managed services and co-location environments. Internal ICT costs — staff productivity tools, internal internet, HR systems, internal security — are operational expenses. Client-recoverable costs — dedicated internet circuits, client WiFi infrastructure, managed firewall services, dedicated access control, CCTV storage — should be tracked separately and ideally billed back. I implement a cost allocation model where shared infrastructure is apportioned, and dedicated client services are fully recoverable.",
    tags: ["Cost Allocation","Client Billing","Governance"],
  },
  {
    q: "How do you manage vendor performance and accountability?",
    a: "I govern vendor relationships through formal SLA agreements with measurable KPIs — uptime, response time, resolution time, and escalation paths. I conduct quarterly vendor performance reviews, maintain scorecards, and tie renewals to demonstrated performance. Where vendors consistently underperform, I initiate competitive procurement to maintain leverage and ensure value. I also ensure all contracts have clear exit clauses, data ownership terms, and transition support provisions.",
    tags: ["Vendor Management","SLA","Governance"],
  },
  {
    q: "Walk me through how you built a budget in your current or previous role.",
    a: "In my current environment managing a multi-site enterprise with 30+ internet links and enterprise clients including Amazon and Gates Foundation, I structure the annual ICT budget into OPEX and CAPEX. Starting with a full audit of existing assets, contracts, and lifecycle status, I engage operations, finance, and client-facing teams to understand requirements. Connectivity alone is KES 96M annually — covering main and backup ISP links per site, enterprise client dedicated circuits, LTE failover, and SD-WAN. I govern this through monthly ISP utilization reviews, SLA tracking, and annual renegotiation cycles. The overall framework covers 15 budget categories from staff salaries to transformation projects, with a contingency reserve built in for operational resilience.",
    tags: ["Personal Experience","Multi-site","Practical"],
  },
];

// ─── SECURITY BUDGET ──────────────────────────────────────────────────────────
export const securityBudget = [
  { item: "Fortinet/Sophos Firewall Renewals", annual: "3,500,000" },
  { item: "Endpoint Protection (Crowdstrike/Defender)", annual: "1,800,000" },
  { item: "VPN Licensing", annual: "500,000" },
  { item: "MFA/Identity Security (Azure AD/Okta)", annual: "700,000" },
  { item: "Vulnerability Scanning (Tenable/Qualys)", annual: "400,000" },
  { item: "Security Awareness Training", annual: "300,000" },
  { item: "SIEM/Log Monitoring (Splunk/ManageEngine)", annual: "300,000" },
];

// ─── HARDWARE ─────────────────────────────────────────────────────────────────
export const endUserDevices = [
  { item: "Standard Business Laptops", qty: "50", unit: "120,000", total: "6,000,000" },
  { item: "Executive Laptops", qty: "10", unit: "250,000", total: "2,500,000" },
  { item: "Monitors (24\")", qty: "60", unit: "28,000", total: "1,680,000" },
  { item: "Docking Stations", qty: "40", unit: "25,000", total: "1,000,000" },
  { item: "Printers (MFP)", qty: "10", unit: "70,000", total: "700,000" },
  { item: "Spare Devices Pool", qty: "Various", unit: "—", total: "1,500,000" },
];

// ─── GOVERNANCE ───────────────────────────────────────────────────────────────
export const kpiDashboard = [
  { kpi: "Internet Uptime", target: "99.95%", frequency: "Monthly" },
  { kpi: "Mean Time to Recovery (MTTR)", target: "< 2 hours", frequency: "Monthly" },
  { kpi: "SLA Compliance", target: "> 95%", frequency: "Monthly" },
  { kpi: "Backup Success Rate", target: "> 98%", frequency: "Weekly" },
  { kpi: "Security Patch Compliance", target: "> 95%", frequency: "Monthly" },
  { kpi: "Incident Reduction", target: "-20% YoY", frequency: "Quarterly" },
  { kpi: "License Utilization Efficiency", target: "> 90%", frequency: "Quarterly" },
  { kpi: "Vendor SLA Performance", target: "> 95%", frequency: "Quarterly" },
  { kpi: "CapEx Project On-Time Delivery", target: "> 85%", frequency: "Quarterly" },
  { kpi: "Budget Variance", target: "< 5%", frequency: "Monthly" },
];

export const varianceExamples = [
  { type: "Positive Variance", example: "ISP renegotiation saved KES 2M vs budget", action: "Reallocate to contingency or innovation" },
  { type: "Negative Variance", example: "Emergency firewall replacement KES 1.5M unplanned", action: "Draw from contingency reserve" },
  { type: "Operational Variance", example: "Cloud usage 30% higher than forecast", action: "Reforecast and optimize licenses" },
  { type: "Strategic Variance", example: "New branch expansion added 3 new ISP links", action: "Revise annual budget mid-cycle" },
];

export const renewalPriority = [
  { priority: "P1", area: "Internet & Security", reason: "Operational continuity" },
  { priority: "P1", area: "Firewall Licensing", reason: "Security exposure" },
  { priority: "P1", area: "Backups & DR", reason: "Ransomware/business continuity" },
  { priority: "P1", area: "Endpoint Protection", reason: "User/device security" },
  { priority: "P2", area: "Hardware Refresh", reason: "User productivity" },
  { priority: "P2", area: "Monitoring Systems", reason: "Operational visibility" },
  { priority: "P2", area: "Vendor Support", reason: "Faster recovery" },
  { priority: "P3", area: "Innovation Projects", reason: "Long-term optimization" },
  { priority: "P3", area: "Training & Certifications", reason: "Capability development" },
];

export const m365Licensing = [
  { type: "Microsoft 365 Business Premium", qty: "40", cost: "3,200/user/mo", annual: "1,536,000" },
  { type: "Microsoft 365 E3", qty: "20", cost: "5,500/user/mo", annual: "1,320,000" },
  { type: "Microsoft 365 Business Standard", qty: "50", cost: "1,800/user/mo", annual: "1,080,000" },
];
export const googleLicensing = [
  { type: "Google Workspace Business Standard", qty: "80", cost: "1,600/user/mo", annual: "1,536,000" },
  { type: "Google Workspace Business Plus", qty: "20", cost: "2,600/user/mo", annual: "624,000" },
];
export const saasLicensing = [
  { platform: "Zoho Suite", annual: "1,000,000" },
  { platform: "Zoom/Meet Licensing", annual: "600,000" },
  { platform: "MFA/SSO Platforms", annual: "900,000" },
  { platform: "Endpoint Management", annual: "1,500,000" },
  { platform: "Email Security", annual: "1,000,000" },
  { platform: "Misc SaaS", annual: "1,504,000" },
];
export const salaryStructure = [
  { role: "Head of IT", qty: "1", monthly: "350,000", annual: "4,200,000" },
  { role: "Infrastructure & Network Engineer", qty: "1", monthly: "180,000", annual: "2,160,000" },
  { role: "Systems Administrator", qty: "1", monthly: "150,000", annual: "1,800,000" },
  { role: "IT Support Engineer (L2)", qty: "1", monthly: "100,000", annual: "1,200,000" },
  { role: "IT Support Engineer (L1)", qty: "1", monthly: "80,000", annual: "960,000" },
  { role: "Access Control/CCTV Technician", qty: "1", monthly: "70,000", annual: "840,000" },
];

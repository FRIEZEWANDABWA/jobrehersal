// All structured data for the Enterprise ICT Budget page

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
  { service: "Branch Uptime Expansion Reserve", monthly: "135,000" },
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

// ─── INTERVIEW Q&A (THE PERFECT MARKING SCHEME - FULLY EXPANDED) ────────────────
export const interviewQA = [
  {
    q: "How do you come up with an ICT budget?",
    a: "My budgeting approach begins with a structured assessment and operational audit of the entire ICT environment. The first step is understanding exactly what exists within the environment—infrastructure, connectivity links, cloud services, licensing, security baselines, support contracts, and hardware lifecycles. I conduct a thorough review of recurring OPEX costs, license renewals, support retainers, and operational risks. I then engage multiple stakeholders across departments—Finance, Operations, HR, Facilities, and business units—to understand operational growth plans and core priorities. From there, I develop a zero-based budget aligned with business needs rather than simply rolling over historical spend. I structure this into CAPEX (investments/projects) and OPEX (fixed operations, connectivity, subscriptions, and vendor support), while maintaining structured contingency reserves.",
    tags: ["Core Strategy", "IT Leadership", "Methodology"]
  },
  {
    q: "Which budgeting models do you use?",
    a: "I adapt my budgeting model to the strategic goals and economic realities of the organization. I primarily deploy three models: (1) Zero-Based Budgeting (ZBB): Best for environments requiring thorough cost optimization or infrastructure overhaul, where every single license and circuit must be justified from a zero baseline to eliminate legacy overhead. (2) Incremental Budgeting: Suitable for highly mature, stable environments where baseline operational costs are predictable, and we adjust only for growth, inflation, or specific new project costs. (3) Risk-Based/Strategic Budgeting: Driven heavily by operational continuity, cybersecurity maturity, and compliance obligations. Here, critical assets like high-speed connectivity, active-active failovers, security licensing (NGFW), backups, and identity management are ring-fenced to safeguard the business against critical outages or ransomware risks.",
    tags: ["Budgeting Models", "TCO", "Strategy"]
  },
  {
    q: "How do you manage ICT budgets after approval?",
    a: "Budget management requires continuous financial governance and active oversight. I establish monthly operational reviews, quarterly governance audits, and annual strategic assessments, backed by continuous variance monitoring. I work hand-in-hand with the Finance department to map actual vs. budgeted spending across cloud consumption, vendor retainers, hardware procurement, and licenses. By reviewing monthly ISP bandwidth utilization, SaaS active seats, and cloud instance workloads, I ensure we proactively scale down unused resources. If variances arise, I immediately review the root cause and implement corrective measures like vendor renegotiation, license cleanup, or phased implementation schedules.",
    tags: ["Financial Governance", "Post-Approval", "Oversight"]
  },
  {
    q: "How do you deal with budget variances?",
    a: "I handle budget variances through a structured impact-assessment protocol. When a variance occurs—whether a positive variance (e.g., KES 2M saved on ISP renegotiations) or a negative variance (e.g., unplanned KES 1.5M core firewall replacement)—I first evaluate business impact, urgency, and operational risk. Negative variances are absorbed by first tapping into our structured Contingency Reserve (KES 3.2M). If that is insufficient, I defer lower-priority P3 innovation projects or optimize existing SaaS licenses to balance the books. Positive variances are either returned to the corporate bottom line or strategically reallocated to high-value infrastructure projects or security hardening after consulting the CFO.",
    tags: ["Variance Control", "Risk Management", "Finance Partnership"]
  },
  {
    q: "How do you prioritize ICT spending?",
    a: "I prioritize technology spend using a risk-based and business-continuity-driven model. High priority (P1) is strictly reserved for business-critical operations that must never fail: high-availability connectivity, core firewall security, endpoint security, daily offsite backups, Active Directory identity systems, and facilities access control. If these fail, the business stops. Medium priority (P2) covers operational efficiency, including regular device refresh cycles, PRTG monitoring, vendor support contracts, and smart AV setups. Low priority (P3) is strategic innovation, which covers automation pilots, advanced analytics, and strategic transformation initiatives. This ensures we never sacrifice business resilience for experimental technologies.",
    tags: ["Prioritization", "Business Impact", "Criticality"]
  },
  {
    q: "How do you justify ICT investments to executives and the board?",
    a: "I justify IT spend by translating technical details into direct business outcomes. Executives don't buy firewalls; they buy operational resilience. Instead of presenting 'firewall license renewal at KES 3.5M', I frame the request as 'protecting multi-site operations from ransomware disruption, ensuring 99.95% availability for client services, and meeting compliance obligations.' I present a clear Total Cost of Ownership (TCO) alongside measurable business improvements: reduced MTTR, operational savings from legacy migrations, and direct SLA compliance that protects client-recoverable revenues.",
    tags: ["Boardroom Presentation", "ROI Justification", "Communication"]
  },
  {
    q: "How do you optimize ICT costs?",
    a: "Cost optimization is about maximizing efficiency rather than blindly cutting costs. I focus on vendor consolidation, licensing cleanup, dynamic cloud auto-scaling, and infrastructure modernization. I have proven experience driving major cost optimization projects: migrating telephony from traditional Cisco architectures with expensive proprietary licensing to open-standard SIP-based 3CX platforms, which saved over KES 5M annually. Similarly, migrating multi-site access control from Salto cloud packages to Impro centralized local/hybrid infrastructure saved KES 4M annually by eliminating user-count license scaling fees.",
    tags: ["Cost Optimization", "Case Studies", "Vendor Management"]
  },
  {
    q: "How do you manage long-term ICT projects financially?",
    a: "Financially managing long-term ICT projects relies on phased scoping, rigorous stakeholder alignment, and detailed milestone reviews. Before initiating any build, I engage operations, finance, facilities, design teams, and system engineers to map workflows, inspect floor plans, and determine scalability requirements. I draft a detailed Bill of Quantities (BOQ) with a phased implementation schedule. Project funds are released in stages tied directly to vendor milestone delivery. We hold weekly and monthly cross-functional meetings with Finance, vendor PMs, and internal engineers to maintain absolute budget visibility, manage scope creep, and mitigate execution risks.",
    tags: ["Project Finance", "Milestone Delivery", "Scope Governance"]
  },
  {
    q: "How do you come up with a Bill of Quantities (BOQ)?",
    a: "I compile a professional BOQ by mapping high-fidelity engineering requirements directly to validated business needs. First, I detail the technical scope (e.g., a network refresh) by reviewing floor plans, user densities, and physical space layouts. I then identify every component—core switches, access switches, transceivers, structured cabling runs, patch cords, racks, UPS backup units, configuration labor, and warranty licensing. I engage multiple vetted suppliers to secure competitive quotations, evaluating them not just on up-front cost, but on SLA terms, support capability, and hardware lifecycles. The final BOQ contains itemized lists, unit pricing, total costs, supplier options, and a structured 10% contingency line.",
    tags: ["BOQ Design", "Procurement", "Engineering Specs"]
  },
  {
    q: "How do you ensure projects remain aligned with business needs?",
    a: "I prevent project drift by establishing clear operational KPIs and strict change control governance from day one. I conduct regular cross-departmental alignment syncs to ensure project delivery parameters match operational workflows and strategic business targets. By maintaining strict visibility over project milestones, budget consumption, and user-adoption metrics, I ensure that any technical adjustments remain fully aligned with organizational business requirements rather than technical complexity.",
    tags: ["Alignment", "Change Control", "Stakeholders"]
  },
  {
    q: "How do you handle emergency spending?",
    a: "Emergency spending is strictly governed through our P1 Incident response protocols and an pre-allocated Contingency and Emergency Reserve (KES 3.2M). When a major incident occurs—such as a critical hardware failure, fiber cut, or security breach—I execute a rapid impact assessment. Spending for core operations is authorized immediately through a fast-track approval workflow with the CFO. Once the service is restored, I conduct a formal post-incident audit to review root cause, track financial expenditure, and adapt our operational budget to prevent future occurrences.",
    tags: ["Emergency Reserve", "Crisis Control", "Incident Governance"]
  },
  {
    q: "How do you work with finance departments?",
    a: "I treat the Finance department as a primary strategic ally. Effective technology management requires absolute transparency. I run regular operational reviews with finance managers, presenting comprehensive visibility into upcoming license renewals, cloud consumption curves, CAPEX milestones, and contract review dates. By demonstrating that every ICT investment directly supports business growth, risk mitigation, or operational cost optimization, I establish strong trust, making budget approvals much faster.",
    tags: ["Finance Partnership", "Transparency", "Collaboration"]
  },
  {
    q: "How do you handle vendor negotiations?",
    a: "I approach vendor negotiations through a Total Cost of Ownership (TCO) lens rather than negotiating purely on the purchase price. I analyze hardware longevity, support SLAs, software upgrade licensing, and installation labor. I maintain vendor competition by inviting multiple reputable partners to pitch for major contracts, using clear vendor scorecards. I also ensure all contracts feature rigid SLAs, penalties for downtime, data export ownership rights, and clear exit clauses to protect the organization from vendor lock-in.",
    tags: ["Negotiation", "Vendor SLAs", "TCO Analysis"]
  },
  {
    q: "What financial KPIs do you monitor?",
    a: "I track a balanced scorecard of financial and operational tech metrics: (1) Budget Variance: keeping monthly spending within +/- 5% of forecast. (2) License Utilization: maintaining active subscription utilization above 90% to eliminate wasted SaaS seats. (3) Cloud Cost Efficiency: CPU/RAM allocation vs actual demand. (4) Vendor SLA Performance: verifying that support retainers meet MTTR contracts. (5) Technology Cost Per User: tracking annual support spend per staff member to measure long-term optimization success.",
    tags: ["KPIs", "Financial Health", "Performance Metrics"]
  },
  {
    q: "How do you ensure ICT spending delivers value?",
    a: "I apply a value-realization framework to every single technology investment. No spend is approved unless it directly maps to a strategic business objective or operational risk reduction: improving system uptime, reducing incident MTTR, lowering operational overhead via automation, or strengthening our overall security posture. By auditing tech adoption and compiling clear technology ROI reports, I demonstrate to the board that IT is a major business enablement engine.",
    tags: ["Value Realization", "Strategic Alignment", "ROI"]
  },
  {
    q: "How would you develop an ICT budget for a multi-site enterprise?",
    a: "I begin with a detailed operational and infrastructure assessment to understand the existing technology landscape, lifecycle risks, vendor support commitments, and multi-site connectivity requirements. From there, I engage branch managers, operations directors, and finance partners to align on branch-expansion roadmaps and client requirements. The budget is divided into OPEX and CAPEX, aligned with business continuity objectives and long-term scaling targets.",
    tags: ["Multi-site", "Enterprise Budgeting", "Planning"]
  },
  {
    q: "How do you optimize enterprise ICT budgets without reducing service quality?",
    a: "By focusing on strategic optimization. I review licensing consolidation (e.g., M365 vs Google Workspace allocation), vendor SLAs, infrastructure standardization, and dynamic cloud hosting limits. Standardizing on standard hardware builds and unified configurations allows us to lower spare-parts inventory, speed up support responses, and negotiate bulk enterprise pricing with core partners.",
    tags: ["Cost Optimization", "Consolidation", "Operational Quality"]
  },
  {
    q: "How do you handle mid-year budget cuts?",
    a: "If mandated to cut costs, I immediate group my budget into high, medium, and low business-impact lines. High-impact lines—security renewals, backups, Active Directory, primary ISP fiber circuits—are fully protected. I negotiate payment schedules with key vendors, scale down underutilized SaaS licenses, pause non-critical device refreshes, and delay P3 innovation projects. This allows me to absorb the cuts without exposing the enterprise to operational downtime or data loss.",
    tags: ["Budget Cuts", "Prioritization", "Risk Audits"]
  },
  {
    q: "How do you forecast future ICT costs?",
    a: "I forecast by maintaining a live enterprise Asset Lifecycle and Renewal Register. Every switch, laptop, firewall, server, and SaaS license has a designated replacement date. I combine this register with historical growth trends, cloud utilization metrics, headcount projections from HR, and planned business expansions. This gives the business a clear, predictable technology roadmap for the next 12 to 36 months.",
    tags: ["Forecasting", "Asset Lifecycle", "Predictive Planning"]
  }
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

export const laptopLifecycle = [
  { type: "Standard User Laptop", cycle: "4 years", cost: "120,000" },
  { type: "Executive Laptop", cycle: "3 years", cost: "250,000" },
  { type: "Engineering Workstation", cycle: "5 years", cost: "350,000" },
];

export const infraLifecycle = [
  { device: "Core Firewall", lifecycle: "5 years" },
  { device: "Core Switches", lifecycle: "5–7 years" },
  { device: "Access Switches", lifecycle: "5 years" },
  { device: "Access Points", lifecycle: "4–5 years" },
  { device: "UPS Systems", lifecycle: "3–5 years" },
  { device: "Servers", lifecycle: "5 years" },
  { device: "Storage Arrays", lifecycle: "5–7 years" },
];

export const cloudServers = [
  { system: "Website Hosting", type: "Cloud VPS", annual: "300,000" },
  { system: "Print Server", type: "Azure/AWS VM", annual: "250,000" },
  { system: "Finance Server", type: "Dedicated Cloud VM", annual: "1,200,000" },
  { system: "Access Control Server", type: "Hybrid Cloud", annual: "400,000" },
  { system: "Booking System", type: "SaaS/Cloud", annual: "600,000" },
  { system: "Zoho Services", type: "SaaS", annual: "1,000,000" },
  { system: "Office R&D Platform", type: "Cloud Platform", annual: "1,500,000" },
  { system: "Backup Storage", type: "Cloud Backup", annual: "700,000" },
  { system: "DR Replication", type: "Cloud DR", annual: "1,200,000" },
];

export const boqExample = [
  { item: "Fortigate Firewall", qty: "2", unit: "1,500,000", total: "3,000,000", vendor: "Copy Cat", priority: "P1" },
  { item: "Enterprise AP", qty: "20", unit: "55,000", total: "1,100,000", vendor: "Redington", priority: "P2" },
  { item: "Executive Laptop", qty: "5", unit: "250,000", total: "1,250,000", vendor: "HP", priority: "P2" },
];

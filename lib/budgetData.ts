// All structured data for the Enterprise ICT Budget page

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

export const fullBudget = [
  { category: "Internet & Connectivity", amount: "96,000,000", percent: "48%" },
  { category: "Staff Salaries & Benefits", amount: "10,800,000", percent: "5%" },
  { category: "Cloud & Productivity Licenses", amount: "12,000,000", percent: "6%" },
  { category: "Security & Firewall Licensing", amount: "8,000,000", percent: "4%" },
  { category: "Infrastructure Maintenance & Support", amount: "12,000,000", percent: "6%" },
  { category: "Hardware Refresh & Procurement", amount: "18,000,000", percent: "9%" },
  { category: "Access Control & CCTV Systems", amount: "6,000,000", percent: "3%" },
  { category: "Backup, DR & Business Continuity", amount: "5,000,000", percent: "2.5%" },
  { category: "IT Projects & Transformation", amount: "15,000,000", percent: "7.5%" },
  { category: "Training & Certifications", amount: "2,000,000", percent: "1%" },
  { category: "Vendor Support Contracts", amount: "5,000,000", percent: "2.5%" },
  { category: "Power, UPS & Generator Support", amount: "4,000,000", percent: "2%" },
  { category: "Monitoring & Management Tools", amount: "3,000,000", percent: "1.5%" },
  { category: "Contingency & Emergency Reserve", amount: "3,200,000", percent: "1.6%" },
  { category: "Miscellaneous Operational Costs", amount: "200,000", percent: "0.1%" },
];

export const connectivityLinks = [
  { type: "Main DIA Fiber 500Mbps", qty: "4", cost: "350,000", total: "1,400,000" },
  { type: "Enterprise Fiber 200Mbps", qty: "8", cost: "180,000", total: "1,440,000" },
  { type: "Enterprise Fiber 100Mbps", qty: "10", cost: "120,000", total: "1,200,000" },
  { type: "SME Fiber 50Mbps", qty: "5", cost: "65,000", total: "325,000" },
  { type: "Backup LTE/Fiber Links", qty: "20", cost: "25,000", total: "500,000" },
  { type: "Client Managed Connectivity", qty: "Various", cost: "—", total: "2,500,000" },
  { type: "Public IP/BGP/Routing", qty: "—", cost: "—", total: "200,000" },
  { type: "SD-WAN/MPLS/VPN", qty: "—", cost: "—", total: "435,000" },
];

export const salaryStructure = [
  { role: "Head of IT", qty: "1", monthly: "350,000", annual: "4,200,000" },
  { role: "Infrastructure & Network Engineer", qty: "1", monthly: "180,000", annual: "2,160,000" },
  { role: "Systems Administrator", qty: "1", monthly: "150,000", annual: "1,800,000" },
  { role: "IT Support Engineer (L2)", qty: "1", monthly: "100,000", annual: "1,200,000" },
  { role: "IT Support Engineer (L1)", qty: "1", monthly: "80,000", annual: "960,000" },
  { role: "Access Control/CCTV Technician", qty: "1", monthly: "70,000", annual: "840,000" },
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

export const securityBudget = [
  { item: "Fortinet/Sophos Firewall Renewals", annual: "3,500,000" },
  { item: "Endpoint Protection", annual: "1,800,000" },
  { item: "VPN Licensing", annual: "500,000" },
  { item: "MFA/Identity Security", annual: "700,000" },
  { item: "Vulnerability Scanning", annual: "400,000" },
  { item: "Security Awareness Training", annual: "300,000" },
  { item: "SIEM/Monitoring", annual: "300,000" },
];

export const endUserDevices = [
  { item: "Standard Business Laptops", qty: "50", unit: "120,000", total: "6,000,000" },
  { item: "Executive Laptops", qty: "10", unit: "250,000", total: "2,500,000" },
  { item: "Monitors", qty: "60", unit: "28,000", total: "1,680,000" },
  { item: "Docking Stations", qty: "40", unit: "25,000", total: "1,000,000" },
  { item: "Printers", qty: "10", unit: "70,000", total: "700,000" },
  { item: "Spare Devices", qty: "Various", unit: "—", total: "1,500,000" },
];

export const networkInfra = [
  { item: "Enterprise Core Switches", qty: "4", unit: "900,000", total: "3,600,000" },
  { item: "Access Switches", qty: "15", unit: "180,000", total: "2,700,000" },
  { item: "Enterprise Access Points", qty: "40", unit: "55,000", total: "2,200,000" },
  { item: "Structured Cabling", qty: "—", unit: "—", total: "1,500,000" },
  { item: "Rack Equipment", qty: "—", unit: "—", total: "1,000,000" },
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

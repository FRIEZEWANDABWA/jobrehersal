export interface SyllabusSection {
  id: string;
  title: string;
  definition: string;
  bullets: string[];
}

export interface SyllabusModule {
  id: string;
  title: string;
  sections: SyllabusSection[];
}

export interface CaseStudy {
  id: string;
  title: string;
  whatHappened: string;
  rootCause: string;
  governanceFailure: string;
  technicalFailure: string;
  regulatoryImpact: string;
  lessonsLearned: string;
  whatToDoDifferently: string;
}

export const gdprSyllabus: SyllabusModule[] = [
  {
    id: "gdpr-mod-1",
    title: "📖 MODULE 1 — GDPR FUNDAMENTALS",
    sections: [
      {
        id: "gdpr-sec-1-1",
        title: "Section 1.1 — What is GDPR?",
        definition: "The General Data Protection Regulation (GDPR) is a comprehensive data privacy law enacted by the EU in 2018, transforming global data governance standards.",
        bullets: [
          "Definition of GDPR: A legal framework that sets strict guidelines for the collection, processing, and storage of personal information of individuals within the European Union (EU) and European Economic Area (EEA).",
          "Why GDPR was created: Built to address the rapid rise of internet services, cloud technologies, big data monetization, and to replace the outdated 1995 EU Data Protection Directive.",
          "History of GDPR: Proposed in 2012, adopted in 2016, and became fully enforceable on May 25, 2018, triggering a monumental shift in international compliance frameworks.",
          "Key objectives of GDPR: To protect fundamental human rights to privacy, harmonize data protection laws across Europe, and empower individuals with absolute ownership over their digital footprints.",
          "Why GDPR changed global privacy governance: Introduced extraterritorial reach (Article 3), forcing any organization worldwide to comply if they target EU citizens, establishing massive fines (up to €20M or 4% of global turnover).",
          "Impact of GDPR on modern enterprises: Enforced 'Privacy by Design' as an industry standard, created new corporate roles (DPOs), and elevated data security from an IT checklist item to a critical C-suite boardroom accountability.",
          "Relationship between GDPR and cybersecurity: Bridges legal mandates with practical security controls; compliance requires robust technical safeguards such as encryption, MFA, RBAC, SIEM monitoring, and rapid breach responses."
        ]
      },
      {
        id: "gdpr-sec-1-2",
        title: "Section 1.2 — Territorial Scope of GDPR",
        definition: "The extraterritorial nature of GDPR means its compliance mandates extend far beyond European physical borders.",
        bullets: [
          "When GDPR applies outside Europe: Article 3(2) mandates compliance for non-EU entities if they offer goods/services to EU residents or monitor their behavior within the EU.",
          "GDPR applicability to Kenyan organizations: Directly impacts Kenyan firms supporting multinational clients, international tourism, financial institutions handling EU transactions, or global logistics hubs.",
          "International organizations and GDPR: Entities like the United Nations, global NGOs, and international charities must govern EU donor data under strict GDPR compliance principles.",
          "Cloud-hosted systems and GDPR: Housing data on cloud servers located in or servicing the EU automatically triggers territorial compliance and strict cross-border transfer protections.",
          "Cross-border data transfer governance: Mandates that personal data transfers outside the EEA must utilize Standard Contractual Clauses (SCCs), Binding Corporate Rules (BCRs), or adequacy decisions.",
          "Global SaaS platforms and compliance obligations: Outlines the strict legal requirement for SaaS platforms to execute Data Processing Agreements (DPAs) with every enterprise client.",
          "Real Enterprise Examples - Google Workspace: Managing corporate emails and documents under regional data location policies and secure tenant configurations.",
          "Real Enterprise Examples - Microsoft 365: Enforcing secure Azure AD boundaries, regional tenant residency, and advanced Purview information protection.",
          "Real Enterprise Examples - AWS/Azure: Utilizing AWS KMS or Azure Key Vault for localized key management, encrypted storage buckets, and regional network segmentation.",
          "Real Enterprise Examples - International NGOs: Protecting vulnerable donor registries and multi-site field records from unauthorized access.",
          "Real Enterprise Examples - Global Client Environments: Meeting stringent compliance SLAs for high-profile clients like the Gates Foundation or global enterprise partners."
        ]
      },
      {
        id: "gdpr-sec-1-3",
        title: "Section 1.3 — GDPR Roles & Responsibilities",
        definition: "GDPR clearly segregates operational roles to establish transparent governance boundaries and direct lines of accountability.",
        bullets: [
          "Data Subject (Definition): Any living, identified or identifiable natural person whose personal data is collected, processed, or stored.",
          "Data Subject (Rights): Granted absolute ownership rights including access, rectification, portability, objection, and the right to be forgotten (Articles 15-21).",
          "Data Subject (Organizational Obligations): Must provide clear, transparent privacy notices and respond to Data Subject Access Requests (DSARs) without undue delay (maximum 30 days).",
          "Data Controller (Responsibilities): The entity (e.g., KOFISI) that determines the purposes, scope, and means of processing personal data.",
          "Data Controller (Governance Obligations): Accountable for demonstrating absolute compliance with GDPR principles, executing DPIAs, and notifying regulators of breaches.",
          "Data Controller (Accountability Requirements): Must implement robust technical and organizational measures, maintain records of processing activities (ROPA), and select only compliant processors.",
          "Data Processor (Processing Obligations): The entity (e.g., a SaaS provider or outsourcing partner) that processes personal data strictly on behalf of and under the instructions of the Controller.",
          "Data Processor (Vendor Governance): Legally bound by strict DPAs, subject to direct regulatory liabilities, and must maintain internal logs of all processing activities.",
          "Data Processor (Operational Limitations): Forbidden from outsourcing processing to sub-processors without prior written authorization from the Controller.",
          "Data Protection Officer (DPO) (Responsibilities): Independent compliance champion monitoring internal compliance, advising on DPIAs, and acting as the primary liaison with supervisory authorities.",
          "Data Protection Officer (DPO) (Governance Role): Must report directly to the highest management tier, remain free from conflicts of interest, and be provided with adequate resources.",
          "Data Protection Officer (DPO) (Reporting Obligations): Directly monitors incident logs, signs off on compliance audits, and guides the executive board through strategic risk assessments."
        ]
      },
      {
        id: "gdpr-sec-1-4",
        title: "Section 1.4 — Types of Personal Data",
        definition: "GDPR classifies data into distinct tiers, mandating elevated technical protection for sensitive information categories.",
        bullets: [
          "Personal Data (Names): Direct identifier used across HR databases, client CRM portals, and ticketing systems.",
          "Personal Data (Emails): Critical identifier for user logins, communication routing, and guest onboarding systems.",
          "Personal Data (Phone numbers): Used in two-factor verification paths, client profiles, and automated visitor alerts.",
          "Personal Data (IP addresses): Logged dynamically by firewalls, routers, guest WiFi controllers, and web servers.",
          "Personal Data (Access logs): Records of physical door swipes (biometrics/cards) and software application login timestamps.",
          "Personal Data (Device IDs): MAC addresses recorded by guest WiFi portals and managed endpoint management systems.",
          "Sensitive Personal Data (Biometrics): High-risk fingerprint or facial recognition data used in door access control systems.",
          "Sensitive Personal Data (Health data): Employee sick leave certificates or occupational health records governed under strict access rules.",
          "Sensitive Personal Data (Financial records): Credit card details, billing logs, and payroll accounts in ERP/finance systems.",
          "Sensitive Personal Data (National IDs): Stored passport or national ID scans collected for visitor logs or HR onboarding.",
          "Sensitive Personal Data (CCTV footage): Recorded video surveillance capturing physical behavior, movement, and location.",
          "Sensitive Personal Data (Ethnicity/religion): Highly protected classes generally prohibited from processing unless explicit exceptions apply.",
          "Enterprise Environment Mapping (HR systems): Governing employee records, payroll profiles, and background check files.",
          "Enterprise Environment Mapping (Access control): Isolating biometric door log databases on secure, non-public subnets.",
          "Enterprise Environment Mapping (CCTV): Restricting NVR access and enforcing automatic 30-day retention pruning.",
          "Enterprise Environment Mapping (Visitor systems): Protecting guest logbooks and visitor badge details at front desks.",
          "Enterprise Environment Mapping (Finance systems): Securing ERP accounting applications with rigid access policies.",
          "Enterprise Environment Mapping (WiFi onboarding systems): Segmenting guest network portals from corporate system subnets."
        ]
      },
      {
        id: "gdpr-sec-1-5",
        title: "Section 1.5 — Lawful Basis for Processing",
        definition: "Processing personal data is strictly illegal under GDPR unless justified under one of the six lawful bases (Article 6).",
        bullets: [
          "Consent (Definition): Freely given, specific, informed, and unambiguous indication of the subject's agreement to data processing.",
          "Consent (Enterprise Example): Opt-in checkboxes on guest WiFi portals or marketing newsletters; must be as easy to withdraw as it is to give.",
          "Consent (Risks of Misuse): Relying on pre-ticked boxes or bundle consents, which are legally invalid and expose the firm to heavy fines.",
          "Consent (Governance Controls): Implement automated consent preference management databases and log withdrawal timestamps.",
          "Contract (Definition): Processing is necessary for the performance of a contract to which the data subject is party.",
          "Contract (Enterprise Example): Processing tenant billing details to execute lease agreements in a shared office workspace.",
          "Contract (Risks of Misuse): Collecting unrelated personal data under the guise of contract execution.",
          "Contract (Governance Controls): Align data fields collected strictly with core contractual delivery requirements.",
          "Legal Obligation (Definition): Processing is necessary for compliance with a mandatory legal requirement to which the controller is subject.",
          "Legal Obligation (Enterprise Example): Submitting tax records to the revenue authority or retaining employee payroll data for statutory audits.",
          "Legal Obligation (Risks of Misuse): Keeping non-mandatory employee records indefinitely under the excuse of legal obligations.",
          "Legal Obligation (Governance Controls): Create a strict statutory retention schedule mapped to specific national laws.",
          "Legitimate Interest (Definition): Processing is necessary for the legitimate interests of the organization or a third party, balanced against the subject's rights.",
          "Legitimate Interest (Enterprise Example): Running security CCTV cameras in common building areas to prevent crime and protect assets.",
          "Legitimate Interest (Risks of Misuse): Processing data for aggressive profiling or marketing without completing a balancing test.",
          "Legitimate Interest (Governance Controls): Document a formal Legitimate Interest Assessment (LIA) to prove the rights balance.",
          "Public Task (Definition): Processing is necessary for the performance of a task carried out in the public interest or official authority.",
          "Public Task (Enterprise Example): State-run universities managing student records or public health authorities tracking epidemics.",
          "Public Task (Risks of Misuse): Private corporations attempting to invoke public task status for commercial operations.",
          "Public Task (Governance Controls): Limit application strictly to authorized public bodies with clear legislative backing.",
          "Vital Interest (Definition): Processing is necessary to protect the life or physical safety of the data subject or another person.",
          "Vital Interest (Enterprise Example): Sharing an unconscious employee's medical details with emergency responders after a severe accident.",
          "Vital Interest (Risks of Misuse): Using this basis for routine health monitoring or non-emergency HR wellness initiatives.",
          "Vital Interest (Governance Controls): Establish emergency response protocols that document the extreme circumstances justifying data disclosure."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-2",
    title: "📖 MODULE 2 — GDPR PRINCIPLES",
    sections: [
      {
        id: "gdpr-sec-2-1",
        title: "Section 2.1 — Lawfulness, Fairness & Transparency",
        definition: "Data processing must be legally justified, socially fair, and completely transparent to the individual.",
        bullets: [
          "Privacy notices: Must be written in plain, clear language, easily accessible, and detail the exact processing activities.",
          "Transparency obligations: Informing data subjects about who is collecting the data, why, and how long it will be kept.",
          "Consent governance: Maintaining detailed audit records of how, when, and what consent was captured from users.",
          "User awareness requirements: Conducting regular training for team members to ensure data processing transparency.",
          "Audit requirements: Periodically reviewing public-facing forms to ensure no hidden data collection occurs.",
          "Enterprise Examples - Visitor management: Displaying clear digital notices on check-in tablets informing guests how their logs are secured.",
          "Enterprise Examples - WiFi registration: Providing direct links to the corporate privacy policy prior to guest internet onboarding.",
          "Enterprise Examples - HR onboarding: Informing new hires transparently about internal software monitoring and payroll data flows.",
          "Enterprise Examples - CCTV notices: Placing clear signage at building entry points warning visitors that active surveillance is running."
        ]
      },
      {
        id: "gdpr-sec-2-2",
        title: "Section 2.2 — Purpose Limitation",
        definition: "Organizations must only collect data for specified, explicit, and legitimate purposes, and never process it in a manner incompatible with those goals.",
        bullets: [
          "Purpose definition: Explicitly documenting the objective of every data processing stream in your ROPA.",
          "Operational scoping: Restricting IT system scopes so they only capture data relevant to their defined purposes.",
          "Excessive collection risks: Amassing massive databases of customer information that has no operational justification.",
          "Governance reviews: Conducting bi-annual reviews of active processing channels to prune legacy data flows.",
          "Enterprise Examples - Access control: Restricting access databases strictly to facility security, not tracking staff timesheets.",
          "Enterprise Examples - WiFi onboarding: Ensuring guest email addresses collected for internet access are not automatically signed up for marketing without separate consent.",
          "Enterprise Examples - HR systems: Utilizing employee emergency contact details strictly during crises, never for generic communications.",
          "Enterprise Examples - Finance approvals: Restricting accounting database access purely to billing personnel and certified auditors."
        ]
      },
      {
        id: "gdpr-sec-2-3",
        title: "Section 2.3 — Data Minimization",
        definition: "Personal data collected must be adequate, relevant, and strictly limited to what is necessary for the purposes for which it is processed.",
        bullets: [
          "Minimal collection principles: Actively designing input forms to request the bare minimum fields required for operations.",
          "Excessive collection risks: Storing unnecessary identifiers, increasing the blast radius and legal liability in a data breach.",
          "Operational efficiency: Streamlining databases to accelerate processing speeds and lower storage costs.",
          "Governance enforcement: Restricting database table designs to block fields like 'National ID' unless legally mandated.",
          "Real Examples - WiFi registration: Asking only for name and email, omitting physical address, age, or gender.",
          "Real Examples - Visitor onboarding: Recording name, company, and host, avoiding scanning physical driver's licenses.",
          "Real Examples - Tenant registration: Collecting essential corporate billing details and single contact emails for office allocations."
        ]
      },
      {
        id: "gdpr-sec-2-4",
        title: "Section 2.4 — Accuracy",
        definition: "Organizations must take every reasonable step to ensure that personal data is accurate, up-to-date, and erased or rectified without delay when incorrect.",
        bullets: [
          "Data correction workflows: Implementing simple self-service portals allowing clients to update their profiles.",
          "Synchronization governance: Establishing automated API processes to sync user details across multi-site CRM systems.",
          "Record verification: Enforcing email verification checks before activating tenant access profiles.",
          "User update procedures: Running annual database verification drives to prompt staff to review and update emergency contacts."
        ]
      },
      {
        id: "gdpr-sec-2-5",
        title: "Section 2.5 — Storage Limitation",
        definition: "Personal data must be kept in a form which permits identification of data subjects for no longer than is necessary for the processing purposes.",
        bullets: [
          "Retention policies: Establishing a formal, legally vetted corporate Data Retention Schedule.",
          "Deletion workflows: Configuring automated system scripts to permanently erase expired visitor records.",
          "Archival governance: Moving inactive tenant histories to cold, highly encrypted offline storage environments.",
          "Backup retention: Setting precise rotation limits on server backups to prevent data from existing indefinitely.",
          "CCTV retention: Hardcoding NVR storage systems to auto-overwrite video files exactly every 30 days."
        ]
      },
      {
        id: "gdpr-sec-2-6",
        title: "Section 2.6 — Integrity & Confidentiality",
        definition: "Data must be processed in a manner that ensures appropriate security, including protection against unauthorized or unlawful processing and accidental loss.",
        bullets: [
          "Technical Controls - Encryption: Enforcing AES-256 encryption at rest for databases and TLS 1.3 encryption in transit.",
          "Technical Controls - MFA: Mandating multi-factor authentication for all internal accounts and administrator portals.",
          "Technical Controls - RBAC: Restricting database read/write permissions to specific organizational roles.",
          "Technical Controls - PAM: Isolating privileged administrator accounts behind secure authentication gateways.",
          "Technical Controls - Audit logging: Collecting immutable logs of who accessed, modified, or exported any database records.",
          "Governance Controls - Access reviews: Running monthly checks to identify and revoke orphaned staff accounts.",
          "Governance Controls - Vendor governance: Auditing SaaS providers annually to ensure they maintain SOC2 compliance.",
          "Governance Controls - Security monitoring: Using SIEM tools to correlate network events and flag potential data exfiltration.",
          "Governance Controls - Incident response: Maintaining tested crisis blueprints to isolate and mitigate breaches instantly."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-3",
    title: "📖 MODULE 3 — DATA SUBJECT RIGHTS",
    sections: [
      {
        id: "gdpr-sec-3-1",
        title: "Section 3.1 — Right of Access",
        definition: "Data subjects have the right to obtain confirmation as to whether their data is processed, and receive a complete copy of it (Article 15).",
        bullets: [
          "DSAR workflows: Standard Operating Procedures (SOPs) outlining how the IT team compiles user records across all systems.",
          "Identity verification: Enforcing strict multifactor identity checks before releasing any data to an applicant.",
          "Export governance: Formatting exports in a secure, standardized layout (such as password-protected ZIP folders).",
          "Audit evidence: Maintaining detailed logs of when DSAR requests were received, processed, and closed.",
          "Secure delivery: Utilizing encrypted email channels or secure download portals to transmit requested files."
        ]
      },
      {
        id: "gdpr-sec-3-2",
        title: "Section 3.2 — Right to Rectification",
        definition: "Enables individuals to request the correction of inaccurate personal data or completion of incomplete records without undue delay (Article 16).",
        bullets: [
          "Data correction workflow: Creating secure administrative channels to update database fields upon user request.",
          "Approval processes: Requiring manager sign-off before modifying critical system logs or financial identifiers.",
          "Audit tracking: Generating change logs that record the prior state, new state, and author of any database modification.",
          "Governance controls: Preventing direct SQL database updates; all rectifications must go through audited software interfaces."
        ]
      },
      {
        id: "gdpr-sec-3-3",
        title: "Section 3.3 — Right to Erasure",
        definition: "Also known as the 'Right to be Forgotten,' this allows data subjects to demand the permanent deletion of their personal data under specific grounds (Article 17).",
        bullets: [
          "Deletion governance: Mapping out every single system (CRMs, backups, cloud tools) where a user's data resides.",
          "Backup considerations: Since immediate deletion from tape/immutable backups is technically impossible, establishing policies to ensure backup data is overwritten over time and flagged as inactive.",
          "Legal retention exceptions: Declining erasure requests when the data is legally required for tax, payroll, or ongoing litigation.",
          "Operational workflows: Automated APIs to propagate deletion commands across integrated third-party systems."
        ]
      },
      {
        id: "gdpr-sec-3-4",
        title: "Section 3.4 — Right to Data Portability",
        definition: "Allows individuals to obtain and reuse their personal data for their own purposes across different services in a structured, machine-readable format (Article 20).",
        bullets: [
          "Export formats: Delivering data in standard, interoperable formats such as JSON, CSV, or XML.",
          "Secure transfer: Implementing direct server-to-server API integrations to transmit data safely to another controller.",
          "Identity verification: Ensuring the recipient server is authenticated and matches the authorized destination.",
          "Approval governance: Requiring DPO validation before releasing large-scale customer data portfolios."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-4",
    title: "📖 MODULE 4 — DATA FLOW & DATA MAPPING",
    sections: [
      {
        id: "gdpr-sec-4-1",
        title: "Section 4.1 — Data Lifecycle",
        definition: "Governing the complete journey of personal data within the enterprise from creation to final destruction.",
        bullets: [
          "Collection: Ensuring every ingestion point utilizes an approved, transparent lawful basis.",
          "Transmission: Encrypting all data packets moving across external or internal networks.",
          "Storage: Placing data in secure, partitioned environments with appropriate access boundaries.",
          "Access: Limiting read/write privileges strictly through RBAC and multifactor verification.",
          "Sharing: Restricting third-party data transfers to verified partners with valid DPAs.",
          "Archival: Moving legacy datasets to heavily locked, read-only cold storage environments.",
          "Deletion: Using secure digital wiping protocols to destroy files beyond any hope of recovery."
        ]
      },
      {
        id: "gdpr-sec-4-2",
        title: "Section 4.2 — Enterprise Data Flow Mapping",
        definition: "Visualizing and documenting how information traverses your actual physical and digital infrastructure.",
        bullets: [
          "Access Control Flow - Card registration: Assigning unique, non-duplicable keycards to tenants.",
          "Access Control Flow - Biometric capture: Encrypting finger scans into algorithmic hashes on local secure readers.",
          "Access Control Flow - Authentication: Verifying user privileges locally against segregated access controllers.",
          "Access Control Flow - Log storage: Retaining door logs locally on locked Suprema server partitions.",
          "Access Control Flow - Retention: Auto-purging local entry records older than 90 days.",
          "CCTV Flow - Camera capture: Securing outdoor and indoor camera endpoints to prevent physical tampering.",
          "CCTV Flow - NVR storage: Routing video feeds via dedicated, non-routable security network subnets.",
          "CCTV Flow - Restricted access: Requiring administrator credentials and physical keys to open NVR cabinets.",
          "CCTV Flow - Retention: Setting hard disk drive overrides to recycle space after exactly 30 days.",
          "CCTV Flow - Export governance: Mandating DPO approval and detailed entries in the surveillance leak logs before any video export.",
          "Finance Data Flow - Invoice creation: Generating client billing statements within segregated billing portals.",
          "Finance Data Flow - Approval routing: Restricting operational sign-offs strictly to authorized managers via encrypted workflows.",
          "Finance Data Flow - ERP storage: Using Zoho CRM or local accounting suites secured by conditional access policies.",
          "Finance Data Flow - Audit retention: Retaining statutory billing details for the legally mandated 7-year timeline before purge."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-5",
    title: "📖 MODULE 5 — ENCRYPTION & CRYPTOGRAPHY",
    sections: [
      {
        id: "gdpr-sec-5-1",
        title: "Section 5.1 — Encryption Fundamentals",
        definition: "The mathematical process of converting raw information into unreadable code to guarantee confidentiality.",
        bullets: [
          "Encryption at rest: Using AES-256 to secure file servers, databases, and backup tapes.",
          "Encryption in transit: Mandating TLS 1.3 for all web connections, email exchanges, and API integrations.",
          "Database encryption: Enforcing column-level encryption for sensitive fields like passport numbers or biometrics.",
          "Endpoint encryption: Rolling out BitLocker or FileVault to ensure lost or stolen corporate laptops are completely inaccessible.",
          "VPN encryption: Encrypting remote remote-work traffic utilizing IPsec or WireGuard protocols."
        ]
      },
      {
        id: "gdpr-sec-5-2",
        title: "Section 5.2 — Hashing & Certificates",
        definition: "Cryptographic tools used to ensure absolute data integrity and verify system identities.",
        bullets: [
          "Hashing: Generating unique, one-way digital fingerprints (SHA-256) to store user passwords securely.",
          "Salting: Adding unique random data to passwords before hashing to defeat precomputed rainbow table attacks.",
          "PKI: Building a Public Key Infrastructure to manage and distribute corporate digital certificates.",
          "SSL/TLS: Establishing secure, encrypted tunnels between web browsers and enterprise hosting portals.",
          "Certificates: Enforcing annual renewal and rotation schedules for all public and private security certificates.",
          "Key rotation: Programmatically cycling database encryption keys monthly via automated key managers.",
          "HSM concepts: Offloading key generation and cryptographic operations to dedicated physical Hardware Security Modules."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-6",
    title: "📖 MODULE 6 — IDENTITY & ACCESS MANAGEMENT",
    sections: [
      {
        id: "gdpr-sec-6-1",
        title: "Section 6.1 — Access Governance",
        definition: "Developing administrative policies and technical guardrails to control who accesses corporate resources.",
        bullets: [
          "RBAC: Restricting system write, read, or execute permissions strictly based on mapped job roles.",
          "ABAC: Implementing Attribute-Based Access Control to restrict resources based on location, time, or department.",
          "PAM: Controlling administrative server accounts utilizing single-use, timed checkout credentials.",
          "PIM: Activating Privileged Identity Management to grant admin rights only when justified on a 'just-in-time' basis.",
          "MFA: Requiring physical security keys, authenticator apps, or push notifications for all software logins.",
          "SSO: Consolidating identity management under single portals to minimize password reuse and simplify offboarding.",
          "Conditional Access: Restricting SaaS logins to verified corporate IP ranges and compliant, enrolled device states."
        ]
      },
      {
        id: "gdpr-sec-6-2",
        title: "Section 6.2 — Identity Lifecycle Management",
        definition: "Managing user permissions smoothly from their initial hire date to their ultimate departure.",
        bullets: [
          "Onboarding: Auto-provisioning minimum standard privileges based on pre-approved department templates.",
          "Role Changes: Instantly stripping legacy permissions and applying new access profiles when employees transfer.",
          "Privilege Escalation: Implementing audited, short-lived ticket workflows to approve temporary admin rights.",
          "Offboarding: Running automated scripts to disable all email, SaaS, active directory, and biometric door access within 1 hour of departure.",
          "Contractor Access: Issuing expiring guest credentials that automatically lock after 30 days."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-7",
    title: "📖 MODULE 7 — CLOUD SECURITY GOVERNANCE",
    sections: [
      {
        id: "gdpr-sec-7-1",
        title: "Section 7.1 — Cloud Governance Models",
        definition: "Architecting cloud systems to guarantee corporate compliance standards are maintained in third-party environments.",
        bullets: [
          "Shared Responsibility Model: Understanding that while the cloud provider (AWS/Azure) secures the infrastructure, you remain responsible for securing your data, operating systems, and access controls.",
          "SaaS governance: Conducting risk assessments on platforms like Zoho, Office RnD, and HubSpot before onboarding.",
          "Cloud visibility: Using cloud access monitors to log every administrative change, API query, or data export.",
          "Cloud compliance: Deploying automated security posture managers to scan cloud environments for compliance drift.",
          "Shadow IT: Implementing firewall filters and CASB tools to block staff from utilizing unapproved personal cloud tools."
        ]
      },
      {
        id: "gdpr-sec-7-2",
        title: "Section 7.2 — Zero Trust Security",
        definition: "An architectural model operating on the core philosophy of: 'Never Trust, Always Verify.'",
        bullets: [
          "Continuous verification: Constantly re-authenticating user identities and device postures throughout active sessions.",
          "Device posture: Blocking access to corporate applications if the connecting laptop lacks active antivirus or disk encryption.",
          "Identity verification: Forcing secondary MFA prompts when users attempt to modify sensitive configuration settings.",
          "Least privilege: Granting users the bare minimum permissions required to perform their current task.",
          "Segmentation: Dividing corporate networks into tiny, isolated subnets to prevent lateral movement during a breach."
        ]
      },
      {
        id: "gdpr-sec-7-3",
        title: "Section 7.3 — Cloud Risks",
        definition: "Identifying and mitigating common security vulnerabilities inherent to enterprise cloud hosting.",
        bullets: [
          "Misconfigurations: Forgetting to apply access controls, leaving storage buckets (S3/Azure Blobs) open to the public web.",
          "Token theft: Attackers stealing active browser session cookies to bypass MFA protections.",
          "Public storage exposure: Leaving database backups or log files unprotected on public-facing cloud storage links.",
          "Weak MFA: Allowing insecure SMS-based 2FA, which is highly vulnerable to SIM-swapping and phishing attacks.",
          "Excessive sharing: Users generating anonymous 'anyone with link can edit' files, exposing sensitive company data."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-8",
    title: "📖 MODULE 8 — ENVIRONMENT MAPPING",
    sections: [
      {
        id: "gdpr-sec-8-1",
        title: "Section 8.1 — Multi-Site Enterprise Mapping",
        definition: "A visual master layout correlating your specific operational environments with their corresponding compliance risks and deployed technical controls.",
        bullets: [
          "Environment: Access Control | Risk: Biometric database compromise, credential cloning | Control: Enforcing AES-256 partition encryption on Suprema host machines, running access logs on isolated VLANs.",
          "Environment: CCTV Surveillance | Risk: Unauthorized video exports, privacy exposure | Control: Isolating NVRs on dedicated subnets, physical locks on NVR racks, hardcoding strict 30-day overwrites.",
          "Environment: Google Workspace | Risk: Cloud data leakage, account hijacking | Control: Enforcing hardware-key MFA, conditional access geofences, Purview Data Loss Prevention (DLP) filters.",
          "Environment: Guest WiFi Portal | Risk: Rogue access points, network intrusion | Control: Enforcing strict VLAN isolation between client offices and guest portals, client isolation on APs.",
          "Environment: Finance Systems / ERP | Risk: Invoice fraud, payroll manipulation | Control: Restricting credentials strictly via Privileged Access Management (PAM), logging all administrative database queries."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-9",
    title: "📖 MODULE 9 — INCIDENT RESPONSE & BREACH MANAGEMENT",
    sections: [
      {
        id: "gdpr-sec-9-1",
        title: "Section 9.1 — Incident Lifecycle",
        definition: "A structured, highly coordinated 6-phase response process to handle cybersecurity incidents cleanly.",
        bullets: [
          "Detection: Identifying anomalies utilizing firewalls, endpoint monitors, and automated SIEM alerts.",
          "Validation: Confirming the threat is active and separating genuine compromises from false positives.",
          "Containment: Isolating infected network segments (VLANs), disabling compromised credentials, and stopping lateral spread.",
          "Investigation: Analyzing system logs and file forensics to identify the entry point and full scope of exposure.",
          "Recovery: Rebuilding systems from verified, immutable backups and slowly restoring services under tight monitoring.",
          "Lessons learned: Convening the executive board to analyze the root cause and implement long-term security remediations."
        ]
      },
      {
        id: "gdpr-sec-9-2",
        title: "Section 9.2 — Breach Severity Classification",
        definition: "Establishing clear incident categories to trigger corresponding executive escalation paths.",
        bullets: [
          "Critical Severity: Ransomware spreading across multi-site servers, or database-wide exfiltration of unencrypted biometrics. Action: Call an emergency board session, freeze all network tunnels, notify legal Counsel.",
          "High Severity: Cloud console compromise with administrative privilege takeover, or unauthorized export of customer files. Action: Lock the affected tenant immediately, initiate external forensic reviews.",
          "Medium Severity: Single employee victim of a credential-harvesting phishing attack with no lateral movement. Action: Force immediate password resets, review mail access logs, monitor account behavior.",
          "Low Severity: Minor policy violation, such as an employee leaving their unlocked workstation unattended. Action: Issue internal security warning, log the event in the compliance tracker."
        ]
      },
      {
        id: "gdpr-sec-9-3",
        title: "Section 9.3 — Enterprise Incident Scenarios",
        definition: "Realistic crisis rehearsals mapped to your specific multi-site environment.",
        bullets: [
          "Ransomware: Hostile payload locks access databases; require isolated containment, VLAN shutdowns, and recovery of offline Veeam backups.",
          "Executive compromise: CEO email compromised via phishing; require immediate active session revocations, review of mail forwarders, and tenant log audits.",
          "Insider threat: Disgruntled staff member attempts to download CRM records; require strict exfiltration blocks, access revocations, and forensic audits.",
          "Leaked CCTV footage: Security surveillance video exfiltrated online; require NVR network audits, locking camera subnets, and managing public communications.",
          "Vendor compromise: Third-party billing portal breached; require isolation of API integrations, pausing vendor access, and legal SLA reviews.",
          "WiFi breach: Rogue device intercepts tenant traffic; require WPA3 enterprise upgrades, disabling rogue portals, and running client isolation scans.",
          "Cloud exposure: Misconfigured AWS bucket leaks customer logs; require immediate storage access lockdown, data auditing, and ODPC reporting."
        ]
      }
    ]
  },
  {
    id: "gdpr-mod-10",
    title: "📖 MODULE 10 — GDPR DOCUMENTATION & AUDITS",
    sections: [
      {
        id: "gdpr-sec-10-1",
        title: "Section 10.1 — Governance Documentation",
        definition: "The essential documentation trail required to prove accountability under regulatory audits.",
        bullets: [
          "DPIA: Formal, risk-driven assessments completed before launching any high-risk data systems (Article 35).",
          "Risk register: A live boardroom spreadsheet tracking all security risks, their likelihood, severity, and mitigations.",
          "Retention policy: Documented schedule establishing clear legal deadlines for deleting every type of corporate file.",
          "Access review forms: Certified, dated records proving that database permissions are audited quarterly.",
          "Incident reports: Structured logs documenting the containment and resolution of every security event.",
          "Vendor assessments: Questionnaires completed during onboarding to validate the security posture of third-party partners.",
          "Audit reports: Independent, documented validation of your security controls and compliance alignments."
        ]
      },
      {
        id: "gdpr-sec-10-2",
        title: "Section 10.2 — Audit Governance",
        definition: "The methodical process of planning, executing, and reporting compliance audits.",
        bullets: [
          "Audit planning: Scoping audit boundaries, selecting controls to verify, and assigning responsibilities.",
          "Evidence collection: Gathering system logs, configuration screenshots, and policy documents to prove controls are active.",
          "Log reviews: Auditing admin activity, firewall logs, and database query logs for anomalies.",
          "Access reviews: Cross-referencing current employee roles with active software user lists.",
          "Remediation tracking: Maintaining a list of audit findings with clear deadlines and owners for resolution.",
          "Governance reporting: Compiling clean executive summaries to present to the board of directors."
        ]
      }
    ]
  }
];

export const isoSyllabus: SyllabusSection[] = [
  {
    id: "iso-sec-1",
    title: "Section 1 — ISO 27001 Foundations",
    definition: "ISO/IEC 27001 is the international gold standard framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS).",
    bullets: [
      "ISMS Overview: A systematic approach to managing sensitive company information so that it remains secure, encompassing people, processes, and IT systems.",
      "ISO Clauses 4-10: The core management requirements of the standard, including: Context (Clause 4), Leadership (Clause 5), Planning (Clause 6), Support (Clause 7), Operation (Clause 8), Evaluation (Clause 9), and Improvement (Clause 10).",
      "Governance Lifecycle: Operating a continuous cycle of planning, deploying, monitoring, auditing, and refining the security controls.",
      "Continuous Improvement: Enforcing a Plan-Do-Check-Act (PDCA) mindset to ensure the ISMS adapts dynamically to evolving threat landscapes.",
      "Risk-Based Governance: Aligning security spend and control enforcement strictly to documented, analyzed business risks."
    ]
  },
  {
    id: "iso-sec-2",
    title: "Section 2 — Risk Management",
    definition: "The systematic identification, assessment, and treatment of information security risks (Clause 6.1).",
    bullets: [
      "Risk identification: Methodically cataloging threat vectors (e.g., fiber cuts, ransomware, rogue tenants, weak APIs).",
      "Risk matrix: Mapping risks onto a visual coordinate space based on likelihood (1-5) versus impact (1-5).",
      "Risk scoring: Generating objective risk numbers (1-25) to prioritize remediation budgets and engineering tasks.",
      "Risk treatment: Selecting response strategies: Avoid (eliminate risk), Mitigate (apply controls), Transfer (insurance), or Accept (retain risk).",
      "Risk acceptance: Formal executive sign-offs required when a business unit explicitly chooses not to mitigate a identified risk.",
      "Residual risk: The remaining risk exposure that exists after all technical and organizational controls have been applied."
    ]
  },
  {
    id: "iso-sec-3",
    title: "Section 3 — Security Architecture",
    definition: "Designing robust, layered technical perimeters to isolate and protect critical enterprise networks.",
    bullets: [
      "VLAN segmentation: Splitting the physical multi-site network into isolated virtual subnets (Corporate, IoT, guest WiFi, CCTV).",
      "Firewall zones: Configuring stateful firewalls to block unauthorized traffic traversing untrusted, DMZ, and internal zones.",
      "NAC: Enforcing Network Access Control to block unauthorized personal laptops from plugging into office ethernet ports.",
      "DMZ: Hosting public-facing servers (such as guest portals) in isolated networks to prevent lateral server hopping.",
      "SD-WAN: Managing secure, encrypted overlay tunnels linking multi-site branch offices.",
      "VPN governance: Requiring certificate-based remote-access tunnels with active conditional geofencing.",
      "NVR isolation: Hardening security camera networks on dedicated, non-routable VLANs with isolated physical switches."
    ]
  },
  {
    id: "iso-sec-4",
    title: "Section 4 — Identity Security",
    definition: "Hardening credentials and controlling administrative permissions across all enterprise resources.",
    bullets: [
      "MFA: Enforcing authentication apps or hardware keys; banning insecure, bypassable SMS paths.",
      "PAM: Vaulting administrative passwords, requiring approval workflows and recording all active sessions.",
      "PIM: Granting administrative rights on an as-needed basis that automatically expire after a few hours.",
      "SSO: Consolidating login portals to guarantee rapid access revocations during employee offboarding.",
      "Access reviews: Running automated monthly checks to identify privilege creep or orphaned accounts.",
      "Conditional Access: Restricting application logins strictly to verified corporate IP ranges and enrolled, compliant devices."
    ]
  },
  {
    id: "iso-sec-5",
    title: "Section 5 — SOC & Monitoring",
    definition: "Developing real-time visibility to identify, contain, and analyze security threats.",
    bullets: [
      "SIEM: Centralizing event logs from firewalls, active directories, and cloud endpoints into a single correlator.",
      "Syslog: Configuring servers and networking equipment to export event logs to secure centralized servers.",
      "UEBA: Utilizing machine learning to flag anomalous user behavior, such as administrative access at midnight.",
      "Threat intelligence: Subscribing to threat feeds to proactively block known malicious IPs and malware hashes.",
      "Alert management: Establishing clear severity levels and direct escalation workflows to prevent alert fatigue.",
      "Correlation: Designing rules to trigger immediate alerts when multiple independent events occur (e.g. failed login + immediate remote VPN connection)."
    ]
  },
  {
    id: "iso-sec-6",
    title: "Section 6 — Business Continuity & DR",
    definition: "Architecting resilience to survive major disasters and maintain system availability.",
    bullets: [
      "RTO: The target time limit to restore operations after a system failure (e.g. restore within 4 hours).",
      "RPO: The maximum age of data that must be recovered from backup storage (e.g., restore data up to 1 hour old).",
      "Backup tiers: Utilizing a hybrid strategy of fast local NAS storage, daily offsite replication, and immutable cloud storage.",
      "Immutable backups: Writing backups to WORM (Write Once, Read Many) vaults that cannot be deleted or modified, defeating ransomware.",
      "Failover: Configuring redundant, active-active ISP circuits and firewalls to guarantee continuous availability.",
      "DR testing: Running bi-annual simulated failovers to validate system recovery playbooks and operational readiness."
    ]
  },
  {
    id: "iso-sec-7",
    title: "Section 7 — Vendor Governance",
    definition: "Assessing and managing the security risks associated with third-party software and service providers.",
    bullets: [
      "Vendor onboarding: Requiring new partners to supply SOC2 Type II reports, penetration test summaries, and privacy policies.",
      "Security assessments: Grading vendors based on their access to your network, data hosting, and business criticality.",
      "SLA governance: Writing strict uptime, response time, and breach notification SLAs directly into contracts.",
      "Third-party risk: Documenting external vendor dependencies in the primary corporate risk register.",
      "Vendor audits: Conducting annual security reviews or on-site inspections of high-risk operational partners."
    ]
  },
  {
    id: "iso-sec-8",
    title: "Section 8 — Audit & Compliance",
    definition: "Maintaining continuous internal audits and documentation trails to guarantee certification readiness.",
    bullets: [
      "Internal audits: Executing planned, objective reviews of the ISMS to identify control gaps before external certification.",
      "Evidence gathering: Automating the collection of configuration logs, access reviews, and training records.",
      "Remediation: Creating formal corrective action plans with clear owners and deadlines to resolve audit findings.",
      "Compliance tracking: Mapping active technical controls to legal frameworks like KDPA and GDPR.",
      "KPI reporting: Tracking and presenting security metrics (e.g., MTTR, patching compliance) to leadership."
    ]
  },
  {
    id: "iso-sec-9",
    title: "Section 9 — Executive Governance",
    definition: "Bridging the gap between technical operations and strategic boardroom decision-making.",
    bullets: [
      "Risk dashboards: Presenting security risk postures to executive leadership utilizing non-technical metrics.",
      "Board reporting: Formulating quarterly C-suite summaries detailing security investments, risks, and audit statuses.",
      "KPI reviews: Hosting quarterly sessions to review incident trends, SLA deliveries, and compliance ratings.",
      "Governance meetings: Facilitating regular sessions with the ISMS Steering Committee to authorize policy changes.",
      "Executive communication: Translating complex technical threats into business impact, continuity risks, and financial liabilities."
    ]
  }
];

export const kdpaSyllabus: SyllabusSection[] = [
  {
    id: "kdpa-sec-1",
    title: "Section 1 — Kenya DPA Foundations",
    definition: "The Kenya Data Protection Act, 2019, is the principal legislation governing the processing of personal data in Kenya.",
    bullets: [
      "ODPC Structure: The Office of the Data Protection Commissioner, led by the Data Commissioner, acting as the primary regulatory watchdog in Kenya.",
      "Data Commissioner Powers: Authorized to conduct systematic audits, issue compliance notices, impose administrative fines, and initiate criminal prosecutions.",
      "Legal obligations: Requires all data controllers and processors handling Kenyan citizens' data to register, appoint DPOs, and enforce strict security controls.",
      "Penalties: Violations expose organizations to administrative fines of up to KES 5 million or 1% of global annual turnover, alongside direct criminal liability.",
      "Registration requirements: Mandates that organizations must register with the ODPC, submitting detailed descriptions of their processing activities and security measures."
    ]
  },
  {
    id: "kdpa-sec-2",
    title: "Section 2 — Operational Compliance",
    definition: "Translating the legal mandates of the Kenya DPA into daily, multi-site technical control configurations.",
    bullets: [
      "Access control governance: Restricting biometric database partitions locally, enforcing least-privilege, and logging all swiping history.",
      "CCTV governance: Hardcoding camera NVR systems to recycle files every 30 days, placing cameras to avoid capturing private spaces, and maintaining export logs.",
      "Visitor systems: Replacing paper guest logs with secure, digital check-in portals that automatically mask previous guest names.",
      "HR governance: Restricting access to employee files, deleting candidate resumes after recruitment campaigns, and securing payroll portals.",
      "Finance data governance: Restricting client billing data, masking bank details, and maintaining encrypted billing audits."
    ]
  },
  {
    id: "kdpa-sec-3",
    title: "Section 3 — Breach Management",
    definition: "Developing rapid response playbooks to handle security compromises in alignment with Kenyan law.",
    bullets: [
      "72-hour reporting: Article 43 mandates notifying the Data Commissioner within 72 hours of discovering any personal data breach.",
      "Incident escalation: Establishing clear notification pathways from front-desk staff up to the Head of IT and Executive DPO.",
      "ODPC communication: Standardizing formal notification drafts detailing the breach nature, impact scope, and containment actions.",
      "Evidence preservation: Capturing immutable forensic images of compromised servers and isolating active system logs to support legal investigations."
    ]
  },
  {
    id: "kdpa-sec-4",
    title: "Section 4 — Physical Security Governance",
    definition: "Securing physical perimeters to prevent unauthorized hands-on access to sensitive infrastructure.",
    bullets: [
      "Server room controls: Requiring biometric access keys, dual-lock cabinets, and dedicated CCTV cameras monitoring server racks.",
      "Badge governance: Issuing distinct, color-coded badges to tenants, visitors, and contractors; auditing keycards quarterly.",
      "Visitor escorting: Mandating that all guests and contractors remain accompanied by an employee while in secure facility zones.",
      "Contractor controls: Requiring third-party technical contractors to sign robust non-disclosure agreements prior to server room access."
    ]
  },
  {
    id: "kdpa-sec-5",
    title: "Section 5 — Local Data Governance",
    definition: "Adhering to strict localization rules regarding where Kenyan citizens' personal data must reside.",
    bullets: [
      "Local hosting: Section 50 mandates that processing servers for specific high-risk operations (e.g. biometric databases, national registers) must reside in Kenya.",
      "Cross-border transfers: Restricting data transfers outside Kenya unless the destination country guarantees adequate protection laws and explicit consent is granted.",
      "Cloud governance: Ensuring cloud hosting agreements specify the exact geographical region (such as Microsoft 365 South Africa or localized nodes).",
      "Vendor governance: Auditing local and international cloud providers to verify they satisfy local ODPC storage mandates."
    ]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "case-equifax",
    title: "Equifax Data Breach (2017)",
    whatHappened: "A catastrophic data breach exposed the highly sensitive personal records (social security numbers, birthdays, addresses) of over 147 million consumers.",
    rootCause: "Failure to patch a known vulnerability in the Apache Struts web framework, which remained unpatched for over two months after a security fix was released.",
    governanceFailure: "Inadequate asset management, delayed vulnerability reporting paths, and a complete lack of tracking regarding internal system software dependencies.",
    technicalFailure: "Lack of network segmentation allowing lateral movement, expired security certificates blocking SIEM monitoring tools from inspecting encrypted data exfiltration tunnels.",
    regulatoryImpact: "Equifax was forced to pay over $700 million in regulatory fines, class-action settlements, and ongoing compliance oversight agreements.",
    lessonsLearned: "Vulnerability patching is a critical operational governance task, not an optional IT chore. Asset inventories must map all software libraries and dependencies.",
    whatToDoDifferently: "Deploy automated vulnerability scanners, enforce zero-day patch windows, implement robust network segmentation, and automate certificate renewal processes."
  },
  {
    id: "case-uber",
    title: "Uber Data Breach & Cover-up (2016)",
    whatHappened: "Attackers breached an external cloud environment, stealing personal details of 57 million users and drivers, which Uber executives subsequently hid and paid off as 'bug bounty' rewards.",
    rootCause: "Uber developers uploaded active cloud administrative credentials directly into a public, unencrypted GitHub repository.",
    governanceFailure: "Complete executive cover-up, failure to notify regulators and users within legal timeframes, and violating basic ethical disclosure mandates.",
    technicalFailure: "Lack of MFA on developer GitHub accounts, using hardcoded static cloud access keys, and a total absence of secret scanning scanners on code repositories.",
    regulatoryImpact: "Uber was fined $148 million by US regulators, faced multiple international lawsuits, and their Chief Security Officer was prosecuted criminally.",
    lessonsLearned: "Incident transparency is mandatory. Attempting to mask a security compromise as a bug bounty is a severe regulatory violation that triggers personal criminal liability.",
    whatToDoDifferently: "Enforce mandatory MFA across all code repositories, deploy secret scanners (like GitGuardian) to block hardcoded keys, and establish independent whistleblowing channels."
  },
  {
    id: "case-colonial",
    title: "Colonial Pipeline Ransomware (2021)",
    whatHappened: "A massive ransomware attack shut down the primary fuel pipeline systems supplying the US East Coast, causing widespread panic and emergency gas shortages.",
    rootCause: "Attackers gained network access via an orphaned corporate VPN account that lacked multi-factor authentication (MFA).",
    governanceFailure: "Inadequate identity lifecycle governance, failing to audit and disable legacy remote-access tunnels during system migrations.",
    technicalFailure: "Absence of MFA on remote gateways, weak network segmentation between administrative billing networks and operational pipeline systems.",
    regulatoryImpact: "Colonial Pipeline paid a $4.4 million ransom (later partially recovered) and faced intense government audits and new mandatory security directives.",
    lessonsLearned: "Single factor authentication on remote entry gateways is an open door to threat actors. Administrative networks must be completely separated from operational zones.",
    whatToDoDifferently: "Enforce strict conditional access rules requiring hardware key MFA on all VPN tunnels, run monthly reviews to prune orphaned accounts, and isolate core OT networks."
  },
  {
    id: "case-moveit",
    title: "MOVEit Transfer Breach (2023)",
    whatHappened: "A zero-day SQL injection vulnerability in the MOVEit secure file transfer application allowed attackers to exfiltrate sensitive files from thousands of global organizations.",
    rootCause: "A sophisticated SQL injection vulnerability within a widely trusted third-party enterprise file transfer application.",
    governanceFailure: "Over-reliance on a single secure gateway application with no defense-in-depth measures, failing to limit database privileges of transfer utilities.",
    technicalFailure: "Application-level input validation failures, excessive database connection rights allowing database-wide reads.",
    regulatoryImpact: "Exposed data of over 60 million individuals, triggering massive class-action lawsuits and regulatory inquiries across multiple global jurisdictions.",
    lessonsLearned: "Even secure transfer platforms can fail. Defense-in-depth is essential; files stored on transfer appliances must be encrypted and auto-purged immediately after download.",
    whatToDoDifferently: "Limit stored data retention times on gateways to 24 hours, enforce column-level file encryption, and execute regular penetration testing on file transfer pipelines."
  },
  {
    id: "case-cloud",
    title: "Cloud Misconfiguration Leak (Real Incident)",
    whatHappened: "A major enterprise misconfigured an AWS S3 storage bucket, leaving over 10 million client transaction records completely public to the web with no login required.",
    rootCause: "Setting storage bucket access permissions to 'Public' during a troubleshooting session and failing to restore secure parameters.",
    governanceFailure: "Absence of automated cloud posture audits, failing to enforce baseline peer reviews before modifying production system permissions.",
    technicalFailure: "Lack of cloud access logging, lack of automated alarms flagging public storage bucket exposures.",
    regulatoryImpact: "Faced severe ODPC investigation, loss of multiple enterprise client SLAs, and extensive reputational brand damage.",
    lessonsLearned: "Troubleshooting workarounds must be strictly audited. Cloud configurations require automated scanning engines to block and remediate public sharing drifts.",
    whatToDoDifferently: "Deploy AWS Config or Azure Policy to auto-block public bucket settings, mandate peer approvals for cloud modifications, and set real-time access alarms."
  },
  {
    id: "case-cctv",
    title: "CCTV Exposure Incident (Real Incident)",
    whatHappened: "Surveillance footage of high-profile visitors inside a secure facility was exfiltrated by a third-party technician and leaked online.",
    rootCause: "A maintenance contractor utilized default administrative credentials on an NVR terminal to export surveillance video files.",
    governanceFailure: "Failure to enforce vendor access policies, failing to rotate default manufacturer passwords on critical physical security hardware.",
    technicalFailure: "Surveillance NVR terminals sharing the primary office LAN with no network isolation, lacking event logging for video file exports.",
    regulatoryImpact: "Severe regulatory scrutiny under KDPA Section 41, substantial brand damage, and a complete termination of the physical security vendor contract.",
    lessonsLearned: "Physical security systems are digital assets. Failing to secure passwords and network access on CCTV equipment exposes the organization to massive legal liabilities.",
    whatToDoDifferently: "Isolate all CCTV equipment on physical subnets, mandate password rotations on all NVRs, enforce contractor escorting policies, and gather secure logs."
  },
  {
    id: "case-insider",
    title: "Insider Threat Exfiltration (Real Incident)",
    whatHappened: "A departing sales executive successfully downloaded the complete customer database containing 50,000 sensitive records to a personal USB drive.",
    rootCause: "The executive maintained active access rights during their two-week resignation notice period with no exfiltration blocks in place.",
    governanceFailure: "Failing to initiate high-risk monitoring pipelines for resigning staff, inadequate USB storage policies.",
    technicalFailure: "Absence of Data Loss Prevention (DLP) blocks on corporate endpoints, lack of alerts for bulk database exports.",
    regulatoryImpact: "Fined under GDPR for failing to protect customer lists, faced severe commercial losses as records were shared with competitors.",
    lessonsLearned: "Resigning staff must have their system permissions immediately curtailed. Endpoints must restrict data movements to protect intellectual property.",
    whatToDoDifferently: "Implement Endpoint DLP to block USB copying, restrict Bulk CRM exports, set automated alerts for large downloads, and instantly restrict access during offboarding."
  }
];

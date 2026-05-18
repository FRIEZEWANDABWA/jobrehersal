export interface FrameworkSection {
  id: string;
  title: string;
  focus: string;
  definition: string;
  bullets: string[];
}

export interface FrameworkQna {
  id: string;
  question: string;
  answer: string;
}

export interface FrameworkModel {
  id: string;
  name: string;
  focusArea: string;
  shortDesc: string;
  longDesc: string;
  corePurpose: string;
  sections: FrameworkSection[];
  qnas: FrameworkQna[];
  tables?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  }[];
}

export const modernFrameworksData: FrameworkModel[] = [
  {
    id: "nist-advanced",
    name: "MODULE 1 — NIST CSF Advanced Mastery",
    focusArea: "Modern Cybersecurity Governance & Maturity",
    shortDesc: "Advanced Cyber Maturity, NIST Tiers 1-4, Risk Appetite, BIA, and Boardroom Communication.",
    longDesc: "This is the layer where CIOs think, CISOs operate, enterprise risks are managed, boards are briefed, regulators are satisfied, and business continuity is protected. It is the defining difference between an IT engineer and an enterprise technology leader.",
    corePurpose: "To measure, align, and communicate cybersecurity maturity and resilience in terms of business risk exposure and business continuity.",
    sections: [
      {
        id: "nist-tiers",
        title: "1. NIST Cyber Maturity Tiers (Institutionalized Security)",
        focus: "Measuring how mature and institutionalized cybersecurity operations and governance models are.",
        definition: "Maturity tiers are not audit scores. They are indicators of how consistently security actions are managed, standardized, and adapted to threats across the enterprise.",
        bullets: [
          "TIER 1 (Partial): Reactive security, no formal governance, ad-hoc actions, password sharing, no SIEM, and weak executive awareness.",
          "TIER 2 (Risk Informed): Basic policies exist, some risk awareness starting, but security relies heavily on individual efforts with low standardization.",
          "TIER 3 (Repeatable): Mature organizational security, standardized processes, regular risk assessments, formal vendor reviews, and structured C-suite reporting.",
          "TIER 4 (Adaptive): Elite security driven by real-time threat intelligence, predictive behavior analytics, automated containments, and a deep corporate cyber culture."
        ]
      },
      {
        id: "nist-risk-appetite",
        title: "2. Defining Risk Appetite & Executive Language",
        focus: "Aligning technology security with acceptable business risk levels.",
        definition: "Security cannot eliminate all risk. Leadership is about reducing risk, prioritizing security budgets, and translating tech investments into risk-reduction coordinates.",
        bullets: [
          "Risk Appetite represents the level of risk an organization is willing to accept to achieve its business objectives (e.g. Low for banks, Higher for fast-growth startups).",
          "Convert operational jargon into corporate speak. Stop saying 'We need this firewall.' Say: 'This investment reduces operational and regulatory exposure associated with unauthorized access risks.'",
          "Always present security controls as strategic safeguards that enable business continuity rather than simple cost centers."
        ]
      },
      {
        id: "nist-risk-register",
        title: "3. The Enterprise Risk Register",
        focus: "One of the most critical governance tools to track, prioritize, and mitigate business exposures.",
        definition: "A risk register aggregates corporate threat vectors, detailing likelihood, financial/operational impact, dedicated owners, active mitigations, and current status.",
        bullets: [
          "Ransomware Risk: Impact is Critical, Likelihood is High. Active Mitigation: Enforce immutable air-gapped backups and Endpoint Detection & Response (EDR) agents.",
          "ISP Failure Risk: Impact is High, Likelihood is Medium. Active Mitigation: Provision a secondary, dedicated fiber circuit with automatic WAN route failover.",
          "Insider Threat Risk: Impact is High, Likelihood is Medium. Active Mitigation: Implement Privileged Access Management (PAM) with continuous session recording."
        ]
      },
      {
        id: "nist-bia",
        title: "4. Business Impact Analysis (BIA)",
        focus: "Identifying critical services, recovery priorities, and financial impact of downtime.",
        definition: "Not all systems are equally critical. A BIA establishes RTO (Recovery Time Objective - max downtime) and RPO (Recovery Point Objective - max data loss) parameters to prioritize recovery by business impact.",
        bullets: [
          "ERP Core Database: High-priority system. Recovery parameters set to: RTO of 2 hours, RPO of 15 minutes.",
          "Email & Productivity Platforms: Medium-priority system. Recovery parameters set to: RTO of 8 hours, RPO of 1 hour.",
          "Operational prioritizing guarantees that technical recovery teams restore critical assets first, protecting company revenue."
        ]
      },
      {
        id: "nist-resilience",
        title: "5. Cyber Resilience vs Cybersecurity",
        focus: "Moving from simple intrusion prevention to robust operational survival.",
        definition: "Cybersecurity focuses on preventing attacks. Cyber Resilience focuses on continuing business operations even while an active attack is happening. Mature leaders assume breaches will happen.",
        bullets: [
          "Build systems with high availability, isolated subnets, and active failover pipelines.",
          "Design incident response playbooks that allow core operations to continue on isolated networks during active incident containments.",
          "Review and test Disaster Recovery (DR) restoration scripts regularly to guarantee rapid operational recovery."
        ]
      },
      {
        id: "nist-vendor-risk",
        title: "6. Third-Party & Vendor Risk Governance",
        focus: "Mitigating supply-chain exposures and third-party data handlers.",
        definition: "One of the biggest modern attack vectors. Mature organizations implement strict assessment lifecycles for critical vendors based on data access and operational criticality.",
        bullets: [
          "Perform continuous assessments of vendor security postures and confirm compliance certifications (e.g. ISO 27001, SOC 2).",
          "Contractually bind vendors to strict SLA obligations and incident notification timelines (e.g. 24-hour breach notices).",
          "Audit third-party integrations and enforce Least Privilege access, restricting vendors to minimal subnets."
        ]
      },
      {
        id: "nist-boardroom-comm",
        title: "7. Board Communication (Translating Tech into Risk)",
        focus: "Presenting metrics to the Board without using dense technical jargon.",
        definition: "Boards do not want to see CPU logs or firewall metrics. They care about risk, compliance, operational impact, and financial exposure.",
        bullets: [
          "BAD Communication: 'The SIEM detected lateral movement exploiting SMB vulnerabilities on a domain controller.'",
          "GOOD Communication: 'We identified suspicious internal activity early, contained the affected systems, and minimized operational impact without evidence of critical data compromise.'",
          "Track KPIs (e.g. patch compliance %, MFA adoption) and KRIs (e.g. open critical vulnerabilities >30 days, failed recovery tests) on unified dashboards."
        ]
      },
      {
        id: "nist-ransomware",
        title: "8. Ransomware Readiness & Governance",
        focus: "Protecting backups, active directories, and hypervisors from modern attacks.",
        definition: "Ransomware targets backups and active directories to force extortion payments. Defensive models must assume the perimeter will be breached.",
        bullets: [
          "Deploy immutable backups that cannot be modified, deleted, or encrypted, even by compromised admin accounts.",
          "Deploy EDR/XDR agents on all servers and workstations, enabling automated threat containment.",
          "Set up governance committees (Steering, Risk, CAB) to ensure investment oversight and operational accountability."
        ]
      }
    ],
    qnas: [
      {
        id: "nist-adv-q1",
        question: "How would you assess an organization’s cybersecurity maturity?",
        answer: "I would evaluate governance maturity, risk management practices, asset visibility, detection capabilities, response readiness, recovery resilience, executive involvement, third-party governance, and continuous improvement processes using a framework such as NIST CSF. I would then benchmark maturity against business risk exposure and industry expectations."
      },
      {
        id: "nist-adv-q2",
        question: "How do you report cyber risk to the board?",
        answer: "I translate cyber risk into business impact by focusing on operational resilience, regulatory exposure, financial implications, and recovery readiness. I provide trend-based reporting using KPIs and KRIs, summarize critical risks, outline mitigation progress, highlight emerging threats, and clearly communicate areas requiring executive decision-making or investment."
      }
    ],
    tables: [
      {
        headers: ["Risk Event", "Impact Score", "Likelihood", "Active Mitigation Control"],
        rows: [
          ["Enterprise Ransomware Attack", "Critical", "High", "Immutable backups + EDR behavioral detection"],
          ["Primary ISP WAN Link Failure", "High", "Medium", "Secondary Dedicated Internet + Auto Route Failover"],
          ["Administrative Account Abuse", "High", "Medium", "Privileged Access Management (PAM) + Multi-Factor Auths"]
        ],
        caption: "NIST-Style Risk Register Framework Matrix"
      },
      {
        headers: ["Enterprise System", "Recovery Time Objective (RTO)", "Recovery Point Objective (RPO)"],
        rows: [
          ["ERP Core Financial Database", "2 Hours", "15 Minutes"],
          ["Corporate Communication / Email", "8 Hours", "1 Hour"],
          ["Standard Operational CCTV Archive", "72 Hours", "24 Hours"]
        ],
        caption: "Business Impact Analysis (BIA) Recovery Coordinates"
      }
    ]
  },
  {
    id: "cis-advanced",
    name: "MODULE 2 — CIS CONTROLS: REAL ENTERPRISE IMPLEMENTATION",
    focusArea: "Technical Security Governance",
    shortDesc: "Vulnerability Management lifecycles, Patch Governance, EDR, PAM, Hardening baselines, and Cloud Security.",
    longDesc: "This is the technical execution layer of cyber governance. While NIST CSF orchestrates high-level risk, CIS Controls represent the hands-on engineering standards that mitigate up to 85% of modern automated cyberattacks.",
    corePurpose: "To deploy, enforce, and continuously audit technical baseline controls across directories, endpoints, cloud hosts, and networks.",
    sections: [
      {
        id: "cis-vuln-lifecycle",
        title: "1. The Vulnerability Management Lifecycle",
        focus: "Discovering, scanning, prioritizing, remediating, and validating system exposures.",
        definition: "Vulnerability management is not just running patch scripts. It is a continuous lifecycle that prioritizes vulnerabilities based on threat intelligence and asset criticality.",
        bullets: [
          "STEP 1 (Asset Discovery): Continuous passive and active scanning to know all active network devices.",
          "STEP 2 (Scanning): Run scheduled vulnerability scans (e.g. Nessus, Qualys) across databases and servers.",
          "STEP 3 (Prioritization): Rate risks using CVSS, exploit availability, external exposure, and asset criticality.",
          "STEP 4 (Remediation): Patch operating systems, critical business applications, and network firmware.",
          "STEP 5 (Validation): Execute immediate rescan to confirm patches are properly applied and vulnerability closed."
        ]
      },
      {
        id: "cis-patch-gov",
        title: "2. Patch Governance & EDR Architecture",
        focus: "Enforcing update guidelines without risking operational outages.",
        definition: "Unplanned patches can break systems, causing downtime. Structured patch governance secures system stability, while EDR provides threat detection when perimeters fail.",
        bullets: [
          "Establish standard patch testing schedules, staging updates in testing networks before CAB approvals.",
          "Deploy behavioral Endpoint Detection & Response (EDR/XDR) platforms (e.g. CrowdStrike, SentinelOne) on all endpoints.",
          "EDR provides behavioral heuristics, memory protection, threat hunting, and automated isolation capabilities."
        ]
      },
      {
        id: "cis-pam-mfa",
        title: "3. Privileged Access Management (PAM) & MFA Strategy",
        focus: "Securing administrative credentials and managing conditional user access.",
        definition: "Administrative accounts are the primary targets for attackers. Access controls must isolate administrative power and verify identities continuously.",
        bullets: [
          "Enforce PAM to secure domain admin, database root, and cloud dashboard administrative roles.",
          "Require phishing-resistant MFA and conditional access parameters (checking device health and user geolocation) across remote portals.",
          "Remove permanent administrative access; admins must request elevate permissions per task, generating full audit trails."
        ]
      },
      {
        id: "cis-hardening",
        title: "4. Secure Configurations, Hardening & Asset Classification",
        focus: "Standardizing security settings and organizing data based on sensitivity.",
        definition: "Systems must be hardened to reduce attack surfaces. Hardening disables unnecessary ports and legacy protocols, while classification aligns protective budgets with data sensitivity.",
        bullets: [
          "Disable outdated and insecure protocols (e.g. SMBv1, unencrypted RDP, unused router ports).",
          "Classify enterprise data pools into Public, Internal, Confidential, and Restricted categories.",
          "Establish automated cloud posture management (CSPM) to continually audit cloud storage configurations."
        ]
      }
    ],
    qnas: [
      {
        id: "cis-adv-q1",
        question: "How do you prioritize vulnerabilities?",
        answer: "I prioritize vulnerabilities based on exploitability, asset criticality, external exposure, operational impact, and threat intelligence. Critical internet-facing systems and actively exploited vulnerabilities receive immediate attention while balancing remediation against business continuity requirements."
      }
    ]
  },
  {
    id: "itil-advanced",
    name: "MODULE 3 — ITIL ENTERPRISE OPERATIONS LEADERSHIP",
    focusArea: "Operational Stability & Service Governance",
    shortDesc: "SLA vs KPI vs OLA, Major Incident Management, Service Desk Maturity, CMDB dependencies, CAB, and RCA.",
    longDesc: "ITIL governs the operational delivery of technology. This module focuses on standardizing processes to ensure maximum system uptime, controlled system modifications, and systematic root-cause resolutions.",
    corePurpose: "To guarantee stable, reliable, and available IT service delivery that meets the strategic uptime targets of the organization.",
    sections: [
      {
        id: "itil-sla-ola",
        title: "1. Service Agreements: SLA vs KPI vs OLA",
        focus: "Defining operational targets and measuring technology delivery.",
        definition: "A mature IT department is defined by clear targets. Aligning customer SLAs with internal team OLAs guarantees that technical units work in harmony.",
        bullets: [
          "SLA (Service Level Agreement): Contractual agreement with the business (e.g. 99.9% uptime, P1 resolved within 2 hours).",
          "KPI (Key Performance Indicator): Metric measuring performance (e.g. Mean Time to Restore - MTTR, First Contact Resolution %).",
          "OLA (Operational Level Agreement): Internal agreement between support teams (e.g. network team restores server links in 30 mins)."
        ]
      },
      {
        id: "itil-major-incident",
        title: "2. Major Incident & Service Desk Maturity",
        focus: "Coordinating incident response during outages and driving operational maturity.",
        definition: "During outages, communication becomes as important as technical recovery. Mature service desks transition from reactive logging to predictive analytics.",
        bullets: [
          "Define major incident procedures: establish technical bridges, assign communication leads, and manage escalations.",
          "Maturity Levels: Level 1 (Reactive support), Level 2 (Ticket-driven), Level 3 (Knowledge-based), Level 4 (Predictive analytics).",
          "Document known errors (KEDB) containing workarounds, enabling first-contact resolution for recurring issues."
        ]
      },
      {
        id: "itil-cmdb-cab-rca",
        title: "3. CMDB, CAB Change Control & Root Cause Analysis (RCA)",
        focus: "Tracking dependencies, reviewing change risks, and determining actual root causes.",
        definition: "Unmanaged changes cause most IT outages. CMDB tracks system relationships, CAB evaluates risk before deployments, and RCA prevents failures from recurring.",
        bullets: [
          "Maintain a CMDB (Configuration Management Database) mapping dependencies (e.g. which databases host which SaaS applications).",
          "CAB (Change Advisory Board) reviews change plans, testing outcomes, and rollback procedures before updates go live.",
          "Perform blame-free RCAs analyzing people, processes, technology, and governance gaps rather than blaming individuals."
        ]
      }
    ],
    qnas: [
      {
        id: "itil-adv-q1",
        question: "Tell us about a major outage you managed.",
        answer: "During a critical outage, my first priority was assessing business impact and activating incident management procedures. I coordinated technical teams, established communication channels with stakeholders, prioritized restoration of critical services, and ensured executive visibility throughout the incident lifecycle. After recovery, I led a root cause analysis and implemented preventive controls to reduce recurrence risk."
      }
    ]
  },
  {
    id: "cobit-advanced",
    name: "MODULE 4 — COBIT: BOARDROOM GOVERNANCE",
    focusArea: "Enterprise IT Governance",
    shortDesc: "Oversight models, Governance vs Management, Risk alignment, Audit readiness, and strategic planning.",
    longDesc: "If ITIL manages day-to-day operations, COBIT governs the entire enterprise technology landscape. This module aligns technology investments with business strategy, ensuring compliance, value, and robust accountability.",
    corePurpose: "To ensure technology investment delivers maximum value, compliance mandates are met, and IT strategy aligns with C-suite objectives.",
    sections: [
      {
        id: "cobit-gvm-advanced",
        title: "1. Governance vs Management",
        focus: "Setting direction, oversight, and monitoring compliance vs operational execution.",
        definition: "Governance is the strategic steering wheel; management is the engine. Confounding these roles weakens accountability and introduces operational drift.",
        bullets: [
          "Governance (Board & CIO): Sets risk appetites, evaluates strategic options, directs investments, and monitors compliance.",
          "Management (IT Managers & Engineers): Runs helpdesks, configures hardware, deploys code, and manages daily staff actions.",
          "Establish independent reporting structures to ensure management executes technology within the board's risk thresholds."
        ]
      },
      {
        id: "cobit-audit-planning",
        title: "2. Strategic Planning, Risk Alignment & Audit Readiness",
        focus: "Creating long-term technology roadmaps and ensuring strict compliance.",
        definition: "Mature organizations maintain continuous audit readiness, keeping comprehensive logs and records to simplify regulatory checks.",
        bullets: [
          "Create a 3-5 year strategic IT roadmap aligning cloud, cybersecurity, operations, and AI with business growth goals.",
          "Maintain audit-ready documentation: access reviews, change approvals, policy evidence, and network maps.",
          "Speak to executive boards using risk-reduction outcomes. Say: 'Containment procedures minimized broader business disruption' rather than 'The core switch had spanning-tree instability.'"
        ]
      }
    ],
    qnas: [
      {
        id: "cobit-adv-q1",
        question: "How do you align IT with business?",
        answer: "I align IT with business objectives through governance frameworks, stakeholder engagement, KPI-driven service delivery, risk-based prioritization, and ensuring technology investments directly support operational efficiency, resilience, compliance, and organizational growth."
      }
    ]
  },
  {
    id: "zerotrust-advanced",
    name: "MODULE 5 — ZERO TRUST ARCHITECTURE",
    focusArea: "Modern Enterprise Security",
    shortDesc: "Identity as the perimeter, Conditional Access, Microsegmentation, and ZTNA configurations.",
    longDesc: "Legacy networks assumed internal users were safe. Zero Trust invalidates this assumptions, verifying every access request continuously based on context, identity, and device health.",
    corePurpose: "To secure modern hybrid cloud environments, prevent lateral threat movements, and protect corporate data pools.",
    sections: [
      {
        id: "zt-identity-perimeter",
        title: "1. Identity-First Perimeter & Conditional Access",
        focus: "Replacing standard local networks with identity-centric perimeters.",
        definition: "Since staff access platforms from anywhere, identity becomes the new boundary. Access is evaluated continuously, adapting to user, device, and location geographics.",
        bullets: [
          "Deploy conditional access rules checking device compliance, login locations, and behavioral risk scores before granting portal access.",
          "Verify user identities continuously using single sign-on (SSO) and adaptive multi-factor authentication (MFA).",
          "Protect directories from credential harvesting, blocking automated brute-force attempts at the gateway."
        ]
      },
      {
        id: "zt-segmentation-ztna",
        title: "2. Microsegmentation & ZTNA (Zero Trust Network Access)",
        focus: "Replacing legacy VPNs and dividing the network into isolated enclaves.",
        definition: "Flat networks allow compromise to spread. Segmenting networks ensures that if one asset is breached, the attacker remains isolated inside a tiny enclave.",
        bullets: [
          "Replace standard remote access VPNs with ZTNA, granting access only to specific authorized applications.",
          "Implement microsegmentation: separate databases, hypervisors, and SaaS application segments from standard corporate workstations.",
          "Zero Trust assumes the local network is unsecure, continuously verifying all cross-subnet communications."
        ]
      }
    ],
    qnas: [
      {
        id: "zt-adv-q1",
        question: "What is Zero Trust?",
        answer: "Zero Trust is a modern cybersecurity architecture based on continuous verification of users, devices, and applications regardless of network location. It focuses on least privilege access, identity-centric security, segmentation, and continuous monitoring to reduce lateral movement and minimize breach impact."
      }
    ]
  },
  {
    id: "socsiem-advanced",
    name: "MODULE 6 — SOC / SIEM / XDR / SOAR",
    focusArea: "Advanced Detection & Response",
    shortDesc: "SOC Maturity levels, Detection Engineering, Threat Hunting, MITRE ATT&CK, and alert fatigue mitigation.",
    longDesc: "A Security Operations Center (SOC) provides threat visibility and response coordination, using SIEM, XDR, and SOAR software to automate threat containments and reduce containment times.",
    corePurpose: "To achieve complete security visibility, detect anomalies immediately, and automate containment routines to eliminate response delays.",
    sections: [
      {
        id: "soc-maturity-hunting",
        title: "1. SOC Maturity & Detection Engineering",
        focus: "Moving from reactive logging to proactive threat hunting and alert tuning.",
        definition: "A mature SOC does not just wait for alerts. Active threat hunting proactively searches for hidden indicators of compromise across databases and networks.",
        bullets: [
          "Maturity Levels: Basic SOC (reactive alert checking), Mature SOC (threat hunting + automation), Elite SOC (predictive threat intelligence).",
          "Implement Detection Engineering: design high-fidelity detection rules, minimizing false positives that cause analyst alert fatigue.",
          "Map detection telemetry to the MITRE ATT&CK framework to catalog attacker behaviors, tactics, and techniques."
        ]
      },
      {
        id: "soc-siem-soar",
        title: "2. XDR vs SIEM vs SOAR",
        focus: "Combining security technologies to accelerate incident response.",
        definition: "SIEM aggregates enterprise logs, XDR provides integrated multi-platform detection, and SOAR automates containment playbooks.",
        bullets: [
          "SIEM: Collects and correlates event logs across servers, Active Directories, firewalls, and SaaS portals.",
          "XDR (Extended Detection & Response): Provides integrated security telemetry across email, identity, endpoints, and cloud workloads.",
          "SOAR (Security Orchestration, Automation, and Response): Automates enrichment, containment, and workflows to drastically reduce MTTR."
        ]
      }
    ],
    qnas: [
      {
        id: "soc-adv-q1",
        question: "What makes an effective SOC?",
        answer: "An effective SOC combines skilled analysts, centralized visibility, strong detection engineering, threat intelligence, clear incident response procedures, and continuous improvement. Technology alone is not enough; operational maturity and response coordination are equally critical."
      }
    ]
  },
  {
    id: "leadership-advanced",
    name: "MODULE 7 — EXECUTIVE CYBERSECURITY LEADERSHIP",
    focusArea: "Strategic Security Leadership",
    shortDesc: "Budgeting justifications, Corporate Security Culture, crisis coordination, and balancing security with operations.",
    longDesc: "Leadership is the bridge between security requirements and business enablement. CIOs and CISOs balance corporate defense with operational productivity, justifying security budgets in terms of business enablement.",
    corePurpose: "To align cybersecurity strategies with corporate priorities, direct security culture, and lead organizations through active crises.",
    sections: [
      {
        id: "ldr-budget-culture",
        title: "1. Cybersecurity Budgeting & Security Culture",
        focus: "Justifying technology investments and building organizational accountability.",
        definition: "Cybersecurity is a business risk concern, not just an IT issue. Mature security budgets are justified by risk reduction, operational resilience, and compliance.",
        bullets: [
          "Justify security budgets using financial risk metrics, operational uptime guarantees, and the cost of inaction.",
          "Build an enterprise security culture: execute continuous staff training and verify executive sponsorship.",
          "Establish transparent accountability models so that department heads share ownership of security risks."
        ]
      },
      {
        id: "ldr-crisis-balance",
        title: "2. Crisis Incident Leadership & Operational Balance",
        focus: "Guiding organizations through active incidents while enabling business enablement.",
        definition: "During active cyber crises, leaders must stay calm, coordinate technical teams, communicate transparently with stakeholders, and protect business continuity.",
        bullets: [
          "Establish incident coordination teams linking IT teams with legal, public relations, and C-suite executives.",
          "Balance security controls with operational enablement; over-restricting access blocks productivity, while weak rules raise risks.",
          "Convert incident lessons learned into permanent security enhancements and updated business continuity plans."
        ]
      }
    ],
    qnas: [
      {
        id: "ldr-adv-q1",
        question: "How do you align cybersecurity investments with business goals?",
        answer: "I justify security investments by linking controls directly to business enablement. I focus on reducing financial risk, protecting customer trust, ensuring regulatory compliance, and guaranteeing operational uptime, demonstrating how security safeguards the company's growth and strategy."
      }
    ]
  },
  {
    id: "scenarios-advanced",
    name: "MODULE 8 — REAL-WORLD SCENARIOS",
    focusArea: "Executive-Level Incident Leadership",
    shortDesc: "Ransomware active containments, WAN/ISP connection failures, and failed firewall rollback governance.",
    longDesc: "This module maps actual incident management responses. Reviewing these scenarios equips leaders with the operational checklists and strategic workflows to handle active security incidents.",
    corePurpose: "To establish rapid incident response playbooks for high-impact technical outages and active cybersecurity breaches.",
    sections: [
      {
        id: "scen-ransomware",
        title: "1. Active Ransomware Attack Containment",
        focus: "Stopping threat spread, protecting backups, and executing recovery playbooks.",
        definition: "Weak answers focus only on technical fixes (e.g. 'unplug the server'). Mature executive responses coordinate isolation, analysis, legal obligations, and business continuity.",
        bullets: [
          "Activate the incident response plan immediately, establishing secure out-of-band communication bridges.",
          "Isolate compromised networks and servers, disabling Active Directory accounts to block lateral spreading.",
          "Validate backup integrity, coordinate with digital forensics teams, and brief legal counsel regarding compliance notification obligations.",
          "Engage executive leaders, evaluate business impact, and execute systematic disaster recovery restoration scripts."
        ]
      },
      {
        id: "scen-isp-firewall",
        title: "2. ISP WAN Link Failure & Failed Firewall Change",
        focus: "Triggering automatic route failover and executing rollbacks.",
        definition: "Outages require rapid coordination. Failovers must activate automatically, and failed changes must be rolled back immediately under strict change controls.",
        bullets: [
          "ISP Failure: Monitor route availability; automate WAN traffic routing to secondary fiber connections while notifying ISP accounts.",
          "Failed Firewall Update: Enforce immediate CAB-approved rollback procedures to restore service backends.",
          "Conduct detailed post-incident reviews to identify process or design gaps and update failover checklists."
        ]
      }
    ],
    qnas: [
      {
        id: "scen-adv-q1",
        question: "How would you handle an active ransomware attack?",
        answer: "I would activate incident response procedures, isolate affected systems to contain lateral movement, assess operational impact, engage executive stakeholders, validate backup integrity, coordinate forensic investigation, and prioritize restoration of critical services while ensuring regulatory and communication obligations are addressed."
      }
    ]
  },
  {
    id: "comm-advanced",
    name: "MODULE 9 — HOW TO SOUND LIKE A SENIOR LEADER",
    focusArea: "Executive Communication Mastery",
    shortDesc: "Translating technical language, using boardroom key words, and senior leadership vocabulary.",
    longDesc: "Boardroom authority is built on clear communication. This module focuses on translating technical infrastructure issues into C-suite metrics—focusing on risk, resilience, and operational impact.",
    corePurpose: "To translate engineering-level jargon into boardroom-defensible strategic coordination.",
    sections: [
      {
        id: "comm-translation",
        title: "1. Jargon Translations: Technical vs Executive",
        focus: "Replacing dense operational terminology with C-level coordinate metrics.",
        definition: "Senior leaders do not describe technical components. They describe system status in terms of service availability, operational impact, and risk reduction.",
        bullets: [
          "Technical: 'The hypervisor cluster lost heartbeat connectivity and datastore mounts dropped.'",
          "Executive: 'We experienced infrastructure instability affecting service availability, and recovery procedures were initiated immediately to minimize operational disruption.'",
          "Technical: 'The core switch had spanning-tree loop issues and packets were dropping.'",
          "Executive: 'We experienced network instability affecting operational availability, but containment procedures minimized broader business disruption.'"
        ]
      },
      {
        id: "comm-phrases",
        title: "2. Key Boardroom Vocabulary & Key Phrases",
        focus: "Speaking with strategic vocabulary to command executive trust.",
        definition: "Integrate strategic phrases that emphasize risk, resilience, and continuity, showing that you manage corporate assets, not just technology systems.",
        bullets: [
          "Focus on terminology like: Business Impact, Operational Resilience, Risk Exposure, Governance Alignment, Service Availability, and Strategic Priorities.",
          "Use risk-based vocabulary: 'This control mitigates operational exposures, protecting corporate compliance frameworks.'",
          "Demonstrate executive ownership: 'I align technology roadmaps with long-term business goals, monitoring compliance trends across all subnets.'"
        ]
      }
    ],
    qnas: [
      {
        id: "comm-adv-q1",
        question: "How would you describe a critical database failure to a CEO?",
        answer: "I would report that we experienced a database synchronization failure that temporarily impacted transactional availability. I would immediately confirm that data integrity remains intact, that our technical teams are actively executing our recovery playbooks, and provide a clear ETA for complete service restoration."
      }
    ],
    tables: [
      {
        headers: ["Technical Jargon (Avoid)", "Executive Language (Use)"],
        rows: [
          ["'The hypervisor cluster lost heartbeat connectivity'", "'We experienced infrastructure instability affecting service availability, and recovery procedures were initiated immediately'"],
          ["'The core switch had spanning-tree loop issues'", "'We experienced network instability affecting operational availability, but containment procedures minimized broader business disruption'"],
          ["'I patched the database schema with Nessus scripts'", "'We executed risk-prioritized vulnerability remediation across core application pools to protect compliance and transactional integrity'"]
        ],
        caption: "Boardroom Vocabulary Translation Matrix"
      }
    ]
  },
  {
    id: "mindset-advanced",
    name: "MODULE 10 — THE MODERN HEAD OF IT MINDSET",
    focusArea: "Enterprise Leadership Evolution",
    shortDesc: "Global executive responsibility matrix across Cyber, Cloud, AI, Finance, Operations, and Compliance.",
    longDesc: "The modern technology director is an enterprise leader. They manage technology portfolios, oversee governance, coordinate compliance, and align investments with organizational priorities.",
    corePurpose: "To map the advanced cross-functional responsibilities of the modern technology executive.",
    sections: [
      {
        id: "mnd-matrix",
        title: "1. The Technology Director Responsibility Matrix",
        focus: "Mapping advanced governance coordinates across all corporate vectors.",
        definition: "Technology leadership spans across cybersecurity, financials, vendor management, compliance, and strategic team leadership.",
        bullets: [
          "Cybersecurity: Managing corporate risks, enforcing security baselines, and building operational resilience.",
          "Cloud & Cost: Governing SaaS tools, tracking cloud cost allocations, and optimizing platform performance.",
          "AI Governance: Managing AI risk, monitoring ethical tool adoption, and driving digital transformation.",
          "Operations: Guaranteeing high service availability, uptime targets, and robust disaster recovery readiness.",
          "Compliance: Securing compliance with local frameworks (e.g. Kenya DPA) and international frameworks (e.g. GDPR, ISO 27001)."
        ]
      }
    ],
    qnas: [
      {
        id: "mnd-adv-q1",
        question: "What makes a strong Head of IT in modern enterprise environments?",
        answer: "A strong Head of IT must combine: technical understanding, operational governance, cybersecurity leadership, financial accountability, vendor management, strategic thinking, compliance awareness, and organizational communication. Modern ICT leadership is no longer only about infrastructure management. It is about protecting organizational operations, enabling business continuity, governing risk, supporting growth, and ensuring technology aligns with long-term organizational objectives and resilience."
      }
    ]
  }
];

export const masterFrameworkInterviewQuestion = {
  question: "How would you modernize and secure an organization’s IT environment?",
  answer: "I would start with governance and risk assessment using frameworks such as COBIT and NIST CSF to establish visibility, accountability, and maturity baselines. I would strengthen technical controls through CIS Controls, modernize security architecture using Zero Trust principles, improve operational stability through ITIL practices, and enhance monitoring and response capabilities through a mature SOC and SIEM strategy. My focus would be balancing security, operational resilience, business continuity, compliance, and user productivity while aligning technology investments with organizational goals."
};

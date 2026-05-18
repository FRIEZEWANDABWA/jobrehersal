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
}

export const modernFrameworksData: FrameworkModel[] = [
  {
    id: "nist",
    name: "NIST CSF 2.0",
    focusArea: "Modern Cyber Maturity",
    shortDesc: "Strategic model for managing corporate cyber risk and standardizing resilience.",
    longDesc: "The NIST Cybersecurity Framework (CSF) is one of the most respected cybersecurity governance frameworks globally. Rather than being a checklist, it is a risk-based architectural lifecycle that translates technical vulnerability into C-Suite exposure coordinates.",
    corePurpose: "To answer with absolute confidence: 'How mature is our cybersecurity posture, who owns the risks, and are our investments aligned with business continuity?'",
    sections: [
      {
        id: "nist-govern",
        title: "1. GOVERN (Executive Direction)",
        focus: "Cyber governance, risk ownership, policies, leadership accountability, and boardroom visibility.",
        definition: "Governance is the steering wheel. It mandates who owns the risk, specifies operational accountability, and aligns security strategy with business objectives.",
        bullets: [
          "Establish dedicated Risk Registers mapping operational systems to boardroom liability metrics.",
          "Draft and publish comprehensive information security policies covering SaaS tools, multi-site infrastructure, and shadow IT.",
          "Construct executive security steering groups linking ICT operations to legal, finance, and CEO leadership teams.",
          "Ensure board-level reporting templates are standardized, metrics-driven, and focused on risk posture rather than logs."
        ]
      },
      {
        id: "nist-identify",
        title: "2. IDENTIFY (Asset & Risk Visibility)",
        focus: "Understand assets, systems, applications, data pools, vendors, and shadow IT.",
        definition: "You cannot protect what you do not know exists. Identification establishes a centralized inventory of resources, exposing forgotten servers and rogue SaaS platforms.",
        bullets: [
          "Compile a real-time hardware asset registry (servers, routers, remote devices, CCTV, IoT sensors).",
          "Map the corporate software and SaaS landscape (Office RnD, Zoho, Google Workspace, billing platforms).",
          "Execute Business Impact Analysis (BIA) to classify critical vs non-critical data processing flows.",
          "Formulate third-party vendor risk assessment programs with detailed compliance ratings."
        ]
      },
      {
        id: "nist-protect",
        title: "3. PROTECT (Attack Surface Reduction)",
        focus: "Preventing active intrusions via strong baseline controls.",
        definition: "Protection forms the defensive shield, mitigating threats through automated access rules, authentication mechanisms, and continuous staff security awareness campaigns.",
        bullets: [
          "Enforce mandatory multi-factor authentication (MFA) across all SaaS and infrastructure portals.",
          "Implement Role-Based Access Control (RBAC) and Least Privilege architectures across enterprise directories.",
          "Architect secure network segmentation isolates (e.g. CCTV subnet separated from client Wi-Fi and databases).",
          "Activate continuous immutable Veeam cloud backup engines with tested air-gapped protection."
        ]
      },
      {
        id: "nist-detect",
        title: "4. DETECT (Threat and Anomaly Discovery)",
        focus: "Centralized logging, real-time alerting, behavioral analysis, and threat hunting.",
        definition: "Detection reduces attacker dwell time. By collecting logs in real-time and running alert correlations, organizations identify security incidents before massive data exfiltration occurs.",
        bullets: [
          "Deploy Security Information and Event Management (SIEM) tools to collect centralized platform logs.",
          "Establish continuous monitoring routines (SOC) looking for atypical login geolocations.",
          "Measure Mean Time to Detect (MTTD) to continually refine detection rules and telemetry scripts.",
          "Run recurring external and internal vulnerability scans to catch open ports and system misconfigurations."
        ]
      },
      {
        id: "nist-respond",
        title: "5. RESPOND (Incident Containment)",
        focus: "Incident Response (IR) execution, containment playbooks, and stakeholder communication.",
        definition: "Response is about speed and coordination. When an attack happens, technical, legal, and operational actors must execute coordinated containments to minimize organizational fallout.",
        bullets: [
          "Maintain clear incident escalation checklists detailing precise technical team lead roles.",
          "Establish isolations scripts to instantly disconnect compromised devices or directory accounts.",
          "Standardize external communication templates (ODPC notices, client briefs, and PR press statements).",
          "Execute post-incident root-cause telemetry reviews to isolate how perimeter gaps occurred."
        ]
      },
      {
        id: "nist-recover",
        title: "6. RECOVER (Operational Resilience)",
        focus: "Disaster Recovery (DR) and business continuity execution.",
        definition: "Recovery restores business operations safely, utilizing lessons learned from past incidents to permanently harden security frameworks and operational baselines.",
        bullets: [
          "Execute periodic Disaster Recovery (DR) restoration drills for databases, SaaS configurations, and backups.",
          "Calculate and audit Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO).",
          "Enforce formal post-mortem review boards to convert response incidents into active policy patches.",
          "Audit hot-failover setups for critical connectivity networks, redundancy ISPs, and power architectures."
        ]
      }
    ],
    qnas: [
      {
        id: "nist-q1",
        question: "How would you assess cybersecurity maturity?",
        answer: "I would use a framework-driven approach such as NIST CSF. I would assess governance, asset visibility, protection controls, detection capability, incident response maturity, and recovery readiness. I would also evaluate policy maturity, user awareness, third-party risks, and executive reporting to identify gaps and prioritize remediation based on business risk."
      },
      {
        id: "nist-q2",
        question: "What is the biggest cybersecurity challenge today?",
        answer: "The biggest challenge is no longer just technology. It is visibility, governance, and response speed. Organizations now operate hybrid environments with cloud, remote users, vendors, and mobile devices. Attack surfaces have expanded faster than governance and monitoring maturity."
      }
    ]
  },
  {
    id: "cis",
    name: "CIS Controls",
    focusArea: "Technical Security Execution",
    shortDesc: "Highly practical, step-by-step security controls designed to systematically reduce attack surfaces.",
    longDesc: "While NIST CSF provides high-level risk orchestration, the Center for Internet Security (CIS) Controls provide exact technical blueprints. Think of CIS as the 'hands-on keyboard' implementation checklist that blocks the majority of modern automated cyberattacks.",
    corePurpose: "To systematically configure, deploy, audit, and enforce bulletproof security baseline settings across every endpoint, directory, and database.",
    sections: [
      {
        id: "cis-asset",
        title: "1. Enterprise Asset Management",
        focus: "Discovering and auditing all physical, virtual, and cloud assets.",
        definition: "You cannot defend an asset you do not know about. Unknown endpoints, rogue switches, or stale virtual machines become immediate backdoor entry points for threat actors.",
        bullets: [
          "Deploy active and passive network scanning tools to discover all active devices.",
          "Maintain a centralized hardware asset directory, mapping physical ownership and locations.",
          "Enforce MAC-filtering or Network Access Control (NAC) to block unauthorized devices from joining routers.",
          "Regularly scan and purge stale, unmanaged, or orphan virtual servers from corporate hosting subnets."
        ]
      },
      {
        id: "cis-vuln",
        title: "2. Vulnerability Management",
        focus: "Continuous scanning, threat prioritization, and patch automation.",
        definition: "Unpatched systems are the lowest-hanging fruit for attackers. A mature vulnerability program continuously scans, ranks, and patches high-priority security flaws.",
        bullets: [
          "Implement automated operating system and third-party software patch schedules.",
          "Establish high-frequency vulnerability scanning schedules across all critical databases.",
          "Configure risk scoring (e.g. CVSS ratings) to prioritize immediate hotfixes for zero-day exploits.",
          "Set up formal patch rollback guidelines to secure server availability during system maintenance."
        ]
      },
      {
        id: "cis-access",
        title: "3. Access Control & Privilege Management",
        focus: "Least privilege, role-based access, and administrative isolation.",
        definition: "Compromised credentials are a leading breach root cause. Enforcing absolute least privilege isolates administrative authority and blocks lateral movement.",
        bullets: [
          "Establish strict Role-Based Access Control (RBAC) schemas in directory databases.",
          "Enforce multi-factor authentication (MFA) on all administrative systems.",
          "Isolate domain admin accounts; admins must use standard accounts for email and daily web browsing.",
          "Implement Privileged Access Management (PAM) tools with session logging for third-party vendors."
        ]
      },
      {
        id: "cis-monitor",
        title: "4. Security Monitoring & Logging",
        focus: "Centralized logs, alert correlation, and auditable event trails.",
        definition: "Silent breaches persist because logs are uncollected or ignored. Centralized log aggregation enables real-time event correlation and high-speed threat discovery.",
        bullets: [
          "Configure active security event logging on all routers, switches, firewalls, and domain controller systems.",
          "Stream all system logs to a centralized, write-once log vault to protect auditable evidence.",
          "Implement real-time alert rules for anomalous behaviors like multiple simultaneous failed login attempts.",
          "Establish regular log review cadence to spot dormant indicators of threat compromises."
        ]
      },
      {
        id: "cis-backup",
        title: "5. Backup & Recovery Resilience",
        focus: "Immutable storage, offline backups, and restoration drills.",
        definition: "Backups are your ultimate insurance card. If systems are compromised by ransomware, immutable and air-gapped backups ensure operational recovery without extortion payments.",
        bullets: [
          "Configure daily incremental and weekly full system backups streamed to independent cloud portals.",
          "Activate immutable storage blocks that prevent backups from being edited or deleted by compromised admins.",
          "Run monthly physical system restoration tests to verify the integrity and speed of backups.",
          "Store copies of emergency disaster recovery protocols offline in physical, secure binders."
        ]
      }
    ],
    qnas: [
      {
        id: "cis-q1",
        question: "What are the first security controls you would prioritize?",
        answer: "I would prioritize asset visibility, vulnerability management, MFA enforcement, centralized logging, endpoint protection, and backup resilience because they provide the highest immediate reduction in organizational risk."
      }
    ]
  },
  {
    id: "itil",
    name: "ITIL",
    focusArea: "Operations Governance",
    shortDesc: "The global gold-standard framework for managing, controlling, and delivering highly stable IT services.",
    longDesc: "ITIL (Information Technology Infrastructure Library) shifts IT from a 'reactive fire-fighting' center into a highly professional, service-oriented business asset. It emphasizes standardizing operational paths, tracking service targets, and managing system changes without risking enterprise downtime.",
    corePurpose: "To establish structured operational workflows that guarantee high service uptime, fast recovery from failures, and safe implementation of system updates.",
    sections: [
      {
        id: "itil-incident",
        title: "Incident Management (Restore Service)",
        focus: "Speed, service restoration, minimal business disruption, and SLA tracking.",
        definition: "An incident is an unplanned interruption to an IT service. The sole objective of incident management is restoring normal operations as fast as possible, using temporary workarounds if needed.",
        bullets: [
          "Establish a centralized helpdesk portal with clear tier-based escalation paths.",
          "Set up Service Level Agreements (SLAs) dictating maximum allowed response and resolution times.",
          "Utilize temporary hotfixes or workarounds (e.g. rebooting a server) to restore access immediately.",
          "Document incident timelines and resolution steps to populate internal troubleshooting wikis."
        ]
      },
      {
        id: "itil-problem",
        title: "Problem Management (Prevent Recurrence)",
        focus: "Root-cause analysis, trend monitoring, and preventive maintenance.",
        definition: "A problem is the underlying cause of one or more incidents. Problem management performs deep root-cause investigations to find out why a system keeps failing, implementing permanent structural fixes.",
        bullets: [
          "Run formal post-incident root-cause analyses (e.g. 5-Whys methodology) for high-impact outages.",
          "Correlate recurring incident trends to catch systemic hardware or software issues.",
          "Publish Known Error Databases (KEDB) containing verified workarounds for active problems.",
          "Proactively coordinate with vendors to resolve code-level bugs or infrastructure vulnerabilities."
        ]
      },
      {
        id: "itil-change",
        title: "Change Enablement (Control Risk)",
        focus: "Risk assessment, rollback plans, CAB approvals, and change scheduling.",
        definition: "Most corporate IT outages are caused by rushed, unapproved, or poorly tested changes. Change Enablement establishes a risk review process to ensure all updates are secure before deployment.",
        bullets: [
          "Implement a formal Request for Change (RFC) portal to track all system updates.",
          "Convene the Change Advisory Board (CAB) to evaluate business risks for high-impact changes.",
          "Require a fully tested, detailed rollback plan for every proposed production deployment.",
          "Maintain a shared change calendar to prevent scheduling major updates during high-traffic business hours."
        ]
      }
    ],
    qnas: [
      {
        id: "itil-q1",
        question: "What is the difference between incident and problem management?",
        answer: "Incident management focuses on restoring service as quickly as possible to minimize business disruption, while problem management focuses on identifying and eliminating the root cause of recurring incidents."
      }
    ]
  },
  {
    id: "cobit",
    name: "COBIT",
    focusArea: "Executive IT Governance",
    shortDesc: "High-level framework aligning enterprise technology strategy directly with business value and corporate goals.",
    longDesc: "If ITIL manages operations, COBIT governs the entire IT organization. Created by ISACA, COBIT ensures that technology investments deliver measurable value, business risks are actively managed, and transparent accountability maps exist across the C-suite.",
    corePurpose: "To bridge the gap between technical IT execution and corporate business strategy, ensuring technology decisions directly support company growth, compliance, and ROI.",
    sections: [
      {
        id: "cobit-align",
        title: "1. IT-Business Strategic Alignment",
        focus: "Value creation, KPI mapping, and portfolio management.",
        definition: "IT must not exist in a silo. COBIT ensures every IT project, server investment, or security tool directly supports a corporate business goal (e.g. expanding digital sales or safeguarding customer trust).",
        bullets: [
          "Map IT operational metrics to corporate business goals (e.g. system uptime mapped to customer retention).",
          "Establish C-Suite portfolio reviews to evaluate the financial ROI and business impact of IT investments.",
          "Develop technology roadmaps that adapt alongside changes in the company's long-term business strategy.",
          "Enforce transparent performance indicators (KPIs) to measure the value generated by IT operations."
        ]
      },
      {
        id: "cobit-gvm",
        title: "2. Governance vs Management",
        focus: "Direction and oversight vs execution and operation.",
        definition: "A critical COBIT principle. Governance sets the strategic direction, evaluates options, and monitors compliance, while Management executes the day-to-day operations under those guidelines.",
        bullets: [
          "Define a clear separation of duties: the board/IT steering committee governs, while IT managers execute.",
          "Governance sets risk thresholds, compliance mandates, and long-term business alignment targets.",
          "Management runs daily helpdesks, deploys systems, and manages staff resources to meet those targets.",
          "Establish independent audit lines to report execution compliance directly back to the governance board."
        ]
      },
      {
        id: "cobit-holistic",
        title: "3. The 7 Holistic Enablers",
        focus: "People, processes, organizational structures, policies, information, services, and culture.",
        definition: "Governance is not just about technology. COBIT identifies seven holistic enablers that must work together across the enterprise to achieve successful IT governance.",
        bullets: [
          "Align corporate culture, ethics, and security mindsets across all departments.",
          "Ensure transparent organizational structures exist with well-defined decision-making rights.",
          "Document streamlined processes that consistently transform input resources into strategic value.",
          "Optimize information flows to guarantee data is accurate, secure, and accessible to decision-makers."
        ]
      }
    ],
    qnas: [
      {
        id: "cobit-q1",
        question: "How do you align IT with business?",
        answer: "I align IT with business objectives through governance frameworks, stakeholder engagement, KPI-driven service delivery, risk-based prioritization, and ensuring technology investments directly support operational efficiency, resilience, compliance, and organizational growth."
      }
    ]
  },
  {
    id: "zerotrust",
    name: "Zero Trust",
    focusArea: "Modern Security Architecture",
    shortDesc: "Identity-centric security paradigm assuming all traffic is untrusted, regardless of location.",
    longDesc: "Traditional cybersecurity relied on the 'castle-and-moat' model—assuming anyone inside the corporate network was safe. Zero Trust invalidates this, operating on a single core architectural guideline: 'Never trust, always verify.'",
    corePurpose: "To prevent lateral movement by attackers, secure remote access, and contain the impact of any compromised credentials.",
    sections: [
      {
        id: "zt-verify",
        title: "1. Continuous Identity Verification",
        focus: "MFA, conditional access, and context-aware authentication.",
        definition: "Identity is the new perimeter. Every user, application, and device must be authenticated and authorized continuously, evaluating contextual risks like location and device health.",
        bullets: [
          "Deploy single sign-on (SSO) with mandatory adaptive multi-factor authentication (MFA).",
          "Configure conditional access rules that check if a user is logging in from an approved country or IP.",
          "Implement continuous session evaluation, prompting for re-authentication if risk parameters spike.",
          "Enforce cryptographically backed user identity models for all local and remote staff access."
        ]
      },
      {
        id: "zt-privilege",
        title: "2. Just-In-Time & Least Privilege Access",
        focus: "Minimizing attack surfaces and isolating privileged credentials.",
        definition: "Users should only be granted access to the specific resources they need to perform their current task, for the minimal time required, avoiding over-privileged directory configurations.",
        bullets: [
          "Establish automated Just-in-Time (JIT) access approval workflows for server administrators.",
          "Remove permanent administrative access; admins must request elevated permissions per task.",
          "Audit directory groups quarterly to discover and prune orphaned permissions or over-privileged staff.",
          "Implement strict role-based directories separating development, testing, and production environments."
        ]
      },
      {
        id: "zt-segment",
        title: "3. Network Microsegmentation",
        focus: "Isolating resources, security boundaries, and containing lateral movement.",
        definition: "If an attacker breaches one server, microsegmentation prevents them from hopping across to other databases. It divides the network into isolated, secure enclaves.",
        bullets: [
          "Implement software-defined perimeter firewalls to isolate critical database subnets.",
          "Configure separate VLAN subnets for CCTV systems, public Wi-Fi, and corporate workstations.",
          "Enforce application-to-application traffic security rules, blocking unapproved cross-talk.",
          "Deploy endpoint isolation tools that instantly detach suspect workstations from the local network."
        ]
      }
    ],
    qnas: [
      {
        id: "zt-q1",
        question: "What is Zero Trust?",
        answer: "Zero Trust is a modern cybersecurity architecture based on continuous verification of users, devices, and applications regardless of network location. It focuses on least privilege access, identity-centric security, segmentation, and continuous monitoring to reduce lateral movement and minimize breach impact."
      }
    ]
  },
  {
    id: "socsiem",
    name: "SOC / SIEM Models",
    focusArea: "Threat Monitoring Maturity",
    shortDesc: "The command center (SOC) and technology engine (SIEM) that provide real-time visibility and threat response.",
    longDesc: "A Security Operations Center (SOC) is the people and processes that monitor threats, while a Security Information & Event Management (SIEM) tool is the software engine that aggregates and correlates security logs from across the enterprise.",
    corePurpose: "To achieve complete security visibility, detect anomalous system behavior instantly, and automate containment routines to minimize threat dwell time.",
    sections: [
      {
        id: "soc-levels",
        title: "SOC Maturity Levels",
        focus: "Transitioning from basic logging to fully automated SOAR frameworks.",
        definition: "SOC maturity evaluates an organization's capability to discover and stop threats. Mature SOCs combine centralized logging with advanced automation to eliminate human delays during attacks.",
        bullets: [
          "Level 1 (Reactive): Mostly manual log checking; basic alerts with limited context or threat correlation.",
          "Level 2 (Centralized): Centralized SIEM actively collecting system event logs from all critical hosts.",
          "Level 3 (Advanced): Active threat intelligence feeds and user behavioral anomaly analytics integrated.",
          "Level 4 (Automated): Security Orchestration, Automation, and Response (SOAR) automatically isolating threats."
        ]
      },
      {
        id: "soc-siem-engine",
        title: "SIEM Anomaly & Event Correlation",
        focus: "Centralized logs, detection engineering, and alert tuning.",
        definition: "A SIEM (e.g. Splunk, Microsoft Sentinel) aggregates gigabytes of logs, running detection rules to spot patterns—such as a user downloading 1,000 files immediately after logging in from a new country.",
        bullets: [
          "Stream active security logs from firewalls, servers, active directories, and SaaS platforms to the SIEM.",
          "Develop custom detection rules to spot advanced multi-step attacks and lateral movements.",
          "Tune alert thresholds continuously to reduce false positives that cause security analyst fatigue.",
          "Implement long-term secure write-once archives to fulfill corporate regulatory compliance rules."
        ]
      },
      {
        id: "soc-metrics",
        title: "Key Performance Metrics",
        focus: "MTTD, MTTR, false positive reduction, and containment metrics.",
        definition: "Numbers tell the truth. Monitoring programs are measured by MTTD (Mean Time to Detect) and MTTR (Mean Time to Respond), tracking how quickly threats are contained.",
        bullets: [
          "Measure Mean Time to Detect (MTTD) to identify speed gaps in monitoring scripts and telemetry tools.",
          "Measure Mean Time to Respond (MTTR) to optimize containment procedures and dashboard isolations.",
          "Track False Positive Ratios to keep alert quality high and maintain focused security investigations.",
          "Audit the time from initial compromise to complete subnet isolation to verify threat containment speed."
        ]
      }
    ],
    qnas: [
      {
        id: "soc-q1",
        question: "What makes an effective SOC?",
        answer: "An effective SOC combines skilled analysts, centralized visibility, strong detection engineering, threat intelligence, clear incident response procedures, and continuous improvement. Technology alone is not enough; operational maturity and response coordination are equally critical."
      }
    ]
  }
];

export const masterFrameworkInterviewQuestion = {
  question: "How would you modernize and secure an organization’s IT environment?",
  answer: "I would start with governance and risk assessment using frameworks such as COBIT and NIST CSF to establish visibility, accountability, and maturity baselines. I would strengthen technical controls through CIS Controls, modernize security architecture using Zero Trust principles, improve operational stability through ITIL practices, and enhance monitoring and response capabilities through a mature SOC and SIEM strategy. My focus would be balancing security, operational resilience, business continuity, compliance, and user productivity while aligning technology investments with organizational goals."
};

/**
 * Builds content/questions/interview-packs.json from inline data.
 * Run: node scripts/compose-interview-packs.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.join(__dirname, "..", "content", "questions", "interview-packs.json");

const pack1 = {
  id: "pack-1-perfect-1-20",
  title: "PACK 1 — Perfect answers (questions 1–20)",
  subtitle: "Customer experience, leadership, difficult moments, change & OPEX",
  sections: [
    {
      title: "Customer experience",
      items: [
        {
          id: "p1-q01",
          question:
            "Tell us about a time you significantly improved customer experience.",
          timing: "~1.5 minutes",
          answer: `One of my strongest customer-centric wins happened with Amazon. They escalated that their network was performing poorly and were considering terminating the contract. A team from both sides investigated for a week, but no one could find the root cause.

I felt strongly that a global company like Amazon does not raise issues without data, so I took full ownership. I worked from their space for a week, observed behavior, and discovered constant interference — over 70 staff had personal hotspots on, and laptops were switching between hotspot and WiFi. The issue was not the network; it was environmental interference.

I led a structured plan: disable hotspots temporarily, optimize AP placement, run controlled tests, and provide staff awareness. Within days, their network stabilized. Amazon was extremely satisfied and not only stopped the termination — they extended our contract.

This experience reinforced my belief that customer experience improves when IT goes beyond assumptions and focuses on root-cause, data-driven analysis. It is the same mindset I will bring to DHL — understanding the customer environment deeply and acting with urgency.`,
        },
        {
          id: "p1-q02",
          question: "How do you ensure IT decisions improve customer satisfaction?",
          timing: "~60 seconds",
          answer: `I start with a simple principle: IT must be invisible when it works well, and unforgettable when delivering value.

So I use three approaches:
• Voice of customer inputs — direct feedback, surveys, and behavioral data.
• Impact mapping — every IT project must answer: what customer friction does this remove?
• Measurement — uptime, response times, SLA, and ticket reduction.

At Kofisi, this approach led to cloud printing, which eliminated long queues at reception and generated new revenue. At Amazon, it saved the relationship.

For DHL, I will apply the same method to improve OTD, courier efficiency, CIS productivity, and digital touchpoints.`,
        },
        {
          id: "p1-q03",
          question: "How do you respond to customer escalations?",
          timing: "~60 seconds",
          answer: `I treat escalations as a signal of urgency, not blame.

My approach is:
• Acknowledge fast
• Investigate deeply
• Communicate proactively
• Solve permanently

The Amazon intervention is a great example of this. Their escalation pushed me to uncover an issue no one else saw.

I focus not just on fixing the issue, but on restoring trust, which is the real win.`,
        },
        {
          id: "p1-q04",
          question: "What does customer-centric IT leadership mean to you?",
          timing: "~45 seconds",
          answer: `It means designing systems with the user in mind, not the engineer.

It means thinking about downtime as missed deliveries, slow WiFi as slow operations, and failed tools as frustrated customers.

Customer-centric IT is when technology becomes a competitive advantage, not a cost center.`,
        },
        {
          id: "p1-q05",
          question: "How do you measure customer experience impact?",
          timing: "~45 seconds",
          answer: `• Reduction in escalations
• Faster issue resolution
• System uptime and speed
• Adoption of digital tools
• Direct customer feedback
• Business impact indicators (OTD, productivity)

I believe CX should always connect to business outcomes, not just satisfaction scores.`,
        },
        {
          id: "p1-q06",
          question: "Tell us about a time customer feedback changed your strategy.",
          timing: "~1 minute",
          answer: `At Kofisi, clients consistently complained about printing inefficiencies. Only the receptionist controlled the printers, leading to delays and confidentiality concerns.

This feedback pushed me to rethink the model entirely. I implemented a cloud printing system with unique accounts for each user, placed printers in centralized areas, and added secure PIN release.

Result: zero congestion, improved privacy, and over 6 million KES per month in new printing revenue.

Customer feedback was not just heard — it drove innovation and revenue. DHL's voice-of-customer culture aligns strongly with how I operate.`,
        },
      ],
    },
    {
      title: "Leadership & culture",
      items: [
        {
          id: "p1-q07",
          question: "How do you build a high-performing IT team?",
          timing: "~1 minute",
          answer: `My philosophy is simple: clarity, empowerment, and constant improvement.

• Clarity — clear responsibilities, SLAs, and expectations.
• Empowerment — I let my team lead projects. One of my proudest moments is when a junior team member built the POS system for our new center because I gave him the space to own it.
• Continuous improvement — training, mentorship, and a culture where feedback is normal.

A high-performing team is built by creating an environment where people feel trusted, supported, and challenged.`,
        },
        {
          id: "p1-q08",
          question: "How do you motivate your team under pressure?",
          timing: "~45 seconds",
          answer: `I bring stability, clarity, and positivity.

During the network unification project — which involved firewalls, switches, ISPs, and access control — pressure was high. I broke work into phases, assigned ownership, celebrated quick wins, and kept communication transparent.

Pressure becomes manageable when the team sees the bigger picture and feels supported.`,
        },
        {
          id: "p1-q09",
          question: "Give us a time you coached someone.",
          timing: "~1 minute",
          answer: `I had a junior technician who lacked confidence but had strong potential. I paired him with me on major projects, gave him controlled responsibilities, and later challenged him to build a POS system for our new center.

Today, his system is being deployed — and he has grown into a strong, independent engineer.

For me, coaching is about unlocking capability and building future leaders, not just training.`,
        },
        {
          id: "p1-q10",
          question: "How do you handle a poor performer?",
          timing: "~45 seconds",
          answer: `First, I try to understand the root cause — skill, attitude, or personal challenges.

Then I set clear expectations, give them tools to succeed, and monitor progress closely.

If improvement does not happen, I take decisive action — but I always start with support, not punishment.`,
        },
        {
          id: "p1-q11",
          question: "How do you build collaboration between IT and business units?",
          timing: "~45 seconds",
          answer: `I position IT as a business partner, not a service desk.

This means:
• Regular alignment meetings
• Joint planning sessions
• Translating business needs into technical solutions
• Speaking in business language, not IT language

The stronger the partnership, the stronger the outcomes.`,
        },
        {
          id: "p1-q12",
          question: "How do you maintain accountability in your team?",
          timing: "~45 seconds",
          answer: `Clear SLAs, weekly check-ins, dashboards for visibility, and a culture where commitments matter.

Accountability is easier when expectations are visible and agreed on.`,
        },
      ],
    },
    {
      title: "Difficult situations",
      items: [
        {
          id: "p1-q13",
          question: "Tell us about a time you managed a difficult client.",
          timing: "~1.5 minutes",
          answer: `The Amazon escalation was exactly that. They were frustrated, and their dissatisfaction was valid. Instead of becoming defensive, I became curious.

By working on-site and identifying the interference issue, the relationship not only recovered — it strengthened.

I learned that difficult clients do not want excuses, they want ownership, competence, and communication.`,
        },
        {
          id: "p1-q14",
          question: "Tell us about a time your team or vendor failed.",
          timing: "~1 minute",
          answer: `In one instance, a vendor delayed critical equipment needed for our unified network rollout. My team was frustrated, operations were at risk, and customers were affected.

I stepped in, renegotiated timelines, escalated to senior vendor management, and created a temporary failover plan to reduce downtime.

Failure happens — what matters is responding with structure, communication, and control.`,
        },
        {
          id: "p1-q15",
          question: "Tell us about a time you challenged a common assumption.",
          timing: "~1 minute",
          answer: `During the Amazon issue, everyone assumed the network was the problem. But data did not support that.

I challenged the assumption, insisted on deeper investigation, and discovered the real cause — interference and personal hotspots.

This resulted in a permanent fix. Challenging assumptions is part of good IT leadership.`,
        },
      ],
    },
    {
      title: "Change management & operational excellence",
      items: [
        {
          id: "p1-q16",
          question: "Describe a major change you led.",
          timing: "~1.5 minutes",
          answer: `I led the unification of Kofisi's entire network and access control across multiple centers.

This included replacing firewalls, switches, ISPs, 700+ Cisco phones, and migrating to 3CX.

It required planning, risk management, communication, and training.

The result was a modern, scalable, secure environment that drastically reduced downtime and improved user experience.`,
        },
        {
          id: "p1-q17",
          question: "How do you minimize disruption during IT changes?",
          timing: "~45 seconds",
          answer: `Planning, sandbox testing, phased rollout, communication, and rollback plans.

I never deploy without a clear risk and recovery plan.`,
        },
        {
          id: "p1-q18",
          question: "Tell us about a transformation you delivered end-to-end.",
          timing: "~1 minute",
          answer: `Cloud printing is a full transformation example — from idea to rollout.

I identified the problem, designed the solution, built the architecture, trained staff, and delivered a system that improved privacy, experience, and revenue.

This is how I deliver: insight → design → execution → measurement.`,
        },
        {
          id: "p1-q19",
          question: "Tell us about a time people resisted change.",
          timing: "~1 minute",
          answer: `During the migration from Cisco phones to 3CX, staff resisted losing familiar devices.

I handled it through:
• Training
• FAQ sessions
• On-site support
• Gradual rollout

Within weeks, adoption was complete because they saw the benefits.`,
        },
        {
          id: "p1-q20",
          question: "What is your 3-year vision for IT?",
          timing: "~1 minute",
          answer: `My 3-year vision is:

• Stabilize & secure — zero unplanned downtime, strong cybersecurity
• Digitize & automate — bots, AI, workflow automation
• Intelligence & insights — data-driven decisions, predictive analytics
• Customer impact — faster operations, seamless tools
• People — build a strong internal IT pipeline

In 3 years, IT should be seen as a key value driver, not just an enabler.`,
        },
      ],
    },
  ],
};

const worldBank = {
  id: "world-bank-senior-it-assistant",
  title: "World Bank — Senior IT Assistant (Client Services)",
  subtitle: "Introduction through scenarios, closing, and bonus delivery tips",
  sections: [
    {
      title: "Section 1 — Introduction & motivation",
      items: [
        {
          id: "wb-01",
          question: "Tell us about yourself.",
          answer: `Thank you for this opportunity. My name is Frieze Wandabwa. I have more than eight years' experience delivering enterprise-grade IT support and service management for global clients including AWS, Cisco, the Gates Foundation, and GIZ.

I'm ITIL 4-certified and pursuing a Master's in AI, which helps me combine strong infrastructure knowledge with innovation.

My teams have maintained 99 percent uptime and introduced automations that cut incident resolution time by 30 percent.

I'm passionate about technology that empowers people, and the World Bank's mission aligns perfectly with that.`,
        },
        {
          id: "wb-02",
          question: "Why the World Bank?",
          answer: `Because this is where technology truly serves people. The Bank's focus on knowledge sharing, inclusivity, and digital transformation speaks to my purpose.

ITS is not just fixing computers; it's enabling development. That's the kind of impact I want my work to have.`,
        },
        {
          id: "wb-03",
          question: "What do you understand about this role?",
          answer: `This role ensures the Nairobi Office and visiting missions have seamless, secure, and innovative IT support.

It combines front-line problem solving with proactive client training, vendor coordination, and adherence to security standards such as GDPR and ISO 27001.`,
        },
        {
          id: "wb-04",
          question: "Why should we hire you?",
          answer: `Because I bring the technical depth, customer empathy, and global experience this role demands.

I've managed complex environments across multiple organizations, built IT teams that scored above 95 percent in user satisfaction, and implemented ITIL best practices that reduced repeat incidents by 25 percent.

I'm dependable under pressure and committed to excellence.`,
        },
        {
          id: "wb-05",
          question: "How does this role fit your goals?",
          answer: `It aligns perfectly. I'm looking to serve in a mission-driven environment while continuing to grow into regional IT leadership. This position lets me deliver value today and build capability for tomorrow.`,
        },
      ],
    },
    {
      title: "Section 2 — Technical & functional expertise",
      items: [
        {
          id: "wb-06",
          question: "How do you diagnose and resolve complex issues?",
          answer: `I use a structured approach: identify symptoms, replicate the issue, check logs, isolate possible causes, test solutions, communicate progress, and document outcomes.

I also escalate early when cross-team input is required to minimize downtime.`,
        },
        {
          id: "wb-07",
          question: "Describe your experience with Microsoft 365 and Teams.",
          answer: `I manage user accounts, security groups, data-loss-prevention policies, and Teams collaboration spaces.

I've rolled out M365 for over 1,000 users and trained staff on SharePoint and Teams, improving collaboration and reducing email volume by 40 percent.`,
        },
        {
          id: "wb-08",
          question: "Experience with Azure DevOps or ServiceNow.",
          answer: `In ServiceNow I configure workflows, categories, and dashboards for ticket tracking.

In Azure DevOps I maintain project backlogs, sprints, and analytics. Both tools let me monitor performance and deliver continuous improvement.`,
        },
        {
          id: "wb-09",
          question: "Tell us about Power BI / Power Automate / Power Apps.",
          answer: `I've built dashboards in Power BI to visualize incident trends and asset data, and automated repetitive requests like password resets using Power Automate.

These small automations saved the team several hours weekly and improved user satisfaction.`,
        },
        {
          id: "wb-10",
          question: "How do you ensure cybersecurity and data integrity?",
          answer: `Through layered security: up-to-date patches, MFA, endpoint protection, least-privilege access, and user education.

I perform routine audits and follow World Bank's information-security directives strictly.`,
        },
        {
          id: "wb-11",
          question: "Explain ITIL's relevance to this role.",
          answer: `ITIL provides the structure: incident, change, and problem management.

Following ITIL ensures accountability, traceability, and consistent user experience.`,
        },
        {
          id: "wb-12",
          question: "How do you manage vendors and SLAs?",
          answer: `I track KPIs monthly, maintain open communication, and hold vendors accountable through clear documentation.

When an SLA is at risk, I escalate early and propose corrective actions.`,
        },
        {
          id: "wb-13",
          question: "Describe your experience with video-conferencing systems.",
          answer: `I've set up and supported Zoom, Teams Rooms, and Cisco Webex devices for board-level and international meetings.

I always perform pre-meeting checks to guarantee zero disruptions.`,
        },
        {
          id: "wb-14",
          question: "How do you stay current with technology?",
          answer: `Continuous learning is part of my routine — Microsoft Learn, Coursera, and industry forums.

I also share new insights with my team to foster collective growth.`,
        },
        {
          id: "wb-15",
          question: "Describe a time you improved an IT process.",
          answer: `At Kofisi Africa, I noticed repetitive incident logging for connectivity issues.

I created a diagnostic checklist and automated ticket categorization in ServiceNow, reducing average resolution time from 45 to 25 minutes.`,
        },
      ],
    },
    {
      title: "Section 3 — Client service & communication",
      items: [
        {
          id: "wb-16",
          question: "What is excellent client service?",
          answer: `It means solving problems quickly and respectfully, communicating clearly, and leaving the user confident.

Every ticket is a relationship opportunity.`,
        },
        {
          id: "wb-17",
          question: "Tell us about a time you turned a dissatisfied user around.",
          answer: `A senior manager's laptop failed right before a presentation.

I kept communication calm, provided a loaner within 15 minutes, recovered his data afterward, and followed up to ensure satisfaction.

That experience reinforced the importance of empathy and ownership.`,
        },
        {
          id: "wb-18",
          question: "How do you explain technical issues to non-technical staff?",
          answer: `I translate jargon into relatable terms. For instance, I might compare bandwidth to highway lanes so users understand congestion.

My goal is to educate without overwhelming.`,
        },
        {
          id: "wb-19",
          question: "How do you handle pressure or multiple priorities?",
          answer: `I triage by business impact and urgency, coordinate with colleagues, and keep stakeholders informed.

Remaining calm and transparent maintains trust even in crises.`,
        },
        {
          id: "wb-20",
          question: "How do you build long-term trust with clients?",
          answer: `Consistency — responding quickly, following through, and admitting mistakes openly.

Users trust people who communicate honestly and deliver results.`,
        },
      ],
    },
    {
      title: "Section 4 — Teamwork & leadership",
      items: [
        {
          id: "wb-21",
          question: "Describe working with a multicultural team.",
          answer: `At GIZ and KfW projects I supported staff from different nationalities.

I learned to adapt communication styles and respect cultural norms while keeping focus on shared objectives.`,
        },
        {
          id: "wb-22",
          question: "How do you handle conflict within your team?",
          answer: `I encourage open discussion, listen to both sides, and refocus everyone on the mission.

Usually transparency and empathy resolve misunderstandings quickly.`,
        },
        {
          id: "wb-23",
          question: "Tell us about mentoring a colleague.",
          answer: `I coached a junior technician on ITIL incident handling. Within three months he could independently manage Tier-1 support — freeing me to focus on improvements.`,
        },
        {
          id: "wb-24",
          question: "How do you motivate a team under pressure?",
          answer: `By acknowledging stress, dividing tasks clearly, and celebrating small wins.

People perform best when they feel supported and informed.`,
        },
        {
          id: "wb-25",
          question: "What does collaboration mean to you?",
          answer: `It means aligning goals, sharing knowledge, and removing silos. In IT support, collaboration ensures continuity and collective accountability.`,
        },
      ],
    },
    {
      title: "Section 5 — Digitalization & innovation",
      items: [
        {
          id: "wb-26",
          question: "How would you introduce automation in IT support?",
          answer: `I'd start by identifying repetitive tasks — password resets, asset updates — and automate them using Power Automate or ServiceNow flows.

The goal is to free human time for high-value client interactions.`,
        },
        {
          id: "wb-27",
          question: "Have you used AI tools in your workflow?",
          answer: `Yes. I've used Copilot and ChatGPT for documentation drafts and knowledge-base summaries.

I always validate outputs, ensuring responsible AI use aligned with policy.`,
        },
        {
          id: "wb-28",
          question: "How would you drive technology adoption among staff?",
          answer: `Through short, practical sessions — lunch-and-learns, desk-side coaching, and tip-of-the-week emails.

When people see direct benefits, adoption follows naturally.`,
        },
        {
          id: "wb-29",
          question: "Describe a time you piloted a new tool.",
          answer: `I led a pilot of Microsoft Teams Rooms integration across five offices.

After training and feedback, meeting satisfaction scores rose by 25 percent.`,
        },
        {
          id: "wb-30",
          question: "How do you measure success in digital initiatives?",
          answer: `Adoption rate, user satisfaction, incident reduction, and measurable time savings — technology must translate into clear operational gains.`,
        },
      ],
    },
    {
      title: "Section 6 — Values & behavioral competencies",
      items: [
        {
          id: "wb-31",
          question: "Give an example of acting with urgency.",
          answer: `During a regional power outage, I coordinated generator failover and remote-access routing within minutes, allowing critical missions to continue uninterrupted.`,
        },
        {
          id: "wb-32",
          question: "A time you challenged the status quo.",
          answer: `We had a manual asset-tracking spreadsheet causing errors.

I proposed moving to an Azure database with barcode scanning. It reduced loss incidents to zero.`,
        },
        {
          id: "wb-33",
          question: "Describe taking accountability for a mistake.",
          answer: `I once mis-scheduled a network maintenance window.

I owned the error, communicated transparently, restored service quickly, and implemented a double-check process afterward.`,
        },
        {
          id: "wb-34",
          question: "When did you go beyond your job description?",
          answer: `I volunteered to train non-IT staff on cybersecurity awareness — that simple initiative cut phishing incidents by 60 percent.`,
        },
        {
          id: "wb-35",
          question: "Describe maintaining confidentiality.",
          answer: `At the Gates Foundation project, I handled sensitive health data.

I followed strict access controls and encryption standards, ensuring no breach of trust.`,
        },
      ],
    },
    {
      title: "Section 7 — Scenario questions (STAR format)",
      items: [
        {
          id: "wb-36",
          question:
            "Network goes down during a mission meeting — what do you do?",
          answer: `Situation: critical meeting underway.

Task: restore connectivity immediately.

Action: stay calm, switch to backup link, inform participants, log the issue, escalate to ISP.

Result: meeting resumes within 10 minutes, minimal disruption.`,
        },
        {
          id: "wb-37",
          question: "Two urgent tickets at once — how do you prioritize?",
          answer: `I assess impact: if one affects a Country Director and the other a non-critical user, I coordinate quick assistance for the high-impact case while delegating the other. Communication is key.`,
        },
        {
          id: "wb-38",
          question: "Staff ignoring security policy.",
          answer: `I'd remind them of the policy politely, explain the risk, and if necessary escalate to the Regional IT Lead — maintaining respect and compliance.`,
        },
        {
          id: "wb-39",
          question: "You must train reluctant staff on a new tool.",
          answer: `I'd show quick wins — how the tool saves time — and offer one-on-one help. Positive reinforcement converts resistance into advocacy.`,
        },
        {
          id: "wb-40",
          question: "Vendor repeatedly misses SLA.",
          answer: `I'd review the contract metrics, document breaches, hold a performance meeting, and either agree on corrective action or recommend alternative providers.`,
        },
      ],
    },
    {
      title: "Section 8 — Closing & motivational",
      items: [
        {
          id: "wb-41",
          question: "What will you achieve in the first six months?",
          answer: `Stabilize support operations, strengthen asset and incident tracking, and introduce small automations.

I'll also build strong rapport with users and vendors.`,
        },
        {
          id: "wb-42",
          question: "How do you define success in this role?",
          answer: `When staff experience technology as an enabler, not a barrier — minimal downtime, proactive service, and a motivated IT team.`,
        },
        {
          id: "wb-43",
          question: "Where do you see yourself in five years?",
          answer: `Leading a regional ITS support team, mentoring others, and driving cross-country digitalization projects.`,
        },
        {
          id: "wb-44",
          question: "Do you have any questions for us?",
          answer: `Yes, thank you.

• How does the Nairobi office collaborate with the global ITS transformation program?
• What upcoming initiatives focus on automation or data analytics?
• How does success in this role get measured after the first year?`,
        },
      ],
    },
    {
      title: "Section 9 — Bonus tips",
      items: [
        {
          id: "wb-bonus",
          question: "Interview tone, body language, and closing line",
          answer: `Interview tone: calm, confident, and service-oriented.

Body language: smile, listen actively, take brief pauses before answers.

Closing line example:
"I appreciate this discussion. I'm inspired by how the World Bank uses technology for impact, and I'm confident my experience and values align perfectly with that mission."`,
        },
      ],
    },
  ],
};

const dhlModel = {
  id: "dhl-model-answers-12",
  title: "DHL — Interview questions & model answers (12)",
  subtitle: "Tailored narrative blocks for service delivery, security, and transformation",
  sections: [
    {
      title: "Core fit",
      items: [
        {
          id: "dhl-m-01",
          question: "Tell us about yourself and your background.",
          answer: `Thank you for the opportunity. I'm an IT professional with over eight years of progressive experience managing IT infrastructure, cybersecurity, and digital transformation across both corporate and development sectors.

In my current role as IT Manager at KOFISI Africa, I oversee IT operations across 15 centers in multiple countries — supporting over 1,000 enterprise clients including AWS, Cisco, DHL, and the Bill & Melinda Gates Foundation. My focus has been to align IT operations with business strategy, improve service uptime, and drive digital adoption through Microsoft 365, Azure, and automation tools.

Before that, I led regional IT and network deployments at Telesys Solutions, where I delivered over 500 projects and introduced governance frameworks that improved compliance and efficiency. I hold ITIL 4 certification, a background in cybersecurity, and I'm currently pursuing a Master's in Artificial Intelligence to help integrate smarter, data-driven IT systems.

What drives me is using technology to simplify operations, strengthen security, and create measurable impact. I see DHL as a global leader in digital logistics — and I'm excited to contribute to that mission.`,
        },
        {
          id: "dhl-m-02",
          question: "Why do you want to work with DHL?",
          answer: `DHL stands out for its purpose — connecting people and improving lives through global logistics powered by technology. What excites me is that DHL doesn't just use IT as a support tool — it uses IT to transform operations, enhance customer experience, and connect businesses globally.

My professional values align perfectly with that. I've built my career on improving service delivery, implementing IT governance, and using digitalization to enable business efficiency. Joining DHL would allow me to bring that experience to a global platform — helping scale secure, reliable, and innovative IT systems that support both the people and the mission.`,
        },
        {
          id: "dhl-m-03",
          question: "What would you do for DHL if selected?",
          answer: `My approach would focus on four key areas aligned with DHL's priorities:

1) Strengthen IT service management: implement and optimize ITIL-based ITSM practices to minimize disruptions, improve SLA compliance, and maintain 99.9% uptime — with clear dashboards for leadership visibility.

2) Drive digital transformation: use data and automation to optimize workflows and customer interfaces — for example, predictive maintenance and smarter monitoring.

3) Enhance data protection & security: maintain compliance with GDPR and ISO 27001 through proactive risk assessments, training, and audits.

4) Build high-performance teams: develop and mentor IT staff using SMART goals, training, and cross-department collaboration.

My goal is to ensure DHL's IT function becomes a strategic driver of efficiency, resilience, and customer satisfaction.`,
        },
        {
          id: "dhl-m-04",
          question: "Describe a time you improved IT service delivery.",
          answer: `At KOFISI, I inherited a decentralized IT support structure across multiple countries, which led to inconsistent service levels. I implemented ITIL-based service management — centralizing ticketing, automating escalation, and introducing performance dashboards.

Within six months, we reduced incident resolution time by 40%, improved uptime to 99.9%, and achieved measurable cost savings of 20% through smarter resource allocation. This experience taught me that structured service management and proactive leadership create reliability and trust across the organization.`,
        },
        {
          id: "dhl-m-05",
          question: "How do you handle IT security and data protection?",
          answer: `My approach combines compliance, awareness, and technology. At KOFISI, I implemented enterprise endpoint protection, access controls, and automated patch management, which reduced vulnerabilities by 30%.

I also developed data handling policies aligned with GDPR and ISO 27001, ensuring secure data flows between clients and regional centers. Beyond tools, I emphasize continuous staff training — because user awareness is often the best first line of defense. I believe DHL's reputation relies heavily on trust, so information security must be embedded in both culture and systems.`,
        },
        {
          id: "dhl-m-06",
          question: "How do you lead and develop your IT team?",
          answer: `I lead through empowerment and accountability. I start by setting SMART goals aligned with business KPIs, then give my team autonomy to execute while maintaining open feedback loops.

At KOFISI, I established a mentorship framework where senior engineers coached juniors across centers. This not only improved performance but built confidence and retention. I also encourage certifications and technical growth — because when the team grows, the organization grows.`,
        },
        {
          id: "dhl-m-07",
          question: "How do you balance cost optimization with quality IT service?",
          answer: `I focus on value-based budgeting — every shilling must deliver measurable impact. At KOFISI, I reviewed vendor contracts, consolidated software licenses, and introduced monitoring tools to track resource usage. These measures cut costs by 20% while improving service quality.

My goal is to apply similar principles at DHL — using performance analytics, vendor benchmarking, and automation to achieve cost efficiency without compromising reliability.`,
        },
        {
          id: "dhl-m-08",
          question: "Tell us about a digital transformation project you led.",
          answer: `One major initiative was migrating our legacy systems to Microsoft 365 and Azure. I led the entire process — from stakeholder engagement to pilot rollout.

The transformation enhanced collaboration across 1,000+ users, reduced email downtime, and improved security compliance through centralized access control. It also supported remote work and data recovery.

This experience strengthened my ability to manage cross-departmental digital projects, something I look forward to doing at DHL as part of your digital customer solutions initiatives.`,
        },
        {
          id: "dhl-m-09",
          question: "How do you handle vendor and stakeholder relationships?",
          answer: `I treat vendors as strategic partners rather than just suppliers. At Telesys, I managed OEMs like Huawei, Nokia, and Cisco under strict SLAs. Regular performance reviews, transparent reporting, and early escalation helped maintain delivery standards.

With stakeholders, I focus on communication — translating technical metrics into business impact. For example, instead of saying "network uptime is 99.9%," I'd show how that translates into zero disruption for customer shipments. That builds credibility and trust.`,
        },
        {
          id: "dhl-m-10",
          question: "How do you handle IT incidents and business continuity?",
          answer: `I prioritize preparedness. I maintain redundant systems, real-time monitoring, and defined escalation paths. At KOFISI, I developed a disaster recovery framework with automated backups and backup internet links. During one major outage, we restored full operations within 15 minutes without data loss.

My philosophy is that continuity isn't just about recovery — it's about designing systems that rarely fail.`,
        },
        {
          id: "dhl-m-11",
          question: "Where do you see yourself in the next 3–5 years?",
          answer: `I see myself leading regional or global IT operations — continuing to evolve technology strategy for efficiency, security, and customer experience. My focus is to grow within DHL, contributing to your vision of being the world's most international and digitally connected logistics company.`,
        },
        {
          id: "dhl-m-12",
          question: "Why should we hire you? (final closing)",
          answer: `Because I combine hands-on technical depth with leadership, strategy, and business alignment. I've delivered IT transformations for some of the same global clients DHL serves. I understand how to secure, optimize, and scale technology in fast-paced, multinational environments.

Beyond systems, I bring commitment, reliability, and a proven record of aligning IT with mission — values that directly reflect DHL's culture of excellence and connection.`,
        },
      ],
    },
  ],
};

const dhlMaster = {
  id: "dhl-head-of-it-master-kit",
  title: "DHL Head of IT — interview master kit",
  subtitle: "Pitch, pillars, crisis story, AI, culture, resistance, KPIs, questions back, power phrases, delivery",
  sections: [
    {
      title: "Opening & strategy",
      items: [
        {
          id: "dhl-h-01",
          question: "Introduction pitch (30–45 seconds) — Tell us about yourself.",
          timing: "30–45 seconds",
          answer: `I'm an IT leader with over eight years of experience delivering digital transformation, cybersecurity, and IT infrastructure management across Africa and international organizations.

In my current role as IT Manager at KOFISI Africa, I oversee IT operations across 15 centers in multiple countries, supporting enterprise clients like AWS, Cisco, DHL, and the Gates Foundation. I've led projects that achieved 99.9% uptime, reduced IT costs by 20%, and improved system security by 30%.

I'm ITIL 4 certified and currently pursuing a Master's in Artificial Intelligence to integrate smarter, data-driven decision-making into IT operations. What drives me is using technology not just to support business—but to lead it. DHL's global digital strategy perfectly aligns with my experience and my passion for innovation and operational excellence.`,
        },
        {
          id: "dhl-h-02",
          question: "Why DHL?",
          answer: `DHL's mission to connect people and improve lives through technology resonates deeply with me.

You're not just a logistics company—you're a technology-driven connector of global trade, and that's where I want to contribute.

With my background in IT service delivery, digital transformation, and governance, I can help DHL strengthen system reliability, drive innovation, and deliver world-class customer experiences through secure, scalable technology solutions.`,
        },
        {
          id: "dhl-h-03",
          question: "What would you do for DHL? (four impact areas)",
          answer: `I would focus on four impact areas aligned with DHL's priorities:

1) Optimize IT operations & reliability: mature ITIL frameworks to reduce incidents, improve SLAs, and sustain 99.9% uptime.

2) Strengthen cybersecurity & data protection: enforce GDPR and ISO 27001 controls, endpoint monitoring, and regular security audits.

3) Drive digital transformation: automation and AI-based analytics for proactive monitoring, smarter decisions, and seamless customer solutions.

4) Build people & performance: mentor IT teams using SMART goals, performance dashboards, and continuous learning — because reliable systems start with empowered people.`,
        },
        {
          id: "dhl-h-04",
          question: "How do you lead and motivate your IT team?",
          answer: `Leadership for me is about clarity, growth, and accountability.

At KOFISI, I led a distributed team across multiple countries. I introduced weekly virtual syncs, performance dashboards, and mentoring programs pairing senior engineers with juniors.

This improved collaboration, reduced escalations, and increased team productivity by 25%.

I lead by example—staying hands-on technically but empowering my team to innovate and take ownership.`,
        },
        {
          id: "dhl-h-05",
          question:
            "How do you ensure business continuity and service reliability?",
          answer: `I combine proactive monitoring, redundancy planning, and clear incident protocols.

For example, at KOFISI we had a critical outage risk due to ISP instability. I implemented dual-redundant links and automated failover, cutting downtime incidents by 40%.

I also standardized incident, change, and problem management processes through ITSM tools.

My philosophy is: continuity is designed, not reacted to.`,
        },
        {
          id: "dhl-h-06",
          question: "How do you handle information security?",
          answer: `Security must be cultural, not optional.

I implemented enterprise endpoint protection, MFA, and automated patch management—reducing vulnerabilities by 30%.

I've also led GDPR-aligned data policies ensuring personal data is securely processed and stored, with employee training integrated quarterly.

At DHL, I'd strengthen ISO 27001 alignment, conduct regular vulnerability assessments, and integrate real-time monitoring dashboards for compliance and risk visibility.`,
        },
        {
          id: "dhl-h-07",
          question: "Describe a digital transformation project you led.",
          answer: `I led a full migration from on-premise infrastructure to Microsoft 365 and Azure, impacting 1,000+ users.

This project increased collaboration, strengthened data security, and improved system uptime.

We also automated ticketing and workflow approvals, reducing manual processes by 40%.

This experience taught me how to lead cross-departmental change while balancing security, cost, and user experience.`,
        },
        {
          id: "dhl-h-08",
          question: "How do you ensure IT investments align with business goals?",
          answer: `Every IT decision should deliver measurable business value.

At KOFISI, I built cost-benefit cases for cloud migration and infrastructure upgrades that directly supported revenue growth through better client service.

I manage budgets through quarterly reviews, ROI tracking, and vendor performance metrics.

For DHL, I'd ensure every IT spend supports operational efficiency, digitalization, and customer experience goals.`,
        },
        {
          id: "dhl-h-09",
          question:
            "How do you manage external vendors and internal expectations?",
          answer: `I treat vendors as strategic partners, with SLAs tied to business outcomes, not just uptime.

At Telesys, I negotiated with OEMs like Huawei and Nokia, improving SLA adherence and saving 15% through smarter procurement.

Internally, I maintain transparency through dashboards and regular briefings, translating technical results into business impact. That builds trust and accountability.`,
        },
        {
          id: "dhl-h-10",
          question: "Tell us about a major IT incident and how you managed it.",
          answer: `During a major power outage at one of our regional hubs, our network backbone went offline, threatening multiple client operations.

I immediately activated our disaster recovery plan—switching to backup power, rerouting traffic through our secondary data center, and communicating status updates every 15 minutes.

We restored full operations within 30 minutes, with zero data loss.

The key was preparation, clear communication, and calm leadership under pressure.`,
        },
        {
          id: "dhl-h-11",
          question:
            "You're studying AI—how would you use AI in this role?",
          answer: `AI can transform how IT operates at DHL.

We can use machine learning for predictive maintenance of servers and network equipment, AI-driven incident classification for faster response, and intelligent chatbots for internal IT support.

My AI studies allow me to bridge innovation with practicality—bringing DHL a smarter, data-driven IT environment that anticipates issues instead of reacting to them.`,
        },
        {
          id: "dhl-h-12",
          question: "How do you embody DHL's values?",
          answer: `DHL's values—speed, passion, right first time, and teamwork—match how I operate daily.

At KOFISI, I've managed mission-critical events for AWS and Cisco launches under tight timelines where precision mattered.

My team succeeded because we worked fast, supported each other, and stayed calm under pressure.

I believe excellence is built on preparation, ownership, and collective success.`,
        },
        {
          id: "dhl-h-13",
          question: "Tell us about a time you faced resistance to change.",
          answer: `When introducing ITSM automation, some staff were hesitant about new workflows.

I addressed this by organizing small group demos and showing them time savings from automation. Within a month, adoption reached 95%.

The lesson was: involve people early, communicate the "why," and celebrate quick wins.`,
        },
        {
          id: "dhl-h-14",
          question: "How will you measure success in this role?",
          answer: `Through clear KPIs: uptime above 99.9%, SLA compliance above 95%, measurable reduction in incidents, improved cybersecurity posture, and user satisfaction scores.

I'd also track strategic KPIs like cost optimization and digital adoption rates, ensuring IT's impact is visible to leadership and customers alike.`,
        },
        {
          id: "dhl-h-15",
          question: "Why should we hire you? (master close)",
          answer: `Because I bring a proven record of turning IT from a support function into a strategic advantage.

I've delivered high-availability systems, driven digital transformation, and led multicultural teams serving global clients.

I understand DHL's scale, pace, and need for reliability—and I can ensure the IT function consistently supports that mission while securing, optimizing, and innovating your operations.`,
        },
      ],
    },
    {
      title: "Questions to ask them & power phrases",
      items: [
        {
          id: "dhl-h-16",
          question: "Questions to ask the panel (have 2–3 ready)",
          answer: `• How does DHL's IT strategy support its digital logistics roadmap for the next 3 years?

• How does this role collaborate with global or regional IT leadership?

• What would success look like for the person in this role within the first 6 months?`,
        },
        {
          id: "dhl-h-17",
          question: "Quick power phrases to sprinkle naturally",
          answer: `• Operational excellence through innovation.

• Transforming IT from reactive to predictive.

• Securing systems while enabling business agility.

• Driving measurable results — not just compliance.

• Empowering teams to perform at world-class standards.`,
        },
        {
          id: "dhl-h-18",
          question: "Body language & delivery tips",
          answer: `• Sit upright and confident — hands visible.

• Smile when you talk about achievements.

• Keep answers structured: Situation → Action → Result.

• Use numbers: improved uptime to 99.9%, reduced cost by 20%.

• End each answer on a forward-looking note ("I'd apply the same principles here at DHL…").`,
        },
      ],
    },
  ],
};

const all = [pack1, worldBank, dhlModel, dhlMaster];
fs.writeFileSync(out, JSON.stringify(all, null, 2), "utf8");
console.log("Wrote", all.length, "packs to", out);

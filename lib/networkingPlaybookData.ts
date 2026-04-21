/** Structured copy for the Networking playbook page — scenario scripts, short scripts, and conversation toolkit. */

export type PlaybookEntry = {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
  callout?: string;
};

export type PlaybookGroup = {
  id: string;
  label: string;
  description?: string;
  entries: PlaybookEntry[];
};

export type ScriptEntry = {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
};

export type TopicBlock = {
  id: string;
  title: string;
  questions: string[];
};

export const scenarioPlaybook: PlaybookGroup[] = [
  {
    id: "persona-it-kofisi",
    label: "Persona 1 · IT manager, Kofisi Africa",
    description: "Executive events, recruiter screens, LinkedIn, and global positioning.",
    entries: [
      {
        id: "p1-exec-room",
        title: '“What do you do?” — Executive room',
        subtitle: "Gala, leadership summit, formal networking dinner",
        body: `I lead enterprise IT across Kofisi Africa — the largest and fastest-growing co-working network on the continent.

My work spans infrastructure resilience, cybersecurity, unified access control, and cloud migration across multiple countries and centres.

We support high-value enterprise clients — Amazon, DHL, Bolt, GIZ — where uptime, security, and operational confidence are non-negotiable.

Right now I'm building a unified network monitoring system across all our regions, so our operations teams have full visibility in real time.`,
        callout: "Stop there. Let them ask.",
      },
      {
        id: "p1-tech-conf",
        title: '“What do you do?” — Tech conference',
        subtitle: "Innovation summit, CIO event, digital transformation conference",
        body: `I work at the intersection of enterprise infrastructure and intelligent systems.

I manage multi-site IT operations across Kofisi Africa — networks, security architecture, access control, cloud adoption — and I'm currently rolling out unified monitoring across our entire regional network.

Outside operations, I'm deep in applied AI — building models that solve real problems in agriculture, security, and operational intelligence.

I'm less interested in AI hype. I care about whether it actually improves decisions and business outcomes.`,
      },
      {
        id: "p1-ceo",
        title: "Met a CEO or country director",
        subtitle: "Introduced at an event, shared table, elevator moment",
        body: `Pleasure to meet you.

I lead technology and infrastructure at Kofisi Africa — managing systems across multiple countries, handling everything from network architecture to cybersecurity to the digital environments that our enterprise clients depend on every day.

My focus is making sure that as Kofisi grows — new locations, new clients, new complexity — the infrastructure scales without breaking.

I'm also working on intelligent systems that bring that operational thinking beyond IT — into agriculture, business intelligence, and predictive operations.`,
      },
      {
        id: "p1-recruiter-intro",
        title: '“Tell me about yourself” — Recruiter call',
        subtitle: "Headhunter, LinkedIn recruiter, HR screening call",
        body: `I'm an enterprise IT leader with a strong track record in infrastructure resilience, cybersecurity, and operational transformation.

Currently I lead IT at Kofisi Africa — managing multi-country infrastructure, networks, unified access control, and cloud adoption — while supporting enterprise clients like Amazon, DHL, Bolt, and GIZ where operational trust is critical.

My strength is combining deep technical execution with strategic thinking — I build environments businesses can depend on while keeping pace with transformation and growth.

I'm now looking for senior roles — Head of IT, IT Director, Regional Technology Lead — where technology is treated as a business function, not just support.`,
      },
      {
        id: "p1-role-fit",
        title: '“What kind of role are you looking for?”',
        subtitle: "Recruiter narrowing down, salary conversation starting",
        body: `I'm focused on senior IT leadership roles where technology directly shapes business continuity and executive decision-making.

Head of IT, IT Director, Infrastructure Director, or Regional Technology Lead — environments where resilience, governance, and transformation are the mandate, not just maintenance.

I create the most value in multinational or multi-site organizations where scale, security, and operational intelligence matter.

I'm particularly open to global or regional roles — Africa, Europe, the Middle East — where enterprise-level thinking is needed at scale.`,
      },
      {
        id: "p1-li-recruiter",
        title: "LinkedIn message — recruiter",
        subtitle: "Cold outreach to headhunter or talent acquisition lead",
        body: `Hello [Name],

I came across your profile and wanted to reach out.

I'm an enterprise IT leader currently managing multi-site infrastructure, cybersecurity, and operational systems at Kofisi Africa — supporting multinational clients including Amazon, DHL, Bolt, and GIZ across multiple countries and centres.

My focus is senior IT leadership — resilience, cloud transformation, and environments where uptime and trust are non-negotiable.

I'd welcome the opportunity to connect if you work across global technology leadership roles.

Looking forward to connecting.`,
      },
      {
        id: "p1-li-exec",
        title: "LinkedIn message — senior executive",
        subtitle: "CTO, CIO, VP technology, regional IT director",
        body: `Hello [Name],

I follow your work closely and I'm genuinely impressed by how you're approaching [specific thing you admire].

I lead enterprise IT at Kofisi Africa — managing infrastructure, cybersecurity, and operational systems across multiple countries, with responsibility for environments that support high-value enterprise clients.

I'm also pursuing my MSc in Artificial Intelligence, applying it to real operational challenges — from intelligent agriculture systems to predictive infrastructure monitoring.

I'd be glad to connect and learn from your perspective on where technology leadership is heading.

Looking forward to it.`,
      },
      {
        id: "p1-global",
        title: '“Why should we consider you for a global role?”',
        subtitle: "International interview, global company, multinational HQ",
        body: `I've been operating in a global context already.

Managing infrastructure for enterprise clients like Amazon, DHL, and Bolt — across multiple African countries and centres — means I'm already navigating the complexity, compliance requirements, and operational expectations that come with international environments.

I've built systems that scale across regions, unified monitoring across multiple sites, and managed security for organizations where failure isn't an option.

The skills that make IT leadership work in one of the fastest-growing, most dynamic markets in the world translate directly to global environments — sometimes more than experience in a single-market role does.`,
      },
    ],
  },
  {
    id: "persona-ai-builder",
    label: "Persona 2 · AI builder, MSc artificial intelligence",
    description: "AI events, investors, academics, partnerships, and career narrative.",
    entries: [
      {
        id: "p2-ai-conf",
        title: '“What do you do?” — AI / tech conference',
        subtitle: "Startup event, AI summit, innovation lab, hackathon",
        body: `I build AI systems that solve real operational problems — not research, not demos.

Right now I'm working on an agricultural intelligence model that helps detect crop issues and improve yield decisions at field level — the kind of problem where better data literally changes livelihoods.

I'm also exploring intelligent surveillance — using computer vision to detect anomalies, diseases, and security events in environments where manual monitoring isn't enough.

My thesis is simple: if an AI model doesn't improve a real decision or workflow, it doesn't belong in production.`,
      },
      {
        id: "p2-investor",
        title: '“Tell me about your AI work” — Investor or research room',
        subtitle: "VC event, accelerator, research institution, grant conversation",
        body: `My work sits at the intersection of applied machine learning and operational systems.

I'm currently building an agricultural AI model focused on the African context — where data scarcity, environmental variability, and limited infrastructure make standard approaches fail. The problem is real. The impact is direct.

I'm also developing frameworks for intelligent CCTV — systems that detect diseases, anomalies, or security threats without requiring constant human review.

The thread connecting everything is usability. Accuracy in the lab means nothing if the system fails in the field. That's the problem I'm actually trying to solve.`,
      },
      {
        id: "p2-msc",
        title: '“What’s your MSc research about?” — Academic or corporate',
        subtitle: "University event, corporate R&D team, think tank conversation",
        body: `My MSc focuses on artificial intelligence, but I'm approaching it from a practitioner's lens.

My core interest is the gap between AI performance in controlled environments and actual real-world deployment — why models that score 95% in the lab often fail immediately in production.

That question has led me into agricultural AI — building systems that have to work in unpredictable, data-sparse, high-stakes environments.

I'm also building expertise in computer vision and anomaly detection — with a specific focus on how intelligent systems can support operational monitoring at scale.`,
      },
      {
        id: "p2-li-research",
        title: "LinkedIn message — AI research or partnership",
        subtitle: "Researchers, labs, or potential collaborators",
        body: `Hello [Name],

Your work on [specific topic] caught my attention — particularly [one specific insight].

I'm currently pursuing my MSc in Artificial Intelligence while building applied models focused on agriculture and intelligent surveillance — areas where AI has real impact but where most solutions haven't been designed for the constraints of operating environments like Africa.

I'd love to connect and exchange ideas on [relevant area]. No agenda beyond a good conversation.

Looking forward to it.`,
      },
      {
        id: "p2-pitch-partner",
        title: "Pitching an AI idea — partner or employer",
        subtitle: "Tech company, agritech firm, NGO, government agency",
        body: `The problem I'm working on is that AI models built for agriculture — disease detection, yield prediction, field monitoring — consistently fail when deployed in African contexts.

Not because the AI is weak. Because the assumptions built into the models don't match the reality on the ground: inconsistent data, limited connectivity, different crop varieties, different disease profiles.

I'm building a model that starts from African conditions, not from borrowed assumptions.

The potential applications go from smallholder farmers all the way to large-scale agribusiness and insurance — anywhere decisions about crops are made on incomplete or delayed information.`,
      },
      {
        id: "p2-why-ai-roles",
        title: '“Why do you want to move into AI roles?”',
        subtitle: "AI company interview, data science team, ML engineering role",
        body: `I'm not moving away from anything — I'm building toward something specific.

I've spent years managing the systems that businesses rely on. I've seen where intelligence fails — where decisions get made on delayed data, where monitoring is reactive instead of proactive, where automation could eliminate entire categories of failure.

AI is the answer to those problems, when it's built right.

My MSc and the models I'm building aren't about changing direction. They're about becoming the kind of person who can solve problems that pure IT operations can't solve and that pure AI research doesn't reach.`,
      },
    ],
  },
  {
    id: "persona-smart-spark",
    label: "Persona 3 · Smart Spark Services",
    description: "Client conversations, pricing, founders, SMEs, LinkedIn, investors.",
    entries: [
      {
        id: "p3-first-client",
        title: '“What exactly do you do?” — First client encounter',
        subtitle: "Networking event, referral meeting, cold intro",
        body: `We help businesses grow faster by fixing the systems behind growth.

Sometimes that's a website that actually converts. Sometimes it's an internal system that removes manual work. Sometimes it's automation or AI tools that help a team make better decisions, faster.

What makes us different is that we don't approach projects as developers. We approach them as business problem solvers.

We're not building something nice. We're building something that improves revenue, speed, trust, or scale.`,
      },
      {
        id: "p3-soft-close",
        title: "The soft close — when they seem interested",
        subtitle: "After explaining what you do, they nod but don't commit",
        body: `I'd actually be curious — where do you feel the biggest friction in your operations right now?

Most businesses we talk to don't have a technology problem first. They have a visibility problem, a speed problem, or a scale problem.

The technology is usually just the solution once you know what the real bottleneck is.`,
      },
      {
        id: "p3-price",
        title: '“How much does it cost?” — Price objection',
        subtitle: "Client asking price before understanding value",
        body: `It depends on what we're solving, and that's not me avoiding the question — it's the honest truth.

A website that generates leads costs differently from a website that just exists. An automation that saves your team 20 hours a week has a different value than one that saves two.

What I can tell you is that we scope based on the business outcome you need, not a fixed price list.

Let's spend 20 minutes understanding what you're trying to achieve — then I can give you a number that actually makes sense for both of us.`,
      },
      {
        id: "p3-founder",
        title: "Pitching to a startup founder",
        subtitle: "Early-stage founder, pre-seed or seed, building fast",
        body: `Most startups get their product right and their systems wrong.

They grow — then they break. The website can't handle traffic. The internal tools are a mess of spreadsheets. Customer data lives in three different places. The team is making decisions on incomplete information.

We work with founders who want to scale without that chaos.

We build the operational infrastructure behind the product — websites, internal tools, automation, and now AI — so that growth doesn't create a new set of problems every quarter.`,
      },
      {
        id: "p3-sme",
        title: "Pitching to an SME or established business",
        subtitle: "Medium-sized company, traditional sector, not-tech-first",
        body: `Most established businesses have the right foundation but the wrong systems for where they're going next.

They're running on tools built for a smaller version of themselves — slower than they should be, more manual than they need to be, less visible than they want to be.

We come in and rebuild the operational layer — websites, internal systems, workflows, data tools — so the business runs at the speed it's actually capable of.

We've done this across different sectors and sizes. The problems are different. The result is usually the same: less friction, faster decisions, more control.`,
      },
      {
        id: "p3-li-business",
        title: "LinkedIn message — reaching out for business",
        subtitle: "Cold outreach to a business owner or decision-maker",
        body: `Hello [Name],

I came across [Company] and was genuinely impressed by [specific thing].

I run Smart Spark Services — we work with businesses to improve the systems behind growth: websites, operational tools, automation, and AI-powered solutions.

I noticed [one specific observation about their business] — and I thought there might be a conversation worth having.

No hard sell. I'd just be curious to learn more about where you're focusing for the next phase of growth.

Would you be open to a short call?`,
      },
      {
        id: "p3-investor",
        title: "Investor or strategic partner conversation",
        subtitle: "Angel investor, accelerator, strategic business partner",
        body: `Smart Spark Services is where infrastructure, operational systems, and intelligent technology meet for growing businesses.

We're not a typical agency. We're operational builders — we come in when a business is moving fast and its systems aren't keeping up.

What we're building toward is a platform that combines system design, AI integration, and operational consulting — so businesses don't just get a website or a tool, they get a system that scales with them.

The market is every business that's growing faster than its infrastructure can handle. In Africa alone, that's most of them.`,
      },
    ],
  },
];

export const essentialScripts: ScriptEntry[] = [
  {
    id: "script-1",
    title: "Script 1 — Executive business event",
    subtitle: "Formal room · resilience, scale, trust",
    body: `I lead enterprise IT environments focused on resilience, security, and operational scale.

Currently I'm the IT Manager at Kofisi Africa, where I manage infrastructure, networks, access control, cloud systems, and executive-level service delivery across multiple countries and locations.

I support high-value enterprise clients like Amazon, DHL Express, Bolt, and GIZ, where uptime and trust are non-negotiable.

A big part of my work is helping businesses scale without operational chaos—making sure technology becomes an enabler, not a hidden risk.

I also work a lot around AI and transformation, especially where intelligent systems can improve real business decisions.`,
  },
  {
    id: "script-2",
    title: "Script 2 — Short version (~30 seconds)",
    subtitle: "Elevator · crisp credibility",
    body: `I lead enterprise IT focused on resilience, cybersecurity, and business continuity.

Currently I'm the IT Manager at Kofisi Africa, managing networks, security, cloud systems, access control, and infrastructure across multiple locations supporting clients like Amazon and DHL Express.

My focus is building centralized, scalable systems that improve reliability, customer trust, and executive confidence.`,
  },
  {
    id: "script-3",
    title: "Script 3 — AI persona",
    subtitle: "When the room wants innovation depth",
    body: `Alongside enterprise IT leadership, I'm deeply focused on applied AI.

I'm currently pursuing my Master of Science in Artificial Intelligence, where my focus is using AI to solve real-world operational problems—not just theoretical models.

I'm particularly interested in AI for agriculture, intelligent surveillance, and business operations.

For example, I'm working around AI-driven agriculture models for crop disease detection and smarter decision-making for farmers, and also exploring intelligent CCTV systems using computer vision for security and operational monitoring.

My interest in AI is practical—if it doesn't improve decisions, productivity, or trust, I don't consider it useful.`,
  },
  {
    id: "script-4",
    title: "Script 4 — Smart Spark Services",
    subtitle: "Commercial builder lane",
    body: `I also work through Smart Spark Services, where we help businesses build practical digital solutions—websites, systems, automation platforms, and AI-driven business tools.

Our focus is not just development—it's solving business problems.

Sometimes that means high-converting websites, sometimes internal systems, and increasingly AI-powered solutions that improve workflows and decision-making.

I bring both enterprise IT leadership and startup execution, which means we build solutions that are practical, scalable, and business-focused.`,
  },
  {
    id: "script-5",
    title: "Script 5 — Global role positioning",
    subtitle: "International mandate",
    body: `My long-term focus is executive technology leadership at global scale—leading infrastructure, cybersecurity, transformation, and AI-driven operational strategy across multinational environments.

I've built strong experience supporting enterprise clients and high-performance organizations where uptime, resilience, and leadership confidence are critical.

What differentiates me is the combination of deep operational execution and strategic leadership—the ability to protect today while building tomorrow.`,
  },
  {
    id: "script-6",
    title: "Script 6 — If a CEO asks what you do",
    subtitle: "One-line gravity + expansion",
    body: `I help businesses scale safely.

Officially I lead enterprise IT operations across multiple locations for Kofisi Africa—networks, security, infrastructure, and executive-level operational systems.

More broadly, I work at the intersection of technology, business continuity, and AI—helping organizations grow without operational chaos.`,
  },
  {
    id: "script-7",
    title: "Script 7 — Client close",
    subtitle: "Smart Spark · outcome frame",
    body: `We help businesses grow faster by fixing the systems behind growth.

Sometimes that means websites that convert properly.

Sometimes it means internal operational systems, automation, customer workflows, or AI-powered solutions that remove inefficiency.

What makes us different is that we don't approach projects as developers—we approach them as business problem solvers.

The goal is not just building something nice. It is building something that improves revenue, speed, trust, or scalability.`,
  },
];

export const conversationTopics: TopicBlock[] = [
  {
    id: "topic-growth",
    title: "Topic 1 — Business growth",
    questions: [
      "Where do you see your business growing fastest right now?",
      "What’s currently creating the biggest bottleneck for scale?",
      "Are you expanding more through people, systems, or partnerships?",
    ],
  },
  {
    id: "topic-tech-pain",
    title: "Topic 2 — Technology pain",
    questions: [
      "What’s the one operational issue you wish technology would solve immediately?",
      "Most businesses have hidden inefficiencies—where do you feel yours is?",
      "Do you feel your current systems are helping growth or slowing it down?",
    ],
  },
  {
    id: "topic-ai",
    title: "Topic 3 — AI",
    questions: [
      "How is AI showing up in your industry right now?",
      "Are you looking at AI more for efficiency, analytics, or customer experience?",
      "I think most people chase AI hype—where do you think real value actually sits?",
    ],
  },
  {
    id: "topic-leadership",
    title: "Topic 4 — Leadership",
    questions: [
      "What has leadership taught you this year that experience didn’t?",
      "At senior level, I’ve noticed decision-making matters more than technical skill—have you found the same?",
      "What’s been your hardest leadership lesson recently?",
    ],
  },
  {
    id: "topic-networking",
    title: "Topic 5 — Networking",
    questions: [
      "What kind of opportunities are you most focused on this year?",
      "What kind of people do you enjoy working with most?",
      "What projects are exciting you most right now?",
    ],
  },
  {
    id: "topic-startups",
    title: "Topic 6 — Startups / founders",
    questions: [
      "What made you start this?",
      "What problem were you trying to solve originally?",
      "If you could fix one thing in your business overnight, what would it be?",
    ],
  },
];

export const transitionPhrases = {
  keepTalking: [
    "That’s actually interesting—tell me more about that.",
    "I’ve seen something similar before—how are you handling it?",
    "That’s where most businesses struggle, actually.",
    "Funny enough, that comes up a lot in my work too.",
    "That’s a smart way to look at it.",
    "I completely get that—especially at scale.",
  ],
  shiftToValue: [
    "That’s actually very close to the kind of work I handle.",
    "We recently dealt with something similar.",
    "That’s exactly where stronger systems make the biggest difference.",
    "That’s actually one of the biggest problems we solve.",
    "I see that a lot, especially with growing businesses.",
  ],
} as const;

export const lightJokes: { id: string; title: string; line: string }[] = [
  {
    id: "joke-it",
    title: "IT",
    line: "In IT, everything works perfectly… until someone says, ‘it was working yesterday.’",
  },
  {
    id: "joke-passwords",
    title: "Passwords",
    line: "Cybersecurity taught me one thing—people trust ‘Password123’ way too much.",
  },
  {
    id: "joke-wifi",
    title: "Wi‑Fi",
    line: "People only notice IT when WiFi disappears. Until then, we’re basically invisible superheroes.",
  },
  {
    id: "joke-printers",
    title: "Printers",
    line: "I’m convinced printers are where technology goes to test human patience.",
  },
  {
    id: "joke-startups",
    title: "Startups",
    line: "Every startup says they need a website. Usually what they really need is fewer WhatsApp approvals.",
  },
  {
    id: "joke-meetings",
    title: "Meetings",
    line: "Sometimes I feel half of leadership is just attending meetings about other meetings.",
  },
];

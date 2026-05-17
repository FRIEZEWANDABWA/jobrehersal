import type { Metadata } from "next";
import Link from "next/link";
import { BudgetTable } from "@/components/BudgetTable";
import {
  opexBreakdown, capexBreakdown, fullBudget, connectivityLinks,
  salaryStructure, m365Licensing, googleLicensing, saasLicensing,
  securityBudget, endUserDevices, networkInfra, laptopLifecycle,
  infraLifecycle, renewalPriority, cloudServers, boqExample,
} from "@/lib/budgetData";

export const metadata: Metadata = {
  title: "Enterprise ICT Budget",
  description: "Head of IT Annual Budget Framework — KES 200M enterprise-grade structure for executive presentations.",
};

function SectionHeader({ number, title, subtitle, amount }: { number: string; title: string; subtitle: string; amount: string }) {
  return (
    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-6">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/80">{number}</span>
        <h2 className="mt-1 text-xl font-bold text-slate-50">{title}</h2>
        <p className="text-sm text-slate-400 mt-1">{subtitle}</p>
      </div>
      <span className="font-mono text-2xl font-bold text-amber-400 shrink-0">{amount}</span>
    </div>
  );
}

function Pill({ label, color = "amber" }: { label: string; color?: "amber" | "emerald" | "rose" | "blue" }) {
  const colors = {
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  };
  return <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${colors[color]}`}>{label}</span>;
}

function TierCard({ tier, color, title, items }: { tier: string; color: string; title: string; items: string[] }) {
  return (
    <div className={`rounded-2xl border-l-4 ${color} bg-slate-900/30 p-6`}>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{tier}</span>
        <h3 className="font-semibold text-slate-100">{title}</h3>
      </div>
      <ul className="grid grid-cols-2 gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-400">
            <span className="text-amber-500/60">·</span>{item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function BudgetPage() {
  return (
    <div className="space-y-20">
      {/* Hero */}
      <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-950 px-8 py-12 sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.08),transparent_60%)]" aria-hidden />
        <div className="relative">
          <Link href="/" className="text-xs font-medium text-amber-400/80 hover:text-amber-300 transition-colors">← Command Centre</Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-amber-500/90">Financial Management</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">Head of IT Annual<br/>Budget Framework</h1>
          <p className="mt-4 text-lg text-slate-300">KES 200,000,000 · Enterprise Multi-Site · Annual Financial Year</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Pill label="~100+ Staff" />
            <Pill label="30 Internet Links" color="blue" />
            <Pill label="IT Team of 5" color="emerald" />
            <Pill label="Multi-Site Operations" color="rose" />
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { label: "Total Budget", value: "KES 200M" },
              { label: "OPEX", value: "KES 132M" },
              { label: "CAPEX", value: "KES 68M" },
              { label: "Staff", value: "110 Users" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4">
                <p className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</p>
                <p className="mt-2 text-2xl font-bold text-amber-400">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* CAPEX vs OPEX */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">CAPEX vs OPEX Overview</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center gap-3"><Pill label="OPEX" color="blue" /><span className="text-sm text-slate-400">Recurring operational costs</span></div>
            <BudgetTable columns={[{header:"Category",accessor:"category"},{header:"Annual (KES)",accessor:"amount",align:"right"}]} data={opexBreakdown} totalLabel="TOTAL OPEX" totalValue="132,000,000" />
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3"><Pill label="CAPEX" color="amber" /><span className="text-sm text-slate-400">Long-term investments</span></div>
            <BudgetTable columns={[{header:"Category",accessor:"category"},{header:"Annual (KES)",accessor:"amount",align:"right"}]} data={capexBreakdown} totalLabel="TOTAL CAPEX" totalValue="68,000,000" />
          </div>
        </div>
      </section>

      {/* Full Budget */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Complete Budget Structure</h2>
        <BudgetTable columns={[{header:"Category",accessor:"category"},{header:"%",accessor:"percent",align:"center"},{header:"Annual Cost (KES)",accessor:"amount",align:"right"}]} data={fullBudget} totalLabel="TOTAL BUDGET" totalValue="200,000,000" />
      </section>

      {/* 1. Connectivity */}
      <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/20 p-8">
        <SectionHeader number="Category 1" title="Internet & Connectivity" subtitle="30 active links · Main + backup · DIA + enterprise fiber · LTE failover" amount="KES 96M" />
        <BudgetTable columns={[{header:"Link Type",accessor:"type"},{header:"Qty",accessor:"qty",align:"center"},{header:"Avg Cost",accessor:"cost",align:"right"},{header:"Monthly Total",accessor:"total",align:"right"}]} data={connectivityLinks} totalLabel="TOTAL MONTHLY" totalValue="~8,000,000" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 mt-4">
          {[["ISP Contracts","1 year"],["DIA Contracts","1–3 years"],["Public IP Renewals","Annual"],["SD-WAN Subs","Annual"]].map(([k,v])=>(
            <div key={k} className="rounded-xl border border-slate-800/50 bg-slate-950/40 p-4">
              <p className="text-xs text-slate-500">{k}</p>
              <p className="mt-1 font-semibold text-amber-400 text-sm">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. Staff */}
      <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/20 p-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between mb-2">
          <SectionHeader number="Category 2" title="Staff Salaries & Benefits" subtitle="Internal IT team of 6 · OPEX · Business-critical capability" amount="KES 14M–15M" />
          <Pill label="CRITICAL" color="rose" />
        </div>
        <BudgetTable columns={[{header:"Role",accessor:"role"},{header:"Qty",accessor:"qty",align:"center"},{header:"Monthly (KES)",accessor:"monthly",align:"right"},{header:"Annual (KES)",accessor:"annual",align:"right"}]} data={salaryStructure} totalLabel="BASE PAY TOTAL" totalValue="11,160,000" />
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {[["NHIF/NSSF","500,000"],["Medical Cover","1,200,000"],["Airtime/Data","300,000"],["Training","400,000"],["Overtime","500,000"]].map(([k,v])=>(
            <div key={k} className="rounded-xl border border-slate-800/50 bg-slate-950/40 p-3 text-center">
              <p className="text-xs text-slate-500">{k}</p>
              <p className="mt-1 font-mono text-sm text-slate-300">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Cloud */}
      <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/20 p-8">
        <SectionHeader number="Category 3" title="Cloud & Productivity Licensing" subtitle="110 users · Microsoft 365 · Google Workspace · Zoho + SaaS" amount="KES 12.6M" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-400/80">Microsoft 365</p>
            <BudgetTable columns={[{header:"License",accessor:"type"},{header:"Qty",accessor:"qty",align:"center"},{header:"Annual",accessor:"annual",align:"right"}]} data={m365Licensing} totalLabel="M365 TOTAL" totalValue="3,936,000" />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400/80">Google Workspace</p>
            <BudgetTable columns={[{header:"License",accessor:"type"},{header:"Qty",accessor:"qty",align:"center"},{header:"Annual",accessor:"annual",align:"right"}]} data={googleLicensing} totalLabel="GOOGLE TOTAL" totalValue="2,160,000" />
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400/80">Zoho & SaaS</p>
            <BudgetTable columns={[{header:"Platform",accessor:"platform"},{header:"Annual",accessor:"annual",align:"right"}]} data={saasLicensing} totalLabel="SAAS TOTAL" totalValue="6,504,000" />
          </div>
        </div>
      </section>

      {/* 4-14 mini sections */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Categories 4–14 Deep Dive</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400/80">Security & Firewall — KES 8M</p>
            <BudgetTable columns={[{header:"Item",accessor:"item"},{header:"Annual (KES)",accessor:"annual",align:"right"}]} data={securityBudget} totalLabel="SECURITY TOTAL" totalValue="7,500,000" />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400/80">Cloud Server Infrastructure — KES 7M</p>
            <BudgetTable columns={[{header:"System",accessor:"system"},{header:"Type",accessor:"type"},{header:"Annual",accessor:"annual",align:"right"}]} data={cloudServers} totalLabel="CLOUD TOTAL" totalValue="~7,150,000" />
          </div>
        </div>
      </section>

      {/* Hardware */}
      <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/20 p-8">
        <SectionHeader number="Category 6" title="Hardware Refresh & Procurement" subtitle="End user devices · Network infrastructure · Lifecycle planning" amount="KES 18M" />
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">End User Devices</p>
            <BudgetTable columns={[{header:"Item",accessor:"item"},{header:"Qty",accessor:"qty",align:"center"},{header:"Unit",accessor:"unit",align:"right"},{header:"Total",accessor:"total",align:"right"}]} data={endUserDevices} totalLabel="DEVICES TOTAL" totalValue="13,380,000" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">Network Infrastructure</p>
            <BudgetTable columns={[{header:"Item",accessor:"item"},{header:"Qty",accessor:"qty",align:"center"},{header:"Unit",accessor:"unit",align:"right"},{header:"Total",accessor:"total",align:"right"}]} data={networkInfra} totalLabel="NETWORK TOTAL" totalValue="11,000,000" />
          </div>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Enterprise Hardware Lifecycle & Renewal Schedule</h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <BudgetTable columns={[{header:"Device",accessor:"type"},{header:"Cycle",accessor:"cycle"},{header:"Cost (KES)",accessor:"cost",align:"right"}]} data={laptopLifecycle} />
          <BudgetTable columns={[{header:"Device",accessor:"device"},{header:"Lifecycle",accessor:"lifecycle"}]} data={infraLifecycle} />
          <BudgetTable columns={[{header:"Priority",accessor:"priority",align:"center"},{header:"Area",accessor:"area"},{header:"Reason",accessor:"reason"}]} data={renewalPriority} />
        </div>
      </section>

      {/* Cost Optimization */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-50">Advanced Cost Optimization</h2>
          <p className="mt-2 text-slate-400 text-sm max-w-3xl">Real-world examples that separate IT Managers from strategic Head of IT / CIO leadership.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/20 bg-slate-900/30 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Pill label="Case Study 1" color="emerald" />
              <h3 className="font-semibold text-slate-100">Cisco IP Telephony → 3CX Migration</h3>
            </div>
            <BudgetTable columns={[{header:"Area",accessor:"area"},{header:"Cisco Annual",accessor:"before",align:"right"},{header:"3CX Annual",accessor:"after",align:"right"}]} data={[{area:"Licensing",before:"3,500,000",after:"800,000"},{area:"Support Contracts",before:"1,500,000",after:"300,000"},{area:"Hardware Expansion",before:"2,000,000",after:"500,000"}]} totalLabel="ESTIMATED SAVINGS" totalValue="~KES 5M+" />
          </div>
          <div className="rounded-2xl border border-blue-500/20 bg-slate-900/30 p-6 space-y-4">
            <div className="flex items-center gap-3">
              <Pill label="Case Study 2" color="blue" />
              <h3 className="font-semibold text-slate-100">Salto Access Control → Impro Migration</h3>
            </div>
            <BudgetTable columns={[{header:"Area",accessor:"area"},{header:"Previous",accessor:"before",align:"right"},{header:"Improved",accessor:"after",align:"right"}]} data={[{area:"Licensing",before:"2,400,000",after:"300,000"},{area:"Vendor Support",before:"1,200,000",after:"400,000"},{area:"Expansion Costs",before:"2,000,000",after:"700,000"}]} totalLabel="ESTIMATED SAVINGS" totalValue="~KES 4M annually" />
          </div>
        </div>
      </section>

      {/* Prioritization */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Executive-Level Budget Prioritization</h2>
        <div className="space-y-4">
          <TierCard tier="Tier 1 — Business Critical" color="border-rose-500/70" title="Must never fail" items={["Internet connectivity","Firewalls/security","Backups & DR","Core infrastructure","Access control","Endpoint protection","Staff salaries","DR capability"]} />
          <TierCard tier="Tier 2 — Operational Optimization" color="border-amber-500/70" title="Improves efficiency" items={["Monitoring systems","Automation","Device refresh","Vendor optimization","ITSM platforms","Reporting systems"]} />
          <TierCard tier="Tier 3 — Strategic Innovation" color="border-emerald-500/70" title="Long-term transformation" items={["AI initiatives","Cloud migration","Advanced analytics","SD-WAN transformation","Zero Trust","Advanced SOC monitoring"]} />
        </div>
      </section>

      {/* BOQ */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Sample Bill of Quantities (BOQ)</h2>
        <p className="text-sm text-slate-400">A BOQ is critical for budgeting, procurement, approvals, vendor comparison, and governance.</p>
        <BudgetTable columns={[{header:"Item",accessor:"item"},{header:"Qty",accessor:"qty",align:"center"},{header:"Unit Cost",accessor:"unit",align:"right"},{header:"Total Cost",accessor:"total",align:"right"},{header:"Vendor",accessor:"vendor"},{header:"Priority",accessor:"priority",align:"center"}]} data={boqExample} />
      </section>

      {/* Governance */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Financial Governance Approach</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { period: "Monthly Reviews", items: ["ISP costs","Incident trends","License utilization","Vendor performance","Cloud consumption","SLA reporting"] },
            { period: "Quarterly Reviews", items: ["Security posture","Hardware lifecycle","Asset depreciation","CapEx tracking","Risk assessments","Project ROI"] },
            { period: "Annual Reviews", items: ["Strategic roadmap","Budget optimization","Vendor renegotiation","Infrastructure refresh","DR testing","Cybersecurity maturity"] },
          ].map((g) => (
            <div key={g.period} className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6">
              <p className="font-semibold text-amber-400 text-sm mb-4">{g.period}</p>
              <ul className="space-y-2">
                {g.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-amber-500/60">·</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Forgotten Budget Areas */}
      <section className="space-y-6">
        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Commonly Forgotten Budget Areas</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {["Software Renewals","Warranty Extensions","DR & Backup Costs","Power & Cooling","Security Awareness Training","Internet Failover","Asset Replacement Cycles","Cyber Insurance","Compliance Costs","Operational Travel"].map((item,i)=>(
            <div key={i} className="rounded-xl border border-rose-500/20 bg-rose-500/5 p-4 text-center">
              <span className="text-2xl font-bold text-rose-400/60">{i+1}</span>
              <p className="mt-2 text-xs text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interview Answer */}
      <section className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-8 sm:p-12">
        <h2 className="text-2xl font-bold text-amber-400 mb-6">Boardroom Answer: "How would you structure and manage an ICT budget?"</h2>
        <blockquote className="border-l-2 border-amber-500/50 pl-6 space-y-4 text-slate-300 leading-relaxed">
          <p>"I typically structure ICT budgets into both operational expenditure and capital expenditure aligned with organizational priorities, operational risk, and long-term scalability.</p>
          <p>Operational expenditure would cover recurring areas such as connectivity, cloud licensing, cybersecurity renewals, support contracts, monitoring platforms, backup services, and operational staffing.</p>
          <p>Capital expenditure would focus on infrastructure modernization, hardware refresh cycles, network upgrades, security infrastructure, digital transformation initiatives, and long-term resilience investments.</p>
          <p>I also prioritize budgets using a risk-based and business-impact-driven model where operational continuity, cybersecurity, and core infrastructure reliability receive the highest priority.</p>
          <p className="text-amber-200 font-medium">My approach is always focused on ensuring technology investments directly support organizational resilience, scalability, security, and long-term strategic objectives."</p>
        </blockquote>
        <div className="mt-8 pt-6 border-t border-slate-800/60">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Golden Rule</p>
          <p className="text-slate-400">Never present budgets as <span className="line-through text-slate-600">"Buying devices and internet."</span></p>
          <p className="mt-2 text-amber-300 font-medium">Always frame as: Operational resilience · Security risk reduction · Scalability investment · Digital transformation support.</p>
        </div>
      </section>
    </div>
  );
}

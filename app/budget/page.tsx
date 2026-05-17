import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";
import { BudgetTable } from "@/components/BudgetTable";

export const metadata: Metadata = {
  title: "Enterprise ICT Budget",
  description: "Head of IT Annual Budget Framework (KES 200M Example)",
};

export default function BudgetPage() {
  return (
    <div className="space-y-16">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <PageIntro
          eyebrow="Financial Management"
          title="Head of IT Annual Budget Framework"
          description="A realistic enterprise-style ICT budget structure for a multi-site organization. Designed for planning, executive meetings, and high-stakes boardroom defenses."
        />
        <Link
          href="/"
          className="shrink-0 text-sm font-medium text-amber-400/90 hover:text-amber-200 transition-colors"
        >
          ← Command Centre
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-6 sm:p-8 lg:col-span-1">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-500/90">
            Overview & Assumptions
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> ~100+ staff (100–120 users)</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Multi-site enterprise environment</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> 30 internet links (50Mbps–500Mbps)</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Main + backup ISP redundancy</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Internal IT team of 5</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Enterprise clients hosted/support-managed</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Access control & CCTV centrally managed</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Hybrid cloud (Microsoft + Google + Zoho)</li>
            <li className="flex items-center gap-2"><span className="text-amber-500">•</span> Enterprise firewall infrastructure</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-800/90 bg-slate-950/40 p-6 sm:p-8 lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-6">
            CAPEX vs OPEX Overview
          </h2>
          <BudgetTable
            columns={[
              { header: "Category", accessor: "category" },
              { header: "Type", accessor: "type" },
              { header: "Annual Amount (KES)", accessor: "amount", align: "right" },
            ]}
            data={[
              { category: "CAPEX", type: "Long-term investments", amount: "68,000,000" },
              { category: "OPEX", type: "Recurring operational costs", amount: "132,000,000" },
            ]}
            totalLabel="Full ICT Budget"
            totalValue="200,000,000"
          />
        </section>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-50">OPEX Breakdown — KES 132M</h2>
          <p className="text-sm text-slate-400">Operational recurring expenditure.</p>
          <BudgetTable
            columns={[
              { header: "Category", accessor: "category" },
              { header: "Annual Cost (KES)", accessor: "amount", align: "right" },
            ]}
            data={[
              { category: "Internet & Connectivity", amount: "96,000,000" },
              { category: "Cloud & Productivity Licenses", amount: "12,600,000" },
              { category: "Security & Firewall Renewals", amount: "7,500,000" },
              { category: "Vendor Support Contracts", amount: "4,500,000" },
              { category: "Monitoring & Management Tools", amount: "2,400,000" },
              { category: "Backup & DR Services", amount: "3,000,000" },
              { category: "Power, UPS & Gen Maintenance", amount: "2,500,000" },
              { category: "Training & Certifications", amount: "1,500,000" },
              { category: "Misc Operational Costs", amount: "2,500,000" },
            ]}
            totalLabel="TOTAL OPEX"
            totalValue="132,000,000"
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-slate-50">CAPEX Breakdown — KES 68M</h2>
          <p className="text-sm text-slate-400">Infrastructure and long-term investments.</p>
          <BudgetTable
            columns={[
              { header: "Category", accessor: "category" },
              { header: "Annual Cost (KES)", accessor: "amount", align: "right" },
            ]}
            data={[
              { category: "End User Devices", amount: "18,000,000" },
              { category: "Network Infrastructure", amount: "15,000,000" },
              { category: "Security Infrastructure", amount: "10,000,000" },
              { category: "Access Control & CCTV Expansion", amount: "7,000,000" },
              { category: "Server & Storage Infrastructure", amount: "8,000,000" },
              { category: "Data Center/Server Room Improvements", amount: "3,000,000" },
              { category: "IT Projects & Digital Transformation", amount: "5,000,000" },
              { category: "Contingency Reserve", amount: "2,000,000" },
            ]}
            totalLabel="TOTAL CAPEX"
            totalValue="68,000,000"
          />
        </section>
      </div>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold text-amber-400">Detailed Enterprise ICT Budget Structure</h2>
        <BudgetTable
          columns={[
            { header: "Category", accessor: "category" },
            { header: "% of Budget", accessor: "percent", align: "right" },
            { header: "Estimated Annual Cost (KES)", accessor: "amount", align: "right" },
          ]}
          data={[
            { category: "Internet & Connectivity", percent: "48%", amount: "96,000,000" },
            { category: "Staff Salaries & Benefits", percent: "5%", amount: "10,800,000" },
            { category: "Cloud & Productivity Licenses", percent: "6%", amount: "12,000,000" },
            { category: "Security & Firewall Licensing", percent: "4%", amount: "8,000,000" },
            { category: "Infrastructure Maintenance & Support", percent: "6%", amount: "12,000,000" },
            { category: "Hardware Refresh & Procurement", percent: "9%", amount: "18,000,000" },
            { category: "Access Control & CCTV Systems", percent: "3%", amount: "6,000,000" },
            { category: "Backup, DR & Business Continuity", percent: "2.5%", amount: "5,000,000" },
            { category: "IT Projects & Transformation", percent: "7.5%", amount: "15,000,000" },
            { category: "Training & Certifications", percent: "1%", amount: "2,000,000" },
            { category: "Vendor Support Contracts", percent: "2.5%", amount: "5,000,000" },
            { category: "Power, UPS & Generator Support", percent: "2%", amount: "4,000,000" },
            { category: "Monitoring & Management Tools", percent: "1.5%", amount: "3,000,000" },
            { category: "Contingency & Emergency Reserve", percent: "1.6%", amount: "3,200,000" },
            { category: "Miscellaneous Operational Costs", percent: "0.1%", amount: "200,000" },
          ]}
          totalLabel="TOTAL"
          totalValue="200,000,000"
        />
      </section>

      {/* DETAILED DRILLDOWNS */}
      <div className="space-y-12 border-t border-slate-800/80 pt-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">Deep Dive by Category</h2>

        <section className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-amber-400">1. Internet & Connectivity — KES 96M (OPEX)</h3>
          <p className="mt-2 text-sm text-slate-400">30 active ISP links · Main + backup redundancy · DIA + enterprise fiber · Client-managed circuits</p>
          <div className="mt-6">
            <BudgetTable
              columns={[
                { header: "Link Type", accessor: "type" },
                { header: "Qty", accessor: "qty", align: "center" },
                { header: "Average Cost", accessor: "cost", align: "right" },
                { header: "Monthly Total", accessor: "total", align: "right" },
              ]}
              data={[
                { type: "Main DIA Fiber 500Mbps", qty: 4, cost: "350,000", total: "1,400,000" },
                { type: "Enterprise Fiber 200Mbps", qty: 8, cost: "180,000", total: "1,440,000" },
                { type: "Enterprise Fiber 100Mbps", qty: 10, cost: "120,000", total: "1,200,000" },
                { type: "SME Fiber 50Mbps", qty: 5, cost: "65,000", total: "325,000" },
                { type: "Backup LTE/Fiber Links", qty: 20, cost: "25,000", total: "500,000" },
                { type: "Client Managed Connectivity", qty: "Various", cost: "—", total: "2,500,000" },
                { type: "Public IP/BGP/Routing", qty: "—", cost: "—", total: "200,000" },
                { type: "SD-WAN/MPLS/VPN", qty: "—", cost: "—", total: "435,000" },
              ]}
              totalLabel="TOTAL MONTHLY"
              totalValue="~8,000,000"
            />
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-amber-400">2. Staff Salaries & Benefits — KES 12M–15M (OPEX)</h3>
          <p className="mt-2 text-sm text-slate-400">CRITICAL: Staff capability directly affects incident response, continuity, and cybersecurity posture.</p>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BudgetTable
              columns={[
                { header: "Role", accessor: "role" },
                { header: "Qty", accessor: "qty", align: "center" },
                { header: "Monthly Salary", accessor: "salary", align: "right" },
              ]}
              data={[
                { role: "Head of IT", qty: 1, salary: "350,000" },
                { role: "Infrastructure & Network Engineer", qty: 1, salary: "180,000" },
                { role: "Systems Administrator", qty: 1, salary: "150,000" },
                { role: "IT Support Engineer (L2)", qty: 1, salary: "100,000" },
                { role: "IT Support Engineer (L1)", qty: 1, salary: "80,000" },
                { role: "Access Control/CCTV Technician", qty: 1, salary: "70,000" },
              ]}
              totalLabel="TOTAL BASE PAY / MONTH"
              totalValue="930,000"
            />
            <div className="space-y-4 text-sm text-slate-300 bg-slate-950/40 p-6 rounded-xl border border-slate-800/50">
              <h4 className="font-semibold text-slate-50 uppercase tracking-wide">Additional Employment Costs</h4>
              <ul className="space-y-2">
                <li className="flex justify-between"><span>NHIF/NSSF</span> <span className="font-mono">500,000</span></li>
                <li className="flex justify-between"><span>Medical Cover</span> <span className="font-mono">1,200,000</span></li>
                <li className="flex justify-between"><span>Airtime/Data</span> <span className="font-mono">300,000</span></li>
                <li className="flex justify-between"><span>Training Support</span> <span className="font-mono">400,000</span></li>
                <li className="flex justify-between"><span>Overtime/On-call</span> <span className="font-mono">500,000</span></li>
              </ul>
              <div className="pt-4 mt-4 border-t border-slate-800/50 flex justify-between font-semibold text-amber-400">
                <span>ESTIMATED TOTAL</span> <span>KES 14M–15M</span>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800/60 bg-slate-900/20 p-6 sm:p-8">
          <h3 className="text-lg font-semibold text-amber-400">3. Cloud & Productivity Licensing — KES 12.6M (OPEX)</h3>
          <p className="mt-2 text-sm text-slate-400">110 active staff users · Mixed licensing model · Executive + standard users</p>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <BudgetTable
              columns={[
                { header: "M365 License Type", accessor: "type" },
                { header: "Qty", accessor: "qty", align: "center" },
                { header: "Annual Total", accessor: "total", align: "right" },
              ]}
              data={[
                { type: "M365 Business Premium", qty: 40, total: "1,536,000" },
                { type: "M365 E3", qty: 20, total: "1,320,000" },
                { type: "M365 Business Standard", qty: 50, total: "1,080,000" },
              ]}
            />
            <BudgetTable
              columns={[
                { header: "Google/Zoho/SaaS Platform", accessor: "platform" },
                { header: "Annual Cost", accessor: "cost", align: "right" },
              ]}
              data={[
                { platform: "Google Workspace (Std/Plus)", cost: "2,160,000" },
                { platform: "Zoho Suite", cost: "1,000,000" },
                { platform: "Endpoint Management", cost: "1,500,000" },
                { platform: "Email Security & MFA/SSO", cost: "1,900,000" },
                { platform: "Zoom/Meet & Misc SaaS", cost: "2,104,000" },
              ]}
              totalLabel="SAAS TOTAL"
              totalValue="8,664,000"
            />
          </div>
        </section>
      </div>

      {/* STRATEGY & LIFECYCLE */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 pt-12">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50">Enterprise Hardware Lifecycle</h2>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-amber-500/90 mb-4">Laptop Refresh Cycle</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex justify-between items-center"><span className="font-medium text-slate-100">Standard User Laptop</span> <span className="font-mono bg-slate-950/50 px-2 py-1 rounded">4 years</span></li>
                <li className="flex justify-between items-center"><span className="font-medium text-slate-100">Executive Laptop</span> <span className="font-mono bg-slate-950/50 px-2 py-1 rounded">3 years</span></li>
                <li className="flex justify-between items-center"><span className="font-medium text-slate-100">Engineering Workstation</span> <span className="font-mono bg-slate-950/50 px-2 py-1 rounded">5 years</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-amber-500/90 mb-4">Infrastructure Lifecycle</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex justify-between items-center"><span className="font-medium text-slate-100">Core Firewall / Servers</span> <span className="font-mono bg-slate-950/50 px-2 py-1 rounded">5 years</span></li>
                <li className="flex justify-between items-center"><span className="font-medium text-slate-100">Core Switches / Storage Arrays</span> <span className="font-mono bg-slate-950/50 px-2 py-1 rounded">5–7 years</span></li>
                <li className="flex justify-between items-center"><span className="font-medium text-slate-100">Access Points / UPS Systems</span> <span className="font-mono bg-slate-950/50 px-2 py-1 rounded">3–5 years</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50">Executive-Level Prioritization</h2>
          <div className="space-y-4">
            <div className="rounded-2xl border-l-4 border-rose-500/80 bg-slate-900/30 p-6">
              <h3 className="font-semibold text-slate-100">Tier 1 — Business Critical (Must never fail)</h3>
              <p className="mt-2 text-sm text-slate-400">Internet connectivity, Firewalls/security, Backups, Core infrastructure, Access control, Endpoint protection, DR capability.</p>
            </div>
            <div className="rounded-2xl border-l-4 border-amber-500/80 bg-slate-900/30 p-6">
              <h3 className="font-semibold text-slate-100">Tier 2 — Operational Optimization (Efficiency)</h3>
              <p className="mt-2 text-sm text-slate-400">Monitoring systems, Automation, Device refresh, Vendor optimization, ITSM platforms, Reporting systems.</p>
            </div>
            <div className="rounded-2xl border-l-4 border-emerald-500/80 bg-slate-900/30 p-6">
              <h3 className="font-semibold text-slate-100">Tier 3 — Strategic Innovation (Long-term)</h3>
              <p className="mt-2 text-sm text-slate-400">AI initiatives, Cloud migration, Advanced analytics, SD-WAN transformation, Zero Trust initiatives, SOC monitoring.</p>
            </div>
          </div>
        </section>
      </div>

      {/* EXECUTIVE ADVICE SECTION */}
      <section className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/[0.05] to-slate-950/80 p-8 sm:p-12 text-center mt-12">
        <h2 className="text-2xl font-bold tracking-tight text-amber-400 mb-6">The Boardroom Presentation Strategy</h2>
        <div className="max-w-3xl mx-auto space-y-6 text-left">
          <p className="text-slate-300 italic text-lg leading-relaxed border-l-2 border-amber-500/50 pl-6">
            “I typically structure ICT budgets into both operational expenditure and capital expenditure aligned with organizational priorities, operational risk, and long-term scalability. 
            <br/><br/>
            I prioritize budgets using a risk-based and business-impact-driven model where operational continuity, cybersecurity, and core infrastructure reliability receive the highest priority... My approach is always focused on ensuring technology investments directly support organizational resilience, scalability, security, and long-term strategic objectives.”
          </p>
          <div className="pt-6 border-t border-slate-800/60 flex flex-col items-center">
            <p className="text-sm text-slate-400 uppercase tracking-widest font-semibold mb-4">Golden Rule</p>
            <p className="text-slate-200">Never present budgets as <span className="line-through text-slate-500">“Buying devices and internet.”</span></p>
            <p className="text-amber-300 font-medium mt-2">Always present them as: Operational resilience, Security risk reduction, Scalability investment, and Digital transformation support.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

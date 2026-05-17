"use client";

import { useState } from "react";
import Link from "next/link";
import { BudgetNav } from "@/components/BudgetNav";
import { BudgetTable } from "@/components/BudgetTable";
import {
  fullBudget,
  opexBreakdown,
  capexBreakdown,
  mainCentres,
  enterpriseClients,
  operationalConnectivity,
  accessControlCosts,
  cctvCosts,
  backupCosts,
  bcpCosts,
  drPriorities,
  projectAccessControl,
  projectNetwork,
  projectERP,
  projectAI,
  projectSDWAN,
  budgetScenarios,
  interviewQA,
  securityBudget,
  endUserDevices,
  kpiDashboard,
  varianceExamples,
  renewalPriority,
  m365Licensing,
  googleLicensing,
  saasLicensing,
  salaryStructure,
} from "@/lib/budgetData";

function Pill({ label, color = "amber" }: { label: string; color?: "amber" | "emerald" | "rose" | "blue" | "slate" }) {
  const colors = {
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    emerald: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    rose: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    slate: "bg-slate-500/10 text-slate-400 border-slate-500/30",
  };
  return <span className={`inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${colors[color]}`}>{label}</span>;
}

function SectionTitle({ number, title, subtitle, amount }: { number?: string; title: string; subtitle?: string; amount?: string }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-slate-800/80 pb-4 mb-6">
      <div>
        {number && <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500">{number}</span>}
        <h2 className="mt-1 text-xl font-extrabold tracking-tight text-slate-50 sm:text-2xl">{title}</h2>
        {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
      </div>
      {amount && (
        <div className="shrink-0 text-left sm:text-right mt-2 sm:mt-0">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block">Allocated Cost</span>
          <span className="font-mono text-2xl font-black text-amber-400">{amount}</span>
        </div>
      )}
    </div>
  );
}

export default function BudgetPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedScenario, setSelectedScenario] = useState("Balanced Strategic");
  const [activeProjectTab, setActiveProjectTab] = useState("access-control");

  const currentScenario = budgetScenarios.find((s) => s.name === selectedScenario) || budgetScenarios[1];

  return (
    <div className="space-y-12">
      {/* Dynamic Immersive Hero */}
      <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6 py-10 sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.06),transparent_60%)]" aria-hidden />
        <div className="relative z-10 space-y-6">
          <div>
            <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors">
              <span>←</span> <span>Command Centre</span>
            </Link>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-500/90">Enterprise Financial Governance</p>
            <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-50 sm:text-5xl leading-none">
              Head of IT Annual<br/>Budget Framework
            </h1>
            <p className="mt-3 text-sm text-slate-300 max-w-2xl">
              A high-performance KES 200M enterprise-grade ICT budget blueprint structured for planning, COO/CFO presentations, and strategic executive alignment.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Pill label="100–120 Users" color="slate" />
            <Pill label="30+ ISP Circuits" color="blue" />
            <Pill label="Multi-Site Uptime" color="emerald" />
            <Pill label="Enterprise SLAs" color="rose" />
            <Pill label="Hybrid Infrastructure" color="amber" />
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 pt-4 border-t border-slate-800/60">
            {[
              { label: "Recommended Budget", value: "KES 200M", desc: "Balanced Scenario" },
              { label: "OPEX Allocation", value: "KES 132M", desc: "Recurring Costs (66%)" },
              { label: "CAPEX Allocation", value: "KES 68M", desc: "Investments (34%)" },
              { label: "Core Connectivity", value: "KES 96M", desc: "48% of total budget" },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-slate-800/40 bg-slate-950/40 p-4">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                <p className="mt-1 text-xl sm:text-2xl font-black text-amber-400">{stat.value}</p>
                <p className="text-[10px] text-slate-400 mt-1">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Tabbed In-Page Navigation */}
      <BudgetNav activeTab={activeTab} onChange={setActiveTab} />

      {/* Dynamic Content Container */}
      <main className="space-y-12">
        
        {/* ─── TAB: OVERVIEW ─── */}
        {activeTab === "overview" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-bold text-slate-100 mb-2">Executive Summary</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                This framework maps out the operational and capital investments required to manage a resilient, multi-site corporate workspace with high-throughput redundancy, central security integrations, and hosted mission-critical client setups. Designed to transition IT departments from operational cost centers into high-value strategic growth partners.
              </p>
            </div>

            <section className="space-y-6">
              <SectionTitle title="CAPEX vs OPEX Architecture" subtitle="Strategic split of annual funds across operations and key modernization cycles." />
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="space-y-4 rounded-2xl border border-slate-800/60 bg-slate-900/10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Pill label="OPEX" color="blue" />
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Recurring Costs</span>
                    </div>
                    <span className="font-mono text-lg font-bold text-blue-400">KES 132,000,000</span>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "Category", accessor: "category" },
                      { header: "Annual Cost (KES)", accessor: "amount", align: "right" }
                    ]} 
                    data={opexBreakdown} 
                    totalLabel="TOTAL OPEX" 
                    totalValue="132,000,000" 
                  />
                </div>

                <div className="space-y-4 rounded-2xl border border-slate-800/60 bg-slate-900/10 p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Pill label="CAPEX" color="amber" />
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Capital Investment</span>
                    </div>
                    <span className="font-mono text-lg font-bold text-amber-400">KES 68,000,000</span>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "Category", accessor: "category" },
                      { header: "Annual Cost (KES)", accessor: "amount", align: "right" }
                    ]} 
                    data={capexBreakdown} 
                    totalLabel="TOTAL CAPEX" 
                    totalValue="68,000,000" 
                  />
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <SectionTitle title="Complete Line-Item Allocation" subtitle="Percentage-based weight of all fifteen ICT budget lines." />
              <BudgetTable 
                columns={[
                  { header: "Category", accessor: "category" },
                  { header: "Type", accessor: "type", align: "center" },
                  { header: "% of Budget", accessor: "percent", align: "center" },
                  { header: "Estimated Annual Cost (KES)", accessor: "amount", align: "right" }
                ]} 
                data={fullBudget} 
                totalLabel="GRAND TOTAL BUDGET" 
                totalValue="200,000,000" 
              />
            </section>

            {/* ICT Team Salaries */}
            <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/20 p-6 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <SectionTitle title="Staff Salaries & Benefits" subtitle="Internal ICT department structure supporting multi-site services." amount="KES 14,000,000" />
                <Pill label="CRITICAL ROLE SUPPORT" color="rose" />
              </div>
              <BudgetTable 
                columns={[
                  { header: "Role", accessor: "role" },
                  { header: "Qty", accessor: "qty", align: "center" },
                  { header: "Monthly Salary (KES)", accessor: "monthly", align: "right" },
                  { header: "Annual Total (KES)", accessor: "annual", align: "right" }
                ]} 
                data={salaryStructure} 
                totalLabel="BASE PAY PAYROLL TOTAL" 
                totalValue="11,160,000" 
              />
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  ["NHIF / NSSF Statutory", "KES 500,000"],
                  ["Comprehensive Medical", "KES 1,200,000"],
                  ["Staff Airtime & Data", "KES 300,000"],
                  ["Continuous Certification", "KES 400,000"],
                  ["Overtime & On-Call", "KES 500,000"],
                ].map(([title, cost]) => (
                  <div key={title} className="rounded-xl border border-slate-800/50 bg-slate-950/40 p-3 text-center">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{title}</p>
                    <p className="mt-1 font-mono text-xs font-bold text-slate-300">{cost}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Cloud & Productivity Licensing */}
            <section className="space-y-6 rounded-3xl border border-slate-800/60 bg-slate-900/20 p-6 sm:p-8">
              <SectionTitle title="Cloud & Productivity Licensing" subtitle="Enterprise multi-tenant suite for standard and power users." amount="KES 12,600,000" />
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-400">Microsoft 365 Tenant</p>
                  <BudgetTable 
                    columns={[
                      { header: "License Type", accessor: "type" },
                      { header: "Qty", accessor: "qty", align: "center" },
                      { header: "Annual", accessor: "annual", align: "right" }
                    ]} 
                    data={m365Licensing} 
                    totalLabel="M365 TOTAL" 
                    totalValue="3,936,000" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Google Workspace Tenant</p>
                  <BudgetTable 
                    columns={[
                      { header: "License Type", accessor: "type" },
                      { header: "Qty", accessor: "qty", align: "center" },
                      { header: "Annual", accessor: "annual", align: "right" }
                    ]} 
                    data={googleLicensing} 
                    totalLabel="GOOGLE TOTAL" 
                    totalValue="2,160,000" 
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-400">Core SaaS & Security Integrations</p>
                  <BudgetTable 
                    columns={[
                      { header: "Platform Service", accessor: "platform" },
                      { header: "Annual (KES)", accessor: "annual", align: "right" }
                    ]} 
                    data={saasLicensing} 
                    totalLabel="SAAS TOTAL" 
                    totalValue="6,504,000" 
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ─── TAB: CONNECTIVITY ─── */}
        {activeTab === "connectivity" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <div className="flex gap-3">
                <span className="text-lg">⚡</span>
                <div>
                  <h4 className="font-bold text-blue-300 text-sm">Enterprise Multi-Site Redundancy Blueprint</h4>
                  <p className="mt-1 text-xs text-slate-300 leading-relaxed">
                    Designed with an active-active-failover architecture. Four critical hubs utilize triple ISP paths: Main ISP (Safaricom), Backup ISP (Liquid Intelligent Technologies), and Third Fallback ISP (DDA/Alternative Fiber).
                  </p>
                </div>
              </div>
            </div>

            <section className="space-y-6">
              <SectionTitle number="Connectivity Hub 1" title="Major Office Connectivity Paths" subtitle="Multi-provider routing across the 4 key business operational centers." amount="KES 35,280,000" />
              <BudgetTable 
                columns={[
                  { header: "Operational Center", accessor: "site" },
                  { header: "Main Link (Active)", accessor: "main" },
                  { header: "Backup Link (Redundant)", accessor: "backup" },
                  { header: "Tertiary ISP (Failover)", accessor: "third" },
                  { header: "Monthly Cost (KES)", accessor: "monthly", align: "right" }
                ]} 
                data={mainCentres} 
                totalLabel="CENTRES MONTHLY TOTAL" 
                totalValue="2,940,000" 
              />
            </section>

            <section className="space-y-6">
              <SectionTitle number="Connectivity Hub 2" title="Enterprise Client Dedicated Connectivity" subtitle="Direct Internet Access (DIA) dedicated circuits ensuring client SLA compliance." amount="KES 43,680,000" />
              <BudgetTable 
                columns={[
                  { header: "Client Environment", accessor: "client" },
                  { header: "Dedicated Link Configuration", accessor: "link" },
                  { header: "Monthly Billing (KES)", accessor: "monthly", align: "right" }
                ]} 
                data={enterpriseClients} 
                totalLabel="CLIENTS MONTHLY TOTAL" 
                totalValue="3,640,000" 
              />
            </section>

            <section className="space-y-6">
              <SectionTitle number="Connectivity Hub 3" title="Additional Operational Connectivity & Reserves" subtitle="LTE fallback links, Public IP routing, and branch expansion reserves." amount="KES 17,040,000" />
              <BudgetTable 
                columns={[
                  { header: "Service Component", accessor: "service" },
                  { header: "Monthly Allocation (KES)", accessor: "monthly", align: "right" }
                ]} 
                data={operationalConnectivity} 
                totalLabel="SERVICES MONTHLY TOTAL" 
                totalValue="1,420,000" 
              />
            </section>

            {/* Consolidation Summary card */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center font-mono">
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-sans font-semibold">HQ & Branch Centres</p>
                <p className="mt-2 text-xl font-bold text-slate-100">KES 2.94M / Mo</p>
              </div>
              <div className="border-t sm:border-t-0 sm:border-x border-slate-800/60 py-4 sm:py-0">
                <p className="text-xs text-slate-500 uppercase tracking-wider font-sans font-semibold">Enterprise Clients (SLA)</p>
                <p className="mt-2 text-xl font-bold text-slate-100">KES 3.64M / Mo</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-sans font-semibold">Operational Routing & LTE</p>
                <p className="mt-2 text-xl font-bold text-slate-100">KES 1.42M / Mo</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB: ACCESS & CCTV ─── */}
        {activeTab === "access-cctv" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-bold text-slate-100 mb-2">Centralized Facilities & ICT Integration</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Modern enterprise security is managed centrally by the ICT department. This section lists all card replenishment, database systems, contractor fees, CCTV storage expansion pools, and biometric face/fingerprint terminals.
              </p>
            </div>

            <section className="space-y-6">
              <SectionTitle title="Access Control Budget Breakdown" subtitle="Covers card printing, ribbons, door repairs, and software licensing." amount="KES 5,500,000" />
              <BudgetTable 
                columns={[
                  { header: "Access Control Component Description", accessor: "item" },
                  { header: "Annual Cost (KES)", accessor: "annual", align: "right" }
                ]} 
                data={accessControlCosts} 
                totalLabel="TOTAL ACCESS CONTROL OPERATIONAL" 
                totalValue="5,500,000" 
              />
            </section>

            <section className="space-y-6">
              <SectionTitle title="CCTV System Budget Breakdown" subtitle="Centralized NVR storage pool expansion, camera spares, and cabling." amount="KES 4,700,000" />
              <BudgetTable 
                columns={[
                  { header: "CCTV Component Description", accessor: "item" },
                  { header: "Annual Cost (KES)", accessor: "annual", align: "right" }
                ]} 
                data={cctvCosts} 
                totalLabel="TOTAL CCTV SYSTEM OPERATIONAL" 
                totalValue="4,700,000" 
              />
            </section>

            {/* Access Case Study */}
            <div className="rounded-3xl border border-emerald-500/20 bg-slate-900/30 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <Pill label="Modernization Savings Case Study" color="emerald" />
                <h3 className="text-lg font-bold text-slate-50">Salto Cloud → Impro Centralized Integration</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                By migrating from Salto access control with user-based cloud subscriptions to an Impro centralized database environment, we eliminated high vendor-lock renewals and user-based expansion spikes.
              </p>
              <BudgetTable 
                columns={[
                  { header: "Cost Category", accessor: "area" },
                  { header: "Previous Salto Environment", accessor: "before", align: "right" },
                  { header: "Optimized Impro Environment", accessor: "after", align: "right" }
                ]} 
                data={[
                  { area: "Annual Core Licensing", before: "2,400,000", after: "300,000" },
                  { area: "Vendor Support & Retainer", before: "1,200,000", after: "400,000" },
                  { area: "Expansion Hardware Costs", before: "2,000,000", after: "700,000" }
                ]} 
                totalLabel="ESTIMATED RECURRING ANNUAL SAVINGS" 
                totalValue="KES 4,200,000" 
              />
            </div>
          </div>
        )}

        {/* ─── TAB: BACKUP & DR ─── */}
        {activeTab === "backup-dr" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-bold text-slate-100 mb-2">Disaster Recovery & Business Continuity</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We fully account for the KES 5M allocation by separating cloud licensing from onsite storage expansion, replication links, and quarterly simulation testings.
              </p>
            </div>

            <section className="space-y-6">
              <SectionTitle title="Backup Infrastructure Cost Breakdown" subtitle="Detailed accounting of cloud backup storage, NAS setups, and server warranties." amount="KES 4,200,000" />
              <BudgetTable 
                columns={[
                  { header: "Backup Infrastructure Component", accessor: "item" },
                  { header: "Annual Cost (KES)", accessor: "annual", align: "right" }
                ]} 
                data={backupCosts} 
                totalLabel="TOTAL BACKUP SYSTEMS OPERATIONAL" 
                totalValue="4,200,000" 
              />
            </section>

            <section className="space-y-6">
              <SectionTitle title="Business Continuity Plan (BCP) Operational Allocation" subtitle="Standby equipment pools and disaster response framework documentation." amount="KES 1,200,000" />
              <BudgetTable 
                columns={[
                  { header: "Continuity Item", accessor: "item" },
                  { header: "Annual Cost (KES)", accessor: "annual", align: "right" }
                ]} 
                data={bcpCosts} 
                totalLabel="TOTAL BCP ALLOCATION" 
                totalValue="1,200,000" 
              />
            </section>

            <section className="space-y-6">
              <SectionTitle title="DR Recovery Priority Order" subtitle="System recovery sequence based on Recovery Time Objectives (RTO)." />
              <BudgetTable 
                columns={[
                  { header: "Priority Tier", accessor: "priority", align: "center" },
                  { header: "System Component Name", accessor: "system" },
                  { header: "Target Recovery Time Objective (RTO)", accessor: "rto" }
                ]} 
                data={drPriorities} 
              />
            </section>
          </div>
        )}

        {/* ─── TAB: PROJECTS ─── */}
        {activeTab === "projects" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <section className="space-y-6">
              <SectionTitle title="Capital Transformation Projects" subtitle="Breakdown of key strategic initiatives that modernize multi-site facilities." amount="KES 15,000,000" />
              
              {/* Internal Project Tabs */}
              <div className="flex gap-2 border-b border-slate-800 pb-3 overflow-x-auto no-scrollbar">
                {[
                  { id: "access-control", label: "Access Control Unification" },
                  { id: "network-modernization", label: "Network Modernization" },
                  { id: "erp-system", label: "ERP Integration" },
                  { id: "ai-initiatives", label: "AI & Automation" },
                  { id: "sdwan-migration", label: "SD-WAN Migration" },
                ].map((proj) => (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectTab(proj.id)}
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      activeProjectTab === proj.id
                        ? "bg-slate-800 text-slate-100 border border-slate-700"
                        : "text-slate-400 hover:text-slate-300 border border-transparent"
                    }`}
                  >
                    {proj.label}
                  </button>
                ))}
              </div>

              {/* Dynamic Project Tables */}
              {activeProjectTab === "access-control" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Project Goal:</strong> Unify fragmented access control setups across multiple branch locations into one centralized, manageable enterprise database.
                    </p>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "Component Name", accessor: "item" },
                      { header: "Qty", accessor: "qty", align: "center" },
                      { header: "Unit Cost (KES)", accessor: "unit", align: "right" },
                      { header: "Total Cost (KES)", accessor: "total", align: "right" }
                    ]} 
                    data={projectAccessControl} 
                    totalLabel="PROJECT ESTIMATED TOTAL" 
                    totalValue="4,900,000" 
                  />
                </div>
              )}

              {activeProjectTab === "network-modernization" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Project Goal:</strong> Infrastructure switch-refresh to improve overall network reliability, POE capacity, core security capabilities, and centralized diagnostics.
                    </p>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "Network Hardware", accessor: "item" },
                      { header: "Qty", accessor: "qty", align: "center" },
                      { header: "Unit Cost (KES)", accessor: "unit", align: "right" },
                      { header: "Total Cost (KES)", accessor: "total", align: "right" }
                    ]} 
                    data={projectNetwork} 
                    totalLabel="PROJECT ESTIMATED TOTAL" 
                    totalValue="13,700,000" 
                  />
                </div>
              )}

              {activeProjectTab === "erp-system" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Project Goal:</strong> Migrate legacy finance and operations platforms to unified ERP systems, ensuring real-time client billing and internal efficiency.
                    </p>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "Implementation Component", accessor: "item" },
                      { header: "Qty", accessor: "qty", align: "center" },
                      { header: "Total Cost (KES)", accessor: "total", align: "right" }
                    ]} 
                    data={projectERP} 
                    totalLabel="PROJECT ESTIMATED TOTAL" 
                    totalValue="7,300,000" 
                  />
                </div>
              )}

              {activeProjectTab === "ai-initiatives" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Project Goal:</strong> Deploy automated helpdesk routing pipelines, data intelligence dashboards, and facility occupancy optimization using cloud AI APIs.
                    </p>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "AI Project Scope Item", accessor: "item" },
                      { header: "Total Cost (KES)", accessor: "total", align: "right" }
                    ]} 
                    data={projectAI} 
                    totalLabel="PROJECT ESTIMATED TOTAL" 
                    totalValue="4,100,000" 
                  />
                </div>
              )}

              {activeProjectTab === "sdwan-migration" && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-slate-900/30 border border-slate-800/80">
                    <p className="text-xs text-slate-300 leading-relaxed">
                      <strong>Project Goal:</strong> Transition multiple sites from costly static MPLS to modern, software-defined network architectures (SD-WAN) utilizing dynamic path selection.
                    </p>
                  </div>
                  <BudgetTable 
                    columns={[
                      { header: "SD-WAN Component", accessor: "item" },
                      { header: "Qty", accessor: "qty", align: "center" },
                      { header: "Total Cost (KES)", accessor: "total", align: "right" }
                    ]} 
                    data={projectSDWAN} 
                    totalLabel="PROJECT ESTIMATED TOTAL" 
                    totalValue="4,100,000" 
                  />
                </div>
              )}
            </section>

            {/* Professional BOQ structure example */}
            <section className="space-y-6">
              <SectionTitle title="Procurement Bill of Quantities (BOQ) Framework" subtitle="An executive BOQ maps unit pricing and preferred vendors to specific budget lines." />
              <BudgetTable 
                columns={[
                  { header: "Required Item", accessor: "item" },
                  { header: "Qty", accessor: "qty", align: "center" },
                  { header: "Unit Cost (KES)", accessor: "unit", align: "right" },
                  { header: "Total Cost (KES)", accessor: "total", align: "right" },
                  { header: "Preferred Vendor", accessor: "vendor" },
                  { header: "Priority", accessor: "priority", align: "center" }
                ]} 
                data={[
                  { item: "Fortigate core NGFW firewall", qty: "2", unit: "1,500,000", total: "3,000,000", vendor: "Copy Cat Kenya", priority: "P1" },
                  { item: "Enterprise Access Point units", qty: "20", unit: "55,000", total: "1,100,000", vendor: "Redington East Africa", priority: "P2" },
                  { item: "Executive business laptops (HP EliteBook)", qty: "5", unit: "250,000", total: "1,250,000", vendor: "Hewlett-Packard Kenya", priority: "P2" },
                ]} 
              />
            </section>
          </div>
        )}

        {/* ─── TAB: SCENARIOS ─── */}
        {activeTab === "scenarios" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-bold text-slate-100 mb-2">Scenario-Based Budget Forecasting</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Organizations require options depending on macroeconomic shifts or board mandates. Toggle between scenarios below to review how we restructure priorities under different conditions.
              </p>
            </div>

            {/* Interactive Scenario Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {budgetScenarios.map((scen) => (
                <button
                  key={scen.name}
                  onClick={() => setSelectedScenario(scen.name)}
                  className={`relative rounded-3xl border p-6 text-left transition-all ${
                    selectedScenario === scen.name
                      ? "bg-slate-900/50 border-amber-500/80 ring-1 ring-amber-500/30"
                      : "bg-slate-950/40 border-slate-800/80 hover:border-slate-700/80"
                  }`}
                >
                  {scen.recommended && (
                    <span className="absolute -top-2.5 right-6 bg-amber-500 text-slate-950 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                      Default Balanced
                    </span>
                  )}
                  <h4 className="text-base font-extrabold text-slate-50">{scen.name}</h4>
                  <p className="text-[10px] font-bold text-amber-500/80 mt-1">TOTAL CAPACITY: {scen.total}</p>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[48px]">{scen.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-800/80 flex justify-between font-mono text-[11px]">
                    <div>
                      <span className="text-slate-500 block uppercase font-sans text-[9px]">OPEX</span>
                      <span className="font-bold text-slate-300">{scen.opex}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-slate-500 block uppercase font-sans text-[9px]">CAPEX</span>
                      <span className="font-bold text-slate-300">{scen.capex}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Scenario Breakdown */}
            <div className="rounded-3xl border border-slate-800/80 bg-slate-900/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Current Forecast Model</span>
                <Pill label={currentScenario.name} color={currentScenario.color === "emerald" ? "emerald" : currentScenario.color === "blue" ? "blue" : "amber"} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-3">Core Protected Priorities (What is Covered)</h4>
                  <ul className="space-y-2">
                    {currentScenario.focus.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="text-emerald-500 mt-0.5">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400/80 mb-3">Postponed Initiatives (What is Deferred / Reduced)</h4>
                  {currentScenario.reduced.length > 0 ? (
                    <ul className="space-y-2">
                      {currentScenario.reduced.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-rose-500 mt-0.5">✘</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs text-slate-500 italic">No business-critical services or refreshes deferred in this scenario.</p>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Best Suited Environment:</span>
                <span className="text-xs text-slate-300 font-semibold">{currentScenario.bestFor}</span>
              </div>
            </div>
          </div>
        )}

        {/* ─── TAB: INTERVIEW Q&A ─── */}
        {activeTab === "interview" && (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-bold text-slate-100 mb-2">Executive Financial Leadership Q&A</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Strategic interview answers designed for Head of IT / CIO roles, demonstrating a mature grasp of multi-site operations, vendor consolidation, cost optimization, and cost-apportionment.
              </p>
            </div>

            <div className="space-y-6">
              {interviewQA.map((qa, index) => (
                <div key={index} className="rounded-3xl border border-slate-800/80 bg-slate-900/10 p-6 sm:p-8 space-y-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {qa.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-slate-800 text-slate-400 text-[10px] font-semibold tracking-wider uppercase">{tag}</span>
                    ))}
                  </div>
                  <h4 className="text-sm sm:text-base font-extrabold text-amber-300 leading-tight">Q: "{qa.q}"</h4>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed border-l border-slate-800 pl-4 italic">
                    "{qa.a}"
                  </p>
                </div>
              ))}
            </div>

            {/* Custom Interactive Q&A Card */}
            <div className="rounded-3xl border border-amber-500/20 bg-gradient-to-br from-amber-500/5 to-slate-950 p-6 sm:p-10 space-y-6">
              <h4 className="text-xl font-bold text-amber-400">Boardroom Golden Rule of Budgeting</h4>
              <blockquote className="border-l-2 border-amber-500/50 pl-4 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "Never present technical budget requests as buying hardware devices and internet lines. Always frame them as investments protecting enterprise operational continuity, mitigating ransomware exposure, and driving long-term organizational scale."
              </blockquote>
            </div>
          </div>
        )}

        {/* ─── TAB: GOVERNANCE ─── */}
        {activeTab === "governance" && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-3 duration-300">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-lg font-bold text-slate-100 mb-2">Financial Auditing, Governance & Variance Management</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                A Head of IT maintains deep oversight by implementing structured review calendars and proactive variance control frameworks.
              </p>
            </div>

            <section className="space-y-6">
              <SectionTitle title="Key Financial KPI Target Metric Suite" subtitle="Measurable targets that validate technology spend ROI." />
              <BudgetTable 
                columns={[
                  { header: "Governance KPI Metric", accessor: "kpi" },
                  { header: "Corporate Service Target", accessor: "target" },
                  { header: "Review Frequency", accessor: "frequency", align: "center" }
                ]} 
                data={kpiDashboard} 
              />
            </section>

            <section className="space-y-6">
              <SectionTitle title="Variance Response Framework" subtitle="Actionable protocols for handling budget discrepancies during the financial year." />
              <BudgetTable 
                columns={[
                  { header: "Variance Scenario Type", accessor: "type" },
                  { header: "Real Operational Example", accessor: "example" },
                  { header: "Remedial Governance Action", accessor: "action" }
                ]} 
                data={varianceExamples} 
              />
            </section>

            {/* Audit Areas Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-500">6-Step Operational Audit Areas</h4>
                <ul className="space-y-3">
                  {[
                    ["Internet & Connectivity Links", "Auditing actual circuit utilization vs ISP billing SLA compliance."],
                    ["Firewall & End-user Assets", "Tracking hardware age, manufacturer support, and remaining warranty lifespan."],
                    ["Access Control & Facilities integration", "Verifying card printer status, database licensing levels, and camera feeds."],
                    ["Vendor Support Contracts", "Reviewing contractor retainers against actual resolution MTTR reports."],
                    ["Cloud Workspace Subscriptions", "Performing license utilization sweeps to eliminate inactive email boxes."],
                    ["Backup & Recovery Verification", "Verifying daily replication success and performing recovery speed tests."],
                  ].map(([title, desc], idx) => (
                    <li key={idx} className="text-xs text-slate-300 leading-relaxed">
                      <strong className="text-slate-100">{idx + 1}. {title}:</strong> {desc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-800/80 bg-slate-900/10 p-6 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400">10 Commonly Forgotten Budget Areas</h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                  {["1. Software Renewals", "2. Warranty Extensions", "3. DR Testing Fees", "4. Server Room Power", "5. Security Training", "6. LTE Failover Costs", "7. Lifecycle Replacement", "8. Cyber Insurance", "9. Compliance Audits", "10. Site Visit Travel"].map((item) => (
                    <div key={item} className="p-2 border border-slate-800/60 rounded bg-slate-950/20">{item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise ICT Budget Framework | Executive Command Centre",
  description: "Head of IT Annual Budget Framework (KES 200M Example) — Interactive executive presentation, scenarios, and financial leadership playbook.",
};

export default function BudgetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

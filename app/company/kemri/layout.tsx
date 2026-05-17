import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KEMRI-Wellcome Trust · Company prep",
  description: "Secure, reliable, and scalable technology playbooks for the KEMRI-Wellcome Trust Research Programme.",
};

export default function KemriLayout({ children }: { children: React.ReactNode }) {
  return children;
}

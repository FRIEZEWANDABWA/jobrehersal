import type { Metadata } from "next";
import { NetworkingPlaybookView } from "@/components/NetworkingPlaybookView";

export const metadata: Metadata = {
  title: "Networking playbook",
  description:
    "Scenario scripts by persona, essential short scripts, conversation topics, transitions, and light professional humour—expandable for fast scanning.",
};

export default function NetworkingPlaybookPage() {
  return <NetworkingPlaybookView />;
}

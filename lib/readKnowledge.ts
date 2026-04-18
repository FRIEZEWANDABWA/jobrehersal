import fs from "fs/promises";
import path from "path";
import type { KnowledgeSection } from "./types";

const knowledgeDir = path.join(process.cwd(), "content", "knowledge");

export async function readKnowledgeSection(
  section: KnowledgeSection,
): Promise<string> {
  const filePath = path.join(knowledgeDir, `${section}.md`);
  return fs.readFile(filePath, "utf-8");
}

import fs from "fs/promises";
import path from "path";
import type { ExecutiveAnswerVaultSlug } from "./executiveAnswerVaultPages";

const dir = path.join(process.cwd(), "content", "knowledge", "executive-answer-vault");

export async function readExecutiveAnswerVaultChapter(
  slug: ExecutiveAnswerVaultSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

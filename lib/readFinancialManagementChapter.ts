import fs from "fs/promises";
import path from "path";
import type { FinancialManagementSlug } from "./financialManagementPages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "financial-management",
);

export async function readFinancialManagementChapter(
  slug: FinancialManagementSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

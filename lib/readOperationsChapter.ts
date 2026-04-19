import fs from "fs/promises";
import path from "path";
import type { OperationsSlug } from "./operationsPages";

const operationsDir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "operations",
);

export async function readOperationsChapter(
  slug: OperationsSlug,
): Promise<string> {
  const filePath = path.join(operationsDir, `${slug}.md`);
  return fs.readFile(filePath, "utf-8");
}

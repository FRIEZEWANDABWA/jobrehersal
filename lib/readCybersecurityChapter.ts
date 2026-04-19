import fs from "fs/promises";
import path from "path";
import type { CybersecuritySlug } from "./cybersecurityPages";

const dir = path.join(process.cwd(), "content", "knowledge", "cybersecurity");

export async function readCybersecurityChapter(
  slug: CybersecuritySlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

import fs from "fs/promises";
import path from "path";
import type { MockCaseStudiesSlug } from "./mockCaseStudiesPages";

const dir = path.join(process.cwd(), "content", "knowledge", "mock-case-studies");

export async function readMockCaseStudiesChapter(
  slug: MockCaseStudiesSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

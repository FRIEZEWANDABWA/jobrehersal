import fs from "fs/promises";
import path from "path";
import type { FullMockInterviewPanelSlug } from "./fullMockInterviewPanelPages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "full-mock-interview-panel",
);

export async function readFullMockInterviewPanelChapter(
  slug: FullMockInterviewPanelSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

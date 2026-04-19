import fs from "fs/promises";
import path from "path";
import type { BehavioralPressureSlug } from "./behavioralPressurePages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "behavioral-pressure",
);

export async function readBehavioralPressureChapter(
  slug: BehavioralPressureSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

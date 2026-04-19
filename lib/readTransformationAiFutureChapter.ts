import fs from "fs/promises";
import path from "path";
import type { TransformationAiFutureSlug } from "./transformationAiFuturePages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "transformation-ai-future",
);

export async function readTransformationAiFutureChapter(
  slug: TransformationAiFutureSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

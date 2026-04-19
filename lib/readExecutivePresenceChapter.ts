import fs from "fs/promises";
import path from "path";
import type { ExecutivePresenceSlug } from "./executivePresencePages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "executive-presence",
);

export async function readExecutivePresenceChapter(
  slug: ExecutivePresenceSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

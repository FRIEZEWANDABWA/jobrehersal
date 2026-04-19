import fs from "fs/promises";
import path from "path";
import type { SecurityLeadershipSlug } from "./securityLeadershipPages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "security-leadership",
);

export async function readSecurityLeadershipChapter(
  slug: SecurityLeadershipSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

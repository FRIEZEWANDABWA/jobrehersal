import fs from "fs/promises";
import path from "path";
import type { LeadershipSlug } from "./leadershipPages";

const leadershipDir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "leadership",
);

export async function readLeadershipChapter(
  slug: LeadershipSlug,
): Promise<string> {
  const filePath = path.join(leadershipDir, `${slug}.md`);
  return fs.readFile(filePath, "utf-8");
}

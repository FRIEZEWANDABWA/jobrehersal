import fs from "fs/promises";
import path from "path";
import type { PeopleCultureSlug } from "./peopleCulturePages";

const dir = path.join(process.cwd(), "content", "knowledge", "people-culture");

export async function readPeopleCultureChapter(
  slug: PeopleCultureSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

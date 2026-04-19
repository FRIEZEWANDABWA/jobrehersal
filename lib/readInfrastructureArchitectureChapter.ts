import fs from "fs/promises";
import path from "path";
import type { InfrastructureArchitectureSlug } from "./infrastructureArchitecturePages";

const dir = path.join(
  process.cwd(),
  "content",
  "knowledge",
  "infrastructure-architecture",
);

export async function readInfrastructureArchitectureChapter(
  slug: InfrastructureArchitectureSlug,
): Promise<string> {
  return fs.readFile(path.join(dir, `${slug}.md`), "utf-8");
}

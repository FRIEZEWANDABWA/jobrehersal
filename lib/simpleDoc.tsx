import type { ReactNode } from "react";

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function renderSimpleDoc(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let i = 0;
  let key = 0;

  const nextKey = () => `b-${key++}`;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      blocks.push(
        <h3
          key={nextKey()}
          id={slugify(text)}
          className="mt-8 text-lg font-semibold tracking-tight text-slate-100"
        >
          {text}
        </h3>,
      );
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      blocks.push(
        <h2
          key={nextKey()}
          id={slugify(text)}
          className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight text-amber-100/95 first:mt-0"
        >
          {text}
        </h2>,
      );
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      const text = line.slice(2).trim();
      blocks.push(
        <h1
          key={nextKey()}
          className="text-2xl font-semibold tracking-tight text-slate-50"
        >
          {text}
        </h1>,
      );
      i++;
      continue;
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push(
        <ul
          key={nextKey()}
          className="mt-4 list-inside list-disc space-y-2 text-slate-300"
        >
          {items.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>,
      );
      continue;
    }
    const para: string[] = [];
    while (i < lines.length && lines[i].trim() !== "" && !/^#{1,3} /.test(lines[i]) && !lines[i].startsWith("- ")) {
      para.push(lines[i]);
      i++;
    }
    const text = para.join(" ").trim();
    if (text) {
      blocks.push(
        <p
          key={nextKey()}
          className="mt-4 leading-relaxed text-slate-300 first:mt-0"
        >
          {text}
        </p>,
      );
    }
  }

  return <div className="max-w-3xl">{blocks}</div>;
}

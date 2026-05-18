import type { ReactNode } from "react";
import { ZoomableImage } from "@/components/ZoomableImage";

export type SimpleDocHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

function renderInline(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  if (parts.length === 1) return text;
  return parts.map((part, idx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={idx} className="font-semibold text-slate-100">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export function slugifyHeading(s: string) {
  return s
    .replace(/\*\*/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type ParsedBlock =
  | { kind: "h1"; text: string }
  | { kind: "h2"; text: string; id: string }
  | { kind: "h3"; text: string; id: string }
  | { kind: "ul"; items: string[] }
  | { kind: "img"; src: string; alt: string }
  | { kind: "p"; text: string };

function parseBlocks(markdown: string): ParsedBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: ParsedBlock[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") {
      i++;
      continue;
    }
    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      blocks.push({ kind: "h3", text, id: slugifyHeading(text) });
      i++;
      continue;
    }
    if (line.startsWith("## ")) {
      const text = line.slice(3).trim();
      blocks.push({ kind: "h2", text, id: slugifyHeading(text) });
      i++;
      continue;
    }
    if (line.startsWith("# ")) {
      const text = line.slice(2).trim();
      blocks.push({ kind: "h1", text });
      i++;
      continue;
    }
    if (line.trim().startsWith("![") && line.trim().endsWith(")")) {
      const match = line.trim().match(/^!\[(.*?)\]\((.*?)\)/);
      if (match) {
        blocks.push({ kind: "img", alt: match[1], src: match[2] });
        i++;
        continue;
      }
    }
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2).trim());
        i++;
      }
      blocks.push({ kind: "ul", items });
      continue;
    }
    const para: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !/^#{1,3} /.test(lines[i]) &&
      !lines[i].startsWith("- ")
    ) {
      para.push(lines[i]);
      i++;
    }
    const text = para.join(" ").trim();
    if (text) blocks.push({ kind: "p", text });
  }

  return blocks;
}

function collectHeadings(blocks: ParsedBlock[]): SimpleDocHeading[] {
  const h: SimpleDocHeading[] = [];
  for (const b of blocks) {
    if (b.kind === "h2") h.push({ id: b.id, text: b.text, level: 2 });
    if (b.kind === "h3") h.push({ id: b.id, text: b.text, level: 3 });
  }
  return h;
}

function parsedBlockToNode(
  b: ParsedBlock,
  key: string,
  variant: "plain" | "chapter",
): ReactNode {
  const h2Class =
    variant === "chapter"
      ? "scroll-mt-32 text-xl font-semibold tracking-tight text-amber-100/95"
      : "mt-10 scroll-mt-32 text-xl font-semibold tracking-tight text-amber-100/95 first:mt-0";
  const h3Class =
    variant === "chapter"
      ? "mt-6 text-lg font-semibold tracking-tight text-slate-100"
      : "mt-8 text-lg font-semibold tracking-tight text-slate-100";

  switch (b.kind) {
    case "h1":
      return (
        <h1
          key={key}
          className="text-2xl font-semibold tracking-tight text-slate-50"
        >
          {renderInline(b.text)}
        </h1>
      );
    case "h2":
      return (
        <h2 key={key} id={b.id} className={h2Class}>
          {renderInline(b.text)}
        </h2>
      );
    case "h3":
      return (
        <h3 key={key} id={b.id} className={h3Class}>
          {renderInline(b.text)}
        </h3>
      );
    case "ul":
      return (
        <ul
          key={key}
          className="mt-4 list-outside list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-slate-300"
        >
          {b.items.map((t, idx) => (
            <li key={`${idx}-${t}`}>{renderInline(t)}</li>
          ))}
        </ul>
      );
    case "p":
      return (
        <p
          key={key}
          className="mt-4 text-[15px] leading-relaxed text-slate-300 first:mt-0"
        >
          {renderInline(b.text)}
        </p>
      );
    case "img":
      return <ZoomableImage key={key} src={b.src} alt={b.alt} />;
    default:
      return null;
  }
}

function renderFlatBody(blocks: ParsedBlock[]): ReactNode {
  let k = 0;
  const nextKey = () => `b-${k++}`;
  return (
    <div className="space-y-1">
      {blocks.map((b) => parsedBlockToNode(b, nextKey(), "plain"))}
    </div>
  );
}

const sectionShell =
  "rounded-2xl border border-slate-800/70 bg-slate-950/40 p-5 shadow-sm shadow-black/20 sm:p-7";

function renderChapterBody(blocks: ParsedBlock[]): ReactNode {
  const sections: ReactNode[] = [];
  let i = 0;
  while (i < blocks.length && blocks[i].kind !== "h2") {
    i++;
  }
  const preamble = blocks.slice(0, i);
  if (preamble.length) {
    sections.push(
      <div
        key="preamble"
        className="space-y-1 border-b border-slate-800/60 pb-8"
      >
        {preamble.map((b, idx) =>
          parsedBlockToNode(b, `pre-${idx}-${b.kind}`, "plain"),
        )}
      </div>,
    );
  }
  let secIdx = 0;
  while (i < blocks.length) {
    const b = blocks[i];
    if (b.kind !== "h2") {
      i++;
      continue;
    }
    const sectionBlocks: ParsedBlock[] = [b];
    i++;
    while (i < blocks.length && blocks[i].kind !== "h2") {
      sectionBlocks.push(blocks[i]);
      i++;
    }
    const h2 = sectionBlocks[0];
    const sectionKey = h2.kind === "h2" ? h2.id : `sec-${secIdx++}`;
    sections.push(
      <section
        key={sectionKey}
        aria-labelledby={h2.kind === "h2" ? h2.id : undefined}
        className={`${sectionShell} space-y-1`}
      >
        {sectionBlocks.map((block, idx) =>
          parsedBlockToNode(block, `${sectionKey}-${idx}`, "chapter"),
        )}
      </section>,
    );
  }
  return <div className="space-y-8">{sections}</div>;
}

export type BuildSimpleDocOptions = {
  /** Group each ## … block into a bordered card (chapter reading mode). */
  layout?: "plain" | "chapter";
};

export function buildSimpleDoc(
  markdown: string,
  options: BuildSimpleDocOptions = {},
): { body: ReactNode; headings: SimpleDocHeading[] } {
  const blocks = parseBlocks(markdown);
  const headings = collectHeadings(blocks);
  const layout = options.layout ?? "plain";
  const body =
    layout === "chapter" ? renderChapterBody(blocks) : renderFlatBody(blocks);
  return { body, headings };
}

/** Legacy hub pages — narrow column, no section cards. */
export function renderSimpleDoc(markdown: string) {
  const { body } = buildSimpleDoc(markdown, { layout: "plain" });
  return <div className="max-w-3xl">{body}</div>;
}

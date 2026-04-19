const DOC_PREFIX = "ecc-personal-doc:v1:";
const REFLECTIONS_KEY = "ecc-interview-reflections:v1";

export type PersonalDocumentState = {
  notes: string;
  improvedWording: string;
  upgradeFlags: string[];
  updatedAt: string;
};

export const UPGRADE_FLAG_PRESETS = [
  "Needs stronger CFO framing",
  "Better closing line",
  "Add personal proof / metrics",
  "Stronger boardroom language",
  "Too generic — make it mine",
  "Interview feedback to fold in",
] as const;

export const emptyDocumentState = (): PersonalDocumentState => ({
  notes: "",
  improvedWording: "",
  upgradeFlags: [],
  updatedAt: "",
});

function safeParseDoc(raw: string | null): PersonalDocumentState {
  if (!raw) return emptyDocumentState();
  try {
    const v = JSON.parse(raw) as Partial<PersonalDocumentState>;
    return {
      notes: typeof v.notes === "string" ? v.notes : "",
      improvedWording:
        typeof v.improvedWording === "string" ? v.improvedWording : "",
      upgradeFlags: Array.isArray(v.upgradeFlags)
        ? v.upgradeFlags.filter((x): x is string => typeof x === "string")
        : [],
      updatedAt: typeof v.updatedAt === "string" ? v.updatedAt : "",
    };
  } catch {
    return emptyDocumentState();
  }
}

export function loadPersonalDocument(storageKey: string): PersonalDocumentState {
  if (typeof window === "undefined") return emptyDocumentState();
  return safeParseDoc(window.localStorage.getItem(DOC_PREFIX + storageKey));
}

export function savePersonalDocument(
  storageKey: string,
  state: PersonalDocumentState,
): void {
  if (typeof window === "undefined") return;
  const next: PersonalDocumentState = {
    ...state,
    updatedAt: new Date().toISOString(),
  };
  window.localStorage.setItem(DOC_PREFIX + storageKey, JSON.stringify(next));
}

export type InterviewReflectionEntry = {
  id: string;
  createdAt: string;
  companyOrPanel: string;
  asked: string;
  surprised: string;
  weak: string;
  improve: string;
  remember: string;
};

function safeParseReflections(raw: string | null): InterviewReflectionEntry[] {
  if (!raw) return [];
  try {
    const v = JSON.parse(raw) as unknown;
    if (!Array.isArray(v)) return [];
    return v.filter(
      (x): x is InterviewReflectionEntry =>
        typeof x === "object" &&
        x !== null &&
        typeof (x as InterviewReflectionEntry).id === "string" &&
        typeof (x as InterviewReflectionEntry).createdAt === "string",
    );
  } catch {
    return [];
  }
}

export function loadInterviewReflections(): InterviewReflectionEntry[] {
  if (typeof window === "undefined") return [];
  return safeParseReflections(window.localStorage.getItem(REFLECTIONS_KEY));
}

export function saveInterviewReflections(
  entries: InterviewReflectionEntry[],
): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(REFLECTIONS_KEY, JSON.stringify(entries));
}

export function appendInterviewReflection(
  entry: Omit<InterviewReflectionEntry, "id" | "createdAt">,
): InterviewReflectionEntry {
  const full: InterviewReflectionEntry = {
    ...entry,
    id:
      typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : `r-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const prev = loadInterviewReflections();
  saveInterviewReflections([full, ...prev]);
  return full;
}

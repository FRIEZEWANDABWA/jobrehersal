export type KnowledgeSection =
  | "leadership"
  | "operations"
  | "cybersecurity"
  | "people-culture"
  | "financial-management"
  | "behavioral-pressure"
  | "infrastructure-architecture"
  | "security-leadership"
  | "executive-presence"
  | "transformation-ai-future"
  | "mock-case-studies"
  | "executive-answer-vault"
  | "full-mock-interview-panel"
  | "security"
  | "infrastructure"
  | "finance"
  | "ai"
  | "people-leadership";

export type QuestionDifficulty = "foundation" | "mid" | "executive";

export type Question = {
  id: string;
  prompt: string;
  role: string;
  department: string;
  difficulty: QuestionDifficulty;
  tags?: string[];
  hint?: string;
  /** Executive-style reference answer after you have spoken. */
  eliteAnswer?: string;
};

export type StarStory = {
  id: string;
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
  /** One line: what this story proves to a panel (judgment, ownership, business). */
  executiveLesson?: string;
};

export type CompanyProfile = {
  slug: string;
  name: string;
  tagline: string;
  context: string;
  themes: string[];
  pressureAngles: string[];
  questionsToExpect: string[];
};

/** Curated Q&A packs on the interview bank (collapsed by default). */
export type InterviewPackItem = {
  id: string;
  question: string;
  answer: string;
  timing?: string;
};

export type InterviewPackSection = {
  title: string;
  items: InterviewPackItem[];
};

export type InterviewPack = {
  id: string;
  title: string;
  subtitle?: string;
  sections: InterviewPackSection[];
};

export type KnowledgeSection =
  | "leadership"
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
};

export type StarStory = {
  id: string;
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  tags: string[];
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

import bank from "@/content/questions/bank.json";
import profiles from "@/content/companies/profiles.json";
import stories from "@/content/star/stories.json";
import type { CompanyProfile, Question, StarStory } from "./types";

export const questions: Question[] = bank;
export const starStories: StarStory[] = stories;
export const companyProfiles: CompanyProfile[] = profiles;

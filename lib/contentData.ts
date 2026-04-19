import bank from "@/content/questions/bank.json";
import interviewPacksJson from "@/content/questions/interview-packs.json";
import profiles from "@/content/companies/profiles.json";
import stories from "@/content/star/stories.json";
import type { CompanyProfile, InterviewPack, Question, StarStory } from "./types";

export const questions = bank as Question[];
export const starStories = stories as StarStory[];
export const companyProfiles = profiles as CompanyProfile[];
export const interviewPacks = interviewPacksJson as InterviewPack[];

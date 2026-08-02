import { MediaAttachment } from "./MediaAttachment";

export interface FamilyGoal {
  id: string;
  title: string;
  completed: boolean;
}

export interface FamilyWorshipSession {
  id: string;

  title: string;

  theme: string;

  bibleReading: string;

  openingSong: string;

  openingPrayer: string;

  discussionQuestions: string[];

  media: MediaAttachment[];

  notes: string;

  goals: FamilyGoal[];

  closingSong: string;

  closingPrayer: string;

  favorite: boolean;

  completed: boolean;

  createdAt: number;

  updatedAt: number;
}
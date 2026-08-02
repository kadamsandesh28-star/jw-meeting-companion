import { FamilyWorshipSession } from "../models/FamilyWorshipSession";

export function createEmptySession(): FamilyWorshipSession {
  const now = Date.now();

  return {
    id: crypto.randomUUID(),

    title: "",

    theme: "",

    bibleReading: "",

    openingSong: "",

    openingPrayer: "",

    discussionQuestions: [""],

    media: [],

    notes: "",

    goals: [
      {
        id: crypto.randomUUID(),
        title: "",
        completed: false,
      },
    ],

    closingSong: "",

    closingPrayer: "",

    favorite: false,

    completed: false,

    createdAt: now,

    updatedAt: now,
  };
}
import { FamilyWorshipSession } from "../models/FamilyWorshipSession";
import { WorshipTemplate } from "../models/WorshipTemplate";

export function createSessionFromTemplate(
  template: WorshipTemplate
): FamilyWorshipSession {
  const now = Date.now();

  return {
    id: crypto.randomUUID(),

    title: template.title,

    theme: template.theme,

    bibleReading: template.bibleReading,

    openingSong: template.openingSong,

    openingPrayer: "",

    discussionQuestions: [
      ...template.discussionQuestions,
    ],

    media: [...template.suggestedMedia],

    notes: "",

    goals: template.defaultGoals.map(
      (goal) => ({
        id: crypto.randomUUID(),
        title: goal,
        completed: false,
      })
    ),

    closingSong: template.closingSong,

    closingPrayer: "",

    favorite: false,

    completed: false,

    createdAt: now,

    updatedAt: now,
  };
}
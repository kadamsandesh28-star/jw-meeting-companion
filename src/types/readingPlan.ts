import { ReadingEntry } from "./bible";

export type ReadingPlanId =
  | "oneYear"
  | "chronological"
  | "newTestament"
  | "historical"
  | "psalmsProverbs";

export interface ReadingRangeDefinition {
  book: string;
  ranges: [number, number][];
}

export interface BibleReadingPlan {
  id: ReadingPlanId;
  name: string;
  description: string;
  estimatedDays: number;
  readings: ReadingEntry[];
}   
import { ReadingEntry } from "./bible";

export interface ReadingRangeDefinition {
  book: string;
  ranges: [number, number][];
}

export interface BibleReadingPlan {
  id: string;
  name: string;
  description: string;
  readings: ReadingEntry[];
}
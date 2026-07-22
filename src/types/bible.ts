export type ScriptureSection =
  | "Hebrew Scriptures"
  | "Greek Scriptures";

export interface ReadingEntry {
  id: number;
  section: ScriptureSection;
  book: string;
  startChapter: number;
  endChapter: number;
  title?: string;
}

export interface ReadingBook {
  book: string;
  readings: ReadingEntry[];
}

export interface BibleReadingProgress {
  lastCompletedDate: string | null;

  /**
   * Sequential index of the next reading.
   * We'll remove this in a later sprint once the
   * progress model is fully derived from completedReadings.
   */
  currentReadingIndex: number;

  /**
   * Maps a reading index to the date it was completed.
   *
   * Example:
   * {
   *   0: "2026-07-22",
   *   1: "2026-07-23"
   * }
   */
  completedReadings: Record<number, string>;

  streak: number;
  notes: string;
}
export type ScriptureSection = "Hebrew Scriptures" | "Greek Scriptures";

export interface ReadingEntry {
  id: number;
  section: ScriptureSection;
  book: string;
  startChapter: number;
  endChapter: number;
  title?: string;
}

export const bibleInOneYear: ReadingEntry[] = [
  // ==========================
  // Hebrew Scriptures
  // ==========================

  {
    id: 1,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 1,
    endChapter: 3,
  },
  {
    id: 2,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 4,
    endChapter: 7,
  },
  {
    id: 3,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 8,
    endChapter: 11,
  },
  {
    id: 4,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 12,
    endChapter: 15,
  },
  {
    id: 5,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 16,
    endChapter: 18,
  },
  {
    id: 6,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 19,
    endChapter: 21,
  },
  {
    id: 7,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 22,
    endChapter: 24,
  },
  {
    id: 8,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 25,
    endChapter: 28,
  },
  {
    id: 9,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 29,
    endChapter: 31,
  },
  {
    id: 10,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 32,
    endChapter: 35,
  },
  {
    id: 11,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 36,
    endChapter: 39,
  },
  {
    id: 12,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 40,
    endChapter: 43,
  },
  {
    id: 13,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 44,
    endChapter: 47,
  },
  {
    id: 14,
    section: "Hebrew Scriptures",
    book: "Genesis",
    startChapter: 48,
    endChapter: 50,
  },
];
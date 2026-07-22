import { bibleInOneYear } from "../data/bibleInOneYear";

import type {
  ReadingBook,
  ReadingEntry,
  ScriptureSection,
} from "../types/bible";

function getReadingPlan(): ReadingEntry[] {
  return bibleInOneYear;
}

function getReadingByIndex(index: number): ReadingEntry {
  return (
    bibleInOneYear[index] ??
    bibleInOneYear[bibleInOneYear.length - 1]
  );
}

function getTotalReadings(): number {
  return bibleInOneYear.length;
}

function getBooks(section?: ScriptureSection): string[] {
  const readings = section
    ? bibleInOneYear.filter((r) => r.section === section)
    : bibleInOneYear;

  return [...new Set(readings.map((r) => r.book))];
}

function getReadingsForBook(book: string): ReadingEntry[] {
  return bibleInOneYear.filter((r) => r.book === book);
}

function getBooksWithReadings(
  section?: ScriptureSection
): ReadingBook[] {
  return getBooks(section).map((book) => ({
    book,
    readings: getReadingsForBook(book),
  }));
}

function getSection(section: ScriptureSection): ReadingEntry[] {
  return bibleInOneYear.filter((r) => r.section === section);
}

export const readingPlanService = {
  getReadingPlan,
  getReadingByIndex,
  getTotalReadings,
  getBooks,
  getReadingsForBook,
  getBooksWithReadings,
  getSection,
};
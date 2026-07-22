import { bibleBooks } from "../bibleBooks";
import {
  BibleBook,
  ReadingEntry,
  ScriptureSection,
} from "../../types/bible";
import { ReadingRangeDefinition } from "../../types/readingPlan";

function getSection(bookName: string): ScriptureSection {
  const book: BibleBook | undefined = bibleBooks.find(
    (b) => b.name === bookName
  );

  if (!book) {
    throw new Error(`Unknown Bible book: ${bookName}`);
  }

  return book.section;
}

export function createReadingPlan(
  definitions: ReadingRangeDefinition[]
): ReadingEntry[] {
  const readings: ReadingEntry[] = [];
  let id = 1;

  for (const definition of definitions) {
    const section = getSection(definition.book);

    for (const [startChapter, endChapter] of definition.ranges) {
      readings.push({
        id: id++,
        section,
        book: definition.book,
        startChapter,
        endChapter,
      });
    }
  }

  return readings;
}
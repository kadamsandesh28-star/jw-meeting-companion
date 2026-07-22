import { createReadingPlan } from "../src/data/generators/readingPlanGenerator";
import { oneYearRanges } from "../src/data/plans/oneYear";

const readings = createReadingPlan(oneYearRanges);

console.log("📖 One-Year Bible Plan");
console.log("----------------------");
console.log(`Generated ${readings.length} readings`);
console.log("");

console.table(
  readings.slice(0, 10).map((reading) => ({
    id: reading.id,
    book: reading.book,
    chapters: `${reading.startChapter}-${reading.endChapter}`,
    section: reading.section,
  }))
);

console.log("");
console.log("✅ Done");
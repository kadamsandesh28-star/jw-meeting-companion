import { createReadingPlan } from "../../generators/readingPlanGenerator";
import { oneYearRanges } from "./index";
import { BibleReadingPlan } from "../../../types/readingPlan";

export const oneYearPlan: BibleReadingPlan = {
  id: "oneYear",
  name: "One-Year Bible",
  description: "Read the entire Bible in one year.",
  estimatedDays: 365,
  readings: createReadingPlan(oneYearRanges),
};
import { loadCollections } from "./researchService";
import { getMeetingProgress } from "./plannerService";
import {
  getTodayReflectionSummary,
} from "./dailyScriptureService";

export interface DashboardSummary {
  researchCollections: number;
  understandingNotes: number;
  gemsEntries: number;
  activeGoals: number;
  ministryNotes: number;
}

function countLines(text: string) {
  return text
    .split("\n")
    .filter((line) => line.trim() !== "").length;
}

export function getDashboardSummary(): DashboardSummary {
  return {
    researchCollections: loadCollections().length,

    understandingNotes: countLines(
      localStorage.getItem("jw-understanding-main") || ""
    ),

    gemsEntries: countLines(
      localStorage.getItem("jw-gems-main") || ""
    ),

    activeGoals: countLines(
      localStorage.getItem("jw-goals-active") || ""
    ),

    ministryNotes: countLines(
      localStorage.getItem("jw-ministry-notes") || ""
    ),
  };
}

/* -------------------------------- */
/* Today's Focus                    */
/* -------------------------------- */

export interface DashboardFocus {
  title: string;
  description: string;
  button: string;
  path: string;
}

export function getTodaysFocus(): DashboardFocus {

  const midweek = getMeetingProgress("Midweek");

  if (midweek.progress < 100) {
    return {
      title: "Continue Midweek Preparation",
      description:
        "Complete your remaining Midweek assignments.",
      button: "Continue",
      path: "/midweek",
    };
  }

  const weekend = getMeetingProgress("Weekend");

  if (weekend.progress < 100) {
    return {
      title: "Continue Weekend Preparation",
      description:
        "Complete your Weekend meeting preparation.",
      button: "Continue",
      path: "/weekend",
    };
  }

  return {
    title: "Review Today's Scripture",
    description:
      "Spend a few moments reflecting on today's scripture.",
    button: "Open",
    path: "/daily-scripture",
  };
}

/* -------------------------------- */
/* Continue Research                */
/* -------------------------------- */

export function getLatestResearch() {

  const collections = loadCollections();

  if (collections.length === 0) {
    return {
      title: "Create your first collection",
      subtitle:
        "Start building your Spiritual Library.",
    };
  }

  const latest =
    collections[collections.length - 1];

  return {
    title: latest.title,
    subtitle: "Latest Research Collection",
  };
}

/* -------------------------------- */
/* Daily Scripture Summary          */
/* -------------------------------- */

export interface DashboardDailyScripture {
  started: boolean;
  scripture: string;
  theme: string;
  date: string;
}

export function getDashboardDailyScripture(): DashboardDailyScripture {
  return getTodayReflectionSummary();
}
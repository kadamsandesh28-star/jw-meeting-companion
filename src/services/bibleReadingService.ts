const STORAGE_KEY = "bible-reading-progress";

export interface BibleReadingProgress {
  lastCompletedDate: string | null;
  currentReadingIndex: number;
  completedReadings: number;
  streak: number;
  notes: string;
}

export interface BibleReading {
  book: string;
  chapters: string;
}

const readingPlan: BibleReading[] = [
  { book: "Genesis", chapters: "1–3" },
  { book: "Genesis", chapters: "4–7" },
  { book: "Genesis", chapters: "8–11" },
  { book: "Genesis", chapters: "12–15" },
  { book: "Genesis", chapters: "16–18" },
  { book: "Genesis", chapters: "19–21" },
  { book: "Genesis", chapters: "22–24" },
];

const defaultProgress: BibleReadingProgress = {
  lastCompletedDate: null,
  currentReadingIndex: 0,
  completedReadings: 0,
  streak: 0,
  notes: "",
};

function todayString() {
  return new Date().toISOString().split("T")[0];
}

function daysBetween(date1: string, date2: string) {
  const first = new Date(date1);
  const second = new Date(date2);

  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  return Math.floor(
    (second.getTime() - first.getTime()) / millisecondsPerDay
  );
}

function getProgress(): BibleReadingProgress {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultProgress;
  }

  try {
    const parsed = JSON.parse(saved) as Partial<BibleReadingProgress>;

    return {
      ...defaultProgress,
      ...parsed,
    };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(progress: BibleReadingProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function getCurrentReading(): BibleReading {
  const progress = getProgress();

  return (
    readingPlan[progress.currentReadingIndex] ??
    readingPlan[readingPlan.length - 1]
  );
}

function getReadingPlan() {
  return readingPlan;
}

function completedToday() {
  return getProgress().lastCompletedDate === todayString();
}

function markTodayComplete() {
  const progress = getProgress();

  const today = todayString();

  if (progress.lastCompletedDate === today) {
    return progress;
  }

  let streak = 1;

  if (progress.lastCompletedDate) {
    const days = daysBetween(progress.lastCompletedDate, today);

    if (days === 1) {
      streak = progress.streak + 1;
    }
  }

  const nextIndex = Math.min(
    progress.currentReadingIndex + 1,
    readingPlan.length - 1
  );

  const updated: BibleReadingProgress = {
    ...progress,
    lastCompletedDate: today,
    currentReadingIndex: nextIndex,
    completedReadings: progress.completedReadings + 1,
    streak,
  };

  saveProgress(updated);

  return updated;
}

function updateNotes(notes: string) {
  const updated: BibleReadingProgress = {
    ...getProgress(),
    notes,
  };

  saveProgress(updated);

  return updated;
}

function resetProgress() {
  saveProgress(defaultProgress);
}

export const bibleReadingService = {
  getProgress,
  saveProgress,
  getCurrentReading,
  getReadingPlan,
  completedToday,
  markTodayComplete,
  updateNotes,
  resetProgress,
};
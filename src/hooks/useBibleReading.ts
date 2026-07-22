import { useCallback, useEffect, useMemo, useState } from "react";

import {
  bibleReadingService,
  BibleReadingProgress,
} from "../services/bibleReadingService";

export function useBibleReading() {
  const [progress, setProgress] = useState<BibleReadingProgress>(
    bibleReadingService.getProgress()
  );

  const [reading, setReading] = useState(
    bibleReadingService.getCurrentReading()
  );

  const refresh = useCallback(() => {
    setProgress(bibleReadingService.getProgress());
    setReading(bibleReadingService.getCurrentReading());
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const completeToday = () => {
    bibleReadingService.markTodayComplete();
    refresh();
  };

  const updateNotes = (notes: string) => {
    bibleReadingService.updateNotes(notes);
    refresh();
  };

  const reset = () => {
    bibleReadingService.resetProgress();
    refresh();
  };

  const totalReadings =
    bibleReadingService.getReadingPlan().length;

  const percentComplete = useMemo(() => {
    return Math.round(
      (progress.completedReadings / totalReadings) * 100
    );
  }, [progress.completedReadings, totalReadings]);

  return {
    progress,
    reading,
    percentComplete,
    totalReadings,
    completedToday: bibleReadingService.completedToday(),
    completeToday,
    updateNotes,
    reset,
  };
}
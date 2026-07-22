import { BookOpen, CheckCircle2, RotateCcw } from "lucide-react";

import PageHeader from "../../components/ui/PageHeader";
import InfoCard from "../../components/ui/InfoCard";
import { useBibleReading } from "../../hooks/useBibleReading";

export default function BibleReading() {
  const {
    progress,
    reading,
    percentComplete,
    totalReadings,
    completedToday,
    completeToday,
    updateNotes,
    reset,
  } = useBibleReading();

  return (
    <div className="space-y-6">
      <PageHeader
        title="Daily Bible Reading"
        description="Read God's Word daily and track your progress."
        icon={<BookOpen size={32} />}
      />

      <InfoCard title="Today's Reading">
        <div className="space-y-5">
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Current Reading
            </p>

            <p className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {reading.book} {reading.chapters}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={completeToday}
              disabled={completedToday}
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-green-600"
            >
              <CheckCircle2 size={18} />

              {completedToday
                ? "Completed Today"
                : "Mark Complete"}
            </button>

            <button
              onClick={reset}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            >
              <RotateCcw size={18} />
              Reset Progress
            </button>
          </div>
        </div>
      </InfoCard>

      <InfoCard title="Reading Progress">
        <div className="space-y-3">
          <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-300"
              style={{ width: `${percentComplete}%` }}
            />
          </div>

          <p className="text-sm text-slate-600 dark:text-slate-400">
            {progress.completedReadings} of {totalReadings} readings completed (
            {percentComplete}%)
          </p>
        </div>
      </InfoCard>

      <div className="grid gap-4 md:grid-cols-2">
        <InfoCard title="Current Streak">
          <p className="text-3xl font-bold text-indigo-600">
            {progress.streak}
          </p>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            day{progress.streak === 1 ? "" : "s"}
          </p>
        </InfoCard>

        <InfoCard title="Completed Readings">
          <p className="text-3xl font-bold text-indigo-600">
            {progress.completedReadings}
          </p>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            total completed
          </p>
        </InfoCard>
      </div>

      <InfoCard title="Notes">
        <textarea
          value={progress.notes}
          onChange={(e) => updateNotes(e.target.value)}
          rows={6}
          placeholder="Write your thoughts, insights, or favorite scriptures..."
          className="w-full rounded-lg border border-slate-300 bg-white p-3 text-sm outline-none transition focus:border-indigo-500 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
        />
      </InfoCard>
    </div>
  );
}
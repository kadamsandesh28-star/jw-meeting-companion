import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  NotebookPen,
  Timer,
  Mic2,
} from "lucide-react";

export default function WeekendMeeting() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          🎤 Weekend Meeting
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Prepare for and participate in the weekend meeting.
        </p>
      </header>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-4">
            <Mic2 className="text-indigo-600" size={24} />

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Public Talk
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Prepare and review Public Talk notes.
              </p>
            </div>
          </div>

          <ChevronRight className="text-slate-400" />
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-4">
            <BookOpen className="text-indigo-600" size={24} />

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Watchtower Study
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Review this week's Watchtower Study.
              </p>
            </div>
          </div>

          <ChevronRight className="text-slate-400" />
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-4">
            <NotebookPen className="text-indigo-600" size={24} />

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Weekend Notes
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Keep your meeting notes organized.
              </p>
            </div>
          </div>

          <ChevronRight className="text-slate-400" />
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-green-600" size={24} />

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Meeting Progress
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Progress tracking will be available soon.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-900">
          <div className="flex items-center gap-3">
            <Timer className="text-indigo-600" size={24} />

            <div>
              <h2 className="font-semibold text-slate-900 dark:text-white">
                Chairman Assistant
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                Stopwatch and meeting assistant tools for Ministerial Servants
                and Elders are coming soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
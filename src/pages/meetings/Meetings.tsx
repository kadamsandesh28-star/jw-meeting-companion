import { CalendarDays, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Meetings() {
  return (
    <div className="space-y-6">
      <header>
        <div className="flex items-center gap-3">
          <CalendarDays className="text-indigo-600" size={32} />
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              Meetings
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Prepare for your congregation meetings.
            </p>
          </div>
        </div>
      </header>

      <div className="space-y-4">
        <Link
          to="/meetings/midweek"
          className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                📖 Midweek Meeting
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Workbook, notes, assignments, and Chairman Assistant.
              </p>
            </div>

            <ChevronRight
              size={22}
              className="text-slate-400 dark:text-slate-500"
            />
          </div>
        </Link>

        <Link
          to="/meetings/weekend"
          className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                🎤 Weekend Meeting
              </h2>

              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Public Talk, Watchtower Study, notes, and Chairman Assistant.
              </p>
            </div>

            <ChevronRight
              size={22}
              className="text-slate-400 dark:text-slate-500"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
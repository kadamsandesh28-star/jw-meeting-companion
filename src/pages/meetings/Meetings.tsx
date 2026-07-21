export default function Meeting() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Meeting
        </h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Prepare for your congregation meetings.
        </p>
      </header>

      <div className="grid gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            📖 Midweek Meeting
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Workbook, notes, assignments, and Chairman Assistant will be
            available here.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
            🎤 Weekend Meeting
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            Public Talk, Watchtower Study, notes, and Chairman Assistant will be
            available here.
          </p>
        </div>
      </div>
    </div>
  );
}
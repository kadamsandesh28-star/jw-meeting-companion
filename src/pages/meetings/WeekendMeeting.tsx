export default function WeekendMeeting() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          🎤 Weekend Meeting
        </h1>

        <p className="text-slate-600 dark:text-slate-400">
          Prepare for the Public Talk and Watchtower Study.
        </p>
      </header>

      <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <p className="font-medium">Coming Soon</p>

        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-400">
          <li>Public Talk Notes</li>
          <li>Watchtower Study Notes</li>
          <li>Chairman Assistant</li>
        </ul>
      </div>
    </div>
  );
}
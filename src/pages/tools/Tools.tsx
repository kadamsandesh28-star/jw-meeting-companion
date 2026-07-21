import Stopwatch from "../../components/timer/Stopwatch";

export default function Tools() {
  return (
    <div className="mx-auto max-w-3xl p-6">
      <h1 className="mb-2 text-3xl font-bold">🛠 Meeting Tools</h1>

      <p className="mb-8 text-slate-600 dark:text-slate-400">
        Utilities to help you prepare for and participate in meetings.
      </p>

      <Stopwatch />
    </div>
  );
}
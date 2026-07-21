interface LapListProps {
  laps: number[];
}

export default function LapList({ laps }: LapListProps) {
  const formatTime = (elapsed: number) => {
    const hours = Math.floor(elapsed / 3600000);
    const minutes = Math.floor((elapsed % 3600000) / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    const centiseconds = Math.floor((elapsed % 1000) / 10);

    const format = (value: number) =>
      value.toString().padStart(2, "0");

    return `${format(hours)}:${format(minutes)}:${format(seconds)}.${format(
      centiseconds
    )}`;
  };

  if (laps.length === 0) {
    return (
      <div className="mt-6 rounded-2xl border border-dashed border-slate-300 p-6 text-center text-slate-500 dark:border-slate-700 dark:text-slate-400">
        No laps recorded yet.
      </div>
    );
  }

  return (
    <div className="mt-6 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
      <h3 className="mb-4 text-lg font-semibold">
        🏁 Lap History
      </h3>

      <div className="space-y-2">
        {laps.map((lap, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-white px-4 py-3 shadow-sm dark:bg-slate-900"
          >
            <span className="font-medium">
              Lap {index + 1}
            </span>

            <span className="font-mono font-bold">
              {formatTime(lap)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
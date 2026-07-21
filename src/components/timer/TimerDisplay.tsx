interface TimerDisplayProps {
  elapsed: number;
}

export default function TimerDisplay({
  elapsed,
}: TimerDisplayProps) {
  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  const centiseconds = Math.floor((elapsed % 1000) / 10);

  const format = (value: number) =>
    value.toString().padStart(2, "0");

  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-inner">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.4em] text-emerald-400">
        Meeting Timer
      </p>

      <div className="mt-4 flex items-end justify-center gap-1">
        <span className="font-mono text-6xl font-bold tracking-wider text-white">
          {format(hours)}:{format(minutes)}:{format(seconds)}
        </span>

        <span className="mb-2 font-mono text-2xl font-semibold text-emerald-400">
          .{format(centiseconds)}
        </span>
      </div>
    </div>
  );
}
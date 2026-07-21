interface TimerDisplayProps {
  elapsed: number;
}

export default function TimerDisplay({
  elapsed,
}: TimerDisplayProps) {
  const hours = Math.floor(elapsed / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);

  const format = (value: number) =>
    value.toString().padStart(2, "0");

  return (
    <div className="rounded-2xl bg-slate-900 px-6 py-8 text-center shadow-inner">
      <p className="font-mono text-5xl font-bold tracking-widest text-emerald-400">
        {format(hours)}:{format(minutes)}:{format(seconds)}
      </p>
    </div>
  );
}
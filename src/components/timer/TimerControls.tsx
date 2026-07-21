import { Pause, Play, RotateCcw, Flag } from "lucide-react";

interface TimerControlsProps {
  isRunning: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onLap: () => void;
}

export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
  onLap,
}: TimerControlsProps) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      {!isRunning ? (
        <button
          onClick={onStart}
          className="flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Play className="h-5 w-5" />
          Start
        </button>
      ) : (
        <>
          <button
            onClick={onPause}
            className="flex items-center gap-2 rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600"
          >
            <Pause className="h-5 w-5" />
            Pause
          </button>

          <button
            onClick={onLap}
            className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
          >
            <Flag className="h-5 w-5" />
            Lap
          </button>
        </>
      )}

      <button
        onClick={onReset}
        className="flex items-center gap-2 rounded-xl bg-slate-700 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
      >
        <RotateCcw className="h-5 w-5" />
        Reset
      </button>
    </div>
  );
}
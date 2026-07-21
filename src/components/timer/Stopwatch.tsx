import { useEffect, useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";
import LapList from "./LapList";

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);

  const startTimeRef = useRef(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsed;

      intervalRef.current = window.setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 10);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsed(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (!isRunning) return;

    setLaps((previous) => [...previous, elapsed]);
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl dark:bg-slate-900">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          ⏱ Meeting Stopwatch
        </h2>

        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold ${
            isRunning
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
              : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              isRunning
                ? "animate-pulse bg-emerald-500"
                : "bg-slate-400"
            }`}
          />

          {isRunning ? "RUNNING" : "STOPPED"}
        </div>
      </div>

      <TimerDisplay elapsed={elapsed} />

      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onLap={handleLap}
      />

      <LapList laps={laps} />
    </div>
  );
}
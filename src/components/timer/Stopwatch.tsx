import { useEffect, useRef, useState } from "react";
import TimerDisplay from "./TimerDisplay";
import TimerControls from "./TimerControls";

export default function Stopwatch() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsed;

      intervalRef.current = window.setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 100);
    } else if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, elapsed]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsed(0);
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl">
      <h2 className="mb-6 text-center text-2xl font-bold">
        ⏱ Meeting Stopwatch
      </h2>

      <TimerDisplay elapsed={elapsed} />

      <TimerControls
        isRunning={isRunning}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
      />
    </div>
  );
}
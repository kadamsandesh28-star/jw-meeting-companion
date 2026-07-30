import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface DashboardHeroProps {
  greeting: string;
}

export default function DashboardHero({
  greeting,
}: DashboardHeroProps) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-8 p-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-800">
            👋 {greeting}
          </h1>

          <p className="mt-2 text-lg text-slate-600">
            {date}
          </p>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-slate-700">
            <Clock size={18} />
            <span className="font-medium">Live Time</span>
          </div>

          <div className="mt-2 text-3xl font-bold tracking-wide text-blue-600">
            {time}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-100 px-8 py-8">
        <blockquote className="text-xl italic leading-relaxed text-slate-700">
          "Whatever you are doing, work at it whole-souled as for Jehovah and not
          for men."
        </blockquote>

        <p className="mt-4 text-right text-lg font-medium text-slate-600">
          — Colossians 3:23
        </p>
      </div>
    </div>
);
}
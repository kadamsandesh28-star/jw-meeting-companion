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
    <div
      className="overflow-hidden rounded-3xl shadow-xl"
      style={{
        background:
          "linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)",
      }}
    >
      <div className="flex flex-col gap-8 p-8 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            👋 {greeting}
          </h1>

          <p className="mt-2 text-lg text-blue-100">
            {date}
          </p>
        </div>

        <div className="text-right">
          <div className="flex items-center justify-end gap-2 text-blue-100">
            <Clock size={18} />
            <span className="font-medium">Live Time</span>
          </div>

          <div className="mt-2 text-4xl font-bold tracking-wide text-white">
            {time}
          </div>
        </div>
      </div>

      <div
        className="px-8 py-8"
        style={{
          background: "rgba(255,255,255,0.08)",
          backdropFilter: "blur(6px)",
          borderTop: "1px solid rgba(255,255,255,.15)",
        }}
      >
        <blockquote className="text-xl italic leading-relaxed text-blue-50">
          "Whatever you are doing, work at it whole-souled as for Jehovah and not
          for men."
        </blockquote>

        <p className="mt-4 text-right text-lg font-medium text-blue-100">
          — Colossians 3:23
        </p>
      </div>
    </div>
  );
}
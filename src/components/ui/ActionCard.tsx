import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ActionCardProps {
  title: string;
  description?: string;
  to: string;
  badge?: React.ReactNode;
  children?: React.ReactNode;
}

export default function ActionCard({
  title,
  description,
  to,
  badge,
  children,
}: ActionCardProps) {
  return (
    <Link
      to={to}
      className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>

              {badge}
            </div>

            {description && (
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
            )}
          </div>

          {children}
        </div>

        <ChevronRight
          size={20}
          className="mt-1 shrink-0 text-slate-400"
        />
      </div>
    </Link>
  );
}
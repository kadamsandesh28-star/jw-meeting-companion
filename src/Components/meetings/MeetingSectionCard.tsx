import { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

interface MeetingSectionCardProps {
  icon: ReactNode;
  title: string;
  description?: string;
  children?: ReactNode;
}

export default function MeetingSectionCard({
  icon,
  title,
  description,
  children,
}: MeetingSectionCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}
      <div className="mb-5 flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-300">
          {icon}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          {description && (
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      {children && (
        <div className="border-t border-slate-100 pt-5 dark:border-slate-700">
          {children}
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 flex justify-end">
        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
          Open
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
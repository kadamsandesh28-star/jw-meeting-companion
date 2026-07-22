import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  icon,
  children,
}: PageHeaderProps) {
  return (
    <header className="flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-indigo-600 dark:text-indigo-400">
            {icon}
          </div>
        )}

        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {title}
          </h1>

          {description && (
            <p className="mt-1 text-slate-600 dark:text-slate-400">
              {description}
            </p>
          )}
        </div>
      </div>

      {children && (
        <div className="shrink-0">
          {children}
        </div>
      )}
    </header>
  );
}
import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  title?: string;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export default function Card({
  title,
  icon,
  children,
  footer,
  className,
}: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 dark:border-gray-700",
        "bg-white dark:bg-gray-900",
        "shadow-sm hover:shadow-md transition-shadow",
        "p-5",
        className
      )}
    >
      {(title || icon) && (
        <div className="mb-4 flex items-center gap-2">
          {icon}
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
      )}

      <div>{children}</div>

      {footer && (
        <div className="mt-5 border-t pt-3">
          {footer}
        </div>
      )}
    </div>
  );
}
import Card from "../ui/Card";
import { BarChart3 } from "lucide-react";

interface ProgressItem {
  title: string;
  completed: boolean;
}

interface WeeklyProgressCardProps {
  progress: ProgressItem[];
}

export default function WeeklyProgressCard({
  progress,
}: WeeklyProgressCardProps) {
  const completed = progress.filter((item) => item.completed).length;
  const percentage = Math.round(
    (completed / progress.length) * 100
  );

  return (
    <Card
      title="Weekly Preparation"
      icon={<BarChart3 className="h-6 w-6 text-blue-600" />}
    >
      {/* Percentage Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          Overall Progress
        </span>

        <span className="text-lg font-bold text-blue-600">
          {percentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="mb-6 h-3 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-700"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      {/* Checklist */}
      <div className="space-y-3">
        {progress.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-between"
          >
            <span
              className={
                item.completed
                  ? "text-gray-500 line-through"
                  : "text-gray-800 dark:text-gray-200"
              }
            >
              {item.title}
            </span>

            <span className="text-lg">
              {item.completed ? "✅" : "⬜"}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 border-t pt-4 text-center">
        <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {completed} of {progress.length} completed
        </span>
      </div>
    </Card>
  );
}
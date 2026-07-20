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
    <div className="rounded-xl bg-white shadow-md p-6">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          Weekly Preparation
        </h2>

        <span className="text-blue-600 font-bold">
          {percentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mb-5">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="space-y-2">
        {progress.map((item) => (
          <div
            key={item.title}
            className="flex justify-between items-center"
          >
            <span>{item.title}</span>

            <span>
              {item.completed ? "✅" : "⬜"}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 text-sm text-gray-500">
        {completed} of {progress.length} completed
      </div>

    </div>
  );
}
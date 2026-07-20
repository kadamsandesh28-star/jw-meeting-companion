import {
  CalendarDays,
  BookOpen,
  Mic,
  ClipboardList,
  Zap,
} from "lucide-react";
import Card from "../ui/Card";

const actions = [
  {
    label: "Meeting Schedule",
    icon: CalendarDays,
  },
  {
    label: "Workbook",
    icon: BookOpen,
  },
  {
    label: "Assignments",
    icon: Mic,
  },
  {
    label: "Service Report",
    icon: ClipboardList,
  },
];

export default function QuickActionsCard() {
  return (
    <Card title="Quick Actions" icon={<Zap size={20} />}>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className="
                flex flex-col items-center justify-center
                rounded-xl
                border
                border-gray-200
                bg-gray-50
                p-4
                transition-all
                hover:bg-blue-50
                hover:shadow-md
                dark:border-gray-700
                dark:bg-gray-800
                dark:hover:bg-gray-700
              "
              onClick={() => alert(`${action.label} coming soon!`)}
            >
              <Icon className="mb-2 text-blue-600" size={26} />

              <span className="text-sm font-medium text-center">
                {action.label}
              </span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
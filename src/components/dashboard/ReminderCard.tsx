import Card from "../ui/Card";
import { updatePlannerStatus } from "../../services/plannerService";

interface Reminder {
  id: string;
  title: string;
  done: boolean;
}

interface Props {
  reminders: Reminder[];
}

export default function ReminderCard({
  reminders,
}: Props) {
  function toggleReminder(id: string, done: boolean) {
    updatePlannerStatus(
      id,
      done ? "In Progress" : "Ready"
    );

    // Temporary refresh until we introduce React state.
    window.location.reload();
  }

  return (
    <Card title="🔔 Don't Forget">
      {reminders.length === 0 ? (
        <div className="rounded-lg bg-green-50 p-4 text-center text-green-700 dark:bg-green-900/20 dark:text-green-300">
          🎉 You're fully prepared for your upcoming meetings!
        </div>
      ) : (
        <ul className="space-y-3">
          {reminders.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between rounded-lg border p-2"
            >
              <span
                className={
                  item.done
                    ? "line-through text-gray-500"
                    : ""
                }
              >
                {item.title}
              </span>

              <input
                type="checkbox"
                checked={item.done}
                onChange={() =>
                  toggleReminder(item.id, item.done)
                }
                className="h-5 w-5 cursor-pointer"
              />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
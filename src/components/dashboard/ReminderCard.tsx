import Card from "../ui/Card";

interface Reminder {
  title: string;
  done: boolean;
}

interface Props {
  reminders: Reminder[];
}

export default function ReminderCard({
  reminders,
}: Props) {
  return (
    <Card title="🔔 Don't Forget">
      <ul className="space-y-2">
        {reminders.map((item) => (
          <li
            key={item.title}
            className="flex items-center gap-2"
          >
            <span>{item.done ? "✅" : "⬜"}</span>

            <span
              className={
                item.done
                  ? "line-through text-gray-500"
                  : ""
              }
            >
              {item.title}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
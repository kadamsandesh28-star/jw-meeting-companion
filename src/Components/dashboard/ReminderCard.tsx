import Card from "../ui/Card";

interface Props {
  reminders: string[];
}

export default function ReminderCard({
  reminders,
}: Props) {
  return (
    <Card title="🔔 Don't Forget">
      <ul className="space-y-2">
        {reminders.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2"
          >
            ☐ {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
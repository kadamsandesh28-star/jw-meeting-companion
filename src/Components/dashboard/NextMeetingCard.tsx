import Card from "../ui/Card";

interface Props {
  title: string;
  countdown: string;
}

export default function NextMeetingCard({
  title,
  countdown,
}: Props) {
  return (
    <Card title="⏳ Next Meeting">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="mt-2 text-gray-500">
        Starts in {countdown}
      </p>
    </Card>
  );
}
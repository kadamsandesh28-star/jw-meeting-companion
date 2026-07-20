import Card from "../ui/Card";

interface Props {
  greeting: string;
}

export default function GreetingCard({ greeting }: Props) {
  return (
    <Card>
      <h1 className="text-3xl font-bold">
        {greeting} 👋
      </h1>

      <p className="mt-2 text-gray-500">
        Let's get prepared for this week's spiritual activities.
      </p>
    </Card>
  );
}
import { Hand } from "lucide-react";
import Card from "../ui/Card";

interface Props {
  greeting: string;
}

export default function GreetingCard({ greeting }: Props) {
  return (
    <Card
      title={greeting}
      icon={<Hand className="h-6 w-6 text-blue-600" />}
    >
      <p className="text-gray-500 dark:text-gray-400">
        Let's get prepared for this week's spiritual activities.
      </p>
    </Card>
  );
}
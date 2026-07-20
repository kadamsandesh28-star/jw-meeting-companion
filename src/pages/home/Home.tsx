import GreetingCard from "../../components/dashboard/GreetingCard";
import NextMeetingCard from "../../components/dashboard/NextMeetingCard";
import ReminderCard from "../../components/dashboard/ReminderCard";

import { dashboardData } from "../../data/mockDashboard";

export default function Home() {
  return (
    <div className="space-y-6">

      <GreetingCard
        greeting={dashboardData.greeting}
      />

      <div className="grid gap-6 lg:grid-cols-2">

        <NextMeetingCard
          title={dashboardData.nextMeeting.title}
          countdown={dashboardData.nextMeeting.countdown}
        />

        <ReminderCard
          reminders={dashboardData.reminders}
        />

      </div>

    </div>
  );
}
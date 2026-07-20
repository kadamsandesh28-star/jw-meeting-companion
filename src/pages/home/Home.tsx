import GreetingCard from "../../components/dashboard/GreetingCard";
import NextMeetingCard from "../../components/dashboard/NextMeetingCard";
import ReminderCard from "../../components/dashboard/ReminderCard";
import WeeklyProgressCard from "../../components/dashboard/WeeklyProgressCard";
import QuickActionsCard from "../../components/dashboard/QuickActionsCard";

import { dashboardData } from "../../data/mockDashboard";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      {/* Greeting */}
      <GreetingCard greeting={dashboardData.greeting} />

      {/* Next Meeting + Reminder */}
      <div className="grid gap-6 md:grid-cols-2">
        <NextMeetingCard
          title={dashboardData.nextMeeting.title}
          countdown={dashboardData.nextMeeting.countdown}
        />

        <ReminderCard reminders={dashboardData.reminders} />
      </div>

      {/* Weekly Progress */}
      <WeeklyProgressCard progress={dashboardData.progress} />
      <QuickActionsCard />
    </div>
  );
}
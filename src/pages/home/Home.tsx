import GreetingCard from "../../components/dashboard/GreetingCard";
import NextMeetingCard from "../../components/dashboard/NextMeetingCard";
import ReminderCard from "../../components/dashboard/ReminderCard";
import WeeklyProgressCard from "../../components/dashboard/WeeklyProgressCard";
import QuickActionsCard from "../../components/dashboard/QuickActionsCard";

import {
  getMeetingProgress,
  getOutstandingAssignments,
} from "../../services/plannerService";

import { getGreeting } from "../../utils/greeting";
import { getNextMeeting } from "../../utils/nextMeeting";

export default function Home() {
  const midweek = getMeetingProgress("Midweek");
  const weekend = getMeetingProgress("Weekend");

  const nextMeeting = getNextMeeting();

  const liveProgress = [
    {
      title: "Midweek Meeting",
      completed:
        midweek.total > 0 &&
        midweek.ready === midweek.total,
    },
    {
      title: "Weekend Meeting",
      completed:
        weekend.total > 0 &&
        weekend.ready === weekend.total,
    },
  ];

  const reminders = getOutstandingAssignments().map((item) => ({
    title: item.title,
    done: false,
  }));

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <GreetingCard greeting={getGreeting()} />

      <div className="grid gap-6 md:grid-cols-2">
        <NextMeetingCard
          title={nextMeeting.title}
          countdown={nextMeeting.countdown}
        />

        <ReminderCard reminders={reminders} />
      </div>

      <WeeklyProgressCard progress={liveProgress} />

      <QuickActionsCard />
    </div>
  );
}
import GreetingCard from "../../components/dashboard/GreetingCard";
import NextMeetingCard from "../../components/dashboard/NextMeetingCard";
import ReminderCard from "../../components/dashboard/ReminderCard";
import WeeklyProgressCard from "../../components/dashboard/WeeklyProgressCard";
import QuickActionsCard from "../../components/dashboard/QuickActionsCard";
import TodaysFocusCard from "../../components/dashboard/TodaysFocusCard";

import { getTodaysFocus } from "../../services/dashboardService";

import { getGreeting } from "../../utils/greeting";
import { getNextMeeting } from "../../utils/nextMeeting";

import { usePlanner } from "../../contexts/PlannerContext";

export default function Home() {
  const { planner } = usePlanner();

  const nextMeeting = getNextMeeting();
  const todaysFocus = getTodaysFocus();

  const midweek = planner.filter(
    (item) => item.meeting === "Midweek"
  );

  const weekend = planner.filter(
    (item) => item.meeting === "Weekend"
  );

  const liveProgress = [
    {
      title: "Midweek Meeting",
      completed:
        midweek.length > 0 &&
        midweek.every((item) => item.status === "Ready"),
    },
    {
      title: "Weekend Meeting",
      completed:
        weekend.length > 0 &&
        weekend.every((item) => item.status === "Ready"),
    },
  ];

  const reminders = planner
    .filter((item) => item.status !== "Ready")
    .map((item) => ({
      id: item.id,
      title: item.title,
      done: false,
    }));

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <GreetingCard greeting={getGreeting()} />

      <TodaysFocusCard
        title={todaysFocus.title}
        description={todaysFocus.description}
        button={todaysFocus.button}
        path={todaysFocus.path}
      />

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
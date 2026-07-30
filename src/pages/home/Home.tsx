import DashboardHero from "../../components/dashboard/DashboardHero";
import NextMeetingCard from "../../components/dashboard/NextMeetingCard";
import WeeklyProgressCard from "../../components/dashboard/WeeklyProgressCard";
import QuickActionsCard from "../../components/dashboard/QuickActionsCard";

import TodoCard from "../../features/dashboard/components/TodoCard";
import CalendarCard from "../../features/dashboard/components/CalendarCard";
import QuickNotesCard from "../../features/dashboard/components/QuickNotesCard";

import { getNextMeeting } from "../../utils/nextMeeting";
import { getGreeting } from "../../utils/greeting";

import { usePlanner } from "../../contexts/PlannerContext";

export default function Home() {
  const { planner } = usePlanner();

  const nextMeeting = getNextMeeting();

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

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      <DashboardHero greeting={getGreeting()} />

      <div className="grid gap-6 lg:grid-cols-2">
        <TodoCard />
        <CalendarCard />
      </div>

      <QuickNotesCard />

      <NextMeetingCard
        title={nextMeeting.title}
        countdown={nextMeeting.countdown}
      />

      <WeeklyProgressCard progress={liveProgress} />

      <QuickActionsCard />
    </div>
  );
}
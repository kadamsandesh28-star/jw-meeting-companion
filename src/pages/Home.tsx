import { Box } from "@mui/material";

import HeroCard from "../Components/HeroCard";
import PlannerCard from "../Components/PlannerCard";

import FocusCard from "../Components/dashboard/FocusCard";
import TodayTasksCard from "../Components/dashboard/TodayTasksCard";
import ContinueResearchCard from "../Components/dashboard/ContinueResearchCard";
import DailyScriptureCard from "../Components/dashboard/DailyScriptureCard";
import UpcomingEventsCard from "../Components/dashboard/UpcomingEventsCard";
import CongregationSummaryCard from "../Components/dashboard/CongregationSummaryCard";
import SnapshotCard from "../Components/dashboard/SnapshotCard";
import QuickActionsCard from "../Components/dashboard/QuickActionsCard";
import CongregationResponsibilitiesCard from "../Components/dashboard/CongregationResponsibilitiesCard";

import { isResponsibleBrother } from "../services/userRoleService";

export default function Home() {
  return (
    <Box>

      {/* Hero */}
      <HeroCard />

      {/* Weekly Planner */}
      <PlannerCard />

      {/* Today's Focus */}
      <FocusCard />

      {/* Today's Tasks */}
      <TodayTasksCard />

      {/* Continue Research */}
      <ContinueResearchCard />

      {/* Daily Scripture */}
      <DailyScriptureCard />

      {/* Upcoming Events */}
      <UpcomingEventsCard />

      {/* Responsible Brothers */}
      {isResponsibleBrother() && (
        <CongregationResponsibilitiesCard />
      )}

      {/* Congregation Summary */}
      <CongregationSummaryCard />

      {/* Spiritual Snapshot */}
      <SnapshotCard />

      {/* Quick Actions */}
      <QuickActionsCard />

    </Box>
  );
}
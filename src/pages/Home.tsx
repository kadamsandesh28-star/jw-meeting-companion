import { Box } from "@mui/material";

import HeroCard from "../Components/HeroCard";
import PlannerCard from "../Components/PlannerCard";

import FocusCard from "../Components/dashboard/FocusCard";
import ContinueResearchCard from "../Components/dashboard/ContinueResearchCard";
import DailyScriptureCard from "../Components/dashboard/DailyScriptureCard";
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

      {/* Continue Research */}
      <ContinueResearchCard />

      {/* Daily Scripture */}
      <DailyScriptureCard />

      {/* Responsible Brothers Only */}
      {isResponsibleBrother() && (
        <CongregationResponsibilitiesCard />
      )}

      {/* Spiritual Snapshot */}
      <SnapshotCard />

      {/* Quick Actions */}
      <QuickActionsCard />

    </Box>
  );
}
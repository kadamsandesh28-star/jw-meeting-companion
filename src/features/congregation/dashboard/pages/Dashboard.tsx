import { Box, Grid, Stack } from "@mui/material";

import DashboardHeader from "../components/DashboardHeader";
import CongregationOverviewCard from "../components/CongregationOverviewCard";
import OverseersCard from "../components/OverseersCard";
import CongregationDepartmentsCard from "../components/CongregationDepartmentsCard";
import QuickActionsCard from "../components/QuickActionsCard";
import RecentActivityCard, {
  Activity,
} from "../components/RecentActivityCard";

import { publisherService } from "../../publishers/services/publisherService";
import { bodyMemberService } from "../../body-of-elders/services/bodyMemberService";
import { serviceGroupService } from "../../service-groups/services/serviceGroupService";
import { territoryService } from "../../territories/services/territoryService";
import { serviceCommitteeService } from "../../service-committee/services/serviceCommitteeService";

export default function Dashboard() {
  const publisherCount = publisherService.getAll().length;
  const elderCount = bodyMemberService.getAll().length;
  const serviceGroupCount = serviceGroupService.getAll().length;
  const territoryCount = territoryService.getAll().length;
  const committeeCount = serviceCommitteeService.getAll().length;

  const activities: Activity[] = [
    ...publisherService.getAll().map((p) => ({
      title: `${p.firstName} ${p.lastName}`,
      subtitle: "Publisher created",
      createdAt: p.createdAt,
    })),

    ...serviceGroupService.getAll().map((g) => ({
      title: g.name,
      subtitle: "Service Group created",
      createdAt: g.createdAt,
    })),

    ...territoryService.getAll().map((t) => ({
      title: t.name,
      subtitle: "Territory created",
      createdAt: t.createdAt,
    })),

    ...serviceCommitteeService.getAll().map((c) => ({
      title: c.name,
      subtitle: "Service Committee created",
      createdAt: c.createdAt,
    })),
  ]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )
    .slice(0, 5);

  return (
    <Box
      sx={{
        maxWidth: 1600,
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: 4,
        bgcolor: "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <Stack spacing={4}>
        <DashboardHeader congregationName="West Hills Congregation" />

        {/* Overview + Overseers */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <CongregationOverviewCard
              publisherCount={publisherCount}
              elderCount={elderCount}
              serviceGroupCount={serviceGroupCount}
              territoryCount={territoryCount}
              committeeCount={committeeCount}
            />
          </Grid>

          <Grid size={{ xs: 12, lg: 4 }}>
            <OverseersCard />
          </Grid>
        </Grid>

        {/* Departments + Quick Actions */}
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, lg: 7 }}>
            <CongregationDepartmentsCard />
          </Grid>

          <Grid size={{ xs: 12, lg: 5 }}>
            <QuickActionsCard />
          </Grid>
        </Grid>

        {/* Recent Activity */}
        <RecentActivityCard activities={activities} />
      </Stack>
    </Box>
  );
}
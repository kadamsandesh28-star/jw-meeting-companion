import { Grid, Stack } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

import PageHeader from "../../../components/ui/PageHeader";
import SectionCard from "../../../components/ui/SectionCard";
import DataTable from "../../../components/ui/DataTable";
import ActionCard from "../../../components/ui/ActionCard";

import MinistryStats from "../components/MinistryStats";
import QuickActions from "../components/QuickActions";
import { useMinistry } from "../hooks/useMinistry";
import { MinistrySession } from "../types/ministry";

export default function MinistryDashboard() {
  const { statistics, sessions } = useMinistry();

  return (
    <Stack spacing={4}>
      <PageHeader
        title="Ministry"
        subtitle="Manage your ministry activity, return visits and Bible studies."
      />

      <MinistryStats statistics={statistics} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <QuickActions />
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <SectionCard
            title="Recent Sessions"
            subtitle="Latest ministry activity"
          >
            <DataTable<MinistrySession>
              rows={sessions}
              getRowKey={(row) => row.id}
              columns={[
                {
                  id: "date",
                  label: "Date",
                },
                {
                  id: "companion",
                  label: "Companion",
                },
                {
                  id: "territory",
                  label: "Territory",
                },
                {
                  id: "startTime",
                  label: "Start",
                },
                {
                  id: "endTime",
                  label: "End",
                },
                {
                  id: "returnVisits",
                  label: "RVs",
                },
              ]}
            />
          </SectionCard>
        </Grid>
      </Grid>

      <SectionCard
        title="Monthly Goal"
        subtitle="Stay encouraged"
      >
        <ActionCard
          title="Keep up the fine work!"
          description="Every ministry session is valuable. Continue building good spiritual habits and tracking your progress."
          icon={<VolunteerActivismIcon />}
        />
      </SectionCard>
    </Stack>
  );
}
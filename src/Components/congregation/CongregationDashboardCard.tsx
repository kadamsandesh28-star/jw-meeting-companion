import {
  Card,
  CardContent,
  Grid,
  Typography,
  Divider,
} from "@mui/material";

import { getCongregationDashboardSummary } from "../../services/congregationDashboardService";

export default function CongregationDashboardCard() {
  const summary = getCongregationDashboardSummary();

  return (
    <Card sx={{ mb: 3 }}>
      <CardContent>

        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
        >
          📊 Congregation Dashboard
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h3">
              {summary.publishers}
            </Typography>

            <Typography color="text.secondary">
              Publishers
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h3">
              {summary.groups}
            </Typography>

            <Typography color="text.secondary">
              Service Groups
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h3">
              {summary.departments}
            </Typography>

            <Typography color="text.secondary">
              Departments
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="h3">
              {summary.shepherdingRecords}
            </Typography>

            <Typography color="text.secondary">
              Shepherding
            </Typography>
          </Grid>

        </Grid>

      </CardContent>
    </Card>
  );
}
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { publisherService } from "../publishers/services/publisherService";
import { bodyMemberService } from "../body-of-elders/services/bodyMemberService";
import { serviceGroupService } from "../service-groups/services/serviceGroupService";
import { territoryService } from "../territories/services/territoryService";
import { serviceCommitteeService } from "../service-committee/services/serviceCommitteeService";

type Activity = {
  title: string;
  subtitle: string;
  createdAt: string;
};

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
    <Box sx={{ p: 3 }}>
      <Stack spacing={4}>
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Congregation Dashboard
          </Typography>

          <Typography color="text.secondary">
            Welcome to JW Meeting Companion.
          </Typography>
        </Box>

        {/* Statistics */}

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Publishers
              </Typography>

              <Typography variant="h3">
                {publisherCount}
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Body of Elders
              </Typography>

              <Typography variant="h3">
                {elderCount}
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Service Groups
              </Typography>

              <Typography variant="h3">
                {serviceGroupCount}
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Territories
              </Typography>

              <Typography variant="h3">
                {territoryCount}
              </Typography>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography color="text.secondary">
                Service Committees
              </Typography>

              <Typography variant="h3">
                {committeeCount}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Quick Actions */}

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Quick Actions
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              <Button
                component={RouterLink}
                to="/congregation/publishers/new"
                variant="contained"
              >
                New Publisher
              </Button>

              <Button
                component={RouterLink}
                to="/congregation/service-groups/new"
                variant="contained"
              >
                New Service Group
              </Button>

              <Button
                component={RouterLink}
                to="/congregation/territories/new"
                variant="contained"
              >
                New Territory
              </Button>

              <Button
                component={RouterLink}
                to="/congregation/service-committee/new"
                variant="contained"
              >
                New Committee
              </Button>
            </Box>
          </CardContent>
        </Card>

        {/* Recent Activity */}

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Activity
            </Typography>

            {activities.length === 0 ? (
              <Typography color="text.secondary">
                No congregation data has been added yet.
              </Typography>
            ) : (
              <List disablePadding>
                {activities.map((activity, index) => (
                  <ListItem
                    key={index}
                    divider={index < activities.length - 1}
                  >
                    <ListItemText
                      primary={activity.title}
                      secondary={activity.subtitle}
                    />
                  </ListItem>
                ))}
              </List>
            )}
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
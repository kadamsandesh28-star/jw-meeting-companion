import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

export interface Activity {
  title: string;
  subtitle: string;
  createdAt: string;
}

interface RecentActivityCardProps {
  activities: Activity[];
}

function ActivityRow({
  activity,
}: {
  activity: Activity;
}) {
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
        transition: "all .25s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: 2,
        },
      }}
    >
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <Avatar
          sx={{
            bgcolor: "#E3F2FD",
            color: "primary.main",
          }}
        >
          <PersonAddAltOutlinedIcon />
        </Avatar>

        <Box flex={1}>
          <Typography fontWeight={700}>
            {activity.title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{ mt: 0.5 }}
          >
            {activity.subtitle}
          </Typography>
        </Box>

        <Chip
          icon={<HistoryRoundedIcon />}
          label={activity.createdAt}
          size="small"
          variant="outlined"
        />
      </Stack>
    </Box>
  );
}

export default function RecentActivityCard({
  activities,
}: RecentActivityCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h5"
          fontWeight={700}
        >
          Recent Activity
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1, mb: 3 }}
        >
          Latest updates across your congregation.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {activities.length === 0 ? (
          <Box
            sx={{
              py: 6,
              textAlign: "center",
            }}
          >
            <Avatar
              sx={{
                mx: "auto",
                mb: 2,
                width: 64,
                height: 64,
                bgcolor: "#E3F2FD",
                color: "primary.main",
              }}
            >
              <HistoryRoundedIcon fontSize="large" />
            </Avatar>

            <Typography
              variant="h6"
              fontWeight={600}
            >
              No Recent Activity
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ mt: 1 }}
            >
              Activity will appear here as congregation
              information is added.
            </Typography>
          </Box>
        ) : (
          <Stack spacing={2}>
            {activities.map((activity, index) => (
              <ActivityRow
                key={index}
                activity={activity}
              />
            ))}
          </Stack>
        )}

        {activities.length > 0 && (
          <>
            <Divider sx={{ my: 3 }} />

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{
                cursor: "pointer",
                color: "primary.main",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
            >
              <Typography
                fontWeight={600}
                color="primary"
              >
                View Activity History
              </Typography>

              <ChevronRightRoundedIcon
                color="primary"
              />
            </Stack>
          </>
        )}
      </CardContent>
    </Card>
  );
}
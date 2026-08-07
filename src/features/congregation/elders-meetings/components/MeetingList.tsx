import {
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import MeetingListItem from "./MeetingListItem";
import EmptyMeetings from "./EmptyMeetings";

const meetings = [
  {
    id: "1",
    title: "Monthly Body of Elders Meeting",
    date: "07 Aug 2026",
    status: "Upcoming",
  },
  {
    id: "2",
    title: "Service Committee Meeting",
    date: "21 Aug 2026",
    status: "Scheduled",
  },
];

export default function MeetingList() {
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
          Meetings
        </Typography>

        <Typography
          color="text.secondary"
          sx={{ mt: 1, mb: 3 }}
        >
          Open a previous meeting or continue
          preparing an upcoming one.
        </Typography>

        <Divider sx={{ mb: 3 }} />

        {meetings.length === 0 ? (
          <EmptyMeetings />
        ) : (
          <Stack spacing={2}>
            {meetings.map((meeting) => (
              <MeetingListItem
                key={meeting.id}
                title={meeting.title}
                date={meeting.date}
                status={meeting.status}
              />
            ))}
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
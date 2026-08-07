import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import {
  Avatar,
  Checkbox,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import MeetingCard from "../../../../shared/meeting-workspace/MeetingCard";

import { useMeetingElders } from "../hooks/useMeetingElders";

export default function AttendanceCard() {
  const elders = useMeetingElders();

  return (
    <MeetingCard
      title="Attendance"
      subtitle="Mark the brothers present for this meeting."
    >
      <Stack spacing={2}>
        {elders.map((elder) => (
          <Stack
            key={elder.id}
            direction="row"
            spacing={2}
            alignItems="center"
          >
            <Checkbox defaultChecked />

            <Avatar
              sx={{
                bgcolor: "#E3F2FD",
                color: "primary.main",
              }}
            >
              <PersonRoundedIcon />
            </Avatar>

            <Stack
              spacing={0}
              sx={{ flex: 1 }}
            >
              <Typography fontWeight={600}>
                {elder.name}
              </Typography>

              <Typography
                variant="caption"
                color="text.secondary"
              >
                {elder.role}
              </Typography>
            </Stack>
          </Stack>
        ))}

        <Divider />
      </Stack>
    </MeetingCard>
  );
}
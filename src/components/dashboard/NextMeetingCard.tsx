import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import EventRoundedIcon from "@mui/icons-material/EventRounded";
import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";

interface NextMeetingCardProps {
  title: string;
  countdown: string;
}

export default function NextMeetingCard({
  title,
  countdown,
}: NextMeetingCardProps) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <CardContent>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h6"
            fontWeight={700}
          >
            ⏳ Next Meeting
          </Typography>

          <Chip
            size="small"
            color="primary"
            label={countdown}
          />
        </Stack>

        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
        >
          {title}
        </Typography>

        <Stack
          direction="row"
          spacing={3}
          mt={2}
        >
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <EventRoundedIcon
              fontSize="small"
              color="primary"
            />

            <Typography color="text.secondary">
              See Meeting Schedule
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <AccessTimeRoundedIcon
              fontSize="small"
              color="primary"
            />

            <Typography color="text.secondary">
              {countdown}
            </Typography>
          </Stack>
        </Stack>

      </CardContent>
    </Card>
  );
}
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import RecordVoiceOverRoundedIcon from "@mui/icons-material/RecordVoiceOverRounded";

import { Grid } from "@mui/material";

import MeetingCard from "./MeetingCard";
import MeetingScheduleHeader from "./MeetingScheduleHeader";

interface Props {
  onMidweek?: () => void;
  onWeekend?: () => void;
  onFieldService?: () => void;
  onHistory?: () => void;
}

export default function MeetingDashboard({
  onMidweek,
  onWeekend,
  onFieldService,
  onHistory,
}: Props) {
  return (
    <>
      <MeetingScheduleHeader />

      <Grid
        container
        spacing={3}
      >
        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <MeetingCard
            title="📖 Midweek Meeting"
            description="Prepare monthly Meeting Workbook schedules, assign brothers, songs, prayers and meeting parts."
            color="#2e7d32"
            icon={<MenuBookRoundedIcon fontSize="large" />}
            onClick={onMidweek}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <MeetingCard
            title="📘 Weekend Meeting"
            description="Manage chairman, public talk speaker, Watchtower conductor, reader and prayers."
            color="#1565c0"
            icon={
              <RecordVoiceOverRoundedIcon fontSize="large" />
            }
            onClick={onWeekend}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <MeetingCard
            title="🤝 Field Service Arrangement"
            description="Create monthly witnessing arrangements with locations, witnessing forms and assigned brothers."
            color="#ef6c00"
            icon={<GroupsRoundedIcon fontSize="large" />}
            onClick={onFieldService}
          />
        </Grid>

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <MeetingCard
            title="📚 Schedule History"
            description="View, edit, duplicate and export previously created meeting schedules."
            color="#6a1b9a"
            icon={<HistoryRoundedIcon fontSize="large" />}
            onClick={onHistory}
          />
        </Grid>
      </Grid>
    </>
  );
}
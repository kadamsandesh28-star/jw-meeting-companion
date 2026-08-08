import {
  Box,
  Button,
  Grid,
  Stack,
} from "@mui/material";

import SaveRoundedIcon from "@mui/icons-material/SaveRounded";

import MeetingHeader from "../../../../shared/meeting-workspace/MeetingHeader";
import MeetingFooter from "../../../../shared/meeting-workspace/MeetingFooter";

import MeetingInfoCard from "../components/MeetingInfoCard";
import AttendanceCard from "../components/AttendanceCard";
import AgendaCard from "../components/AgendaCard";
import MinutesCard from "../components/MinutesCard";
import AssignmentsCard from "../components/AssignmentsCard";

import {
  MeetingProvider,
  useMeeting,
} from "../context/MeetingContext";

import ExportButton from "../export/ExportButton";
import { meetingPdfService } from "../export/meetingPdfService";

import { loadCongregationProfile } from "../../../../features/settings/storage/congregationProfileStorage";
import { meetingService } from "../services/meetingService";

function MeetingWorkspace() {
  const { meeting, setMeeting } =
    useMeeting();

  const profile =
    loadCongregationProfile();

  function handleSave() {
    const updatedMeeting = {
      ...meeting,

      info: {
        ...meeting.info,

        congregation:
          meeting.info.congregation ||
          profile.congregationName,
      },

      updatedAt:
        new Date().toISOString(),
    };

    setMeeting(updatedMeeting);

    meetingService.save(
      updatedMeeting
    );

    alert(
      "✅ Meeting saved successfully."
    );
  }

  function handleExportPdf() {
    const pdfMeeting = {
      ...meeting,

      info: {
        ...meeting.info,

        congregation:
          meeting.info.congregation ||
          profile.congregationName,
      },
    };

    meetingPdfService.export(
      pdfMeeting
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 1600,
        mx: "auto",
        px: {
          xs: 2,
          md: 4,
        },
        py: 4,
      }}
    >
      <Stack spacing={3}>
        <MeetingHeader
          title="Body of Elders Meeting"
          subtitle="Manage agenda, attendance, minutes and follow-up assignments."
          actions={
            <Stack
              direction="row"
              spacing={2}
            >
              <Button
                variant="outlined"
                startIcon={
                  <SaveRoundedIcon />
                }
                onClick={handleSave}
              >
                Save
              </Button>

              <ExportButton
                onPdf={
                  handleExportPdf
                }
              />
            </Stack>
          }
        />

        <Grid
          container
          spacing={3}
        >
          <Grid
            size={{
              xs: 12,
              md: 8,
            }}
          >
            <MeetingInfoCard />
          </Grid>

          <Grid
            size={{
              xs: 12,
              md: 4,
            }}
          >
            <AttendanceCard />
          </Grid>
        </Grid>

        <AgendaCard />

        <MinutesCard />

        <AssignmentsCard />

        <MeetingFooter />
      </Stack>
    </Box>
  );
}

export default function BodyOfEldersMeetingPage() {
  return (
    <MeetingProvider>
      <MeetingWorkspace />
    </MeetingProvider>
  );
}
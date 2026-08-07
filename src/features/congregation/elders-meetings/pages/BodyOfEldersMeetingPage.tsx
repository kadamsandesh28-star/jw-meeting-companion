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

import { MeetingProvider } from "../context/MeetingContext";

import ExportButton from "../export/ExportButton";
import { meetingPdfService } from "../export/meetingPdfService";

import type { Meeting } from "../models/Meeting";

import { loadCongregationProfile } from "../../../../features/settings/storage/congregationProfileStorage";
import { meetingService } from "../services/meetingService";

export default function BodyOfEldersMeetingPage() {
  const profile =
    loadCongregationProfile();

  const meeting: Meeting = {
    id: crypto.randomUUID(),

    title: "Body of Elders Meeting",

    createdAt: new Date().toISOString(),

    updatedAt: new Date().toISOString(),

    archived: false,

    info: {
      congregation:
        profile.congregationName,

      meetingType:
        "Body of Elders",

      meetingDate: new Date()
        .toISOString()
        .split("T")[0],

      meetingTime: "19:00",

      chairman: "",

      openingPrayer: "",

      closingPrayer: "",

      nextChairman: "",
    },

    attendance: [],

    agenda: [],

    minutes: "",
  };

  return (
    <MeetingProvider>
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
                  onClick={() => {
                    meetingService.save(
                      meeting
                    );

                    alert(
                      "✅ Meeting saved successfully."
                    );
                  }}
                >
                  Save
                </Button>

                <ExportButton
                  onPdf={() =>
                    meetingPdfService.export(
                      meeting
                    )
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
    </MeetingProvider>
  );
}
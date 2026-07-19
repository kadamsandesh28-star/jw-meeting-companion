import { Alert, Box, Button, Grid, Stack } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useParams } from "react-router-dom";

import { publisherService } from "../../services/publisherService";

import PublisherHeader from "../../Components/publisher/PublisherHeader";
import ContactCard from "../../Components/publisher/profile/ContactCard";
import SpiritualStatusCard from "../../Components/publisher/profile/SpiritualStatusCard";
import PrivilegesCard from "../../Components/publisher/profile/PrivilegesCard";
import AssignmentsCard from "../../Components/publisher/profile/AssignmentsCard";
import FamilyCard from "../../Components/publisher/profile/FamilyCard";
import TimelineCard from "../../Components/publisher/profile/TimelineCard";
import NotesCard from "../../Components/publisher/profile/NotesCard";

export default function PublisherProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const publisher = id
    ? publisherService.getById(id)
    : undefined;

  if (!publisher) {
    return (
      <Alert severity="error">
        Publisher not found.
      </Alert>
    );
  }

  return (
    <Box sx={{ pb: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() =>
            navigate("/congregation/directory")
          }
        >
          Back to Directory
        </Button>
      </Stack>

      <PublisherHeader publisher={publisher} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <ContactCard publisher={publisher} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <SpiritualStatusCard publisher={publisher} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <PrivilegesCard publisher={publisher} />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AssignmentsCard publisher={publisher} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <FamilyCard publisher={publisher} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <TimelineCard publisher={publisher} />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <NotesCard publisher={publisher} />
        </Grid>
      </Grid>
    </Box>
  );
}
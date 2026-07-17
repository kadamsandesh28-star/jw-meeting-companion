import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Alert,
  Box,
  Button,
  Grid,
  Stack,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import {
  loadPublishers,
  savePublishers,
  Publisher,
} from "../../services/congregationService";

import PublisherHeader from "../../Components/publisher/PublisherHeader";
import PersonalCard from "../../Components/publisher/PersonalCard";
import SpiritualCard from "../../Components/publisher/SpiritualCard";
import MinistryCard from "../../Components/publisher/MinistryCard";
import ShepherdingCard from "../../Components/publisher/ShepherdingCard";
import NotesCard from "../../Components/publisher/NotesCard";

export default function PublisherProfile() {
  const { id } = useParams();
  const navigate = useNavigate();

  const originalPublisher = useMemo(() => {
    return loadPublishers().find((p) => p.id === id);
  }, [id]);

  const [editMode, setEditMode] = useState(false);

  const [currentPublisher, setCurrentPublisher] =
    useState<Publisher | undefined>(originalPublisher);

  if (!currentPublisher) {
    return (
      <Alert severity="error">
        Publisher not found.
      </Alert>
    );
  }

  function updateField(
    field: keyof Publisher,
    value: any
  ) {
    setCurrentPublisher((prev) =>
      prev
        ? {
            ...prev,
            [field]: value,
          }
        : prev
    );
  }

  function saveProfile() {
    if (!currentPublisher) return;

    const publishers = loadPublishers();

    const updated: Publisher[] = publishers.map((publisher) =>
      publisher.id === currentPublisher.id
        ? currentPublisher
        : publisher
    );

    savePublishers(updated);

    setEditMode(false);
  }

  function cancelEdit() {
    setCurrentPublisher(originalPublisher);
    setEditMode(false);
  }

  return (
    <Box sx={{ pb: 4 }}>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        useFlexGap
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

        <Stack direction="row" spacing={2}>
          {!editMode ? (
            <Button
              variant="contained"
              startIcon={<EditIcon />}
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </Button>
          ) : (
            <>
              <Button
                color="inherit"
                variant="outlined"
                startIcon={<CancelIcon />}
                onClick={cancelEdit}
              >
                Cancel
              </Button>

              <Button
                color="success"
                variant="contained"
                startIcon={<SaveIcon />}
                onClick={saveProfile}
              >
                Save Changes
              </Button>
            </>
          )}
        </Stack>
      </Stack>

      <PublisherHeader publisher={currentPublisher} />

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <PersonalCard
            publisher={currentPublisher}
            editMode={editMode}
            onChange={updateField}
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <SpiritualCard
            publisher={currentPublisher}
            editMode={editMode}
            onChange={updateField}
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <MinistryCard
            publisher={currentPublisher}
            editMode={editMode}
            onChange={updateField}
          />
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <ShepherdingCard
            publisher={currentPublisher}
            editMode={editMode}
            onChange={updateField}
          />
        </Grid>

        <Grid size={12}>
          <NotesCard
            publisher={currentPublisher}
            editMode={editMode}
            onChange={updateField}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
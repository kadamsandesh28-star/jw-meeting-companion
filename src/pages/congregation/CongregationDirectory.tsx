import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PageHeader from "../../Components/PageHeader";
import PublisherCard from "../../Components/publisher/PublisherCard";
import PublisherDialog from "../../Components/publisher/dialog/PublisherDialog";

import { Publisher } from "../../models/Publisher";
import { createEmptyPublisher } from "../../models/createEmptyPublisher";
import { publisherService } from "../../services/publisherService";

export default function CongregationDirectory() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [publishers, setPublishers] = useState<Publisher[]>([]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [newPublisher, setNewPublisher] = useState<Publisher>(
    createEmptyPublisher()
  );

  function loadPublishers() {
    setPublishers(publisherService.search(search));
  }

  useEffect(() => {
    loadPublishers();
  }, [search]);

  function viewPublisherProfile(id: string) {
    navigate(`/congregation/publisher/${id}`);
  }

  function handleAddPublisher() {
    setNewPublisher(createEmptyPublisher());
    setDialogOpen(true);
  }

  function handleSavePublisher(publisher: Publisher) {
    publisher.displayName =
      `${publisher.firstName} ${publisher.lastName}`.trim();

    publisherService.create(publisher);

    setDialogOpen(false);

    loadPublishers();
  }

  return (
    <Box sx={{ p: 3 }}>
      <PageHeader title="👥 Congregation Directory" />

      <Stack
        direction="row"
        spacing={2}
        sx={{ mb: 3 }}
      >
        <TextField
          fullWidth
          placeholder="Search publishers..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAddPublisher}
        >
          Add Publisher
        </Button>
      </Stack>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Showing {publishers.length} of{" "}
        {publisherService.count()} publishers
      </Typography>

      <Grid container spacing={3}>
        {publishers.map((publisher) => (
          <Grid
            key={publisher.id}
            size={{
              xs: 12,
              md: 6,
              lg: 4,
            }}
          >
            <PublisherCard
              publisher={publisher}
              onViewProfile={viewPublisherProfile}
            />
          </Grid>
        ))}
      </Grid>

      <PublisherDialog
        open={dialogOpen}
        title="Add Publisher"
        publisher={newPublisher}
        onClose={() => setDialogOpen(false)}
        onSave={handleSavePublisher}
      />
    </Box>
  );
}
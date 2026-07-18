import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import PublisherCard from "../components/PublisherCard";
import PublisherDialog from "../components/PublisherDialog";

import { Publisher } from "../models/Publisher";
import { createPublisher } from "../models/publisherFactory";
import { publisherService } from "../services/publisherService";

export default function PublisherCards() {
  const [publishers, setPublishers] = useState<Publisher[]>([]);
  const [selectedPublisher, setSelectedPublisher] =
    useState<Publisher>(createPublisher());

  const [dialogOpen, setDialogOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    refresh();
  }, []);

  function refresh() {
    setPublishers(publisherService.getAll());
  }

  function handleAdd() {
    setSelectedPublisher(createPublisher());
    setDialogOpen(true);
  }

  function handleEdit(publisher: Publisher) {
    setSelectedPublisher({ ...publisher });
    setDialogOpen(true);
  }

  function handleSave(publisher: Publisher) {
    if (publisherService.getById(publisher.id)) {
      publisherService.update(publisher);
    } else {
      publisherService.add(publisher);
    }

    refresh();
    setDialogOpen(false);
  }

  function handleDelete(publisher: Publisher) {
    const confirmed = window.confirm(
      `Delete ${publisher.firstName} ${publisher.lastName}?`
    );

    if (!confirmed) return;

    publisherService.delete(publisher.id);
    refresh();
    setDialogOpen(false);
  }

  const filtered = useMemo(() => {
    return publishers.filter((publisher) => {
      const text =
        `${publisher.firstName} ${publisher.lastName}`.toLowerCase();

      return text.includes(search.toLowerCase());
    });
  }, [publishers, search]);

  return (
    <>
      <Stack spacing={3}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4">
            Publisher Cards
          </Typography>

          <Button
            variant="contained"
            onClick={handleAdd}
          >
            Add Publisher
          </Button>
        </Box>

        <TextField
          fullWidth
          placeholder="Search publishers..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Grid container spacing={2}>
          {filtered.map((publisher) => (
            <Grid
              key={publisher.id}
              size={{
                xs: 12,
                sm: 6,
                md: 4,
                lg: 3,
              }}
            >
              <PublisherCard
                publisher={publisher}
                onClick={() => handleEdit(publisher)}
              />
            </Grid>
          ))}
        </Grid>

        {filtered.length === 0 && (
          <Typography
            color="text.secondary"
            textAlign="center"
          >
            No publishers found.
          </Typography>
        )}
      </Stack>

      <PublisherDialog
        open={dialogOpen}
        title={
          publisherService.getById(selectedPublisher.id)
            ? "Edit Publisher"
            : "Add Publisher"
        }
        publisher={selectedPublisher}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    </>
  );
}
import { useMemo, useState } from "react";
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
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  // Temporary refresh mechanism (we'll improve this later)
  const [, setVersion] = useState(0);

  const publishers = useMemo(
    () => publisherService.getAll(),
    [dialogOpen]
  );

  const filtered = publishers.filter((publisher) => {
    const fullName =
      `${publisher.firstName} ${publisher.lastName}`.toLowerCase();

    return fullName.includes(search.toLowerCase());
  });

  function handleSave(publisher: Publisher) {
    publisherService.add(publisher);
    setVersion((v) => v + 1);
    setDialogOpen(false);
  }

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
            onClick={() => setDialogOpen(true)}
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
        title="Add Publisher"
        publisher={createPublisher()}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

import PageHeader from "../../Components/PageHeader";
import PublisherCard from "../../Components/publisher/PublisherCard";

import { Publisher } from "../../models/Publisher";
import { publisherService } from "../../services/publisherService";

export default function CongregationDirectory() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");

  const publishers = useMemo<Publisher[]>(() => {
    return publisherService.search(search);
  }, [search]);

  function viewPublisherProfile(id: string) {
    navigate(`/congregation/publisher/${id}`);
  }

  return (
    <Box sx={{ p: 3 }}>
      <PageHeader title="👥 Congregation Directory" />

      <TextField
        fullWidth
        placeholder="Search publishers..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        sx={{ mb: 3 }}
      />

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Showing {publishers.length} of {publisherService.count()} publishers
      </Typography>

      <Grid container spacing={3}>
        {publishers.map((publisher) => (
         <Grid
  size={{
    xs: 12,
    md: 6,
    lg: 4,
  }}
  key={publisher.id}
>
            <PublisherCard
              publisher={publisher}
              onViewProfile={viewPublisherProfile}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
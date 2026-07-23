import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { usePublishers } from "../hooks/usePublishers";
import PublisherSearch from "../components/PublisherSearch";
import PublisherTable from "../components/PublisherTable";
import StatsCards from "../components/StatsCards";

export default function PublisherList() {
  const {
    publishers,
    search,
    setSearch,
  } = usePublishers();

  return (
    <Box sx={{ p: 3 }}>
      {/* Header */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h4" fontWeight="bold">
          Publisher Management
        </Typography>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
        >
          Add Publisher
        </Button>
      </Stack>

      {/* Statistics */}
      <StatsCards publishers={publishers} />

      {/* Search & Table */}
      <Paper sx={{ mt: 3, p: 3 }}>
        <PublisherSearch
          value={search}
          onChange={setSearch}
        />

        <PublisherTable publishers={publishers} />
      </Paper>
    </Box>
  );
}
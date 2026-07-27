import { useParams } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import { territoryService } from "../services/territoryService";

export default function TerritoryProfile() {
  const { id } = useParams();

  const territory = id
    ? territoryService.getById(id)
    : undefined;

  if (!territory) {
    return (
      <Box sx={{ p: 3 }}>
        <Typography variant="h5">
          Territory not found
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Typography variant="h4" fontWeight="bold">
          {territory.number}
        </Typography>

        <Card>
          <CardContent>
            <Stack spacing={2}>
              <Typography>
                <strong>Name:</strong> {territory.name}
              </Typography>

              <Typography>
                <strong>Type:</strong> {territory.type}
              </Typography>

              <Typography>
                <strong>Status:</strong> {territory.status}
              </Typography>

              <Typography>
                <strong>Assigned Service Group:</strong>{" "}
                {territory.assignedServiceGroupId || "None"}
              </Typography>

              <Divider />

              <Typography variant="h6">
                Address Notes
              </Typography>

              <Typography color="text.secondary">
                {territory.addressNotes || "None"}
              </Typography>

              <Typography>
                <strong>Map Reference:</strong>{" "}
                {territory.mapReference || "None"}
              </Typography>

              <Divider />

              <Typography>
                <strong>Last Worked:</strong>{" "}
                {territory.lastWorked || "Not Recorded"}
              </Typography>

              <Typography>
                <strong>Next Due:</strong>{" "}
                {territory.nextDue || "Not Scheduled"}
              </Typography>

              {territory.notes && (
                <>
                  <Divider />

                  <Typography variant="h6">
                    Notes
                  </Typography>

                  <Typography color="text.secondary">
                    {territory.notes}
                  </Typography>
                </>
              )}

              <Divider />

              <Chip
                label={territory.status}
                color={
                  territory.status === "Available"
                    ? "success"
                    : territory.status === "Assigned"
                    ? "warning"
                    : "default"
                }
                sx={{ width: "fit-content" }}
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}
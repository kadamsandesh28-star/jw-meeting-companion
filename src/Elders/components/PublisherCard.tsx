import {
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { Publisher } from "../models/Publisher";

interface PublisherCardProps {
  publisher: Publisher;
  onClick?: () => void;
}

export default function PublisherCard({
  publisher,
  onClick,
}: PublisherCardProps) {
  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        transition: "0.2s",
        "&:hover": {
          transform: "translateY(-2px)",
        },
      }}
    >
      <CardContent>
        <Stack spacing={1}>
          <Typography variant="h6">
            {publisher.firstName} {publisher.lastName}
          </Typography>

          <Chip
            label={publisher.status}
            size="small"
          />

          <Typography color="text.secondary">
            Service Group: {publisher.serviceGroup || "-"}
          </Typography>

          <Typography color="text.secondary">
            {publisher.phone || "No phone number"}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
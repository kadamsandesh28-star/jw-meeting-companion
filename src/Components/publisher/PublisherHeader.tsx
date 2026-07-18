import {
  Avatar,
  Box,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { Publisher } from "../../models/Publisher";

interface PublisherHeaderProps {
  publisher: Publisher;
}

export default function PublisherHeader({
  publisher,
}: PublisherHeaderProps) {
  const initials = `${publisher.firstName.charAt(0)}${publisher.lastName.charAt(
    0
  )}`.toUpperCase();

  const fullName =
    publisher.displayName ||
    `${publisher.firstName} ${publisher.lastName}`;

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={3}
      alignItems={{ xs: "flex-start", sm: "center" }}
      sx={{ mb: 3 }}
    >
      <Avatar
        src={publisher.photoUrl}
        sx={{
          width: 72,
          height: 72,
          bgcolor: "primary.main",
          fontSize: 26,
          fontWeight: 700,
        }}
      >
        {!publisher.photoUrl && initials}
      </Avatar>

      <Box flex={1}>
        <Typography variant="h5" fontWeight={700}>
          {fullName}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mt: 0.5 }}
        >
          {publisher.publisherStatus}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Congregation Group: {publisher.congregationGroup}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          📞 {publisher.mobile || publisher.phone || "No phone number"}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          ✉️ {publisher.email || "No email address"}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          useFlexGap
          sx={{ mt: 2 }}
        >
          <Chip
            size="small"
            color={publisher.active ? "success" : "default"}
            label={publisher.active ? "Active" : "Inactive"}
          />

          <Chip
            size="small"
            color={publisher.baptized ? "primary" : "default"}
            label={
              publisher.baptized
                ? "Baptized"
                : "Unbaptized"
            }
          />

          {publisher.privileges.map((privilege) => (
            <Chip
              key={privilege.id}
              size="small"
              color="secondary"
              label={privilege.type}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
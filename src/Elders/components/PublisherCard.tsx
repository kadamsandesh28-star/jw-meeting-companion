import {
  Avatar,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GroupsIcon from "@mui/icons-material/Groups";

import { Publisher } from "../models/Publisher";

interface PublisherCardProps {
  publisher: Publisher;
  onClick?: () => void;
}

function getStatusColor(status: string) {
  switch (status.toLowerCase()) {
    case "elder":
      return "primary";

    case "ministerial servant":
      return "secondary";

    case "pioneer":
      return "success";

    default:
      return "default";
  }
}

export default function PublisherCard({
  publisher,
  onClick,
}: PublisherCardProps) {
  const initials = `${publisher.firstName.charAt(0)}${publisher.lastName.charAt(0)}`.toUpperCase();

  return (
    <Card
      onClick={onClick}
      sx={{
        cursor: "pointer",
        borderRadius: 3,
        transition: ".25s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>

        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: 56,
              height: 56,
              fontSize: 22,
            }}
          >
            {initials}
          </Avatar>

          <Stack flex={1}>
            <Typography
              variant="h6"
              fontWeight="bold"
            >
              {publisher.firstName} {publisher.lastName}
            </Typography>

            <Chip
              label={publisher.status}
              size="small"
              color={getStatusColor(publisher.status)}
              sx={{ width: "fit-content" }}
            />
          </Stack>
        </Stack>

        <Divider sx={{ my: 2 }} />

        <Stack spacing={1.5}>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <PhoneIcon
              fontSize="small"
              color="action"
            />

            <Typography variant="body2">
              {publisher.phone || "No phone number"}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <EmailIcon
              fontSize="small"
              color="action"
            />

            <Typography variant="body2">
              {publisher.email || "No email address"}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
          >
            <GroupsIcon
              fontSize="small"
              color="action"
            />

            <Typography variant="body2">
              {publisher.serviceGroup || "No service group"}
            </Typography>
          </Stack>

        </Stack>

      </CardContent>
    </Card>
  );
}
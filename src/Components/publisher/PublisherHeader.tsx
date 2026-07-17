import {
  Avatar,
  Box,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

import { Publisher } from "../../services/congregationService";

interface PublisherHeaderProps {
  publisher: Publisher;
}

export default function PublisherHeader({
  publisher,
}: PublisherHeaderProps) {
  const initials = `${publisher.firstName.charAt(0)}${publisher.lastName.charAt(
    0
  )}`.toUpperCase();

  return (
    <Card
      elevation={4}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        mb: 3,
      }}
    >
      <Box
        sx={{
          background:
            "linear-gradient(135deg,#1565C0,#42A5F5)",
          color: "white",
          py: 5,
          px: 3,
        }}
      >
        <Stack
          spacing={2}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: 100,
              height: 100,
              fontSize: 40,
              bgcolor: "white",
              color: "primary.main",
              fontWeight: "bold",
            }}
          >
            {initials}
          </Avatar>

          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
          >
            {publisher.firstName} {publisher.lastName}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            justifyContent="center"
            flexWrap="wrap"
            useFlexGap
          >
            {publisher.privileges && (
              <Chip
                label={publisher.privileges}
                color="secondary"
              />
            )}

            {publisher.serviceGroup && (
              <Chip
                label={`Group ${publisher.serviceGroup}`}
                color="success"
              />
            )}

            {publisher.hope && (
              <Chip
                label={publisher.hope}
                color="warning"
              />
            )}
          </Stack>
        </Stack>
      </Box>

      <CardContent>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-around"
          flexWrap="wrap"
          useFlexGap
        >
          <Box textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {publisher.baptized ? "✔" : "—"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Baptized
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {publisher.auxiliaryPioneerThisMonth
                ? "✔"
                : "—"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Auxiliary Pioneer
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {publisher.participatedThisMonth
                ? "✔"
                : "—"}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Participated
            </Typography>
          </Box>

          <Box textAlign="center">
            <Typography
              variant="h5"
              fontWeight="bold"
            >
              {publisher.bibleStudiesThisMonth ?? 0}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Bible Studies
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
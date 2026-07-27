import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useBodyMembers } from "../hooks/useBodyMembers";
import { publisherService } from "../../publishers/services/publisherService";
import { getPublisherDisplayName } from "../../publishers/utils/getPublisherDisplayName";

export default function BodyMemberList() {
  const {
    bodyMembers,
    search,
    setSearch,
  } = useBodyMembers();

  const publishers = publisherService.getAll();

  return (
    <Box sx={{ p: 3 }}>
      <Stack spacing={3}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="h4"
            fontWeight="bold"
          >
            Body of Elders
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/congregation/body-of-elders/new"
          >
            Add Member
          </Button>
        </Stack>

        <TextField
          label="Search by role"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          fullWidth
        />

        {bodyMembers.map((member) => {
          const publisher = publishers.find(
            (p) => p.id === member.publisherId
          );

          return (
            <Card key={member.id}>
              <CardContent>
                <Stack spacing={2}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                      >
                        {getPublisherDisplayName(publisher)}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                      >
                        {member.role}
                      </Typography>
                    </Box>

                    <Chip
                      label={
                        member.active
                          ? "Active"
                          : "Inactive"
                      }
                      color={
                        member.active
                          ? "success"
                          : "default"
                      }
                    />
                  </Stack>

                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    Appointment Date:{" "}
                    {member.appointmentDate || "-"}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={2}
                  >
                    <Button
                      component={Link}
                      to={`/congregation/body-of-elders/${member.id}`}
                    >
                      View
                    </Button>

                    <Button
                      component={Link}
                      to={`/congregation/body-of-elders/${member.id}/edit`}
                    >
                      Edit
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          );
        })}
      </Stack>
    </Box>
  );
}
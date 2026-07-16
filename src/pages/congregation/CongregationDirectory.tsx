import { useMemo, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import PageHeader from "../../Components/PageHeader";

import {
  Publisher,
  loadPublishers,
  savePublishers,
} from "../../services/congregationService";

export default function CongregationDirectory() {
  const [publishers, setPublishers] =
    useState<Publisher[]>(loadPublishers());

  const [search, setSearch] = useState("");

  const [deleteId, setDeleteId] =
    useState<string | null>(null);

  function addPublisher() {
    const newPublisher: Publisher = {
      id: crypto.randomUUID(),

      firstName: "",
      lastName: "",

      phone: "",
      email: "",

      serviceGroup: "",

      baptized: true,

      privileges: "",

      notes: "",
    };

    const updated = [...publishers, newPublisher];

    setPublishers(updated);
    savePublishers(updated);
  }

  function updatePublisher(
    id: string,
    field: keyof Publisher,
    value: any
  ) {
    const updated = publishers.map((publisher) =>
      publisher.id === id
        ? {
            ...publisher,
            [field]: value,
          }
        : publisher
    );

    setPublishers(updated);
    savePublishers(updated);
  }

  function deletePublisher(id: string) {
    const updated = publishers.filter(
      (publisher) => publisher.id !== id
    );

    setPublishers(updated);
    savePublishers(updated);

    setDeleteId(null);
  }

  const filteredPublishers = useMemo(() => {
    const text = search.toLowerCase();

    return publishers.filter((publisher) =>
      `${publisher.firstName} ${publisher.lastName}`
        .toLowerCase()
        .includes(text)
    );
  }, [publishers, search]);

  return (
    <Box sx={{ p: 3 }}>
      <PageHeader title="👥 Congregation Directory" />

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={2}
        sx={{ mb: 3 }}
      >
        <Button
          variant="contained"
          onClick={addPublisher}
        >
          Add Publisher
        </Button>

        <TextField
          fullWidth
          placeholder="Search publishers..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </Stack>

      <Stack spacing={3}>
        {filteredPublishers.map((publisher) => (
          <Card key={publisher.id}>
            <CardContent>

              <Typography
                variant="h6"
                gutterBottom
              >
                👤 Publisher Card
              </Typography>

              <Divider sx={{ mb: 2 }} />

              <Stack spacing={2}>

                <TextField
                  label="First Name"
                  value={publisher.firstName}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "firstName",
                      e.target.value
                    )
                  }
                />

                <TextField
                  label="Last Name"
                  value={publisher.lastName}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "lastName",
                      e.target.value
                    )
                  }
                />

                <TextField
                  label="Phone"
                  value={publisher.phone}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "phone",
                      e.target.value
                    )
                  }
                />

                <TextField
                  label="Email"
                  value={publisher.email}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "email",
                      e.target.value
                    )
                  }
                />

                <TextField
                  label="Service Group"
                  value={publisher.serviceGroup}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "serviceGroup",
                      e.target.value
                    )
                  }
                />

                <TextField
                  label="Privileges"
                  value={publisher.privileges}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "privileges",
                      e.target.value
                    )
                  }
                />

                <TextField
                  label="Notes"
                  multiline
                  minRows={3}
                  value={publisher.notes}
                  onChange={(e) =>
                    updatePublisher(
                      publisher.id,
                      "notes",
                      e.target.value
                    )
                  }
                />

              </Stack>
            </CardContent>

            <CardActions
              sx={{
                justifyContent: "flex-end",
                px: 2,
                pb: 2,
              }}
            >
              <IconButton
                color="error"
                onClick={() =>
                  setDeleteId(publisher.id)
                }
              >
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Stack>

      <Dialog
        open={deleteId !== null}
        onClose={() => setDeleteId(null)}
      >
        <DialogTitle>
          Delete Publisher?
        </DialogTitle>

        <DialogContent>
          <DialogContentText>
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button
            onClick={() =>
              setDeleteId(null)
            }
          >
            Cancel
          </Button>

          <Button
            color="error"
            onClick={() => {
              if (deleteId) {
                deletePublisher(deleteId);
              }
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
import { useState } from "react";
import {
  Grid,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";

import {
  Publisher,
  PublisherStatus,
} from "../models/Publisher";

interface PublisherFormProps {
  value: Publisher;
  onChange: (publisher: Publisher) => void;
}

const statuses: PublisherStatus[] = [
  "Publisher",
  "Auxiliary Pioneer",
  "Regular Pioneer",
  "Ministerial Servant",
  "Elder",
];

export default function PublisherForm({
  value,
  onChange,
}: PublisherFormProps) {
  const [publisher, setPublisher] =
    useState(value);

  function update<K extends keyof Publisher>(
    field: K,
    fieldValue: Publisher[K]
  ) {
    const updated = {
      ...publisher,
      [field]: fieldValue,
    };

    setPublisher(updated);
    onChange(updated);
  }

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="First Name"
            value={publisher.firstName}
            onChange={(e) =>
              update("firstName", e.target.value)
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={publisher.lastName}
            onChange={(e) =>
              update("lastName", e.target.value)
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            select
            fullWidth
            label="Status"
            value={publisher.status}
            onChange={(e) =>
              update(
                "status",
                e.target.value as PublisherStatus
              )
            }
          >
            {statuses.map((status) => (
              <MenuItem
                key={status}
                value={status}
              >
                {status}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Service Group"
            value={publisher.serviceGroup ?? ""}
            onChange={(e) =>
              update(
                "serviceGroup",
                e.target.value
              )
            }
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            label="Phone"
            value={publisher.phone ?? ""}
            onChange={(e) =>
              update("phone", e.target.value)
            }
          />
        </Grid>

        <Grid size={12}>
          <TextField
            fullWidth
            label="Email"
            value={publisher.email ?? ""}
            onChange={(e) =>
              update("email", e.target.value)
            }
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
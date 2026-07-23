import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

import PageHeader from "../../../components/ui/PageHeader";

import MinistrySessionForm from "../components/MinistrySessionForm";
import { MinistryFormData } from "../types/ministry";
import { ministryService } from "../services/ministryService";

export default function MinistrySession() {
  const navigate = useNavigate();

  const handleSave = (data: MinistryFormData) => {
    ministryService.addSession(data);

    navigate("/ministry");
  };

  return (
    <Stack spacing={4}>
      <PageHeader
        title="New Ministry Session"
        subtitle="Record your ministry activity."
      />

      <MinistrySessionForm
        onSave={handleSave}
      />
    </Stack>
  );
}
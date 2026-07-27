import { Stack } from "@mui/material";

import { Territory } from "../types/territory";

import AssignmentInformation from "./AssignmentInformation";
import BasicInformation from "./BasicInformation";

interface TerritoryFormProps {
  territory: Territory;
  onChange: (territory: Territory) => void;
}

export default function TerritoryForm({
  territory,
  onChange,
}: TerritoryFormProps) {
  return (
    <Stack spacing={4}>
      <BasicInformation
        territory={territory}
        onChange={onChange}
      />

      <AssignmentInformation
        territory={territory}
        onChange={onChange}
      />
    </Stack>
  );
}
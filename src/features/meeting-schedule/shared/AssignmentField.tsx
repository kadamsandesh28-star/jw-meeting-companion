import PersonRoundedIcon from "@mui/icons-material/PersonRounded";

import {
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";

type Props = TextFieldProps;

export default function AssignmentField(
  props: Props
) {
  return (
    <TextField
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <PersonRoundedIcon color="success" />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
}
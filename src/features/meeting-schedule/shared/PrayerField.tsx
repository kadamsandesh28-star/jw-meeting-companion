import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";

import {
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";

type Props = TextFieldProps;

export default function PrayerField(
  props: Props
) {
  return (
    <TextField
      fullWidth
      {...props}
      InputProps={{
        ...props.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <VolunteerActivismRoundedIcon color="success" />
          </InputAdornment>
        ),
      }}
    />
  );
}
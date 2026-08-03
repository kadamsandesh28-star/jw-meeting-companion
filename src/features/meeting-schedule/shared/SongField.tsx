import MusicNoteRoundedIcon from "@mui/icons-material/MusicNoteRounded";

import {
  InputAdornment,
  TextField,
  type TextFieldProps,
} from "@mui/material";

type Props = TextFieldProps;

export default function SongField(
  props: Props
) {
  return (
    <TextField
      fullWidth
      type="number"
      {...props}
      InputProps={{
        ...props.InputProps,
        startAdornment: (
          <InputAdornment position="start">
            <MusicNoteRoundedIcon color="success" />
          </InputAdornment>
        ),
      }}
    />
  );
}
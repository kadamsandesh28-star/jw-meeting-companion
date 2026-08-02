import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

import {
  Stack,
  Typography,
} from "@mui/material";

export default function FamilyWorshipHeader() {
  return (
    <Stack
      spacing={2}
      alignItems="center"
      textAlign="center"
      sx={{ mb: 4 }}
    >
      <AutoStoriesRoundedIcon
        color="primary"
        sx={{
          fontSize: 56,
        }}
      />

      <Typography
        variant="h3"
        fontWeight={700}
      >
        Family Worship
      </Typography>

      <Typography
        variant="h6"
        color="text.secondary"
        sx={{
          maxWidth: 650,
        }}
      >
        Plan meaningful family worship sessions,
        organize research, attach media, record
        discussion points, and build a lasting
        spiritual history together.
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
      >
        <FavoriteRoundedIcon
          color="error"
          fontSize="small"
        />

        <Typography
          variant="body2"
          color="text.secondary"
        >
          Built to help your family grow spiritually
          together.
        </Typography>
      </Stack>
    </Stack>
  );
}
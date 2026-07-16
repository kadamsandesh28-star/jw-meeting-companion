import {
  ArrowBack,
} from "@mui/icons-material";

import {
  Box,
  IconButton,
  Typography,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

interface Props {
  title: string;
}

export default function PageHeader({
  title,
}: Props) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 3,
      }}
    >
      <IconButton
        onClick={() => navigate(-1)}
        sx={{ mr: 1 }}
      >
        <ArrowBack />
      </IconButton>

      <Typography
        variant="h4"
        fontWeight="bold"
      >
        {title}
      </Typography>
    </Box>
  );
}
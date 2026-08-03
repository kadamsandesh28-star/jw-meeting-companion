import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import {
  Card,
  CardActionArea,
  Stack,
  Typography,
  Box,
} from "@mui/material";

import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  onClick?: () => void;
}

export default function MeetingCard({
  title,
  description,
  icon,
  color,
  onClick,
}: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 5,
        border: 1,
        borderColor: "divider",
        transition: "0.25s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            "0 16px 35px rgba(0,0,0,0.12)",
        },
      }}
    >
      <CardActionArea
        onClick={onClick}
        sx={{
          p: 3,
          height: "100%",
        }}
      >
        <Stack
          spacing={2}
          height="100%"
        >
          <Box
            sx={{
              width: 62,
              height: 62,
              borderRadius: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: color,
              color: "white",
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h5"
            fontWeight={700}
          >
            {title}
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              flexGrow: 1,
            }}
          >
            {description}
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
          >
            <Typography
              fontWeight={600}
              color="primary"
            >
              Open
            </Typography>

            <ChevronRightRoundedIcon
              color="primary"
            />
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}
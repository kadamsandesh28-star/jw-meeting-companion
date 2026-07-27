import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

interface AppHeaderProps {
  drawerWidth: number;
  onMenuClick: () => void;
}

export default function AppHeader({
  drawerWidth,
  onMenuClick,
}: AppHeaderProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          md: `calc(100% - ${drawerWidth}px)`,
        },
        ml: {
          md: `${drawerWidth}px`,
        },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{
            mr: 2,
            display: {
              md: "none",
            },
          }}
        >
          <MenuIcon />
        </IconButton>

        <Box flexGrow={1}>
          <Typography
            variant="h6"
            fontWeight="bold"
          >
            JW Meeting Companion
          </Typography>
        </Box>

        <Typography variant="body2">
          Congregation Management
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
import { Routes, Route, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
} from "@mui/material";

import Home from "./pages/Home";
import Midweek from "./pages/Midweek";
import Weekend from "./pages/Weekend";
import Notes from "./pages/Notes";
import Timers from "./pages/Timers";
import Settings from "./pages/Settings";
import DailyScripture from "./pages/DailyScripture"; 
function App() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            📖 My JW Companion
          </Typography>

          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/midweek">
              Midweek
            </Button>

            <Button color="inherit" component={Link} to="/weekend">
              Weekend
            </Button>

            <Button color="inherit" component={Link} to="/notes">
              Notes
            </Button>

            <Button color="inherit" component={Link} to="/timers">
              Timers
            </Button>

            <Button color="inherit" component={Link} to="/settings">
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/midweek" element={<Midweek />} />
          <Route path="/weekend" element={<Weekend />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/timers" element={<Timers />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/daily-scripture" element={<DailyScripture />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
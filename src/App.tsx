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
import PracticeTimer from "./pages/PracticeTimer";
import MeetingTimerSettings from "./pages/MeetingTimerSettings";
import AssignmentPreparation from "./pages/AssignmentPreparation";
import PersonalStudy from "./pages/PersonalStudy";

function App() {
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
            }}
          >
            📖 My JW Companion
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            <Button
              color="inherit"
              component={Link}
              to="/"
            >
              Home
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/midweek"
            >
              Midweek
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/weekend"
            >
              Weekend
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/personal-study"
            >
              Study
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/notes"
            >
              Notes
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/timers"
            >
              Timers
            </Button>

            <Button
              color="inherit"
              component={Link}
              to="/settings"
            >
              Settings
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth="lg"
        sx={{ py: 3 }}
      >
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/midweek"
            element={<Midweek />}
          />

          <Route
            path="/weekend"
            element={<Weekend />}
          />

          <Route
            path="/personal-study"
            element={<PersonalStudy />}
          />

          <Route
            path="/notes"
            element={<Notes />}
          />

          <Route
            path="/timers"
            element={<Timers />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/daily-scripture"
            element={<DailyScripture />}
          />

          <Route
            path="/practice-timer"
            element={<PracticeTimer />}
          />

          <Route
            path="/meeting-timer-settings"
            element={<MeetingTimerSettings />}
          />

          <Route
            path="/assignment-preparation"
            element={<AssignmentPreparation />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
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

import SpiritualLibrary from "./pages/SpiritualLibrary";

import Research from "./pages/library/Research";
import ResearchCollection from "./pages/library/ResearchCollection";
import Understanding from "./pages/library/Understanding";
import Gems from "./pages/library/Gems";
import Goals from "./pages/library/Goals";
import Ministry from "./pages/library/Ministry";

import CongregationResponsibilities from "./pages/congregation/CongregationResponsibilities";
import CongregationDirectory from "./pages/congregation/CongregationDirectory";
import FieldServiceGroups from "./pages/congregation/FieldServiceGroups";
import CongregationDepartments from "./pages/congregation/CongregationDepartments";
import ShepherdingPlanner from "./pages/congregation/ShepherdingPlanner";

/* Elder Workspace */
import SecureElderWorkspace from "./Elders/pages/SecureElderWorkspace";

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
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/midweek">
              Midweek
            </Button>

            <Button color="inherit" component={Link} to="/weekend">
              Weekend
            </Button>

            <Button color="inherit" component={Link} to="/library">
              Library
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

            <Button color="inherit" component={Link} to="/elder">
              🔒 Elder
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/midweek" element={<Midweek />} />

          <Route path="/weekend" element={<Weekend />} />

          <Route path="/library" element={<SpiritualLibrary />} />

          <Route
            path="/library/research"
            element={<Research />}
          />

          <Route
            path="/library/research/:id"
            element={<ResearchCollection />}
          />

          <Route
            path="/library/understanding"
            element={<Understanding />}
          />

          <Route
            path="/library/gems"
            element={<Gems />}
          />

          <Route
            path="/library/goals"
            element={<Goals />}
          />

          <Route
            path="/library/ministry"
            element={<Ministry />}
          />

          <Route path="/notes" element={<Notes />} />

          <Route path="/timers" element={<Timers />} />

          <Route path="/settings" element={<Settings />} />

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

          {/* Congregation */}

          <Route
            path="/congregation"
            element={<CongregationResponsibilities />}
          />

          <Route
            path="/congregation/directory"
            element={<CongregationDirectory />}
          />

          <Route
            path="/congregation/groups"
            element={<FieldServiceGroups />}
          />

          <Route
            path="/congregation/departments"
            element={<CongregationDepartments />}
          />

          <Route
            path="/congregation/shepherding"
            element={<ShepherdingPlanner />}
          />

          {/* Elder Workspace */}

          <Route
            path="/elder"
            element={<SecureElderWorkspace />}
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
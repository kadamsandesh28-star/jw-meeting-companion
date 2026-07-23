import { Routes, Route } from "react-router-dom";

import AppShell from "./components/shell/AppShell";

// Home
import Home from "./pages/home/Home";

// Meetings
import Meetings from "./pages/meetings/Meetings";
import MeetingProgress from "./pages/meetings/MeetingProgress";
import MidweekMeeting from "./pages/meetings/MidweekMeeting";
import WeekendMeeting from "./pages/meetings/WeekendMeeting";
import MeetingNotes from "./pages/meetings/MeetingNotes";

// Workbook & Assignments
import Workbook from "./pages/workbook/Workbook";
import Assignments from "./pages/assignments/Assignments";

// Service
import Service from "./pages/service/Service";

// Personal
import Personal from "./pages/personal/Personal";
import BibleReading from "./pages/personal/BibleReading";
import PersonalStudy from "./pages/personal/PersonalStudy";
import PrayerJournal from "./pages/personal/PrayerJournal";
import FamilyWorship from "./pages/personal/FamilyWorship";
import PersonalTasks from "./pages/personal/PersonalTasks";

// Ministry
import MinistryDashboard from "./features/ministry/pages/MinistryDashboard";
import MinistrySession from "./features/ministry/pages/MinistrySession";
import ReturnVisits from "./features/ministry/pages/ReturnVisits";
import BibleStudies from "./features/ministry/pages/BibleStudies";

// Congregation
import Dashboard from "./features/congregation/pages/Dashboard";
import PublisherList from "./features/congregation/pages/PublisherList";
import Reports from "./features/congregation/pages/Reports";

// Tools & Settings
import Tools from "./pages/tools/Tools";
import Settings from "./pages/settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Meetings */}
        <Route path="/meetings" element={<Meetings />} />
        <Route
          path="/meetings/progress"
          element={<MeetingProgress />}
        />
        <Route
          path="/meetings/midweek"
          element={<MidweekMeeting />}
        />
        <Route
          path="/meetings/weekend"
          element={<WeekendMeeting />}
        />
        <Route
          path="/meetings/notes"
          element={<MeetingNotes />}
        />

        {/* Workbook */}
        <Route path="/workbook" element={<Workbook />} />

        {/* Assignments */}
        <Route
          path="/assignments"
          element={<Assignments />}
        />

        {/* Service */}
        <Route path="/service" element={<Service />} />

        {/* Personal */}
        <Route path="/personal" element={<Personal />} />
        <Route
          path="/personal/bible-reading"
          element={<BibleReading />}
        />
        <Route
          path="/personal/personal-study"
          element={<PersonalStudy />}
        />
        <Route
          path="/personal/prayer"
          element={<PrayerJournal />}
        />
        <Route
          path="/personal/family-worship"
          element={<FamilyWorship />}
        />
        <Route
          path="/personal/tasks"
          element={<PersonalTasks />}
        />

        {/* Ministry */}
        <Route
          path="/ministry"
          element={<MinistryDashboard />}
        />
        <Route
          path="/ministry/session"
          element={<MinistrySession />}
        />
        <Route
          path="/ministry/return-visits"
          element={<ReturnVisits />}
        />
        <Route
          path="/ministry/bible-studies"
          element={<BibleStudies />}
        />

        {/* Congregation */}
        <Route
          path="/congregation"
          element={<Dashboard />}
        />
        <Route
          path="/congregation/publishers"
          element={<PublisherList />}
        />
        <Route
          path="/congregation/reports"
          element={<Reports />}
        />

        {/* Tools */}
        <Route path="/tools" element={<Tools />} />

        {/* Settings */}
        <Route
          path="/settings"
          element={<Settings />}
        />
      </Route>
    </Routes>
  );
}
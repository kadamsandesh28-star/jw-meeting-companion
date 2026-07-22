import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Home from "./pages/home/Home";
import Meetings from "./pages/meetings/Meetings";
import MeetingProgress from "./pages/meetings/MeetingProgress";
import MidweekMeeting from "./pages/meetings/MidweekMeeting";
import WeekendMeeting from "./pages/meetings/WeekendMeeting";
import MeetingNotes from "./pages/meetings/MeetingNotes";

import Workbook from "./pages/workbook/Workbook";
import Assignments from "./pages/assignments/Assignments";

import Service from "./pages/service/Service";
import Ministry from "./pages/ministry/Ministry";
import Settings from "./pages/settings/Settings";
import Tools from "./pages/tools/Tools";

/* Personal Workspace */
import Personal from "./pages/personal/Personal";
import BibleReading from "./pages/personal/BibleReading";
import PersonalStudy from "./pages/personal/PersonalStudy";
import PrayerJournal from "./pages/personal/PrayerJournal";
import FamilyWorship from "./pages/personal/FamilyWorship";
import PersonalTasks from "./pages/personal/PersonalTasks";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>

        {/* Dashboard */}
        <Route path="/" element={<Home />} />

        {/* Meetings Workspace */}
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

        {/* Personal Workspace */}
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
        <Route path="/ministry" element={<Ministry />} />

        {/* Settings */}
        <Route path="/settings" element={<Settings />} />

        {/* Standalone Features */}
        <Route path="/workbook" element={<Workbook />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tools" element={<Tools />} />

      </Route>
    </Routes>
  );
}
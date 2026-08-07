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
import PrayerJournal from "./pages/personal/PrayerJournal";

import PersonalStudyPage from "./features/personal-study/pages/PersonalStudyPage";
import StudyNotebookPage from "./features/personal-study/pages/StudyNotebookPage";
import NotebookPage from "./features/notebooks/pages/NotebookPage";
import NotebookWorkspace from "./features/notebooks/pages/NotebookWorkspace";
import { LifeSchedulePage } from "./features/life-schedule";
import { FamilyWorshipPage } from "./features/family-worship";

// Ministry
import MinistryDashboard from "./features/ministry/pages/MinistryDashboard";
import MinistrySession from "./features/ministry/pages/MinistrySession";
import MinistryReports from "./features/ministry/pages/MinistryReports";
import ReturnVisits from "./features/ministry/pages/ReturnVisits";
import BibleStudies from "./features/ministry/pages/BibleStudies";

// Congregation
import Dashboard from "./features/congregation/dashboard/pages/Dashboard";
import PublisherList from "./features/congregation/pages/PublisherList";
import PublisherEditor from "./features/congregation/pages/PublisherEditor";
import Reports from "./features/congregation/pages/Reports";

import BodyOfEldersMeetingPage from "./features/congregation/elders-meetings/pages/BodyOfEldersMeetingPage";
import ServiceCommitteeMeetingPage from "./features/congregation/elders-meetings/pages/ServiceCommitteeMeetingPage";
import OtherMeetingsPage from "./features/congregation/elders-meetings/pages/OtherMeetingsPage";
import MeetingLibraryPage from "./features/congregation/elders-meetings/pages/MeetingLibraryPage";

// Service Groups
import ServiceGroupList from "./features/congregation/service-groups/pages/ServiceGroupList";
import ServiceGroupProfile from "./features/congregation/service-groups/pages/ServiceGroupProfile";
import ServiceGroupEditor from "./features/congregation/service-groups/pages/ServiceGroupEditor";

// Territories
import TerritoryList from "./features/congregation/territories/pages/TerritoryList";
import TerritoryProfile from "./features/congregation/territories/pages/TerritoryProfile";
import TerritoryEditor from "./features/congregation/territories/pages/TerritoryEditor";

// Body of Elders
import BodyMemberList from "./features/congregation/body-of-elders/pages/BodyMemberList";
import BodyMemberProfile from "./features/congregation/body-of-elders/pages/BodyMemberProfile";
import BodyMemberEditor from "./features/congregation/body-of-elders/pages/BodyMemberEditor";

// Tools & Settings
import Tools from "./pages/tools/Tools";
import Settings from "./pages/settings/Settings"

// Service Committee
import ServiceCommitteeList from "./features/congregation/service-committee/pages/ServiceCommitteeList";
import ServiceCommitteeProfile from "./features/congregation/service-committee/pages/ServiceCommitteeProfile";
import ServiceCommitteeEditor from "./features/congregation/service-committee/pages/ServiceCommitteeEditor";

// Departments
import DepartmentsPage from "./features/congregation/departments/pages/DepartmentsPage";
import DepartmentDetailsPage from "./features/congregation/departments/pages/DepartmentDetailsPage";

// Meeting Schedule
import MidweekMeetingPage from "./features/meeting-schedule/midweek/MidweekMeetingPage";
import WeekendMeetingPage from "./features/meeting-schedule/weekend/WeekendMeetingPage";
import FieldServicePage from "./features/meeting-schedule/field-service/FieldServicePage";



export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
      <Route
  path="/personal/notebooks"
  element={<NotebookPage />}
/>

<Route
  path="/personal/notebooks/:id"
  element={<NotebookWorkspace />}
/>
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
  element={<PersonalStudyPage />}
/>

<Route
  path="/personal/personal-study/:id"
  element={<StudyNotebookPage />}
/>
        <Route
          path="/personal/prayer"
          element={<PrayerJournal />}
        />
        
        <Route
  path="/personal/family-worship"
  element={<FamilyWorshipPage />}
/>

        <Route
  path="/personal/life-schedule"
  element={<LifeSchedulePage />}
/>

        {/* Ministry */}
        <Route
          path="/ministry"
          element={<MinistryDashboard />}
        />
{/* Elders Meetings */}
<Route
  path="/congregation/elders-meetings"
  element={<MeetingLibraryPage />}
/>

<Route
  path="/congregation/elders-meetings/body-of-elders"
  element={<BodyOfEldersMeetingPage />}
/>

<Route
  path="/congregation/elders-meetings/service-committee"
  element={<ServiceCommitteeMeetingPage />}
/>

<Route
  path="/congregation/elders-meetings/other"
  element={<OtherMeetingsPage />}
/>
        <Route
          path="/ministry/reports"
          element={<MinistryReports />}
        />
        <Route
          path="/ministry/session/new"
          element={<MinistrySession />}
        />
        <Route
          path="/ministry/session/:id"
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
{/* Meeting Schedule */}

<Route
  path="/congregation/midweek"
  element={<MidweekMeetingPage />}
/>

<Route
  path="/congregation/weekend"
  element={<WeekendMeetingPage />}
/>

<Route
  path="/congregation/field-service"
  element={<FieldServicePage />}
/>
        {/* Publishers */}
        <Route
          path="/congregation/publishers"
          element={<PublisherList />}
        />
        <Route
          path="/congregation/publishers/new"
          element={<PublisherEditor />}
        />
        <Route
          path="/congregation/publishers/:id"
          element={<PublisherEditor />}
        />

        {/* Service Groups */}
        <Route
          path="/congregation/service-groups"
          element={<ServiceGroupList />}
        />
        <Route
          path="/congregation/service-groups/new"
          element={<ServiceGroupEditor />}
        />
        <Route
          path="/congregation/service-groups/:id"
          element={<ServiceGroupProfile />}
        />
        <Route
          path="/congregation/service-groups/:id/edit"
          element={<ServiceGroupEditor />}
        />

        {/* Territories */}
        <Route
          path="/congregation/territories"
          element={<TerritoryList />}
        />
        <Route
          path="/congregation/territories/new"
          element={<TerritoryEditor />}
        />
        <Route
          path="/congregation/territories/:id"
          element={<TerritoryProfile />}
        />
        <Route
          path="/congregation/territories/:id/edit"
          element={<TerritoryEditor />}
        />

        {/* Body of Elders */}
        <Route
          path="/congregation/body-of-elders"
          element={<BodyMemberList />}
        />
        <Route
          path="/congregation/body-of-elders/new"
          element={<BodyMemberEditor />}
        />
        <Route
          path="/congregation/body-of-elders/:id"
          element={<BodyMemberProfile />}
        />
        <Route
          path="/congregation/body-of-elders/:id/edit"
          element={<BodyMemberEditor />}
        />

        {/* Service Committee */}
        <Route
          path="/congregation/service-committee"
          element={<ServiceCommitteeList />}
        />

        <Route
          path="/congregation/service-committee/new"
          element={<ServiceCommitteeEditor />}
        />

        <Route
          path="/congregation/service-committee/:id"
          element={<ServiceCommitteeProfile />}
        />

        <Route
          path="/congregation/service-committee/:id/edit"
          element={<ServiceCommitteeEditor />}
        />
        
                {/* Departments */}
        <Route
          path="/congregation/departments"
          element={<DepartmentsPage />}
        />

        <Route
          path="/congregation/departments/:id"
          element={<DepartmentDetailsPage />}
        />

        {/* Reports */}
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
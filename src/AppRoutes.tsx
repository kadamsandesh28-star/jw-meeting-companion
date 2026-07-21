import { Routes, Route } from "react-router-dom";

import AppLayout from "./components/layout/AppLayout";

import Home from "./pages/home/Home";
import Meetings from "./pages/meetings/Meetings";
import Workbook from "./pages/workbook/Workbook";
import Assignments from "./pages/assignments/Assignments";
import Service from "./pages/service/Service";
import Settings from "./pages/settings/Settings";
import Tools from "./pages/tools/Tools";

import Personal from "./pages/personal/Personal";
import Ministry from "./pages/ministry/Ministry";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        {/* Main Navigation */}
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route path="/ministry" element={<Ministry />} />
        <Route path="/settings" element={<Settings />} />

        {/* Existing Pages (Temporary - will be migrated gradually) */}
        <Route path="/workbook" element={<Workbook />} />
        <Route path="/assignments" element={<Assignments />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tools" element={<Tools />} />
      </Route>
    </Routes>
  );
}
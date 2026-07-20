import { Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Schedule from "./pages/schedule/Schedule";
import Workbook from "./pages/workbook/Workbook";
import Assignments from "./pages/assignments/Assignments";
import Service from "./pages/service/Service";
import Settings from "./pages/settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/workbook" element={<Workbook />} />
      <Route path="/assignments" element={<Assignments />} />
      <Route path="/service" element={<Service />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
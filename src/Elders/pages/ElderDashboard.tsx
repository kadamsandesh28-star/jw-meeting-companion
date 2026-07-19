import { useState } from "react";
import { Box, Typography } from "@mui/material";

import ElderWorkspaceLayout from "../components/ElderWorkspaceLayout";
import ElderSidebar from "../components/ElderSidebar";
import { ElderModule } from "../models/ElderModule";

import CongregationDirectory from "../../pages/congregation/CongregationDirectory";

export default function ElderDashboard() {
  const [module, setModule] = useState<ElderModule>("dashboard");

  function renderContent() {
    switch (module) {
      case "dashboard":
        return (
          <>
            <Typography variant="h4" gutterBottom>
              Dashboard
            </Typography>

            <Typography color="text.secondary">
              Welcome to the Elder Workspace.
            </Typography>
          </>
        );

      case "secretary":
        return <Typography variant="h4">Secretary Module</Typography>;

      case "cboe":
        return <Typography variant="h4">CBOE Module</Typography>;

      case "serviceOverseer":
        return (
          <Typography variant="h4">
            Service Overseer Module
          </Typography>
        );

      case "serviceCommittee":
        return (
          <Typography variant="h4">
            Service Committee Module
          </Typography>
        );

      case "publishers":
        return <CongregationDirectory />;

      default:
        return null;
    }
  }

  return (
    <ElderWorkspaceLayout
      title="Secure Elder Workspace"
      subtitle="Congregation Management"
    >
      <Box sx={{ display: "flex", height: "100%" }}>
        <ElderSidebar
          selected={module}
          onSelect={setModule}
        />

        <Box
          sx={{
            flex: 1,
            p: 4,
          }}
        >
          {renderContent()}
        </Box>
      </Box>
    </ElderWorkspaceLayout>
  );
}
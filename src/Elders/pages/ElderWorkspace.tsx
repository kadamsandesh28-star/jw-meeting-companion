import { useState } from "react";

import { authService } from "../../security/authService";
import { passcodeService } from "../../security/passcodeService";

import CreatePasscode from "../../pages/CreatePasscode";
import UnlockWorkspace from "./UnlockWorkspace";
import ElderDashboard from "./ElderDashboard";

export default function ElderWorkspace() {
  const [unlocked, setUnlocked] = useState(authService.isUnlocked());

  if (!passcodeService.exists()) {
    return (
      <CreatePasscode
        onSuccess={() => setUnlocked(true)}
      />
    );
  }

  if (!unlocked) {
    return (
      <UnlockWorkspace
        onSuccess={() => setUnlocked(true)}
      />
    );
  }

  return <ElderDashboard />;
}
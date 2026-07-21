import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { AppThemeProvider } from "./theme/ThemeContext";
import { ElderAuthProvider } from "./contexts/ElderAuthContext";
import { PlannerProvider } from "./contexts/PlannerContext";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <ElderAuthProvider>
        <PlannerProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PlannerProvider>
      </ElderAuthProvider>
    </AppThemeProvider>
  </React.StrictMode>
);
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import {
  ThemeProvider,
  CssBaseline,
  createTheme,
} from "@mui/material";

import {
  loadSettings,
  updateSettings,
  ThemeMode,
} from "../services/settingsService";

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  mode: "light",
  setMode: () => {},
});

export function useAppTheme() {
  return useContext(ThemeContext);
}

interface Props {
  children: ReactNode;
}

export function AppThemeProvider({
  children,
}: Props) {
  const [mode, setModeState] =
    useState<ThemeMode>("light");

  useEffect(() => {
    const settings = loadSettings();
    setModeState(settings.theme);
  }, []);

  function setMode(newMode: ThemeMode) {
    setModeState(newMode);

    updateSettings({
      theme: newMode,
    });
  }

  // Force System to use Light for now
  const actualMode =
    mode === "system"
      ? "light"
      : mode;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: actualMode,
          primary: {
            main: "#1976d2",
          },
          secondary: {
            main: "#2e7d32",
          },
        },
        shape: {
          borderRadius: 14,
        },
        typography: {
          fontFamily:
            "Roboto, Arial, sans-serif",
          h4: {
            fontWeight: 700,
          },
          h5: {
            fontWeight: 600,
          },
        },
      }),
    [actualMode]
  );

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setMode,
      }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
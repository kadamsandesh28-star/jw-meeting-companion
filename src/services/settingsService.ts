export type ThemeMode = "light" | "dark" | "system";

export interface AppSettings {
  theme: ThemeMode;

  accentColor: string;

  showDailyScripture: boolean;

  showHeroClock: boolean;

  showQuickActions: boolean;

  showSpiritualSnapshot: boolean;
}

const STORAGE_KEY = "jw-app-settings";

const defaultSettings: AppSettings = {
  theme: "system",

  accentColor: "#1976d2",

  showDailyScripture: true,

  showHeroClock: true,

  showQuickActions: true,

  showSpiritualSnapshot: true,
};

export function loadSettings(): AppSettings {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return defaultSettings;
  }

  return {
    ...defaultSettings,
    ...JSON.parse(saved),
  };
}

export function saveSettings(
  settings: AppSettings
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(settings)
  );
}

export function updateSettings(
  partial: Partial<AppSettings>
) {
  const current = loadSettings();

  saveSettings({
    ...current,
    ...partial,
  });
}

export function resetSettings() {
  saveSettings(defaultSettings);
}
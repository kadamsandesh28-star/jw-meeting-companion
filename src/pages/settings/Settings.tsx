import { useEffect, useState } from "react";

const STORAGE_KEY = "jwMeetingCompanion.resources";

export default function Settings() {
  const [workbookTitle, setWorkbookTitle] = useState("");
  const [workbookUrl, setWorkbookUrl] = useState("");

  const [watchtowerTitle, setWatchtowerTitle] = useState("");
  const [watchtowerUrl, setWatchtowerUrl] = useState("");

  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return;

    try {
      const settings = JSON.parse(data);

      setWorkbookTitle(settings.workbookTitle ?? "");
      setWorkbookUrl(settings.workbookUrl ?? "");

      setWatchtowerTitle(settings.watchtowerTitle ?? "");
      setWatchtowerUrl(settings.watchtowerUrl ?? "");
    } catch {
      console.error("Unable to load settings.");
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        workbookTitle,
        workbookUrl,
        watchtowerTitle,
        watchtowerUrl,
      })
    );

    setSaved(true);

    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="mx-auto max-w-4xl p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">⚙️ Settings</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Configure the publications used throughout JW Meeting Companion.
        </p>
      </div>

      <div className="rounded-xl border p-6 shadow-sm space-y-6">

        <h2 className="text-xl font-semibold">
          📚 Meeting Resources
        </h2>

        <div>
          <label className="font-medium block mb-2">
            Midweek Workbook Title
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={workbookTitle}
            onChange={(e) => setWorkbookTitle(e.target.value)}
            placeholder="Our Christian Life and Ministry—July 2025"
          />
        </div>

        <div>
          <label className="font-medium block mb-2">
            Midweek Workbook URL
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={workbookUrl}
            onChange={(e) => setWorkbookUrl(e.target.value)}
            placeholder="https://www.jw.org/finder?..."
          />
        </div>

        <hr />

        <div>
          <label className="font-medium block mb-2">
            Watchtower Study Title
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={watchtowerTitle}
            onChange={(e) => setWatchtowerTitle(e.target.value)}
            placeholder="Watchtower Study Edition"
          />
        </div>

        <div>
          <label className="font-medium block mb-2">
            Watchtower Study URL
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={watchtowerUrl}
            onChange={(e) => setWatchtowerUrl(e.target.value)}
            placeholder="https://www.jw.org/finder?..."
          />
        </div>

        <button
          onClick={saveSettings}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
        >
          Save Settings
        </button>

        {saved && (
          <p className="text-green-600 font-medium">
            ✅ Settings saved successfully.
          </p>
        )}
      </div>
    </div>
  );
}
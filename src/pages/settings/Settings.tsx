import { useEffect, useState } from "react";

const STORAGE_KEY = "jwMeetingCompanion.resources";

type CongregationRole =
  | "Publisher"
  | "Auxiliary Pioneer"
  | "Regular Pioneer"
  | "Ministerial Servant"
  | "Elder";

export default function Settings() {
  const [workbookTitle, setWorkbookTitle] = useState("");
  const [workbookUrl, setWorkbookUrl] = useState("");

  const [watchtowerTitle, setWatchtowerTitle] = useState("");
  const [watchtowerUrl, setWatchtowerUrl] = useState("");

  const [role, setRole] = useState<CongregationRole>("Publisher");

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

      setRole(settings.role ?? "Publisher");
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
        role,
      })
    );

    setSaved(true);

    setTimeout(() => setSaved(false), 2500);
  };

  const roles: CongregationRole[] = [
    "Publisher",
    "Auxiliary Pioneer",
    "Regular Pioneer",
    "Ministerial Servant",
    "Elder",
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-8 p-6">
      <div>
        <h1 className="text-3xl font-bold">⚙️ Settings</h1>

        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Configure JW Meeting Companion to suit your congregation
          responsibilities.
        </p>
      </div>

      <div className="space-y-6 rounded-xl border p-6 shadow-sm">
        <h2 className="text-xl font-semibold">📚 Meeting Resources</h2>

        <div>
          <label className="mb-2 block font-medium">
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
          <label className="mb-2 block font-medium">
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
          <label className="mb-2 block font-medium">
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
          <label className="mb-2 block font-medium">
            Watchtower Study URL
          </label>

          <input
            className="w-full rounded-lg border p-3"
            value={watchtowerUrl}
            onChange={(e) => setWatchtowerUrl(e.target.value)}
            placeholder="https://www.jw.org/finder?..."
          />
        </div>

        <hr />

        <div>
          <h2 className="mb-4 text-xl font-semibold">
            👤 Congregation Role
          </h2>

          <div className="space-y-3">
            {roles.map((item) => (
              <label
                key={item}
                className="flex cursor-pointer items-center gap-3"
              >
                <input
                  type="radio"
                  name="role"
                  value={item}
                  checked={role === item}
                  onChange={() => setRole(item)}
                />

                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={saveSettings}
          className="rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
        >
          Save Settings
        </button>

        {saved && (
          <p className="font-medium text-green-600">
            ✅ Settings saved successfully.
          </p>
        )}
      </div>
    </div>
  );
}
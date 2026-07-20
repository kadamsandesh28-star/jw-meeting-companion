import { useState } from "react";

import MeetingTabs from "../../components/meetings/MeetingTabs";
import MidweekMeeting from "../../components/meetings/MidweekMeeting";
import WeekendMeeting from "../../components/meetings/WeekendMeeting";

export default function Meetings() {
  const [activeTab, setActiveTab] = useState<"midweek" | "weekend">(
    "midweek"
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Meetings
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Prepare for this week's meetings, organize your notes, and keep
          everything you need in one place.
        </p>
      </div>

      {/* Tabs */}
      <MeetingTabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Content */}
      {activeTab === "midweek" ? (
        <MidweekMeeting />
      ) : (
        <WeekendMeeting />
      )}
    </div>
  );
}
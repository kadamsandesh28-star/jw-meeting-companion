import {
  MicVocal,
  BookMarked,
} from "lucide-react";

import MeetingSectionCard from "./MeetingSectionCard";

export default function WeekendMeeting() {
  return (
    <div className="space-y-6">
      <MeetingSectionCard
        icon={<MicVocal size={24} />}
        title="Public Talk"
        description="Take notes during the public talk."
      >
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Speaker: —
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            Theme: —
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Record important points and scriptures during the talk.
          </p>
        </div>
      </MeetingSectionCard>

      <MeetingSectionCard
        icon={<BookMarked size={24} />}
        title="Watchtower Study"
        description="Prepare and review the weekly Watchtower Study."
      >
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Study Article: —
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300">
            Study Conductor: —
          </p>

          <p className="text-sm text-slate-500 dark:text-slate-400">
            Open the current Study Edition or review your personal notes.
          </p>
        </div>
      </MeetingSectionCard>
    </div>
  );
}
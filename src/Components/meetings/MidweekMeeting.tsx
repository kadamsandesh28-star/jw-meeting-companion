import {
  BookOpen,
  Gem,
  Mic,
  HeartHandshake,
} from "lucide-react";

import MeetingSectionCard from "./MeetingSectionCard";

export default function MidweekMeeting() {
  return (
    <div className="space-y-6">
      <MeetingSectionCard
        icon={<BookOpen size={24} />}
        title="Treasures From God's Word"
        description="Bible reading and opening discussion."
      >
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            • Bible Reading
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            • Opening Talk
          </p>
        </div>
      </MeetingSectionCard>

      <MeetingSectionCard
        icon={<Gem size={24} />}
        title="Digging for Spiritual Gems"
        description="Research and prepare comments."
      >
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            • Review this week's questions
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            • Prepare meaningful comments
          </p>
        </div>
      </MeetingSectionCard>

      <MeetingSectionCard
        icon={<Mic size={24} />}
        title="Apply Yourself to the Field Ministry"
        description="Assignments and counsel points."
      >
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Assignment: Not Assigned
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Counsel Point: —
          </p>
        </div>
      </MeetingSectionCard>

      <MeetingSectionCard
        icon={<HeartHandshake size={24} />}
        title="Living as Christians"
        description="Living as Christians and Congregation Bible Study."
      >
        <div className="space-y-2">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            • Living as Christians
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            • Congregation Bible Study
          </p>
        </div>
      </MeetingSectionCard>
    </div>
  );
}
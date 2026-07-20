import {
  BookOpen,
  Gem,
  Mic,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

import MeetingSectionCard from "./MeetingSectionCard";
import { meetingData } from "../../data/mock/meetingData";

const iconMap: Record<string, LucideIcon> = {
  treasures: BookOpen,
  gems: Gem,
  apply: Mic,
  living: HeartHandshake,
};

export default function MidweekMeeting() {
  return (
    <div className="space-y-6">
      {meetingData.midweek.sections.map((section) => {
        const Icon = iconMap[section.id];

        return (
          <MeetingSectionCard
            key={section.id}
            icon={Icon}
            title={section.title}
            description={section.description}
            status={section.status}
            actions={section.actions}
          />
        );
      })}
    </div>
  );
}
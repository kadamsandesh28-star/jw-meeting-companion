import {
  MicVocal,
  BookMarked,
  LucideIcon,
} from "lucide-react";

import MeetingSectionCard from "./MeetingSectionCard";
import { meetingData } from "../../data/mock/meetingData";

const iconMap: Record<string, LucideIcon> = {
  "public-talk": MicVocal,
  watchtower: BookMarked,
};

export default function WeekendMeeting() {
  return (
    <div className="space-y-6">
      {meetingData.weekend.sections.map((section) => {
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
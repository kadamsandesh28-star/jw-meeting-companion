import { useState } from "react";
import {
  BookOpen,
  Gem,
  Mic,
  HeartHandshake,
  LucideIcon,
} from "lucide-react";

import MeetingSectionCard from "./MeetingSectionCard";
import {
  meetingData,
  MeetingSection,
  MeetingStatus,
} from "../../data/mock/meetingData";

const iconMap: Record<string, LucideIcon> = {
  treasures: BookOpen,
  gems: Gem,
  apply: Mic,
  living: HeartHandshake,
};

export default function MidweekMeeting() {
  const [sections, setSections] = useState<MeetingSection[]>(
    meetingData.midweek.sections
  );

  const handleStatusChange = (
    sectionId: string,
    status: MeetingStatus
  ) => {
    setSections((current) =>
      current.map((section) =>
        section.id === sectionId
          ? { ...section, status }
          : section
      )
    );
  };

  return (
    <div className="space-y-6">
      {sections.map((section) => {
        const Icon = iconMap[section.id];

        return (
          <MeetingSectionCard
            key={section.id}
            id={section.id}
            icon={Icon}
            title={section.title}
            description={section.description}
            status={section.status}
            actions={section.actions}
            onStatusChange={(status) =>
              handleStatusChange(section.id, status)
            }
          />
        );
      })}
    </div>
  );
}
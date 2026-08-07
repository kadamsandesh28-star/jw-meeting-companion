import type { AgendaItem } from "./AgendaItem";

export interface MeetingInfo {
  congregation: string;
  meetingType: string;
  meetingDate: string;
  meetingTime: string;
  chairman: string;
  openingPrayer: string;
  closingPrayer: string;
  nextChairman: string;
}

export interface Meeting {
  id: string;

  title: string;

  createdAt: string;

  updatedAt: string;

  info: MeetingInfo;

  attendance: string[];

  agenda: AgendaItem[];

  minutes: string;

  archived: boolean;
}
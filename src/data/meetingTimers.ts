export interface MeetingTimer {
  id: string;
  title: string;
  minutes: number;
}

export const midweekTimers: MeetingTimer[] = [
  {
    id: "initial-call",
    title: "Initial Call",
    minutes: 2,
  },
  {
    id: "return-visit",
    title: "Return Visit",
    minutes: 4,
  },
  {
    id: "bible-study",
    title: "Bible Study",
    minutes: 5,
  },
  {
    id: "bible-reading",
    title: "Bible Reading",
    minutes: 4,
  },
  {
    id: "student-talk",
    title: "Student Talk",
    minutes: 10,
  },
];

export const weekendTimers: MeetingTimer[] = [
  {
    id: "public-talk",
    title: "Public Talk",
    minutes: 30,
  },
  {
    id: "watchtower-study",
    title: "Watchtower Study",
    minutes: 60,
  },
];
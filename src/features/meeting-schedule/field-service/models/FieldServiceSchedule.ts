export interface FieldServiceEntry {
  id: string;

  date: string;

  day: string;

  time: string;

  arrangement: string;

  location: string;

  conductor: string;

  notes: string;
}

export interface FieldServiceSchedule {
  id: string;

  title: string;

  month: string;

  entries: FieldServiceEntry[];

  createdAt: number;

  updatedAt: number;
}
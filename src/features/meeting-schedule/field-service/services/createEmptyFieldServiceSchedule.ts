import {
  FieldServiceEntry,
  FieldServiceSchedule,
} from "../models/FieldServiceSchedule";

function createEntry(): FieldServiceEntry {
  return {
    id: crypto.randomUUID(),

    date: "",

    day: "",

    time: "",

    arrangement: "",

    location: "",

    conductor: "",

    notes: "",
  };
}

export function createEmptyFieldServiceSchedule(
  month: string
): FieldServiceSchedule {
  const now = Date.now();

  return {
    id: crypto.randomUUID(),

    title: `Field Service - ${month}`,

    month,

    entries: [
      createEntry(),
      createEntry(),
      createEntry(),
      createEntry(),
      createEntry(),
      createEntry(),
      createEntry(),
      createEntry(),
    ],

    createdAt: now,

    updatedAt: now,
  };
}
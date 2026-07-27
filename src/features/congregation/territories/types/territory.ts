export type TerritoryType =
  | "Residential"
  | "Business"
  | "Rural"
  | "Mixed";

export type TerritoryStatus =
  | "Available"
  | "Assigned"
  | "Completed";

export interface Territory {
  id: string;

  number: string;
  name: string;

  type: TerritoryType;
  status: TerritoryStatus;

  assignedServiceGroupId: string;

  addressNotes: string;
  mapReference: string;

  lastWorked?: string;
  nextDue?: string;

  notes: string;

  createdAt: string;
  updatedAt: string;
}
export type PublisherStatus =
  | "Publisher"
  | "Auxiliary Pioneer"
  | "Regular Pioneer"
  | "Ministerial Servant"
  | "Elder";

export interface Publisher {
  id: string;

  firstName: string;
  lastName: string;
  preferredName?: string;

  gender: "Male" | "Female";

  dateOfBirth?: string;
  baptismDate?: string;

  phone?: string;
  email?: string;

  address?: string;

  emergencyContactName?: string;
  emergencyContactPhone?: string;

  serviceGroup?: string;

  status: PublisherStatus;

  active: boolean;

  notes?: string;

  createdAt: string;
  updatedAt: string;
}
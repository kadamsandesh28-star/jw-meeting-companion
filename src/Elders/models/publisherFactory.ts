import { Publisher } from "./Publisher";

export function createPublisher(): Publisher {
  const now = new Date().toISOString();

  return {
    id: crypto.randomUUID(),
    firstName: "",
    lastName: "",
    preferredName: "",
    gender: "Male",
    dateOfBirth: "",
    baptismDate: "",
    phone: "",
    email: "",
    address: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    serviceGroup: "",
    status: "Publisher",
    active: true,
    notes: "",
    createdAt: now,
    updatedAt: now,
  };
}
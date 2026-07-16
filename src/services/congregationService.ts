export interface Publisher {
  id: string;
  firstName: string;
  lastName: string;

  phone: string;
  email: string;

  serviceGroup: string;

  baptized: boolean;

  privileges: string;

  notes: string;
}

export interface FieldServiceGroup {
  id: string;
  name: string;

  overseerId: string;
  assistantId: string;

  publisherIds: string[];
}

export interface Department {
  id: string;
  name: string;

  coordinatorId: string;
  assistantId: string;

  memberIds: string[];

  notes: string;
}

export interface ShepherdingRecord {
  id: string;

  publisherId: string;

  elderId: string;

  lastVisit: string;

  nextVisit: string;

  notes: string;
}

const PUBLISHER_KEY = "jw-publishers";
const GROUP_KEY = "jw-field-service-groups";
const DEPARTMENT_KEY = "jw-departments";
const SHEPHERDING_KEY = "jw-shepherding";

/* ---------------- Publishers ---------------- */

export function loadPublishers(): Publisher[] {
  return JSON.parse(localStorage.getItem(PUBLISHER_KEY) || "[]");
}

export function savePublishers(data: Publisher[]) {
  localStorage.setItem(PUBLISHER_KEY, JSON.stringify(data));
}

export function getPublisherName(id: string) {
  const publisher = loadPublishers().find((p) => p.id === id);

  if (!publisher) return "";

  return `${publisher.firstName} ${publisher.lastName}`.trim();
}

/* ---------------- Groups ---------------- */

export function loadGroups(): FieldServiceGroup[] {
  return JSON.parse(localStorage.getItem(GROUP_KEY) || "[]");
}

export function saveGroups(data: FieldServiceGroup[]) {
  localStorage.setItem(GROUP_KEY, JSON.stringify(data));
}

/* ---------------- Departments ---------------- */

export function loadDepartments(): Department[] {
  return JSON.parse(localStorage.getItem(DEPARTMENT_KEY) || "[]");
}

export function saveDepartments(data: Department[]) {
  localStorage.setItem(DEPARTMENT_KEY, JSON.stringify(data));
}

/* ---------------- Shepherding ---------------- */

export function loadShepherding(): ShepherdingRecord[] {
  return JSON.parse(localStorage.getItem(SHEPHERDING_KEY) || "[]");
}

export function saveShepherding(data: ShepherdingRecord[]) {
  localStorage.setItem(SHEPHERDING_KEY, JSON.stringify(data));
}
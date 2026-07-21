export type PlannerStatus =
  | "Not Started"
  | "In Progress"
  | "Ready";

export interface PlannerAssignment {
  id: string;
  title: string;
  meeting: "Midweek" | "Weekend";
  status: PlannerStatus;
}

const STORAGE_KEY = "jw-weekly-planner";

export function loadPlanner(): PlannerAssignment[] {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (!saved) {
    return [];
  }

  return JSON.parse(saved);
}

export function savePlanner(
  planner: PlannerAssignment[]
) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(planner)
  );
}

export function updatePlannerStatus(
  id: string,
  status: PlannerStatus
) {
  const planner = loadPlanner();

  const updated = planner.map((item) =>
    item.id === id
      ? { ...item, status }
      : item
  );

  savePlanner(updated);
}

export function getMeetingProgress(
  meeting: "Midweek" | "Weekend"
) {
  const planner = loadPlanner();

  const assignments = planner.filter(
    (item) => item.meeting === meeting
  );

  const ready = assignments.filter(
    (item) => item.status === "Ready"
  ).length;

  const total = assignments.length;

  const progress =
    total === 0 ? 0 : Math.round((ready / total) * 100);

  return {
    ready,
    total,
    progress,
  };
}

/* -------------------------------- */
/* Dashboard Helpers                */
/* -------------------------------- */

export function getOutstandingAssignments(
  meeting?: "Midweek" | "Weekend"
): PlannerAssignment[] {
  const planner = loadPlanner();

  return planner.filter(
    (item) =>
      item.status !== "Ready" &&
      (!meeting || item.meeting === meeting)
  );
}

export function getOverallProgress() {
  const planner = loadPlanner();

  const ready = planner.filter(
    (item) => item.status === "Ready"
  ).length;

  const total = planner.length;

  return {
    ready,
    total,
    progress:
      total === 0
        ? 0
        : Math.round((ready / total) * 100),
  };
}

export function getNextAssignment():
  | PlannerAssignment
  | null {
  const planner = loadPlanner();

  const next =
    planner.find(
      (item) => item.status === "In Progress"
    ) ??
    planner.find(
      (item) => item.status === "Not Started"
    );

  return next ?? null;
}
import Card from "../../components/ui/Card";
import {
  type PlannerAssignment,
  type PlannerStatus,
} from "../../services/plannerService";
import { usePlanner } from "../../contexts/PlannerContext";

export default function Assignments() {
  const { planner, changeStatus } = usePlanner();

  const midweek = planner.filter(
    (item) => item.meeting === "Midweek"
  );

  const weekend = planner.filter(
    (item) => item.meeting === "Weekend"
  );

  function renderSection(
    title: string,
    assignments: PlannerAssignment[]
  ) {
    return (
      <Card title={title}>
        {assignments.length === 0 ? (
          <p className="text-gray-500">
            No assignments available.
          </p>
        ) : (
          <div className="space-y-4">
            {assignments.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between"
              >
                <span className="font-medium">
                  {item.title}
                </span>

                <select
                  value={item.status}
                  onChange={(e) =>
                    changeStatus(
                      item.id,
                      e.target.value as PlannerStatus
                    )
                  }
                  className="rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600 dark:bg-gray-800"
                >
                  <option value="Not Started">
                    Not Started
                  </option>
                  <option value="In Progress">
                    In Progress
                  </option>
                  <option value="Ready">
                    Ready
                  </option>
                </select>
              </div>
            ))}
          </div>
        )}
      </Card>
    );
  }

  return (
    <div className="mx-auto max-w-5xl space-y-6 p-6">
      <h1 className="text-3xl font-bold">
        Weekly Assignments
      </h1>

      {renderSection("Midweek Meeting", midweek)}

      {renderSection("Weekend Meeting", weekend)}
    </div>
  );
}
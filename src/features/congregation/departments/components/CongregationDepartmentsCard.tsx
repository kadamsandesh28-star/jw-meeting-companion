import { DashboardSection } from "../../../../shared/components/dashboard";
import { useDepartments } from "../../departments/hooks/useDepartments";

export default function CongregationDepartmentsCard() {
  const { departments } = useDepartments();

  return (
    <DashboardSection title="Congregation Departments">
      <div className="space-y-2">
        {departments.map((department) => (
          <div
            key={department.id}
            className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-green-600 text-lg">●</span>

              <span className="font-medium text-slate-800">
                {department.name}
              </span>
            </div>

            <span className="text-xs text-slate-500">
              {department.active ? "Active" : "Inactive"}
            </span>
          </div>
        ))}
      </div>
    </DashboardSection>
  );
}
import { useMemo } from "react";
import Card from "../../components/ui/Card";
import { usePlanner } from "../../contexts/PlannerContext";
import { getMeetingProgress } from "../../services/meetingProgressService";

export default function MeetingProgress() {
  const { planner } = usePlanner();

  const progress = useMemo(
    () => getMeetingProgress(planner),
    [planner]
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Meeting Progress
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Track your preparation for this week's meetings.
        </p>
      </div>

      <Card title="Overall Preparation">
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <span className="text-sm text-slate-500">
              Overall Progress
            </span>

            <span className="text-4xl font-bold text-indigo-600">
              {progress.overallProgress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
            <div
              className="h-full rounded-full bg-indigo-600 transition-all duration-500"
              style={{
                width: `${progress.overallProgress}%`,
              }}
            />
          </div>
        </div>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Workbook">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Checklist</span>

              <span className="font-semibold">
                {progress.workbook.completed} /{" "}
                {progress.workbook.total}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Notes</span>

              <span
                className={
                  progress.workbook.hasNotes
                    ? "font-semibold text-green-600"
                    : "font-semibold text-amber-600"
                }
              >
                {progress.workbook.hasNotes
                  ? "Added"
                  : "Not Added"}
              </span>
            </div>
          </div>
        </Card>

        <Card title="Assignments">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>Ready</span>

              <span className="font-semibold text-green-600">
                {progress.assignments.ready}
              </span>
            </div>

            <div className="flex justify-between">
              <span>In Progress</span>

              <span className="font-semibold text-amber-600">
                {progress.assignments.inProgress}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Not Started</span>

              <span className="font-semibold text-red-600">
                {progress.assignments.notStarted}
              </span>
            </div>

            <div className="border-t pt-3 dark:border-slate-700 flex justify-between">
              <span>Total</span>

              <span className="font-semibold">
                {progress.assignments.total}
              </span>
            </div>
          </div>
        </Card>

        <Card title="Meeting Notes">
          <div className="flex items-center justify-between">
            <span>Status</span>

            <span
              className={
                progress.meetingNotes.hasNotes
                  ? "font-semibold text-green-600"
                  : "font-semibold text-amber-600"
              }
            >
              {progress.meetingNotes.hasNotes
                ? "Saved"
                : "No Notes"}
            </span>
          </div>
        </Card>

        <Card title="Today's Focus">
          <p className="leading-relaxed">
            {progress.todaysFocus}
          </p>
        </Card>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";
import Card from "../ui/Card";
import type { MeetingProgress } from "../../services/meetingProgressService";

interface Props {
  progress: MeetingProgress;
}

export default function MeetingPreparationCard({
  progress,
}: Props) {
  return (
    <Card title="📊 Meeting Preparation">
      <div className="space-y-4">
        <div className="flex items-end justify-between">
          <span className="text-sm text-gray-500">
            Overall Progress
          </span>

          <span className="text-3xl font-bold text-indigo-600">
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

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Workbook</span>

            <span className="font-medium">
              {progress.workbook.completed} / {progress.workbook.total}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Assignments Ready</span>

            <span className="font-medium text-green-600">
              {progress.assignments.ready}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Meeting Notes</span>

            <span
              className={
                progress.meetingNotes.hasNotes
                  ? "font-medium text-green-600"
                  : "font-medium text-amber-600"
              }
            >
              {progress.meetingNotes.hasNotes
                ? "Saved"
                : "Not Started"}
            </span>
          </div>
        </div>

        <Link
          to="/meetings/progress"
          className="inline-flex text-sm font-medium text-indigo-600 hover:text-indigo-700"
        >
          View Meeting Dashboard →
        </Link>
      </div>
    </Card>
  );
}
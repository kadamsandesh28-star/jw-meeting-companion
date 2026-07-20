import React from "react";
import { LucideIcon } from "lucide-react";
import StatusBadge from "../common/StatusBadge";
import { MeetingStatus } from "../../data/mock/meetingData";

interface MeetingSectionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  status: MeetingStatus;
  actions: string[];
}

const MeetingSectionCard: React.FC<MeetingSectionCardProps> = ({
  icon: Icon,
  title,
  description,
  status,
  actions,
}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
            <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              {description}
            </p>
          </div>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {actions.map((action) => (
          <button
            key={action}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MeetingSectionCard;
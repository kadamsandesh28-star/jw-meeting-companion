import { useMemo, useState } from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { publisherService } from "../../publishers/services/publisherService";
import { DepartmentAssignment } from "../models/DepartmentAssignment";
import { departmentAssignmentService } from "../services/departmentAssignmentService";
import { departmentWorkTemplateService } from "../services/departmentWorkTemplateService";

import AssignmentDialog from "./AssignmentDialog";
import DepartmentAssignmentsTable from "./DepartmentAssignmentsTable";

interface DepartmentScheduleCardProps {
  departmentId: string;
  memberIds: string[];
}

export default function DepartmentScheduleCard({
  departmentId,
  memberIds,
}: DepartmentScheduleCardProps) {
  const [refreshKey, setRefreshKey] = useState(0);

  const assignments = useMemo(
    () =>
      departmentAssignmentService.getByDepartment(
        departmentId
      ),
    [departmentId, refreshKey]
  );

  const templates = useMemo(
    () =>
      departmentWorkTemplateService.getByDepartment(
        departmentId
      ),
    [departmentId, refreshKey]
  );

  const publishers = useMemo(
    () =>
      publisherService
        .getAll()
        .filter((p) => memberIds.includes(p.id)),
    [memberIds]
  );

  const [dialogOpen, setDialogOpen] = useState(false);

  const [selectedAssignment, setSelectedAssignment] =
    useState<DepartmentAssignment>();

  const refresh = () =>
    setRefreshKey((value) => value + 1);

  const handleAdd = () => {
    setSelectedAssignment(undefined);
    setDialogOpen(true);
  };

  const handleEdit = (
    assignment: DepartmentAssignment
  ) => {
    setSelectedAssignment(assignment);
    setDialogOpen(true);
  };

  const handleDelete = (
    assignment: DepartmentAssignment
  ) => {
    if (
      !window.confirm(
        "Delete this assignment?"
      )
    ) {
      return;
    }

    departmentAssignmentService.delete(
      assignment.id
    );

    refresh();
  };

  const handleSave = (data: {
    date: string;
    workTemplateId: string;
    assignedPublisherId?: string;
    location?: string;
    status: DepartmentAssignment["status"];
    notes?: string;
  }) => {
    if (selectedAssignment) {
      departmentAssignmentService.update({
        ...selectedAssignment,
        ...data,
        updatedAt: new Date().toISOString(),
      });
    } else {
      departmentAssignmentService.create({
        departmentId,
        ...data,
      });
    }

    refresh();
  };

  return (
    <Stack spacing={2}>
      <Stack
        direction="row"
        justifyContent="flex-end"
      >
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleAdd}
        >
          Add Assignment
        </Button>
      </Stack>

      <DepartmentAssignmentsTable
        assignments={assignments}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AssignmentDialog
        open={dialogOpen}
        title={
          selectedAssignment
            ? "Edit Assignment"
            : "Add Assignment"
        }
        assignment={selectedAssignment}
        templates={templates}
        publishers={publishers}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
    </Stack>
  );
}
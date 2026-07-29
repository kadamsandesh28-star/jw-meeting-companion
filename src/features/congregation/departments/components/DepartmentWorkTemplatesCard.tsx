import { useMemo, useState } from "react";
import { Button, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { DepartmentWorkTemplate } from "../models/DepartmentWorkTemplate";
import { departmentWorkTemplateService } from "../services/departmentWorkTemplateService";
import WorkTemplateDialog from "./WorkTemplateDialog";
import WorkTemplateTable from "./WorkTemplateTable";

interface DepartmentWorkTemplatesCardProps {
  departmentId: string;
}

export default function DepartmentWorkTemplatesCard({
  departmentId,
}: DepartmentWorkTemplatesCardProps) {
  const [refreshKey, setRefreshKey] = useState(0);

  const templates = useMemo(
    () =>
      departmentWorkTemplateService.getByDepartment(
        departmentId
      ),
    [departmentId, refreshKey]
  );

  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] =
    useState<DepartmentWorkTemplate>();

  const refresh = () =>
    setRefreshKey((value) => value + 1);

  const handleAdd = () => {
    setSelectedTemplate(undefined);
    setDialogOpen(true);
  };

  const handleEdit = (
    template: DepartmentWorkTemplate
  ) => {
    setSelectedTemplate(template);
    setDialogOpen(true);
  };

  const handleDelete = (
    template: DepartmentWorkTemplate
  ) => {
    if (
      !window.confirm(
        `Delete "${template.name}"?`
      )
    ) {
      return;
    }

    departmentWorkTemplateService.delete(
      template.id
    );

    refresh();
  };

  const handleToggleActive = (
    template: DepartmentWorkTemplate,
    active: boolean
  ) => {
    departmentWorkTemplateService.update({
      ...template,
      active,
      updatedAt: new Date().toISOString(),
    });

    refresh();
  };

  const handleSave = (data: {
    name: string;
    defaultLocation: string;
    active: boolean;
  }) => {
    if (selectedTemplate) {
      departmentWorkTemplateService.update({
        ...selectedTemplate,
        name: data.name,
        defaultLocation:
          data.defaultLocation || undefined,
        active: data.active,
        updatedAt: new Date().toISOString(),
      });
    } else {
      departmentWorkTemplateService.create({
        departmentId,
        name: data.name,
        defaultLocation:
          data.defaultLocation || undefined,
        active: data.active,
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
          Add Work Template
        </Button>
      </Stack>

      <WorkTemplateTable
        templates={templates}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleActive={handleToggleActive}
      />

      <WorkTemplateDialog
        open={dialogOpen}
        title={
          selectedTemplate
            ? "Edit Work Template"
            : "Add Work Template"
        }
        template={selectedTemplate}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
    </Stack>
  );
}
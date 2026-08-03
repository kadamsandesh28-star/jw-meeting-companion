import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { FieldServiceSchedule } from "../models/FieldServiceSchedule";

export function exportFieldServicePdf(
  schedule: FieldServiceSchedule
) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text(
    "JW Meeting Companion",
    14,
    20
  );

  doc.setFontSize(16);
  doc.text(
    "Field Service Schedule",
    14,
    30
  );

  doc.setFontSize(12);
  doc.text(
    schedule.month,
    14,
    38
  );

  autoTable(doc, {
    startY: 48,

    theme: "grid",

    head: [[
      "Date",
      "Day",
      "Time",
      "Arrangement",
      "Location",
      "Conductor",
      "Notes",
    ]],

    body: schedule.entries.map(
      (entry) => [
        entry.date,
        entry.day,
        entry.time,
        entry.arrangement,
        entry.location,
        entry.conductor,
        entry.notes,
      ]
    ),
  });

  doc.save(
    `${schedule.month}-Field-Service.pdf`
  );
}
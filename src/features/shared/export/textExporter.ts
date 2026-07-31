export interface TextStudyExport {
  title: string;
  type: string;
  createdAt: string;
  updatedAt: string;

  objective: string;
  questions: string;
  research: string;
  application: string;
  prayer: string;
  notes: string;
}

export function exportStudyToText(
  study: TextStudyExport
): void {
  const text = `${study.title}

Type: ${study.type}
Created: ${study.createdAt}
Updated: ${study.updatedAt}

==================================

OBJECTIVE

${study.objective}

==================================

QUESTIONS

${study.questions}

==================================

RESEARCH

${study.research}

==================================

APPLICATION

${study.application}

==================================

PRAYER

${study.prayer}

==================================

NOTES

${study.notes}
`;

  const blob = new Blob([text], {
    type: "text/plain;charset=utf-8",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${study.title}.txt`;
  link.click();

  URL.revokeObjectURL(url);
}
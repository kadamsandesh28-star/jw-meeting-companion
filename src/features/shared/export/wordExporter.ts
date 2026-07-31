import {
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

import { saveAs } from "file-saver";

export interface WordStudyExport {
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

export async function exportStudyToWord(
  study: WordStudyExport
) {
  const document = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            heading: HeadingLevel.TITLE,
            children: [
              new TextRun("JW Meeting Companion"),
            ],
          }),

          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            children: [new TextRun(study.title)],
          }),

          new Paragraph({
            children: [
              new TextRun(`Type: ${study.type}`),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun(`Created: ${study.createdAt}`),
            ],
          }),

          new Paragraph({
            children: [
              new TextRun(`Updated: ${study.updatedAt}`),
            ],
          }),

          createSection(
            "Objective",
            study.objective
          ),

          createSection(
            "Questions",
            study.questions
          ),

          createSection(
            "Research",
            study.research
          ),

          createSection(
            "Application",
            study.application
          ),

          createSection(
            "Prayer",
            study.prayer
          ),

          createSection(
            "Notes",
            study.notes
          ),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(document);

  saveAs(blob, `${study.title}.docx`);
}

function createSection(
  heading: string,
  content: string
) {
  return new Paragraph({
    children: [
      new TextRun({
        text: `${heading}\n`,
        bold: true,
      }),

      new TextRun(content || "-"),
    ],
    spacing: {
      before: 300,
      after: 300,
    },
  });
}
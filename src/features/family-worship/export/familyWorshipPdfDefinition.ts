import { TDocumentDefinitions } from "pdfmake/interfaces";

import { FamilyWorshipExport } from "./FamilyWorshipExport";

export function familyWorshipPdfDefinition(
  data: FamilyWorshipExport
): TDocumentDefinitions {
  return {
    pageMargins: [40, 50, 40, 50],

    content: [
      {
        text: "📖 Family Worship",
        style: "title",
      },

      {
        text: data.title,
        style: "heading",
      },

      {
        text: data.subtitle,
        margin: [0, 0, 0, 20],
      },

      {
        text: "Bible Reading",
        style: "section",
      },

      {
        text: data.bibleReading,
        margin: [0, 0, 0, 15],
      },

      {
        text: "Opening",
        style: "section",
      },

      {
        ul: [
          `Song: ${data.openingSong}`,
          `Prayer: ${data.openingPrayer || "—"}`,
        ],
      },

      {
        text: "Discussion Questions",
        style: "section",
      },

      {
        ul: data.discussionQuestions,
      },

      {
        text: "Notes",
        style: "section",
      },

      {
        text:
          data.notes || "No notes.",
        margin: [0, 0, 0, 15],
      },

      {
        text: "Family Goals",
        style: "section",
      },

      {
        ul: data.goals,
      },

      {
        text: "Closing",
        style: "section",
      },

      {
        ul: [
          `Song: ${data.closingSong}`,
          `Prayer: ${data.closingPrayer || "—"}`,
        ],
      },

      {
        text: `Generated ${data.exportedAt.toLocaleString()}`,
        alignment: "right",
        margin: [0, 30, 0, 0],
        fontSize: 9,
        color: "gray",
      },
    ],

    styles: {
      title: {
        fontSize: 24,
        bold: true,
        alignment: "center",
        margin: [0, 0, 0, 20],
      },

      heading: {
        fontSize: 18,
        bold: true,
        margin: [0, 0, 0, 8],
      },

      section: {
        fontSize: 14,
        bold: true,
        margin: [0, 18, 0, 8],
      },
    },

    defaultStyle: {
      fontSize: 11,
    },
  };
}
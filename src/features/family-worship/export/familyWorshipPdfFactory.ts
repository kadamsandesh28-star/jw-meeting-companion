import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

import { FamilyWorshipSession } from "../models/FamilyWorshipSession";
import { familyWorshipFormatter } from "./familyWorshipFormatter";
import { familyWorshipPdfDefinition } from "./familyWorshipPdfDefinition";

(pdfMake as any).vfs = (pdfFonts as any).pdfMake.vfs;

export function createFamilyWorshipPdf(
  session: FamilyWorshipSession
) {
  const exportData =
    familyWorshipFormatter(session);

  const definition =
    familyWorshipPdfDefinition(
      exportData
    );

  return pdfMake.createPdf(
    definition
  );
}   
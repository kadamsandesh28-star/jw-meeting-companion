import pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

import { FamilyWorshipSession } from "../models/FamilyWorshipSession";
import { familyWorshipFormatter } from "./familyWorshipFormatter";
import { familyWorshipPdfDefinition } from "./familyWorshipPdfDefinition";

let initialized = false;

function initializePdfMake() {
  if (initialized) {
    return;
  }

  const fonts = pdfFonts as any;

  if (fonts.vfs) {
    (pdfMake as any).vfs = fonts.vfs;
  } else if (fonts.pdfMake?.vfs) {
    (pdfMake as any).vfs = fonts.pdfMake.vfs;
  } else {
    console.error("Unable to initialize pdfMake VFS.", fonts);
    throw new Error("pdfMake fonts could not be initialized.");
  }

  initialized = true;
}

export function createFamilyWorshipPdf(
  session: FamilyWorshipSession
) {
  initializePdfMake();

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
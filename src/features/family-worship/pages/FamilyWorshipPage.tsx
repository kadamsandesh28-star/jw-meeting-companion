import { useMemo, useState } from "react";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import {
  Box,
  Button,
} from "@mui/material";

import ContinueSessionCard from "../components/ContinueSessionCard";
import FamilyWorshipHeader from "../components/FamilyWorshipHeader";
import HistoryDialog from "../components/HistoryDialog";
import NewSessionCard from "../components/NewSessionCard";
import RecentSessionList from "../components/RecentSessionList";
import SurpriseMeCard from "../components/SurpriseMeCard";
import TemplateLibrary from "../components/TemplateLibrary";
import TemplatePreviewDialog from "../components/TemplatePreviewDialog";
import WorshipSessionEditor from "../components/WorshipSessionEditor";

import { worshipTemplates } from "../data";
import { useFamilyWorship } from "../hooks/useFamilyWorship";
import { FamilyWorshipSession } from "../models/FamilyWorshipSession";
import { WorshipTemplate } from "../models/WorshipTemplate";
import { createEmptySession } from "../utils/createEmptySession";
import { createSessionFromTemplate } from "../utils/createSessionFromTemplate";
import { getRandomTemplate } from "../utils/getRandomTemplate";

export default function FamilyWorshipPage() {
  const {
    sessions,
    saveSession,
    removeSession,
  } = useFamilyWorship();

  const [editing, setEditing] =
    useState(false);

  const [historyOpen, setHistoryOpen] =
    useState(false);

  const [previewOpen, setPreviewOpen] =
    useState(false);

  const [
    selectedTemplate,
    setSelectedTemplate,
  ] =
    useState<WorshipTemplate | null>(
      null
    );

  const [session, setSession] =
    useState<FamilyWorshipSession>(
      createEmptySession()
    );

  const recentSessions = useMemo(
    () =>
      [...sessions]
        .sort(
          (a, b) =>
            b.updatedAt - a.updatedAt
        )
        .slice(0, 5),
    [sessions]
  );

  const lastSession =
    recentSessions[0] ?? null;

  function handleNewSession() {
    setSession(createEmptySession());
    setEditing(true);
  }

  function handleSave(
    updated: FamilyWorshipSession
  ) {
    saveSession(updated);
    setEditing(false);
  }

  function handleContinue(
    existing: FamilyWorshipSession
  ) {
    setSession(existing);
    setEditing(true);
  }

  function handleTemplateSelected(
    template: WorshipTemplate
  ) {
    setSelectedTemplate(template);
    setPreviewOpen(true);
  }

  function handleUseTemplate(
    template: WorshipTemplate
  ) {
    const newSession =
      createSessionFromTemplate(
        template
      );

    setSession(newSession);

    setPreviewOpen(false);
    setSelectedTemplate(null);

    setEditing(true);
  }

  function handleSurpriseMe() {
    const template =
      getRandomTemplate(
        worshipTemplates
      );

    if (!template) {
      return;
    }

    setSelectedTemplate(template);
    setPreviewOpen(true);
  }

  if (editing) {
    return (
      <Box
        sx={{
          maxWidth: 1100,
          mx: "auto",
          p: 3,
          pb: 10,
        }}
      >
        <Button
          startIcon={
            <ArrowBackRoundedIcon />
          }
          onClick={() =>
            setEditing(false)
          }
          sx={{ mb: 3 }}
        >
          Back to Dashboard
        </Button>

        <WorshipSessionEditor
          session={session}
          onChange={setSession}
          onSave={handleSave}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 1100,
        mx: "auto",
        p: 3,
        pb: 10,
      }}
    >
      <FamilyWorshipHeader />

      <Box
        display="flex"
        justifyContent="flex-end"
        mb={3}
      >
        <Button
          variant="outlined"
          onClick={() =>
            setHistoryOpen(true)
          }
        >
          📚 History
        </Button>
      </Box>

      <ContinueSessionCard
        session={lastSession}
        onContinue={handleContinue}
      />

      <NewSessionCard
        onCreate={handleNewSession}
      />

      <SurpriseMeCard
        onSurprise={handleSurpriseMe}
      />

      <TemplateLibrary
        templates={worshipTemplates}
        onSelect={
          handleTemplateSelected
        }
      />

      <Box sx={{ mt: 5 }}>
        <RecentSessionList
          sessions={recentSessions}
        />
      </Box>

      <TemplatePreviewDialog
        open={previewOpen}
        template={selectedTemplate}
        onClose={() => {
          setPreviewOpen(false);
          setSelectedTemplate(null);
        }}
        onUse={handleUseTemplate}
      />

      <HistoryDialog
        open={historyOpen}
        sessions={sessions}
        onClose={() =>
          setHistoryOpen(false)
        }
        onOpen={(selected) => {
          setSession(selected);
          setEditing(true);
          setHistoryOpen(false);
        }}
        onDelete={removeSession}
      />
    </Box>
  );
}
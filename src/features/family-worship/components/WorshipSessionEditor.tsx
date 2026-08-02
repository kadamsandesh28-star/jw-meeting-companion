import {
  Box,
  Button,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  copyFamilyWorship,
  exportFamilyWorshipPdf,
  printFamilyWorship,
  shareFamilyWorship,
} from "../export";
import { FamilyWorshipSession } from "../models/FamilyWorshipSession";

import DiscussionQuestionsEditor from "./DiscussionQuestionsEditor";
import ExportMenu from "./ExportMenu";
import FamilyGoalsEditor from "./FamilyGoalsEditor";
import MediaAttachmentsEditor from "./MediaAttachmentsEditor";

interface Props {
  session: FamilyWorshipSession;

  onChange: (
    session: FamilyWorshipSession
  ) => void;

  onSave: (
    session: FamilyWorshipSession
  ) => void;
}

export default function WorshipSessionEditor({
  session,
  onChange,
  onSave,
}: Props) {
  function update<
    K extends keyof FamilyWorshipSession
  >(
    key: K,
    value: FamilyWorshipSession[K]
  ) {
    onChange({
      ...session,
      [key]: value,
      updatedAt: Date.now(),
    });
  }

  return (
    <Paper
      elevation={0}
      sx={{
        mt: 4,
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
      }}
    >
      <Stack spacing={4}>
        <Typography
          variant="h4"
          fontWeight={700}
        >
          Worship Session
        </Typography>

        <TextField
          label="Session Title"
          value={session.title}
          onChange={(e) =>
            update(
              "title",
              e.target.value
            )
          }
          fullWidth
        />

        <TextField
          label="Theme"
          value={session.theme}
          onChange={(e) =>
            update(
              "theme",
              e.target.value
            )
          }
          fullWidth
        />

        <TextField
          label="Bible Reading"
          value={session.bibleReading}
          onChange={(e) =>
            update(
              "bibleReading",
              e.target.value
            )
          }
          fullWidth
        />

        <Divider />

        <Typography
          variant="h6"
          fontWeight={700}
        >
          Opening
        </Typography>

        <TextField
          label="Opening Song"
          value={session.openingSong}
          onChange={(e) =>
            update(
              "openingSong",
              e.target.value
            )
          }
          fullWidth
        />

        <TextField
          label="Opening Prayer"
          value={session.openingPrayer}
          onChange={(e) =>
            update(
              "openingPrayer",
              e.target.value
            )
          }
          fullWidth
        />

        <Divider />

        <DiscussionQuestionsEditor
          value={
            session.discussionQuestions
          }
          onChange={(questions) =>
            update(
              "discussionQuestions",
              questions
            )
          }
        />

        <Divider />

        <MediaAttachmentsEditor
          value={session.media}
          onChange={(media) =>
            update(
              "media",
              media
            )
          }
        />

        <Divider />

        <Typography
          variant="h6"
          fontWeight={700}
        >
          Notes
        </Typography>

        <TextField
          multiline
          rows={6}
          value={session.notes}
          onChange={(e) =>
            update(
              "notes",
              e.target.value
            )
          }
          fullWidth
        />

        <Divider />

        <FamilyGoalsEditor
          value={session.goals}
          onChange={(goals) =>
            update(
              "goals",
              goals
            )
          }
        />

        <Divider />

        <Typography
          variant="h6"
          fontWeight={700}
        >
          Closing
        </Typography>

        <TextField
          label="Closing Song"
          value={session.closingSong}
          onChange={(e) =>
            update(
              "closingSong",
              e.target.value
            )
          }
          fullWidth
        />

        <TextField
          label="Closing Prayer"
          value={session.closingPrayer}
          onChange={(e) =>
            update(
              "closingPrayer",
              e.target.value
            )
          }
          fullWidth
        />

        <Divider />

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <ExportMenu
            onPdf={() =>
              exportFamilyWorshipPdf(
                session
              )
            }
            onPrint={() =>
              printFamilyWorship(
                session
              )
            }
            onCopy={() =>
              copyFamilyWorship(
                session
              )
            }
            onShare={() =>
              shareFamilyWorship(
                session
              )
            }
          />

          <Button
            variant="contained"
            size="large"
            onClick={() =>
              onSave(session)
            }
          >
            💾 Save Session
          </Button>
        </Box>
      </Stack>
    </Paper>
  );
}
import { Paper } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function SectionCard({
  children,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 4,
        border: 1,
        borderColor: "divider",
        mb: 4,
      }}
    >
      {children}
    </Paper>
  );
}
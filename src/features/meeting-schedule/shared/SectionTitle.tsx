import { Typography } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export default function SectionTitle({
  children,
}: Props) {
  return (
    <Typography
      variant="h5"
      fontWeight={700}
      color="success.main"
    >
      {children}
    </Typography>
  );
}
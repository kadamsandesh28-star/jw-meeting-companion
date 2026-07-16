import { Card, CardProps } from "@mui/material";

interface DashboardCardProps extends CardProps {
  children: React.ReactNode;
}

export default function DashboardCard({
  children,
  sx,
  ...props
}: DashboardCardProps) {
  return (
    <Card
      {...props}
      sx={{
        borderRadius: 5,
        boxShadow: 2,
        mb: 4,
        transition: "0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
        ...sx,
      }}
    >
      {children}
    </Card>
  );
}
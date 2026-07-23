import { ReactNode } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export interface DataTableColumn<T> {
  /** Unique column key */
  id: keyof T | string;

  /** Column heading */
  label: string;

  /** Alignment */
  align?: "left" | "center" | "right";

  /** Fixed width */
  width?: number | string;

  /** Optional custom cell renderer */
  render?: (row: T) => ReactNode;
}

export interface DataTableProps<T> {
  /** Table columns */
  columns: DataTableColumn<T>[];

  /** Row data */
  rows: T[];

  /** Row key selector */
  getRowKey: (row: T) => string | number;

  /** Message when there are no rows */
  emptyMessage?: string;

  /** Called when a row is clicked */
  onRowClick?: (row: T) => void;
}

export default function DataTable<T>({
  columns,
  rows,
  getRowKey,
  emptyMessage = "No data available.",
  onRowClick,
}: DataTableProps<T>) {
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id.toString()}
                align={column.align}
                sx={{
                  width: column.width,
                  fontWeight: 700,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                align="center"
              >
                <Typography
                  color="text.secondary"
                  py={3}
                >
                  {emptyMessage}
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row) => (
              <TableRow
                key={getRowKey(row)}
                hover={!!onRowClick}
                onClick={() => onRowClick?.(row)}
                sx={{
                  cursor: onRowClick ? "pointer" : "default",
                }}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.id.toString()}
                    align={column.align}
                  >
                    {column.render
                      ? column.render(row)
                      : String(
                          row[column.id as keyof T] ?? ""
                        )}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
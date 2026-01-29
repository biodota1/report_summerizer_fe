import { ColumnDef } from "@tanstack/react-table";
import { Report } from "./types";

export const reportColumns = (): ColumnDef<Report>[] => [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "customer_name",
    header: "Customer Name",
  },
  {
    accessorKey: "account_name",
    header: "Account No.",
  },

  {
    accessorKey: "service_type",
    header: "Service Type",
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "retention_strategy",
    header: "Retention Strategy",
  },
  {
    accessorKey: "offer_made",
    header: "Offer Made",
  },
  {
    accessorKey: "call_outcome",
    header: "Call Outcome",
  },
  {
    accessorKey: "supervisor_id",
    header: "Supervisor ID",
  },
  {
    accessorKey: "team_id",
    header: "Team ID",
  },
  {
    accessorKey: "submitted_by",
    header: "Submitted By",
  },

  {
    accessorKey: "submitted_at",
    header: "Submitted At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("submitted_at"));
      return date.toLocaleDateString();
    },
  },
];

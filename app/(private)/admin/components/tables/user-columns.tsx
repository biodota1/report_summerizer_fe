import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { User } from "./types";
import { StatusDropdown } from "../ui/statusdropdown";
import { RoleDropDown } from "../ui/roledropdown";

export const userColumns = (
  onDelete: (id: number) => void,
): ColumnDef<User>[] => [
  { accessorKey: "id", header: "ID" },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },

  {
    accessorKey: "team",
    header: "Team",
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <RoleDropDown
          value={user.role}
          onChange={(newStatus) => {
            // Call backend here
            console.log("Change status:", user.id, newStatus);
          }}
        />
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <StatusDropdown
          value={user.status}
          onChange={(newStatus) => {
            // Call backend here
            console.log("Change status:", user.id, newStatus);
          }}
        />
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("created_at"));
      return date.toLocaleDateString();
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="flex gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => alert(`Viewing ${user.name}`)}
          >
            View
          </Button>
          <Button
            size="sm"
            variant="destructive"
            onClick={() => onDelete(user.id)}
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];

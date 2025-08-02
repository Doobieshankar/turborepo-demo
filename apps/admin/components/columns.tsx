/* // columns.ts

import { Drone } from "./data";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

export const columns = (
  handleEdit: (drone: Drone) => void,
  handleDelete: (droneId: string) => void
): ColumnDef<Drone>[] => [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const drone = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onSelect={() => handleEdit(drone)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onSelect={() => handleDelete(drone.id)}
              className="text-red-600"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
 */

// columns.ts
import { useState } from "react";
import { Drone } from "./data";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { DeleteDroneDialog } from "./delete-drone-dialog"; // Make sure path is correct

export const columns = (
  handleEdit: (drone: Drone) => void,
  handleDelete: (droneId: string) => void,
  handleView: (drone: Drone) => void
): ColumnDef<Drone>[] => [
  {
    accessorKey: "name",
    header: "Name",
    enableSorting: true,
  },
  {
    accessorKey: "type",
    header: "Type",
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    enableSorting: true,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const drone = row.original;
      const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onSelect={() => handleView(drone)}>
                View
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => handleEdit(drone)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => setDeleteDialogOpen(true)}
                className="text-red-600"
              >
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DeleteDroneDialog
            open={deleteDialogOpen}
            onOpenChange={setDeleteDialogOpen}
            drone={drone}
            onDelete={() => handleDelete(drone.id)}
          />
        </>
      );
    },
  },
];

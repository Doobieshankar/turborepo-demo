/* "use client";

import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Drone, droneData } from "./data";
import { columns as getColumns } from "./columns";
import { EditDroneDialog } from "./edit-drone-dialog";

export function DroneTable() {
  const [globalFilter, setGlobalFilter] = useState("");
  const [editingDrone, setEditingDrone] = useState<Drone | null>(null);

  const columns: ColumnDef<Drone>[] = getColumns((drone) =>
    setEditingDrone(drone)
  );

  const table = useReactTable({
    data: droneData,
    columns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Drone Management</h2>
        <Input
          placeholder="Search drones..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="max-w-sm"
        />
      </div>

      <div className="rounded-md border">
        <table className="w-full table-auto text-sm">
          <thead className="bg-muted">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-4 py-2 text-left font-medium"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="border-t">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingDrone && (
        <EditDroneDialog
          drone={editingDrone}
          open={true}
          onOpenChange={(open) => {
            if (!open) setEditingDrone(null);
          }}
        />
      )}
    </div>
  );
}
 */

// drone-table.tsx

"use client";

import { useState } from "react";
import { columns as droneColumns } from "./columns";
import { droneData, Drone } from "./data";
import { DataTable } from "@/components/ui/data-table";
import { EditDroneDialog } from "./edit-drone-dialog";
import { toast } from "sonner";
import { DronePreviewDrawer } from "./drone-preview-drawer";

export function DroneTable() {
  const [drones, setDrones] = useState(droneData);
  const [editingDrone, setEditingDrone] = useState<Drone | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);

  const handleView = (drone: Drone) => {
    setSelectedDrone(drone);
    setDrawerOpen(true);
  };

  const handleEdit = (drone: Drone) => {
    setEditingDrone(drone);
    setDialogOpen(true);
    toast.success("Drone updated successfully");
  };

  const handleDelete = (droneId: string) => {
    setDrones((prev) => prev.filter((d) => d.id !== droneId));
    toast.success("Drone deleted successfully");
  };

  return (
    <>
      <DataTable
        columns={droneColumns(handleEdit, handleDelete, handleView)}
        data={drones}
      />
      {editingDrone && (
        <EditDroneDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          drone={editingDrone}
        />
      )}
      {/* 👉 Add this at the bottom of your JSX */}
      <DronePreviewDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        drone={selectedDrone}
      />
    </>
  );
}

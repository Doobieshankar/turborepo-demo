/* 

// drone-table.tsx

"use client";

import { useState, useEffect } from "react";
import { columns as droneColumns } from "./columns";
import { Drone } from "@prisma/client";
import { DataTable } from "@/components/ui/data-table";
import { EditDroneDialog } from "./edit-drone-dialog";
import { toast } from "sonner";
import { DronePreviewDrawer } from "./drone-preview-drawer";

export function DroneTable() {
  const [drones, setDrones] = useState<Drone[]>([]);
  const [editingDrone, setEditingDrone] = useState<Drone | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedDrone, setSelectedDrone] = useState<Drone | null>(null);

  const handleView = (
    drone: Pick<Drone, "id" | "name" | "type" | "status" | "createdAt">
  ) => {
    setSelectedDrone(drone);
    setDrawerOpen(true);
  };

  const handleEdit = (
    drone: Pick<Drone, "id" | "name" | "type" | "status" | "createdAt">
  ) => {
    setEditingDrone(drone);
    setDialogOpen(true);
    toast.success("Drone updated successfully"); // This toast may be better after a successful PUT call
  };

  const handleDelete = (droneId: string) => {
    setDrones((prev) => prev.filter((d) => d.id !== droneId));
    toast.success("Drone deleted successfully"); // Same here — better after DELETE call
  };

  useEffect(() => {
    fetch("/api/drones")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(setDrones)
      .catch(() => toast.error("Failed to fetch drones"));
  }, []); // ✅ Only run once on mount

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

      <DronePreviewDrawer
        open={drawerOpen}
        onOpenChange={setDrawerOpen}
        drone={selectedDrone}
      />
    </>
  );
}
 */
// drone-table.tsx

"use client";

import { useState, useEffect } from "react";
import { columns as droneColumns } from "./columns";
import { Drone } from "@prisma/client";
import { DataTable } from "@/components/ui/data-table";
import { EditDroneDialog } from "./edit-drone-dialog";
import { toast } from "sonner";
import { DronePreviewDrawer } from "./drone-preview-drawer";

export function DroneTable() {
  const [drones, setDrones] = useState<Drone[]>([]);
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
    // toast.success("Drone updated successfully"); // ✅ Move this after successful PUT later
  };

  const handleEditSubmit = async (updatedDrone: Drone) => {
    try {
      console.log("Updated Drone:", updatedDrone);
      const res = await fetch(`/api/drones/${updatedDrone.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedDrone),
      });

      if (!res.ok) throw new Error("Failed to update");

      const newDrone = await res.json();

      setDrones((prev) =>
        prev.map((d) => (d.id === newDrone.id ? newDrone : d))
      );

      toast.success("Drone updated successfully");
      setDialogOpen(false);
    } catch {
      toast.error("Failed to update drone");
    }
  };

  /* const handleDelete = (droneId: string) => {
    // TODO: Make API DELETE call here
    setDrones((prev) => prev.filter((d) => d.id !== droneId));
    toast.success("Drone deleted successfully");
  }; */

  const handleDelete = async (droneId: string) => {
    try {
      const res = await fetch(`/api/drones/${droneId}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Failed to delete");

      setDrones((prev) => prev.filter((d) => d.id !== droneId));
      toast.success("Drone deleted successfully");
    } catch {
      toast.error("Failed to delete drone");
    }
  };

  useEffect(() => {
    const fetchDrones = async () => {
      try {
        const res = await fetch("/api/drones");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: Drone[] = await res.json();
        setDrones(data);
      } catch {
        toast.error("Failed to fetch drones");
      }
    };

    fetchDrones();
  }, []);

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
          onSubmit={handleEditSubmit}
        />
      )}

      {selectedDrone && (
        <DronePreviewDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          drone={selectedDrone}
        />
      )}
    </>
  );
}

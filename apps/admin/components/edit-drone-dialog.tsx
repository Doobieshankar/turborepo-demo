/* // edit-drone-dialog.tsx

import { Drone } from "./data";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drone: Drone;
};

export function EditDroneDialog({ open, onOpenChange, drone }: Props) {
  const [name, setName] = useState(drone.name);
  const [type, setType] = useState(drone.type);
  const [status, setStatus] = useState(drone.status);

  useEffect(() => {
    setName(drone.name);
    setType(drone.type);
    setStatus(drone.status);
  }, [drone]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Drone</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Drone Name"
          />
          <Input
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Drone Type"
          />
          <Input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Drone Status"
          />
        </div>

        <DialogFooter className="mt-4">
          <Button
            onClick={() => {
              console.log("Updated Drone:", { ...drone, name, type, status });
              onOpenChange(false);
            }}
          >
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
 */
"use client";

import { Drone } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

type EditDroneDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drone: Drone;
  onSubmit: (updatedDrone: Drone) => void;
};

export function EditDroneDialog({
  open,
  onOpenChange,
  drone,
  onSubmit,
}: EditDroneDialogProps) {
  const [name, setName] = useState(drone.name);
  const [type, setType] = useState(drone.type);
  const [status, setStatus] = useState(drone.status);

  // when `drone` prop changes, update local form state
  useEffect(() => {
    setName(drone.name);
    setType(drone.type);
    setStatus(drone.status);
  }, [drone]);

  const handleSave = () => {
    onSubmit({
      ...drone,
      name,
      type,
      status,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Drone</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="Type"
          />
          <Input
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Status"
          />
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

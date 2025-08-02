// edit-drone-dialog.tsx

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

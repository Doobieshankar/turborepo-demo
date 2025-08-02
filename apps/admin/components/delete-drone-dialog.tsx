"use client";

import { Drone } from "./data";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface DeleteDroneDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drone: Drone;
  onDelete: () => void;
}

export const DeleteDroneDialog: React.FC<DeleteDroneDialogProps> = ({
  open,
  onOpenChange,
  drone,
  onDelete,
}) => {
  // Optional: close dialog after delete
  const handleConfirm = () => {
    onDelete();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Drone</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          Are you sure you want to delete <strong>{drone.name}</strong>?
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={handleConfirm}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

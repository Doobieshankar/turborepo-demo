/* "use client";

import { Drone } from "@prisma/client";
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
 */
"use client";

import { Drone } from "@prisma/client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DeleteDroneDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drone: Drone;
  onDelete: () => void;
}

export function DeleteDroneDialog({
  open,
  onOpenChange,
  drone,
  onDelete,
}: DeleteDroneDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Drone</DialogTitle>
        </DialogHeader>
        <p>
          Are you sure you want to delete the drone{" "}
          <strong>{drone.name}</strong>?
        </p>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

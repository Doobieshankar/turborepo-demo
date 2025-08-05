"use client";

import { Drone } from "@prisma/client";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
  DrawerFooter,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface DronePreviewDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  drone: Drone | null;
}

export const DronePreviewDrawer = ({
  open,
  onOpenChange,
  drone,
}: DronePreviewDrawerProps) => {
  if (!drone) return null;

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{drone.name}</DrawerTitle>
        </DrawerHeader>

        <div className="p-4 space-y-2 text-sm">
          <p>
            <strong>Type:</strong> {drone.type}
          </p>
          <p>
            <strong>Status:</strong> {drone.status}
          </p>
          <p>
            <strong>ID:</strong> {drone.id}
          </p>
          {/* Add more fields as needed */}
        </div>

        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

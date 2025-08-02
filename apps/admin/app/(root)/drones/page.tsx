/* // app/drones/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const drones = [
  {
    id: "DR-001",
    status: "Active",
    battery: "92%",
    location: "Sector 17",
  },
  {
    id: "DR-002",
    status: "Idle",
    battery: "67%",
    location: "Base Station",
  },
  {
    id: "DR-003",
    status: "In Mission",
    battery: "45%",
    location: "Zone A",
  },
];

export default function DronesPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>Drones Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Drone ID</TableHead>
                <TableHead className="text-white">Status</TableHead>
                <TableHead className="text-white">Battery</TableHead>
                <TableHead className="text-white">Location</TableHead>
                <TableHead className="text-white">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drones.map((drone) => (
                <TableRow key={drone.id}>
                  <TableCell>{drone.id}</TableCell>
                  <TableCell>{drone.status}</TableCell>
                  <TableCell>{drone.battery}</TableCell>
                  <TableCell>{drone.location}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm">
                        Edit
                      </Button>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
 */
"use client";

import { useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DroneTable } from "@/components/drone-table";

const drones = [
  {
    id: "DR-001",
    status: "Active",
    battery: "92%",
    location: "Sector 17",
  },
  {
    id: "DR-002",
    status: "Idle",
    battery: "67%",
    location: "Base Station",
  },
  {
    id: "DR-003",
    status: "In Mission",
    battery: "45%",
    location: "Zone A",
  },
];

export default function DronesPage() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [battery, setBattery] = useState("");

  const handleAddDrone = () => {
    if (!name || !type || !battery) {
      toast.error("Please fill all fields");
      return;
    }

    // Simulate adding a drone
    toast.success(`Drone "${name}" added successfully`);
    setOpen(false);

    // Reset fields
    setName("");
    setType("");
    setBattery("");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Drone List</h2>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="default">➕ Add Drone</Button>
          </DialogTrigger>

          <DialogContent className="bg-gray-900 border-gray-700 text-white">
            <DialogHeader>
              <DialogTitle>Add New Drone</DialogTitle>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <Label>Drone Name</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-800 text-white"
                />
              </div>
              <div>
                <Label>Drone Type</Label>
                <Input
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="bg-gray-800 text-white"
                />
              </div>
              <div>
                <Label>Battery (%)</Label>
                <Input
                  value={battery}
                  onChange={(e) => setBattery(e.target.value)}
                  type="number"
                  className="bg-gray-800 text-white"
                />
              </div>

              <Button onClick={handleAddDrone} className="w-full mt-4">
                Save Drone
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Below this, show your drone table or dummy grid */}
      <div className="space-y-6">
        <Card className="bg-gray-900 border-gray-800 text-white">
          <CardHeader>
            <CardTitle>Drones Management</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Drone ID</TableHead>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Battery</TableHead>
                  <TableHead className="text-white">Location</TableHead>
                  <TableHead className="text-white">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drones.map((drone) => (
                  <TableRow key={drone.id}>
                    <TableCell>{drone.id}</TableCell>
                    <TableCell>{drone.status}</TableCell>
                    <TableCell>{drone.battery}</TableCell>
                    <TableCell>{drone.location}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm">
                          Edit
                        </Button>
                        <Button variant="destructive" size="sm">
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      <DroneTable />
    </div>
  );
}

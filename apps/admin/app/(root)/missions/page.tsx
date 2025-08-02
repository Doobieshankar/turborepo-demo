// app/missions/page.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const missions = [
  {
    id: "MS-1001",
    drone: "DR-001",
    date: "2025-07-30",
    duration: "25 min",
    status: "Completed",
  },
  {
    id: "MS-1002",
    drone: "DR-003",
    date: "2025-07-29",
    duration: "15 min",
    status: "In Progress",
  },
  {
    id: "MS-1003",
    drone: "DR-002",
    date: "2025-07-28",
    duration: "Cancelled",
    status: "Aborted",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Completed":
      return "bg-green-600";
    case "In Progress":
      return "bg-yellow-600";
    case "Aborted":
      return "bg-red-600";
    default:
      return "bg-gray-500";
  }
}

export default function MissionsPage() {
  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800 text-white">
        <CardHeader>
          <CardTitle>Mission Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-white">Mission ID</TableHead>
                <TableHead className="text-white">Drone</TableHead>
                <TableHead className="text-white">Date</TableHead>
                <TableHead className="text-white">Duration</TableHead>
                <TableHead className="text-white">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {missions.map((m) => (
                <TableRow key={m.id}>
                  <TableCell>{m.id}</TableCell>
                  <TableCell>{m.drone}</TableCell>
                  <TableCell>{m.date}</TableCell>
                  <TableCell>{m.duration}</TableCell>
                  <TableCell>
                    <Badge className={`${getStatusColor(m.status)} text-white`}>
                      {m.status}
                    </Badge>
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

// data.ts

export type Drone = {
  id: string;
  name: string;
  type: string;
  status: string; // You can later restrict to specific strings if needed
  createdAt?: string;
};

export const droneData: Drone[] = [
  {
    id: "1",
    name: "Falcon X1",
    type: "Surveillance",
    status: "Active",
  },
  {
    id: "2",
    name: "Wasp R3",
    type: "Combat",
    status: "Maintenance",
  },
  {
    id: "3",
    name: "Owl S2",
    type: "Recon",
    status: "Idle",
  },
  {
    id: "4",
    name: "Hornet M4",
    type: "Interceptor",
    status: "Active",
  },
];

/* // app/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome, Admin</h2>
      <p className="text-gray-400">
        This is your dashboard with dummy stats and UI layout.
      </p>
    </div>
  );
}
 */

// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart3,
  ShieldCheck,
  AlertTriangle,
  TimerReset,
} from "lucide-react";

const stats = [
  {
    title: "Total Drones",
    value: "12",
    icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
  },
  {
    title: "Active Missions",
    value: "3",
    icon: <ShieldCheck className="w-5 h-5 text-green-400" />,
  },
  {
    title: "System Alerts",
    value: "1",
    icon: <AlertTriangle className="w-5 h-5 text-yellow-400" />,
  },
  {
    title: "Uptime",
    value: "98.6%",
    icon: <TimerReset className="w-5 h-5 text-purple-400" />,
  },
];

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card
            key={stat.title}
            className="bg-gray-900 border-gray-800 text-white"
          >
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">
                {stat.title}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

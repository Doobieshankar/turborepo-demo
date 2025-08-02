// components/Sidebar.tsx
"use client";

import { Home, Shield, FileText, Settings } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Dashboard", icon: <Home size={18} />, href: "/" },
  { label: "Drones", icon: <Shield size={18} />, href: "/drones" },
  { label: "Missions", icon: <FileText size={18} />, href: "/missions" },
  { label: "Settings", icon: <Settings size={18} />, href: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-900 border-r border-gray-800 flex flex-col p-4">
      <h1 className="text-xl font-bold text-white mb-6">DroneX Admin</h1>
      <nav className="space-y-2">
        {navItems.map(({ label, icon, href }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center gap-3 text-gray-300 hover:text-white px-3 py-2 rounded-md hover:bg-gray-800 transition"
          >
            {icon}
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

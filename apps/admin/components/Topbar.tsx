// components/Topbar.tsx
"use client";

import { useUser } from "./DummyUserContext";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Topbar() {
  const user = useUser();

  return (
    <header className="w-full h-16 bg-gray-900 border-b border-gray-800 flex items-center justify-between px-6">
      <div className="text-lg font-semibold text-white">Dashboard</div>
      <div className="flex items-center gap-3">
        <span className="text-gray-300">{user.name}</span>
        <Avatar>
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}

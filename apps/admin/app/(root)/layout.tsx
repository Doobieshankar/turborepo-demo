// app/layout.tsx
import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import { DummyUserProvider } from "@/components/DummyUserContext";
/* import "@/styles/globals.css"; */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DummyUserProvider>
      <div className="flex h-screen bg-black text-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
    </DummyUserProvider>
  );
}

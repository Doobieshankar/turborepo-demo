// components/DummyUserContext.tsx
"use client";

import { createContext, useContext } from "react";

const DummyUserContext = createContext({ name: "Admin", role: "superuser" });

export const useUser = () => useContext(DummyUserContext);

export function DummyUserProvider({ children }: { children: React.ReactNode }) {
  const dummyUser = { name: "Admin", role: "superuser" };

  return (
    <DummyUserContext.Provider value={dummyUser}>
      {children}
    </DummyUserContext.Provider>
  );
}

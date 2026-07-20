import { ReactNode } from "react";

import AppHeader from "./AppHeader";
import BottomNav from "./BottomNav";

interface Props {
  children: ReactNode;
}

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <AppHeader />

      <main className="pb-24">
        {children}
      </main>

      <BottomNav />
    </div>
  );
}
import { AppSidebar } from "./app-siderbar";
import { SidebarInset, SidebarProvider } from "./ui/sidebar";
import { useState } from "react";
import { TABS } from "@/lib/tabs";
import { ChevronDownIcon, LogOutIcon } from "lucide-react";
import { Button } from "./ui/button";

export function App() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["value"]>(
    TABS[0].value
  );

  const ActiveTab = TABS.find((tab) => tab.value === activeTab)!.component;

  return (
    <SidebarProvider>
      <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarInset>
        <header className="bg-sidebar sticky top-0 z-50 flex items-center justify-between px-6 py-3">
          <span className="font-bold text-lg">Egyptian National Railways</span>

          <div className="flex items-center gap-4 text-sm">
            <Button variant="ghost" size="sm">
              Mahmoud Ahmed
              <LogOutIcon />
            </Button>

            <Button variant="ghost" size="sm">
              EN <ChevronDownIcon />
            </Button>
          </div>
        </header>

        <main className="flex-1">
          <ActiveTab />
        </main>

        <footer className="border-t text-muted-foreground px-16 py-4 flex justify-between items-center text-xs">
          <p>&copy; 2025 Egyptian National Railways. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Powered by BPC Group</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}

import { AppSidebar } from "./app-siderbar";
import { SidebarInset, SidebarProvider, useSidebar } from "./ui/sidebar";
import { useState } from "react";
import { TABS } from "@/lib/tabs";
import {
  AlertCircleIcon,
  ChevronDownIcon,
  LogOutIcon,
  MenuIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useIsMobile } from "@/hooks/use-mobile";

export function App() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["value"]>(
    TABS[0].value
  );

  const ActiveTab = TABS.find((tab) => tab.value === activeTab)!.component;

  return (
    <SidebarProvider>
      <AppSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <SidebarInset>
        <header className="bg-sidebar sticky top-0 z-50 flex items-center justify-between px-6 py-3">
          <span className="font-bold text-lg">
            {isMobile ? "ENR" : "Egyptian National Railways"}
          </span>

          <div className="flex items-center gap-4 text-sm">
            {isMobile && <ToggleSidebarButton />}

            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Mahmoud Ahmed
              <LogOutIcon />
            </Button>

            <Button variant="ghost" size="sm" className="hidden lg:inline-flex">
              EN <ChevronDownIcon />
            </Button>
          </div>
        </header>

        <div className="max-w-2xl self-center mt-8 mb-12 px-4">
          <Alert variant="destructive">
            <AlertCircleIcon className="h-4 w-4" />
            <AlertTitle>Ticket Reservation Policy</AlertTitle>
            <AlertDescription>
              Online reservation is currently available for Egyptian nationality
              only. Ticket prices do not include additional services.
            </AlertDescription>
          </Alert>
        </div>

        <main className="flex-1 mb-20 px-4">
          <ActiveTab />
        </main>

        <footer className="border-t text-muted-foreground px-16 py-4 flex justify-between items-center text-xs flex-col md:flex-row text-center">
          <p>&copy; 2025 Egyptian National Railways. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Powered by BPC Group</p>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}

function ToggleSidebarButton() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="md:hidden"
      onClick={toggleSidebar}
    >
      <MenuIcon />
    </Button>
  );
}

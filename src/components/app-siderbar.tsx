"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Logo } from "./logo";
import { TABS } from "@/lib/tabs";
import { cn } from "@/lib/utils";

export function AppSidebar({
  activeTab,
  setActiveTab,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  activeTab: (typeof TABS)[number]["value"];
  setActiveTab: (value: (typeof TABS)[number]["value"]) => void;
}) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mb-4">
        <Logo className="cursor-pointer" />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {TABS.map((item) => (
              <SidebarMenuItem key={item.title} className="text-lg font-medium">
                <SidebarMenuButton
                  tooltip={item.title}
                  className={cn(
                    "cursor-pointer",
                    activeTab === item.value
                      ? "bg-sidebar-accent text-sidebar-accent-foreground"
                      : ""
                  )}
                  onClick={() => setActiveTab(item.value)}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

"use client";

import type { ComponentType } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  CreditCard,
  LifeBuoy,
  Bell,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface AdminNavigationItem {
  title: string;
  url: string;
  icon: ComponentType<{ className?: string }>;
}

interface AdminNavigationGroup {
  label: string;
  items: AdminNavigationItem[];
}

const adminNavigationGroups: AdminNavigationGroup[] = [
  {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: LayoutDashboard,
      },
      {
        title: "Notifications",
        url: "/admin/notifications",
        icon: Bell,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        title: "Subscribers",
        url: "/admin/subscribers",
        icon: Users,
      },
      {
        title: "Add Subscriber",
        url: "/admin/add-subscriber",
        icon: CreditCard,
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        title: "Support Requests",
        url: "/admin/support",
        icon: LifeBuoy,
      },
    ],
  },
];

export function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader className="border-b-1 border-gray-300">
        <div className="flex items-center gap-3 rounded-md py-2">
          {/* Logo */}
          <div 
            className="flex shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground cursor-pointer" 
            onClick={() => router.replace("/")}>
              <img
                src="/logo.jpeg"
                alt="Company Logo"
                className="h-10 w-auto"
              />
          </div>

          {/* Company */}
          <div className="min-w-0 flex-1 group-data-[collapsible=icon]:hidden">
            <p className="truncate text-sm font-semibold">
              TIMEST
            </p>

            <p className="truncate text-xs text-muted-foreground">
              Admin
            </p>
          </div>
        </div>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        {adminNavigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>
              {group.label}
            </SidebarGroupLabel>

            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const isActive =
                    item.url === "/admin/dashboard"
                      ? pathname === item.url
                      : pathname === item.url ||
                        pathname.startsWith(`${item.url}/`);

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={isActive}
                        tooltip={item.title}
                      >
                        <Link href={item.url} className="flex items-center gap-2">
                          <item.icon className="text-wood-primary" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <div className="rounded-lg border-b-3 border-[#b87333] bg-sidebar-accent p-3 group-data-[collapsible=icon]:hidden">
          <p className="text-xs font-medium">
            Admin Workspace
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            Manage subscribers, subscriptions, and support.
          </p>
        </div>

        <p className="ml-2 text-[10px] text-muted-foreground group-data-[collapsible=icon]:hidden">
          © 2026 Timest. All rights reserved
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}

export default AdminSidebar;
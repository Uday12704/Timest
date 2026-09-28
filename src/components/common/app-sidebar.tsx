"use client";

import {
  Bell,
  Calculator,
  ClipboardCheck,
  FileText,
  History,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  Users,
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
  SidebarSeparator,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { calculateSubscriptionStatus, getSubscription } from "@/features/subscription/subscription-storage";
import { useAuth } from "@/features/auth/auth-context";
import { formatDate } from "@/lib/formatters";
import { Badge } from "../ui/badge";

interface NavigationItem {
  title: string;
  url?: string;
  icon: React.ComponentType<{
    className?: string;
  }>;
  action?: "calculator";
}

interface NavigationGroup {
  label: string;
  items: NavigationItem[];
}

const navigationGroups: NavigationGroup[] = [
  {
    label: "Main",
    items: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    label: "Estimates",
    items: [
      {
        title: "New Estimate",
        url: "/estimates/new",
        icon: FileText,
      },
      {
        title: "History",
        url: "/estimates/history",
        icon: History,
      },
    ],
  },

  {
    label: "Management",
    items: [
      {
        title: "Customers",
        url: "/customers",
        icon: Users,
      },
      {
        title: "Delivery Checklist",
        url: "/delivery-checklist",
        icon: ClipboardCheck,
      },
    ],
  },

  {
    label: "Tools",
    items: [
      {
        title: "Quick Calculator",
        icon: Calculator,
        action: "calculator",
      },
    ],
  },

  {
    label: "System",
    items: [
      {
        title: "Notifications",
        url: "/notifications",
        icon: Bell,
      },
      {
        title: "Settings",
        url: "/settings",
        icon: Settings,
      },
      {
        title: "Customer Support",
        url: "/support",
        icon: LifeBuoy,
      },
    ],
  },
];

interface AppSidebarProps {
  onCalculatorOpen: () => void;
}

export function AppSidebar({
  onCalculatorOpen,
}: AppSidebarProps) {
  
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  if(!user){
    return;
  }

  const subscription =
    getSubscription(user.accountId);

  if (!subscription) {
    return null;
  }

  const subscriptionStatus =
    calculateSubscriptionStatus(
      subscription.expiryDate,
    );

  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader className="border-b-1 border-gray-300">
        <div className="flex items-center gap-3 py-2">
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

                <Badge className={`truncate text-xs bg-sidebar-accent ${subscription.planName === "Pro" ? "text-gray-500" : subscription.planName === "Premium" ? "text-yellow-500" : "text-blue-500"}`}>
                  {subscription.planName}
                </Badge>
            </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Navigation */}
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>
              {group.label}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    {item.action === "calculator" ? (
                      <SidebarMenuButton
                        tooltip={item.title}
                        onClick={onCalculatorOpen}
                        className="cursor-pointer"
                      >
                        <item.icon className="text-wood-primary" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    ) : (
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={pathname === item.url}
                      >
                        <Link
                          href={item.url ?? "#"}
                          className="flex items-center gap-2"
                        >
                          <item.icon className="text-wood-primary" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        {/* FOOTER */}
        {/* Subscription */}
        <div className="rounded-lg border-b-4 border-[#b87333] bg-sidebar-accent p-3 group-data-[collapsible=icon]:hidden">

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium">
              Subscription
            </span>

            <Badge variant={subscriptionStatus === "active" ? "success" : subscriptionStatus === "expiring" ? "warning" : "destructive"}>
              {subscriptionStatus}
            </Badge>
          </div>

          <p className="mt-1 text-xs text-muted-foreground">
            Expires on {formatDate(subscription.expiryDate)}
          </p>
        </div>
        <p className="ml-2 text-[10px] text-muted-foreground group-data-[collapsible=icon]:hidden">© 2026 Timest. All rights reserved.</p>
      </SidebarFooter>
    </Sidebar>
  );
}
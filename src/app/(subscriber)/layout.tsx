"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import CalculatorDrawer from "@/components/calculator/calculatorDrawer";
import { AppSidebar } from "@/components/common/app-sidebar";
import { AppNavbar } from "@/components/common/app-navbar";
import { SubscriptionExpiryGuard } from "@/features/subscription/components/subscription-expiry-guard";
import { ProtectedRoute } from "@/features/auth/protected-route";
import { RoleRoute } from "@/features/auth/role-route";

interface SubscriberLayoutProps {
  children: ReactNode;
}

export default function SubscriberLayout({
  children,
}: SubscriberLayoutProps) {
  const [calculatorOpen, setCalculatorOpen] =
    useState(false);

  const handleCalculatorOpen = () => {
    setCalculatorOpen(true);
  };

  return (
    <ProtectedRoute>
      <RoleRoute allowedRoles={["SUBSCRIBER"]}>
        <SidebarProvider>
          <AppSidebar onCalculatorOpen={handleCalculatorOpen} />

          <SidebarInset>
            <AppNavbar onCalculatorOpen={handleCalculatorOpen} />

            <SubscriptionExpiryGuard>
              <main className="flex-1 p-4 md:p-6">
                {children}
              </main>
            </SubscriptionExpiryGuard>

            <CalculatorDrawer
              open={calculatorOpen}
              onOpenChange={setCalculatorOpen}
            />
          </SidebarInset>
        </SidebarProvider>
      </RoleRoute>
    </ProtectedRoute>
  );
}
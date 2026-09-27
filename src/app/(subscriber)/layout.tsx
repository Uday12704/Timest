"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/common/app-sidebar";
import { AppNavbar } from "@/components/common/app-navbar";
import CalculatorDrawer from "@/components/calculator/calculatorDrawer";

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
    <SidebarProvider>
      <AppSidebar
        onCalculatorOpen={handleCalculatorOpen}
      />

      <SidebarInset>
        <AppNavbar
          onCalculatorOpen={handleCalculatorOpen}
        />

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>

        <CalculatorDrawer
          open={calculatorOpen}
          onOpenChange={setCalculatorOpen}
        />
      </SidebarInset>
    </SidebarProvider>
  );
}
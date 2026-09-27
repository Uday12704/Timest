import type { ReactNode } from "react";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/features/admin/components/admin-sidebar";
import AdminNavbar from "@/features/admin/components/admin-navbar";

import { ProtectedRoute } from "@/features/auth/protected-route";
import { RoleRoute } from "@/features/auth/role-route";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <ProtectedRoute>
      <RoleRoute allowedRoles={["ADMIN"]}>
        <SidebarProvider>
          <AdminSidebar />

          <SidebarInset>
            <AdminNavbar />

            <main className="min-w-0 flex-1">
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </RoleRoute>
    </ProtectedRoute>
  );
}
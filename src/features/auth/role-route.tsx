"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/features/auth/auth-context";
import type { PlatformRole } from "@/features/auth/types";

interface RoleRouteProps {
  allowedRoles: PlatformRole[];
  children: React.ReactNode;
}

export function RoleRoute({
  allowedRoles,
  children,
}: RoleRouteProps) {
  const {
    user,
    isAuthenticated,
    isLoading,
  } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!isAuthenticated || !user) {
      router.replace("/login");
      return;
    }

    if (!allowedRoles.includes(user.platformRole)) {
      router.replace("/unauthorized");
    }
  }, [
    allowedRoles,
    isAuthenticated,
    isLoading,
    router,
    user,
  ]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-sm text-muted-foreground">
          Loading...
        </p>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  if (!allowedRoles.includes(user.platformRole)) {
    return null;
  }

  return <>{children}</>;
}
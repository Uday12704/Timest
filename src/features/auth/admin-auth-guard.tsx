"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/features/auth/auth-context";

interface AdminAuthGuardProps {
  children: React.ReactNode;
}

export function AdminAuthGuard({
  children,
}: AdminAuthGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!user) {
      router.replace("/login");
      return;
    }

    if (user.platformRole !== "ADMIN") {
      router.replace("/dashboard");
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return null;
  }

  if (!user || user.platformRole !== "ADMIN") {
    return null;
  }

  return <>{children}</>;
}
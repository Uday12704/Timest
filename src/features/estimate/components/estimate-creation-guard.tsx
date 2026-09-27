"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useAuth } from "@/features/auth/auth-context";
import { getEstimateUsage } from "@/features/subscription/subscription-usage-storage";
import { checkSubscriptionAccess } from "@/features/subscription/subscription-access";
import { getSubscription } from "@/features/subscription/subscription-storage";

interface EstimateCreationGuardProps {
  children: ReactNode;
}

export function EstimateCreationGuard({
  children,
}: EstimateCreationGuardProps) {
  const { user, isLoading } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  const isAdmin = user?.platformRole === "ADMIN";

  const subscription =
    user && !isAdmin
      ? getSubscription(user.accountId)
      : null;

  const usage =
    subscription && user
      ? getEstimateUsage(
          user.accountId,
          subscription.startDate,
        )
      : null;

  const access = isAdmin
    ? {
        allowed: true,
        reason: "ACTIVE" as const,
      }
    : !user
      ? {
          allowed: false,
          reason: "NO_SUBSCRIPTION" as const,
        }
      : !subscription || !usage
        ? {
            allowed: false,
            reason: "NO_SUBSCRIPTION" as const,
          }
        : checkSubscriptionAccess({
            subscription,
            estimateCount: usage.used,
            estimateLimit: usage.limit,
          });

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (isAdmin || access.allowed || !user) {
      return;
    }

    switch (access.reason) {
      case "ESTIMATE_LIMIT_REACHED":
        toast.error(
          "You have reached your estimate limit. Contact the administrator to increase your limit.",
        );
        break;

      case "EXPIRED":
        toast.error(
          "Your subscription has expired. Renew your subscription to create estimates.",
        );
        break;

      case "NO_SUBSCRIPTION":
        toast.error(
          "No subscription was found. Please contact the administrator.",
        );
        break;
    }
  }, [
    isLoading,
    isAdmin,
    access.allowed,
    access.reason,
    user,
    pathname,
  ]);

  /*
   * Auth is still restoring the session.
   * Don't redirect to login prematurely.
   */
  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">
          Loading...
        </p>
      </div>
    );
  }

  /*
   * No authenticated user.
   */
  if (!user) {
    router.replace("/login");
    return null;
  }

  /*
   * Subscription / estimate access denied.
   */
  if (!access.allowed) {
    router.replace("/dashboard");
    return null;
  }

  /*
   * Access granted.
   */
  return <>{children}</>;
}
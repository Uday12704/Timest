"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { useAuth } from "@/features/auth/auth-context";
import {
  calculateSubscriptionStatus,
  getSubscription,
} from "@/features/subscription/subscription-storage";

interface SubscriptionExpiryGuardProps {
  children: ReactNode;
}

export function SubscriptionExpiryGuard({
  children,
}: SubscriptionExpiryGuardProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  const subscription = user?.accountId
    ? getSubscription(user.accountId)
    : null;

  const isExpired =
    user?.platformRole !== "ADMIN" &&
    (!subscription ||
      calculateSubscriptionStatus(subscription.expiryDate) === "expired");

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!user?.accountId) {
      router.replace("/login");
      return;
    }

    if (user.platformRole === "ADMIN") {
      return;
    }

    if (isExpired) {
      toast.error(
        subscription
          ? "Your subscription has expired. Please renew your subscription to access this page."
          : "No active subscription was found. Please contact the administrator.",
        {
          toastId: "subscription-expired",
        },
      );

      router.replace("/dashboard");
    }
  }, [
    isLoading,
    user,
    isExpired,
    subscription,
    router,
  ]);

  if (isLoading) {
    return null;
  }

  if (!user?.accountId) {
    return null;
  }

  if (user.platformRole !== "ADMIN" && isExpired) {
    return null;
  }

  return <>{children}</>;
}
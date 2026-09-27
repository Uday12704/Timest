"use client"

import { useRouter } from "next/navigation";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LoginForm } from "../components/login-form";
import { useAuth } from "../auth-context";
import type { LoginCredentials } from "../types";
import { useEffect, useState } from "react";

export function LoginPage() {
  const {
    user,
    login,
    isAuthenticated,
    isLoading,
  } = useAuth();

  const router = useRouter();

  const [error, setError] =
    useState<string | null>(null);

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      const destination =
        user?.platformRole === "ADMIN"
          ? "/admin/dashboard"
          : "/dashboard";

      router.replace(destination);
    }
  }, [
    isAuthenticated,
    isLoading,
    user,
    router,
  ]);

  async function handleLogin(
    credentials: LoginCredentials,
  ) {
    setError(null);

    try {
      const authenticatedUser =
        await login(credentials);

      // Multiple subscriber profiles.
      // Stay on the login flow until a profile is selected.
      if (!authenticatedUser) {
        router.replace("/select-profile");
        return;
      }

      const destination =
        authenticatedUser.platformRole === "ADMIN"
          ? "/admin/dashboard"
          : "/dashboard";

      router.replace(destination);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError(
          "Unable to sign in. Please try again.",
        );
      }
    }
  }

  return (
    <Card className="w-full max-w-md shadow-sm">

      <CardHeader className="space-y-4 text-center">

        <div className="mx-auto flex items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <img src="/logo.jpeg" alt="Timest logo" className="w-25 h-15" />
        </div>

        <div>

          <CardDescription className="mt-2">
            Sign in to manage your
            estimates and orders.
          </CardDescription>
        </div>

      </CardHeader>

      <CardContent>

        <LoginForm
          onSubmit={handleLogin}
          isLoading={isLoading}
          error={error}
        />

      </CardContent>

    </Card>
  );
}
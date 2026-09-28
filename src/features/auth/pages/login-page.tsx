"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

import { LoginForm } from "../components/login-form";
import { useAuth } from "../auth-context";
import type { LoginCredentials } from "../types";

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
    <main className="min-h-screen bg-[#F7E9D5]">
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10 lg:px-8">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:items-center">
          {/* LEFT — BRAND PANEL */}
          <div className="hidden lg:block">
            <div className="max-w-xl">
              {/* Logo */}
              <button
                type="button"
                onClick={() => router.push("/")}
                className="group mb-10 flex items-center gap-3"
                aria-label="Go to Timest home page"
              >
                <img src="logo.jpeg" alt="logo" className="h-12 w-20"/>

                <span className="text-3xl font-bold tracking-tight text-[#432818]">
                  Timest
                </span>
              </button>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B87333]">
                Timber Business Management
              </p>

              <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-[#432818]">
                Smarter Estimates.
                <span className="block text-[#B87333]">
                  Simpler Business.
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-lg leading-8 text-[#432818]/65">
                Manage your timber estimates, customers, deliveries,
                and everyday business operations from one simple
                platform.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-4">
                {[
                  "Create accurate wood estimates",
                  "Manage customers and orders",
                  "Keep your business organized",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#B87333]/10">
                      <CheckCircle2 className="h-4 w-4 text-[#B87333]" />
                    </div>

                    <span className="text-sm font-medium text-[#432818]/70">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — LOGIN */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <Card className="border-[#B87333]/20 bg-white/70 shadow-xl backdrop-blur">
                <CardHeader className="space-y-4 px-7 pt-7 text-center sm:px-9 sm:pt-9">
                  {/* Logo */}
                  <button
                    type="button"
                    onClick={() => router.push("/")}
                    className="group mx-auto flex w-fit items-center justify-center rounded-2xl border border-[#B87333]/20 bg-[#F7E9D5] p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B87333]/40 hover:shadow-md"
                    aria-label="Go to Timest home page"
                  >
                    <img
                      src="/logo.jpeg"
                      alt="Timest logo"
                      className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>

                  <div>
                    <h2 className="text-2xl font-bold tracking-tight text-[#432818]">
                      Welcome back
                    </h2>

                    <CardDescription className="mt-2 text-[#432818]/55">
                      Sign in to manage your estimates and orders.
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="px-7 pb-7 sm:px-9 sm:pb-9">
                  <LoginForm
                    onSubmit={handleLogin}
                    isLoading={isLoading}
                    error={error}
                  />

                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#432818]/45">
                    <ShieldCheck className="h-4 w-4 text-[#B87333]" />
                    Your account is protected
                  </div>
                </CardContent>
              </Card>

              <p className="mt-6 text-center text-xs text-[#432818]/40">
                © {new Date().getFullYear()} Timest. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
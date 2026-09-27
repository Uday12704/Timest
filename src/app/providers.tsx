"use client";

import type { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

import { AuthProvider } from "@/features/auth/auth-context";
import { ThemeProvider } from "@/components/common/theme-provider";

import "react-toastify/dist/ReactToastify.css";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <AuthProvider>
      <ThemeProvider>
        {children}

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          theme="colored"
        />
      </ThemeProvider>
    </AuthProvider>
  );
}
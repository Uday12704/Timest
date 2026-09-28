import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({
  children,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#F7E9D5]">
      <div className="flex min-h-screen items-center justify-center px-4 py-8">
        {children}
      </div>
    </div>
  );
}
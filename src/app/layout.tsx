import type { Metadata } from "next";
import "@fontsource-variable/geist";

import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Timest",
  description: "Wood estimation and business management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
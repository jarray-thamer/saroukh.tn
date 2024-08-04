import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | Saroukh", default: "Saroukh" },
  description: "Welcome to Saroukh.tn, the best car marketplace in Tunisia",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="light" lang="en">
      <body
        className={cn(
          inter.className,
          "mx-auto w-screen h-screen max-w-screen-2xl"
        )}
      >
        {children}
      </body>
    </html>
  );
}

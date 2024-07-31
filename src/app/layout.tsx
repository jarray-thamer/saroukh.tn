import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";

import "./globals.css";

const inter = Roboto({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

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
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}

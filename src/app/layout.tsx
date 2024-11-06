import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Christmas Party",
  description: "A fun party planning app for the holidays",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}

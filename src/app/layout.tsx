import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorgilla Fernandez | Virtual Assistant",
  description:
    "Meet Jorgilla Fernandez, a virtual assistant offering thoughtful support for the details behind your business.",
  openGraph: {
    title: "Jorgilla Fernandez | Virtual Assistant",
    description: "Thoughtful virtual assistance. More ease in the everyday.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
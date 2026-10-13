import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jorgilla Fernandez | Tourism & Hospitality",
  description:
    "Meet Jorgilla Fernandez, a Tourism Management graduate with hands-on experience in hotel front office operations and guest services.",
  openGraph: {
    title: "Jorgilla Fernandez | Tourism & Hospitality",
    description: "Tourism Management graduate with hands-on experience in hotel front office operations and guest services.",
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
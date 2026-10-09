import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elaina Julia Madrid | Virtual Assistant",
  description:
    "Meet Elaina Julia Madrid, a virtual assistant offering thoughtful support for the details behind your business.",
  openGraph: {
    title: "Elaina Julia Madrid | Virtual Assistant",
    description: "Thoughtful virtual assistance. More ease in the everyday.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

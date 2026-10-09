import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elaina Julia Madrid | Virtual Assistant",
  description:
    "Thoughtful virtual assistance for the people building good things. Meet Elaina Julia Madrid, your calm, capable partner behind the scenes.",
  openGraph: {
    title: "Elaina Julia Madrid | Virtual Assistant",
    description: "A little more space to do your best work.",
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

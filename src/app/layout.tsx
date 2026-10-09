import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Elaina Julia Madrid | Virtual Assistant",
  description:
    "Virtual assistant support for inboxes, calendars, administration, and social media.",
=======
  title: "Jorgilla Fernandez | Virtual Assistant",
  description:
    "Meet Jorgilla Fernandez, a virtual assistant offering thoughtful support for the details behind your business.",
  openGraph: {
    title: "Jorgilla Fernandez | Virtual Assistant",
    description: "Thoughtful virtual assistance. More ease in the everyday.",
    type: "website",
  },
>>>>>>> fb98bd446d973010674d7624cf7779ab2fddcbc0
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> fb98bd446d973010674d7624cf7779ab2fddcbc0

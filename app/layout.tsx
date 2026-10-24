import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Naser Finance & Tasks Copilot",
  description: "Your personal income, expenses, budgets and daily tasks.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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

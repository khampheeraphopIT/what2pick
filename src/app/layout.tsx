import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "what2pick – Free Online Decision Tools",
    template: "%s | what2pick",
  },
  description:
    "Free online decision maker tools. Instantly pick yes or no, random food, names, numbers, colors and more.",
  metadataBase: new URL("https://what2pick.vercel.app"),
  verification: {
    google: "fuBCfx4V0GZ1vBD7nHKr8zqTOb4uisVhPpi0W0SXnis",
  },
  openGraph: {
    siteName: "what2pick",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body className="antialiased">
        <Navbar />
        <main className="flex flex-col items-center justify-center min-h-[calc(100dvh-3.5rem)] px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

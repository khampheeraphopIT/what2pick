import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Number Generator 1-100 – Number Picker | what2pick",
  description:
    "Generate random numbers between 1 and 100 instantly. Free random number picker tool for games, decisions, and more.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Random Number Generator 1-100 – Number Picker | what2pick",
    description:
      "Generate random numbers between 1 and 100 instantly. Free random number picker tool for games, decisions, and more.",
    url: "https://what2pick.com/random-number",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Random Number Generator 1-100 – Number Picker | what2pick",
    description:
      "Generate random numbers between 1 and 100 instantly. Free random number picker tool for games, decisions, and more.",
  },
};

export default function RandomNumberLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

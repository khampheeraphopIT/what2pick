import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yes or No Picker – Make a Decision Instantly | what2pick",
  description:
    "Can't decide? Use our yes or no picker to make instant decisions. Free random yes or no generator for quick choices and decision making.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Yes or No Picker – Make a Decision Instantly | what2pick",
    description:
      "Can't decide? Use our yes or no picker to make instant decisions. Free random yes or no generator for quick choices and decision making.",
    url: "https://what2pick.com/yes-or-no",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Yes or No Picker – Make a Decision Instantly | what2pick",
    description:
      "Can't decide? Use our yes or no picker to make instant decisions. Free random yes or no generator for quick choices and decision making.",
  },
};

export default function YesOrNoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

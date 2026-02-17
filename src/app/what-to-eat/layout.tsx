import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What should I eat today? Random food picker | what2pick",
  description:
    "Can't decide what to eat? Press a button and we'll choose for you. Explore Thai, Japanese, Korean, and more cuisines with instant meal suggestions.",
  alternates: {
    canonical: "https://what2pick.com/what-to-eat",
  },
  openGraph: {
    title: "What should I eat today? Random food picker",
    description:
      "Can't decide what to eat? Press a button and we'll choose for you. Explore cuisines with instant meal suggestions.",
    url: "https://what2pick.com/what-to-eat",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "What should I eat today? Random food picker",
    description:
      "Can't decide what to eat? Press a button and we'll choose for you.",
  },
};

export default function WhatToEatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

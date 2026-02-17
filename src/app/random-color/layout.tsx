import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Color Generator – Hex Color Picker | what2pick",
  description:
    "Generate random hex colors instantly with visual preview. Free random color generator for designers and developers.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Random Color Generator – Hex Color Picker | what2pick",
    description:
      "Generate random hex colors instantly with visual preview. Free random color generator for designers and developers.",
    url: "https://what2pick.com/random-color",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Random Color Generator – Hex Color Picker | what2pick",
    description:
      "Generate random hex colors instantly with visual preview. Free random color generator for designers and developers.",
  },
};

export default function RandomColorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

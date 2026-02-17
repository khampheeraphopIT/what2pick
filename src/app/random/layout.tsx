import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Surprise Me – Random Decision Tool | what2pick",
  description:
    "Can't decide what tool to use? We'll pick one for you randomly.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function RandomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

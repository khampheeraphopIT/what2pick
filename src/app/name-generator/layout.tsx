import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Name Generator – Random Name Ideas & Nicknames | what2pick",
  description:
    "Generate creative random names for projects, characters, usernames, and more. Free random name generator with hundreds of unique combinations.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Name Generator – Random Name Ideas & Nicknames | what2pick",
    description:
      "Generate creative random names for projects, characters, usernames, and more. Free random name generator with hundreds of unique combinations.",
    url: "https://what2pick.com/name-generator",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Name Generator – Random Name Ideas & Nicknames | what2pick",
    description:
      "Generate creative random names for projects, characters, usernames, and more. Free random name generator with hundreds of unique combinations.",
  },
};

export default function NameGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

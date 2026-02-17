import type { Metadata } from "next";
import { getCategoryBySlug, getAllCategorySlugs } from "@/data/categories";
import { getFoodsByCategory } from "@/utils/foodHelpers";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllCategorySlugs();
  return slugs.map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata(
  props: CategoryPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const { category } = params;
  const categoryData = getCategoryBySlug(category);
  const foods = getFoodsByCategory(category);

  if (!categoryData) {
    return {
      title: "Category Not Found | what2pick",
      description: "This food category could not be found.",
    };
  }

  const title = `What ${categoryData.name} food should I eat? | what2pick`;
  const description = `Can't decide what ${categoryData.name.toLowerCase()} to eat? Get instant ${categoryData.name.toLowerCase()} meal suggestions from ${foods.length}+ delicious options. Press a button and we'll choose for you.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://what2pick.com/what-to-eat/${category}`,
    },
    openGraph: {
      title: `What ${categoryData.name} food should I eat?`,
      description,
      url: `https://what2pick.com/what-to-eat/${category}`,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `What ${categoryData.name} food should I eat?`,
      description,
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

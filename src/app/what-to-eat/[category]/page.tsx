import { getFoodsByCategory } from "@/utils/foodHelpers";
import { getCategoryBySlug } from "@/data/categories";
import CategoryPicker from "@/components/CategoryPicker";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage(props: CategoryPageProps) {
  const params = await props.params;
  const { category } = params;
  const categoryData = getCategoryBySlug(category);
  const categoryFoods = getFoodsByCategory(category);

  if (!categoryData || categoryFoods.length === 0) {
    return (
      <div className="flex flex-col items-center gap-8 text-center max-w-lg w-full">
        <h1 className="text-4xl font-extrabold text-white">
          Category Not Found
        </h1>
        <p className="text-slate-400">
          This food category doesn&apos;t exist or has no items yet.
        </p>
        <a
          href="/what-to-eat"
          className="text-indigo-400 hover:text-indigo-300 underline"
        >
          ← Back to all foods
        </a>
      </div>
    );
  }

  return (
    <CategoryPicker category={categoryData} categoryFoods={categoryFoods} />
  );
}

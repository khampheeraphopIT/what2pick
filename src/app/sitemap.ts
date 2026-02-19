import { MetadataRoute } from "next";

export const dynamic = "force-static";

export const revalidate = 3600; // Revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://what2pick.vercel.app";
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/what-to-eat`, lastModified: now },
  ];

  const categories = [
    "thai",
    "japanese",
    "korean",
    "chinese",
    "italian",
    "mexican",
    "indian",
    "american",
    "healthy",
    "vegetarian",
    "spicy",
    "cheap",
    "quick-meal",
    "high-protein",
    "rice-dishes",
    "noodles",
    "street-food",
    "late-night",
    "diet",
    "comfort-food",
    "snacks",
    "breakfast",
    "dessert",
  ];

  categories.forEach((category) => {
    routes.push({
      url: `${baseUrl}/what-to-eat/${category}`,
      lastModified: now,
    });
  });

  const categoryIntentPairs: [string, string][] = [
    ["thai", "cheap"],
    ["thai", "lunch"],
    ["thai", "dinner"],
    ["thai", "late-night"],
    ["thai", "healthy"],
    ["thai", "high-protein"],
    ["thai", "no-spicy"],
    ["thai", "for-students"],
    ["japanese", "healthy"],
    ["japanese", "lunch"],
    ["japanese", "dinner"],
    ["japanese", "late-night"],
    ["japanese", "high-protein"],
    ["japanese", "for-students"],
    ["korean", "lunch"],
    ["korean", "dinner"],
    ["korean", "late-night"],
    ["korean", "for-students"],
    ["chinese", "cheap"],
    ["chinese", "lunch"],
    ["chinese", "dinner"],
    ["chinese", "late-night"],
    ["chinese", "for-students"],
    ["healthy", "lunch"],
    ["healthy", "dinner"],
    ["healthy", "high-protein"],
    ["cheap", "lunch"],
    ["cheap", "dinner"],
    ["cheap", "late-night"],
    ["cheap", "for-students"],
  ];

  categoryIntentPairs.forEach(([category, intent]) => {
    routes.push({
      url: `${baseUrl}/what-to-eat/${category}/${intent}`,
      lastModified: now,
    });
  });

  return routes;
}

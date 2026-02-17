import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/random",
        "/yes-or-no",
        "/random-number",
        "/random-color",
        "/name-generator",
        "/what-to-do",
      ],
    },
    sitemap: "https://what2pick.vercel.app/sitemap.xml",
  };
}

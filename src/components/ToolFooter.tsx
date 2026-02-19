import Link from "next/link";

interface Tool {
  href: string;
  label: string;
  emoji: string;
}

const tools: Tool[] = [
  { href: "/what-to-eat", label: "Decide food", emoji: "🍽️" },
  { href: "/yes-or-no", label: "Get an answer", emoji: "🤔" },
  { href: "/custom-list", label: "Custom list", emoji: "🎡" },
  { href: "/random-number", label: "Pick a number", emoji: "🔢" },
  { href: "/random-color", label: "Pick a color", emoji: "🎨" },
  { href: "/name-generator", label: "Generate a name", emoji: "✨" },
  { href: "/random", label: "Surprise me", emoji: "🎯" },
];

interface ToolFooterProps {
  currentPath?: string;
  title?: string;
  description?: string;
}

export default function ToolFooter({
  currentPath,
  title,
  description,
}: ToolFooterProps) {
  // Filter out current tool
  const otherTools = tools.filter((tool) => tool.href !== currentPath);

  return (
    <div className="w-full border-t border-white/10 bg-white/[0.02] mt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 pt-12">
        {(title || description) && (
          <div className="seo-content mb-12 border-b border-white/5 pb-12">
            {title && (
              <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
            )}
            {description && (
              <p className="text-slate-400 leading-relaxed">{description}</p>
            )}
          </div>
        )}

        <h2 className="text-xl font-bold text-white mb-6 text-center opacity-70">
          Try something else
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {otherTools.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex items-center gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 no-underline"
            >
              <span className="text-2xl group-hover:scale-110 transition-transform">
                {tool.emoji}
              </span>
              <span className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                {tool.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-white/5">
          <Link
            href="/"
            className="text-slate-500 hover:text-white text-sm transition-colors no-underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

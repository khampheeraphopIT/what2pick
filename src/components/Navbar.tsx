"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const tools = [
  { href: "/", label: "Home" },
  { href: "/what-to-eat", label: "Decide food" },
  { href: "/yes-or-no", label: "Get an answer" },
  { href: "/custom-list", label: "Custom list" },
  { href: "/random-number", label: "Pick a number" },
  { href: "/random-color", label: "Pick a color" },
  { href: "/name-generator", label: "Generate a name" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/[0.03] border-b border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-white hover:text-indigo-300 transition-colors no-underline"
        >
          what2pick
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {tools.map((tool) => {
            const isActive =
              tool.href === "/"
                ? pathname === "/"
                : pathname.startsWith(tool.href);

            return (
              <Link
                key={tool.href}
                href={tool.href}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  isActive
                    ? "bg-indigo-500/20 text-indigo-300"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {tool.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="4" y1="4" x2="16" y2="16" />
                <line x1="16" y1="4" x2="4" y2="16" />
              </>
            ) : (
              <>
                <line x1="3" y1="5" x2="17" y2="5" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="15" x2="17" y2="15" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.06] bg-white/[0.02] backdrop-blur-xl animate-fade-in px-4 py-2">
          {tools.map((tool) => {
            const isActive =
              tool.href === "/"
                ? pathname === "/"
                : pathname.startsWith(tool.href);

            return (
              <Link
                key={tool.href}
                href={tool.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors no-underline mb-1 ${
                  isActive
                    ? "text-indigo-300 bg-indigo-500/10"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {tool.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

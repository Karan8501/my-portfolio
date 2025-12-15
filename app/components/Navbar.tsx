import Link from "next/link";
import { navbarConfig } from "./navbar.config";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-[var(--accents-2)] bg-[var(--geist-background)]/80 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-6 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2" aria-label="Go to homepage">
            <svg
              aria-label="Vercel logomark"
              height="22"
              role="img"
              viewBox="0 0 74 64"
              className="w-auto"
            >
              <path
                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                fill="var(--geist-foreground)"
              />
            </svg>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navbarConfig.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[var(--accents-5)] hover:text-[var(--geist-foreground)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center">
             <button className="flex items-center justify-between w-full h-8 px-2 text-sm text-[var(--accents-5)] bg-[var(--accents-1)] border border-[var(--accents-2)] rounded-md hover:border-[var(--accents-5)] hover:text-[var(--geist-foreground)] transition-all min-w-[200px]">
                <span>Search documentation...</span>
                <kbd className="flex items-center justify-center h-5 px-1.5 text-[10px] font-medium text-[var(--accents-5)] bg-[var(--geist-background)] border border-[var(--accents-2)] rounded">
                  CtrlK
                </kbd>
             </button>
          </div>
          <ThemeToggle />
          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}

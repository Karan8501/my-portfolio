"use client";

import { useState } from "react";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--geist-foreground)] bg-transparent hover:bg-[var(--accents-2)] rounded-md transition-colors"
      >
        <span>{lang}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-[var(--geist-background)] border border-[var(--accents-2)] rounded-md shadow-lg py-1 z-50">
          {["EN", "ES", "FR"].map((l) => (
            <button
              key={l}
              onClick={() => {
                setLang(l);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-sm hover:bg-[var(--accents-2)] text-[var(--geist-foreground)]"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import { portfolioData } from "../data/portfolio";
import { GridBackground } from "../components/GridBackground";
import { BendingString } from "../components/BendingString";

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  const nameChars = portfolioData.personal.name.split("");

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen pt-22 pb-16 px-6 text-center lg:pt-22 lg:pb-22 overflow-hidden">
      <GridBackground />
      <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-[var(--geist-foreground)] sm:text-7xl mb-6 pb-2 relative z-10 flex flex-wrap justify-center items-end gap-0 min-h-[200px]">
        <span className="bg-clip-text text-transparent bg-gradient-to-b from-[var(--geist-foreground)] to-[var(--accents-5)] mb-16 mr-4 self-center">
          Hi, I'm
        </span>
        <div className="flex items-start h-40">
            {nameChars.map((char, index) => (
                <BendingString key={index}>
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-[var(--geist-foreground)] to-[var(--accents-5)] leading-none text-5xl sm:text-7xl select-none">
                        {char === " " ? "\u00A0" : char}
                    </span>
                </BendingString>
            ))}
        </div>
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--accents-5)] sm:text-xl">
        {portfolioData.personal.summary}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="#projects"
          className="inline-flex h-12 items-center justify-center rounded-md bg-[var(--geist-foreground)] px-8 text-sm font-medium text-[var(--geist-background)] transition-colors hover:bg-[var(--accents-7)] focus:outline-none focus:ring-2 focus:ring-[var(--accents-2)] focus:ring-offset-2"
        >
          View Projects
        </Link>
        <button
          onClick={onContactClick}
          className="inline-flex h-12 items-center justify-center rounded-md border border-[var(--accents-2)] bg-[var(--geist-background)] px-8 text-sm font-medium text-[var(--geist-foreground)] transition-colors hover:bg-[var(--accents-1)] hover:text-[var(--geist-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--accents-2)] focus:ring-offset-2 cursor-pointer"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}

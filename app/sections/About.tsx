"use client";

import { portfolioData } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Section } from "@/components/Section";
import { useTheme } from "@/providers/ThemeProvider";

export function About() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Section>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[var(--spacing-4xl)]"
      >
        {/* Left side - Creative Typography - CENTERED */}
        <div className="flex flex-col justify-center items-center gap-4 md:gap-[var(--spacing-sm)]">
          <div className="overflow-hidden">
            <h2
              className="text-[clamp(2rem,8vw,4.5rem)] font-black leading-none text-center"
              style={{
                color: 'var(--text-primary)',
                transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
                transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
              }}
            >
              CREATIVE
            </h2>
          </div>

          <div className="overflow-hidden">
            <h2
              className="text-[clamp(2rem,8vw,4.5rem)] font-black leading-none text-center"
              style={{
                color: 'var(--accent-primary)',
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transitionDelay: '0.1s',
              }}
            >
              DEVELOPER
            </h2>
          </div>
        </div>

        {/* Right side - Info blocks */}
        <div className="flex flex-col justify-center gap-6 md:gap-[var(--spacing-xl)]">
          {/* Location */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--accent-primary)' }}>
              Location
            </h3>
            <p className="text-base md:text-lg font-medium" style={{ color: 'var(--text-primary)' }}>
              Noida, India
            </p>
          </div>

          <div className="h-px" style={{ backgroundColor: 'var(--accent-primary)' }} />

          {/* Expertise */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--accent-primary)' }}>
              Expertise
            </h3>
            <p className="text-base md:text-lg font-medium break-words" style={{ color: 'var(--text-primary)' }}>
              Full-Stack Development, System Design, Cloud Architecture
            </p>
          </div>

          <div className="h-px" style={{ backgroundColor: 'var(--accent-primary)' }} />

          {/* Focus */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] mb-2" style={{ color: 'var(--accent-primary)' }}>
              Focus
            </h3>
            <p className="text-base md:text-lg font-medium break-words" style={{ color: 'var(--text-primary)' }}>
              Building scalable, high-performance web applications
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

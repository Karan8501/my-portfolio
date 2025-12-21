"use client";

import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function Section({ 
  children, 
  id,
  className = ''
}: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-8 md:py-[var(--spacing-4xl)] px-4 md:px-[var(--spacing-3xl)] mb-8 md:mb-[var(--spacing-4xl)] ${className}`}
      style={{ backgroundColor: 'var(--geist-background)' }}
    >
      <div className="max-w-[1200px] mx-auto">
        {children}
      </div>
    </section>
  );
}

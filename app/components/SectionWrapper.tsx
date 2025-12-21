"use client";

import { ReactNode, CSSProperties } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  background?: "primary" | "secondary";
}

export function SectionWrapper({ 
  children, 
  id,
  className = "",
  style = {},
  background = "primary"
}: SectionWrapperProps) {
  const bgColor = background === "secondary" ? "var(--accents-1)" : "var(--geist-background)";

  return (
    <section
      id={id}
      className={className}
      style={{
        backgroundColor: bgColor,
        padding: 'var(--spacing-3xl) var(--spacing-lg)',
        ...style,
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {children}
      </div>
    </section>
  );
}

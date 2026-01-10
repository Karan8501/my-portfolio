"use client";

import { ReactNode, CSSProperties } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  style?: CSSProperties;
  background?: "primary" | "secondary";
}

export function Section({ 
  children, 
  id,
  className = "",
  style = {},
  background = "primary"
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-10 px-6 ${background === 'secondary' ? 'bg-surface-secondary' : 'bg-background'} ${className}`}
      style={style}
    >
      <div className="max-w-[1200px] mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

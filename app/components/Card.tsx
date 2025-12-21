"use client";

import { ReactNode, CSSProperties, useState } from "react";
import { useTheme } from "../providers/ThemeProvider";

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  hoverable?: boolean;
  style?: CSSProperties;
  className?: string;
}

export function Card({ 
  children, 
  onClick, 
  hoverable = false,
  style = {},
  className = ''
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`rounded-lg p-[var(--spacing-xl)] transition-all duration-300 
        bg-[var(--surface-primary)]
        ${isHovered && hoverable ? '-translate-y-1' : 'translate-y-0'}
        ${onClick ? 'cursor-pointer' : 'cursor-default'}
        ${className}`}
      style={{
        outline: isHovered && hoverable ? '2px solid var(--card-hover-outline)' : 'none',
        ...style
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

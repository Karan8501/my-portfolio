"use client";

import { ReactNode, CSSProperties } from "react";
import { useTheme } from "../providers/ThemeProvider";

interface ChipProps {
  children: ReactNode;
  variant?: 'default' | 'purple';
  style?: CSSProperties;
  className?: string;
}

export function Chip({ 
  children, 
  variant = 'default',
  style = {},
  className = ''
}: ChipProps) {
  const variantStyles: Record<string, CSSProperties> = {
    default: {
      backgroundColor: 'var(--chip-bg)',
      color: 'var(--accent-primary)',
      border: 'none',
    },
    purple: {
      backgroundColor: '#8B5CF6',
      color: '#FFFFFF',
      border: 'none',
    },
  };

  return (
    <span
      className={className}
      style={{
        padding: 'var(--spacing-xs) var(--spacing-sm)',
        fontSize: '0.75rem',
        borderRadius: '4px',
        fontWeight: '600',
        display: 'inline-block',
        ...variantStyles[variant],
        ...style,
      }}
    >
      {children}
    </span>
  );
}

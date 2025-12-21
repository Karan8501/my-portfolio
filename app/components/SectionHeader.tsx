"use client";

import { CSSProperties } from "react";

interface SectionHeaderProps {
  title: string;
  count?: number;
  countLabel?: string;
  centered?: boolean;
  style?: CSSProperties;
}

export function SectionHeader({ 
  title, 
  count,
  countLabel = 'Items',
  centered = false,
  style = {}
}: SectionHeaderProps) {
  return (
    <div 
      style={{
        display: 'flex',
        justifyContent: centered ? 'center' : 'space-between',
        alignItems: 'flex-end',
        marginBottom: 'var(--spacing-3xl)',
        paddingBottom: 'var(--spacing-lg)',
        borderBottom: '2px solid var(--accent-primary)',
        ...style,
      }}
    >
      <h2 
        style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: '900',
          color: 'var(--text-primary)',
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      
      {count !== undefined && (
        <div 
          style={{
            fontSize: '0.875rem',
            color: 'var(--accent-primary)',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
          }}
        >
          {count} {countLabel}
        </div>
      )}
    </div>
  );
}

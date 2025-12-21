"use client";

import { ReactNode, CSSProperties } from "react";

interface FlexGroupProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'end';
  gap?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  style?: CSSProperties;
  className?: string;
}

export function FlexGroup({ 
  children, 
  direction = 'horizontal',
  align = 'start',
  gap = 'md',
  style = {},
  className = ''
}: FlexGroupProps) {
  const gapValues = {
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    '2xl': 'var(--spacing-2xl)',
  };

  const alignValues = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        gap: gapValues[gap],
        flexWrap: direction === 'horizontal' ? 'wrap' : 'nowrap',
        justifyContent: alignValues[align],
        alignItems: direction === 'vertical' ? alignValues[align] : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// Alias for backward compatibility
export const ButtonGroup = FlexGroup;

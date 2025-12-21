"use client";

import { ReactNode, CSSProperties } from "react";
import { Card } from "./Card";
import { useTheme } from "../providers/ThemeProvider";

interface OutlineCardProps {
  children: ReactNode;
  index?: number;
  showIndex?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
}

export function OutlineCard({ 
  children, 
  index,
  showIndex = false,
  isHovered = false,
  onClick,
  style = {}
}: OutlineCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <Card
      onClick={onClick}
      hoverable
      style={{
        position: 'relative',
        ...style,
      }}
    >
      {/* Index number */}
      {showIndex && index !== undefined && (
        <div
          style={{
            position: 'absolute',
            top: 'var(--spacing-lg)',
            right: 'var(--spacing-lg)',
            fontSize: '2.5rem',
            fontWeight: '900',
            color: 'var(--accent-primary)',
            lineHeight: '1',
            transition: 'color 0.3s ease',
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </div>
      )}
      
      {children}
    </Card>
  );
}

interface CardLabelProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function CardLabel({ children, style = {} }: CardLabelProps) {
  return (
    <div
      style={{
        fontSize: '0.75rem',
        color: 'var(--accent-primary)',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        marginBottom: 'var(--spacing-md)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  style?: CSSProperties;
}

export function CardTitle({ children, style = {} }: CardTitleProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <h3
      style={{
        fontSize: 'clamp(1.125rem, 1.8vw, 1.25rem)',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: 'var(--spacing-sm)',
        lineHeight: '1.3',
        paddingRight: 'var(--spacing-3xl)',
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

interface CardTextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  style?: CSSProperties;
}

export function CardText({ children, variant = 'primary', style = {} }: CardTextProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const colorMap = {
    primary: 'var(--text-secondary)',
    secondary: 'var(--text-tertiary)',
  };

  return (
    <div
      style={{
        fontSize: variant === 'primary' ? '1rem' : '0.875rem',
        color: colorMap[variant],
        marginBottom: 'var(--spacing-xs)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

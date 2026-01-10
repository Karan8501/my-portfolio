"use client";

import { ReactNode, CSSProperties } from "react";
import { Card } from "./Card";
import { useTheme } from "../../providers/ThemeProvider";

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

export function CardLabel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div 
      className={className}
      style={{
        fontSize: '0.75rem',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: 'var(--accent-primary)',
        marginBottom: 'var(--spacing-sm)',
      }}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, style = {}, className = "" }: { children: ReactNode; style?: React.CSSProperties; className?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <h3 
      className={className}
      style={{
        fontSize: '1.5rem',
        fontWeight: '700',
        color: 'var(--text-primary)',
        marginBottom: 'var(--spacing-md)',
        lineHeight: 1.2,
        ...style,
      }}
    >
      {children}
    </h3>
  );
}

export function CardText({ 
  children, 
  variant = "primary",
  style = {},
  className = "" 
}: { 
  children: ReactNode; 
  variant?: "primary" | "secondary";
  style?: React.CSSProperties;
  className?: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const colors = {
    primary: 'var(--text-primary)',
    secondary: 'var(--text-secondary)',
  };

  return (
    <p 
      className={className}
      style={{
        fontSize: variant === "primary" ? '1rem' : '0.875rem',
        color: colors[variant],
        lineHeight: 1.5,
        ...style,
      }}
    >
      {children}
    </p>
  );
}

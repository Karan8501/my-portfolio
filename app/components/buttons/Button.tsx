"use client";

import { ReactNode, CSSProperties } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'fill';
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  type = 'button',
  style = {},
  className = ''
}: ButtonProps) {
  const baseStyles: CSSProperties = {
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    fontWeight: '600',
  };

  const sizeStyles: Record<string, CSSProperties> = {
    sm: {
      padding: 'var(--spacing-xs) var(--spacing-md)',
      fontSize: '0.75rem',
    },
    md: {
      padding: 'var(--spacing-sm) var(--spacing-lg)',
      fontSize: '0.875rem',
    },
    lg: {
      padding: 'var(--spacing-md) var(--spacing-xl)',
      fontSize: '0.875rem',
    },
  };

  const variantStyles: Record<string, CSSProperties> = {
    primary: {
      backgroundColor: 'var(--accent-primary)',
      color: '#FFFFFF',
      border: 'none',
    },
    fill: {
      fontWeight: '600',
      color: '#FFFFFF',
      backgroundColor: 'var(--accent-primary)',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
    secondary: {
      backgroundColor: 'transparent',
      color: 'var(--text-secondary)',
      border: '2px solid var(--accent-primary)',
    },
    outline: {
      backgroundColor: 'transparent',
      color: 'var(--accent-primary)',
      border: '2px solid var(--accent-primary)',
    },
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary' || variant === 'fill') {
      e.currentTarget.style.borderColor = 'var(--accent-hover)';
      e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'var(--accent-primary)';
      e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
      e.currentTarget.style.color = '#FFFFFF';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
      e.currentTarget.style.color = '#FFFFFF';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (variant === 'primary' || variant === 'fill') {
      e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
    } else if (variant === 'secondary') {
      e.currentTarget.style.borderColor = 'var(--accent-primary)';
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = 'var(--accent-primary)';
    } else if (variant === 'outline') {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = 'var(--accent-primary)';
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={className}
      style={{
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
        ...style,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}

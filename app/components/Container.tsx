"use client";

import { ReactNode, CSSProperties } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({ 
  children, 
  className = "",
  style = {},
  maxWidth = "xl"
}: ContainerProps) {
  const maxWidthMap = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    full: '100%',
  };

  return (
    <div
      className={className}
      style={{
        width: '100%',
        maxWidth: maxWidthMap[maxWidth],
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingLeft: 'var(--spacing-lg)',
        paddingRight: 'var(--spacing-lg)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

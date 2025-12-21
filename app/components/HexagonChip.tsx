"use client";

import { ReactNode, useState } from "react";

interface HexagonChipProps {
  children: ReactNode;
  onHover?: (isHovered: boolean) => void;
}

export function HexagonChip({ children, onHover }: HexagonChipProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover?.(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'relative',
        width: '120px',
        height: '138px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
    >
      {/* Hexagon shape */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: isHovered ? 'var(--accent-primary)' : 'var(--chip-bg)',
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          transition: 'all 0.3s ease',
        }}
      />

      {/* Content */}
      <span
        style={{
          position: 'relative',
          zIndex: 9999,
          fontSize: '0.875rem',
          fontWeight: '600',
          color: isHovered ? '#FFFFFF' : 'var(--text-primary)',
          textAlign: 'center',
          padding: '0 var(--spacing-sm)',
          maxWidth: '80px',
        }}
      >
        {children}
      </span>
    </div>
  );
}

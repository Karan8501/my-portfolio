"use client";

import { useState, ReactNode } from "react";
import { withTooltip, WithTooltipProps } from "../hoc/withTooltip";

interface HexagonChipProps extends WithTooltipProps {
  children: ReactNode;
  onHover?: (isHovered: boolean) => void;
}

function HexagonChipBase({ children, onHover }: HexagonChipProps) {
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
      className={`relative w-[120px] h-[138px] flex items-center justify-center cursor-pointer transition-transform duration-500 ease-out ${isHovered ? 'scale-[1.15]' : 'scale-100'}`}
    >
      {/* Hexagon shape */}
      <div
        className={`absolute w-full h-full transition-colors duration-500 ease-out ${isHovered ? 'bg-[var(--accent-primary)]' : 'bg-[var(--chip-bg)]'}`}
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      />

      {/* Content */}
      <span
        className={`relative z-[9999] text-sm font-semibold text-center px-spacing-sm max-w-[80px] transition-colors duration-500 ease-out ${isHovered ? 'text-white' : 'text-text-primary'}`}
      >
        {children}
      </span>
    </div>
  );
}

export const HexagonChip = withTooltip(HexagonChipBase);

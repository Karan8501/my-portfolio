"use client";

import { useState, useRef } from "react";

interface TruncatedTextProps {
  text: string;
  maxLength?: number;
}

export function TruncatedText({ text, maxLength = 15 }: TruncatedTextProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const textRef = useRef<HTMLSpanElement>(null);
  
  const isTruncated = text.length > maxLength;
  const displayText = isTruncated ? text.slice(0, maxLength) + '...' : text;

  const handleMouseEnter = () => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      setTooltipPosition({
        top: rect.top + window.scrollY - 45,
        left: rect.left + window.scrollX + rect.width / 2,
      });
      setShowTooltip(true);
    }
  };

  return (
    <>
      <span
        ref={textRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {displayText}
      </span>
      
      {/* Tooltip with absolute positioning */}
      {showTooltip && isTruncated && (
        <div
          style={{
            position: 'absolute',
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
            transform: 'translateX(-50%)',
            padding: 'var(--spacing-sm) var(--spacing-md)',
            backgroundColor: '#1a1a1a',
            color: '#FFFFFF',
            fontSize: '0.875rem',
            borderRadius: '4px',
            whiteSpace: 'nowrap',
            zIndex: 99999,
            border: '1px solid #8B5CF6',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            pointerEvents: 'none',
          }}
        >
          {text}
          {/* Tooltip arrow */}
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 0,
              height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderTop: '6px solid #8B5CF6',
            }}
          />
        </div>
      )}
    </>
  );
}

"use client";

import React, { useState, ReactNode } from 'react';

export interface WithTooltipProps {
  tooltip?: string;
}

export function withTooltip<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return function WithTooltipComponent(props: P & WithTooltipProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { tooltip, ...componentProps } = props;

    if (!tooltip) {
      return <WrappedComponent {...(componentProps as P)} />;
    }

    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        <WrappedComponent {...(componentProps as P)} />
        
        {isVisible && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg z-50 whitespace-nowrap pointer-events-none animate-fadeIn">
            {tooltip}
            {/* Arrow */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
          </div>
        )}
      </div>
    );
  };
}

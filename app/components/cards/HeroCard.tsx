"use client";

import { ReactNode, CSSProperties } from "react";
import { useTheme } from "../../providers/ThemeProvider";

interface HeroCardProps {
  children: ReactNode;
  imageUrl?: string;
  imageHeight?: string;
  onClick?: () => void;
  style?: CSSProperties;
}

export function HeroCard({ 
  children, 
  imageUrl,
  imageHeight = '200px',
  onClick,
  style = {}
}: HeroCardProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div
      className="group relative transition-all duration-500 ease-out hover:z-10 hover:scale-105"
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: isDark ? '#0a0a0a' : '#FFFFFF',
        border: 'none',
        boxShadow: 'var(--shadow-lg)',
        ...style,
      }}
      onMouseEnter={(e) => {
        if (onClick) {
          // Hover logic is now handled by Tailwind classes
        }
      }}
      onMouseLeave={(e) => {
        if (onClick) {
           // Hover logic is now handled by Tailwind classes
        }
      }}
    >
      {/* Image Section */}
      {imageUrl && (
        <div
          style={{
            position: 'relative',
            width: 'auto',
            height: imageHeight,
            backgroundColor: isDark ? '#1a1a1a' : '#F3F4F6',
            overflow: 'hidden',
            margin: '20px 20px 0 20px',
            borderRadius: '8px',
          }}
        >
          <img
            src={imageUrl}
            alt="Card image"
            className="transition-transform duration-700 ease-out group-hover:scale-110"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />

          {/* Dark overlay for dark theme only */}
          {isDark && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Play button overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isDark ? 'rgba(0, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)',
              opacity: 0,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0';
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Content Section */}
      <div style={{ padding: 'var(--spacing-xl)' }}>
        {children}
      </div>
    </div>
  );
}

interface HeroCardPlaceholderProps {
  height?: string;
}

export function HeroCardPlaceholder({ height = '200px' }: HeroCardPlaceholderProps) {
  return (
    <div
      style={{
        width: '100%',
        height,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a0a2e 0%, #0a0a0a 100%)',
      }}
    >
      <svg width="60" height="60" viewBox="0 0 24 24" fill="#333333">
        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
      </svg>
    </div>
  );
}

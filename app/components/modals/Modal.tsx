"use client";

import { ReactNode, useEffect } from "react";
import { useTheme } from "../../providers/ThemeProvider";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
}

export function Modal({ isOpen, onClose, children, maxWidth = '1200px' }: ModalProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--spacing-lg)',
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.7)',
      }}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          maxWidth,
          maxHeight: '90vh',
          backgroundColor: isDark ? '#0a0a0a' : '#FFFFFF',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'var(--spacing-lg)',
            right: 'var(--spacing-lg)',
            zIndex: 10,
            padding: 'var(--spacing-sm)',
            backgroundColor: isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)',
            border: isDark ? '2px solid #333333' : '2px solid #E5E7EB',
            borderRadius: '50%',
            color: isDark ? '#FFFFFF' : '#111827',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--accent-primary)';
            e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = isDark ? '#333333' : '#E5E7EB';
            e.currentTarget.style.backgroundColor = isDark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.9)';
          }}
        >
          <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {children}
      </div>
    </div>
  );
}

interface ModalContentProps {
  children: ReactNode;
  direction?: 'horizontal' | 'vertical';
}

export function ModalContent({ children, direction = 'horizontal' }: ModalContentProps) {
  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: direction === 'vertical' ? 'column' : 'row',
        height: '100%',
        maxHeight: '90vh',
      }}
    >
      {children}
    </div>
  );
}

interface ModalSectionProps {
  children: ReactNode;
  width?: string;
  scrollable?: boolean;
}

export function ModalSection({ children, width = '50%', scrollable = false }: ModalSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div 
      style={{
        width,
        padding: 'var(--spacing-3xl)',
        overflowY: scrollable ? 'auto' : 'visible',
        backgroundColor: isDark ? '#0a0a0a' : '#FFFFFF',
      }}
    >
      {children}
    </div>
  );
}

interface ModalImageProps {
  src: string;
  alt: string;
  width?: string;
}

export function ModalImage({ src, alt, width = '60%' }: ModalImageProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div 
      style={{
        width,
        backgroundColor: isDark ? '#1a1a1a' : '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <img 
        src={src} 
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </div>
  );
}

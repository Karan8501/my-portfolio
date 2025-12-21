"use client";

export function ScrollIndicator() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToContent}
      aria-label="Scroll to content"
      style={{
        position: 'absolute',
        bottom: 'var(--spacing-2xl)',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 'var(--spacing-sm)',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--text-secondary)',
        transition: 'all 0.3s ease',
        zIndex: 10,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--color-primary)';
        e.currentTarget.style.transform = 'translateX(-50%) translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--text-secondary)';
        e.currentTarget.style.transform = 'translateX(-50%) translateY(0)';
      }}
    >
      <span style={{ 
        fontSize: '0.875rem', 
        fontWeight: '500',
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
      }}>
        Scroll
      </span>
      <div
        className="animate-float"
        style={{
          width: '24px',
          height: '36px',
          border: '2px solid currentColor',
          borderRadius: '12px',
          position: 'relative',
          animation: 'float 2s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: '4px',
            height: '8px',
            backgroundColor: 'currentColor',
            borderRadius: '2px',
            position: 'absolute',
            top: '6px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'pulse 2s ease-in-out infinite',
          }}
        />
      </div>
    </button>
  );
}

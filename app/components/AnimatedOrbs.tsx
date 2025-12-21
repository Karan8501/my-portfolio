"use client";

export function AnimatedOrbs() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      {/* Orb 1 - Blue/Purple */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'var(--gradient-primary)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          opacity: 0.3,
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      
      {/* Orb 2 - Purple/Pink */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '60%',
          right: '10%',
          width: '500px',
          height: '500px',
          background: 'var(--gradient-secondary)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          opacity: 0.25,
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      
      {/* Orb 3 - Amber/Red */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '350px',
          height: '350px',
          background: 'var(--gradient-accent)',
          borderRadius: '50%',
          filter: 'blur(90px)',
          opacity: 0.2,
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />
      
      {/* Orb 4 - Success Gradient */}
      <div
        className="animate-float"
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '300px',
          height: '300px',
          background: 'var(--gradient-success)',
          borderRadius: '50%',
          filter: 'blur(70px)',
          opacity: 0.2,
          animation: 'float 9s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
    </div>
  );
}

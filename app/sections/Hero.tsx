"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolio";
import { useTheme } from "../providers/ThemeProvider";

interface HeroProps {
  onContactClick: () => void;
}

export function Hero({ onContactClick }: HeroProps) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: 'var(--spacing-3xl)',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <video
        key={mounted ? theme : 'loading'} // Force re-render when theme changes
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source
          src={mounted && theme === "dark" ? "/videos/hero-background-dark.mp4" : "/videos/hero-background-light.mp4"}
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 1,
        }}
      />

      {/* Content - Right Side */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: '10%',
          textAlign: 'left',
        }}
      >
        {/* Tagline */}
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: '600',
            color: '#FFFFFF',
            textTransform: 'uppercase',
            letterSpacing: '0.3em',
            marginBottom: 'var(--spacing-2xl)',
            textShadow: '0 2px 20px rgba(0, 0, 0, 1)',
          }}
        >
          {portfolioData.personal.title}
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '900',
            color: '#FFFFFF',
            lineHeight: '1',
            marginBottom: 'var(--spacing-md)',
            letterSpacing: '-0.02em',
            textShadow: '0 4px 30px rgba(0, 0, 0, 1)',
          }}
        >
          {portfolioData.personal.name}
        </h1>

        {/* Title/Role */}
        <p
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: '700',
            color: '#FFFFFF',
            marginBottom: 'var(--spacing-4xl)',
            textShadow: '0 2px 25px rgba(0, 0, 0, 1)',
            letterSpacing: '0.02em',
          }}
        >
          Developer
        </p>

        {/* CTA Button */}
        <button
          onClick={onContactClick}
          style={{
            padding: 'var(--spacing-md) var(--spacing-xl)',
            fontSize: '0.875rem',
            fontWeight: '600',
            color: '#FFFFFF',
            backgroundColor: 'var(--accent-primary)',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-hover)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
          }}
        >
          Portfolio
        </button>
      </div>


    </section>
  );
}

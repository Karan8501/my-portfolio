"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { portfolioData } from "../data/portfolio";
import { Button } from "../components/buttons/Button";
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
      className="relative flex flex-col items-start justify-center min-h-screen p-spacing-3xl overflow-hidden"
    >
      {/* Video Background */}
      <video
        key={mounted ? theme : 'loading'} // Force re-render when theme changes
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src={mounted && theme === "dark" ? "/videos/hero-background-dark.mp4" : "/videos/hero-background-light.mp4"}
          type="video/mp4"
        />
      </video>


      <div className="absolute inset-0 bg-black/50 z-[1]" />

      {/* Content - Right Side */}  
      <div className="relative z-10 max-w-[600px] ml-auto mr-[10%] text-left">
        {/* Tagline */}
        <p className="text-xs font-semibold text-white uppercase tracking-[0.3em] mb-spacing-2xl drop-shadow-[0_2px_20px_rgba(0,0,0,1)]">
          {portfolioData.personal.title}
        </p>

        {/* Name */}
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none mb-spacing-md -tracking-[0.02em] drop-shadow-[0_4px_30px_rgba(0,0,0,1)]">
          {portfolioData.personal.name}
        </h1>

        {/* Title/Role */}
        <p className="text-[clamp(1.5rem,4vw,2.5rem)] font-bold text-white mb-spacing-4xl drop-shadow-[0_2px_25px_rgba(0,0,0,1)] tracking-wide">
          Developer
        </p>

        {/* CTA Button */}
        <div className="mt-spacing-4xl">
          <Button
            onClick={onContactClick}
            variant="fill"
            size="lg"
          >
            Portfolio
          </Button>
        </div>
      </div>


    </section>
  );
}

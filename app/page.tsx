"use client";

import { useState } from "react";
import { Hero } from "./sections/Hero";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Project";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[var(--geist-background)]">
      <Hero onContactClick={() => setIsContactOpen(true)} />
      <Experience />
      <Skills />
      <Projects />
      <Footer />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </main>
  );
}

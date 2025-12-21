"use client";

import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Project";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";
import { ContactModal } from "./components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <main className="flex min-h-screen flex-col bg-[var(--geist-background)]">
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <div id="about"><About /></div>
        <div id="journey"><Experience /></div>
        <div id="skills"><Skills /></div>
        <div id="projects"><Projects /></div>
        <Contact />
        <Footer />

        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </main>
    </>
  );
}

"use client";

import { useState } from "react";
import { ContactModal } from "@/components/modals/ContactModal";
import { Button } from "@/components/buttons/Button";
import { Section } from "@/components/layout/Section";

export function Contact() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <Section>
        <div className="text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black text-text-primary mb-6 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setIsContactOpen(true)}
          >
            Get In Touch
          </Button>
        </div>
      </Section>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </>
  );
}

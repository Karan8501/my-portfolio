"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ExperienceModal } from "@/components/ExperienceModal";
import { SectionHeader } from "@/components/SectionHeader";
import { OutlineCard, CardLabel, CardTitle, CardText } from "@/components/OutlineCard";
import { Section } from "@/components/Section";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  link?: string;
}

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleCardClick = (exp: ExperienceItem) => {
    setSelectedExperience(exp);
    setIsModalOpen(true);
  };

  return (
    <Section>
      <SectionHeader
        title="Journey"
        count={portfolioData.experience.length}
        countLabel="Degrees"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'var(--spacing-xl)',
        }}
      >
        {portfolioData.experience.map((exp, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <OutlineCard
              index={index}
              showIndex
              isHovered={hoveredIndex === index}
              onClick={() => handleCardClick(exp)}
            >
              <CardLabel>{exp.duration}</CardLabel>
              <CardTitle>{exp.role}</CardTitle>
              <CardText variant="primary">{exp.company}</CardText>
              <CardText variant="secondary">{exp.location}</CardText>
            </OutlineCard>
          </div>
        ))}
      </div>

      <ExperienceModal
        experience={selectedExperience}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
}

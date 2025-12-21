"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/Button";
import { ButtonGroup } from "@/components/ButtonGroup";
import { SectionHeader } from "@/components/SectionHeader";
import { HexagonChip } from "@/components/HexagonChip";
import { TruncatedText } from "@/components/TruncatedText";
import { Section } from "@/components/Section";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <Section>
      <SectionHeader
        title="Skills"
        count={portfolioData.skills[selectedCategory].skills.length}
        countLabel="Skills"
      />
      <ButtonGroup
        direction="horizontal"
        align="center"
        gap="md"
        style={{ marginBottom: 'var(--spacing-xl)', flexWrap: 'wrap' }}
      >
        {portfolioData.skills.map((category, index) => (
          <Button
            key={index}
            onClick={() => setSelectedCategory(index)}
            variant={selectedCategory === index ? 'primary' : 'secondary'}
            size="md"
          >
            {category.category}
          </Button>
        ))}
      </ButtonGroup>

      <ButtonGroup
        direction="horizontal"
        align="center"
        gap="lg"
        style={{ padding: 'var(--spacing-2xl) 0' }}
      >
        {portfolioData.skills[selectedCategory].skills.map((skill, index) => (
          <HexagonChip key={index}>
            <TruncatedText text={skill} maxLength={12} />
          </HexagonChip>
        ))}
      </ButtonGroup>
    </Section>
  );
}

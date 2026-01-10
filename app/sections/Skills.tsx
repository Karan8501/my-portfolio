"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/buttons/Button";
import { ButtonGroup } from "@/components/buttons/ButtonGroup";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { HexagonChip } from "@/components/chips/HexagonChip";
import { TruncatedText } from "@/components/ui/TruncatedText";
import { Section } from "@/components/layout/Section";

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <Section>
      <SectionHeader
        title="Skills"
        count={portfolioData.skills[selectedCategory].skills.length}
        countLabel="Skills"
      />
      <div className="flex flex-col gap-20">
        <ButtonGroup
        direction="horizontal"
        align="center"
        gap="md"
          className="mb-spacing-3xl flex-wrap"
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
          className="py-spacing-2xl"
      >
        {portfolioData.skills[selectedCategory].skills.map((skill, index) => (
          <HexagonChip key={index}>
            <TruncatedText text={skill} maxLength={12} />
          </HexagonChip>
        ))}
      </ButtonGroup>
      </div>
    </Section>
  );
}

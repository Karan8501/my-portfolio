"use client";

import { useState } from "react";
import { portfolioData, ProjectItem } from "@/data/portfolio";
import { ProjectModal } from "@/components/ProjectModal";
import { SectionHeader } from "@/components/SectionHeader";
import { Chip } from "@/components/Chip";
import { Section } from "@/components/Section";
import { ButtonGroup } from "@/components/ButtonGroup";
import { HeroCard } from "@/components/HeroCard";
import { CardLabel, CardTitle, CardText } from "@/components/OutlineCard";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <Section id="projects">
      <SectionHeader
        title="Featured Work"
        count={portfolioData.projects.length}
        countLabel="Projects"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'var(--spacing-xl)',
        }}
      >
        {portfolioData.projects.map((project, index) => (
          <HeroCard
            key={index}
            imageUrl={project.images && project.images.length > 0 ? project.images[0] : undefined}
            imageHeight="200px"
            onClick={() => handleProjectClick(project)}
          >
            <CardLabel>Project</CardLabel>
            <CardTitle style={{ paddingRight: 0 }}>{project.title}</CardTitle>
            <CardText
              variant="primary"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                lineHeight: '1.6',
              }}
            >
              {project.description}
            </CardText>

            <ButtonGroup direction="horizontal" align="start" gap="sm" style={{ marginTop: 'var(--spacing-md)' }}>
              {project.stack.slice(0, 3).map((tech, i) => (
                <Chip key={i} variant="default">
                  {tech}
                </Chip>
              ))}
              {project.stack.length > 3 && (
                <span style={{ fontSize: '0.75rem', color: '#A0A0A0' }}>
                  +{project.stack.length - 3} more
                </span>
              )}
            </ButtonGroup>
          </HeroCard>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
}

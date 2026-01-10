"use client";

import { ProjectItem } from "@/data/portfolio";
import { Modal, ModalContent, ModalImage, ModalSection } from "./Modal";
import { CardTitle, CardText } from "../cards/OutlineCard";
import { Chip } from "../chips/Chip";
import { ButtonGroup } from "../buttons/ButtonGroup";
import { Button } from "../buttons/Button";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent direction="horizontal">
        {/* Image Section */}
        {hasImages ? (
          <ModalImage
            src={project.images![0]}
            alt={project.title}
            width="60%"
          />
        ) : (
          <div style={{ width: '60%', backgroundColor: '#1a1a1a' }} />
        )}

        {/* Content Section */}
        <ModalSection width="40%" scrollable>
          <CardTitle style={{ paddingRight: 0, marginBottom: 'var(--spacing-lg)' }}>
            {project.title}
          </CardTitle>

          <ButtonGroup direction="horizontal" align="start" gap="sm" style={{ marginBottom: 'var(--spacing-2xl)' }}>
            {project.stack.map((tech, i) => (
              <Chip key={i} variant="default">
                {tech}
              </Chip>
            ))}
          </ButtonGroup>

          <CardText variant="primary" style={{ lineHeight: '1.6', marginBottom: 'var(--spacing-2xl)' }}>
            {project.description}
          </CardText>

          {project.link && (
            <Button
              onClick={() => window.open(project.link, '_blank')}
              variant="fill"
              size="md"
            >
              Visit Live Site
            </Button>
          )}
        </ModalSection>
      </ModalContent>
    </Modal>
  );
}

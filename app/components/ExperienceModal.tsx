"use client";

import { Modal, ModalContent, ModalSection } from "@/components/Modal";
import { CardLabel, CardTitle, CardText } from "@/components/OutlineCard";
import { ButtonGroup } from "@/components/ButtonGroup";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  link?: string;
}

interface ExperienceModalProps {
  experience: ExperienceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ExperienceModal({ experience, isOpen, onClose }: ExperienceModalProps) {
  if (!experience) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="800px">
      <ModalContent direction="vertical">
        <ModalSection width="100%" scrollable>
          <CardLabel>{experience.duration}</CardLabel>
          <CardTitle style={{ paddingRight: 0, marginBottom: 'var(--spacing-sm)' }}>
            {experience.role}
          </CardTitle>
          <CardText variant="primary" style={{ marginBottom: 'var(--spacing-lg)' }}>
            {experience.company} • {experience.location}
          </CardText>

          <ButtonGroup direction="vertical" align="start" gap="sm">
            {experience.description.map((item, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-sm)',
                  color: 'var(--text-secondary)',
                  fontSize: '1rem',
                  lineHeight: '1.6',
                }}
              >
                <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>•</span>
                <span>{item}</span>
              </div>
            ))}
          </ButtonGroup>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
}

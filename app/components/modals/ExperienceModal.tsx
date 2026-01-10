"use client";

import { Modal, ModalContent, ModalSection } from "@/components/modals/Modal";
import { CardLabel, CardTitle, CardText } from "@/components/cards/OutlineCard";
import { ButtonGroup } from "@/components/buttons/ButtonGroup";

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
          <CardTitle className="pr-0 mb-spacing-sm">
            {experience.role}
          </CardTitle>
          <CardText variant="primary" className="mb-spacing-lg">
            {experience.company} • {experience.location}
          </CardText>

          <ButtonGroup direction="vertical" align="start" gap="sm">
            {experience.description.map((item, index) => (
              <div 
                key={index}
                className="flex gap-4 text-text-secondary text-base leading-[1.6]"
              >
                <span 
                  className="font-mono font-bold text-purple-primary text-sm pt-1 shrink-0 select-none"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </div>
            ))}
          </ButtonGroup>
        </ModalSection>
      </ModalContent>
    </Modal>
  );
}

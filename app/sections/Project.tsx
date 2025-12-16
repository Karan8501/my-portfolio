import { portfolioData, ProjectItem } from "../data/portfolio";
import { useState } from "react";
import { SpotlightCard } from "../components/SpotlightCard";
import { ProjectModal } from "../components/ProjectModal";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: ProjectItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-[var(--accents-1)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-[var(--geist-foreground)]">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <SpotlightCard
              key={index}
              className="group !p-0 bg-[var(--geist-background)] cursor-pointer hover:border-[var(--geist-foreground)] transition-all overflow-hidden"
              onClick={() => handleProjectClick(project)}
            >
              {/* Card Preview Image (First image from array or placeholder) */}
              <div className="w-full h-48 bg-[var(--accents-2)] relative overflow-hidden">
                {project.images && project.images.length > 0 ? (
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[var(--accents-4)]">
                    <span className="text-sm">No Preview</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-[var(--geist-foreground)] group-hover:text-[var(--geist-success)] transition-colors">{project.title}</h3>
                </div>

                <p className="text-[var(--accents-5)] text-sm mb-6 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.slice(0, 4).map((tech, i) => (
                    <span key={i} className="text-xs font-mono text-[var(--accents-6)] bg-[var(--accents-1)] px-2 py-1 rounded border border-[var(--accents-2)]">
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs font-mono text-[var(--accents-5)] px-1 py-1">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

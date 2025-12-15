import { portfolioData } from "../data/portfolio";
import Link from "next/link";
import { SpotlightCard } from "../components/SpotlightCard";

export function Projects() {
  return (
    <section id="projects" className="py-16 px-6 bg-[var(--accents-1)]">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[var(--geist-foreground)]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <SpotlightCard key={index} className="group p-6 bg-[var(--geist-background)]">
              <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-[var(--geist-foreground)]">{project.title}</h3>
                  {project.link && (
                      <Link href={project.link} target="_blank" className="text-[var(--accents-5)] hover:text-[var(--geist-foreground)]">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </Link>
                  )}
              </div>
              <p className="text-[var(--accents-5)] mb-6 h-auto min-h-[3rem]">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span key={i} className="text-xs font-mono text-[var(--accents-6)] bg-[var(--accents-1)] px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}

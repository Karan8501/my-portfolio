import { portfolioData } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-16 px-6 bg-[var(--accents-1)] border-t border-[var(--accents-2)]">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-[var(--geist-foreground)]">About Me</h2>
        <p className="max-w-3xl mx-auto text-lg text-[var(--accents-5)] leading-relaxed mb-8">
            {portfolioData.personal.summary}
        </p>
        <div className="flex justify-center gap-6">
            {portfolioData.personal.contacts.github && (
                <a href={portfolioData.personal.contacts.github} target="_blank" rel="noopener noreferrer" className="text-[var(--accents-5)] hover:text-[var(--geist-foreground)] transition-colors">
                    GitHub
                </a>
            )}
            {portfolioData.personal.contacts.linkedin && (
                <a href={portfolioData.personal.contacts.linkedin} target="_blank" rel="noopener noreferrer" className="text-[var(--accents-5)] hover:text-[var(--geist-foreground)] transition-colors">
                    LinkedIn
                </a>
            )}
             {portfolioData.personal.contacts.email && (
                <a href={`mailto:${portfolioData.personal.contacts.email}`} className="text-[var(--accents-5)] hover:text-[var(--geist-foreground)] transition-colors">
                    Email
                </a>
            )}
        </div>
      </div>
    </section>
  );
}

import { portfolioData } from "../data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-text-primary">Education</h2>
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-surface-primary border border-border-primary rounded-lg">
              <div>
                <h3 className="text-xl font-semibold text-text-primary">{edu.institution}</h3>
                <p className="text-text-secondary">{edu.degree}</p>
              </div>
              <div className="mt-2 md:mt-0 text-right">
                <span className="block text-text-primary font-medium">{edu.location}</span>
                <span className="block text-sm text-text-tertiary font-mono">{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

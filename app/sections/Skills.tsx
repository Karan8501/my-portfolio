import { portfolioData } from "../data/portfolio";
import { SpotlightCard } from "../components/SpotlightCard";

export function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[var(--geist-foreground)]">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((category, index) => (
            <SpotlightCard key={index} className="bg-[var(--accents-1)] p-6">
              <h3 className="text-lg font-semibold mb-4 text-[var(--geist-foreground)]">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-[var(--geist-background)] text-[var(--geist-foreground)] rounded-full border border-[var(--accents-2)]"
                  >
                    {skill}
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

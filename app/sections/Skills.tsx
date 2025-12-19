// =======================
// Skills.tsx
// =======================
'use client';

import { portfolioData } from '../data/portfolio';
import { SkillsWeb } from '../components/SkillsWeb';

export function Skills() {
  const allSkills = portfolioData.skills.flatMap((category) =>
    category.skills.map((skill) => ({
      name: skill,
      category: category.category,
    }))
  );

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-[var(--geist-foreground)]">
          Technical Skills
        </h2>

        <SkillsWeb skills={allSkills} />
      </div>
    </section>
  );
}

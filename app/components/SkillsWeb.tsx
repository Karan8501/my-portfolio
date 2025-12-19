'use client';

import { useState } from 'react';

interface Skill {
  name: string;
  category: string;
}

interface SkillsWebProps {
  skills: Skill[];
}

const categoryColors: Record<string, string> = {
  Frontend: '#FF6B6B',
  Backend: '#4ECDC4',
  'DevOps & Tools': '#F7DC6F',
  Architecture: '#BB8FCE',
};

const skillDependencies: Record<string, string[]> = {
  React: ['JavaScript', 'TypeScript', 'Next.js'],
  'Next.js': ['React', 'Node.js'],
  'Node.js': ['JavaScript', 'Express.js', 'MongoDB', 'PostgreSQL'],
  'Express.js': ['Node.js', 'MongoDB', 'PostgreSQL'],
  TypeScript: ['JavaScript'],
  MongoDB: ['Node.js', 'Express.js'],
  PostgreSQL: ['Node.js', 'SQL'],
  MySQL: ['SQL', 'Node.js'],
  Docker: ['AWS (EC2, S3, Lambda)', 'Nginx', 'CI/CD'],
  'AWS (EC2, S3, Lambda)': ['Docker', 'Node.js'],
  Kafka: ['Node.js', 'System Design'],
  RabbitMQ: ['Node.js', 'System Design'],
  WebSockets: ['Node.js', 'React'],
  GraphQL: ['React', 'Node.js'],
  Redux: ['React', 'JavaScript'],
  'CI/CD': ['Git', 'Docker', 'Jenkins'],
  Jenkins: ['CI/CD', 'Docker'],
  'System Design': ['Node.js', 'MongoDB', 'PostgreSQL'],
  'Event-Driven Architecture': ['Kafka', 'RabbitMQ', 'System Design'],
};

export function SkillsWeb({ skills }: SkillsWebProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const centerX = 500;
  const centerY = 350;

  const defaultChipSize = 75 * 1.15; // 30% bigger default size

  const getSkillPosition = (index: number, total: number) => {
    const ringsConfig = [
      { count: 1, radius: 0 },
      { count: 6, radius: 120 },
      { count: 12, radius: 220 },
      { count: 12, radius: 320 },
    ];

    let currentIndex = 0;

    for (const ring of ringsConfig) {
      if (index < currentIndex + ring.count) {
        const indexInRing = index - currentIndex;

        if (ring.radius === 0) {
          return { x: centerX, y: centerY };
        }

        const angleStep = (2 * Math.PI) / ring.count;
        const angle = indexInRing * angleStep - Math.PI / 2;

        const randomOffset = Math.sin(index * 7) * 15;
        const radiusWithOffset = ring.radius + randomOffset;

        return {
          x: centerX + radiusWithOffset * Math.cos(angle),
          y: centerY + radiusWithOffset * Math.sin(angle),
        };
      }
      currentIndex += ring.count;
    }

    const angle = (index / total) * 2 * Math.PI;
    return {
      x: centerX + 280 * Math.cos(angle),
      y: centerY + 280 * Math.sin(angle),
    };
  };

  const getConnections = (skillName: string) => skillDependencies[skillName] || [];

  const areConnected = (a: string, b: string) =>
    getConnections(a).includes(b) || getConnections(b).includes(a);

  const getConnectionStroke = (highlight: boolean, color: string) =>
    highlight ? color : 'rgba(255,255,255,0.35)';

  return (
    <div className="relative w-full flex items-center justify-center" style={{ height: '750px' }}>
      {/* SVG CONNECTIONS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {skills.map((skill, i) => {
          if (activeCategory && skill.category !== activeCategory) return null;

          const pos1 = getSkillPosition(i, skills.length);

          return getConnections(skill.name).map((connected) => {
            const j = skills.findIndex((s) => s.name === connected);
            if (j === -1) return null;

            const pos2 = getSkillPosition(j, skills.length);
            const highlight = hoveredSkill === skill.name || hoveredSkill === connected;

            return (
              <line
                key={`${skill.name}-${connected}`}
                x1={pos1.x}
                y1={pos1.y}
                x2={pos2.x}
                y2={pos2.y}
                stroke={getConnectionStroke(highlight, categoryColors[skill.category])}
                strokeWidth={highlight ? 2.5 : 1}
                opacity={highlight ? 0.85 : 0.35}
                style={{ transition: 'all 0.3s ease' }}
              />
            );
          });
        })}
      </svg>

      {/* SKILLS */}
      {skills.map((skill, index) => {
        const base = getSkillPosition(index, skills.length);
        const color = categoryColors[skill.category];

        const isCategoryActive = activeCategory && skill.category === activeCategory;

        const categorySkills = activeCategory
          ? skills.filter((s) => s.category === activeCategory)
          : [];

        const activeIndex = categorySkills.findIndex((s) => s.name === skill.name);

        // Center skills horizontally if category is active
        const x =
          activeCategory && isCategoryActive
            ? centerX + (activeIndex - (categorySkills.length - 1) / 2) * 110
            : base.x;

        const y = activeCategory && isCategoryActive ? centerY : base.y;

        const isHovered = hoveredSkill === skill.name;
        const isConnected = hoveredSkill ? areConnected(skill.name, hoveredSkill) : false;

        const shouldHighlight = isHovered || isConnected;

        return (
          <div
            key={skill.name}
            className="absolute"
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
            style={{
              left: x,
              top: y,
              width: defaultChipSize,
              height: defaultChipSize,
              opacity: activeCategory && !isCategoryActive ? 0.4 : 1,
              transform: `translate(-50%, -50%) scale(${shouldHighlight || isCategoryActive ? 1.3 : 1})`,
              transition: 'all 0.35s cubic-bezier(0.34,1.56,0.64,1)',
              zIndex: shouldHighlight ? 30 : 10,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                d={
                  index % 3 === 0
                    ? 'M 50 5 L 90 35 L 75 85 L 25 85 L 10 35 Z'
                    : 'M 50 5 L 86.6 27.5 L 86.6 72.5 L 50 95 L 13.4 72.5 L 13.4 27.5 Z'
                }
                fill={shouldHighlight || isCategoryActive ? color : 'transparent'}
                stroke={color}
                strokeWidth={2}
              />
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fill={shouldHighlight || isCategoryActive ? '#fff' : color}
                fontSize={11}
                fontWeight={700}
              >
                {skill.name.length > 9 ? skill.name.slice(0, 8) + '..' : skill.name}
              </text>
            </svg>

            {/* TOOLTIP */}
            {isHovered && (
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-[var(--accents-1)] border border-[var(--accents-2)] text-base px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg z-40">
                {skill.name}
                <div className="text-xs text-[var(--accents-5)]">{skill.category}</div>
              </div>
            )}
          </div>
        );
      })}

      {/* LEGEND */}
      <div className="absolute bottom-4 left-4 bg-[var(--accents-1)]/90 backdrop-blur-sm border border-[var(--accents-2)] rounded-lg p-3 text-xs">
        <div className="font-semibold mb-2">Categories</div>
        {Object.entries(categoryColors).map(([cat, color]) => (
          <div
            key={cat}
            className="flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => setActiveCategory(cat)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="w-3 h-3 rounded-full" style={{ background: color }} />
            <span>{cat}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

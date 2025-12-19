'use client';

import { useState } from 'react';

interface SkillCellProps {
  skill: string;
  index: number;
  color: string;
  x: number;
  y: number;
  size: number;
}

const colors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
  '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788',
  '#FF8FAB', '#6C5CE7', '#00D9FF', '#FF6348', '#A29BFE',
];

export function SkillCell({ skill, index, color, x, y, size }: SkillCellProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="skill-cell absolute"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        transform: isHovered ? 'translateY(-12px) scale(1.15)' : 'translateY(0) scale(1)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        zIndex: isHovered ? 30 : 1,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 15px 35px rgba(0,0,0,0.6))' 
            : 'drop-shadow(0 3px 6px rgba(0,0,0,0.2))',
          transition: 'filter 0.4s ease',
        }}
      >
        {/* Hexagon - benzene ring style */}
        <path
          d="M 50 5 L 86.6 27.5 L 86.6 72.5 L 50 95 L 13.4 72.5 L 13.4 27.5 Z"
          fill={isHovered ? color : 'transparent'}
          stroke={color}
          strokeWidth={isHovered ? '4' : '2.5'}
          strokeLinejoin="miter"
          style={{
            transition: 'all 0.4s ease',
          }}
        />
        
        {/* Double glow on hover */}
        {isHovered && (
          <>
            <path
              d="M 50 5 L 86.6 27.5 L 86.6 72.5 L 50 95 L 13.4 72.5 L 13.4 27.5 Z"
              fill="none"
              stroke="white"
              strokeWidth="3"
              opacity="0.7"
              style={{ filter: 'blur(5px)' }}
            />
            <path
              d="M 50 5 L 86.6 27.5 L 86.6 72.5 L 50 95 L 13.4 72.5 L 13.4 27.5 Z"
              fill="none"
              stroke={color}
              strokeWidth="2"
              opacity="0.4"
              style={{ filter: 'blur(10px)' }}
            />
          </>
        )}
        
        {/* Skill text */}
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="middle"
          fill={isHovered ? '#fff' : color}
          fontSize={size > 90 ? '11' : '10'}
          fontWeight={isHovered ? '700' : '600'}
          style={{
            transition: 'all 0.4s ease',
            pointerEvents: 'none',
          }}
        >
          {skill.length > 10 ? skill.substring(0, 9) + '..' : skill}
        </text>
      </svg>
      
      {/* Tooltip - matching other sections' style */}
      {isHovered && (
        <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-[var(--accents-1)] border border-[var(--accents-2)] text-[var(--geist-foreground)] text-sm px-4 py-2 rounded-md whitespace-nowrap z-40 shadow-lg">
          {skill}
        </div>
      )}
    </div>
  );
}

interface SkillsHoneycombProps {
  skills: string[];
  categoryName: string;
}

export function SkillsHoneycomb({ skills, categoryName }: SkillsHoneycombProps) {
  // Create benzene-like ring structure
  const getBenzenePosition = (index: number, total: number) => {
    const centerX = 200;
    const centerY = 180;
    
    // Vary ring radius and sizes
    const rings = [
      { radius: 140, size: 100 }, // Outer ring
      { radius: 80, size: 85 },   // Middle ring
      { radius: 0, size: 95 },    // Center
    ];
    
    if (index === 0 && total > 1) {
      return { x: centerX - rings[2].size / 2, y: centerY - rings[2].size / 2, size: rings[2].size };
    }
    
    const remainingSkills = total - 1;
    const outerCount = Math.min(6, remainingSkills);
    const middleCount = remainingSkills - outerCount;
    
    if (index <= outerCount) {
      const angle = ((index - 1) * 60 - 90) * (Math.PI / 180);
      const x = centerX + rings[0].radius * Math.cos(angle) - rings[0].size / 2;
      const y = centerY + rings[0].radius * Math.sin(angle) - rings[0].size / 2;
      return { x, y, size: rings[0].size };
    } else {
      const middleIndex = index - outerCount - 1;
      const angle = ((middleIndex * 60 + 30 - 90) * (Math.PI / 180));
      const x = centerX + rings[1].radius * Math.cos(angle) - rings[1].size / 2;
      const y = centerY + rings[1].radius * Math.sin(angle) - rings[1].size / 2;
      return { x, y, size: rings[1].size };
    }
  };

  return (
    <div className="relative">
      <h3 className="text-lg font-semibold mb-6 text-[var(--geist-foreground)]">{categoryName}</h3>
      
      {/* Benzene ring structure - no card background */}
      <div 
        className="relative"
        style={{
          height: '420px',
          minHeight: '420px',
        }}
      >
        {/* Connection lines - benzene bonds */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
          <defs>
            <linearGradient id={`bondGradient-${categoryName}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'var(--accents-3)', stopOpacity: 0.4 }} />
              <stop offset="100%" style={{ stopColor: 'var(--accents-4)', stopOpacity: 0.6 }} />
            </linearGradient>
          </defs>
          
          {/* Draw bonds between hexagons */}
          {skills.length > 1 && (
            <>
              {/* Outer ring bonds */}
              {Array.from({ length: Math.min(6, skills.length - 1) }).map((_, i) => {
                const angle1 = (i * 60 - 90) * (Math.PI / 180);
                const angle2 = ((i + 1) * 60 - 90) * (Math.PI / 180);
                const x1 = 200 + 140 * Math.cos(angle1);
                const y1 = 180 + 140 * Math.sin(angle1);
                const x2 = 200 + 140 * Math.cos(angle2);
                const y2 = 180 + 140 * Math.sin(angle2);
                return (
                  <line
                    key={`outer-${i}`}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke={`url(#bondGradient-${categoryName})`}
                    strokeWidth="2.5"
                    opacity="0.7"
                  />
                );
              })}
              
              {/* Center to outer bonds */}
              {Array.from({ length: Math.min(6, skills.length - 1) }).map((_, i) => {
                const angle = (i * 60 - 90) * (Math.PI / 180);
                const x = 200 + 140 * Math.cos(angle);
                const y = 180 + 140 * Math.sin(angle);
                return (
                  <line
                    key={`center-${i}`}
                    x1={200}
                    y1={180}
                    x2={x}
                    y2={y}
                    stroke={`url(#bondGradient-${categoryName})`}
                    strokeWidth="2"
                    opacity="0.5"
                    strokeDasharray="5,5"
                  />
                );
              })}
            </>
          )}
        </svg>
        
        {/* Skill cells */}
        {skills.map((skill, index) => {
          const { x, y, size } = getBenzenePosition(index, skills.length);
          
          return (
            <SkillCell
              key={index}
              skill={skill}
              index={index}
              color={colors[index % colors.length]}
              x={x}
              y={y}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
}

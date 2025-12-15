"use client";

import React, { useRef, useEffect, useState } from "react";

interface Point {
  x: number;
  y: number;
  oldX: number;
  oldY: number;
  pinned: boolean;
}

interface Stick {
  p0: Point;
  p1: Point;
  length: number;
}

export function BendingString({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Physics State
  const points = useRef<Point[]>([]);
  const sticks = useRef<Stick[]>([]);
  const mouse = useRef({ x: 0, y: 0, active: false });
  const animationRef = useRef<number>(0);

  // Configuration
  const segmentCount = 8;
  const stringLength = 100; // Total length
  const segmentLength = stringLength / segmentCount;
  const gravity = 0.5;
  const friction = 0.9;
  const bounce = 0.9;

  useEffect(() => {
    // Initialize Physics
    const init = () => {
      points.current = [];
      sticks.current = [];
      
      const startX = 0; // Relative to canvas center/top
      const startY = 0;

      for (let i = 0; i <= segmentCount; i++) {
        points.current.push({
          x: startX,
          y: startY + i * segmentLength,
          oldX: startX,
          oldY: startY + i * segmentLength,
          pinned: i === 0, // Pin the top
        });
      }

      for (let i = 0; i < points.current.length - 1; i++) {
        sticks.current.push({
          p0: points.current[i],
          p1: points.current[i + 1],
          length: segmentLength,
        });
      }
    };

    init();

    const updatePoints = () => {
      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];
        if (!p.pinned) {
          const vx = (p.x - p.oldX) * friction;
          const vy = (p.y - p.oldY) * friction;

          p.oldX = p.x;
          p.oldY = p.y;
          p.x += vx;
          p.y += vy;
          p.y += gravity;
        }
      }
    };

    const constrainPoints = () => {
      for (let i = 0; i < sticks.current.length; i++) {
        const s = sticks.current[i];
        const dx = s.p1.x - s.p0.x;
        const dy = s.p1.y - s.p0.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const difference = s.length - distance;
        const percent = difference / distance / 2;
        const offsetX = dx * percent;
        const offsetY = dy * percent;

        if (!s.p0.pinned) {
          s.p0.x -= offsetX;
          s.p0.y -= offsetY;
        }
        if (!s.p1.pinned) {
          s.p1.x += offsetX;
          s.p1.y += offsetY;
        }
      }
    };

    const interact = () => {
        if (mouse.current.active && containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            // Mouse relative to the top-center of the local coordinate system
            // We set the canvas such that (0,0) is top-center.
            // But mouse event is global.
            
            // Actually, simplified interaction:
            // Just apply wind/force if mouse is moving quickly near the component
             
            for (let i = 1; i < points.current.length; i++) {
                 const p = points.current[i];
                 const dx = p.x - mouse.current.x; // Simplified
                 const dy = p.y - mouse.current.y;
                 const dist = Math.sqrt(dx*dx + dy*dy);
                 
                 if (dist < 50) {
                     const force = (50 - dist) / 50;
                     const angle = Math.atan2(dy, dx);
                     p.x += Math.cos(angle) * force * 5;
                     p.y += Math.sin(angle) * force * 5;
                 }
            }
        }
    };

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw String
      ctx.beginPath();
      ctx.moveTo(points.current[0].x + canvas.width / 2, points.current[0].y);
      
      // Catmull-Rom or Quadratic Curve for smoothness
      // Simple loop for now
      for (let i = 1; i < points.current.length; i++) {
        // Draw to the actual point offset by center
        ctx.lineTo(points.current[i].x + canvas.width / 2, points.current[i].y);
      }
      
      ctx.strokeStyle = "rgba(100, 100, 100, 0.5)"; // String color
      ctx.lineWidth = 1;
      ctx.stroke();

      updatePoints();
      constrainPoints();
      constrainPoints(); // Double iteration for stability
      constrainPoints();
      
      // Map interaction
      // interact(); // Needs robust mouse tracking logic

      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationRef.current);
  }, []);
  
  const handleMouseMove = (e: React.MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const relativeX = e.clientX - rect.left - rect.width / 2;
      const relativeY = e.clientY - rect.top;

      // Apply force to points
      for (let i = 1; i < points.current.length; i++) {
        const p = points.current[i];
        const dx = p.x - relativeX;
        const dy = p.y - relativeY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 30) {
            const force = (30 - dist) * 0.5;
            // Push away
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;
        }
      }
  };
  
  // We need to sync the letter position with the last point
  // For simplicity, we just use a CSS transform on the child container in the render loop?
  // Or just let the React render cycle handle it via a ref style update?
  // Let's use a ref for high performance.
  const letterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
      const syncLetter = () => {
          if (letterRef.current && points.current.length > 0) {
              const lastPoint = points.current[points.current.length - 1];
              letterRef.current.style.transform = `translate(${lastPoint.x}px, ${lastPoint.y}px)`;
          }
           requestAnimationFrame(syncLetter);
      };
      const id = requestAnimationFrame(syncLetter);
      return () => cancelAnimationFrame(id);
  }, []);


  return (
    <div 
        ref={containerRef} 
        onMouseMove={handleMouseMove}
        className="relative w-16 h-40 flex justify-center cursor-crosshair z-20"
    >
      <canvas 
        ref={canvasRef} 
        width={64} 
        height={160} 
        className="absolute top-0 left-0 pointer-events-none"
      />
      <div 
        ref={letterRef}
        className="absolute top-0 left-0 w-full flex justify-center pointer-events-none will-change-transform origin-top"
      >
        {children}
      </div>
    </div>
  );
}

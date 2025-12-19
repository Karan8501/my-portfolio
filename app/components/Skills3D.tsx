'use client';

import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

interface SkillsPhysicsProps {
  skills: string[];
  categoryName: string;
}

const vibrantColors = [
  '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
  '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788',
  '#FF8FAB', '#6C5CE7', '#00D9FF', '#FF6348', '#A29BFE',
  '#FD79A8', '#FDCB6E', '#E17055', '#00B894', '#0984E3'
];

// Truncate text helper
function truncateText(text: string, maxLength: number = 12): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 2) + '..';
}

export function SkillsPhysics({ skills, categoryName }: SkillsPhysicsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);
  const hoveredSkillRef = useRef<string | null>(null);
  const hoverLabelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events, Body } = Matter;

    // Create engine with custom gravity
    const engine = Engine.create({
      gravity: { x: 0, y: 0.2, scale: 0.001 }
    });
    engineRef.current = engine;

    const canvas = canvasRef.current;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // Create renderer
    const render = Render.create({
      canvas: canvas,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent',
      }
    });
    renderRef.current = render;

    // Create walls with better padding to prevent edge clipping
    const wallThickness = 60;
    const padding = 50; // Extra padding from edges
    const walls = [
      // Top wall
      Bodies.rectangle(width / 2, padding, width, wallThickness, { 
        isStatic: true, 
        render: { fillStyle: 'transparent' }
      }),
      // Bottom wall
      Bodies.rectangle(width / 2, height - padding, width, wallThickness, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }),
      // Left wall
      Bodies.rectangle(padding, height / 2, wallThickness, height, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
      }),
      // Right wall
      Bodies.rectangle(width - padding, height / 2, wallThickness, height, { 
        isStatic: true,
        render: { fillStyle: 'transparent' }
      })
    ];

    // Create skill shapes - spawn away from edges
    const shapes: Matter.Body[] = [];
    const shapeSize = 40;
    const safeZone = 100; // Keep shapes away from edges
    
    skills.forEach((skill, index) => {
      const x = Math.random() * (width - safeZone * 2) + safeZone;
      const y = Math.random() * (height - safeZone * 2) + safeZone;
      const color = vibrantColors[index % vibrantColors.length];
      
      // Randomly choose between circle and polygon
      const shapeType = Math.random() > 0.5 ? 'circle' : 'polygon';
      let body: Matter.Body;
      
      if (shapeType === 'circle') {
        body = Bodies.circle(x, y, shapeSize, {
          restitution: 0.7,
          friction: 0.005,
          density: 0.001,
          frictionAir: 0.01,
          render: {
            fillStyle: 'transparent',
            strokeStyle: color,
            lineWidth: 3
          },
          label: skill
        });
      } else {
        const sides = Math.floor(Math.random() * 3) + 5;
        body = Bodies.polygon(x, y, sides, shapeSize, {
          restitution: 0.7,
          friction: 0.005,
          density: 0.001,
          frictionAir: 0.01,
          render: {
            fillStyle: 'transparent',
            strokeStyle: color,
            lineWidth: 3
          },
          label: skill
        });
      }
      
      // Add stronger initial velocity for visible movement
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: (Math.random() - 0.5) * 4
      });
      
      shapes.push(body);
    });

    // Add all bodies to the world
    Composite.add(engine.world, [...walls, ...shapes]);

    // Add mouse control - but don't block scroll
    const mouse = Mouse.create(canvas);
    // Remove wheel event listeners to allow page scrolling
    (mouse as any).element.removeEventListener('mousewheel', (mouse as any).mousewheel);
    (mouse as any).element.removeEventListener('DOMMouseScroll', (mouse as any).mousewheel);
    
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Release any dragged shape when mouse leaves canvas
    canvas.addEventListener('mouseleave', () => {
      if (mouseConstraint.body) {
        (mouseConstraint as any).body = undefined;
      }
      // Also clear hover state
      hoveredSkillRef.current = null;
      if (hoverLabelRef.current) {
        hoverLabelRef.current.style.display = 'none';
      }
      // Resume all paused shapes
      shapes.forEach(body => {
        if (body.isStatic) {
          Body.setStatic(body, false);
        }
      });
    });

    // Detect hover and pause movement
    Events.on(mouseConstraint, 'mousemove', (event) => {
      const mousePosition = event.mouse.position;
      let foundHover = false;

      for (const body of shapes) {
        if (Matter.Bounds.contains(body.bounds, mousePosition)) {
          const vertices = body.vertices;
          if (Matter.Vertices.contains(vertices, mousePosition)) {
            hoveredSkillRef.current = body.label;
            if (hoverLabelRef.current) {
              hoverLabelRef.current.textContent = body.label;
              hoverLabelRef.current.style.display = 'block';
            }
            // Pause the hovered shape
            Body.setStatic(body, true);
            foundHover = true;
            break;
          }
        }
      }

      // Resume movement for non-hovered shapes
      shapes.forEach(body => {
        if (body.label !== hoveredSkillRef.current && body.isStatic) {
          Body.setStatic(body, false);
        }
      });

      if (!foundHover) {
        hoveredSkillRef.current = null;
        if (hoverLabelRef.current) {
          hoverLabelRef.current.style.display = 'none';
        }
      }
    });

    // Add continuous random movement force
    Events.on(engine, 'beforeUpdate', () => {
      shapes.forEach((bodyA, i) => {
        if (!bodyA.isStatic) {
          // Apply random force for chaotic movement
          const forceMagnitude = 0.0003;
          Body.applyForce(bodyA, bodyA.position, {
            x: (Math.random() - 0.5) * forceMagnitude,
            y: (Math.random() - 0.5) * forceMagnitude
          });

          // Add repulsion and attraction forces between shapes
          shapes.slice(i + 1).forEach((bodyB) => {
            if (!bodyB.isStatic) {
              const distance = Matter.Vector.magnitude(
                Matter.Vector.sub(bodyA.position, bodyB.position)
              );
              
              const direction = Matter.Vector.normalise(
                Matter.Vector.sub(bodyB.position, bodyA.position)
              );
              
              // REPULSION when too close (push away)
              if (distance < 100) {
                const repulsionForce = 0.00015 / (distance + 1);
                Body.applyForce(bodyA, bodyA.position, {
                  x: -direction.x * repulsionForce,
                  y: -direction.y * repulsionForce
                });
                Body.applyForce(bodyB, bodyB.position, {
                  x: direction.x * repulsionForce,
                  y: direction.y * repulsionForce
                });
              }
              
              // ATTRACTION at medium distance (pull together)
              if (distance > 150 && distance < 250) {
                const attractionForce = 0.00008;
                Body.applyForce(bodyA, bodyA.position, {
                  x: direction.x * attractionForce,
                  y: direction.y * attractionForce
                });
                Body.applyForce(bodyB, bodyB.position, {
                  x: -direction.x * attractionForce,
                  y: -direction.y * attractionForce
                });
              }
            }
          });

          // Limit velocity to keep movement smooth but visible
          const maxSpeed = 3.5;
          const velocity = bodyA.velocity;
          const speed = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
          
          if (speed > maxSpeed) {
            Body.setVelocity(bodyA, {
              x: (velocity.x / speed) * maxSpeed,
              y: (velocity.y / speed) * maxSpeed
            });
          }
          
          // Add minimum speed to keep things always moving
          if (speed < 0.8) {
            Body.setVelocity(bodyA, {
              x: velocity.x + (Math.random() - 0.5) * 0.8,
              y: velocity.y + (Math.random() - 0.5) * 0.8
            });
          }
        }
      });
    });

    // Custom rendering for text labels
    Events.on(render, 'afterRender', () => {
      const context = render.context;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      shapes.forEach((body) => {
        const { x, y } = body.position;
        const color = body.render.strokeStyle as string;
        const isHovered = body.label === hoveredSkillRef.current;
        
        // Add glow effect on hover
        if (isHovered) {
          context.shadowBlur = 20;
          context.shadowColor = color;
          context.strokeStyle = color;
          context.lineWidth = 5;
          
          // Redraw the shape with glow
          context.save();
          context.translate(x, y);
          context.rotate(body.angle);
          context.beginPath();
          
          if (body.circleRadius) {
            context.arc(0, 0, body.circleRadius, 0, Math.PI * 2);
          } else {
            const vertices = body.vertices;
            context.moveTo(vertices[0].x - x, vertices[0].y - y);
            for (let i = 1; i < vertices.length; i++) {
              context.lineTo(vertices[i].x - x, vertices[i].y - y);
            }
            context.closePath();
          }
          context.stroke();
          context.restore();
          
          context.shadowBlur = 0;
        }
        
        // Draw text
        const truncated = truncateText(body.label);
        context.fillStyle = isHovered ? '#000' : color;
        context.font = isHovered ? 'bold 13px Arial' : '12px Arial';
        context.save();
        context.translate(x, y);
        context.rotate(body.angle);
        context.fillText(truncated, 0, 0);
        context.restore();
      });
    });

    // Run the engine and renderer
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup
    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, [skills]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[350px] bg-[var(--accents-1)] rounded-lg overflow-hidden border border-[var(--accents-2)] shadow-lg"
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
        style={{ 
          width: '100%', 
          height: '100%',
          touchAction: 'auto'
        }}
      />
      
      {/* Category label overlay */}
      <div className="absolute top-2 left-2 bg-[var(--geist-background)]/80 backdrop-blur-sm px-3 py-1.5 rounded-md border border-[var(--accents-2)] pointer-events-none">
        <h3 className="text-sm font-bold text-[var(--geist-foreground)]">{categoryName}</h3>
        <p className="text-[9px] text-[var(--accents-5)] mt-0.5">Hover to pause</p>
      </div>
      
      {/* Hovered skill indicator */}
      <div 
        ref={hoverLabelRef}
        className="absolute bottom-2 right-2 bg-[var(--geist-background)]/95 backdrop-blur-sm px-3 py-1.5 rounded-md border border-[var(--accents-2)] shadow-lg pointer-events-none"
        style={{ display: 'none' }}
      >
        <p className="text-xs font-semibold text-[var(--geist-foreground)] whitespace-nowrap"></p>
      </div>
    </div>
  );
}


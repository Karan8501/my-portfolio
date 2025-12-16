import { portfolioData } from "../data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 overflow-hidden bg-[var(--accents-1)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center text-[var(--geist-foreground)]">My Journey</h2>
        
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--accents-2)] transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => {
               const isEven = index % 2 === 0;
               return (
                <div key={index} className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center justify-between`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[-5px] md:left-1/2 top-0 md:top-6 w-2.5 h-2.5 bg-[var(--geist-foreground)] rounded-full border-4 border-[var(--geist-background)] transform md:-translate-x-1/2 z-10 shadow-[0_0_0_4px_var(--accents-2)]"></div>

                  {/* Empty space for the other side */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                   <div className={`w-full md:w-[calc(50%-1rem)] pl-8 md:pl-0 ${isEven ? 'md:pr-4' : 'md:pl-4'} mt-2 md:mt-0`}>
                     <div className="bg-[var(--geist-background)] p-5 rounded-xl border border-[var(--accents-2)] hover:border-[var(--geist-foreground)] transition-colors text-left shadow-sm">
                       <div className="flex flex-col md:flex-row justify-between items-start mb-3 gap-1">
                            <div className="flex flex-col">
                           <h3 className="text-lg font-bold text-[var(--geist-foreground)]">{exp.role}</h3>
                           <div className="text-sm font-medium text-[var(--geist-link-color)]">
                                    {exp.link ? (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                            {exp.company}
                                        </a>
                                    ) : exp.company}
                                </div>
                           <span className="text-xs text-[var(--accents-4)]">{exp.location}</span>
                            </div>
                         <span className="text-xs text-[var(--accents-5)] font-mono whitespace-nowrap bg-[var(--accents-1)] px-2 py-0.5 rounded-full border border-[var(--accents-2)]">{exp.duration}</span>
                        </div>
                        
                       <div className="space-y-2 text-[var(--accents-6)] text-xs text-left">
                         {exp.description.slice(0, 2).map((desc, i) => (
                            <p key={i} className="leading-relaxed">{desc}</p>
                          ))}
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

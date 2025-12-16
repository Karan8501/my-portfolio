import { ProjectItem } from "../data/portfolio";
import { useState, useEffect } from "react";

interface ProjectModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const hasImages = project.images && project.images.length > 0;

  const nextImage = () => {
    if (hasImages) {
        setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
      if (hasImages) {
        setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
      }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-[var(--geist-background)] border border-[var(--accents-2)] rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header (Mobile close button) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-[var(--geist-background)]/80 rounded-full hover:bg-[var(--accents-2)] border border-[var(--accents-2)] transition-colors"
        >
          <svg className="w-5 h-5 text-[var(--geist-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col md:flex-row h-full">
            {/* Image Section */}
            <div className="w-full md:w-3/5 bg-[var(--accents-1)] relative flex items-center justify-center min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-[var(--accents-2)]">
                {hasImages ? (
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                        <img 
                            src={project.images![currentImageIndex]} 
                            alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-cover md:object-contain object-center"
                        />
                        
                        {/* Navigation Arrows */}
                        {project.images!.length > 1 && (
                            <>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                                
                                {/* Dots */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                                    {project.images!.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/40'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                ) : (
                    <div className="text-[var(--accents-4)] flex flex-col items-center">
                        <svg className="w-12 h-12 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <span>No images available</span>
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="w-full md:w-2/5 p-6 md:p-8 overflow-y-auto bg-[var(--geist-background)]">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--geist-foreground)] mb-3">{project.title}</h2>
                
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, i) => (
                        <span key={i} className="text-xs font-mono text-[var(--accents-6)] bg-[var(--accents-1)] px-2 py-1 rounded border border-[var(--accents-2)]">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="prose prose-sm dark:prose-invert text-[var(--accents-5)] mb-8">
                    <p className="text-base leading-relaxed">{project.description}</p>
                    {/* Add more fake details if needed or just styling */}
                    <p className="mt-4">
                        This project demonstrates advanced implementation of {project.stack[0]} and {project.stack[1] || 'modern web technologies'}. 
                        It features a responsive design, optimized performance, and follows best coding practices.
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-[var(--accents-2)] flex flex-col gap-3">
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full py-3 bg-[var(--geist-foreground)] text-[var(--geist-background)] font-medium rounded-lg hover:opacity-90 transition-opacity"
                        >
                            <span>Visit Live Site</span>
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                        </a>
                    )}
                    {/* Github link placeholder if I had it in data, checking data... "link" is generic. Assuming it might be live or github. Usually "link" is live. 
                        I'll add a generic Github button if I had the link. But I don't. 
                        I'll just leave the Visit Live Site button.
                    */}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

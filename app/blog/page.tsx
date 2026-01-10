import Link from "next/link";
import { blogs } from "../data/blogs";
import { SpotlightCard } from "@/components/cards/SpotlightCard";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-[var(--background)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--text-primary)] mb-4 text-center">Tech Blog</h1>
        <p className="text-lg text-[var(--text-secondary)] text-center mb-16 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on software engineering, system design, and web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <SpotlightCard className="h-full flex flex-col !p-0 bg-[var(--surface-primary)] hover:border-[var(--accent-primary)] transition-colors duration-300">
                <div className="relative w-full h-52 bg-[var(--surface-secondary)] overflow-hidden">
                    {blog.coverImage ? (
                        <img 
                            src={blog.coverImage} 
                            alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--text-tertiary)] bg-[var(--surface-secondary)]">
                            No Image
                        </div>
                    )}
                  <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-md rounded-md z-10">
                        {blog.language === 'hi' ? 'Hindi' : 'English'}
                    </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag, i) => (
                          <span key={i} className="text-[10px] font-semibold text-[var(--accent-primary)] bg-[var(--color-primary-light)] px-2.5 py-1 rounded-full uppercase tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)] mb-3 line-clamp-2 leading-tight group-hover:text-[var(--accent-primary)] transition-colors">
                        {blog.title}
                    </h2>
                  <p className="text-[var(--text-secondary)] text-sm mb-5 line-clamp-3 flex-grow leading-relaxed">
                        {blog.excerpt}
                    </p>
                  <div className="text-xs font-medium text-[var(--text-tertiary)] mt-auto pt-4 border-t border-[var(--border-primary)] flex justify-between items-center">
                    <span>{new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>Read Article →</span>
                    </div>
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

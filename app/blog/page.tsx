import Link from "next/link";
import { blogs } from "../data/blogs";
import { SpotlightCard } from "../components/SpotlightCard";

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-[var(--geist-background)]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--geist-foreground)] mb-4 text-center">Tech Blog</h1>
        <p className="text-lg text-[var(--accents-5)] text-center mb-16 max-w-2xl mx-auto">
          Thoughts, tutorials, and insights on software engineering, system design, and web development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blog/${blog.slug}`}>
              <SpotlightCard className="h-full flex flex-col !p-0 bg-[var(--accents-1)]/30 hover:bg-[var(--accents-1)]/50 transition-colors">
                <div className="relative w-full h-48 bg-[var(--accents-2)]">
                    {blog.coverImage ? (
                        <img 
                            src={blog.coverImage} 
                            alt={blog.title} 
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[var(--accents-5)]">
                            No Image
                        </div>
                    )}
                     <div className="absolute top-2 right-2 px-2 py-1 text-xs font-bold uppercase tracking-wider text-white bg-black/60 backdrop-blur-sm rounded">
                        {blog.language === 'hi' ? 'Hindi' : 'English'}
                    </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-3">
                        {blog.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-[var(--accents-5)] bg-[var(--accents-2)] px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h2 className="text-xl font-bold text-[var(--geist-foreground)] mb-3 line-clamp-2">
                        {blog.title}
                    </h2>
                    <p className="text-[var(--accents-5)] text-sm mb-4 line-clamp-3 flex-grow">
                        {blog.excerpt}
                    </p>
                    <div className="text-xs text-[var(--accents-4)] mt-auto pt-4 border-t border-[var(--accents-2)]">
                        {new Date(blog.date).toLocaleDateString()}
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

import { blogs } from "../../data/blogs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { notFound } from "next/navigation";

// Generate static params for all blogs
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const blog = blogs.find((p) => p.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-32 pb-16 px-6 bg-[var(--geist-background)]">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-[var(--accents-5)] hover:text-[var(--geist-foreground)] mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Back to Blog
        </Link>
        
        <header className="mb-10 text-center">
             <div className="flex justify-center flex-wrap gap-2 mb-4">
                {blog.tags.map((tag, i) => (
                    <span key={i} className="text-sm font-medium text-[var(--geist-foreground)] bg-[var(--accents-2)] px-3 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--geist-foreground)] mb-6 leading-tight">
                {blog.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-[var(--accents-5)] text-sm">
                <time dateTime={blog.date}>
                    {new Date(blog.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <span>•</span>
                <span className="uppercase tracking-wider font-semibold text-[var(--accents-4)]">
                    {blog.language === 'en' ? 'English' : 'Hindi'}
                </span>
            </div>
        </header>

        {blog.coverImage && (
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-12 border border-[var(--accents-2)]">
                <img 
                    src={blog.coverImage} 
                    alt={blog.title} 
                    className="w-full h-full object-cover"
                />
            </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-[var(--geist-foreground)] prose-p:text-[var(--accents-5)] prose-strong:text-[var(--geist-foreground)] prose-code:text-[var(--geist-success)] prose-pre:bg-[var(--accents-1)] prose-pre:border prose-pre:border-[var(--accents-2)]">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content}
            </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

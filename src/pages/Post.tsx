import { useParams } from 'react-router-dom';
import { SEO } from '../lib/seo';
import { Section } from '../components/Section';
import { Badge } from '../components/Badge';
import { MDXComponents } from '../lib/mdx';

// Import all MDX files
const mdxModules = import.meta.glob('../content/posts/*.mdx', { eager: true });

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  content: any;
}

// Parse frontmatter and create blog posts array
const posts: BlogPost[] = Object.entries(mdxModules).map(([path, module]: [string, any]) => {
  const slug = path.split('/').pop()?.replace('.mdx', '') || '';
  const { frontmatter, default: Content } = module;
  
  return {
    slug,
    title: frontmatter.title,
    description: frontmatter.description,
    date: frontmatter.date,
    tags: frontmatter.tags || [],
    content: Content
  };
});

export function Post() {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post by slug
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <SEO 
          title="Post Not Found" 
          description="The requested blog post could not be found." 
          path={`/blog/${slug}`} 
        />
        <Section title="Post Not Found" className="py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Post Not Found
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <a
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
            >
              ← Back to Blog
            </a>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <SEO 
        title={post.title} 
        description={post.description} 
        path={`/blog/${post.slug}`} 
      />
      
      <Section className="py-16">
        <article className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <time 
                className="text-gray-600 dark:text-gray-400"
                dateTime={post.date}
              >
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {post.description}
            </p>
          </header>

          {/* Post Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <MDXComponents>
              <post.content />
            </MDXComponents>
          </div>

          {/* Post Footer */}
          <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <a
                href="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
              >
                ← Back to Blog
              </a>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Published on {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </footer>
        </article>
      </Section>
    </>
  );
}

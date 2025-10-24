import { SEO } from '../lib/seo';
import { Section } from '../components/Section';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';

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
}).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function Blog() {
  return (
    <>
      <SEO 
        title="Blog" 
        description="Read Mesfin Kenaw's latest thoughts, articles, and insights on software development, technology, and programming." 
        path="/blog" 
      />
      
      <Section title="Blog Posts" className="py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, insights, and lessons learned from my journey in software development.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article 
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      <a 
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
                      >
                        {post.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 md:ml-6">
                    <time 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      dateTime={post.date}
                    >
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <Button 
                    as="a" 
                    href={`/blog/${post.slug}`}
                    variant="outline"
                    size="sm"
                  >
                    Read More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to stay updated with new posts?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900 rounded"
          >
            Get in touch →
          </a>
        </div>
      </Section>
    </>
  );
}

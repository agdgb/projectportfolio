import { SEO } from '../lib/seo';
import { Section } from '../components/Section';
import { ProjectCard } from '../components/ProjectCard';
import { Badge } from '../components/Badge';
import { projects } from '../content/projects';

export function Projects() {
  return (
    <>
      <SEO 
        title="Projects" 
        description="Explore Mesfin Kenaw's portfolio of software development projects, web applications, and technical work." 
        path="/projects" 
      />
      
      <Section title="My Projects" className="py-16">
        <div className="text-center mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing my work in software development, 
            from full-stack applications to data visualization and AI integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              liveUrl={project.links.demo}
              githubUrl={project.links.repo}
            >
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Badge variant="outline" size="sm">
                  {project.year}
                </Badge>
                <div className="flex gap-2">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" size="sm">
                      {tag}
                    </Badge>
                  ))}
                  {project.tags.length > 2 && (
                    <Badge variant="secondary" size="sm">
                      +{project.tags.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </ProjectCard>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
          >
            Get in touch →
          </a>
        </div>
      </Section>
    </>
  );
}

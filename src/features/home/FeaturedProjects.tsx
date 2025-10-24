import { ProjectCard } from '../../components/ProjectCard';
import ecomImg from '../../assets/ecom.jpeg';
import dashboardImg from '../../assets/dashboard.jpg';
import aiImg from '../../assets/ai.jpeg';

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "TypeScript"],
    image: ecomImg,
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/agdgb"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for analyzing business metrics with real-time data updates. Built with D3.js for custom visualizations and WebSocket for live data streaming.",
    tags: ["D3.js", "WebSocket", "Python", "FastAPI", "Redis"],
    image: dashboardImg,
    liveUrl: "https://example.com/dashboard",
    githubUrl: "https://github.com/agdgb"
  },
  {
    title: "AI Chat Assistant",
    description: "Intelligent chat assistant powered by OpenAI's GPT API. Features context-aware conversations, file upload support, and conversation history management.",
    tags: ["OpenAI", "React", "Node.js", "MongoDB", "WebSocket"],
    image: aiImg,
    liveUrl: "https://example.com/chat",
    githubUrl: "https://github.com/agdgb"
  }
];

export function FeaturedProjects() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A showcase of my recent work, highlighting full-stack development, 
          data visualization, and AI integration projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            liveUrl={project.liveUrl}
            githubUrl={project.githubUrl}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded">
          View All Projects →
        </button>
      </div>
    </div>
  );
}

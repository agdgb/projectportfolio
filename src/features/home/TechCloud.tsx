import { Badge } from '../../components/Badge';

const technologies = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Svelte", category: "frontend" },
  
  // Backend
  { name: "Node.js", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "FastAPI", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
  { name: "MongoDB", category: "backend" },
  { name: "Redis", category: "backend" },
  
  // Cloud & DevOps
  { name: "AWS", category: "cloud" },
  { name: "Docker", category: "cloud" },
  { name: "Kubernetes", category: "cloud" },
  { name: "Vercel", category: "cloud" },
  { name: "Netlify", category: "cloud" },
  
  // Tools & Others
  { name: "Git", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Jest", category: "tools" },
  { name: "Cypress", category: "tools" },
];

const categoryColors = {
  frontend: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
  backend: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
  cloud: "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300",
  tools: "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300",
};

export function TechCloud() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Technologies & Tools
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A comprehensive overview of the technologies and tools I work with 
          to build modern web applications.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {technologies.map((tech, index) => (
          <Badge
            key={index}
            size="lg"
            className={`transition-all duration-300 hover:scale-105 hover:shadow-md ${categoryColors[tech.category as keyof typeof categoryColors]}`}
          >
            {tech.name}
          </Badge>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Always learning and exploring new technologies
        </p>
      </div>
    </div>
  );
}

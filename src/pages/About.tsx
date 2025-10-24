import { SEO } from '../lib/seo';
import { Section } from '../components/Section';
import { Timeline } from '../components/Timeline';

const experience = [
  {
    title: "Senior Software Developer",
    organization: "Tech Solutions Inc.",
    period: "2023 - Present",
    description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices for code quality and performance.",
    tags: ["React", "Node.js", "AWS", "Leadership"]
  },
  {
    title: "Full Stack Developer",
    organization: "Digital Innovations",
    period: "2021 - 2023",
    description: "Developed full-stack applications with modern frameworks. Collaborated with cross-functional teams to deliver high-quality software solutions and improved user experiences.",
    tags: ["JavaScript", "Python", "PostgreSQL", "Docker"]
  },
  {
    title: "Frontend Developer",
    organization: "WebCraft Studio",
    period: "2020 - 2021",
    description: "Focused on creating responsive and accessible user interfaces. Specialized in React development and modern CSS techniques to deliver exceptional user experiences.",
    tags: ["React", "CSS", "Accessibility", "UI/UX"]
  },
  {
    title: "Junior Developer",
    organization: "StartupXYZ",
    period: "2019 - 2020",
    description: "Started my professional journey in software development. Learned fundamentals of web development and contributed to various projects while growing my technical skills.",
    tags: ["HTML", "CSS", "JavaScript", "Learning"]
  }
];

const education = [
  {
    title: "Bachelor of Computer Science",
    organization: "University of Technology",
    period: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and data structures. Participated in coding competitions and open-source projects.",
    tags: ["Computer Science", "Algorithms", "Data Structures"]
  }
];

export function About() {
  return (
    <>
      <SEO 
        title="About" 
        description="Learn more about Mesfin Kenaw's background, experience, and passion for software development." 
        path="/about" 
      />
      
      <Section title="About Me" className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software developer with over 5 years of experience building 
              modern web applications. I love creating elegant solutions to complex problems 
              and helping others grow in their development journey.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <Timeline 
                items={experience}
                title="Professional Experience"
                className="mb-8"
              />
            </div>

            {/* Education */}
            <div>
              <Timeline 
                items={education}
                title="Education"
                className="mb-8"
              />
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Skills & Interests
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Technical Skills
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Frontend: React, TypeScript, Next.js, Tailwind CSS</li>
                  <li>• Backend: Node.js, Python, PostgreSQL, MongoDB</li>
                  <li>• Cloud: AWS, Docker, Kubernetes</li>
                  <li>• Tools: Git, VS Code, Figma, Jest</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  Interests
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Open source contributions</li>
                  <li>• Technical writing and mentoring</li>
                  <li>• Accessibility and inclusive design</li>
                  <li>• Continuous learning and growth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import type { ReactNode } from "react";
import { Badge } from "./Badge";
import { Button } from "./Button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  children?: ReactNode;
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
  children,
}: ProjectCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:focus-within:ring-offset-gray-900 overflow-hidden">
      {image && (
        <div className="aspect-video bg-gray-100 dark:bg-gray-700 overflow-hidden">
          <img
            src={image}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" size="sm">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="flex gap-3">
          {liveUrl && (
            <Button
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg
              bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-medium shadow-lg
              hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
              transform transition-all duration-200 hover:-translate-y-0.5 hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M14 3h7v7h-2V6.41L10.41 18 9 16.59 18.59 7H14V3z" />
                <path d="M5 5h8v2H7v10h10v-8h2v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
              </svg>
              <span>View Live</span>
            </Button>
          )}
          {githubUrl && (
            <Button
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border-gray-300 dark:border-gray-600 
                   bg-linear-to-r from-white/40 to-white/5 dark:from-gray-800/60 dark:to-transparent
                   text-gray-900 dark:text-white shadow-sm hover:shadow-lg transform transition-all duration-200
                   hover:-translate-y-0.5 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.9 3.17 9.06 7.57 10.53.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.08.67-3.73-1.49-3.73-1.49-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.07-.67.07-.67 1.09.08 1.66 1.12 1.66 1.12.97 1.66 2.55 1.18 3.17.9.1-.7.38-1.18.69-1.45-2.46-.28-5.05-1.23-5.05-5.48 0-1.21.43-2.2 1.13-2.98-.11-.28-.49-1.42.11-2.96 0 0 .92-.29 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.13 3.02-1.13.6 1.54.22 2.68.11 2.96.7.78 1.13 1.77 1.13 2.98 0 4.26-2.6 5.2-5.07 5.48.39.34.73 1 .73 2.03 0 1.47-.01 2.65-.01 3.01 0 .29.2.64.76.53A11.27 11.27 0 0 0 23.25 11.75C23.25 5.48 18.27.5 12 .5z" />
              </svg>
              <span className="font-medium">GitHub</span>
            </Button>
          )}
        </div>

        {children}
      </div>
    </div>
  );
}

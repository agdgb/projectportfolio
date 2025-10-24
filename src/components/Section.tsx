import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function Section({ children, title, className = '' }: SectionProps) {
  return (
    <section className={`container max-w-6xl mx-auto px-4 md:px-6 lg:px-8 ${className}`}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

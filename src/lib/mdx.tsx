/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXProvider } from '@mdx-js/react';
import type { ReactNode } from 'react';

interface MDXComponentsProps {
  children: ReactNode;
}

const components = {
  // Headings
  h1: (props: any) => (
    <h1 
      className="text-4xl font-bold text-gray-900 dark:text-white mb-6 mt-8 first:mt-0" 
      {...props} 
    />
  ),
  h2: (props: any) => (
    <h2 
      className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 mt-8" 
      {...props} 
    />
  ),
  h3: (props: any) => (
    <h3 
      className="text-2xl font-semibold text-gray-900 dark:text-white mb-3 mt-6" 
      {...props} 
    />
  ),
  
  // Paragraphs
  p: (props: any) => (
    <p 
      className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed" 
      {...props} 
    />
  ),
  
  // Links
  a: (props: any) => (
    <a 
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline decoration-2 underline-offset-2 hover:decoration-blue-800 dark:hover:decoration-blue-300 transition-colors duration-200" 
      {...props} 
    />
  ),
  
  // Code
  code: (props: any) => (
    <code 
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm font-mono" 
      {...props} 
    />
  ),
  
  pre: (props: any) => (
    <pre 
      className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" 
      {...props} 
    />
  ),
  
  // Lists
  ul: (props: any) => (
    <ul 
      className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" 
      {...props} 
    />
  ),
  ol: (props: any) => (
    <ol 
      className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2" 
      {...props} 
    />
  ),
  li: (props: any) => (
    <li 
      className="text-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  
  // Blockquotes
  blockquote: (props: any) => (
    <blockquote 
      className="border-l-4 border-blue-500 dark:border-blue-400 pl-4 italic text-gray-600 dark:text-gray-400 mb-4" 
      {...props} 
    />
  ),
  
  // Tables
  table: (props: any) => (
    <table 
      className="w-full border-collapse border border-gray-300 dark:border-gray-600 mb-4" 
      {...props} 
    />
  ),
  th: (props: any) => (
    <th 
      className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-semibold text-gray-900 dark:text-white" 
      {...props} 
    />
  ),
  td: (props: any) => (
    <td 
      className="border border-gray-300 dark:border-gray-600 px-4 py-2 text-gray-700 dark:text-gray-300" 
      {...props} 
    />
  ),
  
  // Horizontal rule
  hr: (props: any) => (
    <hr 
      className="border-gray-300 dark:border-gray-600 my-8" 
      {...props} 
    />
  ),
  
  // Images
  img: (props: any) => (
    <img 
      className="max-w-full h-auto rounded-lg shadow-sm mb-4" 
      loading="lazy"
      {...props} 
    />
  ),
};

export function MDXComponents({ children }: MDXComponentsProps) {
  return (
    <MDXProvider components={components}>
      <div className="prose prose-lg max-w-none dark:prose-invert">
        {children}
      </div>
    </MDXProvider>
  );
}

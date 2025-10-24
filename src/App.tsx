import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Section } from './components/Section'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-md z-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content" className="flex-1">
        <Section title="Welcome to My Portfolio">
          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              This is a modern, accessible portfolio built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Built with mobile-first approach and accessible navigation.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Dark Mode</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  System preference detection with manual toggle options.
                </p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  WCAG compliant with keyboard navigation and focus management.
                </p>
              </div>
            </div>
          </div>
        </Section>

        <Section title="About" className="py-16">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate developer focused on creating beautiful, accessible, and performant web experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              This portfolio demonstrates modern React patterns, TypeScript best practices, and responsive design principles.
            </p>
          </div>
        </Section>

        <Section title="Projects" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                A modern, accessible portfolio built with React, TypeScript, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                  Tailwind CSS
                </span>
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                More exciting projects will be added here soon.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm rounded-full">
                  In Development
                </span>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Contact" className="py-16">
          <div className="max-w-2xl">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              Let's connect and discuss opportunities or just say hello!
            </p>
            <div className="space-y-4">
              <a
                href="mailto:hello@example.com"
                className="block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
              >
                hello@example.com
              </a>
              <p className="text-gray-600 dark:text-gray-300">
                Available for freelance work and collaboration opportunities.
              </p>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

import { SocialLinks } from './SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Portfolio. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <SocialLinks />
          </div>

          {/* Additional Links */}
          <div className="flex items-center space-x-6 text-sm">
            <a
              href="#privacy"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
            >
              Privacy
            </a>
            <a
              href="#terms"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 rounded"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

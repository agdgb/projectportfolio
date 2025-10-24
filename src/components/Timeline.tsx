interface TimelineItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  tags?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
  title?: string;
  className?: string;
}

export function Timeline({ items, title, className = '' }: TimelineProps) {
  return (
    <div className={`${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
          {title}
        </h3>
      )}
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
        
        <div className="space-y-8">
          {items.map((item, index) => (
            <div key={index} className="relative flex items-start">
              {/* Timeline dot */}
              <div className="relative z-10 flex items-center justify-center w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900">
                <div className="w-2 h-2 bg-white dark:bg-gray-900 rounded-full"></div>
              </div>
              
              {/* Content */}
              <div className="ml-6 flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">
                      {item.period}
                    </span>
                  </div>
                  
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                    {item.organization}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

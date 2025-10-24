import { useEffect } from 'react';

export const siteConfig = {
  name: "Mesfin Kenaw",
  titleTemplate: "%s · Mesfin Kenaw",
  description: "Software developer — elegant web apps, data, and AI.",
  url: "https://example.com",
  ogImage: "/images/og.png",
  social: { 
    github: "#", 
    linkedin: "#", 
    x: "#", 
    email: "you@example.com" 
  },
} as const;

interface SEOProps {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}

export function SEO({ 
  title, 
  description = siteConfig.description, 
  path = '', 
  image = siteConfig.ogImage,
  noIndex = false 
}: SEOProps) {
  const fullTitle = title ? siteConfig.titleTemplate.replace('%s', title) : siteConfig.name;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = image.startsWith('http') ? image : `${siteConfig.url}${image}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // Basic Meta Tags
    updateMetaTag('description', description);
    updateLinkTag('canonical', canonicalUrl);
    
    // Robots
    if (noIndex) {
      updateMetaTag('robots', 'noindex,nofollow');
    } else {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      if (robotsMeta) {
        robotsMeta.remove();
      }
    }
    
    // Open Graph
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:title', fullTitle, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImageUrl, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', siteConfig.name, true);
    
    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', fullTitle);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImageUrl);
    
    // Additional Meta Tags
    updateMetaTag('author', siteConfig.name);
  }, [fullTitle, description, canonicalUrl, ogImageUrl, noIndex]);

  return null;
}

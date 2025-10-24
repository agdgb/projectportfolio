import { SEO } from '../lib/seo';
import { Section } from '../components/Section';
import { Hero } from '../features/home/Hero';
import { FeaturedProjects } from '../features/home/FeaturedProjects';
import { TechCloud } from '../features/home/TechCloud';

export function Home() {
  return (
    <>
      <SEO 
        title="Home" 
        description="Welcome to Mesfin Kenaw's portfolio. Software developer specializing in elegant web apps, data, and AI." 
        path="/" 
      />
      
      <Hero />
      
      <Section title="Featured Projects" className="py-16">
        <FeaturedProjects />
      </Section>
      
      <Section title="Technologies" className="py-16">
        <TechCloud />
      </Section>
    </>
  );
}

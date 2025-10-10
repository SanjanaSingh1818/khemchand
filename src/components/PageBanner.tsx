import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import railwayBg from '@/assets/railway-hero-bg.jpg';

interface PageBannerProps {
  title: string;
  breadcrumbs?: { label: string; href: string }[];
}

const PageBanner = ({ title, breadcrumbs = [] }: PageBannerProps) => {
  return (
    <div className="relative py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${railwayBg})` }}
      ></div>
      
      {/* Reddish Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 to-red-800/60"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
          {title}
        </h1>
        
        {/* Breadcrumbs */}
        <div className="flex items-center justify-center space-x-2 text-white/90">
          <Link to="/" className="hover:text-primary transition-smooth">
            Home
          </Link>
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-primary" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-primary transition-smooth">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
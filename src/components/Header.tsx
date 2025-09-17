import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import khemchandLogo from '@/assets/khemchand-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        {/* Top Info Bar */}
        <div className="hidden lg:flex items-center justify-between py-2 text-sm text-muted-foreground border-b border-border/50">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+91 XX XXXX XXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@khemchandgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Delhi, India</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Facebook className="h-4 w-4 text-primary hover:text-accent cursor-pointer transition-smooth" />
            <Twitter className="h-4 w-4 text-primary hover:text-accent cursor-pointer transition-smooth" />
            <Linkedin className="h-4 w-4 text-primary hover:text-accent cursor-pointer transition-smooth" />
            <Instagram className="h-4 w-4 text-primary hover:text-accent cursor-pointer transition-smooth" />
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <img src={khemchandLogo} alt="Khemchand Group" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-navy font-medium hover:text-primary transition-smooth relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Download Profile
            </Button>
            <Button variant="hero" size="lg">
              Enquire Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-navy font-medium hover:text-primary transition-smooth"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Download Profile
                </Button>
                <Button variant="hero" size="lg">
                  Enquire Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
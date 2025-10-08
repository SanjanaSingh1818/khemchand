import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import khemchandLogo from '@/assets/khemchand-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'LEADERSHIP', href: '/leadership' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Info Bar */}
      <div className="bg-white border-b border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={khemchandLogo} alt="Khemchand Group" className="h-14 w-auto" />
            </Link>

            {/* Right Section - Inquiry, Social, Email */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Inquiry */}
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Inquiry</span>
                  <span className="text-sm font-semibold text-foreground">+91-XXXXXXXXXX</span>
                </div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin className="h-6 w-6 text-[#0077B5]" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Instagram className="h-6 w-6 text-[#E4405F]" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Mail Us</span>
                  <span className="text-sm font-semibold text-foreground">info@khemchandgroup.com</span>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-navy">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-white font-medium px-4 py-4 hover:bg-primary/10 transition-smooth relative ${
                    isActive(item.href) ? 'bg-primary/20' : ''
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Enquire Now Button */}
            <div className="hidden lg:block py-2">
              <Button 
                className="bg-primary hover:bg-primary-hover text-white font-semibold px-5 py-2"
              >
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-white font-medium py-2 px-4 rounded hover:bg-primary/10 transition-smooth ${
                  isActive(item.href) ? 'bg-primary/20' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button 
                className="bg-primary hover:bg-primary-hover text-white font-semibold w-full"
                size="lg"
              >
                Enquire Now
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
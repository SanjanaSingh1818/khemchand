import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, Linkedin, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import khemchandLogo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT US', href: '/about' },
    { name: 'SERVICES', href: '/services' },
    { name: 'LEADERSHIP', href: '/leadership' },
    { name: 'CAREERS', href: '/careers' },
    { name: 'CONTACT US', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
     id="main-header" className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      {/* Top Info Bar */}
      <div className="bg-[#f9f9f9] border-b border-border/30">
        <div className="container mx-auto px-2">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={khemchandLogo} alt="Khemchand Group" className="h-16 w-auto" />
            </Link>

            {/* Right Section - Inquiry, Social, Email */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Inquiry */}
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-primary" />
                <a href="tel:+915422400225" className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Inquiry</span>
                  <span className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                    +91-5422400225
                  </span>
                </a>
              </div>

              {/* Social Icons */}
              <div className="flex items-center space-x-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Linkedin className="h-6 w-6 text-[#4f5c8c]" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <Instagram className="h-6 w-6 text-[#E4405F]" />
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-primary" />
                <div className="flex flex-col">
                  <span className="text-xs text-muted-foreground">Mail Us</span>
                  <a
                    href="mailto:info@khemchandgroup.com"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    info@khemchandgroup.com
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div
        className={`transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-red-600 font-medium px-4 py-4 relative transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-900 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-900'
                      : 'hover:text-red-600'
                  } ${isScrolled ? 'text-black hover:text-red-600' : 'text-red-600'}`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Enquire Now Button */}
            <div className="hidden lg:block py-2">
              <a href="#contact" className="inline-block">
                <Button
                  variant="outline"
                  className={`font-semibold px-5 py-2 h-auto border-2 transition-colors duration-300 ${
                    isScrolled
                      ? 'bg-red-600 text-white border-red-600 hover:bg-white hover:text-red-600'
                      : 'bg-transparent text-white border-white hover:bg-white hover:text-red-600'
                  }`}
                >
                  Enquire Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/90 border-t border-white/10">
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
              <Button className="bg-primary hover:bg-primary-hover text-white font-semibold w-full" size="lg">
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

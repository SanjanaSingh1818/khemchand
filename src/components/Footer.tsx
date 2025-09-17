import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Download,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import khemchandLogo from '@/assets/khemchand-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const services = [
    { name: 'Concrete Sleepers', href: '#services' },
    { name: 'Flash Butt Welding', href: '#services' },
    { name: 'USFD Testing', href: '#services' },
    { name: 'CMS Crossing Reconditioning', href: '#services' },
    { name: 'Broken Rail Detection', href: '#services' },
    { name: 'Lubrication Systems', href: '#services' }
  ];

  const certifications = [
    'ISO 9001:2015 Certified',
    'Railway Board Approved',
    'RDSO Specifications',
    'Quality Management System'
  ];

  return (
    <footer className="bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="railway-track absolute top-0 left-0 right-0"></div>
        <div className="railway-track absolute top-8 left-0 right-0"></div>
        <div className="railway-track absolute top-16 left-0 right-0"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <img src={khemchandLogo} alt="Khemchand Group" className="h-16 w-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Khemchand Group</h3>
                <p className="text-white/80 leading-relaxed">
                  Building the future of Indian Railways with 30+ years of engineering excellence. 
                  Your trusted partner for railway infrastructure solutions.
                </p>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-railway-yellow transition-smooth flex items-center group"
                    >
                      <span>{link.name}</span>
                      <ExternalLink className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transition-smooth" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a 
                      href={service.href}
                      className="text-white/80 hover:text-railway-yellow transition-smooth"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-railway-yellow mt-1 flex-shrink-0" />
                  <div className="text-white/80">
                    <p>123 Railway Engineering Complex</p>
                    <p>New Delhi - 110001, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-railway-yellow flex-shrink-0" />
                  <div className="text-white/80">
                    <p>+91 11 2345 6789</p>
                    <p>+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-railway-yellow flex-shrink-0" />
                  <div className="text-white/80">
                    <p>info@khemchandgroup.com</p>
                    <p>projects@khemchandgroup.com</p>
                  </div>
                </div>
              </div>

              {/* Download Button */}
              <div className="mt-6">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  <Download className="mr-2 h-4 w-4" />
                  Company Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications & Awards */}
        <div className="py-8 border-t border-white/20">
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold mb-4">Certifications & Standards</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-sm text-white/90">{cert}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sister Concern */}
        <div className="py-8 border-t border-white/20">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-3">Sister Concern</h4>
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl p-6 max-w-2xl mx-auto">
              <h5 className="text-xl font-semibold text-railway-yellow mb-2">Precision Equipments Co.</h5>
              <p className="text-white/80 mb-4">
                Specializing in precision machining and fabrication for ALCO & EMD Engines, 
                Turbo Dowelling, HHP Traction Motors, and Industrial Blowers.
              </p>
              <Button variant="outline" size="sm" className="border-railway-yellow text-railway-yellow hover:bg-railway-yellow hover:text-navy">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {currentYear} Khemchand Group. All rights reserved. | Building the Future of Indian Railways
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-railway-yellow transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-railway-yellow transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-railway-yellow transition-smooth">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
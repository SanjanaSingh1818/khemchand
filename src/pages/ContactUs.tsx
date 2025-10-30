import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  Building,
  User,
  MessageSquare
} from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      // Contact form animation
      gsap.fromTo('.contact-form',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
          }
        }
      );

      // Contact info animation
      gsap.fromTo('.contact-info',
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
          }
        }
      );

      // Form field animations
      gsap.fromTo('.form-field',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Head Office',
      details: [
        'Ramapura Luxa, Varanasi, Uttar Pradesh 221010'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Numbers',
      details: [
        '+91-5422400225',
        // '+91-11-XXXX-XXXX (Sales)',
        // '+91-11-XXXX-XXXX (Support)',
        // '1800-XXX-XXXX (Toll Free)'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Addresses',
      details: [
        'info@khemchandgroup.com',
        // 'sales@khemchandgroup.com',
        // 'careers@khemchandgroup.com',
        // 'support@khemchandgroup.com'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Saturday: 12:00 PM - 8:00 PM',
        // 'Saturday: 12:00 AM - 1:00 PM',
        'Sunday: Closed',
        
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: '#' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      
      <PageBanner 
        title="CONTACT US" 
        breadcrumbs={[{ label: 'CONTACT US', href: '' }]} 
      />

      {/* Contact Section */}
      <section className="contact-section py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="contact-form">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-navy flex items-center gap-3">
                    <MessageSquare className="w-8 h-8 text-primary" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-field space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="focus:ring-primary"
                          required
                        />
                      </div>
                      <div className="form-field space-y-2">
                        <Label htmlFor="email" className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="form-field space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          className="focus:ring-primary"
                        />
                      </div>
                      <div className="form-field space-y-2">
                        <Label htmlFor="subject" className="flex items-center gap-2">
                          <Building className="w-4 h-4" />
                          Subject
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          className="focus:ring-primary"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us about your project requirements..."
                        rows={6}
                        className="focus:ring-primary resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="contact-info space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Get in Touch</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you have questions about our services, need a project quote, 
                  or want to explore partnership opportunities, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 railway-gradient rounded-lg flex items-center justify-center text-white flex-shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-navy mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <Card className="shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-navy mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 railway-gradient rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
<section className="py-20 bg-muted">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-navy mb-4">Find Us</h2>
      <p className="text-xl text-muted-foreground">
        Located in the heart of Delhi's industrial area
      </p>
    </div>

    <Card className="shadow-elegant overflow-hidden rounded-3xl">
      <div className="w-full h-[70vh] md:h-[60vh]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.8833094786414!2d82.99711977484104!3d25.308124327199707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2ff222937589%3A0xe0a60154a1a717cd!2sKhemchand%20Group!5e0!3m2!1sen!2sin!4v1760734119500!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Card>
  </div>
</section>

      {/* Railway Track Footer */}
      <div className="relative py-8 railway-gradient">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Ready to Start Your Project?</h3>
          <p className="text-white/90 mb-6">
            Let's discuss how we can help build your railway infrastructure vision
          </p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <Link to="/contact">
    <Button variant="accent" size="lg">
      Request Quote
    </Button>
  </Link>
  <Link to="/contact">
    <Button variant="outline" size="lg" className="border-white text-red-500 hover:bg-white hover:text-navy">
      Schedule Meeting
    </Button>
  </Link>
</div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
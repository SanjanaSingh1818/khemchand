import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Building,
  Users,
  Briefcase
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Office',
      details: ['123 Railway Engineering Complex', 'New Delhi - 110001', 'India'],
      color: 'primary'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 11 2345 6789', '+91 98765 43210', 'Mon-Sat: 9:00 AM - 6:00 PM'],
      color: 'secondary'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@khemchandgroup.com', 'projects@khemchandgroup.com', 'careers@khemchandgroup.com'],
      color: 'accent'
    }
  ];

  const careers = [
    { position: 'Railway Engineer', department: 'Engineering', type: 'Full-time' },
    { position: 'Quality Inspector', department: 'Quality Assurance', type: 'Full-time' },
    { position: 'Project Manager', department: 'Operations', type: 'Full-time' },
    { position: 'Welding Technician', department: 'Production', type: 'Contract' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.contact-header', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.contact-header',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Contact cards animation
      gsap.fromTo('.contact-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Form animation
      gsap.fromTo('.contact-form',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={contactRef} id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="contact-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your railway infrastructure? Get in touch with our expert team 
            for consultation, quotes, or project discussions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="contact-info space-y-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="contact-card bg-white p-6 rounded-2xl shadow-card hover:shadow-elegant transition-smooth"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-${info.color}/10 mb-4`}>
                    <info.icon className={`h-6 w-6 text-${info.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="contact-form bg-white p-8 rounded-3xl shadow-elegant">
              <h3 className="text-2xl font-semibold text-navy mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2">
                      Company
                    </label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Enter message subject"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={6}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy mb-4">Join Our Team</h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Work with us to transform the future of Indian Railways. 
              Explore current opportunities and grow your career in railway engineering.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-elegant">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careers.map((career, index) => (
                <div
                  key={career.position}
                  className="border border-border rounded-xl p-6 hover:border-primary transition-smooth group"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-sm text-primary font-medium">{career.type}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-navy mb-2 group-hover:text-primary transition-smooth">
                    {career.position}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{career.department}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    Apply Now
                  </Button>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button variant="hero" size="lg">
                <Users className="mr-2 h-5 w-5" />
                View All Openings
              </Button>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-3xl p-8 shadow-elegant">
          <h3 className="text-2xl font-semibold text-navy mb-6 text-center">Find Us</h3>
          <div className="bg-muted/30 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-navy mb-2">Interactive Map</h4>
              <p className="text-muted-foreground">
                Google Maps integration would be placed here<br />
                showing our office location in New Delhi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
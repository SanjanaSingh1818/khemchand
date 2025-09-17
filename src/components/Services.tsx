import { useEffect, useRef } from 'react';
import { 
  Wrench, 
  Zap, 
  Search, 
  Settings, 
  AlertTriangle, 
  Droplets,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Wrench,
      title: 'Concrete Sleepers',
      description: 'Manufacturing and supply of high-quality MBC (Monoblock Concrete) sleepers for Indian Railways',
      features: ['IS:13857 Compliant', 'Pre-stressed Concrete', 'Long-lasting Durability', 'Quality Assurance'],
      color: 'primary'
    },
    {
      icon: Zap,
      title: 'Flash Butt Welding',
      description: 'Advanced flash butt welding services for rail joints with precision and reliability',
      features: ['2,00,000+ Joints Completed', 'IS:2825 Standards', 'Quality Testing', 'On-site Services'],
      color: 'accent'
    },
    {
      icon: Search,
      title: 'USFD Testing of Rails/Welds',
      description: 'Ultrasonic flaw detection testing ensuring the integrity of rails and welded joints',
      features: ['40,000+ Tkm Tested', 'Non-destructive Testing', 'Detailed Reporting', 'Expert Analysis'],
      color: 'secondary'
    },
    {
      icon: Settings,
      title: 'Reconditioning of CMS Crossing',
      description: 'Complete reconditioning and maintenance of Cast Manganese Steel crossings',
      features: ['Extended Life Cycle', 'Cost-effective Solution', 'Quality Restoration', 'Performance Testing'],
      color: 'navy'
    },
    {
      icon: AlertTriangle,
      title: 'Broken Rail Detection (BRD)',
      description: 'Advanced systems for early detection and prevention of rail breaks',
      features: ['Early Warning System', 'Real-time Monitoring', 'Safety Enhancement', '24/7 Support'],
      color: 'railway-red'
    },
    {
      icon: Droplets,
      title: 'Lubrication Systems',
      description: 'Specialized lubrication systems for railway applications and maintenance',
      features: ['Automated Systems', 'Reduced Wear', 'Cost Savings', 'Environmental Friendly'],
      color: 'railway-yellow'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.services-header', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Service cards animation
      gsap.fromTo('.service-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Hover animations for service cards
      const serviceCards = servicesRef.current?.querySelectorAll('.service-card');
      serviceCards?.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { y: -10, duration: 0.3, ease: 'power2.out' });
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: 'power2.out' });
        });
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={servicesRef} id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Bubbles Background */}
      <div className="floating-bubbles absolute inset-0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Comprehensive railway engineering solutions designed to meet the evolving needs 
            of Indian Railways with precision, quality, and reliability.
          </p>
          <div className="w-24 h-1 railway-gradient mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group cursor-pointer"
            >
              <div className={`inline-flex p-4 rounded-xl bg-${service.color}/10 mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className={`h-8 w-8 text-${service.color}`} />
              </div>
              
              <h3 className="text-2xl font-semibold text-navy mb-4 group-hover:text-primary transition-smooth">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* New Horizons Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">
            New Horizons for Indian Railways
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We are constantly innovating and expanding our services to meet the future 
            challenges of railway infrastructure development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Explore Innovation
            </Button>
            <Button variant="outline" size="lg">
              Partner with Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import { useEffect, useRef } from 'react';
import serviceSleepers from '@/assets/service-sleepers.jpg';
import serviceWelding from '@/assets/service-welding.jpg';
import serviceTesting from '@/assets/service-testing.jpg';
import serviceCrossing from '@/assets/service-crossing.jpg';
import serviceDetection from '@/assets/service-detection.jpg';
import serviceLubrication from '@/assets/service-lubrication.jpg';
import { 
  Wrench, 
  Zap, 
  Search, 
  Settings, 
  AlertTriangle, 
  Droplets
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: Wrench,
      title: 'Concrete Sleepers',
      description: 'Manufacturing and supply of high-quality MBC sleepers for Indian Railways',
      features: ['IS:13857 Compliant', 'Pre-stressed Concrete', 'Long-lasting Durability', 'Quality Assurance'],
      image: serviceSleepers
    },
    {
      icon: Zap,
      title: 'Flash Butt Welding',
      description: 'Advanced flash butt welding services for rail joints with precision and reliability',
      features: ['2,00,000+ Joints Completed', 'IS:2825 Standards', 'Quality Testing', 'On-site Services'],
      image: serviceWelding
    },
    {
      icon: Search,
      title: 'USFD Testing of Rails/Welds',
      description: 'Ultrasonic flaw detection testing ensuring the integrity of rails and welded joints',
      features: ['40,000+ Tkm Tested', 'Non-destructive Testing', 'Detailed Reporting', 'Expert Analysis'],
      image: serviceTesting
    },
    {
      icon: Settings,
      title: 'Reconditioning of CMS Crossing',
      description: 'Complete reconditioning and maintenance of Cast Manganese Steel crossings',
      features: ['Extended Life Cycle', 'Cost-effective Solution', 'Quality Restoration', 'Performance Testing'],
      image: serviceCrossing
    },
    {
      icon: AlertTriangle,
      title: 'Broken Rail Detection (BRD)',
      description: 'Advanced systems for early detection and prevention of rail breaks',
      features: ['Early Warning System', 'Real-time Monitoring', 'Safety Enhancement', '24/7 Support'],
      image: serviceDetection
    },
    {
      icon: Droplets,
      title: 'Lubrication Systems',
      description: 'Specialized lubrication systems for railway applications and maintenance',
      features: ['Automated Systems', 'Reduced Wear', 'Cost Savings', 'Environment Friendly'],
      image: serviceLubrication
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo('.services-header', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate service cards
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
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Particle animation
      const particles = particlesRef.current?.querySelectorAll('.particle');
      particles?.forEach(particle => {
        const xDist = Math.random() * 100 - 50; // random x movement
        const yDist = Math.random() * 200 + 100; // random y movement
        gsap.to(particle, {
          x: xDist,
          y: -yDist,
          opacity: 0,
          duration: Math.random() * 15 + 10,
          repeat: -1,
          yoyo: false,
          ease: 'sine.inOut',
          delay: Math.random() * 5
        });
      });

      // Card hover animations
      const cards = servicesRef.current?.querySelectorAll('.service-card');
      cards?.forEach(card => {
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
      {/* Floating Particles Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="particle absolute w-3 h-3 rounded-full bg-primary/30"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

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
          {services.map((service) => (
            <div
              key={service.title}
              className="service-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth group cursor-pointer relative"
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="inline-flex p-3 rounded-xl bg-white/90 backdrop-blur-sm">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-navy mb-4 group-hover:text-primary transition-smooth">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <span className="h-5 w-5 text-primary flex-shrink-0">✔️</span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
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

  <a 
    href="/contact" 
    className="px-6 py-3 bg-railway-red text-white rounded-xl font-semibold hover:bg-red-600 transition-colors"
  >
    Reach Us Now
  </a>
</div>

        </div>
      </div>
    </section>
  );
};

export default Services;

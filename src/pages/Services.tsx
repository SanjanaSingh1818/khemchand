import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Settings,
  Zap,
  Search,
  RefreshCw,
  AlertTriangle,
  Droplets,
  Train,
  ChevronRight,
  CheckCircle
} from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  // ✅ Dynamically calculate header height
  useEffect(() => {
    const header = document.getElementById('main-header');
    if (!header) return;

    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(header);

    window.addEventListener('resize', updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // ✅ GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content',
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      gsap.fromTo('.service-card',
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.track-separator',
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1,
          scrollTrigger: {
            trigger: '.track-separator',
            start: 'top 90%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Concrete Sleepers',
      subtitle: 'MBC Sleeper Manufacturing',
      description: 'High-quality prestressed concrete sleepers manufactured to Indian Railway specifications.',
      features: ['IS:13230 Compliant', 'Pre-stressed Technology', 'Quality Tested', 'Long-lasting Durability'],
      stats: '50,000+ Units Manufactured',
      image: railwayBg
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Flash Butt Welding',
      subtitle: 'Rail Welding Excellence',
      description: 'Advanced flash butt welding services for seamless rail connections and enhanced track performance.',
      features: ['Automated Process', 'High Precision', 'Quality Assured', 'Minimal Heat Affected Zone'],
      stats: '2,00,000+ Joints Completed',
      image: weldingBg
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: 'USFD Testing',
      subtitle: 'Ultrasonic Flaw Detection',
      description: 'Comprehensive testing of rails and welds using state-of-the-art ultrasonic technology.',
      features: ['Non-destructive Testing', 'Real-time Analysis', 'Certified Operators', 'Detailed Reports'],
      stats: '40,000+ Tkm Tested',
      image: railwayBg
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'CMS Crossing Reconditioning',
      subtitle: 'Track Infrastructure Renewal',
      description: 'Expert reconditioning services for CMS crossings to extend operational life and improve performance.',
      features: ['Complete Overhaul', 'Modern Techniques', 'Cost Effective', 'Extended Life Cycle'],
      stats: '500+ Crossings Reconditioned',
      image: weldingBg
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Broken Rail Detection (BRD)',
      subtitle: 'Safety & Monitoring Systems',
      description: 'Advanced broken rail detection systems for enhanced railway safety and operational efficiency.',
      features: ['Real-time Monitoring', 'Instant Alerts', 'Remote Access', 'Fail-safe Design'],
      stats: '1000+ Km Coverage',
      image: railwayBg
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Lubrication Systems',
      subtitle: 'Track Maintenance Solutions',
      description: 'Automated lubrication systems for rail curves to reduce wear and maintenance costs.',
      features: ['Automated Operation', 'Weather Resistant', 'Precise Application', 'Remote Monitoring'],
      stats: '200+ Systems Installed',
      image: weldingBg
    },
    {
      icon: <Train className="w-8 h-8" />,
      title: 'New Horizons for Indian Railways',
      subtitle: 'Innovation & Development',
      description: 'Pioneering new technologies and solutions for the future of Indian Railway infrastructure.',
      features: ['R&D Focus', 'Innovation Hub', 'Future Technologies', 'Sustainable Solutions'],
      stats: '10+ New Projects',
      image: railwayBg
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* ✅ Fixed Header */}
      <Header id="main-header" />

      {/* ✅ PageBanner with proper space below header */}
      <div style={{ marginTop: `${headerHeight}px` }}>
        <PageBanner
          title="OUR SERVICES"
          breadcrumbs={[{ label: 'OUR SERVICES', href: '' }]}
        />
      </div>

      {/* ✅ Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">What We Offer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From manufacturing to maintenance, we provide end-to-end railway infrastructure solutions
            </p>
          </div>

          <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`service-card group cursor-pointer transition-all duration-500 hover:shadow-elegant ${expandedCard === index ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              >
                <CardHeader className="relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 railway-gradient rounded-lg text-white">
                        {service.icon}
                      </div>
                      <Badge variant="secondary">{service.stats}</Badge>
                    </div>
                    <CardTitle className="text-navy mb-2">{service.title}</CardTitle>
                    <p className="text-primary font-medium">{service.subtitle}</p>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-muted-foreground mb-4">{service.description}</p>

                  {expandedCard === index ? (
                    <div className="mt-6 space-y-4">
                      <h4 className="font-semibold text-navy">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button variant="hero" className="w-full mt-4">
                        Learn More <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-muted-foreground">Click to expand</span>
                      <ChevronRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Railway Track Separator */}
      <div className="relative py-8">
        <div className="track-separator w-full h-1 railway-gradient origin-left"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-background px-8">
            <Train className="w-8 h-8 text-primary" />
          </div>
        </div>
      </div>

      {/* ✅ Call to Action */}
      <section className="py-20 railway-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to discuss your railway infrastructure needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">Get Quote</Button>
           
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

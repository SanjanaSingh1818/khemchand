import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Calendar, TrendingUp } from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      // Timeline animations
      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.timeline-container',
            start: 'top 80%',
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number',
        { innerText: 0 },
        {
          innerText: (i, target) => target.getAttribute('data-value'),
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );

      // Floating animations
      gsap.to('.floating-element', {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const milestones = [
    { year: '1990', title: 'Company Founded', description: 'Mr. S. Kumar (IIT Kanpur, 1975) established Khemchand Group' },
    { year: '1995', title: 'First Major Contract', description: 'Secured first railway sleeper manufacturing contract' },
    { year: '2000', title: 'Flash Butt Welding', description: 'Introduced advanced welding technology' },
    { year: '2010', title: 'USFD Testing', description: 'Started Ultrasonic Flaw Detection services' },
    { year: '2015', title: 'Leadership Expansion', description: 'Mr. Sandeep Sukhwani, MBA UK joined as director' },
    { year: '2024', title: 'New Horizons', description: '30+ years of excellence in Indian Railways' }
  ];

  const stats = [
    { number: 200000, suffix: '+', label: 'Flash Butt Joints' },
    { number: 40000, suffix: '+', label: 'Tkm USFD Testing' },
    { number: 30, suffix: '+', label: 'Years Experience' },
    { number: 500, suffix: '+', label: 'Projects Completed' }
  ];

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      
      <PageBanner 
        title="ABOUT US" 
        breadcrumbs={[{ label: 'ABOUT US', href: '' }]} 
      />

      {/* Company Story Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Journey</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded by Mr. S. Kumar, an IIT Kanpur alumnus from the 1975 batch, 
                Khemchand Group began as a vision to transform India's railway infrastructure. 
                With deep engineering expertise and unwavering commitment to quality, 
                we've evolved into a trusted partner of Indian Railways.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Under the strategic leadership of Mr. Sandeep Sukhwani, MBA UK, 
                we've expanded our capabilities and embraced international best practices, 
                positioning ourselves at the forefront of railway technology and innovation.
              </p>
              <Button variant="hero" size="lg">Learn More About Our Leadership</Button>
            </div>
            <div className="relative">
              <img 
                src={weldingBg} 
                alt="Railway welding operations" 
                className="rounded-2xl shadow-elegant w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Horizontal */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${railwayBg})` }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Our Milestones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key moments that shaped our journey in building India's railway infrastructure
            </p>
          </div>

          <div ref={timelineRef} className="timeline-container relative">
            {/* Horizontal Timeline Line */}
            <div className="relative mb-20">
              <div className="absolute top-1/2 left-0 right-0 h-1 railway-gradient transform -translate-y-1/2"></div>
              
              <div className="flex justify-between items-center relative">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="timeline-item flex flex-col items-center" style={{ width: `${100 / milestones.length}%` }}>
                    {/* Circle Marker */}
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg mb-4 z-10"></div>
                    
                    {/* Year */}
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    
                    {/* Card */}
                    <Card className="shadow-card hover:shadow-elegant transition-smooth w-40">
                      <CardContent className="p-4 text-center">
                        <h3 className="text-sm font-semibold text-navy mb-1">{milestone.title}</h3>
                        <p className="text-xs text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 railway-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="mb-4">
                    {index === 0 && <Award className="w-12 h-12 text-railway-yellow mx-auto" />}
                    {index === 1 && <TrendingUp className="w-12 h-12 text-railway-yellow mx-auto" />}
                    {index === 2 && <Calendar className="w-12 h-12 text-railway-yellow mx-auto" />}
                    {index === 3 && <Users className="w-12 h-12 text-railway-yellow mx-auto" />}
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <span className="stat-number" data-value={stat.number}>0</span>
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-white/80 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
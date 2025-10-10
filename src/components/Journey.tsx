import { useEffect, useRef } from 'react';
import { Factory, Award, Zap, Search, Globe, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const journeyRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { year: '1990', title: 'Company Founded', description: 'Mr. S. Kumar (IIT Kanpur, 1975) established Khemchand Group' },
    { year: '1995', title: 'First Major Contract', description: 'Secured first railway sleeper manufacturing contract' },
    { year: '2000', title: 'Flash Butt Welding', description: 'Introduced advanced welding technology' },
    { year: '2010', title: 'USFD Testing', description: 'Started Ultrasonic Flaw Detection services' },
    { year: '2015', title: 'Leadership Expansion', description: 'Mr. Sandeep Sukhwani, MBA UK joined as director' },
    { year: '2024', title: 'New Horizons', description: '30+ years of excellence in Indian Railways' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.journey-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.journey-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.timeline-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          }
        }
      );
    }, journeyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={journeyRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="journey-title text-4xl md:text-5xl font-bold text-center text-navy mb-16">
          Our Journey
        </h2>
        
        <div ref={timelineRef} className="timeline-container relative">
          {/* Horizontal Timeline Line */}
          <div className="relative mb-20">
            <div className="absolute top-1/2 left-0 right-0 h-1 railway-gradient transform -translate-y-1/2 hidden md:block"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center relative gap-8 md:gap-0">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="timeline-item flex flex-col items-center w-full md:w-auto" style={{ maxWidth: index < milestones.length - 1 ? `${100 / milestones.length}%` : 'auto' }}>
                  {/* Circle Marker */}
                  <div className="w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg mb-4 z-10"></div>
                  
                  {/* Year */}
                  <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                  
                  {/* Card */}
                  <Card className="shadow-card hover:shadow-elegant transition-smooth w-full max-w-[200px]">
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
  );
};

export default Journey;

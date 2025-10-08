import { useEffect, useRef } from 'react';
import { Factory, Award, Zap, Search, TrendingUp, Globe, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey = () => {
  const journeyRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { 
      year: '1990', 
      title: 'Foundation', 
      description: 'Company founded by Mr. S. Kumar (IIT Kanpur)',
      icon: Factory
    },
    { 
      year: '1995', 
      title: 'Railway Partnership', 
      description: 'First major contract with Indian Railways',
      icon: Award
    },
    { 
      year: '2005', 
      title: 'MBC Sleepers', 
      description: 'Began manufacturing of MBC Sleepers',
      icon: Factory
    },
    { 
      year: '2010', 
      title: 'Flash Butt Welding', 
      description: 'Advanced welding technology introduced',
      icon: Zap
    },
    { 
      year: '2015', 
      title: 'USFD Testing', 
      description: 'Launched rail testing services',
      icon: Search
    },
    { 
      year: '2020', 
      title: 'Modern Leadership', 
      description: 'Mr. Sandeep Sukhwani brings global expertise',
      icon: Globe
    },
    { 
      year: '2024', 
      title: 'Future Vision', 
      description: 'Expanding horizons for Indian Railways',
      icon: Rocket
    }
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
            toggleActions: 'play none none reverse'
          }
        }
      );

      const milestoneItems = journeyRef.current?.querySelectorAll('.milestone-item');
      if (milestoneItems) {
        gsap.fromTo(milestoneItems,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.15,
            scrollTrigger: {
              trigger: journeyRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, journeyRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={journeyRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="journey-title text-4xl md:text-5xl font-bold text-center text-navy mb-16">
          Our Journey
        </h2>
        
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent transform -translate-y-1/2 hidden lg:block" />
          
          {/* Timeline Items */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4 relative">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon;
              return (
                <div 
                  key={milestone.year}
                  className="milestone-item flex-1 flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className="relative z-10 mb-4">
                    <div className="w-20 h-20 rounded-full bg-white shadow-elegant flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping group-hover:animate-none" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth w-full">
                    <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-navy mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground text-sm">{milestone.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;

import { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 200000, suffix: '+', label: 'Flash Butt Joints', color: 'primary' },
    { number: 40000, suffix: '+', label: 'Tkm USFD Testing', color: 'secondary' },
    { number: 500, suffix: '+', label: 'Projects Completed', color: 'accent' },
    { number: 15, suffix: '+', label: 'Railway Zones', color: 'railway-red' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.stats-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.stats-title',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.stat-card',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-br from-navy to-banner-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="stats-title text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Achievements
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-card text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-smooth"
            >
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </div>
              <div className="text-white/80 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

import { useEffect, useRef } from 'react';
import { Target, Eye, Flag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate header
      gsap.fromTo('.about-header', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.about-header',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Animate cards
      gsap.fromTo('.about-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.about-grid',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Floating particles
      gsap.to('.floating-particle', {
        y: -20,
        x: 15,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="relative py-20 bg-muted/20 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-particle absolute top-10 left-[5%] w-2 h-2 bg-primary/40 rounded-full"></div>
        <div className="floating-particle absolute top-32 left-[25%] w-3 h-3 bg-secondary/30 rounded-full"></div>
        <div className="floating-particle absolute top-48 right-[15%] w-2 h-2 bg-accent/40 rounded-full"></div>
        <div className="floating-particle absolute bottom-32 left-[20%] w-3 h-3 bg-white/20 rounded-full"></div>
        <div className="floating-particle absolute bottom-48 right-[25%] w-2 h-2 bg-white/30 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="about-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 relative z-10">
            About Khemchand Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto relative z-10">
            Three decades of engineering excellence, building the future of Indian Railways 
            with innovation, precision, and unwavering commitment to quality.
          </p>
          <div className="w-24 h-1 railway-gradient mx-auto rounded-full mt-6 relative z-10"></div>
        </div>

        <div className="about-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="about-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group relative z-10">
            <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6 group-hover:scale-110 transition-transform">
              <Target className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To provide world-class railway engineering solutions that enhance the safety, 
              efficiency, and reliability of Indian Railways infrastructure through innovation 
              and excellence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="about-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group relative z-10">
            <div className="inline-flex p-4 rounded-xl bg-secondary/10 mb-6 group-hover:scale-110 transition-transform">
              <Eye className="h-10 w-10 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be India's most trusted partner in railway infrastructure development, 
              setting benchmarks in quality, innovation, and sustainable engineering practices 
              for future generations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="about-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group relative z-10">
            <div className="inline-flex p-4 rounded-xl bg-accent/10 mb-6 group-hover:scale-110 transition-transform">
              <Flag className="h-10 w-10 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-4">Our Goal</h3>
            <p className="text-muted-foreground leading-relaxed">
              To expand our technological capabilities and service portfolio, delivering 
              cutting-edge solutions that contribute to India's vision of a modern, 
              world-class railway network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

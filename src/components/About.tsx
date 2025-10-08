import { useEffect, useRef } from 'react';
import { Target, Eye, Flag } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={aboutRef} id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="about-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            About Khemchand Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of engineering excellence, building the future of Indian Railways 
            with innovation, precision, and unwavering commitment to quality.
          </p>
          <div className="w-24 h-1 railway-gradient mx-auto rounded-full mt-6"></div>
        </div>

        <div className="about-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="about-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group">
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

          <div className="about-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group">
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

          <div className="about-card bg-white rounded-2xl p-8 shadow-card hover:shadow-elegant transition-smooth group">
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

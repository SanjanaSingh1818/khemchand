import { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestones = [
    { year: '1990', title: 'Company Founded', description: 'Mr. S. Kumar (IIT Kanpur, 1975) establishes Khemchand Group' },
    { year: '1995', title: 'Railway Partnership', description: 'First major contract with Indian Railways' },
    { year: '2005', title: 'MBC Sleepers', description: 'Began manufacturing of MBC Sleepers' },
    { year: '2010', title: 'Flash Butt Welding', description: 'Introduced advanced Flash Butt Welding technology' },
    { year: '2015', title: 'USFD Testing', description: 'Launched USFD Testing of Rails/Welds services' },
    { year: '2020', title: 'Modern Leadership', description: 'Mr. Sandeep Sukhwani (MBA UK) brings international expertise' },
    { year: '2024', title: 'Future Vision', description: 'Expanding horizons for Indian Railways' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section entrance
      gsap.fromTo('.about-content', 
        { opacity: 0, y: 50 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Timeline animation
      const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
      if (timelineItems) {
        gsap.fromTo(timelineItems,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Stats animation
      gsap.fromTo('.stat-item',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%',
            end: 'bottom 20%',
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
        {/* Header */}
        <div className="about-content text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            About Khemchand Group
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three decades of engineering excellence, building the future of Indian Railways 
            with innovation, precision, and unwavering commitment to quality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div className="about-content relative">
            <div 
              className="rounded-2xl overflow-hidden shadow-elegant h-96"
              style={{
                backgroundImage: `url(${weldingBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 hero-gradient opacity-80"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <Award className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold">Excellence in Engineering</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="about-content space-y-6">
            <div className="flex items-start space-x-4">
              <Target className="h-8 w-8 text-primary mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide world-class railway engineering solutions that enhance the safety, 
                  efficiency, and reliability of Indian Railways infrastructure.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-secondary mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-navy mb-3">Leadership Excellence</h3>
                <p className="text-muted-foreground mb-4">
                  Founded by Mr. S. Kumar (IIT Kanpur, 1975) and now led by Mr. Sandeep Sukhwani 
                  (MBA UK), bringing together decades of experience with international expertise.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>IIT Kanpur Engineering Excellence</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>International Business Expertise</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>30+ Years Industry Experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="about-content mb-20">
          <h3 className="text-3xl font-bold text-center text-navy mb-12">Our Journey</h3>
          <div ref={timelineRef} className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30"></div>
            {milestones.map((milestone, index) => (
              <div 
                key={milestone.year}
                className={`timeline-item flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-card">
                    <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                    <h4 className="text-xl font-semibold text-navy mb-2">{milestone.title}</h4>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-card"></div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item text-center bg-white p-8 rounded-xl shadow-card">
            <div className="text-4xl font-bold text-primary mb-2">2,00,000+</div>
            <div className="text-muted-foreground">Flash Butt Joints</div>
          </div>
          <div className="stat-item text-center bg-white p-8 rounded-xl shadow-card">
            <div className="text-4xl font-bold text-secondary mb-2">40,000+</div>
            <div className="text-muted-foreground">Tkm USFD Testing</div>
          </div>
          <div className="stat-item text-center bg-white p-8 rounded-xl shadow-card">
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="stat-item text-center bg-white p-8 rounded-xl shadow-card">
            <div className="text-4xl font-bold text-railway-red mb-2">15+</div>
            <div className="text-muted-foreground">Railway Zones</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
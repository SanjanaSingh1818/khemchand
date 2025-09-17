import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin, Calendar, Users, Award } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'Delhi-Mumbai Railway Corridor',
      location: 'Delhi - Mumbai',
      year: '2023',
      type: 'Flash Butt Welding',
      description: 'Completed over 15,000 flash butt joints for the high-speed corridor project.',
      stats: { joints: '15,000+', length: '150 km', timeline: '18 months' }
    },
    {
      title: 'Eastern Railway Modernization',
      location: 'Kolkata Region',
      year: '2022',
      type: 'USFD Testing',
      description: 'Comprehensive USFD testing of rails covering 8,500 track kilometers.',
      stats: { testing: '8,500 km', defects: '245 detected', efficiency: '99.7%' }
    },
    {
      title: 'Western Railway Infrastructure',
      location: 'Mumbai - Ahmedabad',
      year: '2023',
      type: 'MBC Sleepers',
      description: 'Supply of 25,000 high-quality MBC sleepers for track modernization.',
      stats: { sleepers: '25,000', sections: '75 km', quality: '100%' }
    },
    {
      title: 'Southern Railway Enhancement',
      location: 'Chennai - Bangalore',
      year: '2024',
      type: 'CMS Crossing',
      description: 'Reconditioning of 150 CMS crossings for improved durability.',
      stats: { crossings: '150', lifespan: '+20 years', savings: '40%' }
    }
  ];

  const sisterConcern = {
    name: 'Precision Equipments Co.',
    description: 'Our sister concern specializes in manufacturing diesel locomotive spares with precision engineering.',
    services: [
      'Turbo Dowelling Systems',
      'HHP Traction Motors',
      'Industrial Blowers',
      'Precision Machining',
      'ALCO & EMD Engine Parts',
      'Custom Fabrication'
    ],
    achievements: [
      { metric: '500+', label: 'Components Manufactured' },
      { metric: '50+', label: 'Locomotive Models Served' },
      { metric: '15+', label: 'Years of Experience' },
      { metric: '100%', label: 'Quality Assurance' }
    ]
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.projects-header', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.projects-header',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Project cards animation
      gsap.fromTo('.project-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Sister concern animation
      gsap.fromTo('.sister-concern',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: '.sister-concern',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={projectsRef} id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="projects-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Projects & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our major railway projects and engineering achievements 
            across the Indian Railways network.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                    <span>•</span>
                    <MapPin className="h-4 w-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                    {project.type}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-navy mb-3 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Sister Concern Section */}
        <div className="sister-concern bg-white rounded-3xl p-12 shadow-elegant">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Award className="h-8 w-8 text-accent" />
                <h3 className="text-3xl font-bold text-navy">Sister Concern</h3>
              </div>
              
              <h4 className="text-2xl font-semibold text-primary mb-4">{sisterConcern.name}</h4>
              
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {sisterConcern.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {sisterConcern.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{service}</span>
                  </div>
                ))}
              </div>

              <Button variant="accent" size="lg">
                Learn More About Precision Equipments
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {sisterConcern.achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-muted/50 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-accent mb-2">{achievement.metric}</div>
                  <div className="text-muted-foreground text-sm">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-navy mb-4">
            Ready to Start Your Next Railway Project?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Partner with us for innovative railway engineering solutions that deliver 
            exceptional results and exceed expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Your Project
            </Button>
            <Button variant="outline" size="lg">
              Download Company Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
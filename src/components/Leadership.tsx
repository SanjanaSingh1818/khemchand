import { useEffect, useRef } from 'react';
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Leadership = () => {
  const leadershipRef = useRef<HTMLDivElement>(null);

  const leaders = [
    {
      name: 'Mr. S. Kumar',
      position: 'Founder & Chairman',
      education: 'IIT Kanpur, 1975',
      experience: '30+ Years',
      bio: 'Visionary leader who established Khemchand Group with a commitment to engineering excellence. His deep understanding of railway infrastructure has been instrumental in shaping our company\'s success.',
      achievements: [
        'Founded Khemchand Group in 1990',
        'Pioneer in railway engineering solutions',
        'Built strong partnerships with Indian Railways',
        'Established quality standards in the industry'
      ],
      image: '/api/placeholder/300/400', // Placeholder for now
      linkedin: '#',
      email: 's.kumar@khemchandgroup.com'
    },
    {
      name: 'Mr. Sandeep Sukhwani',
      position: 'Managing Director',
      education: 'MBA, United Kingdom',
      experience: '15+ Years',
      bio: 'Bringing international business expertise and modern management practices to drive the company\'s growth and expansion into new markets and technologies.',
      achievements: [
        'International business expansion',
        'Modern technology integration',
        'Strategic partnerships development',
        'Operational excellence initiatives'
      ],
      image: '/api/placeholder/300/400', // Placeholder for now
      linkedin: '#',
      email: 'sandeep.sukhwani@khemchandgroup.com'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Rajesh Sharma',
      position: 'Technical Advisor',
      speciality: 'Railway Engineering',
      experience: '25+ Years'
    },
    {
      name: 'Ms. Priya Nair',
      position: 'Quality Assurance Head',
      speciality: 'Quality Management',
      experience: '20+ Years'
    },
    {
      name: 'Mr. Amit Gupta',
      position: 'Operations Director',
      speciality: 'Project Management',
      experience: '18+ Years'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.leadership-header', 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1,
          scrollTrigger: {
            trigger: '.leadership-header',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Leader cards animation
      gsap.fromTo('.leader-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: '.leaders-grid',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Advisors animation
      gsap.fromTo('.advisor-card',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.advisors-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, leadershipRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={leadershipRef} id="leadership" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="leadership-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Meet the visionary leaders who drive our commitment to excellence 
            in railway engineering and infrastructure development.
          </p>
        </div>

        {/* Main Leaders */}
        <div className="leaders-grid grid lg:grid-cols-2 gap-12 mb-20">
          {leaders.map((leader, index) => (
            <div
              key={leader.name}
              className="leader-card bg-white rounded-3xl overflow-hidden shadow-elegant hover:shadow-card transition-smooth group"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white rounded-full shadow-card flex items-center justify-center">
                    <GraduationCap className="h-16 w-16 text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <a href={leader.linkedin} className="p-2 bg-white/90 rounded-full hover:bg-white transition-smooth">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </a>
                  <a href={`mailto:${leader.email}`} className="p-2 bg-white/90 rounded-full hover:bg-white transition-smooth">
                    <Mail className="h-5 w-5 text-primary" />
                  </a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-2">{leader.name}</h3>
                <div className="text-primary font-semibold mb-4">{leader.position}</div>
                
                <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{leader.education}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award className="h-4 w-4" />
                    <span>{leader.experience}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {leader.bio}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-navy mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {leader.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Team */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-navy mb-12">Advisory Team</h3>
          <div className="advisors-grid grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div
                key={advisor.name}
                className="advisor-card bg-white p-8 rounded-2xl shadow-card hover:shadow-elegant transition-smooth text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                
                <h4 className="text-xl font-semibold text-navy mb-2">{advisor.name}</h4>
                <div className="text-primary font-medium mb-2">{advisor.position}</div>
                <div className="text-muted-foreground text-sm mb-4">{advisor.speciality}</div>
                
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-muted/50 rounded-full text-sm text-muted-foreground">
                  <Award className="h-4 w-4" />
                  <span>{advisor.experience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-navy mb-6">Our Leadership Values</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto flex items-center justify-center">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-navy">Excellence</h4>
              <p className="text-sm text-muted-foreground">Committed to delivering the highest quality in everything we do</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-secondary/10 rounded-full mx-auto flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-secondary" />
              </div>
              <h4 className="text-lg font-semibold text-navy">Innovation</h4>
              <p className="text-sm text-muted-foreground">Embracing new technologies and methodologies</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto flex items-center justify-center">
                <Linkedin className="h-8 w-8 text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-navy">Integrity</h4>
              <p className="text-sm text-muted-foreground">Building trust through transparency and honesty</p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-railway-red/10 rounded-full mx-auto flex items-center justify-center">
                <Mail className="h-8 w-8 text-railway-red" />
              </div>
              <h4 className="text-lg font-semibold text-navy">Collaboration</h4>
              <p className="text-sm text-muted-foreground">Working together to achieve common goals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
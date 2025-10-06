import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  GraduationCap,
  TrendingUp,
  Award,
  Target,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  Upload
} from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );

      // Job cards animation
      gsap.fromTo('.job-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.jobs-section',
            start: 'top 80%',
          }
        }
      );

      // Locomotive animation
      gsap.to('.locomotive-silhouette', {
        x: '100vw',
        duration: 20,
        repeat: -1,
        ease: 'none'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Railway Engineer',
      department: 'Engineering',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '5-8 years',
      description: 'Lead railway infrastructure projects and ensure quality delivery of engineering solutions.',
      requirements: [
        'B.Tech/M.Tech in Civil Engineering or related field',
        '5+ years experience in railway projects',
        'Knowledge of IS codes and railway standards',
        'Project management skills',
        'Strong analytical and problem-solving abilities'
      ],
      responsibilities: [
        'Lead engineering teams on major projects',
        'Ensure compliance with quality standards',
        'Coordinate with clients and stakeholders',
        'Review technical drawings and specifications',
        'Mentor junior engineers'
      ],
      benefits: [
        'Competitive salary package',
        'Health insurance coverage',
        'Professional development opportunities',
        'Performance bonuses',
        'Flexible working arrangements'
      ]
    },
    {
      id: 2,
      title: 'Welding Technician',
      department: 'Operations',
      location: 'Multiple locations',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Perform flash butt welding operations and ensure quality standards in rail welding.',
      requirements: [
        'ITI/Diploma in Welding Technology',
        '3+ years in flash butt welding',
        'Knowledge of welding standards',
        'Safety certification',
        'Physical fitness for field work'
      ],
      responsibilities: [
        'Perform flash butt welding operations',
        'Conduct quality inspections',
        'Maintain welding equipment',
        'Follow safety protocols',
        'Document welding parameters'
      ],
      benefits: [
        'Attractive compensation',
        'Field allowances',
        'Safety training programs',
        'Career advancement opportunities',
        'Medical coverage'
      ]
    },
    {
      id: 3,
      title: 'Quality Control Inspector',
      department: 'Quality Assurance',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Ensure quality standards in manufacturing and project delivery through rigorous inspection.',
      requirements: [
        'B.Tech/Diploma in Mechanical/Civil Engineering',
        'Knowledge of NDT techniques',
        'Experience in quality control',
        'Certification in testing methods',
        'Attention to detail'
      ],
      responsibilities: [
        'Conduct quality inspections',
        'Perform NDT testing',
        'Prepare quality reports',
        'Ensure compliance with standards',
        'Coordinate with production teams'
      ],
      benefits: [
        'Competitive package',
        'Technical training',
        'Career growth opportunities',
        'Health benefits',
        'Performance incentives'
      ]
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '8-12 years',
      description: 'Manage large-scale railway infrastructure projects from conception to completion.',
      requirements: [
        'B.Tech + MBA or equivalent',
        '8+ years in project management',
        'PMP certification preferred',
        'Railway project experience',
        'Strong leadership skills'
      ],
      responsibilities: [
        'Manage project lifecycle',
        'Coordinate with stakeholders',
        'Ensure timely delivery',
        'Manage project budgets',
        'Lead project teams'
      ],
      benefits: [
        'Executive compensation',
        'Leadership development programs',
        'International exposure opportunities',
        'Comprehensive benefits',
        'Stock options'
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear career progression paths with opportunities for advancement'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional development programs'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Recognition Programs',
      description: 'Performance-based recognition and reward systems'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Environment',
      description: 'Collaborative work culture with experienced professionals'
    }
  ];

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplicationForm(true);
  };

  return (
    <div ref={containerRef} className="min-h-screen">
      <Header />
      
      <PageBanner 
        title="CAREERS" 
        breadcrumbs={[{ label: 'CAREERS', href: '' }]} 
      />

      {/* Why Join Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Choose Khemchand Group?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join a company that values innovation, excellence, and personal growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 railway-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="jobs-section py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Current Openings</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across various departments
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="job-card shadow-card hover:shadow-elegant transition-smooth">
                <CardHeader 
                  className="cursor-pointer"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-navy hover:text-primary transition-colors">
                          {job.title}
                        </CardTitle>
                        <Badge variant="secondary">{job.type}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground">{job.description}</p>
                    </div>
                    
                    <div className="ml-4">
                      {expandedJob === job.id ? 
                        <ChevronDown className="w-5 h-5 text-primary" /> : 
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      }
                    </div>
                  </div>
                </CardHeader>

                {expandedJob === job.id && (
                  <CardContent className="pt-0">
                    <div className="border-t pt-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-navy mb-3">Requirements</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-navy mb-3">Responsibilities</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-navy mb-3">Benefits</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="flex justify-end mt-6 pt-4 border-t">
                        <Button 
                          variant="hero" 
                          onClick={() => handleApply(job.title)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle className="text-navy">Apply for {selectedJob}</CardTitle>
              <Button 
                variant="ghost" 
                className="absolute top-4 right-4"
                onClick={() => setShowApplicationForm(false)}
              >
                ×
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter first name" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter last name" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email address" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="Enter phone number" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input id="experience" placeholder="Enter years of experience" />
              </div>
              
              <div>
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea 
                  id="coverLetter" 
                  placeholder="Tell us why you're interested in this position..."
                  rows={4}
                />
              </div>
              
              <div>
                <Label htmlFor="resume">Resume</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-sm text-muted-foreground">PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>
              
              <div className="flex justify-end gap-4 pt-4">
                <Button variant="outline" onClick={() => setShowApplicationForm(false)}>
                  Cancel
                </Button>
                <Button variant="hero">Submit Application</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-20 railway-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Journey?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't see the right position? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="xl">
              <Mail className="w-5 h-5 mr-2" />
              Send Resume
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy">
              <Phone className="w-5 h-5 mr-2" />
              Contact HR
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
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
  Upload,
  Send
} from 'lucide-react';
import railwayBg from '@/assets/railway-hero-bg.jpg';
import weldingBg from '@/assets/welding-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

const Careers = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [careerFormData, setCareerFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resumeLink: '',
    message: ''
  });

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

  const handleCareerInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCareerFormData({
      ...careerFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleCareerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!careerFormData.name || !careerFormData.email || !careerFormData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, email, and message are required.",
        variant: "destructive"
      });
      return;
    }

    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_CAREER_TEMPLATE_ID',
      {
        from_name: careerFormData.name,
        from_email: careerFormData.email,
        phone: careerFormData.phone,
        position: careerFormData.position,
        resume_link: careerFormData.resumeLink,
        message: careerFormData.message,
      },
      'YOUR_PUBLIC_KEY'
    ).then(
      () => {
        toast({
          title: "Application submitted!",
          description: "We'll review your application and get back to you soon.",
        });
        setCareerFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          resumeLink: '',
          message: ''
        });
      },
      (error) => {
        console.error('EmailJS error:', error);
        toast({
          title: "Failed to submit",
          description: "Please try again or email us directly.",
          variant: "destructive"
        });
      }
    );
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

      {/* Application Form Modal - Removed Current Openings Section */}
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

      {/* Career Contact Form */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">Reach Out for Career Opportunities</h2>
              <p className="text-xl text-muted-foreground">
                Don't see the right position? Send us your details and we'll keep you in mind for future opportunities.
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="career-name">Full Name *</Label>
                      <Input
                        id="career-name"
                        name="name"
                        value={careerFormData.name}
                        onChange={handleCareerInputChange}
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="career-email">Email Address *</Label>
                      <Input
                        id="career-email"
                        type="email"
                        name="email"
                        value={careerFormData.email}
                        onChange={handleCareerInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="career-phone">Phone Number</Label>
                      <Input
                        id="career-phone"
                        name="phone"
                        value={careerFormData.phone}
                        onChange={handleCareerInputChange}
                        placeholder="Enter your phone number"
                      />
                    </div>
                   <div>
                     <Label htmlFor="career-position">Position of Interest</Label>
                     <Input
                       id="career-position"
                       name="position"
                       value={careerFormData.position}
                       onChange={handleCareerInputChange}
                       placeholder="e.g., Railway Engineer"
                     />
                   </div>
                 </div>

                 <div>
                   <Label htmlFor="career-resume">Resume Link *</Label>
                   <Input
                     id="career-resume"
                     name="resumeLink"
                     type="url"
                     value={careerFormData.resumeLink}
                     onChange={handleCareerInputChange}
                     placeholder="Google Drive, Dropbox, or LinkedIn profile link"
                     required
                   />
                   <p className="text-xs text-muted-foreground mt-1">
                     Please provide a link to your resume (Google Drive, Dropbox, etc.)
                   </p>
                 </div>

                 <div>
                   <Label htmlFor="career-message">Message / Cover Letter *</Label>
                    <Textarea
                      id="career-message"
                      name="message"
                      value={careerFormData.message}
                      onChange={handleCareerInputChange}
                      placeholder="Tell us about your experience and why you'd like to join our team..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="mr-2 h-5 w-5" />
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="mailto:careers@khemchandgroup.com" className="inline-block">
                <Button variant="outline" size="lg">
                  <Mail className="w-5 h-5 mr-2" />
                  careers@khemchandgroup.com
                </Button>
              </a>
              <a href="tel:+911123456789" className="inline-block">
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact HR
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
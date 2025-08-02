import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { 
  Cpu, Database, Server, Monitor, Users, Network, Code, Brain,
  Lightbulb, Target, CheckCircle, ArrowRight, Play, Download,
  Calendar, Clock, Star, Award, Globe, Zap, Shield, Settings
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [activeService, setActiveService] = useState('consulting');

  const services = [
    {
      id: 'consulting',
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance for organizations embarking on digital transformation journeys.',
      fullDescription: 'Our digital transformation consulting service helps organizations navigate the complex landscape of technological change. We provide comprehensive assessments, strategic roadmaps, and implementation support to ensure successful digital adoption. Our team of experts works closely with your organization to identify opportunities, mitigate risks, and maximize the value of digital investments.',
      icon: <Lightbulb className="h-12 w-12" />,
      features: [
        'Digital Maturity Assessment',
        'Technology Strategy Development',
        'Change Management Support',
        'ROI Analysis and Optimization',
        'Implementation Roadmapping',
        'Risk Assessment and Mitigation'
      ],
      benefits: [
        'Accelerated digital adoption',
        'Reduced implementation risks',
        'Improved operational efficiency',
        'Enhanced competitive advantage',
        'Better customer experiences',
        'Increased revenue opportunities'
      ],
      process: [
        'Initial Assessment and Discovery',
        'Strategy Development and Planning',
        'Implementation Support',
        'Monitoring and Optimization'
      ],
      pricing: 'Custom pricing based on scope and duration',
      duration: '3-12 months',
      deliverables: [
        'Digital Transformation Strategy Document',
        'Implementation Roadmap',
        'Technology Recommendations',
        'Change Management Plan',
        'Success Metrics Framework'
      ]
    },
    {
      id: 'ai-development',
      title: 'AI & Machine Learning Solutions',
      description: 'Custom AI solutions tailored to your specific business needs and challenges.',
      fullDescription: 'We develop cutting-edge AI and machine learning solutions that solve real-world problems. From natural language processing to computer vision, our team creates intelligent systems that automate processes, enhance decision-making, and unlock new business opportunities. We handle everything from data preparation to model deployment and maintenance.',
      icon: <Brain className="h-12 w-12" />,
      features: [
        'Custom AI Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'Automated Decision Systems',
        'AI Integration Services'
      ],
      benefits: [
        'Automated business processes',
        'Enhanced decision-making',
        'Improved accuracy and efficiency',
        'Cost reduction through automation',
        'New revenue streams',
        'Competitive differentiation'
      ],
      process: [
        'Problem Definition and Data Analysis',
        'Model Development and Training',
        'Testing and Validation',
        'Deployment and Integration',
        'Monitoring and Maintenance'
      ],
      pricing: 'Starting from ₹5 lakhs',
      duration: '2-8 months',
      deliverables: [
        'Trained AI Models',
        'Integration APIs',
        'Documentation and Training',
        'Deployment Infrastructure',
        'Maintenance and Support Plan'
      ]
    },
    {
      id: 'research-collaboration',
      title: 'Research Collaboration',
      description: 'Partner with our research team on cutting-edge projects and innovations.',
      fullDescription: 'Collaborate with our world-class research team on innovative projects that push the boundaries of technology and social impact. We offer various collaboration models including joint research projects, sponsored research, and technology licensing. Our partnerships have resulted in breakthrough innovations and successful commercialization of research outcomes.',
      icon: <Target className="h-12 w-12" />,
      features: [
        'Joint Research Projects',
        'Sponsored Research Programs',
        'Technology Licensing',
        'IP Development and Protection',
        'Publication and Dissemination',
        'Commercialization Support'
      ],
      benefits: [
        'Access to cutting-edge research',
        'Reduced R&D costs',
        'Accelerated innovation',
        'IP ownership opportunities',
        'Academic credibility',
        'Long-term partnerships'
      ],
      process: [
        'Partnership Discussion and Agreement',
        'Project Planning and Resource Allocation',
        'Research Execution and Collaboration',
        'Results Analysis and Documentation',
        'Commercialization and IP Management'
      ],
      pricing: 'Varies by project scope',
      duration: '6 months - 3 years',
      deliverables: [
        'Research Reports and Publications',
        'Prototype Systems',
        'Intellectual Property',
        'Technology Transfer Documentation',
        'Commercialization Strategy'
      ]
    },
    {
      id: 'training',
      title: 'Training & Capacity Building',
      description: 'Comprehensive training programs to build digital skills and capabilities.',
      fullDescription: 'Our training and capacity building programs are designed to equip individuals and organizations with the skills needed to thrive in the digital age. We offer customized training modules covering various aspects of digital transformation, AI, data science, and emerging technologies. Our programs combine theoretical knowledge with practical hands-on experience.',
      icon: <Users className="h-12 w-12" />,
      features: [
        'Customized Training Modules',
        'Hands-on Workshops',
        'Online Learning Platforms',
        'Certification Programs',
        'Mentorship and Support',
        'Continuous Learning Paths'
      ],
      benefits: [
        'Enhanced digital skills',
        'Improved productivity',
        'Career advancement opportunities',
        'Organizational capability building',
        'Reduced skill gaps',
        'Innovation culture development'
      ],
      process: [
        'Skills Assessment and Gap Analysis',
        'Curriculum Design and Development',
        'Training Delivery and Support',
        'Assessment and Certification',
        'Continuous Learning Support'
      ],
      pricing: '₹25,000 - ₹2 lakhs per program',
      duration: '1 week - 6 months',
      deliverables: [
        'Training Materials and Resources',
        'Hands-on Project Experience',
        'Certification Credentials',
        'Ongoing Support and Mentorship',
        'Career Development Guidance'
      ]
    }
  ];

  const infrastructure = [
    {
      icon: <Cpu size={48} />,
      title: "High-Performance Computing Cluster",
      description: "State-of-the-art computing cluster with NVIDIA A100 GPUs and AMD EPYC processors for complex AI training and simulations.",
      specs: ["60+ High-Performance Systems", "16 NVIDIA A100 GPUs", "1.2 PetaFLOPS Computing Power"],
      availability: "24/7 Access",
      booking: "Available for research partnerships"
    },
    {
      icon: <Database size={48} />,
      title: "Data Infrastructure",
      description: "Secure, scalable storage and processing solutions for managing large datasets with high-throughput networking.",
      specs: ["500TB Storage Capacity", "10Gbps Network Backbone", "Secure Data Isolation"],
      availability: "On-demand",
      booking: "Contact for access"
    },
    {
      icon: <Server size={48} />,
      title: "AI Development Lab",
      description: "Dedicated environment for machine learning and AI research with specialized hardware accelerators and software tools.",
      specs: ["Pre-configured ML Frameworks", "Model Evaluation Tools", "Experiment Tracking"],
      availability: "Scheduled Access",
      booking: "Reservation required"
    },
    {
      icon: <Monitor size={48} />,
      title: "Research Workstations",
      description: "High-end workstations equipped with professional graphics and computing capabilities for research and development.",
      specs: ["Dual 4K Displays", "128GB RAM Workstations", "Professional Graphics"],
      availability: "Daily booking",
      booking: "Online reservation system"
    }
  ];

  const testimonials = [
    {
      name: "Dr. Rajesh Kumar",
      organization: "TechCorp Solutions",
      role: "CTO",
      testimonial: "CDSHT's AI development services transformed our business operations. Their team delivered a custom machine learning solution that increased our efficiency by 40% and reduced costs significantly.",
      rating: 5,
      project: "Predictive Analytics System"
    },
    {
      name: "Priya Sharma",
      organization: "EduTech Innovations",
      role: "CEO",
      testimonial: "The digital transformation consulting provided by CDSHT was exceptional. They helped us navigate complex technology decisions and implement solutions that revolutionized our educational platform.",
      rating: 5,
      project: "Digital Platform Transformation"
    },
    {
      name: "Prof. Anita Singh",
      organization: "National University",
      role: "Research Director",
      testimonial: "Our research collaboration with CDSHT has been incredibly productive. Together, we've published groundbreaking research and developed innovative solutions that are making real-world impact.",
      rating: 5,
      project: "Joint Research Initiative"
    }
  ];

  const currentService = services.find(s => s.id === activeService) || services[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">Services</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Comprehensive digital transformation services and world-class research infrastructure 
            to accelerate innovation and drive meaningful change.
          </p>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="container-section bg-indigo-950/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-6 cursor-pointer transition-all duration-300 ${
                activeService === service.id 
                  ? 'ring-2 ring-neon shadow-[0_0_25px_rgba(20,241,149,0.3)]' 
                  : 'hover:shadow-[0_0_15px_rgba(20,241,149,0.2)]'
              }`}
              onClick={() => setActiveService(service.id)}
            >
              <div className="text-neon mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-orbitron">{service.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{service.description}</p>
              <button className="text-neon hover:text-white transition-colors text-sm font-medium">
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Service Information */}
      <section className="container-section">
        <motion.div
          key={activeService}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Service Details */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-neon">
                {currentService.icon}
              </div>
              <h2 className="text-3xl font-bold font-orbitron">{currentService.title}</h2>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {currentService.fullDescription}
            </p>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Key Features</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Our Process</h3>
              <div className="space-y-3">
                {currentService.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-neon flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Info Card */}
          <div className="space-y-6">
            {/* Pricing & Duration */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Service Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Pricing:</span>
                  <span className="text-neon font-semibold">{currentService.pricing}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{currentService.duration}</span>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Benefits</h3>
              <ul className="space-y-2">
                {currentService.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Deliverables</h3>
              <ul className="space-y-2">
                {currentService.deliverables.map((deliverable, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Download className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="glass-card p-6 text-center">
              <h3 className="text-lg font-bold mb-4 font-orbitron">Ready to Get Started?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="/contact" className="btn-primary flex-1">
                  Request Quote
                </a>
                <button className="btn-secondary flex-1">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Infrastructure & Facilities */}
      <section className="container-section bg-indigo-950/30">
        <SectionHeader
          title="Infrastructure & Facilities"
          subtitle="World-class research infrastructure available for partnerships and collaborations."
        />

        {/* Virtual Lab Tour */}
        <motion.div 
          className="relative h-64 sm:h-80 my-12 overflow-hidden rounded-xl glass-card mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/90 to-transparent z-10 flex flex-col justify-center p-8">
            <h3 className="text-xl sm:text-3xl font-bold mb-4 font-orbitron">
              AI & Computing Lab
            </h3>
            <p className="text-gray-300 max-w-md mb-6">
              Take a virtual tour of our state-of-the-art facilities and see how our infrastructure 
              powers cutting-edge research and innovation.
            </p>
            <button className="btn-primary self-start flex items-center gap-2">
              <Play className="h-5 w-5" />
              Virtual Tour
            </button>
          </div>
          
          {/* Animated background */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-indigo-950/20">
            {Array.from({ length: 20 }).map((_, i) => {
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const size = Math.random() * 4 + 2;
              
              return (
                <motion.div 
                  key={i}
                  className="absolute rounded-full bg-neon"
                  style={{ 
                    width: `${size}px`, 
                    height: `${size}px`,
                    left: `${x}%`,
                    top: `${y}%`,
                    opacity: size / 6
                  }}
                  animate={{
                    x: [0, Math.random() * 40 - 20, 0],
                    y: [0, Math.random() * 40 - 20, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>
        </motion.div>

        {/* Infrastructure Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infrastructure.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-neon flex-shrink-0">
                  {facility.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-orbitron">{facility.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{facility.description}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-4">
                {facility.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neon"></div>
                    <span className="text-sm text-gray-300">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-white/10">
                <div>
                  <div className="text-sm text-gray-400">Availability</div>
                  <div className="text-sm text-white">{facility.availability}</div>
                </div>
                <button className="text-neon hover:text-white transition-colors text-sm">
                  {facility.booking}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="container-section">
        <SectionHeader
          title="Client Success Stories"
          subtitle="Hear from our partners about their experience working with CDSHT."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 italic">"{testimonial.testimonial}"</p>
              
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
                <div className="text-sm text-neon">{testimonial.organization}</div>
                <div className="text-xs text-gray-500 mt-1">Project: {testimonial.project}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-section bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron">Ready to Transform Your Organization?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital transformation goals 
            and drive meaningful innovation in your industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Started Today
            </a>
            <a href="/projects" className="btn-secondary">
              View Our Work
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ServicesPage;
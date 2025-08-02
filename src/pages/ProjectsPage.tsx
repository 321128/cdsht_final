import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { 
  ArrowRight, X, Code, FileText, Globe, Github, Calendar, Users, 
  Award, Target, ExternalLink, Download, Filter, Search, ChevronDown,
  Play, Star, Eye, GitBranch, TrendingUp, CheckCircle
} from 'lucide-react';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  techStack: string[];
  category: string;
  status: 'Completed' | 'Ongoing' | 'Planning';
  impact: string;
  duration: string;
  team: string[];
  funding: string;
  achievements: string[];
  demoUrl?: string;
  githubUrl?: string;
  documentationUrl?: string;
  metrics?: {
    users?: string;
    downloads?: string;
    stars?: string;
    deployments?: string;
  };
}

const projects: ProjectProps[] = [
  {
    id: 'setidure',
    title: "Setidure Technologies",
    description: "An integrated educational platform that leverages AI to personalize learning experiences.",
    fullDescription: "Setidure Technologies represents our flagship educational technology initiative, combining artificial intelligence with pedagogical expertise to create personalized learning experiences. The platform features adaptive learning pathways that adjust to individual student needs, comprehensive progress tracking for educators and parents, and real-time feedback systems that enhance the learning process. Our AI algorithms analyze learning patterns, identify knowledge gaps, and recommend targeted interventions to improve educational outcomes.",
    image: "https://images.pexels.com/photos/5849571/pexels-photo-5849571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Education", "AI", "Accessibility", "Personalization"],
    techStack: ["React", "Python", "TensorFlow", "MongoDB", "Node.js", "Docker"],
    category: "edtech",
    status: "Ongoing",
    impact: "High",
    duration: "2023-2025",
    team: ["Dr. Priya Sharma", "Rajesh Kumar", "Anita Singh", "Vikram Patel"],
    funding: "₹3.5 Crores",
    achievements: [
      "Improved learning outcomes by 40% in pilot schools",
      "Deployed in 50+ educational institutions",
      "Recognized by Ministry of Education",
      "Featured in EdTech Innovation Awards 2024"
    ],
    demoUrl: "#demo1",
    githubUrl: "#github1",
    documentationUrl: "#docs1",
    metrics: {
      users: "25,000+",
      deployments: "50+",
      stars: "1.2k"
    }
  },
  {
    id: 'ocr-indian',
    title: "OCR for Indian Languages",
    description: "Advanced OCR system with 98% accuracy for 11 Indian languages.",
    fullDescription: "Our Optical Character Recognition system for Indian languages represents a breakthrough in multilingual text processing. Achieving 98% accuracy across 11 major Indian languages including Hindi, Tamil, Telugu, Bengali, and others, this system has been deployed in government digitization projects and heritage preservation initiatives. The technology combines deep learning models with traditional computer vision techniques, handling various fonts, handwriting styles, and document conditions. It supports both printed and handwritten text recognition, making it invaluable for digitizing historical documents and modern administrative processes.",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["NLP", "Computer Vision", "Heritage", "Government"],
    techStack: ["PyTorch", "OpenCV", "Flask", "React Native", "TensorFlow", "AWS"],
    category: "nlp",
    status: "Completed",
    impact: "High",
    duration: "2022-2024",
    team: ["Dr. Vikram Patel", "Meera Joshi", "Suresh Reddy", "Kavita Nair"],
    funding: "₹2.8 Crores",
    achievements: [
      "98% accuracy across 11 Indian languages",
      "Deployed in 15 government departments",
      "Processed 2M+ documents",
      "Patent filed for novel recognition algorithm"
    ],
    demoUrl: "#demo2",
    githubUrl: "#github2",
    documentationUrl: "#docs2",
    metrics: {
      users: "5,000+",
      downloads: "100k+",
      deployments: "15+"
    }
  },
  {
    id: 'speech-analyzer',
    title: "Speech Analyzer",
    description: "Real-time speech analysis tool that identifies emotions, sentiment, and comprehension levels.",
    fullDescription: "The Speech Analyzer is a sophisticated real-time analysis tool that processes spoken language to extract emotional states, sentiment patterns, and comprehension levels. Utilizing advanced machine learning models trained on diverse datasets, the system can identify subtle emotional cues, assess speaker confidence, and measure audience engagement. Applications span customer service optimization, educational assessment, healthcare monitoring, and therapeutic interventions. The system supports multiple languages and dialects, providing culturally sensitive analysis that accounts for regional variations in speech patterns and emotional expression.",
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Speech AI", "Emotion Analysis", "Healthcare", "Customer Service"],
    techStack: ["TensorFlow", "WebRTC", "Node.js", "Vue.js", "Python", "Redis"],
    category: "ai",
    status: "Completed",
    impact: "Medium",
    duration: "2023-2024",
    team: ["Dr. Amit Gupta", "Ravi Verma", "Lakshmi Iyer", "Arjun Menon"],
    funding: "₹1.8 Crores",
    achievements: [
      "85% accuracy in emotion detection",
      "Real-time processing under 100ms latency",
      "Integrated with 20+ customer service platforms",
      "Published research in IEEE conferences"
    ],
    demoUrl: "#demo3",
    githubUrl: "#github3",
    documentationUrl: "#docs3",
    metrics: {
      users: "10,000+",
      downloads: "50k+",
      stars: "800"
    }
  },
  {
    id: 'speech-translator',
    title: "Speech-to-Speech Translator",
    description: "Low-latency translation system for 8 Indian languages with natural voice synthesis.",
    fullDescription: "Our Speech-to-Speech Translator breaks down language barriers with real-time translation capabilities across 8 major Indian languages. The system combines automatic speech recognition, neural machine translation, and text-to-speech synthesis to provide seamless communication experiences. With latency under 2 seconds, the translator maintains natural conversation flow while preserving speaker emotions and context. Deployed in rural education programs, tourism applications, and government services, it has facilitated communication for thousands of users. The system includes dialect recognition, cultural context adaptation, and offline capabilities for areas with limited connectivity.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Translation", "Speech AI", "Accessibility", "Tourism"],
    techStack: ["PyTorch", "TTS", "FastAPI", "React", "WebSocket", "Docker"],
    category: "nlp",
    status: "Ongoing",
    impact: "High",
    duration: "2023-2025",
    team: ["Dr. Meera Joshi", "Suresh Reddy", "Priya Sharma", "Rajesh Kumar"],
    funding: "₹2.2 Crores",
    achievements: [
      "Sub-2 second translation latency",
      "Support for 8 Indian languages",
      "Deployed in 100+ tourism centers",
      "Featured in National Language Technology Mission"
    ],
    demoUrl: "#demo4",
    githubUrl: "#github4",
    documentationUrl: "#docs4",
    metrics: {
      users: "15,000+",
      deployments: "100+",
      stars: "950"
    }
  },
  {
    id: 'lms-social',
    title: "LMS + Social Media",
    description: "Learning management system with integrated social features for peer-to-peer learning.",
    fullDescription: "This innovative Learning Management System combines traditional educational tools with social media features to create an engaging, collaborative learning environment. Students can form study groups, share resources, participate in discussions, and mentor each other through integrated social features. The platform includes gamification elements, progress sharing, peer assessment tools, and community challenges that motivate learners and build educational communities. Advanced analytics provide insights into learning patterns, social interactions, and collaborative effectiveness, helping educators optimize their teaching strategies and identify students who might benefit from additional support.",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["EdTech", "Social", "Collaboration", "Gamification"],
    techStack: ["Django", "React", "PostgreSQL", "Redis", "WebSocket", "AWS"],
    category: "edtech",
    status: "Completed",
    impact: "Medium",
    duration: "2022-2023",
    team: ["Dr. Kavita Nair", "Vikram Patel", "Anita Singh", "Amit Gupta"],
    funding: "₹1.5 Crores",
    achievements: [
      "60% increase in student engagement",
      "Adopted by 30+ educational institutions",
      "Winner of EdTech Innovation Award 2023",
      "Open-sourced with 500+ GitHub stars"
    ],
    demoUrl: "#demo5",
    githubUrl: "#github5",
    documentationUrl: "#docs5",
    metrics: {
      users: "8,000+",
      deployments: "30+",
      stars: "500+"
    }
  },
  {
    id: 'rural-internet',
    title: "Rural Internet Access",
    description: "Low-cost mesh network solution for providing internet connectivity to rural areas.",
    fullDescription: "The Rural Internet Access project addresses the digital divide by providing affordable, reliable internet connectivity to underserved rural communities. Using innovative mesh network technology, the solution creates self-healing networks that can operate with minimal infrastructure. Solar-powered nodes ensure sustainability, while intelligent routing algorithms optimize bandwidth usage and maintain connectivity even when individual nodes fail. The system has been successfully deployed in 23 villages, connecting schools, healthcare centers, and community spaces. Local technicians are trained to maintain the networks, creating employment opportunities while ensuring long-term sustainability.",
    image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Connectivity", "Rural", "Infrastructure", "Sustainability"],
    techStack: ["Embedded Systems", "OpenWRT", "Python", "React", "LoRaWAN", "Solar"],
    category: "infrastructure",
    status: "Ongoing",
    impact: "High",
    duration: "2023-2026",
    team: ["Dr. Ravi Verma", "Arjun Menon", "Lakshmi Iyer", "Suresh Reddy"],
    funding: "₹4.2 Crores",
    achievements: [
      "Connected 23 villages to internet",
      "Served 15,000+ rural residents",
      "99.5% network uptime achieved",
      "Recognized by Digital India initiative"
    ],
    demoUrl: "#demo6",
    githubUrl: "#github6",
    documentationUrl: "#docs6",
    metrics: {
      users: "15,000+",
      deployments: "23",
      stars: "300"
    }
  }
];

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'edtech', label: 'Education Technology' },
    { id: 'nlp', label: 'Natural Language Processing' },
    { id: 'ai', label: 'Artificial Intelligence' },
    { id: 'infrastructure', label: 'Infrastructure' }
  ];

  const filteredProjects = projects.filter(project => 
    (activeFilter === 'all' || project.category === activeFilter) &&
    (searchTerm === '' || project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const projectStats = {
    total: projects.length,
    completed: projects.filter(p => p.status === 'Completed').length,
    ongoing: projects.filter(p => p.status === 'Ongoing').length,
    highImpact: projects.filter(p => p.impact === 'High').length
  };

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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">Projects</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Innovative solutions addressing real-world challenges through digital transformation, 
            artificial intelligence, and human-centered design.
          </p>
        </motion.div>
      </section>

      {/* Project Statistics */}
      <section className="container-section bg-indigo-950/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold text-neon mb-2 font-orbitron">{projectStats.total}</div>
            <div className="text-sm text-gray-400">Total Projects</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold text-green-400 mb-2 font-orbitron">{projectStats.completed}</div>
            <div className="text-sm text-gray-400">Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-orbitron">{projectStats.ongoing}</div>
            <div className="text-sm text-gray-400">Ongoing</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <div className="text-3xl font-bold text-purple-400 mb-2 font-orbitron">{projectStats.highImpact}</div>
            <div className="text-sm text-gray-400">High Impact</div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="container-section">
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
            />
          </div>
          <div className="relative">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="appearance-none bg-white/10 border border-white/20 rounded-lg px-4 py-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-neon"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-indigo-950">
                  {category.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden cursor-pointer hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Ongoing' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    project.impact === 'High' ? 'bg-red-500/20 text-red-400' : 'bg-orange-500/20 text-orange-400'
                  }`}>
                    {project.impact} Impact
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-orbitron">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      #{tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-400">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {project.metrics && (
                  <div className="flex justify-between text-sm text-gray-400 mb-4">
                    {project.metrics.users && (
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {project.metrics.users}
                      </span>
                    )}
                    {project.metrics.stars && (
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        {project.metrics.stars}
                      </span>
                    )}
                    {project.metrics.deployments && (
                      <span className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {project.metrics.deployments}
                      </span>
                    )}
                  </div>
                )}
                
                <button className="text-neon flex items-center font-medium hover:text-white transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="glass-card max-w-6xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute right-4 top-4 text-white hover:text-neon transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="h-64 sm:h-80 overflow-hidden relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-3xl sm:text-4xl font-bold mb-2 font-orbitron text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-sm rounded-full bg-white/20 text-white backdrop-blur-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                {/* Project Overview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-2">
                    <h4 className="text-xl font-semibold mb-4 font-orbitron">Project Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedProject.fullDescription}</p>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Project Info */}
                    <div className="glass-card p-4">
                      <h5 className="font-semibold mb-3 text-neon">Project Details</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Status:</span>
                          <span className={`${
                            selectedProject.status === 'Completed' ? 'text-green-400' :
                            selectedProject.status === 'Ongoing' ? 'text-yellow-400' :
                            'text-blue-400'
                          }`}>
                            {selectedProject.status}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Duration:</span>
                          <span className="text-white">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Funding:</span>
                          <span className="text-neon font-semibold">{selectedProject.funding}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Impact:</span>
                          <span className={`${
                            selectedProject.impact === 'High' ? 'text-red-400' : 'text-orange-400'
                          }`}>
                            {selectedProject.impact}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Metrics */}
                    {selectedProject.metrics && (
                      <div className="glass-card p-4">
                        <h5 className="font-semibold mb-3 text-neon">Key Metrics</h5>
                        <div className="space-y-2 text-sm">
                          {selectedProject.metrics.users && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">Users:</span>
                              <span className="text-white">{selectedProject.metrics.users}</span>
                            </div>
                          )}
                          {selectedProject.metrics.downloads && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">Downloads:</span>
                              <span className="text-white">{selectedProject.metrics.downloads}</span>
                            </div>
                          )}
                          {selectedProject.metrics.stars && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">GitHub Stars:</span>
                              <span className="text-white">{selectedProject.metrics.stars}</span>
                            </div>
                          )}
                          {selectedProject.metrics.deployments && (
                            <div className="flex justify-between">
                              <span className="text-gray-400">Deployments:</span>
                              <span className="text-white">{selectedProject.metrics.deployments}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 font-orbitron">Technology Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-4 py-2 rounded-lg text-sm bg-gradient-to-r from-blue-500/20 to-neon/20 border border-white/10 text-white hover:scale-105 transition-transform"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 font-orbitron">Project Team</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {selectedProject.team.map((member, i) => (
                      <div key={i} className="glass-card p-4 text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-neon rounded-full flex items-center justify-center mx-auto mb-2">
                          <User className="h-6 w-6 text-white" />
                        </div>
                        <div className="text-sm font-medium">{member}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-8">
                  <h4 className="text-xl font-semibold mb-4 font-orbitron">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedProject.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-3 glass-card p-4">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} className="btn-primary flex items-center">
                      <Play size={18} className="mr-2" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {selectedProject.documentationUrl && (
                    <a href={selectedProject.documentationUrl} className="btn-secondary flex items-center">
                      <FileText size={18} className="mr-2" />
                      <span>Documentation</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} className="btn-secondary flex items-center">
                      <Github size={18} className="mr-2" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="container-section bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron">Have a Project Idea?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your innovative ideas to life. We're always looking for 
            new challenges and opportunities to create meaningful impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Start a Project
            </a>
            <a href="/research" className="btn-secondary">
              Explore Research
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ProjectsPage;
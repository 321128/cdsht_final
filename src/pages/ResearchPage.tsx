import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';
import { 
  BrainCircuit, FileCode, FileText, Cpu, Languages, FileBarChart, Globe,
  Calendar, User, ExternalLink, Download, Search, Filter, ChevronDown,
  Award, BookOpen, Users, Target, Microscope, Lightbulb
} from 'lucide-react';

const ResearchPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const researchAreas = [
    {
      icon: <BrainCircuit size={42} />,
      title: "Artificial Intelligence & ML",
      description: "Developing novel AI models with focus on interpretability, efficiency, and ethics. Research spans neural networks, reinforcement learning, and federated learning approaches.",
      projects: 12,
      publications: 28,
      category: "ai"
    },
    {
      icon: <Languages size={42} />,
      title: "Natural Language Processing",
      description: "NLP research focusing on Indian languages and dialects, creating tools for OCR, speech synthesis, translation, and sentiment analysis for low-resource languages.",
      projects: 8,
      publications: 15,
      category: "nlp"
    },
    {
      icon: <FileBarChart size={42} />,
      title: "Data Science & Analytics",
      description: "Leveraging big data techniques to extract actionable insights for social good, including predictive models for healthcare, education, and urban planning.",
      projects: 10,
      publications: 22,
      category: "data"
    },
    {
      icon: <FileCode size={42} />,
      title: "Educational Technology",
      description: "Creating adaptive learning platforms, assessment tools, and educational content that personalizes learning experiences and improves outcomes.",
      projects: 15,
      publications: 18,
      category: "edtech"
    },
    {
      icon: <FileText size={42} />,
      title: "Digital Humanities",
      description: "Bridging technology with humanities through projects that preserve cultural heritage, analyze historical texts, and enable digital storytelling.",
      projects: 6,
      publications: 12,
      category: "humanities"
    },
    {
      icon: <Cpu size={42} />,
      title: "Edge Computing & IoT",
      description: "Designing lightweight AI models and systems for deployment on edge devices with applications in agriculture, healthcare monitoring, and smart infrastructure.",
      projects: 9,
      publications: 16,
      category: "iot"
    }
  ];

  const publications = [
    {
      title: "Federated Learning for Healthcare: Privacy-Preserving Medical Diagnosis",
      authors: ["Dr. Priya Sharma", "Dr. Rajesh Kumar", "Dr. Anita Singh"],
      journal: "IEEE Transactions on Medical Imaging",
      year: "2024",
      category: "ai",
      citations: 45,
      impact: "High",
      abstract: "This paper presents a novel federated learning framework for medical diagnosis that preserves patient privacy while achieving state-of-the-art accuracy in disease detection."
    },
    {
      title: "Low-Resource Language Processing: A Comprehensive Study of Indian Regional Languages",
      authors: ["Dr. Vikram Patel", "Dr. Meera Joshi"],
      journal: "Computational Linguistics",
      year: "2024",
      category: "nlp",
      citations: 32,
      impact: "High",
      abstract: "Comprehensive analysis of NLP techniques for Indian regional languages, proposing new methodologies for low-resource language processing."
    },
    {
      title: "Adaptive Learning Systems: Personalization Through AI",
      authors: ["Dr. Suresh Reddy", "Dr. Kavita Nair"],
      journal: "Educational Technology Research",
      year: "2023",
      category: "edtech",
      citations: 28,
      impact: "Medium",
      abstract: "Investigation of AI-driven personalization in educational technology, demonstrating improved learning outcomes through adaptive systems."
    },
    {
      title: "Edge AI for Smart Agriculture: Real-time Crop Monitoring",
      authors: ["Dr. Amit Gupta", "Dr. Ravi Verma"],
      journal: "IEEE Internet of Things Journal",
      year: "2024",
      category: "iot",
      citations: 38,
      impact: "High",
      abstract: "Novel edge computing framework for real-time crop monitoring using lightweight AI models deployed on IoT devices."
    },
    {
      title: "Digital Heritage Preservation: AI-Powered Cultural Archive Systems",
      authors: ["Dr. Lakshmi Iyer", "Dr. Arjun Menon"],
      journal: "Digital Humanities Quarterly",
      year: "2023",
      category: "humanities",
      citations: 22,
      impact: "Medium",
      abstract: "Innovative approach to cultural heritage preservation using AI technologies for digitization and analysis of historical artifacts."
    }
  ];

  const ongoingProjects = [
    {
      title: "AI-Powered Rural Healthcare Diagnostics",
      description: "Developing portable AI diagnostic tools for remote healthcare delivery in rural areas.",
      lead: "Dr. Priya Sharma",
      duration: "2023-2025",
      funding: "₹2.5 Crores",
      status: "Active",
      category: "ai"
    },
    {
      title: "Multilingual Educational Content Generation",
      description: "Creating AI systems that automatically generate educational content in multiple Indian languages.",
      lead: "Dr. Vikram Patel",
      duration: "2024-2026",
      funding: "₹1.8 Crores",
      status: "Active",
      category: "nlp"
    },
    {
      title: "Smart City Data Analytics Platform",
      description: "Building comprehensive analytics platform for urban planning and smart city initiatives.",
      lead: "Dr. Rajesh Kumar",
      duration: "2023-2024",
      funding: "₹3.2 Crores",
      status: "Completing",
      category: "data"
    }
  ];

  const researchMetrics = [
    { label: "Research Publications", value: "150+", icon: <BookOpen className="h-6 w-6" /> },
    { label: "Patents Filed", value: "25", icon: <Award className="h-6 w-6" /> },
    { label: "Ongoing Projects", value: "40", icon: <Target className="h-6 w-6" /> },
    { label: "Research Fellows", value: "60", icon: <Users className="h-6 w-6" /> },
    { label: "Industry Collaborations", value: "30+", icon: <Globe className="h-6 w-6" /> },
    { label: "Research Labs", value: "8", icon: <Microscope className="h-6 w-6" /> }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Research' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'nlp', label: 'NLP' },
    { id: 'data', label: 'Data Science' },
    { id: 'edtech', label: 'EdTech' },
    { id: 'humanities', label: 'Digital Humanities' },
    { id: 'iot', label: 'IoT & Edge' }
  ];

  const filteredPublications = publications.filter(pub => 
    (activeFilter === 'all' || pub.category === activeFilter) &&
    (searchTerm === '' || pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase())))
  );

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
            Research & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">Development</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Pioneering cutting-edge research in AI, digital transformation, and human-centered technology 
            to create solutions that benefit society.
          </p>
        </motion.div>
      </section>

      {/* Research Metrics */}
      <section className="container-section bg-indigo-950/30">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {researchMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-neon mb-3 flex justify-center">
                {metric.icon}
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-neon mb-2 font-orbitron">
                {metric.value}
              </div>
              <div className="text-sm text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Research Areas */}
      <section className="container-section">
        <SectionHeader
          title="Research Areas"
          subtitle="Our multidisciplinary research spans across various domains of digital transformation."
        />

        {/* 3D rotating visualization */}
        <motion.div 
          className="relative h-60 sm:h-80 my-12 sm:my-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-neon flex items-center justify-center shadow-[0_0_30px_rgba(14,180,252,0.5)]"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <Lightbulb size={32} className="text-white" />
            </motion.div>

            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <motion.div
                key={i}
                className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full glass-card flex items-center justify-center"
                initial={{ rotate: angle }}
                animate={{ 
                  rotate: angle + 360,
                  x: Math.cos((angle + 90) * Math.PI / 180) * 140,
                  y: Math.sin((angle + 90) * Math.PI / 180) * 140
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  x: { duration: 20, repeat: Infinity, ease: "linear" }, 
                  y: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
              >
                {researchAreas[i] && React.cloneElement(researchAreas[i].icon as React.ReactElement, { size: 24, className: "text-neon" })}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <div className="text-neon mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 font-orbitron">{area.title}</h3>
              <p className="text-gray-300 mb-4">{area.description}</p>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{area.projects} Projects</span>
                <span>{area.publications} Publications</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      <section className="container-section bg-indigo-950/30">
        <SectionHeader
          title="Recent Publications"
          subtitle="Our latest research contributions to the scientific community."
        />

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search publications..."
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
              {filterCategories.map(category => (
                <option key={category.id} value={category.id} className="bg-indigo-950">
                  {category.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {filteredPublications.map((publication, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-[0_0_20px_rgba(20,241,149,0.2)] transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 text-white">{publication.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {publication.authors.join(', ')}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {publication.year}
                    </span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      publication.impact === 'High' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {publication.impact} Impact
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">{publication.abstract}</p>
                  <div className="text-sm text-gray-400">
                    <span className="font-semibold">Published in:</span> {publication.journal} | 
                    <span className="font-semibold"> Citations:</span> {publication.citations}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    View Paper
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg hover:bg-green-500/30 transition-colors">
                    <Download className="h-4 w-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="container-section">
        <SectionHeader
          title="Ongoing Projects"
          subtitle="Current research initiatives driving innovation and social impact."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ongoingProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  project.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Principal Investigator:</span>
                  <span className="text-white">{project.lead}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Funding:</span>
                  <span className="text-neon font-semibold">{project.funding}</span>
                </div>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron">Collaborate With Us</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our research community and contribute to cutting-edge innovations that shape the future 
            of digital transformation and social impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Partner With Us
            </a>
            <a href="/about" className="btn-secondary">
              Learn More
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ResearchPage;
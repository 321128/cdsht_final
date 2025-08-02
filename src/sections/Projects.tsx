import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { ArrowRight, X, Code, FileText, Globe, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  techStack: string[];
  demoUrl?: string;
}

const projects: ProjectProps[] = [
  {
    title: "Setidure Technologies",
    description: "An integrated educational platform that leverages AI to personalize learning experiences. Features include adaptive learning pathways, progress tracking, and real-time feedback for educators.",
    image: "https://images.pexels.com/photos/5849571/pexels-photo-5849571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Education", "AI", "Accessibility"],
    techStack: ["React", "Python", "TensorFlow", "MongoDB"],
    demoUrl: "#demo1"
  },
  {
    title: "OCR for Indian Languages",
    description: "Advanced OCR system with 98% accuracy for 11 Indian languages. Deployed in government digitization projects and heritage preservation initiatives.",
    image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["NLP", "Computer Vision", "Heritage"],
    techStack: ["PyTorch", "OpenCV", "Flask", "React Native"],
    demoUrl: "#demo2"
  },
  {
    title: "Speech Analyzer",
    description: "Real-time speech analysis tool that identifies emotions, sentiment, and comprehension levels. Used in customer service, education, and healthcare applications.",
    image: "https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Speech AI", "Emotion Analysis", "Healthcare"],
    techStack: ["TensorFlow", "WebRTC", "NodeJS", "Vue"],
    demoUrl: "#demo3"
  },
  {
    title: "Speech-to-Speech Translator",
    description: "Low-latency translation system for 8 Indian languages with natural voice synthesis. Deployed in rural education programs and tourism applications.",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Translation", "Speech AI", "Accessibility"],
    techStack: ["PyTorch", "TTS", "FastAPI", "React"],
    demoUrl: "#demo4"
  },
  {
    title: "LMS + Social Media",
    description: "Learning management system with integrated social features to encourage peer-to-peer learning and community building in educational environments.",
    image: "https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["EdTech", "Social", "Collaboration"],
    techStack: ["Django", "React", "PostgreSQL", "Redis"],
    demoUrl: "#demo5"
  },
  {
    title: "Rural Internet Access",
    description: "Low-cost mesh network solution for providing internet connectivity to rural areas with limited infrastructure. Deployed in 23 villages.",
    image: "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Connectivity", "Rural", "Infrastructure"],
    techStack: ["Embedded Systems", "OpenWRT", "Python", "React"],
    demoUrl: "#demo6"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  return (
    <section id="projects" className="container-section">
      <SectionHeader
        title="Notable Projects"
        subtitle="Discover our innovative solutions addressing real-world challenges through digital transformation."
      />

      {/* Horizontal scroll showcase */}
      <div className="mt-12 sm:mt-16 overflow-x-auto pb-8">
        <div className="flex space-x-6 min-w-max">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card w-80 sm:w-96 overflow-hidden flex-shrink-0 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 font-orbitron">{project.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs rounded-full bg-white/10 text-white"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <button 
                  className="text-neon flex items-center font-medium"
                >
                  <span>View Project</span>
                  <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
              className="glass-card max-w-4xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute right-4 top-4 text-white hover:text-neon transition-colors z-10"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="h-64 sm:h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-orbitron">{selectedProject.title}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-white/10 text-white"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">{selectedProject.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 font-orbitron">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-blue-500/20 to-neon/20 border border-white/10 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href={selectedProject.demoUrl} className="btn-primary flex items-center">
                    <Globe size={18} className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                  <a href="#" className="btn-secondary flex items-center">
                    <FileText size={18} className="mr-2" />
                    <span>Documentation</span>
                  </a>
                  <a href="#" className="btn-secondary flex items-center">
                    <Github size={18} className="mr-2" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import AnimatedCard from '../components/AnimatedCard';
import { 
  BrainCircuit, FileCode, FileText, Cpu, 
  Languages, FileBarChart, Globe 
} from 'lucide-react';

const ResearchDevelopment: React.FC = () => {
  const researchAreas = [
    {
      icon: <BrainCircuit size={42} />,
      title: "Artificial Intelligence & ML",
      description: "We're developing novel AI models with a focus on interpretability, efficiency, and ethics. Our research spans neural networks, reinforcement learning, and federated learning approaches."
    },
    {
      icon: <Languages size={42} />,
      title: "Natural Language Processing",
      description: "Our NLP research focuses on Indian languages and dialects, creating tools for OCR, speech synthesis, translation, and sentiment analysis for low-resource languages."
    },
    {
      icon: <FileBarChart size={42} />,
      title: "Data Science & Analytics",
      description: "We leverage big data techniques to extract actionable insights for social good, including predictive models for healthcare, education, and urban planning."
    },
    {
      icon: <FileCode size={42} />,
      title: "Educational Technology",
      description: "Creating adaptive learning platforms, assessment tools, and educational content that personalizes learning experiences and improves outcomes across diverse contexts."
    },
    {
      icon: <FileText size={42} />,
      title: "Digital Humanities",
      description: "Bridging technology with humanities through projects that preserve cultural heritage, analyze historical texts, and enable digital storytelling."
    },
    {
      icon: <Cpu size={42} />,
      title: "Edge Computing & IoT",
      description: "Designing lightweight AI models and systems for deployment on edge devices with applications in agriculture, healthcare monitoring, and smart infrastructure."
    }
  ];

  return (
    <section id="research" className="container-section">
      <SectionHeader
        title="Research & Development Cell"
        subtitle="Our R&D initiatives drive innovation through multidisciplinary research and cutting-edge technologies."
      />

      {/* 3D rotating "Idea Reactor" visualization */}
      <motion.div 
        className="relative h-60 sm:h-80 my-12 sm:my-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Center core */}
          <motion.div 
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-blue-500 to-neon flex items-center justify-center shadow-[0_0_30px_rgba(14,180,252,0.5)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <Globe size={32} className="text-white" />
          </motion.div>

          {/* Orbiting elements */}
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

      {/* Research Areas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {researchAreas.map((area, index) => (
          <AnimatedCard
            key={index}
            title={area.title}
            description={area.description}
            icon={area.icon}
            delay={index}
          />
        ))}
      </div>

      {/* Research Metrics */}
      <motion.div 
        className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {[
          { label: "Research Publications", value: "120+" },
          { label: "Patents Filed", value: "18" },
          { label: "Ongoing Projects", value: "32" },
          { label: "Research Fellows", value: "45" }
        ].map((metric, i) => (
          <div key={i} className="glass-card p-6 text-center">
            <div className="text-3xl sm:text-4xl font-bold mb-2 text-neon font-orbitron">
              {metric.value}
            </div>
            <div className="text-sm sm:text-base text-gray-300">
              {metric.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ResearchDevelopment;
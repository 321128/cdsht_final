import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Cpu, Database, Server, Monitor, Users, Network } from 'lucide-react';

const Infrastructure: React.FC = () => {
  const facilities = [
    {
      icon: <Cpu size={48} />,
      title: "High-Performance Computing Cluster",
      description: "Our state-of-the-art computing cluster features the latest NVIDIA A100 GPUs and AMD EPYC processors, providing researchers with the computational power needed for complex AI training and simulations.",
      specs: ["60+ High-Performance Systems", "16 NVIDIA A100 GPUs", "1.2 PetaFLOPS Computing Power"]
    },
    {
      icon: <Database size={48} />,
      title: "Data Infrastructure",
      description: "Secure, scalable storage and processing solutions for managing large datasets with high-throughput networking for efficient data movement and processing.",
      specs: ["500TB Storage Capacity", "10Gbps Network Backbone", "Secure Data Isolation"]
    },
    {
      icon: <Server size={48} />,
      title: "AI Development Lab",
      description: "Dedicated environment for machine learning and AI research with specialized hardware accelerators and software tools for state-of-the-art model development.",
      specs: ["Pre-configured ML Frameworks", "Model Evaluation Tools", "Experiment Tracking"]
    },
    {
      icon: <Monitor size={48} />,
      title: "Research Workstations",
      description: "High-end workstations equipped with professional graphics and computing capabilities for research, design, and development tasks.",
      specs: ["Dual 4K Displays", "128GB RAM Workstations", "Professional Graphics"]
    },
    {
      icon: <Users size={48} />,
      title: "Collaboration Spaces",
      description: "Purpose-built environments for team collaboration, brainstorming, and interdisciplinary research activities with advanced presentation capabilities.",
      specs: ["Video Conferencing", "Digital Whiteboards", "Flexible Layouts"]
    },
    {
      icon: <Network size={48} />,
      title: "Network & Security",
      description: "Enterprise-grade networking and security infrastructure to ensure reliable connectivity and data protection for all research activities.",
      specs: ["Secured Network Access", "VPN Services", "24/7 Monitoring"]
    }
  ];

  return (
    <section id="infrastructure" className="container-section bg-indigo-950/50">
      <SectionHeader
        title="Infrastructure & Facilities"
        subtitle="State-of-the-art resources that power our innovative research and development."
      />

      {/* 3D Walkthrough Simulation (Simple Version) */}
      <motion.div 
        className="relative h-64 sm:h-80 my-12 overflow-hidden rounded-xl glass-card"
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
            Our flagship facility houses cutting-edge computing infrastructure, collaborative spaces, and specialized research equipment.
          </p>
          <button className="btn-primary self-start">
            Virtual Tour
          </button>
        </div>
        
        {/* Grid visualization in background */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-900/20 to-indigo-950/20">
          <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={`v${i}`} className="border-r border-blue-500/20"></div>
            ))}
            {Array.from({ length: 13 }).map((_, i) => (
              <div key={`h${i}`} className="border-b border-blue-500/20"></div>
            ))}
          </div>
          
          {/* Animated nodes */}
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

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {facilities.map((facility, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="mb-6 text-neon">
              {facility.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 font-orbitron">{facility.title}</h3>
            <p className="text-gray-300 mb-4">{facility.description}</p>
            
            <div className="space-y-2">
              {facility.specs.map((spec, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-neon mr-2"></div>
                  <span className="text-sm text-gray-300">{spec}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Infrastructure;
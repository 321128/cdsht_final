import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Clock, Award, Book } from 'lucide-react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isLeft?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  year, 
  title, 
  description, 
  icon,
  isLeft = true,
  delay = 0
}) => {
  return (
    <div className="relative">
      {/* Line */}
      <div className="absolute left-0 sm:left-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-neon transform sm:-translate-x-1/2"></div>
      
      {/* Content */}
      <motion.div 
        className={`relative flex items-start ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'} mb-12`}
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: delay * 0.1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Icon/Dot */}
        <div className="absolute left-0 sm:left-1/2 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-neon transform -translate-x-1/2 shadow-[0_0_15px_rgba(20,241,149,0.5)]">
          {icon}
        </div>
        
        {/* Content Box */}
        <div 
          className={`glass-card p-5 sm:p-6 ml-16 sm:ml-0 ${isLeft ? 'sm:mr-12 sm:text-right' : 'sm:ml-12'} sm:w-[calc(50%-3rem)]`}
        >
          <div className="text-neon font-orbitron font-bold mb-2">{year}</div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </motion.div>
    </div>
  );
};

const Introduction: React.FC = () => {
  return (
    <section id="introduction" className="container-section">
      <SectionHeader 
        title="Our Journey"
        subtitle="The Centre for Digital Social & Human Transformation (CDSHT) was established to bridge the gap between technological advancement and social uplift through digital advancements."
      />

      <div className="relative mt-16 sm:mt-24 pl-5 sm:pl-0">
        <TimelineItem 
          year="2024"
          title="Setidure Technologies Incubated"
          description="Launched our first incubated startup focused on educational technology and accessibility."
          icon={<Book className="h-5 w-5 text-white" />}
          isLeft={true}
          delay={0}
        />
        
        <TimelineItem 
          year="2025"
          title="AI Labs Established"
          description="Build and establish a state-of-the-art AI research facility with high computational resources for experiments in state-of-the-art transformers"
          icon={<Clock className="h-5 w-5 text-white" />}
          isLeft={false}
          delay={1}
        />
      </div>
    </section>
  );
};

export default Introduction;
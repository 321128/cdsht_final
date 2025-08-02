import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mt-4">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-neon rounded-full mx-auto mt-6"></div>
    </motion.div>
  );
};

export default SectionHeader;
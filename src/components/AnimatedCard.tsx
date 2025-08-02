import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  icon,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`glass-card p-6 sm:p-8 ${className}`}
    >
      {icon && (
        <div className="mb-4 text-neon">
          {icon}
        </div>
      )}
      <h3 className="text-xl sm:text-2xl font-bold mb-3 font-orbitron">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

export default AnimatedCard;
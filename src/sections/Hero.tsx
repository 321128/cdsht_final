import React from 'react';
import { motion } from 'framer-motion';
import Scene3D from '../components/Scene3D';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/90 via-indigo-950/70 to-indigo-950 z-10"></div>

      {/* Floating 3D globe */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Content */}
      <div className="container-section relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 font-orbitron">
            <span className="block">Transforming Society</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">Through Digital Innovation</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl sm:text-2xl mb-10 text-gray-300 max-w-3xl mx-auto"
        >
          At CDSHT, we're building the bridge between technology and humanity for an inclusive digital future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="#projects" className="btn-secondary">
            View Our Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </motion.div>
    </section>
  );
};

export default Hero;
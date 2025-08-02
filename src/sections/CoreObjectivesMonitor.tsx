import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { ChevronLeft, ChevronRight, Play, Pause, Power } from 'lucide-react';

interface ObjectiveProps {
  icon: string;
  title: string;
  description: string;
}

const objectives: ObjectiveProps[] = [
  {
    icon: "🌱",
    title: "Sustainable Impact",
    description: "Creating lasting positive impact through sustainable digital solutions"
  },
  {
    icon: "👥",
    title: "Human-Centered Design",
    description: "Ensuring technology serves human needs through empathetic design practices"
  },
  {
    icon: "📊",
    title: "Data-Driven Solutions",
    description: "Developing solutions informed by comprehensive data analysis and machine learning"
  },
  {
    icon: "💡",
    title: "Creative Solutions",
    description: "Fostering creativity in approaching complex digital challenges"
  },
  {
    icon: "🔬",
    title: "Research & Innovation",
    description: "Conducting cutting-edge research in digital technologies to solve societal problems"
  },
  {
    icon: "⚙️",
    title: "Technical Excellence",
    description: "Maintaining high standards of technical quality and performance"
  },
  {
    icon: "🛡️",
    title: "Digital Ethics",
    description: "Promoting responsible and ethical use of technology and data"
  }
];

const CoreObjectivesMonitor: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [direction, setDirection] = useState(0);

  // Power on animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPoweredOn(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-advance functionality
  useEffect(() => {
    if (!isAutoPlay || !isPoweredOn) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % objectives.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isPoweredOn]);

  // Keyboard navigation
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!isPoweredOn) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case ' ':
        event.preventDefault();
        setIsAutoPlay(prev => !prev);
        break;
    }
  }, [isPoweredOn]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const goToNext = () => {
    if (!isPoweredOn) return;
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % objectives.length);
  };

  const goToPrevious = () => {
    if (!isPoweredOn) return;
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + objectives.length) % objectives.length);
  };

  const goToSlide = (index: number) => {
    if (!isPoweredOn) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  const currentObjective = objectives[currentIndex];

  return (
    <section id="objectives" className="container-section bg-indigo-950/50 relative overflow-hidden">
      <SectionHeader
        title="Core Objectives"
        subtitle="Navigate through our strategic goals that guide our research, development, and innovation activities."
      />

      {/* Monitor Container */}
      <div className="relative max-w-6xl mx-auto mt-16">
        {/* Monitor Frame */}
        <div className="relative bg-gray-900 rounded-3xl p-8 shadow-2xl">
          {/* Monitor Bezel */}
          <div className="relative bg-black rounded-2xl p-6 shadow-inner">
            {/* Screen */}
            <div 
              className={`relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden transition-all duration-1000 ${
                isPoweredOn ? 'shadow-[0_0_50px_rgba(59,130,246,0.3)]' : 'shadow-none'
              }`}
              style={{ aspectRatio: '16/9' }}
            >
              {/* Power On Effect */}
              <AnimatePresence>
                {!isPoweredOn && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black flex items-center justify-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="text-blue-400"
                    >
                      <Power size={48} />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Screen Content */}
              {isPoweredOn && (
                <div className="relative h-full flex flex-col">
                  {/* Content Area */}
                  <div className="flex-1 relative overflow-hidden">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.2 },
                          scale: { duration: 0.2 }
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
                      >
                        {/* Icon */}
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="text-8xl mb-8 filter drop-shadow-lg"
                        >
                          {currentObjective.icon}
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                          className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon font-orbitron"
                        >
                          {currentObjective.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.4, duration: 0.5 }}
                          className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl font-exo"
                        >
                          {currentObjective.description}
                        </motion.p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Progress Bar */}
                  <div className="px-8 pb-6">
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      {objectives.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex
                              ? 'bg-neon shadow-[0_0_10px_rgba(20,241,149,0.8)]'
                              : 'bg-gray-600 hover:bg-gray-500'
                          }`}
                          aria-label={`Go to objective ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    {/* Progress Text */}
                    <div className="text-center text-sm text-gray-400 font-orbitron">
                      {currentIndex + 1} of {objectives.length}
                    </div>
                  </div>
                </div>
              )}

              {/* Scan Lines Effect */}
              {isPoweredOn && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent animate-pulse"></div>
                  <div className="absolute inset-0 bg-[linear-gradient(transparent_98%,rgba(59,130,246,0.03)_100%)] bg-[length:100%_4px]"></div>
                </div>
              )}
            </div>
          </div>

          {/* Monitor Stand */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-800 rounded-b-lg shadow-lg"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-4 bg-gray-900 rounded-full shadow-lg"></div>
        </div>

        {/* Control Panel */}
        {isPoweredOn && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex items-center justify-center mt-12 space-x-6"
          >
            {/* Previous Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToPrevious}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Previous objective"
            >
              <ChevronLeft size={20} />
              <span className="font-orbitron">PREV</span>
            </motion.button>

            {/* Auto-play Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`flex items-center space-x-2 px-6 py-3 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                isAutoPlay
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                  : 'bg-gradient-to-r from-green-600 to-green-500 text-white'
              }`}
              aria-label={isAutoPlay ? 'Pause auto-advance' : 'Start auto-advance'}
            >
              {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
              <span className="font-orbitron">{isAutoPlay ? 'PAUSE' : 'PLAY'}</span>
            </motion.button>

            {/* Next Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={goToNext}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Next objective"
            >
              <span className="font-orbitron">NEXT</span>
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        )}

        {/* Keyboard Instructions */}
        {isPoweredOn && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-center mt-8 text-sm text-gray-400 font-exo"
          >
            Use <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">←</kbd> <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">→</kbd> arrow keys or <kbd className="px-2 py-1 bg-gray-700 rounded text-xs">Space</kbd> to control
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CoreObjectivesMonitor;
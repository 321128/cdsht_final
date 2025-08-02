import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Eye, Target, Lightbulb, Globe, Users, Shield } from 'lucide-react';

const VisionMission: React.FC = () => {
  const cards = [
    {
      icon: <Eye size={40} />,
      title: "Our Vision",
      description: "To create an inclusive digital society where technology empowers every individual regardless of background or ability.",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Innovation",
      description: "Pioneering cutting-edge technologies like AI, machine learning, and data analytics to solve real-world problems.",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="vision-mission" className="container-section bg-indigo-950/50">
      <SectionHeader
        title="Vision & Innovation"
        subtitle="Guided by our core principles, we strive to create a future where technology and humanity evolve together."
      />

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-12 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            className="glass-card overflow-hidden w-full sm:w-80 md:w-96"
          >
            <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
            <div className="p-6 sm:p-8">
              <div className="mb-6 text-white">
                {card.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 font-orbitron">{card.title}</h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Central connecting element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 sm:mt-24 text-center"
      >
        <div className="glass-card max-w-2xl mx-auto p-8 border border-neon shadow-[0_0_15px_rgba(20,241,149,0.3)]">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 font-orbitron text-white">
            Inclusive Digital Society
          </h3>
          <p className="text-gray-300">
            Our vision and innovation converge on one goal: creating a world where digital technologies serve humanity's best interests and are accessible to all.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default VisionMission;
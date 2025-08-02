import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { X, GraduationCap, Database, Brain, MessageSquare, Building, Code } from 'lucide-react';

interface LeaderProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  experience?: string;
  image: string;
}

const leaders: LeaderProps[] = [
  {
    name: "Prof. Ashok Kumar Harnal",
    role: "Chair",
    bio: "Expert in Big Data, Machine Learning, and Natural Language Processing with extensive research experience in AI applications.",
    expertise: ["Big Data Analytics", "Machine Learning", "Natural Language Processing"],
    experience: "31 years of experience in academia and research",
    image: "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Prof. Amarnath Mitra",
    role: "Convener",
    bio: "Former Quantitative Analyst turned academic leader, specializing in Big Data Analytics and Information Technology.",
    expertise: ["Big Data Analytics", "Quantitative Analysis", "Information Technology"],
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Prof. Subir Verma",
    role: "Member & Director at FORE",
    bio: "Distinguished academic leader with extensive experience in consulting and research.",
    expertise: ["Strategic Management", "Consulting", "Academic Leadership"],
    experience: "33 years in academia and consulting",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Prof. Sriparna Basu",
    role: "Member & Dean (Academics)",
    bio: "Expert in communication and cultural studies, leading academic initiatives and research programs.",
    expertise: ["Communication Studies", "Cultural Studies", "Academic Administration"],
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Prof. Shilpi Jain",
    role: "Member & Dean (Corporate Relations)",
    bio: "Focuses on Information Technology and Big Data, bridging academia with industry partnerships.",
    expertise: ["Information Technology", "Big Data", "Corporate Relations"],
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    name: "Prof. Saurabh Mittal",
    role: "Member",
    bio: "Information Systems expert with extensive experience in both academia and industry.",
    expertise: ["Information Systems", "Technology Management", "Digital Transformation"],
    experience: "17 years in academia and industry",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const Leadership: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProps | null>(null);

  return (
    <section id="leadership" className="container-section">
      <SectionHeader
        title="Leadership & Governance"
        subtitle="Meet our distinguished leadership team guiding CDSHT's mission of digital transformation and innovation."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="glass-card overflow-hidden cursor-pointer"
            onClick={() => setSelectedLeader(leader)}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={leader.image} 
                alt={leader.name} 
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold font-orbitron mb-1">{leader.name}</h3>
              <p className="text-neon mb-3">{leader.role}</p>
              <button 
                className="text-white border-b border-blue-electric hover:text-neon transition-colors"
              >
                View Profile
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Leader Profile Modal */}
      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="glass-card max-w-3xl w-full overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute right-4 top-4 text-white hover:text-neon transition-colors"
                onClick={() => setSelectedLeader(null)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={selectedLeader.image} 
                    alt={selectedLeader.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-2xl font-bold font-orbitron mb-1">{selectedLeader.name}</h3>
                  <p className="text-neon mb-4">{selectedLeader.role}</p>
                  
                  <h4 className="text-lg font-semibold mb-2 font-orbitron">Biography</h4>
                  <p className="text-gray-300 mb-4">{selectedLeader.bio}</p>
                  
                  {selectedLeader.experience && (
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold">Experience:</span> {selectedLeader.experience}
                    </p>
                  )}
                  
                  <h4 className="text-lg font-semibold mb-2 font-orbitron">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedLeader.expertise.map((item, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 rounded-full text-sm bg-white/10 text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Leadership;
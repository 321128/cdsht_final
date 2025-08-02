import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { 
  Lightbulb, Database, Users, GraduationCap, 
  Globe, Cog, Shield, Zap, PenTool, Code, Timer
} from 'lucide-react';

interface ObjectiveProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const objectives: ObjectiveProps[] = [
  {
    icon: <Lightbulb size={24} />,
    title: "Research & Innovation",
    description: "Conducting cutting-edge research in digital technologies to solve societal challenges."
  },
  {
    icon: <Database size={24} />,
    title: "Data-Driven Solutions",
    description: "Developing solutions informed by comprehensive data analysis and machine learning."
  },
  {
    icon: <Users size={24} />,
    title: "Human-Centered Design",
    description: "Ensuring technology serves human needs through empathetic design practices."
  },
  {
    icon: <GraduationCap size={24} />,
    title: "Education & Training",
    description: "Building capacity through specialized training in digital skills and innovation."
  },
  {
    icon: <Globe size={24} />,
    title: "Inclusive Development",
    description: "Creating technologies that are accessible regardless of geography or ability."
  },
  {
    icon: <Cog size={24} />,
    title: "Technical Excellence",
    description: "Maintaining high standards of technical quality and performance."
  },
  {
    icon: <Shield size={24} />,
    title: "Digital Ethics",
    description: "Promoting responsible and ethical use of technology and data."
  },
  {
    icon: <Zap size={24} />,
    title: "Knowledge Transfer",
    description: "Facilitating the transfer of knowledge between academia, industry, and society."
  },
  {
    icon: <PenTool size={24} />,
    title: "Creative Solutions",
    description: "Fostering creativity in approaching complex digital challenges."
  },
  {
    icon: <Code size={24} />,
    title: "Open Innovation",
    description: "Supporting open-source development and collaborative innovation."
  },
  {
    icon: <Timer size={24} />,
    title: "Sustainable Impact",
    description: "Creating lasting positive impact through sustainable digital solutions."
  }
];

const CoreObjectives: React.FC = () => {
  // Calculate positions for a more systematic honeycomb grid
  const getHoneycombPositions = (count: number) => {
    const positions = [];
    const layers = 4; // Number of layers in the honeycomb
    let currentIndex = 0;
    
    // Center hexagon
    positions.push({ x: 0, y: 0 });
    currentIndex++;

    // For each layer
    for (let layer = 1; layer <= layers && currentIndex < count; layer++) {
      // Start from top-right and go counter-clockwise
      const directions = [
        { dx: 1, dy: -1 },  // Top-right
        { dx: 0, dy: -2 },  // Top
        { dx: -1, dy: -1 }, // Top-left
        { dx: -1, dy: 1 },  // Bottom-left
        { dx: 0, dy: 2 },   // Bottom
        { dx: 1, dy: 1 }    // Bottom-right
      ];

      // For each direction in the current layer
      for (let dir = 0; dir < 6 && currentIndex < count; dir++) {
        const { dx, dy } = directions[dir];
        // Add positions along this direction
        for (let step = 0; step < layer && currentIndex < count; step++) {
          const x = layer * dx;
          const y = layer * dy;
          positions.push({ x, y });
          currentIndex++;
        }
      }
    }

    return positions;
  };

  const honeycombPositions = getHoneycombPositions(objectives.length);

  return (
    <section id="objectives" className="container-section bg-indigo-950/50 relative overflow-hidden">
      <SectionHeader
        title="Core Objectives"
        subtitle="Our strategic goals guide our research, development, and innovation activities."
      />

      {/* Background grid lines for depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-6 w-full h-full">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`v${i}`} className="border-r border-white/30"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 w-full h-full">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={`h${i}`} className="border-b border-white/30"></div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center mt-16 h-[700px] lg:h-[800px]">
        {objectives.map((objective, index) => {
          const pos = honeycombPositions[index];
          const xScale = 140; // Adjusted spacing
          const yScale = 160; // Adjusted spacing
          
          // Calculate pixel positions with adjusted scaling
          const x = pos.x * xScale;
          const y = pos.y * yScale / 2; // Divide by 2 to make the pattern more compact vertically
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 0.5, 
                  delay: index * 0.05
                }
              }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true, margin: '-100px' }}
              style={{
                position: 'absolute',
                left: 'calc(50% + ' + x + 'px)',
                top: 'calc(50% + ' + y + 'px)',
                transform: 'translate(-50%, -50%)'
              }}
              className="w-36 h-36 sm:w-44 sm:h-44 glass-card flex flex-col items-center justify-center p-3 hexagon cursor-pointer"
            >
              <div className="text-neon mb-2">
                {objective.icon}
              </div>
              <h3 className="text-sm sm:text-base font-bold mb-1 text-center font-orbitron">
                {objective.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 text-center leading-tight">
                {objective.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default CoreObjectives;
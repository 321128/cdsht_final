import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { Clock, Award, Book, Users, Globe, Target, Lightbulb, Shield, Heart, Zap } from 'lucide-react';

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

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Human-Centered",
      description: "Technology should serve humanity, not the other way around. We prioritize human needs and experiences in all our innovations."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Ethical Innovation",
      description: "We believe in responsible technology development that considers privacy, security, and societal impact at every step."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Inclusive Access",
      description: "Digital transformation should be accessible to all, regardless of background, ability, or economic status."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Sustainable Impact",
      description: "Our solutions are designed for long-term positive impact on society and the environment."
    }
  ];

  const achievements = [
    { number: "50+", label: "Research Projects", description: "Cutting-edge research initiatives" },
    { number: "25+", label: "Industry Partners", description: "Collaborative partnerships" },
    { number: "100+", label: "Students Impacted", description: "Through our programs" },
    { number: "15+", label: "Publications", description: "Peer-reviewed research papers" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="container-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 font-orbitron">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">CDSHT</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            The Centre for Digital Social & Human Transformation bridges the gap between technological advancement 
            and social uplift through innovative digital solutions.
          </p>
        </motion.div>
      </section>

      {/* Mission Statement */}
      <section className="container-section bg-indigo-950/50">
        <div className="glass-card p-8 sm:p-12 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Globe className="h-16 w-16 text-neon mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron">Our Mission</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              To create an inclusive digital society where technology empowers every individual, 
              fostering innovation that bridges digital divides and promotes sustainable human development 
              through cutting-edge research, education, and collaborative partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="container-section">
        <SectionHeader 
          title="Our Journey"
          subtitle="From inception to innovation - the milestones that define our path toward digital transformation."
        />

        <div className="relative mt-16 sm:mt-24 pl-5 sm:pl-0">
          <TimelineItem 
            year="2023"
            title="CDSHT Foundation"
            description="Established as a pioneering research center with a vision to transform society through digital innovation and inclusive technology development."
            icon={<Target className="h-5 w-5 text-white" />}
            isLeft={true}
            delay={0}
          />
          
          <TimelineItem 
            year="2024"
            title="Setidure Technologies Incubated"
            description="Launched our first incubated startup focused on educational technology and accessibility, demonstrating our commitment to practical innovation."
            icon={<Book className="h-5 w-5 text-white" />}
            isLeft={false}
            delay={1}
          />
          
          <TimelineItem 
            year="2024"
            title="Research Partnerships Established"
            description="Formed strategic partnerships with leading universities and tech companies to accelerate research in AI, machine learning, and digital accessibility."
            icon={<Users className="h-5 w-5 text-white" />}
            isLeft={true}
            delay={2}
          />
          
          <TimelineItem 
            year="2025"
            title="AI Labs Established"
            description="Built and established a state-of-the-art AI research facility with high computational resources for experiments in cutting-edge transformers and neural networks."
            icon={<Clock className="h-5 w-5 text-white" />}
            isLeft={false}
            delay={3}
          />
          
          <TimelineItem 
            year="2025"
            title="Global Impact Initiative"
            description="Launching international collaborations to scale our digital transformation solutions globally, focusing on developing nations and underserved communities."
            icon={<Globe className="h-5 w-5 text-white" />}
            isLeft={true}
            delay={4}
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="container-section bg-indigo-950/30">
        <SectionHeader 
          title="Our Values"
          subtitle="The principles that guide our work and shape our approach to digital transformation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <div className="text-neon mb-4">
                {value.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 font-orbitron">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="container-section">
        <SectionHeader 
          title="Our Impact"
          subtitle="Measurable outcomes that demonstrate our commitment to digital transformation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl sm:text-4xl font-bold text-neon mb-2 font-orbitron">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-400">{achievement.description}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container-section bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron">Join Our Mission</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be part of the digital transformation revolution. Whether you're a researcher, student, 
            or industry partner, there's a place for you in our journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Involved
            </a>
            <a href="/research" className="btn-secondary">
              Explore Research
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
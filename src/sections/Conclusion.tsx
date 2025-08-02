import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { ArrowRight, GraduationCap, Building, Users } from 'lucide-react';

const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="container-section relative overflow-hidden">
      {/* Background city silhouette */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-500/20 to-transparent">
          {/* Building silhouettes */}
          {Array.from({ length: 20 }).map((_, i) => {
            const width = Math.random() * 80 + 20;
            const height = Math.random() * 250 + 50;
            const left = (i * 5) + '%';
            
            return (
              <div 
                key={i}
                style={{ 
                  position: 'absolute',
                  bottom: 0,
                  left,
                  width: `${width}px`,
                  height: `${height}px`,
                  background: 'rgba(20, 241, 149, 0.3)',
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10">
        <SectionHeader
          title="Join Our Vision"
          subtitle="Become a catalyst for change in the digital revolution. Partner with us to build a more inclusive, accessible, and human-centered technological future."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="text-neon mb-6">
              <GraduationCap size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-orbitron">For Students</h3>
            <p className="text-gray-300 mb-6">
              Join our research programs, internships, and workshops to develop cutting-edge skills in digital technologies and innovation.
            </p>
            <a href="#" className="text-neon flex items-center font-medium group">
              <span>Apply for Fellowship</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: '-50px' }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="text-neon mb-6">
              <Building size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-orbitron">For Industry</h3>
            <p className="text-gray-300 mb-6">
              Partner with us for collaborative research, technology transfer, and innovation consulting to solve complex business challenges.
            </p>
            <a href="#" className="text-neon flex items-center font-medium group">
              <span>Explore Partnerships</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: '-50px' }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="text-neon mb-6">
              <Users size={48} />
            </div>
            <h3 className="text-xl font-bold mb-3 font-orbitron">For Society</h3>
            <p className="text-gray-300 mb-6">
              Engage with our public programs, digital literacy initiatives, and community-based technology projects for social impact.
            </p>
            <a href="#" className="text-neon flex items-center font-medium group">
              <span>Join Community Programs</span>
              <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-24 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-orbitron">
            Ready to Transform the Future?
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="btn-primary">
              Contact Us
            </a>
            <a href="#research" className="btn-secondary">
              Explore Our Research
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Conclusion;
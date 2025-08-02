import React, { useState } from 'react';
import type {} from 'react/jsx-runtime';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { 
  X, GraduationCap, Database, Brain, MessageSquare, Building, Code,
  Mail, Linkedin, Twitter, Award, BookOpen, Users, Target,
  Calendar, MapPin, Phone, ExternalLink, Star, TrendingUp, User
} from 'lucide-react';

interface TeamMemberProps {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  fullBio: string;
  expertise: string[];
  experience?: string;
  education: string[];
  achievements: string[];
  publications?: number;
  projects?: number;
  image?: string; // Made optional so you can gradually add images
  email?: string;
  linkedin?: string;
  twitter?: string;
  category: 'leadership' | 'faculty' | 'research' | 'technical';
}

const teamMembers: TeamMemberProps[] = [
  {
    id: 'ashok-harnal',
    name: "Prof. Ashok Kumar Harnal",
    role: "Chair & Director",
    department: "Computer Science & Engineering",
    bio: "Expert in Big Data, Machine Learning, and Natural Language Processing with extensive research experience in AI applications.",
    fullBio: "Prof. Ashok Kumar Harnal serves as the Chair and Director of CDSHT, bringing over three decades of distinguished experience in computer science and engineering. His research focuses on the intersection of big data analytics, machine learning, and natural language processing, with particular emphasis on developing AI solutions for social good. He has led numerous government and industry-funded projects, published extensively in top-tier journals, and mentored over 100 graduate students. His vision for CDSHT centers on creating technology that bridges digital divides and empowers underserved communities.",
    expertise: ["Big Data Analytics", "Machine Learning", "Natural Language Processing", "AI for Social Good", "Digital Transformation"],
    experience: "31 years of experience in academia and research",
    education: ["Ph.D. in Computer Science, IIT Delhi", "M.Tech in Computer Science, IIT Kanpur", "B.Tech in Computer Science, NIT Kurukshetra"],
    achievements: [
      "Founded CDSHT and established its research vision",
      "Published 150+ research papers in top-tier journals",
      "Recipient of Excellence in Teaching Award 2020",
      "Principal Investigator for 25+ funded research projects",
      "Keynote speaker at 50+ international conferences"
    ],
    publications: 150,
    projects: 25,
    image: "/images/team/ashok-harnal.png",
    email: "ashok.harnal@cdsht.org",
    linkedin: "#linkedin-ashok",
    category: 'leadership'
  },
  {
    id: 'amarnath-mitra',
    name: "Prof. Amarnath Mitra",
    role: "Convener & Research Head",
    department: "Data Science & Analytics",
    bio: "Former Quantitative Analyst turned academic leader, specializing in Big Data Analytics and Information Technology.",
    fullBio: "Prof. Amarnath Mitra brings a unique blend of industry and academic experience to CDSHT. After spending a decade as a quantitative analyst in the financial sector, he transitioned to academia where he has been instrumental in developing cutting-edge curricula in data science and analytics. His research focuses on applying big data techniques to solve complex social and economic problems. He leads CDSHT's data science initiatives and has established partnerships with major tech companies for collaborative research projects.",
    expertise: ["Big Data Analytics", "Quantitative Analysis", "Information Technology", "Financial Technology", "Statistical Modeling"],
    experience: "20 years combined industry and academic experience",
    education: ["Ph.D. in Statistics, ISI Kolkata", "M.Sc. in Mathematics, University of Delhi", "B.Sc. in Mathematics, St. Stephen's College"],
    achievements: [
      "Established CDSHT's Data Science Lab",
      "Led 15+ industry-academia collaboration projects",
      "Published 80+ research papers in data science",
      "Developed innovative curricula adopted by 20+ universities",
      "Consultant for World Bank data initiatives"
    ],
    publications: 80,
    projects: 15,
    image: "/images/team/amarnath-mitra.png",
    email: "amarnath.mitra@cdsht.org",
    linkedin: "#linkedin-amarnath",
    category: 'leadership'
  },
  {
    id: 'subir-verma',
    name: "Prof. Subir Verma",
    role: "Member & Strategic Advisor",
    department: "Strategic Management",
    bio: "Distinguished academic leader with extensive experience in consulting and research.",
    fullBio: "Prof. Subir Verma serves as CDSHT's Strategic Advisor, bringing over three decades of experience in strategic management and organizational development. As the Director of FORE School of Management, he has been instrumental in shaping business education in India. His expertise in strategic planning and organizational transformation has been crucial in establishing CDSHT's long-term vision and sustainable growth strategies. He has consulted for numerous Fortune 500 companies and government organizations on digital transformation initiatives.",
    expertise: ["Strategic Management", "Consulting", "Academic Leadership", "Digital Transformation", "Organizational Development"],
    experience: "33 years in academia and consulting",
    education: ["Ph.D. in Management, University of Delhi", "MBA, IIM Ahmedabad", "B.Com (Hons), Shri Ram College of Commerce"],
    achievements: [
      "Director of FORE School of Management",
      "Strategic advisor to 50+ organizations",
      "Published 60+ papers in management journals",
      "Recipient of Distinguished Faculty Award",
      "Board member of multiple educational institutions"
    ],
    publications: 60,
    projects: 12,
    image: "/images/team/subir-verma.png",
    email: "subir.verma@cdsht.org",
    linkedin: "#linkedin-subir",
    category: 'leadership'
  },
  {
    id: 'sriparna-basu',
    name: "Prof. Sriparna Basu",
    role: "Dean (Academics) & Research Coordinator",
    department: "Communication & Cultural Studies",
    bio: "Expert in communication and cultural studies, leading academic initiatives and research programs.",
    fullBio: "Prof. Sriparna Basu leads CDSHT's academic initiatives as Dean of Academics, bringing expertise in communication studies and cultural research to the center's interdisciplinary approach. Her research focuses on the intersection of technology, culture, and society, examining how digital transformation affects cultural practices and social interactions. She has been instrumental in developing CDSHT's educational programs and ensuring they address the human aspects of technological change. Her work bridges the gap between technical innovation and social impact.",
    expertise: ["Communication Studies", "Cultural Studies", "Academic Administration", "Digital Humanities", "Social Impact Assessment"],
    experience: "25 years in academia and research",
    education: ["Ph.D. in Communication Studies, JNU", "M.A. in Mass Communication, Jamia Millia Islamia", "B.A. in English Literature, Lady Shri Ram College"],
    achievements: [
      "Established CDSHT's academic framework",
      "Published 70+ papers in communication studies",
      "Developed interdisciplinary curriculum models",
      "Recipient of Best Teacher Award 2019",
      "Editor of Journal of Digital Culture Studies"
    ],
    publications: 70,
    projects: 18,
    image: "/images/team/sriparna-basu.png",
    email: "sriparna.basu@cdsht.org",
    linkedin: "#linkedin-sriparna",
    category: 'leadership'
  },
  {
    id: 'shilpi-jain',
    name: "Prof. Shilpi Jain",
    role: "Dean (Corporate Relations) & Industry Liaison",
    department: "Information Technology",
    bio: "Focuses on Information Technology and Big Data, bridging academia with industry partnerships.",
    fullBio: "Prof. Shilpi Jain serves as Dean of Corporate Relations, spearheading CDSHT's industry engagement and partnership initiatives. With deep expertise in information technology and big data, she has been instrumental in establishing collaborations with leading tech companies, startups, and government organizations. Her role involves translating academic research into practical industry applications and ensuring that CDSHT's work addresses real-world challenges. She leads the center's technology transfer initiatives and startup incubation programs.",
    expertise: ["Information Technology", "Big Data", "Corporate Relations", "Technology Transfer", "Startup Incubation"],
    experience: "22 years in academia and industry collaboration",
    education: ["Ph.D. in Information Technology, IIIT Delhi", "M.Tech in Computer Science, DTU", "B.Tech in Computer Science, NSIT"],
    achievements: [
      "Established partnerships with 30+ companies",
      "Led technology transfer of 10+ innovations",
      "Incubated 5 successful startups",
      "Published 85+ papers in IT journals",
      "Recipient of Industry Collaboration Excellence Award"
    ],
    publications: 85,
    projects: 20,
    image: "/images/team/shilpi-jain.png",
    email: "shilpi.jain@cdsht.org",
    linkedin: "#linkedin-shilpi",
    category: 'leadership'
  },
  {
    id: 'saurabh-mittal',
    name: "Prof. Saurabh Mittal",
    role: "Senior Research Fellow",
    department: "Information Systems",
    bio: "Information Systems expert with extensive experience in both academia and industry.",
    fullBio: "Prof. Saurabh Mittal brings a unique perspective to CDSHT with his combined experience in academia and industry. His research focuses on information systems design, technology management, and digital transformation strategies. He has worked with several Fortune 500 companies on digital transformation projects before joining academia. At CDSHT, he leads research initiatives in enterprise technology adoption and digital innovation management, helping organizations navigate the complexities of technological change.",
    expertise: ["Information Systems", "Technology Management", "Digital Transformation", "Enterprise Architecture", "Innovation Management"],
    experience: "17 years in academia and industry",
    education: ["Ph.D. in Information Systems, IIT Bombay", "M.Tech in Computer Science, IIT Delhi", "B.E. in Computer Engineering, BITS Pilani"],
    achievements: [
      "Led digital transformation for 15+ enterprises",
      "Published 55+ papers in IS journals",
      "Developed enterprise architecture frameworks",
      "Consultant for government digitization projects",
      "Speaker at 30+ industry conferences"
    ],
    publications: 45,
    projects: 8,
    image: "/images/team/saurabh-mittal.png",
    email: "saurabh.mittal@cdsht.org",
    linkedin: "#linkedin-saurabh",
    category: 'research'
  }
];

const TeamPage: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMemberProps | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Team Members' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'research', label: 'Research Scientists' },
    { id: 'technical', label: 'Technical Staff' }
  ];

  const filteredMembers = teamMembers.filter(member => 
    activeCategory === 'all' || member.category === activeCategory
  );

  const teamStats = {
    total: teamMembers.length,
    leadership: teamMembers.filter(m => m.category === 'leadership').length,
    faculty: teamMembers.filter(m => m.category === 'faculty').length,
    research: teamMembers.filter(m => m.category === 'research').length,
    totalPublications: teamMembers.reduce((sum, m) => sum + (m.publications || 0), 0),
    totalProjects: teamMembers.reduce((sum, m) => sum + (m.projects || 0), 0)
  };

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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">Team</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Meet the brilliant minds driving innovation and digital transformation at CDSHT. 
            Our diverse team combines expertise across technology, research, and social impact.
          </p>
        </motion.div>
      </section>

      {/* Team Statistics */}
      <section className="container-section bg-indigo-950/30">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <Users className="h-8 w-8 text-neon mx-auto mb-3" />
            <div className="text-2xl font-bold text-neon mb-2 font-orbitron">{teamStats.total}</div>
            <div className="text-sm text-gray-400">Team Members</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <Target className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-blue-400 mb-2 font-orbitron">{teamStats.leadership}</div>
            <div className="text-sm text-gray-400">Leadership</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <GraduationCap className="h-8 w-8 text-purple-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-purple-400 mb-2 font-orbitron">{teamStats.faculty}</div>
            <div className="text-sm text-gray-400">Faculty</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <Brain className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-green-400 mb-2 font-orbitron">{teamStats.research}</div>
            <div className="text-sm text-gray-400">Researchers</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <BookOpen className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-yellow-400 mb-2 font-orbitron">{teamStats.totalPublications}</div>
            <div className="text-sm text-gray-400">Publications</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-6 text-center"
          >
            <TrendingUp className="h-8 w-8 text-red-400 mx-auto mb-3" />
            <div className="text-2xl font-bold text-red-400 mb-2 font-orbitron">{teamStats.totalProjects}</div>
            <div className="text-sm text-gray-400">Projects</div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container-section">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-neon text-white shadow-[0_0_15px_rgba(14,180,252,0.5)]'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card overflow-hidden cursor-pointer hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
              onClick={() => setSelectedMember(member)}
            >
              <div className="h-64 overflow-hidden relative">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-slate-800/50 flex items-center justify-center">
                    <div className="text-center">
                      <User className="h-16 w-16 text-gray-400 mx-auto mb-2" />
                      <div className="text-gray-400 text-sm">Profile Photo</div>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    member.category === 'leadership' ? 'bg-blue-500/20 text-blue-400' :
                    member.category === 'faculty' ? 'bg-purple-500/20 text-purple-400' :
                    member.category === 'research' ? 'bg-green-500/20 text-green-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {member.category.charAt(0).toUpperCase() + member.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-orbitron mb-1">{member.name}</h3>
                <p className="text-neon mb-2 text-sm">{member.role}</p>
                <p className="text-gray-400 mb-3 text-sm">{member.department}</p>
                
                <div className="flex justify-between text-xs text-gray-400 mb-4">
                  {member.publications && (
                    <span className="flex items-center gap-1">
                      <BookOpen className="h-3 w-3" />
                      {member.publications}
                    </span>
                  )}
                  {member.projects && (
                    <span className="flex items-center gap-1">
                      <Target className="h-3 w-3" />
                      {member.projects}
                    </span>
                  )}
                </div>
                
                <button className="text-white border-b border-blue-400 hover:text-neon transition-colors text-sm">
                  View Full Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Member Profile Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="glass-card max-w-6xl w-full overflow-hidden relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute right-4 top-4 text-white hover:text-neon transition-colors z-10"
                onClick={() => setSelectedMember(null)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row">
                {/* Profile Image and Basic Info */}
                <div className="lg:w-1/3">
                  <div className="h-80 lg:h-full overflow-hidden relative">
                    {selectedMember.image ? (
                      <img 
                        src={selectedMember.image} 
                        alt={selectedMember.name} 
                        className="w-full h-full object-cover object-center"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-indigo-900/50 to-slate-800/50 flex items-center justify-center">
                        <div className="text-center">
                          <User className="h-20 w-20 text-gray-400 mx-auto mb-4" />
                          <div className="text-gray-400">Profile Photo</div>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold font-orbitron mb-1 text-white">{selectedMember.name}</h3>
                      <p className="text-neon mb-1">{selectedMember.role}</p>
                      <p className="text-gray-300 text-sm">{selectedMember.department}</p>
                    </div>
                  </div>
                </div>

                {/* Detailed Information */}
                <div className="p-6 lg:p-8 lg:w-2/3">
                  {/* Contact and Social */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedMember.email && (
                      <a href={`mailto:${selectedMember.email}`} className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon transition-colors">
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    )}
                    {selectedMember.linkedin && (
                      <a href={selectedMember.linkedin} className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon transition-colors">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                    {selectedMember.twitter && (
                      <a href={selectedMember.twitter} className="flex items-center gap-2 text-sm text-gray-300 hover:text-neon transition-colors">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </a>
                    )}
                  </div>

                  {/* Biography */}
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold mb-3 font-orbitron">Biography</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedMember.fullBio}</p>
                  </div>

                  {/* Experience */}
                  {selectedMember.experience && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-2 font-orbitron">Experience</h4>
                      <p className="text-gray-300">{selectedMember.experience}</p>
                    </div>
                  )}

                  {/* Education */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 font-orbitron">Education</h4>
                    <ul className="space-y-2">
                      {selectedMember.education.map((edu, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <GraduationCap className="h-4 w-4 text-neon mt-1 flex-shrink-0" />
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 font-orbitron">Areas of Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.expertise.map((item, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-blue-500/20 to-neon/20 border border-white/10 text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-3 font-orbitron">Key Achievements</h4>
                    <ul className="space-y-2">
                      {selectedMember.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <Star className="h-4 w-4 text-yellow-400 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Research Metrics */}
                  {(selectedMember.publications || selectedMember.projects) && (
                    <div className="grid grid-cols-2 gap-4">
                      {selectedMember.publications && (
                        <div className="glass-card p-4 text-center">
                          <BookOpen className="h-6 w-6 text-neon mx-auto mb-2" />
                          <div className="text-2xl font-bold text-neon mb-1 font-orbitron">{selectedMember.publications}</div>
                          <div className="text-sm text-gray-400">Publications</div>
                        </div>
                      )}
                      {selectedMember.projects && (
                        <div className="glass-card p-4 text-center">
                          <Target className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-blue-400 mb-1 font-orbitron">{selectedMember.projects}</div>
                          <div className="text-sm text-gray-400">Projects</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action section removed as only professors are part of the committee. Interested in collaborating with brilliant student minds separately. */}
    </div>
  );
};

export default TeamPage;
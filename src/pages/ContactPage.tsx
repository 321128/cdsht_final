import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { 
  Mail, Phone, MapPin, Clock, Send, User, MessageSquare, 
  Building, Calendar, CheckCircle, AlertCircle, Globe,
  Linkedin, Twitter, Github, ExternalLink, ArrowRight
} from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        category: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: [
        "Centre for Digital Social & Human Transformation",
        "FORE School of Management",
        "B-18, Qutub Institutional Area",
        "New Delhi - 110016, India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: [
        "+91 11 4124 4444",
        "+91 98765 43210 (Mobile)"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        "info@cdsht.org",
        "research@cdsht.org",
        "partnerships@cdsht.org"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 2:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    {
      name: "Research & Development",
      email: "research@cdsht.org",
      description: "For research collaborations, academic partnerships, and technical inquiries."
    },
    {
      name: "Industry Partnerships",
      email: "partnerships@cdsht.org",
      description: "For corporate collaborations, technology transfer, and business development."
    },
    {
      name: "Academic Programs",
      email: "academics@cdsht.org",
      description: "For student programs, internships, and educational initiatives."
    },
    {
      name: "Media & Communications",
      email: "media@cdsht.org",
      description: "For press inquiries, media relations, and public communications."
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, name: "LinkedIn", url: "#linkedin" },
    { icon: <Twitter className="h-5 w-5" />, name: "Twitter", url: "#twitter" },
    { icon: <Github className="h-5 w-5" />, name: "GitHub", url: "#github" },
    { icon: <Globe className="h-5 w-5" />, name: "Website", url: "#website" }
  ];

  const faqItems = [
    {
      question: "How can I collaborate with CDSHT on research projects?",
      answer: "We welcome research collaborations from academic institutions, industry partners, and government organizations. Please contact our Research & Development team at research@cdsht.org with your proposal."
    },
    {
      question: "Do you offer internship opportunities for students?",
      answer: "Yes, we offer internship programs for undergraduate and graduate students in various fields including AI, data science, and digital humanities. Applications are typically open twice a year."
    },
    {
      question: "How can my organization partner with CDSHT?",
      answer: "We offer various partnership models including research collaborations, technology licensing, and joint development projects. Contact our partnerships team to discuss opportunities."
    },
    {
      question: "Can I visit your facilities?",
      answer: "We welcome visitors by appointment. Please contact us at least 48 hours in advance to schedule a visit to our research labs and facilities."
    }
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
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-neon">Touch</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Ready to collaborate, innovate, or learn more about our work? 
            We'd love to hear from you and explore how we can work together.
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="container-section bg-indigo-950/30">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <div className="text-neon mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 font-orbitron">{info.title}</h3>
              <div className="space-y-1">
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-300 text-sm">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 font-orbitron">Send us a Message</h2>
            
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"
              >
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-green-400">Thank you! Your message has been sent successfully.</span>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"
              >
                <AlertCircle className="h-5 w-5 text-red-400" />
                <span className="text-red-400">Sorry, there was an error sending your message. Please try again.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                      placeholder="Your full name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                    placeholder="Your organization or company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-neon"
                >
                  <option value="" className="bg-indigo-950">Select inquiry type</option>
                  <option value="research" className="bg-indigo-950">Research Collaboration</option>
                  <option value="partnership" className="bg-indigo-950">Industry Partnership</option>
                  <option value="academic" className="bg-indigo-950">Academic Program</option>
                  <option value="internship" className="bg-indigo-950">Internship Opportunity</option>
                  <option value="media" className="bg-indigo-950">Media Inquiry</option>
                  <option value="general" className="bg-indigo-950">General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon"
                  placeholder="Brief subject of your message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neon resize-vertical"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-neon hover:shadow-[0_0_25px_rgba(14,180,252,0.8)] focus:outline-none focus:ring-2 focus:ring-blue-500'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Map and Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Google Maps Embed */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Find Us</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.08830466407!2d77.18242681089129!3d28.537065388308555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dfac0000001%3A0x7c48729b0de4bd97!2sFORE%20School%20of%20Management!5e0!3m2!1sen!2sin!4v1754030693405!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FORE School of Management Location"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-400">FORE School of Management</p>
                <p className="text-sm text-gray-400">B-18, Qutub Institutional Area, New Delhi - 110016</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Connect With Us</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="text-neon">
                      {social.icon}
                    </div>
                    <span className="text-sm">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Quick Actions</h3>
              <div className="space-y-3">
                <a href="/about" className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span>Learn About CDSHT</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/research" className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span>Explore Research</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/projects" className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span>View Projects</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="/team" className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <span>Meet Our Team</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="container-section bg-indigo-950/30">
        <SectionHeader
          title="Department Contacts"
          subtitle="Get in touch with specific departments for targeted assistance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departments.map((dept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:shadow-[0_0_25px_rgba(20,241,149,0.3)] transition-all duration-300"
            >
              <h3 className="text-xl font-bold mb-2 font-orbitron">{dept.name}</h3>
              <p className="text-gray-300 mb-4">{dept.description}</p>
              <a
                href={`mailto:${dept.email}`}
                className="flex items-center gap-2 text-neon hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {dept.email}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-section">
        <SectionHeader
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions about CDSHT."
        />

        <div className="space-y-6">
          {faqItems.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-3 text-neon">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-orbitron">Ready to Collaborate?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're interested in research partnerships, technology solutions, or educational programs, 
            we're here to help you achieve your goals through digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="btn-primary">
              Start a Conversation
            </a>
            <a href="/about" className="btn-secondary">
              Learn More About Us
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;
import React from 'react';
import { Globe, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950/90 border-t border-white/10 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-7 w-7 text-neon" />
              <span className="font-orbitron text-xl font-bold text-white">CDSHT</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming Society through Digital Innovation
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-neon transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-neon transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-neon transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-neon transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-300 hover:text-neon transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-neon transition-colors">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon transition-colors">
                  AI Lab
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon transition-colors">
                  Partner With Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-neon transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-neon mt-0.5" />
                <span className="text-gray-300">
                  FORE School of Management
                  <br />
                  "Adhitam Kendra" B-18, Qutub Institutional Area, New Delhi - 110016 (India)
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-neon" />
                <a href="mailto:contact@cdsht.org" className="text-gray-300 hover:text-neon transition-colors">
                  contact@cdsht.org
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-neon" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-neon transition-colors">
                  +91-11-46485500
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Centre for Digital Society & Human Transformation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
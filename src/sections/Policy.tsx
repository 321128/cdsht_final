import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FileText, Users, Building, Shield, DollarSign, Clock } from 'lucide-react';

const Policy: React.FC = () => {
  const policyItems = [
    {
      icon: <Users size={24} />,
      title: "Mentoring & Guidance",
      content: "CDSHT will encourage mentoring, guidance and hand-holding of Student Groups leading to successful development of IT based products or services."
    },
    {
      icon: <Building size={24} />,
      title: "Business Procurement",
      content: "Student Groups may procure business for development of IT products or services either directly or through FORE School of Management."
    },
    {
      icon: <FileText size={24} />,
      title: "Work Orders",
      content: "All work orders for development of IT products or services for external business entities will be in the name of FORE School so long as the students in the group have not passed out from PGDM program."
    },
    {
      icon: <Shield size={24} />,
      title: "Director Approval",
      content: "All work orders issued to FORE by the business entity will be first approved by the Director, FORE School so long as the students in the group have not passed out from PGDM program."
    },
    {
      icon: <Clock size={24} />,
      title: "Resource Utilization",
      content: "Student Groups will be permitted to utilize resources of FORE School till they are self-sustaining or up to three years whichever is earlier. During this time revenue sharing for work orders will be as outlined in this Policy document."
    },
    {
      icon: <Building size={24} />,
      title: "Infrastructure Support",
      content: "All costs such as infrastructure support, office space, software, hardware, library resources will be borne by the Institute during the start-up phase."
    }
  ];

  const additionalPolicies = [
    {
      number: "7",
      title: "Legal Entity Registration",
      content: "During the course of mentorship, students or student-groups are free to register themselves as a legal entity either under the Companies Act or under the Indian Partnership Act under intimation to the Center."
    },
    {
      number: "8",
      title: "Post-Graduation Work Orders",
      content: "Student group(s), after passing-out, for business procured directly and so long as resources of FORE School as outlined in paragraphs 5 and 6 are being utilized, can execute work orders with the business entities directly but prior intimation to the Center of such work orders is a must."
    },
    {
      number: "9",
      title: "Revenue Sharing Process",
      content: "For any service provided or product delivered to a business entity, invoice will be raised by FORE School for payment into its accounts. Revenue sharing between FORE School and the Students group will be as per FORE's consultancy rules."
    },
    {
      number: "10",
      title: "Intellectual Property",
      content: "Any product or service or process developed by the Student Groups will be jointly owned by FORE School and the Student Groups. This clause will remain in effect till the Student groups are utilizing resources as outlined in paragraphs 5 and 6."
    },
    {
      number: "11",
      title: "Termination Rights",
      content: "For any Student Group, FORE School reserves the right to terminate utilization of its resources or utilization in such limited manner as may be decided at any time."
    },
    {
      number: "12",
      title: "Innovation Incubation Center",
      content: "In case the Center Head feels that a particular Students group is performing well and may have a promising future, he will inform FORE's Innovation Incubation Center for guidance on further development of the group."
    }
  ];

  return (
    <section id="policy" className="container-section bg-indigo-950/50">
      <SectionHeader
        title="Startup Policy"
        subtitle="Policy document for Start-ups under Center for Digital, Social and Human Transformation"
      />

      {/* Key Policy Points */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {policyItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: '-50px' }}
            className="glass-card p-6"
          >
            <div className="flex items-start space-x-4">
              <div className="text-neon mt-1">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 font-orbitron">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detailed Policy Sections */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="glass-card p-8"
      >
        <h3 className="text-2xl font-bold mb-8 font-orbitron text-center">
          Detailed Policy Guidelines
        </h3>
        
        <div className="space-y-8">
          {additionalPolicies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-4 border-neon pl-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-neon flex items-center justify-center text-white font-bold text-sm">
                  {policy.number}
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-2 font-orbitron text-white">
                    {policy.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {policy.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Revenue Sharing Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 glass-card p-6 border border-neon shadow-[0_0_15px_rgba(20,241,149,0.3)]"
      >
        <div className="flex items-center space-x-4 mb-4">
          <DollarSign className="text-neon" size={32} />
          <h3 className="text-xl font-bold font-orbitron">Revenue Sharing Details</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 text-white">Invoice Process</h4>
            <p className="text-gray-300 text-sm">
              For any service provided or product delivered to a business entity, invoice will be raised by FORE School for payment into its accounts.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 text-white">Revenue Distribution</h4>
            <p className="text-gray-300 text-sm">
              Revenue sharing between FORE School and the Students group will be as per FORE's consultancy rules.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Contact Information */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-bold mb-4 font-orbitron">
          Questions about our Startup Policy?
        </h3>
        <p className="text-gray-300 mb-6">
          Contact the Center for Digital, Social and Human Transformation for clarifications and guidance.
        </p>
        <a href="#" className="btn-primary">
          Contact CDSHT
        </a>
      </motion.div>
    </section>
  );
};

export default Policy;
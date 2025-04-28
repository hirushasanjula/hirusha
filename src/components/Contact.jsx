import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    address: "Colombo, Sri Lanka",
    phoneNo: "+94 (070) 433-1506",
    email: "hsanjula33@gmail.com"
  };

  const [copiedField, setCopiedField] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={itemVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium mb-4">
              CONTACT
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Get in <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
              Let's collaborate on your next project. Feel free to reach out through any of the following channels.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {/* Email Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 p-6"
            >
              {/* Card Top Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                Email
              </h3>
              
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-1"
              >
                {contactInfo.email}
              </a>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-blue-300 transition-colors"
                >
                  Send an email
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </a>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 p-6"
            >
              {/* Card Top Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald-400" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(contactInfo.phoneNo, 'phone')}
                  className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </motion.button>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                Phone
              </h3>
              
              <a 
                href={`tel:${contactInfo.phoneNo}`}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1"
              >
                {contactInfo.phoneNo}
              </a>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <a 
                  href={`tel:${contactInfo.phoneNo}`}
                  className="flex items-center gap-2 text-sm font-medium text-emerald-400 group-hover:text-emerald-300 transition-colors"
                >
                  Call now
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </a>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
            </motion.div>

            {/* Address Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 p-6"
            >
              {/* Card Top Gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <motion.a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors">
                Location
              </h3>
              
              <p className="text-gray-400">
                {contactInfo.address}
              </p>
              
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-purple-400 group-hover:text-purple-300 transition-colors"
                >
                  View on map
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </a>
              </div>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
            </motion.div>
          </motion.div>

          {/* Contact Form Button */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.a
              href="#contact-form"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              Send a Message
            </motion.a>
            
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                I'll get back to you as soon as possible
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
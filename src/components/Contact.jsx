import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, Copy, Check } from 'lucide-react';

const Contact = () => {
  const contactInfo = {
    address: "Colombo, Sri Lanka",
    phoneNo: "+94 (070) 433-1506",
    email: "hsanjula33@gmail.com"
  };

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

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="relative py-20">
      <div className="relative container mx-auto px-4">
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
            <motion.h2
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.5 }}
             className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Touch</span>
            </motion.h2>
            <motion.p
             whileInView={{ opacity: 1, y: 0 }}
             initial={{ opacity: 0, y: -100 }}
             transition={{ duration: 0.5 }}
             className="text-stone-400 text-lg max-w-2xl mx-auto">
              Let's collaborate on your next project. Feel free to reach out through any of the following channels.
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
           whileInView={{ opacity: 1, x: 0 }}
           initial={{opacity: 0, x: -100}}
           transition={{duration: 1}}
           className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl  border border-stone-800  hover:border-stone-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-6 h-6 text-blue-400" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(contactInfo.email)}
                  className="text-stone-500 hover:text-stone-300"
                >
                  <Copy className="w-4 h-4" />
                </motion.button>
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="text-stone-400 hover:text-blue-400 transition-colors duration-300"
              >
                {contactInfo.email}
              </a>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border border-stone-800  hover:border-stone-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <Phone className="w-6 h-6 text-emerald-400" />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => copyToClipboard(contactInfo.phoneNo)}
                  className="text-stone-500 hover:text-stone-300"
                >
                  <Copy className="w-4 h-4" />
                </motion.button>
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a 
                href={`tel:${contactInfo.phoneNo}`}
                className="text-stone-400 hover:text-emerald-400 transition-colors duration-300"
              >
                {contactInfo.phoneNo}
              </a>
            </motion.div>

            {/* Address Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group p-6 rounded-2xl border border-stone-800 hover:border-stone-700 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <motion.a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="text-stone-500 hover:text-stone-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              <h3 className="text-lg font-medium mb-2">Location</h3>
              <p className="text-stone-400">
                {contactInfo.address}
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form Link */}
          <motion.div
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <motion.a
              href="#contact-form"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{opacity: 0, x: -100}}
              transition={{duration: 1}}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
              <Mail className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
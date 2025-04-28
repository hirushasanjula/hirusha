import React from 'react';
import profilePic from '../assets/profile.jpeg';
import { HERO_CONTENT } from '../constants';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/yourusername' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
    { icon: Twitter, href: 'https://twitter.com/yourusername' },
    { icon: Mail, href: 'mailto:your@email.com' },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 pt-20 pb-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-white/5 bg-grid opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left content area */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-3/5 order-2 lg:order-1"
          >
            <div className="lg:pr-12">
              {/* Greeting tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block px-4 py-1 mb-4 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm"
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-medium">
                  Hello, I'm a Developer
                </span>
              </motion.div>
              
              {/* Name with animated highlight */}
              <div className="relative mb-4">
                <motion.h1 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="text-5xl lg:text-7xl font-bold tracking-tight text-white"
                >
                  Hirusha <span className="relative inline-block">
                    Sanjula
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1 }}
                      className="absolute bottom-0 left-0 h-3 bg-purple-500/30 rounded-md z-0"
                    ></motion.span>
                  </span>
                </motion.h1>
              </div>
              
              {/* Role with gradient text */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-3xl font-semibold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
              >
                Full Stack Web Developer
              </motion.h2>
              
              {/* Description with animated reveal */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed"
              >
                {HERO_CONTENT}
              </motion.p>
              
              {/* CTA buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex flex-wrap gap-4 mb-10"
              >
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  download
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
                >
                  Download Resume
                  <ArrowDown size={16} />
                </a>
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-gray-800 border border-gray-700 text-gray-200 font-medium rounded-lg hover:bg-gray-700 transition-all duration-300"
                >
                  Contact Me
                </a>
              </motion.div>
              
              {/* Social links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex gap-4"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-purple-500 transition-all duration-300"
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right image area */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-2/5 order-1 lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 lg:w-96 lg:h-96 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 blur-2xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-32 h-32 rounded-full bg-blue-500/10 backdrop-blur-md"></div>
              <div className="absolute -z-10 -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-500/10 backdrop-blur-md"></div>
              
              {/* Profile image with glass effect container */}
              <div className="relative bg-gray-800/30 backdrop-blur-md p-2 rounded-3xl border border-gray-700/50 shadow-xl">
                <img 
                  src={profilePic} 
                  alt="Hirusha Sanjula" 
                  className="w-full h-auto rounded-2xl" 
                />
                
                {/* Floating stats card */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    className="absolute -bottom-6 -right-6 bg-gray-800/80 backdrop-blur-md p-4 rounded-xl border border-gray-700/50 shadow-lg"
                >
                    <div className="flex gap-4">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">5+</div>
                        <div className="text-xs text-gray-400">Years</div>
                    </div>
                    <div className="h-12 w-px bg-gray-700"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">50+</div>
                        <div className="text-xs text-gray-400">Projects</div>
                    </div>
                    <div className="h-12 w-px bg-gray-700"></div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-white">10+</div>
                        <div className="text-xs text-gray-400">Clients</div>
                    </div>
                    </div>
                </motion.div> */}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <motion.div 
              initial={{ y: 0 }}
              animate={{ y: 10 }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 0.5
              }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
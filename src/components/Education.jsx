import React, { useState } from 'react';
import { GraduationCap, Briefcase, ChevronRight, Calendar, Building, Award } from 'lucide-react';
import { education, experience } from '../constants';
import { motion } from 'framer-motion';

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <section id="education-experience" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-4">
            QUALIFICATIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Education & Experience
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            My academic journey and professional experience that have shaped my skills and expertise.
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
            }`}
          >
            <GraduationCap className="w-5 h-5" />
            Education
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
            }`}
          >
            <Briefcase className="w-5 h-5" />
            Experience
          </motion.button>
        </div>

        {/* Timeline Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-400 opacity-30"></div>

          {activeTab === 'education' ? (
            <div className="space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 z-10">
                    <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                      <GraduationCap className="w-2 h-2 text-blue-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 p-6">
                      {/* Card Top Gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium self-start">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                        
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {item.degree}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building className="w-4 h-4" />
                          <span>{item.school}</span>
                        </div>
                        
                        <p className="text-gray-400 mt-3">
                          {item.description}
                        </p>
                        
                        {item.achievements && (
                          <div className="mt-4 pt-4 border-t border-gray-700/50">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
                              <Award className="w-4 h-4" />
                              <span className="text-sm font-medium">Achievements</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 text-sm">
                              {item.achievements.map((achievement, idx) => (
                                <li key={idx}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg shadow-blue-500/20 z-10">
                    <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                      <Briefcase className="w-2 h-2 text-blue-400" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 p-6">
                      {/* Card Top Gradient */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-600"></div>
                      
                      <div className="flex flex-col gap-2">
                        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium self-start">
                          <Calendar className="w-3 h-3" />
                          {item.year}
                        </span>
                        
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {item.role}
                        </h3>
                        
                        <div className="flex items-center gap-2 text-gray-400">
                          <Building className="w-4 h-4" />
                          <span>{item.company}</span>
                        </div>
                        
                        <p className="text-gray-400 mt-3">
                          {item.description}
                        </p>
                        
                        {item.responsibilities && (
                          <div className="mt-4 pt-4 border-t border-gray-700/50">
                            <div className="flex items-center gap-2 text-blue-400 mb-2">
                              <ChevronRight className="w-4 h-4" />
                              <span className="text-sm font-medium">Key Responsibilities</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-400 text-sm">
                              {item.responsibilities.map((responsibility, idx) => (
                                <li key={idx}>{responsibility}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                      
                      {/* Hover gradient effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
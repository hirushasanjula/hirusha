import React, { useState } from 'react';
import { GraduationCap, Briefcase, ChevronRight } from 'lucide-react';
import { education, experience } from '../constants';
import { motion } from 'framer-motion';


  const tabVariants = {
    inactive: { scale: 1 },
    active: { 
      scale: 1.05,
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState('education');


  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
       className="text-4xl font-bold text-center mb-12">Education & Experience</motion.h2>
      
      
      <div className="flex justify-center gap-4 mb-12">
        <motion.button
          variants={tabVariants}
          initial="inactive"
          animate={activeTab === 'education' ? 'active' : 'inactive'}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('education')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
            activeTab === 'education'
              ? 'bg-gradient-to-br from-blue-900 to-cyan-400 text-white shadow-lg'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <GraduationCap className="w-5 h-5" />
          Education
        </motion.button>
        <motion.button
            variants={tabVariants}
            initial="inactive"
            animate={activeTab === 'experience' ? 'active' : 'inactive'}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          onClick={() => setActiveTab('experience')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer ${
            activeTab === 'experience'
              ? 'bg-gradient-to-br from-blue-900 to-cyan-400 text-white shadow-lg'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <Briefcase className="w-5 h-5" />
          Experience
        </motion.button>
      </div>

      
      <motion.div
        variants={tabVariants}
        initial="inactive"
        animate={activeTab === 'experience' ? 'active' : 'inactive'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      className="grid grid-cols-1 gap-6 md:gap-8">
        {activeTab === 'education' ? (
          education.map((item, index) => (
            <div
              key={index}
              className="group  p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-stone-400">{item.school}</p>
                </div>
                <span className="mt-2 md:mt-0 text-gray-500 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  {item.year}
                </span>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))
        ) : (
          experience.map((item, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-blue-500 group-hover:text-blue-600 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-stone-400">{item.company}</p>
                </div>
                <span className="mt-2 md:mt-0 text-stone-400 flex items-center gap-2">
                  <ChevronRight className="w-4 h-4" />
                  {item.year}
                </span>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default EducationExperience;
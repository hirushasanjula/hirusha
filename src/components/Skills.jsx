import React, { useState } from 'react';
import { Code, Users, Brain, MessageCircle, Clock, Clipboard, Lightbulb, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      title: 'Web Development',
      icon: Code,
      description: 'Building responsive and modern web applications using React, JavaScript, and Tailwind CSS',
      color: 'bg-blue-500'
    },
    {
      title: 'Team Collaboration',
      icon: Users,
      description: 'Working effectively in cross-functional teams with strong interpersonal skills',
      color: 'bg-green-500'
    },
    {
      title: 'Leadership',
      icon: Brain,
      description: 'Leading projects and mentoring team members to achieve collective goals',
      color: 'bg-purple-500'
    },
    {
      title: 'Communication',
      icon: MessageCircle,
      description: 'Clear and effective communication with stakeholders at all levels',
      color: 'bg-yellow-500'
    },
    {
      title: 'Time Management',
      icon: Clock,
      description: 'Efficiently managing multiple projects and meeting deadlines',
      color: 'bg-red-500'
    },
    {
      title: 'Planning',
      icon: Clipboard,
      description: 'Strategic planning and organization of project workflows',
      color: 'bg-indigo-500'
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      description: 'Analytical thinking and creative solution development',
      color: 'bg-orange-500'
    },
    {
      title: 'Friendly',
      icon: Heart,
      description: 'Creating a positive and welcoming environment while maintaining professional relationships',
      color: 'bg-pink-500'
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: -100 }}
         transition={{ duration: 0.5 }}
         className="text-4xl font-bold text-center mb-12">My Skills</motion.h2>
        <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}}
         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 cursor-pointer">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${skill.color} rounded-t-lg`} />
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-full ${skill.color} bg-opacity-10`}>
                  <skill.icon className={`w-6 h-6 ${skill.color.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-xl text-white font-semibold ml-4">{skill.title}</h3>
              </div>
              <p className={`text-gray-600 transition-opacity duration-300 ${
                hoveredSkill === index ? 'opacity-100' : 'opacity-80'
              }`}>
                {skill.description}
              </p>
              <div className={`absolute bottom-0 left-0 w-full h-1 ${skill.color} rounded-b-lg transition-all duration-300 transform scale-x-0 group-hover:scale-x-100`} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
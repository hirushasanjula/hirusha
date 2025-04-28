import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Brain, MessageCircle, Clock, Clipboard, Lightbulb, Heart } from 'lucide-react';

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      title: 'Web Development',
      icon: Code,
      description: 'Building responsive and modern web applications using React, JavaScript, and Tailwind CSS',
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      shadowColor: 'shadow-blue-500/20',
      borderColor: 'border-blue-500/20',
      stats: [
        { label: 'Frontend', value: 95 },
        { label: 'Backend', value: 85 },
        { label: 'UI/UX', value: 80 }
      ]
    },
    {
      title: 'Team Collaboration',
      icon: Users,
      description: 'Working effectively in cross-functional teams with strong interpersonal skills',
      color: 'bg-green-500',
      textColor: 'text-green-500',
      shadowColor: 'shadow-green-500/20',
      borderColor: 'border-green-500/20',
      stats: [
        { label: 'Communication', value: 90 },
        { label: 'Adaptability', value: 85 },
        { label: 'Conflict Resolution', value: 80 }
      ]
    },
    {
      title: 'Leadership',
      icon: Brain,
      description: 'Leading projects and mentoring team members to achieve collective goals',
      color: 'bg-purple-500',
      textColor: 'text-purple-500',
      shadowColor: 'shadow-purple-500/20',
      borderColor: 'border-purple-500/20',
      stats: [
        { label: 'Strategy', value: 85 },
        { label: 'Mentoring', value: 90 },
        { label: 'Decision Making', value: 88 }
      ]
    },
    {
      title: 'Communication',
      icon: MessageCircle,
      description: 'Clear and effective communication with stakeholders at all levels',
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      shadowColor: 'shadow-yellow-500/20',
      borderColor: 'border-yellow-500/20',
      stats: [
        { label: 'Verbal', value: 92 },
        { label: 'Written', value: 88 },
        { label: 'Presentation', value: 85 }
      ]
    },
    {
      title: 'Time Management',
      icon: Clock,
      description: 'Efficiently managing multiple projects and meeting deadlines',
      color: 'bg-red-500',
      textColor: 'text-red-500',
      shadowColor: 'shadow-red-500/20',
      borderColor: 'border-red-500/20',
      stats: [
        { label: 'Planning', value: 90 },
        { label: 'Prioritization', value: 85 },
        { label: 'Focus', value: 80 }
      ]
    },
    {
      title: 'Planning',
      icon: Clipboard,
      description: 'Strategic planning and organization of project workflows',
      color: 'bg-indigo-500',
      textColor: 'text-indigo-500',
      shadowColor: 'shadow-indigo-500/20',
      borderColor: 'border-indigo-500/20',
      stats: [
        { label: 'Goal Setting', value: 88 },
        { label: 'Resource Allocation', value: 82 },
        { label: 'Risk Management', value: 85 }
      ]
    },
    {
      title: 'Problem Solving',
      icon: Lightbulb,
      description: 'Analytical thinking and creative solution development',
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      shadowColor: 'shadow-orange-500/20',
      borderColor: 'border-orange-500/20',
      stats: [
        { label: 'Analytical', value: 92 },
        { label: 'Creative', value: 88 },
        { label: 'Critical Thinking', value: 90 }
      ]
    },
    {
      title: 'Interpersonal',
      icon: Heart,
      description: 'Creating a positive and welcoming environment while maintaining professional relationships',
      color: 'bg-pink-500',
      textColor: 'text-pink-500',
      shadowColor: 'shadow-pink-500/20',
      borderColor: 'border-pink-500/20',
      stats: [
        { label: 'Empathy', value: 95 },
        { label: 'Relationship Building', value: 90 },
        { label: 'Conflict Resolution', value: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800"></div>
      <div className="absolute inset-0 bg-grid-white/5 bg-grid opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium mb-4">
            EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            A comprehensive set of skills I've developed throughout my career,
            enabling me to deliver high-quality solutions for diverse projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              onClick={() => setActiveSkill(activeSkill === index ? null : index)}
              className={`relative overflow-hidden rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 p-6 cursor-pointer transition-all duration-300 ${
                activeSkill === index ? `ring-2 ring-offset-2 ring-offset-gray-900 ${skill.borderColor.replace('border', 'ring')}` : ''
              }`}
            >
              {/* Top colored line */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${skill.color}`}></div>
              
              {/* Skill header */}
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg ${skill.color} bg-opacity-10`}>
                  <skill.icon className={`w-6 h-6 ${skill.textColor}`} />
                </div>
                <h3 className="text-xl text-white font-semibold ml-4">{skill.title}</h3>
              </div>
              
              {/* Skill description */}
              <p className="text-gray-400 mb-4">
                {skill.description}
              </p>
              
              {/* Skill stats - Only visible when active */}
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: activeSkill === index ? 'auto' : 0,
                  opacity: activeSkill === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-gray-700/50 mt-2">
                  {skill.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="mb-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">{stat.label}</span>
                        <span className={skill.textColor}>{stat.value}%</span>
                      </div>
                      <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${stat.value}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Expand/collapse indicator */}
              <div className="absolute bottom-4 right-4">
                <motion.div
                  animate={{ rotate: activeSkill === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-6 rounded-full flex items-center justify-center ${skill.color} bg-opacity-20`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-4 w-4 ${skill.textColor}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Background glow effect when hovered */}
              <div className={`absolute -bottom-8 -right-8 w-32 h-32 ${skill.color} bg-opacity-20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ChevronRight } from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiVuedotjs, 
  SiAngular, 
  SiNodedotjs, 
  SiPhp, 
  SiPython, 
  SiLaravel, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiFirebase, 
  SiFlutter,
  SiJavascript 
} from 'react-icons/si';
import { FaRocket, FaMobile } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Define technology categories with their respective react-icons
  const techCategories = {
    'all': { name: 'All', icon: FaRocket, color: 'text-purple-400' },
    'react': { name: 'React', icon: SiReact, color: 'text-cyan-400' },
    'nextjs': { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    'vue': { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400' },
    'angular': { name: 'Angular', icon: SiAngular, color: 'text-red-500' },
    'nodejs': { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    'php': { name: 'PHP', icon: SiPhp, color: 'text-purple-500' },
    'python': { name: 'Python', icon: SiPython, color: 'text-yellow-400' },
    'laravel': { name: 'Laravel', icon: SiLaravel, color: 'text-red-400' },
    'express': { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
    'mongodb': { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    'mysql': { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
    'firebase': { name: 'Firebase', icon: SiFirebase, color: 'text-orange-400' },
    'flutter': { name: 'Flutter', icon: SiFlutter, color: 'text-blue-400' },
    'reactnative': { name: 'React Native', icon: FaMobile, color: 'text-cyan-400' }
  };
  
  // Function to determine project category based on technologies used
  const getProjectCategory = (technologies) => {
    const techLower = technologies.map(tech => tech.toLowerCase());
    
    // Priority order for categorization
    if (techLower.some(tech => tech.includes('next') || tech.includes('nextjs'))) return 'nextjs';
    if (techLower.some(tech => tech.includes('react'))) return 'react';
    if (techLower.some(tech => tech.includes('vue'))) return 'vue';
    if (techLower.some(tech => tech.includes('angular'))) return 'angular';
    if (techLower.some(tech => tech.includes('flutter'))) return 'flutter';
    if (techLower.some(tech => tech.includes('react native'))) return 'reactnative';
    if (techLower.some(tech => tech.includes('laravel'))) return 'laravel';
    if (techLower.some(tech => tech.includes('php'))) return 'php';
    if (techLower.some(tech => tech.includes('python'))) return 'python';
    if (techLower.some(tech => tech.includes('node') || tech.includes('express'))) return 'nodejs';
    if (techLower.some(tech => tech.includes('mongo'))) return 'mongodb';
    if (techLower.some(tech => tech.includes('mysql'))) return 'mysql';
    if (techLower.some(tech => tech.includes('firebase'))) return 'firebase';
    
    return 'all';
  };
  
  // Get unique categories from projects
  const getAvailableCategories = () => {
    const projectCategories = PROJECTS.map(project => getProjectCategory(project.technologies));
    const uniqueCategories = ['all', ...new Set(projectCategories.filter(cat => cat !== 'all'))];
    
    // Only return categories that exist in techCategories
    return uniqueCategories.filter(cat => techCategories[cat]);
  };
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => getProjectCategory(project.technologies) === activeFilter);

  // Get the primary technology for display
  const getPrimaryTech = (technologies) => {
    const category = getProjectCategory(technologies);
    return techCategories[category] || techCategories['all'];
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore my recent works categorized by technology stack. 
            Each project showcases different skills and frameworks.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {getAvailableCategories().map((category, index) => {
            const categoryInfo = techCategories[category];
            const IconComponent = categoryInfo.icon;
            return (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ y: -2 }}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20 scale-105'
                    : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700 hover:border-gray-600'
                }`}
              >
                <IconComponent 
                  className={`w-4 h-4 ${activeFilter === category ? 'text-white' : categoryInfo.color}`} 
                />
                <span>{categoryInfo.name}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const primaryTech = getPrimaryTech(project.technologies);
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:border-cyan-500/30"
              >
                {/* Card Top Gradient */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-600"></div>
                
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Primary Technology Badge */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full bg-gray-900/80 backdrop-blur-sm text-xs font-medium text-cyan-400 border border-gray-700/50">
                    <primaryTech.icon className={`w-3 h-3 ${primaryTech.color}`} />
                    <span>{primaryTech.name}</span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-900/70 rounded-md text-xs font-medium text-gray-300 border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-900/70 rounded-md text-xs font-medium text-gray-400 border border-gray-700/50">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300"
                    >
                      View Live
                      <motion.div
                        animate={{ x: hoveredProject === index ? 5 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </a>
                  </div>
                </div>
                
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"></div>
              </motion.div>
            );
          })}
        </div>
        
        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No projects found</h3>
            <p className="text-gray-500">Try selecting a different technology category.</p>
          </motion.div>
        )}
        
        {/* See More Projects Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="https://github.com/hirushasanjula"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
          >
            See More on GitHub
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
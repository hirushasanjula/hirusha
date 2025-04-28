import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, ChevronRight, Code, Layers, Database } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Get unique categories from projects for filter
  const getCategories = () => {
    const categories = PROJECTS.map(project => project.category || 'other');
    return ['all', ...new Set(categories)];
  };
  
  // Filter projects based on selected category
  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === activeFilter);

  const getProjectIcon = (category) => {
    switch (category) {
      case 'frontend':
        return <Code className="w-5 h-5" />;
      case 'fullstack':
        return <Layers className="w-5 h-5" />;
      case 'backend':
        return <Database className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
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
            Explore my recent works that showcase my skills and expertise in web development.
            Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {getCategories().map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              whileHover={{ y: -2 }}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/20'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5"
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
                
                {/* Project category badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 px-3 py-1 rounded-full bg-gray-900/70 backdrop-blur-sm text-xs font-medium text-cyan-400 border border-gray-700/50">
                  {getProjectIcon(project.category)}
                  <span>{project.category || 'Project'}</span>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 line-clamp-3 text-sm">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-gray-900/70 rounded text-xs font-medium text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
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
          ))}
        </div>
        
        {/* See More Projects Button */}
        <div className="flex justify-center mt-12">
          <motion.a
            href="https://github.com/hirushasanjula"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
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
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            key={index} 
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/4">
              <img 
                src={project.image} 
                width={250} 
                height={250} 
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 cursor-pointer"
            >
              <h3 className="mb-2 font-semibold text-2xl">
                {project.title}
              </h3>
              <p className="mb-4 text-stone-400">
                {project.description}
              </p>
              
              {/* Technologies */}
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="mr-2 px-2 py-1 bg-stone-900 rounded text-sm font-medium text-stone-300"
                >
                  {tech}
                </span>
              ))}

              {/* Project Link (Fixed) */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition"
              >
                🔗 View Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

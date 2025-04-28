import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaHtml5, FaJava, FaNodeJs, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const technologies = [
  { 
    icon: <RiReactjsLine />, 
    key: "react",
    name: "React",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/50"
  },
  { 
    icon: <TbBrandNextjs />, 
    key: "nextjs",
    name: "Next.js",
    color: "text-white",
    bgColor: "bg-white/10",
    borderColor: "border-white/50"
  },
  { 
    icon: <FaHtml5 />, 
    key: "html5",
    name: "HTML5",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/50"
  },
  { 
    icon: <RiTailwindCssFill />, 
    key: "tailwind",
    name: "Tailwind CSS",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/50"
  },
  { 
    icon: <IoLogoJavascript />, 
    key: "javascript",
    name: "JavaScript",
    color: "text-yellow-300",
    bgColor: "bg-yellow-300/10",
    borderColor: "border-yellow-300/50"
  },
  { 
    icon: <FaNodeJs />, 
    key: "nodejs",
    name: "Node.js",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/50"
  },
  { 
    icon: <FaJava />, 
    key: "java",
    name: "Java",
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    borderColor: "border-yellow-400/50"
  },
  { 
    icon: <GrMysql />, 
    key: "mysql",
    name: "MySQL",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
    borderColor: "border-blue-400/50"
  },
  { 
    icon: <FaPhp />, 
    key: "php",
    name: "PHP",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    borderColor: "border-purple-400/50"
  },
];

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section id="technologies" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-gray-800/50 to-gray-900 opacity-50"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4">
            TECH STACK
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Technologies I Work With
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            These are the technologies I use to bring ideas to life.
            My toolkit is constantly evolving to include the latest and most effective solutions.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.key}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: `0 0 25px 0 rgba(0, 0, 0, 0.3)`,
                y: -5
              }}
              className={`group relative flex flex-col items-center justify-center p-6 rounded-xl ${tech.bgColor} border ${tech.borderColor} backdrop-blur-sm transition-all duration-300`}
            >
              <div className="relative">
                <div className={`absolute -inset-4 rounded-full ${tech.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                <div className={`text-5xl mb-3 ${tech.color} transition-transform duration-300 transform group-hover:scale-110`}>
                  {tech.icon}
                </div>
              </div>
              <h3 className={`text-lg font-medium ${tech.color}`}>{tech.name}</h3>
              <div className={`absolute -z-10 bottom-0 left-0 right-0 h-1/2 ${tech.bgColor} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Experience indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16 text-center"
        >
          <div className="px-6 py-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <h4 className="text-xl font-semibold mb-1 text-white">2+ Years</h4>
            <p className="text-gray-400">Professional Experience</p>
          </div>
          
          <div className="px-6 py-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <h4 className="text-xl font-semibold mb-1 text-white">6+</h4>
            <p className="text-gray-400">Projects Completed</p>
          </div>
          
          <div className="px-6 py-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
            <h4 className="text-xl font-semibold mb-1 text-white">24/7</h4>
            <p className="text-gray-400">Learning & Growing</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
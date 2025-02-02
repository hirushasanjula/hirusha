import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaJava, FaNodeJs, FaPhp } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

const technologies = [
  { icon: <RiReactjsLine className="text-cyan-400" />, key: "react" },
  { icon: <TbBrandNextjs className="text-white" />, key: "nextjs" },
  { icon: <FaHtml5 className="text-orange-500" />, key: "html5" },
  { icon: <RiTailwindCssFill className="text-cyan-400" />, key: "tailwind" },
  { icon: <IoLogoJavascript className="text-yellow-300" />, key: "javascript" },
  { icon: <FaNodeJs className="text-green-400" />, key: "nodejs" },
  { icon: <FaJava className="text-yellow-400" />, key: "java" },
  { icon: <GrMysql className="text-blue-400" />, key: "mysql" },
  { icon: <FaPhp className="text-purple-400" />, key: "php" },
];

const iconVariants = (duration) => ({
  initial: { y: -10 }, // Fixed "intial" to "initial"
  animate: {
    y: [-10, 10], // Now it moves up and down
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="pb-24">
      {/* Animated Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold"
      >
        Technologies
      </motion.h2>

      {/* Animated Icons */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.key}
            className="text-7xl"
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;

import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { 
      icon: <FaLinkedin />, 
      href: "https://www.linkedin.com/in/hirusha-sanjula-8aba1b349",
      label: "LinkedIn"
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/hirushasanjula",
      label: "GitHub"
    }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "py-3 bg-gray-900/80 backdrop-blur-lg shadow-lg" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="/" 
            aria-label="Home"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10"
          >
            <div className="flex items-center px-4">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-70"></div>
                <div className="relative bg-gray-900 rounded-lg px-3 py-2 flex items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                    HS
                  </span>
                </div>
              </div>
            </div>
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-gray-300 hover:text-white font-medium transition-colors duration-200"
              >
                {link.name}
                <motion.span 
                  layoutId="navIndicator"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  whileHover={{ scaleX: 1 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Social Links and Get in Touch Button */}
          <div className="hidden md:flex items-center px-18">
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.5 + (0.1 * i),
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 5,
                  color: link.label === "LinkedIn" ? "#0A66C2" : "#6E5494"
                }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-400 hover:text-white mx-3 transition-colors duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              Get in touch
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 top-2' : 'top-0'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current top-2 transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute h-0.5 w-full bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 top-2' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: menuOpen ? "auto" : 0, opacity: menuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col space-y-4 py-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-white py-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex space-x-6 py-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-2xl text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-medium hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              Get in touch
            </a>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
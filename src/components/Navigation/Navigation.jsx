import * as React from 'react';
import { motion } from 'framer-motion';
import "./Navigation.css"
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      className="navigation"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <motion.h2
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Elegance
          </motion.h2>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <motion.a 
            href="#hero" 
            onClick={() => scrollToSection('hero')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
          </motion.a>
          <motion.a 
            href="#products" 
            onClick={() => scrollToSection('products')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Shop
          </motion.a>
          <motion.a 
            href="#about" 
            onClick={() => scrollToSection('about')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.a>
          <motion.a 
            href="#contact" 
            onClick={() => scrollToSection('contact')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.a>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navigation;

import * as React from 'react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-container">
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-placeholder">
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </motion.div>
          
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="about-title">Our Story</h2>
            <h3 className="about-subtitle">Crafting Excellence Since Day One</h3>
            
            <div className="about-text">
              <p>
                At Elegance, we believe that true luxury lies in the perfect harmony of 
                form and function. Founded with a vision to curate only the finest products, 
                we've built our reputation on uncompromising quality and timeless design.
              </p>
              
              <p>
                Every item in our collection is carefully selected for its exceptional 
                craftsmanship, innovative features, and ability to enhance your lifestyle. 
                We partner with renowned designers and artisans who share our commitment 
                to excellence.
              </p>
              
              <p>
                Our mission extends beyond retail – we're dedicated to creating experiences 
                that inspire and delight, building lasting relationships with customers who 
                appreciate the finer things in life.
              </p>
            </div>
            
            <div className="about-stats">
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>10K+</h4>
                <p>Happy Customers</p>
              </motion.div>
              
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>500+</h4>
                <p>Premium Products</p>
              </motion.div>
              
              <motion.div 
                className="stat"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h4>50+</h4>
                <p>Global Partners</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

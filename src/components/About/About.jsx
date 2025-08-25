import * as React from "react";
import { motion } from "framer-motion";
import "./About.css";

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
            <h3 className="about-subtitle">
              Crafting Excellence Since Day One
            </h3>

            <div className="about-text">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quisquam maxime laborum commodi accusamus odio asperiores, error
                adipisci laboriosam debitis est repellat natus perferendis
                facere. Incidunt beatae ipsum ipsa saepe! Nulla!
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                cupiditate corporis provident fugiat dignissimos? Pariatur quae
                in sed vel sunt ea illum eius. Nesciunt fugiat quisquam unde
                quae aliquid ipsum!
              </p>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
                maxime quidem omnis voluptatibus saepe distinctio, aut error
                earum atque odit, rem corrupti animi eaque incidunt quas dolores
                quaerat ipsum explicabo.
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

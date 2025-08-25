import * as React from "react";
import { motion } from "framer-motion";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-logo">Elegance</h3>
            <p className="footer-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
              necessitatibus adipisci earum sapiente magni voluptate dignissimos
              hic, illo nisi labore. Repellendus cum earum dicta totam!
              Temporibus, officia nostrum. Dolor, doloribus.
            </p>
            <div className="social-links">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Linkedin
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Github
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Whatsapp
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#hero" onClick={() => scrollToSection("hero")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#products" onClick={() => scrollToSection("products")}>
                  Products
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => scrollToSection("about")}>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4>Newsletter</h4>
            <p>
              Subscribe to get updates on new products and exclusive offers.
            </p>
            <div className="newsletter">
              <input type="email" placeholder="Enter your email" />
              <motion.button
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; 2025 Elegance. All rights reserved.</p>
          <div className="footer-legal">
            
            <motion.button
              onClick={scrollToTop}
              className="back-to-top"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ↑ Back to Top
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;

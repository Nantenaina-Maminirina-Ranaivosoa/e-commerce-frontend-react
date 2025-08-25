import * as React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a question or want to learn more? We'd love to hear from you. 
            Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you're looking for product recommendations, need assistance 
              with your order, or simply want to share your thoughts, we're here to help.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <h4>Email</h4>
                <p>rnantenainamaminirina@gmail.com</p>
              </div>
              
              <div className="contact-item">
                <h4>Phone</h4>
                <p>+ (261) 32 84 866 52</p>
              </div>
              
              <div className="contact-item">
                <h4>Address</h4>
                <p>Antananarivo, Madagascar<br />Design Nante 2025</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="form-group">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            
            <div className="form-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            
            <div className="form-group">
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                whileFocus={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
            </div>
            
            <motion.button
              type="submit"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

import * as React from 'react';
import { motion } from 'framer-motion';

function ProductCard({ product }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const getImagePlaceholder = (imageType) => {
    const gradients = {
      headphones: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      watch: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      handbag: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      camera: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      laptop: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      coffee: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    };
    return gradients[imageType] || gradients.headphones;
  };

  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div 
        className="product-image"
        style={{ background: getImagePlaceholder(product.image) }}
      >
        <motion.div
          className="product-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Details
          </motion.button>
        </motion.div>
      </div>
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">{product.price}</span>
          <motion.button
            className="add-to-cart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;

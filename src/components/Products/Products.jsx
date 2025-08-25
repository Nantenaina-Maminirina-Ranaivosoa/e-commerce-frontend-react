import * as React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: "$299",
      image: "headphones",
      description: "High-quality wireless headphones with noise cancellation"
    },
    {
      id: 2,
      name: "Luxury Smart Watch",
      price: "$599",
      image: "watch",
      description: "Elegant smart watch with premium materials"
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: "$899",
      image: "handbag",
      description: "Crafted leather handbag with timeless design"
    },
    {
      id: 4,
      name: "Professional Camera",
      price: "$1299",
      image: "camera",
      description: "High-end camera for professional photography"
    },
    {
      id: 5,
      name: "Minimalist Laptop",
      price: "$1899",
      image: "laptop",
      description: "Sleek and powerful laptop for modern professionals"
    },
    {
      id: 6,
      name: "Artisan Coffee Set",
      price: "$199",
      image: "coffee",
      description: "Premium coffee brewing set for connoisseurs"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="products" className="section products">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Discover our carefully curated selection of premium products that combine 
            functionality with exceptional design.
          </p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Products;

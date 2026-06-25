/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PRODUCTS } from '../lib/data';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const ProductGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const displayedProducts = filteredProducts.slice(0, 6);

  return (
    <section id="collection" className="py-24 lg:py-48 bg-surface-container-lowest overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4">
              Seasonal Edit
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif italic">
              Seasonal <br /> <span className="not-italic">Demands</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex gap-8 lg:gap-12"
          >
            {['All', 'Seating', 'Lighting', 'Decor'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-label text-[10px] uppercase tracking-widest transition-colors pb-2 border-b-2 hover:text-primary ${
                  activeCategory === cat 
                  ? 'text-primary border-primary' 
                  : 'text-on-surface-variant border-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 min-h-[600px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <ProductCard product={product} idx={idx} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {displayedProducts.length === 0 && (
          <div className="py-24 text-center">
             <p className="font-serif italic text-2xl text-on-surface-variant">No objects found in this category.</p>
          </div>
        )}

        <div className="mt-24 text-center">
          <Link to="/collection" className="btn-secondary inline-block">
            View All Creations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;

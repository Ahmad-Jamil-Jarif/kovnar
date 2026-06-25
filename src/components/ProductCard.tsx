/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Product } from '../lib/data';
import { motion } from 'motion/react';
import { useCart } from '../lib/CartContext';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  idx: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, idx }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: idx * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/product/${product.id}`} className="block aspect-[4/5] overflow-hidden bg-surface-container-low mb-6 relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
      </Link>
      
      <div className="flex justify-between items-start relative">
        <Link to={`/product/${product.id}`}>
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant block mb-1">
            {product.material}
          </span>
          <h3 className="text-lg font-serif italic text-primary group-hover:text-secondary transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans font-medium text-sm">
          ${product.price.toLocaleString()}
        </p>
        
        <button
          onClick={() => addToCart(product)}
          className="absolute -top-12 right-4 w-10 h-10 bg-surface text-primary rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl z-20"
        >
          <Plus size={18} />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

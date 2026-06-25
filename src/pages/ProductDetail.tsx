/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Minus, ShoppingBag, ArrowRight, Share2, Heart } from 'lucide-react';
import { PRODUCTS } from '../lib/data';
import { useCart } from '../lib/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = PRODUCTS.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-serif mb-6">Object Not Found</h1>
        <button onClick={() => navigate('/collection')} className="btn-secondary">
          Return to Archive
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-3 font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all group mb-12"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">
          {/* Main Image Container (Pinterest detail Style) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="aspect-[3/4] bg-surface-container-low overflow-hidden rounded-sm shadow-2xl relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale-[0.1]"
              />
              <button className="absolute top-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg hover:bg-white transition-colors">
                <Heart size={20} className="text-primary" />
              </button>
            </div>
            
            {/* Gallery / Extra Views would go here */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-surface-container-high overflow-hidden rounded-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                  <img src={product.image} className="w-full h-full object-cover grayscale" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Details Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col"
          >
            <div className="border-b border-surface-container-highest pb-8 mb-8">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4">
                {product.category} — {product.material}
              </span>
              <h1 className="text-5xl lg:text-6xl font-serif italic mb-6 leading-tight">
                {product.name}
              </h1>
              <p className="text-3xl font-serif text-secondary font-light">
                ${product.price.toLocaleString()}
              </p>
            </div>

            <div className="space-y-8 font-body text-on-surface-variant leading-relaxed mb-12">
              <p>{product.description}</p>
              <p>
                Each piece in our curated archive is hand-selected for its unique dialogue with space and light. Minimalist in form but deep in heritage, current lead times for bespoke finishing are 4-6 weeks.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-4 mb-16">
              <button 
                onClick={() => addToCart(product)}
                className="w-full btn-primary flex items-center justify-center gap-4 group"
              >
                <ShoppingBag size={18} />
                <span>Add to Curated Bag</span>
              </button>
              
              <Link 
                to="/checkout" 
                state={{ directCheckout: product }}
                className="w-full btn-secondary flex items-center justify-center gap-4 group"
              >
                <span>Immediate Checkout</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Product Meta */}
            <div className="pt-12 border-t border-surface-container-highest flex justify-between items-center">
              <div className="flex gap-12">
                <div>
                  <h4 className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant mb-2">Heritage</h4>
                  <p className="text-xs font-serif italic">Makers Hand</p>
                </div>
                <div>
                  <h4 className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant mb-2">Weight</h4>
                  <p className="text-xs font-serif italic">Substantial</p>
                </div>
              </div>
              <button className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-label text-[8px] uppercase tracking-widest">
                <Share2 size={14} />
                Share
              </button>
            </div>
          </motion.div>
        </div>

        {/* Similar Objects Placeholder */}
        <section className="mt-48 pt-24 border-t border-surface-container-highest">
          <h2 className="text-3xl font-serif italic mb-12">Similar Objects</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => p.id !== id).slice(0, 4).map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-surface-container-low mb-4 overflow-hidden">
                  <img src={p.image} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all" />
                </div>
                <h4 className="font-serif italic text-sm">{p.name}</h4>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-48 bg-surface relative">
      <div id="atelier" className="absolute -top-20" />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-8">
              The Philosophy
            </span>
            <h2 className="text-4xl lg:text-6xl font-serif leading-tight mb-12">
              We believe in objects that <span className="italic">breathe</span> and spaces that <span className="italic">listen</span>.
            </h2>
            <div className="space-y-8 font-body text-on-surface-variant leading-relaxed max-w-lg">
              <p>
                Kovnar was born from a desire to return to the tactile. In an age of mass-production, we seek out the singular—the hand-thrown clay, the raw-edged linen, the wood that carries the story of its grain.
              </p>
              <p>
                Our edit is small, intentional, and strictly sourced from independent artisans who view their work as an extension of their spirit. We don't just sell decor; we provide the artifacts of a slow, conscious life.
              </p>
            </div>
            
            <div className="mt-16 pt-10 border-t border-surface-container-highest inline-block">
              <div className="flex items-center gap-6">
                <div className="w-16 h-[1px] bg-primary" />
                <span className="font-serif italic text-xl">Elena Vance, Foundress</span>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="aspect-[4/5] bg-surface-container-low overflow-hidden"
            >
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjX9a_0t1NE5Q4d10ziNULVxZZjK6Kl19xeTqGEjLod78ttwF59Dd7ByjCd-FMTDYbigJt34PTZQmWNpYwSaIYyNxLTfE9gfjfWcnKemJeDTQcZQJu24k_C0N6SsrgjVeCA1aPNIWNdYtZVlBVsjXBnnmZ_MTGI5cB9hKn71dto1784jeOBc04tAaHAGYvzp8Swz77zDalEL2Wn2J88iAgsXZLqny_qvfd3TcNSuVfNAY6ipdlfG_5nWbQqvrQ3r69pdK8A3nVULxi" 
                alt="Process image" 
                className="w-full h-full object-cover grayscale-[0.4]"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="absolute -bottom-12 -left-12 w-64 aspect-square bg-surface-container-lowest p-8 shadow-2xl hidden lg:block"
            >
              <p className="font-serif italic text-3xl leading-none mb-4">01.</p>
              <h4 className="font-label text-[10px] uppercase tracking-widest mb-4">Tactile Truth</h4>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Every material used in our bespoke creations is verified for ethical origin and environmental harmony.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

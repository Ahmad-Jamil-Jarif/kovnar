/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-surface-container-low">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8hdnnsSgjgoBI2DvFcds8kbo55qTIJ7ewEC7ayDgKr4rrM5QuIArfOM5BUKfZmv_OJYR1lAS7X_a6kbU30sHJeAz7aae73Nutyn6HWPnaW-4XG7DphF34L0YGT83HnkvEg1EnDhcz1guvRmdKxyLGbQT2mM2Jyqx7iqI8ILinoWnvyCx-7FjP9sVYbG2XfpH7NKfkVAFDV6Ui7SSyRAoet1A-EatyXbK-6_ag_gwdiw0jLwp8sKRtwusMWnr_-d8wX3B4AXE8t9bR" 
          alt="Hero Interior" 
          className="w-full h-full object-cover scale-110 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-primary/10" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-white/80 block mb-6 drop-shadow-sm">
            Curating the Everyday
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white italic font-light tracking-tight leading-[0.9] mb-12 drop-shadow-lg">
            Objects <br /> 
            <span className="not-italic font-medium">Of Essence</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link to="/collection" className="px-8 py-4 font-label text-sm uppercase tracking-[0.15em] transition-all active:scale-[0.98] bg-white text-neutral-950 border border-white hover:bg-transparent hover:text-white">
              Explore Collection
            </Link>
            <Link to="/bespoke" className="text-white font-label text-[10px] uppercase tracking-widest flex items-center gap-3 group">
              <span className="border-b border-white/50 group-hover:border-white transition-colors">Our Bespoke Story</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center gap-4"
      >
        <span className="font-label text-[8px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={16} strokeWidth={1} />
      </motion.div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </section>
  );
};

export default Hero;

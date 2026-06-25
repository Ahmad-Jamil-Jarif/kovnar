/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-white py-16 lg:py-20 border-t border-neutral-900">
      {/* Organic Bonsai Background Image with 15% opacity as an elegant watermark */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img 
          src="/src/assets/images/footer_bonsai_background_1782237134083.jpg" 
          alt="Atelier Kovnar organic background" 
          className="w-full h-full object-cover opacity-15 scale-100"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl lg:text-5xl font-serif italic mb-8 text-white">Kovnar</h2>
            <p className="font-body text-white/60 mb-6 max-w-sm">
              Receive notes on materiality, artisan features, and first access to seasonal object drops.
            </p>
            <form className="flex max-w-md">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-transparent border-0 border-b border-white/20 font-label text-[10px] uppercase tracking-widest text-white placeholder:text-white/40 focus:ring-0 focus:border-white transition-all py-3 outline-none"
              />
              <button 
                type="submit" 
                className="px-6 py-3 border-b border-white/20 text-[10px] font-label uppercase tracking-widest text-white hover:text-white/70 transition-colors"
              >
                Join
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="font-label text-[10px] uppercase tracking-[0.3em] text-white mb-6">Navigation</h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li><Link to="/collection" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Collection</Link></li>
              <li><Link to="/bespoke" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Bespoke</Link></li>
              <li><Link to="/materials" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Journal</Link></li>
              <li><Link to="/#philosophy" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Philosophy</Link></li>
              <li><Link to="/#atelier" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Atelier</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-label text-[10px] uppercase tracking-[0.3em] text-white mb-6">Service</h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              <li><Link to="/contact" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Contact</Link></li>
              <li><Link to="/shipping" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Shipping</Link></li>
              <li><Link to="/returns" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Returns</Link></li>
              <li><Link to="/materials" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Materials</Link></li>
              <li><Link to="/sustainability" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">Sustainability</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-label text-[10px] uppercase tracking-[0.3em] text-white mb-6">Social</h4>
            <ul className="space-y-3 font-body text-sm text-white/70">
              {['Instagram', 'Pinterest', 'Vimeo'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-secondary transition-colors underline-offset-4 hover:underline">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-label text-[9px] uppercase tracking-widest text-white/40">
            © 2025 Kovnar. All rights reserved.
          </p>
          <h1 className="text-lg font-serif tracking-[0.2em] uppercase font-medium text-white">
            <span className="italic font-light text-white/80">Kovnar</span>
          </h1>
          <p className="font-label text-[9px] uppercase tracking-widest text-white/40">
            Design by Wolf Soft.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

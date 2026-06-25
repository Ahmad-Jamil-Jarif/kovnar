/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Paperclip, ChevronDown, Check } from 'lucide-react';

const Bespoke: React.FC = () => {
  const [budget, setBudget] = useState(15000);
  const [finish, setFinish] = useState('Obsidian');

  const finishes = [
    { name: 'Obsidian', color: '#1a1a1a' },
    { name: 'Smoked Oak', color: '#4b3621' },
    { name: 'Brass', color: '#99814b' },
    { name: 'Ivory', color: '#f5f5f5' },
    { name: 'Bone', color: '#e3e3e3' },
  ];

  return (
    <div className="min-h-screen bg-surface flex flex-col lg:flex-row">
      {/* Left Column: Visual & Brand */}
      <section className="lg:w-[45%] h-[60vh] lg:h-screen sticky top-0 bg-neutral-950 overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8hdnnsSgjgoBI2DvFcds8kbo55qTIJ7ewEC7ayDgKr4rrM5QuIArfOM5BUKfZmv_OJYR1lAS7X_a6kbU30sHJeAz7aae73Nutyn6HWPnaW-4XG7DphF34L0YGT83HnkvEg1EnDhcz1guvRmdKxyLGbQT2mM2Jyqx7iqI8ILinoWnvyCx-7FjP9sVYbG2XfpH7NKfkVAFDV6Ui7SSyRAoet1A-EatyXbK-6_ag_gwdiw0jLwp8sKRtwusMWnr_-d8wX3B4AXE8t9bR" 
            alt="Bespoke Craftsmanship" 
            className="w-full h-full object-cover grayscale-[0.2] opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>

        <div className="absolute bottom-16 left-16 right-16 z-10 text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl lg:text-7xl font-serif mb-6"
          >
            Bespoke Creations
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-body text-white/70 max-w-md leading-relaxed"
          >
            Every piece is a dialogue between material and intention, tailored to the unique geometry of your space.
          </motion.p>
        </div>
      </section>

      {/* Right Column: Commission Form */}
      <section className="flex-1 lg:pl-24 lg:pr-32 py-32 px-6 lg:min-h-screen">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <header className="mb-20">
            <motion.h1 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl lg:text-8xl font-serif mb-8"
            >
              Commission <br /> <span className="italic">a Piece</span>
            </motion.h1>
            <p className="font-body text-on-surface-variant leading-relaxed max-w-md">
              Begin the journey of crafting a singular object for your environment. Share your vision, dimensions, and preferred materials below.
            </p>
          </header>

          <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
            {/* Identity Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block transition-colors group-focus-within:text-primary">Full Name</label>
                <input type="text" placeholder="e.g. Elena Vance" className="input-underline" />
              </div>
              <div className="group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block transition-colors group-focus-within:text-primary">Email Address</label>
                <input type="email" placeholder="jane@example.com" className="input-underline" />
              </div>
              <div className="group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block transition-colors group-focus-within:text-primary">Phone Number</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="input-underline" />
              </div>
            </div>

            {/* Logistics Group */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="group relative">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block transition-colors group-focus-within:text-primary">Category</label>
                <select className="input-underline appearance-none">
                  <option>Select an object type</option>
                  <option>Seating</option>
                  <option>Tables</option>
                  <option>Lighting</option>
                  <option>Case Goods</option>
                  <option>Decor</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-2 text-on-surface-variant pointer-events-none" size={16} />
              </div>
              <div className="group relative">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block transition-colors group-focus-within:text-primary">Primary Material</label>
                <select className="input-underline appearance-none">
                  <option>Select material family</option>
                  <option>Reclaimed Oak</option>
                  <option>Carrara Marble</option>
                  <option>Cast Bronze</option>
                  <option>Organic Linen</option>
                </select>
                <ChevronDown className="absolute right-0 bottom-2 text-on-surface-variant pointer-events-none" size={16} />
              </div>
            </div>

            {/* Dimensions */}
            <div className="group">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block transition-colors group-focus-within:text-primary">Approximate Dimensions (L x W x H)</label>
              <input type="text" placeholder="e.g. 72'' x 36'' x 30''" className="input-underline" />
            </div>

            {/* Finishes & Reference */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div>
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">Desired Finish Tone</label>
                <div className="flex gap-4">
                  {finishes.map((f) => (
                    <button
                      key={f.name}
                      type="button"
                      onClick={() => setFinish(f.name)}
                      title={f.name}
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${finish === f.name ? 'border-primary scale-110' : 'border-surface-container-highest'}`}
                      style={{ backgroundColor: f.color }}
                    >
                      {finish === f.name && (
                        <Check size={14} className={f.name === 'Ivory' || f.name === 'Bone' ? 'text-primary' : 'text-white'} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
              <div className="group">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Reference Image</label>
                <div className="relative border-b border-surface-container-highest pb-2 flex items-center justify-between group-hover:border-primary transition-colors cursor-pointer">
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant/50">Attach Inspiration File</span>
                  <Paperclip size={16} className="text-on-surface-variant" />
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Budget */}
            <div>
              <div className="flex justify-between items-end mb-8">
                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant block">Estimated Budget Range</label>
                <span className="font-serif text-xl text-primary font-medium">${(budget/1000).toFixed(0)}k - $25k+</span>
              </div>
              <input 
                type="range" 
                min="5000" 
                max="25000" 
                step="1000" 
                value={budget} 
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-[1px] bg-surface-container-highest appearance-none cursor-pointer accent-primary" 
              />
              <div className="flex justify-between mt-4">
                <span className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant opacity-50">$5k</span>
                <span className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant opacity-50">$25k+</span>
              </div>
            </div>

            {/* Project Details */}
            <div className="group">
              <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-6 block transition-colors group-focus-within:text-primary">Project Details</label>
              <textarea 
                rows={4}
                placeholder="Describe the intended environment, functional requirements, and any specific details..." 
                className="w-full bg-surface-container-low/30 border border-surface-container-highest p-6 font-body text-sm text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:italic outline-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-8">
              <button type="submit" className="w-full btn-primary py-6 text-xs tracking-[0.3em]">
                Submit Request
              </button>
              <p className="mt-8 font-label text-[9px] uppercase tracking-widest text-on-surface-variant text-center opacity-60 leading-relaxed">
                Our atelier will review your request and respond within 3-5 business days to schedule an initial consultation.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Bespoke;

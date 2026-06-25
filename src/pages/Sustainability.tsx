/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Recycle, Wind, Sun, Heart } from 'lucide-react';

const Sustainability: React.FC = () => {
  const pillars = [
    { title: 'Zero-Legacy', icon: Recycle, desc: 'We design for disassembly. At the end of its life, every component of an Atelier Kovnar object can be reclaimed or bio-degraded.' },
    { title: 'Carbon Neutral Studio', icon: Wind, desc: 'Our atelier operates on 100% renewable energy and carbon-neutral logistics rituals.' },
    { title: 'Living Materials', icon: Leaf, desc: 'We prioritize raw, untreated materials that age with the environment rather than poisoning it.' },
    { title: 'Ethical Heritage', icon: Heart, desc: 'Every artisan in our circle is paid above fair-trade standards, preserving the human element of craftsmanship.' }
  ];

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Ethos</span>
          <h1 className="text-6xl lg:text-8xl font-serif italic mb-8">Conscious <span className="not-italic">Creation</span></h1>
          <p className="text-xl font-body text-on-surface-variant leading-relaxed max-w-2xl">
            Atelier Kovnar exists in the balance between the needs of the home and the health of the planet. We believe sustainability is not a feature, but the foundation of high-craft.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="aspect-square bg-surface-container-low overflow-hidden relative"
            >
                <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHoidWN3CPN_swoSo5Cns4AhWOxh-z6in8a9IzUZWfUSygP1wShNc56lamgaz61CRrt0OAO2pCU-IXl3LIoOeLQ8RX2AL5jt6JV8GoXsN12rV2HUI-zvJYUgtIgp_jqLMEMvABA3eeKZOdUQEsiZe8S05fBGdGgZihRhaZH0k1E6GPL3yXtVr0rnLEfIHD6s1cu8b-0xuLeqbZjbDAYvSyLd8vDoJWnCHlpa_bWZb8keYCaPGlcxCuWE72oVYuPVUudKH1c8fLeTvw" 
                    alt="Nature and Design" 
                    className="w-full h-full object-cover grayscale-[0.4]"
                />
                <div className="absolute inset-0 border-[40px] border-surface" />
            </motion.div>

            <div className="space-y-16">
                {pillars.map((pillar, idx) => (
                    <motion.div 
                        key={pillar.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex gap-8 group"
                    >
                        <div className="w-12 h-12 bg-primary text-on-primary flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-500">
                            <pillar.icon size={20} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-serif italic mb-4">{pillar.title}</h3>
                            <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                                {pillar.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

        <div className="p-16 bg-surface-container text-on-surface text-center relative overflow-hidden border border-surface-container-high">
            <div className="relative z-10 max-w-2xl mx-auto">
                <Sun size={48} className="mx-auto mb-8 text-secondary" strokeWidth={1} />
                <h2 className="text-4xl lg:text-5xl font-serif italic mb-8 text-on-surface">The Eternal Loop</h2>
                <p className="font-body text-on-surface-variant leading-relaxed mb-12">
                    Our goal is to reach total circularity by 2030. Every design we ship today includes a digital passport that facilitates future restoration or upcycling.
                </p>
                <div className="h-[1px] w-32 bg-on-surface/20 mx-auto" />
            </div>
            {/* Abstract Background Detail */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, var(--color-on-surface) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>
      </div>
    </div>
  );
};

export default Sustainability;

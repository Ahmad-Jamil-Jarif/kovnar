/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Layers, TreeDeciduous, Square, Cpu, Hexagon } from 'lucide-react';

const Materials: React.FC = () => {
  const materials = [
    {
        name: 'Eco-PVC Board',
        icon: Layers,
        details: 'High-density, recycled PVC composite engineered for structural resilience and moisture resistance. 100% recyclable.',
        visual: 'https://www.ecoplasticwood.com/wp-content/uploads/2016/04/2-28.jpg'
    },
    {
        name: 'Reclaimed Oak',
        icon: TreeDeciduous,
        details: 'Century-old timber salvaged from heritage architectural sites. Characterized by deep grain patterns and temporal warmth.',
        visual: 'https://www.pinetimberproducts.com.au/wp-content/uploads/2023/11/reclaimed-timber-1.jpg'
    },
    {
        name: 'Cast Bronze',
        icon: Hexagon,
        details: 'Artisanal bronze alloy used for bespoke angles and joints. Developed to achieve a singular living patina over time.',
        visual: 'https://www.wieland-diversified.com/wp-content/uploads/2023/03/VM1ariMCl3tihCrsKymQ0YY0OERnGa181680119636.jpg'
    },
    {
        name: 'Precision Metals',
        icon: Square,
        details: 'Aerospace-grade aluminum and steel, meticulously brushed and treated with organic protective oils.',
        visual: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Materiality</span>
          <h1 className="text-6xl lg:text-8xl font-serif italic mb-8">The <span className="not-italic">Elements</span></h1>
          <p className="text-xl font-body text-on-surface-variant leading-relaxed max-w-2xl">
            Our atelier is a laboratory of essence. We select materials not just for their performance, but for their dialogue with time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {materials.map((mat, idx) => (
            <motion.div 
                key={mat.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
            >
                {/* 3D-like Card Container */}
                <div className="perspective-1000">
                    <div className="relative aspect-[16/9] overflow-hidden mb-8 transition-transform duration-700 ease-out preserve-3d group-hover:rotate-y-12 group-hover:rotate-x-6 group-hover:scale-105 shadow-2xl">
                        <img src={mat.visual} alt={mat.name} className="w-full h-full object-cover grayscale-[0.2] transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-primary/0 transition-colors duration-500" />
                        
                        {/* Overlay Icon */}
                        <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                             <mat.icon size={20} className="transition-transform duration-500 group-hover:rotate-[360deg]" />
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-3xl font-serif italic">{mat.name}</h3>
                    <div className="w-12 h-[1px] bg-surface-container-highest mt-4" />
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8 max-w-md">
                    {mat.details}
                </p>
                <div className="flex gap-4">
                    <span className="px-4 py-1 border border-surface-container-highest font-label text-[8px] uppercase tracking-widest text-on-surface-variant">Traceable Origin</span>
                    <span className="px-4 py-1 border border-surface-container-highest font-label text-[8px] uppercase tracking-widest text-on-surface-variant">Low Impact</span>
                </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials;

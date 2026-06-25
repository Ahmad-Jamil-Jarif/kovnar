/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, Hammer, ShieldCheck, Home, Search } from 'lucide-react';

const Shipping: React.FC = () => {
  const trackingSteps = [
    { title: 'Material Curation', icon: Search, desc: 'Sourcing ethical raw components from our artisan network.', status: 'completed' },
    { title: 'In the Atelier', icon: Hammer, desc: 'Hand-crafting your object with meticulous attention to detail.', status: 'completed' },
    { title: 'Quality Curation', icon: ShieldCheck, desc: 'Rigorous structural and aesthetic verification ritual.', status: 'current' },
    { title: 'Global Transit', icon: Truck, desc: 'Secure, temperature-controlled white-glove transport.', status: 'upcoming' },
    { title: 'Arrival', icon: Home, desc: 'Placement in its designated home sanctuary.', status: 'upcoming' }
  ];

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-24">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Logistics</span>
          <h1 className="text-6xl lg:text-8xl font-serif italic mb-8">Order <span className="not-italic">Journey</span></h1>
          <p className="text-xl font-body text-on-surface-variant leading-relaxed max-w-2xl">
            Transparency is fundamental to our craft. Track the evolution of your object from raw essence to your doorstep.
          </p>
        </div>

        {/* Tracking Interface */}
        <div className="bg-surface-container-low p-12 lg:p-24 border border-surface-container-highest">
          <div className="mb-20">
            <h2 className="text-2xl font-serif italic mb-4">Active Curation: AC-8829-X</h2>
            <div className="h-[2px] w-full bg-surface-container-highest relative">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '50%' }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full bg-primary"
                />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative">
            {trackingSteps.map((step, idx) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                  step.status === 'completed' ? 'bg-primary text-on-primary' : 
                  step.status === 'current' ? 'bg-white border-2 border-primary text-primary shadow-lg scale-110' : 
                  'bg-surface-container-highest text-on-surface-variant/30'
                }`}>
                  <step.icon size={24} />
                </div>
                <h3 className={`font-serif italic text-lg mb-2 ${step.status === 'upcoming' ? 'text-on-surface-variant/40' : 'text-primary'}`}>
                  {step.title}
                </h3>
                <p className="text-[10px] uppercase tracking-widest leading-relaxed text-on-surface-variant/60 font-label">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="p-12 border border-surface-container-highest">
                <h4 className="font-serif italic text-2xl mb-6">White-Glove Arrival</h4>
                <p className="font-body text-sm text-on-surface-variant leading-loose">
                    Our team doesn't just deliver; we install. Your object is placed with precision and all packaging is removed for recycling.
                </p>
            </div>
            <div className="p-12 border border-surface-container-highest">
                <h4 className="font-serif italic text-2xl mb-6">Global Resilience</h4>
                <p className="font-body text-sm text-on-surface-variant leading-loose">
                    We ship to over 60 countries using carbon-neutral logistics and custom-reinforced architectural crating.
                </p>
            </div>
            <div className="p-12 border border-surface-container-highest">
                <h4 className="font-serif italic text-2xl mb-6">Protection Ritual</h4>
                <p className="font-body text-sm text-on-surface-variant leading-loose">
                    Every shipment is fully insured. Should any temporal disturbance occur during transit, we initiate an immediate replacement commission.
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

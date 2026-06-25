/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Camera, Paperclip, ChevronRight, Info } from 'lucide-react';

const Returns: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    if (isSubmitted) {
        return (
            <div className="h-screen flex flex-col items-center justify-center text-center p-6 bg-surface">
                <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-w-md">
                    <h1 className="text-5xl font-serif italic mb-8">Case Received</h1>
                    <p className="font-body text-on-surface-variant leading-relaxed mb-12">
                        Your return request for singular object has been logged in our spirit ledger. A curation specialist will contact you within 24 hours to coordinate the collection.
                    </p>
                    <button onClick={() => setIsSubmitted(false)} className="btn-primary">Return to Archive</button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 bg-surface min-h-screen">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Left Side: Context */}
                    <div className="lg:col-span-5 sticky top-40 h-fit">
                        <span className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4">Assistance</span>
                        <h1 className="text-6xl lg:text-7xl font-serif italic mb-8">Request <br /> <span className="not-italic">A Return</span></h1>
                        <p className="font-body text-on-surface-variant leading-relaxed mb-12 text-lg">
                            While we strive for perfection in every commission, we understand that sometimes the dialogue between object and space isn't as intended.
                        </p>
                        <div className="p-8 bg-surface-container-low border border-surface-container-highest flex gap-6 items-start">
                             <Info size={24} className="text-secondary shrink-0" strokeWidth={1.5} />
                             <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant leading-relaxed">
                                Bespoke items are subject to a restoration fee if returned without damage. Damaged objects are handled with priority at no cost.
                             </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="lg:col-span-7">
                        <form className="space-y-16" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="group">
                                    <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Full Name</label>
                                    <input type="text" required placeholder="ELENA VANCE" className="input-underline" />
                                </div>
                                <div className="group">
                                    <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Contact Details</label>
                                    <input type="text" required placeholder="EMAIL OR PHONE" className="input-underline" />
                                </div>
                            </div>

                            <div className="group">
                                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Location for Collection</label>
                                <input type="text" required placeholder="FULL ADDRESS" className="input-underline" />
                            </div>

                            <div className="group">
                                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-4 block">Incident Report</label>
                                <textarea 
                                    rows={5} 
                                    required 
                                    placeholder="Describe the nature of the issue or inconsistency..." 
                                    className="w-full bg-surface-container-low/30 border border-surface-container-highest p-6 font-body text-sm text-on-surface focus:border-primary focus:ring-0 transition-all placeholder:italic outline-none"
                                />
                            </div>

                            <div className="group">
                                <label className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-6 block">Evidence of Damage</label>
                                <div className="border-2 border-dashed border-surface-container-highest p-12 transition-colors hover:border-primary/50 text-center relative group">
                                    <Camera size={32} className="text-on-surface-variant mx-auto mb-4 group-hover:text-primary transition-colors" strokeWidth={1} />
                                    <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Click or drag photographs of the damaged area</p>
                                    <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" multiple />
                                </div>
                            </div>

                            <button type="submit" className="w-full btn-primary h-20 flex items-center justify-center gap-4 text-xs tracking-[0.3em] group">
                                Request Return & Restoration
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;

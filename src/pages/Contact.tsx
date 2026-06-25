/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Youtube, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4"
          >
            Connectivity
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl lg:text-8xl font-serif italic mb-8"
          >
            Get in <span className="not-italic">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-body text-on-surface-variant leading-relaxed max-w-2xl"
          >
            Whether you are seeking a singular object from our archive or wish to discuss a bespoke sanctuary, our atelier is ready to listen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          {/* Offline: Showroom & Studio */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-surface-container-low p-12">
            <div className="space-y-12">
              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-on-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl italic mb-4">The Atelier Showroom</h3>
                  <address className="not-italic font-body text-on-surface-variant leading-loose">
                    123 Archive Way, Suite 400<br />
                    Tribecca, NYC 10013<br />
                    United States
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-8">
                <div className="w-12 h-12 bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-on-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl italic mb-4">Visiting Hours</h3>
                  <ul className="font-body text-on-surface-variant space-y-2">
                    <li className="flex justify-between w-64 border-b border-surface-container-highest pb-2">
                      <span>Mon — Fri</span>
                      <span className="font-medium">10:00 — 18:00</span>
                    </li>
                    <li className="flex justify-between w-64 border-b border-surface-container-highest pb-2">
                      <span>Saturday</span>
                      <span className="font-medium">11:00 — 16:00</span>
                    </li>
                    <li className="flex justify-between w-64">
                      <span>Sunday</span>
                      <span className="italic">By Appointment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px] bg-surface-container-highest relative overflow-hidden group">
               <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCx7pcJQrdHH3IR9gJKwfZSDN91yB0rck0DA44Ws7H2ovEfwzEdmKzvhUJxeXY6E4ezOFvPHlqJxI7x2orRIVjLSVaViopfGQqRsG6kVKGkiUKJ6VELXDdozQqAV1N1YzjuzgMLIa04v92yFO2mPZ6V_POFXkB5Q5INLDy1lXA7rT3bZm7E8gNdIxlinrXJRU1_Sq5JYiMfB6R-O6_oh5eQNEnP31VXfWTOyEuzsoLr7O7_m6HFxTJbwgy1qYZZ-11Aj1ZPbIKUQBqZ" 
                alt="Our Showroom" 
                className="w-full h-full object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
               />
               <div className="absolute inset-0 bg-primary/10" />
               <div className="absolute bottom-8 left-8 bg-surface-container-lowest/90 backdrop-blur-md px-6 py-4 flex items-center gap-4 border border-surface-container-high text-on-surface">
                  <Globe size={16} />
                  <span className="font-label text-[10px] uppercase tracking-widest">Global Shipping Available</span>
               </div>
            </div>
          </div>

          {/* Online: Digital Contacts */}
          <div className="lg:col-span-5 space-y-16">
            <div>
              <h2 className="text-3xl font-serif italic mb-12">Digital Presence</h2>
              <div className="space-y-8">
                <a href="mailto:studio@atelierkovnar.com" className="flex items-center gap-6 group">
                  <div className="w-10 h-10 border border-surface-container-highest flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail size={16} className="text-on-surface-variant group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Email</p>
                    <p className="font-body text-sm">studio@atelierkovnar.com</p>
                  </div>
                </a>

                <a href="tel:+15551234567" className="flex items-center gap-6 group">
                  <div className="w-10 h-10 border border-surface-container-highest flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone size={16} className="text-on-surface-variant group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-1">Telephone</p>
                    <p className="font-body text-sm">+1 (555) 123-4567</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif italic mb-12">Social Channels</h2>
              <div className="flex gap-8">
                {[
                  { icon: Instagram, name: 'Instagram', handle: '@atelier.kovnar' },
                  { icon: Youtube, name: 'Journal', handle: 'Atelier Kovnar' }
                ].map((social) => (
                  <a key={social.name} href="#" className="flex-1 p-6 border border-surface-container-highest hover:bg-surface-container-low transition-colors group">
                    <social.icon size={20} className="mb-6 text-on-surface-variant group-hover:text-primary transition-colors" />
                    <p className="font-label text-[8px] uppercase tracking-widest text-on-surface-variant mb-1">{social.name}</p>
                    <p className="font-body text-xs font-semibold">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Support / FAQ */}
          <div className="lg:col-span-7 bg-surface-container text-on-surface border border-surface-container-high p-12 lg:p-16 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-serif italic mb-8 text-on-surface">Service Inquiry</h2>
              <p className="font-body text-on-surface-variant mb-12 max-w-sm leading-relaxed">
                For questions regarding current orders, shipping timelines, or material specifications, please include your reference number.
              </p>
              
              <div className="space-y-4">
                <button className="w-full py-6 border border-on-surface/20 hover:bg-on-surface hover:text-surface transition-all text-left px-8 flex justify-between items-center group">
                  <span className="font-label text-xs uppercase tracking-widest">Order Tracking</span>
                  <div className="w-8 h-[1px] bg-on-surface group-hover:bg-surface transition-colors" />
                </button>
                <button className="w-full py-6 border border-on-surface/20 hover:bg-on-surface hover:text-surface transition-all text-left px-8 flex justify-between items-center group">
                  <span className="font-label text-xs uppercase tracking-widest">Return Policy</span>
                  <div className="w-8 h-[1px] bg-on-surface group-hover:bg-surface transition-colors" />
                </button>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-on-surface/10">
              <p className="font-label text-[9px] uppercase tracking-widest text-on-surface-variant/60 mb-2">Our Response Ritual</p>
              <p className="font-serif italic text-sm">We respond to all inquiries within 24 meditative hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

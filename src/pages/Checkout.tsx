/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CreditCard, Truck, ShieldCheck, ArrowLeft, ChevronRight, Package } from 'lucide-react';
import { useCart } from '../lib/CartContext';
import { Product } from '../lib/data';

const Checkout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, totalPrice } = useCart();
  const [step, setStep] = useState(1);
  
  // Handle direct checkout from detailed page
  const directItem = location.state?.directCheckout as Product | undefined;
  
  const checkoutItems = directItem ? [directItem] : cart;
  const finalTotal = directItem ? directItem.price : totalPrice;

  if (checkoutItems.length === 0) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-6 bg-surface">
        <Package className="text-surface-container-highest mb-8" size={64} strokeWidth={1} />
        <h1 className="text-4xl font-serif mb-6 italic">Bag is Empty</h1>
        <p className="text-on-surface-variant max-w-sm mb-12">Your curated selection is currently empty. Visit the archive to discover singular objects.</p>
        <Link to="/collection" className="btn-primary">
          Explore Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Billing Form */}
          <div className="lg:col-span-7">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center gap-3 font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-12 hover:text-primary transition-colors"
            >
              <ArrowLeft size={14} /> Back
            </button>

            <div className="flex gap-4 mb-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-4 flex-1">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center text-[10px] font-bold ${step >= i ? 'bg-primary text-on-primary border-primary' : 'border-surface-container-highest text-surface-container-highest'}`}>
                    {i}
                  </div>
                  {i < 3 && <div className={`flex-1 h-[1px] ${step > i ? 'bg-primary' : 'bg-surface-container-highest'}`} />}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-serif italic mb-8">Shipping Sanctuary</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div className="col-span-1">
                    <label className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">First Name</label>
                    <input type="text" className="input-underline" placeholder="ELENA" />
                  </div>
                  <div className="col-span-1">
                    <label className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Last Name</label>
                    <input type="text" className="input-underline" placeholder="VANCE" />
                  </div>
                  <div className="col-span-2">
                    <label className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Address</label>
                    <input type="text" className="input-underline" placeholder="123 ARCHIVE WAY" />
                  </div>
                  <div className="col-span-1">
                    <label className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">City</label>
                    <input type="text" className="input-underline" placeholder="NEW YORK" />
                  </div>
                  <div className="col-span-1">
                    <label className="font-label text-[8px] uppercase tracking-[0.2em] text-on-surface-variant mb-2 block">Postal Code</label>
                    <input type="text" className="input-underline" placeholder="10001" />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif italic mb-8">Billing Details</h2>
                <div className="space-y-8 bg-surface-container-low p-8 border border-surface-container-highest">
                  <div className="flex justify-between items-center pb-4 border-b border-surface-container-highest">
                    <div className="flex items-center gap-4">
                      <CreditCard size={20} strokeWidth={1} />
                      <span className="font-label text-xs uppercase tracking-widest">Credit Card</span>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-8 h-5 bg-primary/10 rounded-sm" />
                      <div className="w-8 h-5 bg-primary/10 rounded-sm" />
                    </div>
                  </div>
                  <div className="space-y-6">
                    <input type="text" className="input-underline" placeholder="CARD NUMBER" />
                    <div className="grid grid-cols-2 gap-8">
                      <input type="text" className="input-underline" placeholder="MM/YY" />
                      <input type="text" className="input-underline" placeholder="CVC" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-secondary/5 border border-secondary/10 rounded-sm">
                <ShieldCheck className="text-secondary" size={24} strokeWidth={1} />
                <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant leading-relaxed">
                  Your transaction is secured with bespoke encryption rituals, ensuring your sanctuary remains private.
                </p>
              </div>

              <button 
                onClick={() => alert("Order placed in Spirit. (Prototype only)")}
                className="w-full btn-primary h-20 flex items-center justify-center gap-4 text-sm"
              >
                Assemble Order & Finalize
                <ChevronRight size={18} />
              </button>
            </motion.div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-40 bg-surface-container-lowest p-8 border border-surface-container-highest shadow-2xl">
              <h3 className="text-xl font-serif italic mb-8">Selected Objects</h3>
              <div className="space-y-6 mb-12">
                {checkoutItems.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-20 h-24 flex-shrink-0 bg-surface-container-low overflow-hidden">
                      <img src={item.image} className="w-full h-full object-cover grayscale-[0.2]" alt={item.name} />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h4 className="font-serif text-sm">{item.name}</h4>
                      <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mt-1">{item.material}</p>
                      <p className="font-sans font-medium text-xs mt-2">${item.price.toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-surface-container-highest">
                <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>${finalTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  <span>Shipping curation</span>
                  <span>Calculated at door</span>
                </div>
                <div className="flex justify-between items-end pt-8">
                  <span className="font-serif italic text-2xl">Total Due</span>
                  <span className="font-serif text-3xl">${finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[9px] font-label uppercase tracking-widest text-on-surface-variant/60">
                   <Truck size={14} strokeWidth={1} />
                   <span>Complimentary white-glove arrival</span>
                </div>
                <div className="flex items-center gap-4 text-[9px] font-label uppercase tracking-widest text-on-surface-variant/60">
                   <ShieldCheck size={14} strokeWidth={1} />
                   <span>Arrives with Certificate of Essence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

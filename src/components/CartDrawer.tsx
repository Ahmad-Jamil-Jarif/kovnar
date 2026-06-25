/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../lib/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-8 border-b border-surface-container-highest flex justify-between items-center">
              <h2 className="text-2xl font-serif">Your Bag</h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-surface-container-low rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto no-scrollbar p-8">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-24 h-24 bg-surface-container-low rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag className="text-surface-container-highest" size={40} />
                  </div>
                  <p className="font-serif italic text-xl mb-4">Your bag is empty</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-sm font-label uppercase tracking-widest underline underline-offset-4"
                  >
                    Continue Exploring
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-30 bg-surface-container-low flex-shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale-[0.2]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-serif italic">{item.name}</h3>
                          <p className="font-medium text-sm">${(item.price * item.quantity).toLocaleString()}</p>
                        </div>
                        <p className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant mb-4">{item.material}</p>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center border border-surface-container-highest">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-2 hover:bg-surface-container-low transition-colors"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-4 text-xs font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-2 hover:bg-surface-container-low transition-colors"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-on-surface-variant hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-surface-container-highest bg-surface-container-low/30">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Subtotal</p>
                    <p className="text-3xl font-serif">${totalPrice.toLocaleString()}</p>
                  </div>
                  <p className="text-[10px] text-on-surface-variant italic">Taxes and shipping calculated at checkout</p>
                </div>
                <button className="w-full bg-primary text-on-primary py-5 flex items-center justify-center gap-4 group">
                  <span className="font-label text-xs uppercase tracking-[0.2em]">Proceed to Checkout</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;

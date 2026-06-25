/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './lib/CartContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Collection from './pages/Collection';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Bespoke from './pages/Bespoke';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import Returns from './pages/Returns';
import Materials from './pages/Materials';
import Sustainability from './pages/Sustainability';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  React.useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const HomePage = () => (
  <main>
    <Hero />
    <Philosophy />
    <ProductGrid />
    
    {/* Featured Quote Section */}
    <section className="py-48 bg-surface-container-low text-center overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif italic max-w-5xl mx-auto leading-tight">
          "The space we inhabit is a reflection of the pauses we take between our thoughts."
        </h2>
        <p className="mt-12 font-label text-[15px] leading-[25px] uppercase tracking-[0.5em] text-on-surface-variant">
          The Kovnar Manifesto
        </p>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif italic text-on-surface/5 select-none pointer-events-none">
        Spirit
      </div>
    </section>
  </main>
);

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="relative min-h-screen bg-surface selection:bg-primary selection:text-white">
          <ScrollToTop />
          <Navbar />
          
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/bespoke" element={<Bespoke />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/sustainability" element={<Sustainability />} />
          </Routes>
          
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}


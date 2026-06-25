/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Search, ArrowRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../lib/CartContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);
  
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (isMobileMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen, isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const navLinks = [
    { name: 'Collection', href: '/collection' },
    { name: 'Custom', href: '/bespoke' },
    { name: 'Contact', href: '/contact' },
    { name: 'Kovnar', href: '/#kovnar' },
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/collection?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled || location.pathname !== '/' || isMobileMenuOpen
          ? 'bg-surface-container-lowest py-4 shadow-sm' 
          : 'bg-surface-container-lowest py-4 shadow-sm lg:bg-transparent lg:py-8 lg:shadow-none'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-btn"
          className="lg:hidden text-primary p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Desktop Links Left */}
        <div className="hidden lg:flex gap-12">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-label text-[10px] uppercase tracking-[0.3em] transition-colors ${
                location.pathname + location.hash === link.href ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 group">
          <h1 className="text-2xl lg:text-3xl font-serif tracking-[0.1em] uppercase font-medium">
            <span className="italic font-light">Kovnar</span>
          </h1>
          <div className="h-[1px] w-0 group-hover:w-full bg-primary mx-auto transition-all duration-500" />
        </Link>

        {/* Desktop Links Right */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`font-label text-[10px] uppercase tracking-[0.3em] transition-colors ${
                location.pathname + location.hash === link.href ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-6 ml-6">
            <button 
              id="search-btn" 
              className="text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              id="theme-btn"
              className="text-on-surface-variant hover:text-primary transition-colors"
              onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
            </button>
            <button
              id="cart-btn"
              className="text-on-surface-variant hover:text-primary transition-colors relative"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-2 bg-secondary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex items-center gap-4">
          <button 
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            id="mobile-theme-btn"
            className="text-on-surface-variant hover:text-primary transition-colors"
            onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
          </button>
          <button
            id="mobile-cart-btn"
            className="text-on-surface-variant hover:text-primary transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-2 bg-secondary text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Global Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-surface-container-lowest z-[100] flex items-center justify-center px-6"
          >
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-on-surface-variant hover:text-primary transition-colors"
            >
              <X size={32} strokeWidth={1} />
            </button>
            
            <form onSubmit={handleSearchSubmit} className="w-full max-w-4xl">
              <span className="font-label text-[10px] uppercase tracking-[0.5em] text-on-surface-variant block mb-8 text-center">
                Refining the Archive
              </span>
              <div className="relative group">
                <input 
                  ref={searchInputRef}
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH BY NAME, CATEGORY, MATERIAL..." 
                  className="w-full bg-transparent border-0 border-b-2 border-surface-container-highest focus:border-primary py-8 text-4xl lg:text-6xl font-serif italic outline-none transition-all placeholder:text-on-surface-variant/20"
                />
                <button 
                  type="submit"
                  className="absolute right-0 bottom-8 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <ArrowRight size={40} strokeWidth={1} />
                </button>
              </div>
              <div className="mt-12 flex flex-wrap justify-center gap-8">
                {['Seating', 'Lighting', 'Tables', 'Decor'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => {
                      navigate(`/collection?q=${tag.toLowerCase()}`);
                      setIsSearchOpen(false);
                    }}
                    className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-surface-container-lowest z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
              <h2 className="text-xl font-serif">Menu</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={link.name}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-serif italic"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-10 border-t border-surface-container-highest">
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">Social</p>
              <div className="flex gap-6">
                {['Instagram', 'Pinterest', 'Journal'].map((social) => (
                  <a key={social} href="#" className="font-sans text-sm text-primary underline underline-offset-4">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

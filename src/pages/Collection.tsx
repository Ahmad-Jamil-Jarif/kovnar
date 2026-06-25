/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../lib/data';
import { Search, Filter, X } from 'lucide-react';

const Collection: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = useMemo(() => {
    if (!query) return PRODUCTS;
    const lowerQuery = query.toLowerCase();
    return PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) || 
      p.category.toLowerCase().includes(lowerQuery) ||
      p.material.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ q: value });
    } else {
      searchParams.delete('q');
      setSearchParams(searchParams);
    }
  };

  const clearSearch = () => {
    searchParams.delete('q');
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 pb-24 bg-surface min-h-screen">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant block mb-4"
            >
              The Archive
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-serif italic"
            >
              {query ? `Results for "${query}"` : 'Curated Selection'}
            </motion.h1>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant" size={16} />
              <input 
                type="text" 
                value={query}
                onChange={handleSearchChange}
                placeholder="SEARCH OBJECTS" 
                className="input-underline pl-8 text-[10px] uppercase tracking-widest"
              />
              {query && (
                <button 
                  onClick={clearSearch}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <button className="flex items-center gap-2 font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors border border-surface-container-highest px-4 py-2">
              <Filter size={14} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Pinterest Masonry Layout */}
      <div className="container mx-auto px-6">
        {filteredProducts.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05, duration: 0.5 }}
                layout
                className="break-inside-avoid group relative"
              >
                <Link to={`/product/${product.id}`} className="block overflow-hidden relative bg-surface-container-low group">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-auto object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="font-label text-[8px] uppercase tracking-widest text-white/70 block mb-1">
                      {product.material}
                    </span>
                    <h3 className="text-white font-serif italic text-lg leading-tight">
                      {product.name}
                    </h3>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-white/90 font-sans text-sm">${product.price.toLocaleString()}</span>
                      <span className="text-white text-[10px] uppercase tracking-widest font-label border border-white/30 px-3 py-1 hover:bg-white hover:text-primary transition-colors">
                        View Detail
                      </span>
                    </div>
                  </div>
                </Link>
                
                <div className="mt-4 flex justify-between items-start md:hidden">
                   <h3 className="font-serif italic text-primary">{product.name}</h3>
                   <span className="font-sans text-sm">${product.price.toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <h2 className="text-3xl font-serif italic mb-4">No objects found</h2>
            <p className="text-on-surface-variant font-body mb-8">Your search for "{query}" did not return any matches in our archive.</p>
            <button onClick={clearSearch} className="btn-secondary">Clear Search</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Collection;

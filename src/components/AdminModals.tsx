/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { useAdmin } from '../lib/AdminContext';
import { Lock, X, Plus, Trash2, Edit3, Image as ImageIcon, Sparkles, AlertCircle } from 'lucide-react';
import { Product } from '../lib/data';

export const AdminModals: React.FC = () => {
  const {
    isAdmin,
    login,
    logout,
    isLoginModalOpen,
    closeLoginModal,
    editingProduct,
    closeProductModal,
    addProduct,
    updateProduct,
    deleteProduct,
  } = useAdmin();

  // Passcode login state
  const [passcode, setPasscode] = useState('');
  const [loginError, setLoginError] = useState(false);

  // Product form state
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<'Vessels' | 'Lighting' | 'Textiles' | 'Objects'>('Vessels');
  const [description, setDescription] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [material, setMaterial] = useState('');
  const [artisan, setArtisan] = useState('');
  const [imageInput, setImageInput] = useState('');
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (editingProduct && editingProduct !== 'new') {
      setName(editingProduct.name);
      setPrice(editingProduct.price);
      setCategory(editingProduct.category);
      setDescription(editingProduct.description);
      setDimensions(editingProduct.dimensions);
      setMaterial(editingProduct.material);
      setArtisan(editingProduct.artisan);
      setImages(editingProduct.images || []);
    } else if (editingProduct === 'new') {
      setName('');
      setPrice(120);
      setCategory('Vessels');
      setDescription('');
      setDimensions('H 12" x W 8"');
      setMaterial('Raw Ceramic');
      setArtisan('Atelier Kovnar Master Studio');
      setImages(['https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=1000']);
    }
  }, [editingProduct]);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(passcode);
    if (!success) {
      setLoginError(true);
    } else {
      setPasscode('');
      setLoginError(false);
    }
  };

  const handleAddImage = () => {
    if (imageInput.trim()) {
      setImages([...images, imageInput.trim()]);
      setImageInput('');
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || images.length === 0) {
      alert('Please provide an object name and at least one image URL.');
      return;
    }

    const productData = {
      name: name.trim(),
      price: Number(price) || 0,
      category,
      description: description.trim() || 'Hand-crafted bespoke object from Atelier Kovnar.',
      dimensions: dimensions.trim() || 'Bespoke specifications',
      material: material.trim() || 'Living organic materials',
      artisan: artisan.trim() || 'Independent Kovnar Artisan',
      images,
    };

    if (editingProduct && editingProduct !== 'new') {
      updateProduct(editingProduct.id, productData);
    } else {
      addProduct(productData);
    }
  };

  return (
    <>
      {/* 1. PASSCODE LOGIN MODAL */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-md p-8 bg-[#161618] border border-white/10 text-white shadow-2xl">
            <button
              onClick={closeLoginModal}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 text-primary">
              <Lock className="w-5 h-5" />
              <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60">
                Master Studio Portal
              </span>
            </div>

            <h3 className="text-3xl font-serif tracking-wide mb-2">Atelier Kovnar Access</h3>
            <p className="font-body text-sm text-white/60 mb-8">
              Enter the master studio passcode to unlock direct Pinterest-style inline editing across the digital collection.
            </p>

            <form onSubmit={handleLoginSubmit} className="space-y-6">
              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                  Studio Passcode
                </label>
                <input
                  type="password"
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setLoginError(false);
                  }}
                  placeholder="Enter passcode (hint: kovnar)"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-white/40 transition-colors"
                  autoFocus
                />
                {loginError && (
                  <div className="flex items-center gap-2 mt-2 text-red-400 text-xs font-body">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Invalid credentials. Master studio passcode required.</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="button"
                  onClick={closeLoginModal}
                  className="flex-1 px-4 py-3 border border-white/10 font-label text-[10px] uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-3 bg-white text-black font-label text-[10px] uppercase tracking-widest font-medium hover:bg-white/90 transition-colors shadow-lg"
                >
                  Unlock Studio
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. PRODUCT EDIT / ADD MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl my-8 p-6 sm:p-10 bg-[#161618] border border-white/10 text-white shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeProductModal}
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors p-2"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8 pr-10">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60">
                    Master Curator Interface
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif">
                  {editingProduct === 'new' ? 'Archive New Kovnar Object' : `Curate: ${editingProduct.name}`}
                </h3>
              </div>
              {editingProduct !== 'new' && (
                <button
                  type="button"
                  onClick={() => {
                    if (confirm(`Remove "${editingProduct.name}" from collection?`)) {
                      deleteProduct(editingProduct.id);
                      closeProductModal();
                    }
                  }}
                  className="flex items-center gap-2 px-3 py-2 bg-red-950/40 border border-red-500/30 text-red-300 hover:bg-red-900/50 text-xs font-label uppercase tracking-wider transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Archive / Delete</span>
                </button>
              )}
            </div>

            <form onSubmit={handleProductSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Object Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Kyoto Vessel No. 4"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Valuation (USD) *
                  </label>
                  <input
                    type="number"
                    required
                    min="0"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Collection Category
                  </label>
                  <select
                    value={category}
                    onChange={(e: any) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-[#202024] border border-white/10 text-white font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                  >
                    <option value="Vessels">Vessels</option>
                    <option value="Lighting">Lighting</option>
                    <option value="Textiles">Textiles</option>
                    <option value="Objects">Objects</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Materiality
                  </label>
                  <input
                    type="text"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                    placeholder="e.g. Shino Glazed Clay"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                    Dimensions
                  </label>
                  <input
                    type="text"
                    value={dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                    placeholder='e.g. H 14" x Ø 9"'
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                  Artisan / Origin Studio
                </label>
                <input
                  type="text"
                  value={artisan}
                  onChange={(e) => setArtisan(e.target.value)}
                  placeholder="e.g. Kenjiro Takahashi"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-body text-sm focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>

              <div>
                <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-2">
                  Curatorial Narrative (Description)
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe the tactile quality, inspiration, and history of the piece..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white font-body text-sm focus:outline-none focus:border-white/40 transition-colors leading-relaxed"
                />
              </div>

              {/* IMAGES MANAGEMENT */}
              <div className="border-t border-white/10 pt-6">
                <label className="block font-label text-[10px] uppercase tracking-widest text-white/50 mb-3">
                  Product Imagery URLs (High-Resolution)
                </label>
                <div className="flex gap-3 mb-4">
                  <input
                    type="url"
                    value={imageInput}
                    onChange={(e) => setImageInput(e.target.value)}
                    placeholder="Paste image URL (Unsplash, studio host, etc.)"
                    className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 text-white font-mono text-xs focus:outline-none focus:border-white/40 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={handleAddImage}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-label text-[10px] uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Photo</span>
                  </button>
                </div>

                {images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    {images.map((img, i) => (
                      <div key={i} className="relative group bg-black/40 border border-white/10 aspect-[4/5] overflow-hidden">
                        <img
                          src={img}
                          alt={`Preview ${i}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(i)}
                          className="absolute top-2 right-2 bg-black/80 hover:bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-md"
                          title="Remove image"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                        {i === 0 && (
                          <span className="absolute bottom-2 left-2 bg-black/80 text-white text-[9px] font-label uppercase px-2 py-0.5 tracking-wider backdrop-blur-xs">
                            Cover Photo
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 border border-dashed border-white/10 text-center text-white/40 font-body text-xs">
                    <ImageIcon className="w-6 h-6 mx-auto mb-2 opacity-50" />
                    No photos added. Add at least one image URL for the object gallery.
                  </div>
                )}
              </div>

              <div className="flex justify-end gap-4 border-t border-white/10 pt-8">
                <button
                  type="button"
                  onClick={closeProductModal}
                  className="px-6 py-3 border border-white/10 font-label text-[10px] uppercase tracking-widest text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-white text-black font-label text-[10px] uppercase tracking-widest font-medium hover:bg-white/90 transition-colors shadow-lg"
                >
                  {editingProduct === 'new' ? 'Publish Object to Archive' : 'Save Curatorial Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

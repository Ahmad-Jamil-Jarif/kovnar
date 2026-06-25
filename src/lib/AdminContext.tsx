/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from './data';

interface AdminContextType {
  products: Product[];
  isAdmin: boolean;
  login: (passcode: string) => boolean;
  logout: () => void;
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updatedFields: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  isLoginModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  editingProduct: Product | 'new' | null;
  openProductModal: (target?: Product | 'new') => void;
  closeProductModal: () => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const LOCAL_STORAGE_PRODUCTS_KEY = 'kovnar_products_state_v1';
const LOCAL_STORAGE_ADMIN_KEY = 'kovnar_admin_session_v1';

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_PRODUCTS_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.error('Failed to load products from storage', e);
    }
    return PRODUCTS;
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_ADMIN_KEY) === 'true';
    } catch {
      return false;
    }
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | 'new' | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_PRODUCTS_KEY, JSON.stringify(products));
    } catch (e) {
      console.error('Failed to save products to storage', e);
    }
  }, [products]);

  const login = (passcode: string): boolean => {
    // Master admin passcode
    if (passcode.trim().toLowerCase() === 'kovnar' || passcode.trim().toLowerCase() === 'admin') {
      setIsAdmin(true);
      try {
        localStorage.setItem(LOCAL_STORAGE_ADMIN_KEY, 'true');
      } catch {}
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
    try {
      localStorage.removeItem(LOCAL_STORAGE_ADMIN_KEY);
    } catch {}
  };

  const addProduct = (newProdData: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...newProdData,
      id: `kovnar_art_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    };
    setProducts((prev) => [newProduct, ...prev]);
    setEditingProduct(null);
  };

  const updateProduct = (id: string, updatedFields: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    );
    setEditingProduct(null);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openProductModal = (target: Product | 'new' = 'new') => {
    setEditingProduct(target);
  };
  const closeProductModal = () => setEditingProduct(null);

  return (
    <AdminContext.Provider
      value={{
        products,
        isAdmin,
        login,
        logout,
        addProduct,
        updateProduct,
        deleteProduct,
        isLoginModalOpen,
        openLoginModal,
        closeLoginModal,
        editingProduct,
        openProductModal,
        closeProductModal,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

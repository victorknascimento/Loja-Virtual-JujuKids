
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Product } from '../types';
import { getProducts, setProducts as saveProducts } from '../services/localStorageService';
import { INITIAL_PRODUCTS } from '../constants';

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let storedProducts = getProducts();
    if (storedProducts.length === 0) {
      storedProducts = INITIAL_PRODUCTS;
      saveProducts(storedProducts);
    }
    setProducts(storedProducts);
  }, []);

  const addProduct = (productData: Omit<Product, 'id'>) => {
    const newProduct: Product = { ...productData, id: Date.now().toString() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };

  const updateProduct = (updatedProduct: Product) => {
    const updatedProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };
  
  const deleteProduct = (productId: string) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    saveProducts(updatedProducts);
  };


  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

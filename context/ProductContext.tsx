import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { Product } from '../types';
import * as localStorageService from '../services/localStorageService';
import { INITIAL_PRODUCTS } from '../constants';

type ProductData = Omit<Product, 'id'>;

interface ProductContextType {
  products: Product[];
  addProduct: (productData: ProductData) => void;
  updateProduct: (updatedProduct: Product) => void;
  deleteProduct: (productId: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let storedProducts = localStorageService.getProducts();
    if (storedProducts.length === 0) {
      storedProducts = INITIAL_PRODUCTS;
      localStorageService.setProducts(storedProducts);
    }
    setProducts(storedProducts);
  }, []);

  const addProduct = (productData: ProductData) => {
    const newProduct: Product = { ...productData, id: Date.now().toString() };
    const updatedProducts = [...products, newProduct];
    setProducts(updatedProducts);
    localStorageService.setProducts(updatedProducts);
  };

  const updateProduct = (updatedProduct: Product) => {
    const updatedProducts = products.map(p => p.id === updatedProduct.id ? updatedProduct : p);
    setProducts(updatedProducts);
    localStorageService.setProducts(updatedProducts);
  };
  
  const deleteProduct = (productId: string) => {
    const updatedProducts = products.filter(p => p.id !== productId);
    setProducts(updatedProducts);
    localStorageService.setProducts(updatedProducts);
  };
  
  const value = { products, addProduct, updateProduct, deleteProduct };

  return (
    <ProductContext.Provider value={value}>
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

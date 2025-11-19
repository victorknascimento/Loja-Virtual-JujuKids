import React, { useEffect } from 'react';
import * as localStorageService from '../services/localStorageService';
import { INITIAL_PRODUCTS } from '../constants';
import { UserRole } from '../types';

export const DataInitializer: React.FC = () => {
  useEffect(() => {
    const users = localStorageService.getUsers();
    if (users.length === 0) {
      localStorageService.setUsers([
        { id: 'admin001', name: 'Admin', phone: '5585999195930', role: UserRole.ADMIN }
      ]);
    }

    const products = localStorageService.getProducts();
    if (products.length === 0) {
      localStorageService.setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  return null; 
};

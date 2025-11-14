
import { useEffect } from 'react';
import { getUsers, setUsers, getProducts, setProducts } from '../services/localStorageService';
import { UserRole } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

// This component runs once to set up initial data if it doesn't exist.
export const DataInitializer = () => {
  useEffect(() => {
    const users = getUsers();
    if (users.length === 0) {
      setUsers([
        {
          id: 'admin001',
          name: 'Admin',
          email: 'admin@jujukids.com',
          role: UserRole.ADMIN,
        }
      ]);
      console.log('Admin user created: admin@jujukids.com (no password needed for this demo)');
    }

    const products = getProducts();
    if (products.length === 0) {
      setProducts(INITIAL_PRODUCTS);
    }
  }, []);

  return null;
};

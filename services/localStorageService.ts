
import { User, Product, Order } from '../types';

const get = <T,>(key: string, defaultValue: T): T => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage key “${key}”:`, error);
    return defaultValue;
  }
};

const set = <T,>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key “${key}”:`, error);
  }
};

export const getUsers = () => get<User[]>('users', []);
export const setUsers = (users: User[]) => set('users', users);

export const getProducts = () => get<Product[]>('products', []);
export const setProducts = (products: Product[]) => set('products', products);

export const getOrders = () => get<Order[]>('orders', []);
export const setOrders = (orders: Order[]) => set('orders', orders);

import { User, Product, Order } from '../types';

const get = <T>(key: string, defaultValue: T): T => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(`Error reading from localStorage key “${key}”:`, error);
    return defaultValue;
  }
};

const set = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error writing to localStorage key “${key}”:`, error);
  }
};

export const getUsers = (): User[] => get<User[]>('users', []);
export const setUsers = (users: User[]): void => set<User[]>('users', users);

export const getProducts = (): Product[] => get<Product[]>('products', []);
export const setProducts = (products: Product[]): void => set<Product[]>('products', products);

export const getOrders = (): Order[] => get<Order[]>('orders', []);
export const setOrders = (orders: Order[]): void => set<Order[]>('orders', orders);

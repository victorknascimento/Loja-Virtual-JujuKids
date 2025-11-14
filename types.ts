
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  ADMIN = 'ADMIN',
}

export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // Should not be stored in frontend state long-term
  role: UserRole;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  customerName: string;
  customerEmail: string;
  timestamp: string;
}

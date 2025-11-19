import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { User, UserRole } from '../types';
import * as localStorageService from '../services/localStorageService';

interface AuthContextType {
  currentUser: User | null;
  users: User[];
  login: (phone: string) => boolean;
  logout: () => void;
  register: (name: string, phone: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsersState] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = localStorageService.getUsers();
    setUsersState(storedUsers);
    const sessionUser = sessionStorage.getItem('currentUser');
    if (sessionUser) {
      setCurrentUser(JSON.parse(sessionUser));
    }
  }, []);

  const login = (phone: string) => {
    const user = users.find(u => u.phone === phone);
    if (user) {
      setCurrentUser(user);
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
  };

  const register = (name: string, phone: string) => {
    if (users.some(u => u.phone === phone)) {
      return false; 
    }
    const newUser: User = {
      id: Date.now().toString(),
      name,
      phone,
      role: UserRole.CUSTOMER,
    };
    const updatedUsers = [...users, newUser];
    localStorageService.setUsers(updatedUsers);
    setUsersState(updatedUsers);
    return true;
  };

  const value = { currentUser, login, logout, register, users };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

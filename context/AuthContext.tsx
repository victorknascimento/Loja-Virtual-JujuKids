
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { User, UserRole } from '../types';
import { getUsers, setUsers } from '../services/localStorageService';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password_DO_NOT_USE: string) => boolean;
  logout: () => void;
  register: (name: string, email: string, password_DO_NOT_USE: string) => boolean;
  users: User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsersState] = useState<User[]>([]);

  useEffect(() => {
    const storedUsers = getUsers();
    setUsersState(storedUsers);
    const sessionUser = sessionStorage.getItem('currentUser');
    if (sessionUser) {
      setCurrentUser(JSON.parse(sessionUser));
    }
  }, []);

  const login = (email: string, password_DO_NOT_USE: string): boolean => {
    const user = users.find(u => u.email === email);
    // In a real app, password would be hashed and checked on the server.
    // Here we just check for existence.
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

  const register = (name: string, email: string, password_DO_NOT_USE: string): boolean => {
    if (users.some(u => u.email === email)) {
      return false; // User already exists
    }
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: UserRole.CUSTOMER,
    };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setUsersState(updatedUsers);
    return true;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, register, users }}>
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

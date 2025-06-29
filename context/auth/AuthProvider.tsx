import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  signup: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  signup: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const signup = () => {
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext); 
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin,setIsAdmin] = useState(false);
  const signin = () => setIsAuthenticated(true);
  const signout = () => setIsAuthenticated(false);
  const Adminsignin = () => setIsAdmin(true);
  const Adminsignout = () => setIsAdmin(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, signin, signout, isAdmin, Adminsignin, Adminsignout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
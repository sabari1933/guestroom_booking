import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Implement functions for authentication like login, logout, etc.

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };

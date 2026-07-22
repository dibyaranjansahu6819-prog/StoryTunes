import { createContext, useContext, useState, useEffect } from "react";

import {
  isAuthenticated,
  logout,
} from "../services/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
  }, []);

  function loginSuccess() {
    setAuthenticated(true);
  }

  function logoutUser() {
    logout();

    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated,
        loginSuccess,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
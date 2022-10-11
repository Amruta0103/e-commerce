import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return(
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn}}>
      {children}
    </AuthContext.Provider>
  )
}


export function useAuth() {
  return useContext(AuthContext);
};
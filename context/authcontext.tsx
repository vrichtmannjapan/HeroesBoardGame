import React, {createContext, useContext, useState } from "react";

type AuthContextType = {
    loggedIn:boolean;
    login: () => void
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ( {children}: {children: React.ReactNode}) => {
  const [loggedIn, setIsLoggedIn] = useState<boolean>(false)

  const login = () => setIsLoggedIn(true)
  const logout = () => setIsLoggedIn(false)

  return(
    <AuthContext.Provider value={{loggedIn, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () =>{
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth  must be  used within an  AuthProvider')
  return context
}

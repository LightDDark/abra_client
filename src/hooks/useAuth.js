import { createContext, useContext, useMemo } from 'react'
import { useLocalStorage } from './useLocalStorage'
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const defaultValue = {
    isAuthenticated: false,
    userName: null,
    token: null,
  }
  const [user, setUser] = useLocalStorage('user', defaultValue)

  // call this function when you want to authenticate the user
  const login = async (data) => {
    console.log('login data ', data)
    setUser(data)
  }

  // call this function to sign out logged in user
  const logout = () => {
    setUser(defaultValue)
  }

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}

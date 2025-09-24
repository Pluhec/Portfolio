import { createContext, useContext, useState } from 'react'

const NavigationContext = createContext()

export function NavigationProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false)

  const openNav = () => {
    setNavOpen(!navOpen)
  }

  return (
    <NavigationContext.Provider value={{ navOpen, setNavOpen, openNav }}>
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
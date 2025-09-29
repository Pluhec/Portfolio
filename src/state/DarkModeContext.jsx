import { createContext, useContext, useEffect, useState } from 'react'
const DarkModeContext = createContext()

export function DarkModeProvider({ children }){
  const [dark, setDark] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    
    // Pokud má uživatel uložené nastavení, použij ho
    if (savedMode !== null && savedMode !== 'null') {
      return savedMode === 'enabled'
    }
    
    // Výchozí nastavení je tmavý režim (dark mode jako default)
    return true
  })

  useEffect(() => {
    const enableDarkMode = () => {
      document.body.classList.add('darkmode')
      localStorage.setItem('darkMode', 'enabled')
      
      // Update all link icons to black
      const darkImg = document.getElementsByClassName('link-icon')
      for (let i = 0; i < darkImg.length; i++) {
        darkImg[i].src = '/Assets/Icons/Link/link-black.png'
      }
    }

    const disableDarkMode = () => {
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkMode', 'disabled')
      
      // Update all link icons to white
      const darkImg = document.getElementsByClassName('link-icon')
      for (let i = 0; i < darkImg.length; i++) {
        darkImg[i].src = '/Assets/Icons/Link/link-white.png'
      }
    }

    if (dark) {
      enableDarkMode()
    } else {
      disableDarkMode()
    }
  }, [dark])

  // Initialize on mount - výchozí je tmavý režim
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    
    // Pokud má uživatel uložené nastavení, použij ho
    if (savedMode !== null && savedMode !== 'null') {
      setDark(savedMode === 'enabled')
      return
    }
    
    // Jinak nastav výchozí tmavý režim
    setDark(true)
  }, [])

  const resetToSystemPreference = () => {
    localStorage.removeItem('darkMode')
    if (window.matchMedia) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(systemPrefersDark)
    } else {
      // Fallback na tmavý režim pokud není dostupné matchMedia
      setDark(true)
    }
  }

  return (
    <DarkModeContext.Provider value={{dark, setDark, resetToSystemPreference}}>{children}</DarkModeContext.Provider>
  )
}

export const useDark = ()=> useContext(DarkModeContext)
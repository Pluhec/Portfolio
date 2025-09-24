import { createContext, useContext, useEffect, useState } from 'react'
const DarkModeContext = createContext()

export function DarkModeProvider({ children }){
  const [dark, setDark] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    
    // Pokud má uživatel uložené nastavení, použij ho
    if (savedMode !== null && savedMode !== 'null') {
      return savedMode === 'enabled'
    }
    
    // Jinak detekuj systémové nastavení
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    
    // Fallback na světlý režim
    return false
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

  // Initialize on mount a sleduj změny systémového nastavení
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    
    // Pokud má uživatel uložené nastavení, použij ho
    if (savedMode !== null && savedMode !== 'null') {
      setDark(savedMode === 'enabled')
      return
    }
    
    // Jinak detekuj systémové nastavení
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      setDark(mediaQuery.matches)
      
      // Poslouchej změny systémového nastavení (pouze pokud nemá uložené preference)
      const handleChange = (e) => {
        const currentSavedMode = localStorage.getItem('darkMode')
        if (currentSavedMode === null || currentSavedMode === 'null') {
          setDark(e.matches)
        }
      }
      
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const resetToSystemPreference = () => {
    localStorage.removeItem('darkMode')
    if (window.matchMedia) {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setDark(systemPrefersDark)
    }
  }

  return (
    <DarkModeContext.Provider value={{dark, setDark, resetToSystemPreference}}>{children}</DarkModeContext.Provider>
  )
}

export const useDark = ()=> useContext(DarkModeContext)
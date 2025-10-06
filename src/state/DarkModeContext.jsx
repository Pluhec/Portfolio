import { createContext, useContext, useEffect, useState } from 'react'
const DarkModeContext = createContext()

export function DarkModeProvider({ children }){
  const [dark, setDark] = useState(() => {
    try {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null && savedMode !== 'null') {
        return savedMode === 'disabled'
      }
    } catch (e) {}
    return true
  })

  useEffect(() => {
    const enableDarkMode = () => {
      document.documentElement.classList.add('darkmode')

      localStorage.setItem('darkMode', 'enabled')
      
      const darkImg = document.getElementsByClassName('link-icon')
      for (let i = 0; i < darkImg.length; i++) {
        darkImg[i].src = '/Assets/Icons/Link/link-black.png'
      }
    }

    const disableDarkMode = () => {
      document.documentElement.classList.remove('darkmode')

      localStorage.setItem('darkMode', 'disabled')
      
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
    try {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null && savedMode !== 'null') {
        setDark(savedMode === 'disabled')
      }
    } catch (e) {
      // ignore localStorage errors
    }
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
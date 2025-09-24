import { createContext, useContext, useEffect, useState } from 'react'
const DarkModeContext = createContext()

export function DarkModeProvider({ children }){
  const [dark, setDark] = useState(()=> localStorage.getItem('darkMode') === 'enabled')
  useEffect(()=>{
    if(dark){
      document.body.classList.add('darkmode')
      localStorage.setItem('darkMode','enabled')
    }else{
      document.body.classList.remove('darkmode')
      localStorage.setItem('darkMode', 'disabled')
    }
  },[dark])
  return (
    <DarkModeContext.Provider value={{dark, setDark}}>{children}</DarkModeContext.Provider>
  )
}

export const useDark = ()=> useContext(DarkModeContext)
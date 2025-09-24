import { createContext, useContext, useState } from 'react'

const HeaderContext = createContext()

export function HeaderProvider({ children }) {
  const [showSimpleHeader, setShowSimpleHeader] = useState(false)
  
  const enableSimpleHeader = () => setShowSimpleHeader(true)
  const enableFullHeader = () => setShowSimpleHeader(false)
  
  return (
    <HeaderContext.Provider value={{
      showSimpleHeader,
      enableSimpleHeader,
      enableFullHeader
    }}>
      {children}
    </HeaderContext.Provider>
  )
}

export function useHeader() {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeader must be used within HeaderProvider')
  }
  return context
}
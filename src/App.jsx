import { useEffect } from 'react'
import AOS from 'aos'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TechStack from './pages/TechStack'
import ProjectPage from './pages/ProjectPage'
import { DarkModeProvider } from './state/DarkModeContext'
import { NavigationProvider, useNavigation } from './state/NavigationContext'
import { HeaderProvider } from './state/HeaderContext'
import { LanguageProvider } from './state/LanguageContext'
import Nav from './components/Nav'
import Header from './components/Header'

function AppContent() {
  const { navOpen } = useNavigation()
  
  // Redirect handling pro starou /cz URL
  useEffect(() => {
    const path = window.location.pathname
    if (path.startsWith('/cz')) {
      const newPath = path.replace('/cz', '') || '/'
      window.location.replace(newPath)
    }
  }, [])
  
  return (
    <>
      <Nav />
      <div id="main-content" style={{display: navOpen ? 'none' : 'block'}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/tech-stack" element={<TechStack/>} />
          <Route path="/project/:projectSlug" element={<ProjectPage/>} />
          {/* Redirect route pro /cz jako záložka */}
          <Route path="/cz" element={<Navigate to="/" replace />} />
          <Route path="/cz/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  )
}

export default function App(){
  useEffect(()=>{ AOS.init({ once: true, duration: 800 }) },[])
  return (
    <DarkModeProvider>
      <LanguageProvider>
        <NavigationProvider>
          <HeaderProvider>
            <BrowserRouter>
              <AppContent />
            </BrowserRouter>
          </HeaderProvider>
        </NavigationProvider>
      </LanguageProvider>
    </DarkModeProvider>
  )
}
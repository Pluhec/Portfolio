import { useEffect } from 'react'
import AOS from 'aos'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import TechStack from './pages/TechStack'
import { DarkModeProvider } from './state/DarkModeContext'
import Nav from './components/Nav'

export default function App(){
  useEffect(()=>{ AOS.init({ once: true, duration: 800 }) },[])
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/tech-stack" element={<TechStack/>} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  )
}
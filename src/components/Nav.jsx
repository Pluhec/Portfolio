import { Link } from 'react-router-dom'
import { useDark } from '../state/DarkModeContext'

export default function Nav(){
  const { dark, setDark } = useDark()
  return (
    <div>
      <header id="top-of-the-page" className="animate__animated animate__fadeInDown">
        <div className="nav-bar-boxes">
          <Link to="/"><img id="jp-logo" src="/Assets/Icons/Logo/jp-logo-white.png" alt=""/></Link>
          <a className="underline cz-en-button" href="#">CZ/EN</a>
        </div>
        <div className="nav-bar-boxes">
          <img id="dark-mode-toggle" className="dark-mode-toggle" src={dark? '/Assets/Icons/Dark-mode/moon.png' : '/Assets/Icons/Dark-mode/sun.png'} alt="" onClick={()=>setDark(!dark)} />
          <div className="nav-links">
            <Link className="underline" to="/">WORK</Link>
            <Link className="underline" to="/about">ABOUT</Link>
            <Link className="underline" to="/tech-stack">STACK</Link>
            <Link className="underline" to="/contact">CONTACT</Link>
          </div>
        </div>
      </header>
    </div>
  )
}
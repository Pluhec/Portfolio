import { Link } from 'react-router-dom'
import { useDark } from '../state/DarkModeContext'
import { useNavigation } from '../state/NavigationContext'
import { useHeader } from '../state/HeaderContext'
import SimpleHeader from './SimpleHeader'

export default function Header(){
  const { dark, setDark } = useDark()
  const { openNav } = useNavigation()
  const { showSimpleHeader } = useHeader()

  // Pokud má být zobrazen jednoduchý header, vrátíme SimpleHeader
  if (showSimpleHeader) {
    return <SimpleHeader />
  }

  return (
    <header id="top-of-the-page" className="animate__animated animate__fadeInDown">
      <div className="nav-bar-boxes">
        <Link to="/"><img id="jp-logo" src={dark ? "/Assets/Icons/Logo/jp-logo-black.png" : "/Assets/Icons/Logo/jp-logo-white.png"} alt=""/></Link>
        <a href="/cz/" className="underline cz-en-button">CZ/EN</a>
      </div>

      <div className="nav-bar-boxes">
        <img 
          id="dark-mode-toggle" 
          className="dark-mode-toggle" 
          src={dark? '/Assets/Icons/Dark-mode/moon.png' : '/Assets/Icons/Dark-mode/sun.png'} 
          alt="" 
          onClick={()=>setDark(!dark)} 
        />
        <a className="underline nav-opening" onClick={openNav}>MENU</a>
      </div>
    </header>
  )
}
import { Link } from 'react-router-dom'
import { useHeader } from '../state/HeaderContext'

export default function SimpleHeader() {
  const { enableFullHeader } = useHeader()
  
  const handleClose = () => {
    enableFullHeader()
  }
  
  return (
    <header id="top-of-the-page" className="animate__animated animate__fadeInDown">
      <div className="nav-bar-boxes">
        <Link to="/" onClick={handleClose} className="underline nav-opening">
          [ CLOSE ]
        </Link>
      </div>
      <div className="nav-bar-boxes">
        {/* Prázdné místo pro vycentrování */}
      </div>
    </header>
  )
}
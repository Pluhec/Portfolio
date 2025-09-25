import { Link } from 'react-router-dom'
import { useHeader } from '../state/HeaderContext'
import { useLanguage } from '../state/LanguageContext'
import { translations } from '../data/translations'

export default function SimpleHeader() {
  const { enableFullHeader } = useHeader()
  const { language } = useLanguage()
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
  
  const handleClose = () => {
    enableFullHeader()
  }
  
  return (
    <header id="top-of-the-page" className="animate__animated animate__fadeInDown">
      <div className="nav-bar-boxes">
        <Link to="/" onClick={handleClose} className="underline nav-opening">
          [ {t('nav.close')} ]
        </Link>
      </div>
      <div className="nav-bar-boxes">
        {/* Prázdné místo pro vycentrování */}
      </div>
    </header>
  )
}
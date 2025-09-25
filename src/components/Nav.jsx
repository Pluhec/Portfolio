import { Link } from 'react-router-dom'
import { useDark } from '../state/DarkModeContext'
import { useNavigation } from '../state/NavigationContext'
import { useHeader } from '../state/HeaderContext'
import { useLanguage } from '../state/LanguageContext'
import { translations } from '../data/translations'

export default function Nav(){
  const { dark, setDark } = useDark()
  const { navOpen, openNav } = useNavigation()
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
  
  const handleNavClick = () => {
    enableFullHeader() // Vždy zobrazíme full header při navigaci přes navbar
    openNav()
  }

  return (
    <>
      {/* Full screen navigation overlay */}
      <div id="nav-bar" style={{display: navOpen ? 'block' : 'none'}}>
        <header id="menu-header" className="animate__animated animate__fadeInDown">
          <a className="underline nav-opening" onClick={handleNavClick}>[ {t('nav.close')} ]</a>
        </header>
    
        <main>
          <nav>
            <ul>
              <div className="nav-container animate__animated animate__fadeIn">
                <li className="work-link nav-button">
                  <Link className="blured" to="/" onClick={handleNavClick}>{t('nav.work')}</Link>
                  <div className="moving-text">
                    {Array.from({length: 21}, (_, i) => (
                      <Link key={i} to="/" onClick={handleNavClick}>[ {t('nav.work')} ]</Link>
                    ))}
                  </div>
                </li>
                <li className="work-link nav-button">
                  <Link className="blured" to="/about" onClick={handleNavClick}>{t('nav.about')}</Link>
                  <div className="moving-text">
                    {Array.from({length: 20}, (_, i) => (
                      <Link key={i} to="/about" onClick={handleNavClick}>[ {t('nav.about')} ]</Link>
                    ))}
                  </div>
                </li>
                <li className="work-link nav-button">
                  <Link className="blured" to="/tech-stack" onClick={handleNavClick}>{t('nav.stack')}</Link>
                  <div className="moving-text">
                    {Array.from({length: 20}, (_, i) => (
                      <Link key={i} to="/tech-stack" onClick={handleNavClick}>[ {t('nav.stack')} ]</Link>
                    ))}
                  </div>
                </li>
                <li className="work-link nav-button">
                  <Link className="blured" to="/contact" onClick={handleNavClick}>{t('nav.contact')}</Link>
                  <div className="moving-text">
                    {Array.from({length: 20}, (_, i) => (
                      <Link key={i} to="/contact" onClick={handleNavClick}>[ {t('nav.contact')} ]</Link>
                    ))}
                  </div>
                </li>
              </div>
            </ul>
          </nav>
        </main>
    
        <footer id="menu-footer">
          <div className="footer-menu animate__animated animate__fadeInUp">
            <div className="footer-content underline">
              <a target="_blank" rel="noreferrer" href="https://github.com/Pluhec">Github<img className="link-icon" src="/Assets/Icons/Link/link-white.png" alt=""/></a>
            </div>
            <div className="footer-content underline">
             <a target="_blank" rel="noreferrer" href="https://join.slack.com/t/slack-q0m4092/shared_invite/zt-2j0kv43fp-H3S8CKl9lS0DA_1_7YjA8A">Slack<img className="link-icon" src="/Assets/Icons/Link/link-white.png" alt=""/></a>
            </div>
            <div className="footer-content underline">
              <a target="_blank" rel="noreferrer" href="https://discordapp.com/users/506890176232947713">Discord<img className="link-icon" src="/Assets/Icons/Link/link-white.png" alt=""/></a>
            </div>
          </div>
        </footer>
      </div>


    </>
  )
}
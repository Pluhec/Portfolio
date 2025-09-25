import { Link } from 'react-router-dom'
import { useLanguage } from '../state/LanguageContext'
import { translations } from '../data/translations'
import { getAllProjects } from '../data/projectsData'

export default function Home(){
  const { language } = useLanguage()
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
  
  const projects = getAllProjects(language)
  return (
    <main>
      <div className="main-content">
        <div className="introduction">
          <h1 id="main-heading-animation" className={`name ${language === 'cz' ? 'cz-name' : ''} animate__animated animate__fadeInDown`}>
            {t('home.title.0')}<br/>{t('home.title.1')}
          </h1>
          <p className="subtitle animate__animated animate__fadeInUp">
            {t('home.subtitle')}
          </p>
        </div>
        <div className="work-flex">
          {projects.map(project => (
            <Link key={project.slug} to={`/project/${project.slug}`} className="card" data-aos="zoom-in">
              <img className="zoom" src={project.image} alt={project.title.join(' ')}/>
              <div className="card-content works">
                <div>
                  <p>{project.category}</p>
                </div>
                <img className="card-icon" src={project.icon} alt=""/>
                <h1 className="card-h1">{project.title.join(' ')}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <footer data-aos="fade-up" data-aos-once="true">
        <p className="built">{t('common.footer')}</p>
        <div className="footer-soc-links">
          <a target="_blank" rel="noreferrer" href="https://github.com/Pluhec">
            <div className="footer-soc-links-flex underline">
              <p>Github</p>
              <img className="link-icon" src="/Assets/Icons/Link/link-white.png" alt=""/>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://join.slack.com/t/slack-q0m4092/shared_invite/zt-2j0kv43fp-H3S8CKl9lS0DA_1_7YjA8A">
            <div className="footer-soc-links-flex underline">
              <p>Slack</p>
              <img className="link-icon" src="/Assets/Icons/Link/link-white.png" alt=""/>
            </div>
          </a>
          <a target="_blank" rel="noreferrer" href="https://discordapp.com/users/506890176232947713">
            <div className="footer-soc-links-flex underline">
              <p>Discord</p>
              <img className="link-icon" src="/Assets/Icons/Link/link-white.png" alt=""/>
            </div>
          </a>
        </div>
        <div className="top-of-the-page">
          <p 
            className="underline bck-top-btn" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ cursor: 'pointer' }}
          >
{t('common.backToTop')}
          </p>
        </div>
      </footer>
    </main>
  )
}
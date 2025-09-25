import { Link } from 'react-router-dom'
import { useHeader } from '../state/HeaderContext'
import { useLanguage } from '../state/LanguageContext'
import { translations } from '../data/translations'
import OptimizedImage from '../components/OptimizedImage'

export default function About(){
  const { enableSimpleHeader } = useHeader()
  const { language } = useLanguage()
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }
  
  const services = [
    { img: '/Assets/Photos/Service/3d Print.webp', title: t('about.services.print3d'), order: 'first' },
    { img: '/Assets/Photos/Service/Photography.webp', title: t('about.services.photography'), order: 'second' },
    { img: '/Assets/Photos/Service/Web Development.webp', title: t('about.services.webDev'), order: 'first' },
    { img: '/Assets/Photos/Service/Hardware.webp', title: t('about.services.hardware'), order: 'second', className: 'video-hover' }
  ]

  const colophonItems = [
    { href: 'https://unsplash.com', category: t('about.colophon.stockCategory'), title: t('about.colophon.unsplash') },
    { href: 'https://pexels.com', category: t('about.colophon.stockCategory'), title: t('about.colophon.pexels') },  
    { href: 'https://www.flaticon.com', category: t('about.colophon.iconsCategory'), title: t('about.colophon.flaticon') },
    { href: 'https://twitter.com/designedbypaul', category: t('about.colophon.designCategory'), title: t('about.colophon.paul') }
  ]

  return (
    <main>
      <div className="introduction">
        <h1 id="main-heading-animation" className={`name ${language === 'cz' ? 'cz-name' : ''} animate__animated animate__fadeInDown`}>
          {t('about.title.0')}<br/>{t('about.title.1')}
        </h1>
        <div className="introduction-img-flex">
          <p data-aos="fade-up">{t('about.quote1')}</p>
          <img className="animate__animated animate__fadeInUp" src="/Assets/Photos/About/me.webp" alt=""/>
          <p data-aos="fade-up">{t('about.quote2')}</p>
        </div>
        <div id="introduction-description-flex" data-aos="fade-up">
          <p id="introduction-description">
            {t('about.description')}
          </p>
        </div>
      </div>
      
      <div className="hobby-img" data-aos="fade-up">
        <div className="hobby-scroll-container">
          <div className="hobby-scroll-content">
            <OptimizedImage src="/Assets/Photos/Hobby/Hardware.webp" alt="Hardware projects" />
            <OptimizedImage src="/Assets/Photos/Hobby/Camera.webp" alt="Photography equipment" />
            <OptimizedImage src="/Assets/Photos/Hobby/Guitar.webp" alt="Guitar playing" />
            <OptimizedImage src="/Assets/Photos/Hobby/Macbook.webp" alt="MacBook development" />
            <OptimizedImage src="/Assets/Photos/Hobby/3d Print.webp" alt="3D printing projects" />
            <OptimizedImage src="/Assets/Photos/Hobby/V8 Engine.webp" alt="V8 engine model" />
            <OptimizedImage src="/Assets/Photos/Hobby/Hardware.webp" alt="Hardware projects" />
            <OptimizedImage src="/Assets/Photos/Hobby/Camera.webp" alt="Photography equipment" />
            <OptimizedImage src="/Assets/Photos/Hobby/Guitar.webp" alt="Guitar playing" />
            <OptimizedImage src="/Assets/Photos/Hobby/Macbook.webp" alt="MacBook development" />
            <OptimizedImage src="/Assets/Photos/Hobby/3d Print.webp" alt="3D printing projects" />
            <OptimizedImage src="/Assets/Photos/Hobby/V8 Engine.webp" alt="V8 engine model" />
          </div>
        </div>
      </div>
      
      <div className="services">
        <h3 className="heading" data-aos="fade-up">{t('about.servicesTitle')}</h3>
        <div className="services-content-flex">
          {services.map((service, index) => (
            <div key={index} className="services-content" data-aos="fade-up">
              {service.order === 'first' ? (
                <>
                  <img src={service.img} className={service.className} alt=""/>
                  <p>{service.title}</p>
                </>
              ) : (
                <>
                  <p>{service.title}</p>
                  <img src={service.img} className={service.className} alt=""/>
                </>
              )}
            </div>
          ))}
        </div>    
      </div>
      
      <div className="colophon">
        <div className="colophon-flex">
          <h1 className="left-heading" data-aos="fade-up">{t('about.colophon.title')}</h1>
          <div className="colophon-container"> 
            {colophonItems.map((item, index) => (
              <a key={index} target="_blank" rel="noreferrer" href={item.href} className="card" data-aos="zoom-in">
                <video playsInline autoPlay loop muted>
                  <source src="/Assets/Videos/Abstract-doted-video.mp4" type="video/mp4"/>
                </video>
                <div className="card-content">
                  <div>
                    <p>{item.category}</p>
                  </div>
                  <h1 className="card-h1">{item.title}</h1>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="contact">
        <h3 className="heading" data-aos="fade-up">{t('common.contact')}</h3>
        <h1 data-aos="fade-up">{t('about.contactTitle')}</h1>
        <Link 
          to="/contact?from=about" 
          className="button" 
          data-aos="zoom-in"
        >
          <p>{t('about.contactButton')}</p>
        </Link>
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
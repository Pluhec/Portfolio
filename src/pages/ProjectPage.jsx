import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getProjectData } from '../data/projectsData'
import { useHeader } from '../state/HeaderContext'
import { useLanguage } from '../state/LanguageContext'
import { translations } from '../data/translations'
import OptimizedImage from '../components/OptimizedImage'
import ParallaxImageCarousel from '../components/ParallaxImageCarousel'

export default function ProjectPage() {
  const { projectSlug } = useParams()
  const { language } = useLanguage()
  const project = getProjectData(projectSlug, language)
  const { enableSimpleHeader, enableFullHeader } = useHeader()
  
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    console.log('Translation Debug:', { key, language, value: translations[language] })
    for (const k of keys) {
      value = value?.[k]
    }
    console.log('Final translation:', { key, result: value || key })
    return value || key
  }

  // Aktivujeme simple header při načtení stránky
  useEffect(() => {
    enableSimpleHeader()
    
    // Pokud má projekt více obrázků, zakážeme scrollování
    if (project?.images && project.images.length > 1) {
      document.documentElement.classList.add('no-scroll')
      document.body.classList.add('no-scroll')
    }
    
    // Cleanup - vrátíme full header a povolíme scrollování při opuštění komponenty
    return () => {
      enableFullHeader()
      document.documentElement.classList.remove('no-scroll')
      document.body.classList.remove('no-scroll')
    }
  }, [enableSimpleHeader, enableFullHeader, project?.images])

  // Pokud projekt neexistuje, zobrazíme 404
  if (!project) {
    return (
      <main>
        <div className="project-container">
          <div className="project-text-container">
            <h1>{t('project.notFound')}</h1>
            <Link to="/" className="project-button">
              <p>{t('project.backToHome')}</p>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main>
      <div className="project-container">
        <div className="project-text-container">
          <div className="project-heading-container">
            <h1 className="animate__animated animate__fadeIn">
              <span>{project.title[0]}</span>
              <span>{project.title[1]}</span>
            </h1>
            <p className="animate__animated animate__fadeIn">{project.subtitle}</p>
            <div className="project-button-container">
              {project.buttons.map((button, index) => (
                <a 
                  key={index}
                  target="_blank" 
                  rel="noreferrer" 
                  href={button.url} 
                  className="project-button animate__animated animate__zoomIn"
                >
                  <p>{button.text}</p>
                </a>
              ))}
            </div>
          </div>
          <div className="project-photo-container project-photo-container-phone">
            {project.images && project.images.length > 1 ? (
              <ParallaxImageCarousel 
                images={project.images}
                alt={project.title.join(' ')}
                className=""
              />
            ) : (
              <OptimizedImage 
                className="animate__animated animate__zoomIn" 
                src={project.image} 
                alt={project.title.join(' ')}
              />
            )}
          </div>
          <div className="project-about-container">
            <h1 className="animate__animated animate__fadeIn">{t('project.about')}</h1>
            <p 
              className="animate__animated animate__fadeIn" 
              dangerouslySetInnerHTML={{ __html: project.description }}
            />
          </div>
        </div>
        <div className="project-photo-container project-photo-container-desktop">
          {project.images && project.images.length > 1 ? (
            <ParallaxImageCarousel 
              images={project.images}
              alt={project.title.join(' ')}
              className=""
            />
          ) : (
            <OptimizedImage 
              className="animate__animated animate__zoomIn" 
              src={project.image} 
              alt={project.title.join(' ')}
            />
          )}
        </div>
      </div>
    </main>
  )
}
import ShaderCard from '../three/ShaderCard'

// Reusable TechCard component
const TechCard = ({ href, category, icon, title, isFirst = false }) => (
  <a target="_blank" rel="noreferrer" href={href} className={`card ${isFirst ? 'tech-card' : ''}`} id={isFirst ? 'second-card' : undefined} data-aos="zoom-in">
    <video playsInline autoPlay loop muted>
      <source src="/Assets/Videos/Abstract-doted-video.mp4" type="video/mp4"/>
    </video>
    <div className={`card-content ${isFirst ? 'tech-card' : ''}`}>
      <div className={isFirst ? 'card-content-p' : ''}>
        <p>{category}</p>
      </div>
      <img className="card-icon" src={icon} alt=""/>
      <h1 className="card-h1">{title}</h1>
    </div>
  </a>
)

export default function TechStack(){
  const techStack = [
    {
      href: "https://www.apple.com",
      category: "HARDWARE", 
      icon: "/Assets/Icons/Tech-stack/apple-logo-white.png",
      title: "Apple",
      isFirst: true
    },
    {
      href: "https://webflow.com",
      category: "WEBSITE BUILDER",
      icon: "/Assets/Icons/Tech-stack/webflow-logo-white.png", 
      title: "Webflow"
    },
    {
      href: "https://www.icloud.com",
      category: "FILE STORAGE",
      icon: "/Assets/Icons/Tech-stack/icloud-logo-white.png",
      title: "Icloud"
    },
    {
      href: "https://www.figma.com", 
      category: "UI DESIGN",
      icon: "/Assets/Icons/Tech-stack/figma-icon-white.png",
      title: "Figma"
    },
    {
      href: "https://slack.com",
      category: "COMUNICATION", 
      icon: "/Assets/Icons/Tech-stack/slack-icon-white.png",
      title: "Slack"
    },
    {
      href: "https://www.notion.so",
      category: "DOCUMENTS",
      icon: "/Assets/Icons/Tech-stack/notion-icon-white.png", 
      title: "Notion" 
    },
    {
      href: "https://code.visualstudio.com",
      category: "EDITOR",
      icon: "/Assets/Icons/Tech-stack/vsCode-icon-white.png",
      title: "VS Code"
    },
    {
      href: "https://www.apple.com/apple-music/",
      category: "MUSIC", 
      icon: "/Assets/Icons/Tech-stack/appleMusic-icon-white.png",
      title: "Apple Music"
    }
  ]

  return (
    <main>
      <div className="introduction">
        <p className="animate__animated animate__fadeInDown">TOOLS I USE EVERYDAY</p>
        <h1 id="main-heading-animation" className="name animate__animated animate__fadeInDown">TECH <br/> STACK</h1>
      </div>
      <div className="main-content">
        <div className="tech-stack-flex">
          {techStack.map((tech, index) => (
            <TechCard key={index} {...tech} />
          ))}
        </div>  
      </div>

      <footer data-aos="fade-up" data-aos-once="true">
        <p className="built">BUILT AND DESIGNED BY JAKUB PLUHACEK</p>
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
            BACK TO TOP
          </p>
        </div>
      </footer>
    </main>
  )
}
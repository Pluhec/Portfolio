import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <main>
      <div className="main-content">
        <div className="introduction">
          <h1 id="main-heading-animation" className="name name animate__animated animate__fadeInDown">SOFTWARE <br/> DEVELOPER</h1>
        </div>
        <div className="work-flex">
          <Link to="/project/password" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/password-bck.webp" alt="Password Generator"/>
            <div className="card-content works">
              <div>
                <p>FOR FUN</p>
              </div>
              <img className="card-icon" src="/Assets/Icons/Work/password-generator.png" alt=""/>
              <h1 className="card-h1">Password generator</h1>
            </div>
          </Link>

          <Link to="/project/tcz" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/TGZ-bck.webp" alt="Tiger Club Zlín"/>
            <div className="card-content works">
              <div>
                <p>COMMISSION</p>
              </div>
              <img className="card-icon" src="/Assets/Icons/Work/TGZ.png" alt=""/>
              <h1 className="card-h1">Tiger Club Zlín</h1>
            </div>
          </Link>

          <Link to="/project/dark-mode" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/dark-bck.webp" alt="Dark Mode"/>
            <div className="card-content works">
              <div>
                <p>FOR FUN</p>
              </div>
              <img className="card-icon" src="/Assets/Icons/Work/dark-mode.png" alt=""/>
              <h1 className="card-h1">Dark mode</h1>
            </div>
          </Link>

          <Link to="/project/autofine" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/autofine.webp" alt="Autofine"/>
            <div className="card-content works">
              <div>
                <p>SCHOOL / COMMISSION</p>
              </div>
              <img className="card-icon" src="/Assets/Icons/Work/autofine.png" alt=""/>
              <h1 className="card-h1">Autofine</h1>
            </div>
          </Link>
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
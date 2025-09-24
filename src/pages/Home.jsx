export default function Home(){
  return (
    <main id="main-content">
      <div className="main-content">
        <div className="introduction">
          <h1 id="main-heading-animation" className="name animate__animated animate__fadeInDown">SOFTWARE<br/>DEVELOPER</h1>
        </div>
        <div className="work-flex">
          <a href="/work-html/password.html" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/password-bck.webp" />
            <div className="card-content works">
              <div><p>FOR FUN</p></div>
              <img className="card-icon" src="/Assets/Icons/Work/password-generator.png" alt=""/>
              <h1 className="card-h1">Password generator</h1>
            </div>
          </a>
          <a href="/work-html/TCZ.html" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/TGZ-bck.webp" />
            <div className="card-content works">
              <div><p>COMMISSION</p></div>
              <img className="card-icon" src="/Assets/Icons/Work/TGZ.png" alt=""/>
              <h1 className="card-h1">Tiger Club Zlín</h1>
            </div>
          </a>
          <a href="/work-html/dark-mode.html" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/dark-bck.webp" />
            <div className="card-content works">
              <div><p>FOR FUN</p></div>
              <img className="card-icon" src="/Assets/Icons/Work/dark-mode.png" alt=""/>
              <h1 className="card-h1">Dark mode</h1>
            </div>
          </a>
          <a href="/work-html/autofine.html" className="card" data-aos="zoom-in">
            <img className="zoom" src="/Assets/Photos/Work/autofine.webp" />
            <div className="card-content works">
              <div><p>SCHOOL / COMMISSION</p></div>
              <img className="card-icon" src="/Assets/Icons/Work/autofine.png" alt=""/>
              <h1 className="card-h1">Autofine</h1>
            </div>
          </a>
        </div>
      </div>
      <footer data-aos="fade-up" data-aos-once="true">
        <p className="built">BUILT AND DESIGNED BY JAKUB PLUHACEK</p>
      </footer>
    </main>
  )
}
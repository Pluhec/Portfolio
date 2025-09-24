import ShaderCard from '../three/ShaderCard'

export default function TechStack(){
  return (
    <main>
      <div className="introduction">
        <p>TOOLS I USE EVERYDAY</p>
        <h1 className="name">TECH <br/> STACK</h1>
      </div>
      <div className="main-content">
        <div className="tech-stack-flex">
          <a target="_blank" rel="noreferrer" href="https://www.apple.com" className="card tech-card" data-aos="zoom-in">
            <ShaderCard />
            <div className="card-content tech-card">
              <div className="card-content-p"><p>HARDWARE</p></div>
              <img className="card-icon" src="/Assets/Icons/Tech-stack/apple-logo-white.png" alt=""/>
              <h1 className="card-h1">Apple</h1>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
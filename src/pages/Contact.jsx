import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useHeader } from '../state/HeaderContext'

export default function Contact(){
  const [time, setTime] = useState('Loading...')
  const [searchParams] = useSearchParams()
  const { enableFullHeader, enableSimpleHeader } = useHeader()
  
  // Kontrolujeme způsob příchodu na stránku
  useEffect(() => {
    const fromAbout = searchParams.get('from') === 'about'
    
    if (fromAbout) {
      // Přišel z About stránky - zobrazíme simple header
      enableSimpleHeader()
      // Scrollneme na začátek stránky
      window.scrollTo(0, 0)
    } else {
      // Přišel jinak (navbar, přímý link) - zobrazíme full header
      enableFullHeader()
    }
  }, [searchParams, enableFullHeader, enableSimpleHeader])
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const fmt = now.toLocaleTimeString('cs-CZ', { 
        timeZone: 'Europe/Prague',
        hour12: false 
      })
      setTime(fmt)
    }
    
    const interval = setInterval(updateTime, 1000)
    updateTime() // Initialize immediately
    
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-text">
            <h1>Contact</h1>
            <p>Right now im open to new projects, cooperations or contracts. You can contact me down there, I'll respond as soon as possible. </p>
          </div>
          <form action="https://formsubmit.co/b9f41be9df813e4a20f29319a61b5b96" method="post" className="contact-input">
            <div className="contact-input-half">
              <input type="text" name="name" placeholder="NAME" required/>
              <input type="email" name="email" placeholder="EMAIL" required/>
            </div>
            <div className="contact-input-full">
              <textarea 
                type="text" 
                name="message" 
                placeholder="MESSAGE" 
                required
                style={{ resize: 'none' }}
              ></textarea>
            </div>
            <div className="contact-input-button">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <video playsInline autoPlay loop muted src="/Assets/Videos/Abstract-video.mp4"></video>
        </div>
      </div>
      <div className="time-container">
        <h1><span>LOCAL TIME</span><span> [ ZLIN, CZ ]</span></h1>
        <div id="time">{time}</div>
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
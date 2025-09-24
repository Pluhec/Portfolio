import { useEffect, useState } from 'react'

export default function Contact(){
  const [time, setTime] = useState('')
  useEffect(()=>{
    const tick = ()=>{
      const now = new Date()
      const fmt = now.toLocaleTimeString('cs-CZ', { timeZone: 'Europe/Prague' })
      setTime(fmt)
    }
    const id = setInterval(tick,1000)
    tick()
    return ()=> clearInterval(id)
  },[])

  return (
    <main>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-text">
            <h1>Contact</h1>
            <p>Right now im open to new projects, cooperations or contracts. You can contact me down there, I'll respond as soon as possible.</p>
          </div>
          <form action="https://formsubmit.co/b9f41be9df813e4a20f29319a61b5b96" method="post" className="contact-input">
            <div className="contact-input-half">
              <input type="text" name="name" placeholder="NAME" required />
              <input type="email" name="email" placeholder="EMAIL" required />
            </div>
            <div className="contact-input-full">
              <textarea name="message" placeholder="MESSAGE" required></textarea>
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
    </main>
  )
}
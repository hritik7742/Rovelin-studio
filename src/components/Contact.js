import React from 'react'
import './RovelinStudio.css'

function Contact() {
  return (
    <div>
         <section className="contact">
         <h2 style={{textAlign:"center",color:"white"}}>Contact Form</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="submit" className="cta">Send</button>
          </form>
        </section>
    </div>
  )
}

export default Contact
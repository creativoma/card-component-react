import React from 'react'

import '../css/components.css'
import foto from '../image/person-image.png'
import iconEmail from '../image/mail-icon.svg'

const developerCard = {
  name: 'Laura Smith',
  title: 'Full Stack Developer',
  website: 'laurasmith.dev'
}

export default function Info() {
    return (
      <section id="info">
        <img src={foto} />
        <h1>{developerCard.name}</h1>
        <h3>{developerCard.title}</h3>
        <a href="/">{developerCard.website}</a>
        <button><img src={iconEmail} alt=""/> Email</button>
      </section>
   )
}
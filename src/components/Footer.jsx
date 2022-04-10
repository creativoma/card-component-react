import '../css/components.css'

import iconGithub from '../image/github-icon.svg'
import iconLinkedin from '../image/linkedin-icon.svg'
import iconFacebook from '../image/facebook-icon.svg'
import iconInstagram from '../image/instagram-icon.svg'
import iconTwitter from '../image/twitter-icon.svg'



export default function Footer() {
  return (
    <section id="footer">
      <img src={iconTwitter} alt="Twitter" />
      <img src={iconFacebook} alt="" />
      <img src={iconInstagram} alt="" />
      <img src={iconLinkedin} alt="" />
      <img src={iconGithub} alt="" />
    </section>
  )
}

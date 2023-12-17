import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className='ngen__footer section__padding'>
      <div className='ngen__footer-heading'>
        <h1 className='gradient__text'>Ready to Secure Tomorrow, Today?</h1>
      </div>
      <div className='ngen__footer-btn'>
        <p>Get Advanced Cybersecurity</p>
      </div>

      <div className='ngen__footer-links'>
        <div className='ngen__footer-links_logo'>
          <img src={gpt3Logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
        </div>
        <div className='ngen__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='ngen__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='ngen__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='ngen__footer-copyright'>
        <p>© 2023 NexGen. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
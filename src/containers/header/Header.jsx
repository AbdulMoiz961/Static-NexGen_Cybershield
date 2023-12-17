import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import lock from '../../assets/lock.png'

// import cyber from '../../assets/cyber.png'

const Header = () => {
  return (
    <div className='ngen__header section__padding' id='home'>
      <div className='ngen__header-content'>
        <h1 className='gradient__text'>
          Protect Your Company from Cyber Attacks.
        </h1>
        <p>
        Welcome to NexGen CyberShield – your ultimate defense against digital threats. Our AI-powered suite provides real-time protection with military-grade encryption, behavioral analytics, and a user-friendly dashboard. Experience the future of cybersecurity with confidence and resilience. 
        </p>
        <div className='ngen__header-content__input'>
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='ngen__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested our services in last 24 hours</p>
        </div>
      </div>
      <div className='ngen__header-image'>
          <img src={lock} alt="lock" />
      </div> 
    </div>
  )
}

export default Header
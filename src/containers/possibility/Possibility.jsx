import React from 'react'
import './possibility.css'
import impossibleImage from '../../assets/impossibleImage.png'

const Possibility = () => {
  return (
    <div className='ngen__possibility section__padding' id='possibility'>
      <div className='ngen__possibility-image'>
        <img src={impossibleImage} alt="possibility" />
      </div>
      <div className='ngen__possibility-content'>
        <h4>Request Early Access to Strengthen Your Digital Defense.</h4>
        <h1 className='gradient__text'>Empower Your Security with AI-Powered Excellence</h1>
        <p>Elevate your digital journey with NexGen CyberShield's dynamic AI-driven defense. From thwarting every threat to securing each interaction, our cybersecurity excellence is powered by cutting-edge AI technology. Join us in shaping a safeguarded future through innovation and resilience.</p>
        <h4>Request Early Access to Strengthen Your Digital Defense.</h4>
      </div>
    </div>
  )
}

export default Possibility
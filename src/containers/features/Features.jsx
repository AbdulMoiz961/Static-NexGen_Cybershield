import React from 'react'
import { Feature } from '../../components'
import './features.css'

const featuresData = [
  {
    title: 'Instant Threat Resolution',
    text: 'NexGen CyberShield swiftly addresses and resolves cybersecurity threats. Our advanced technology ensures immediate action against potential risks.'
  },

  {
    title: 'Active Defense Strategies',
    text: 'NexGen CyberShield actively defends your digital landscape. Benefit from proactive measures, ensuring continuous protection against evolving threats.'
  },

  {
    title: 'Zero-Compromise Security',
    text: 'NexGen CyberShield leaves no room for compromise. Unrivaled protection, where every message, action, and interaction is secured with the utmost diligence.'
  },

  {
    title: 'Robust Cyber Law Enforcement',
    text: 'NexGen CyberShield acts as the vigilant enforcer of cyber laws. In the digital county of cybersecurity, our solutions make sure every law is upheld for uncompromised safety.'
  }
]

const Features = () => {
  return (
    <div className='ngen__features section__padding' id='features'>
      <div className='ngen__features-heading'>
        <h1 className='gradient__text'>Securing Tomorrow, Today. Step into Cyber Resilience with NexGen CyberShield.</h1>
        <p>Request Early Access to Strengthen Your Digital Defense.</p>
      </div>
      <div className='ngen__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
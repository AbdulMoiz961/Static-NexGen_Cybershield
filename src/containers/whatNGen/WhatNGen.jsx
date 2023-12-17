import React from 'react'
import './whatNGen.css'
import { Feature } from '../../components'

const WhatNGen = () => {
  return (
    <div className='ngen__whatngen section__margin' id='wngen'>
      <div className='ngen__whatngen-feature'>
        <Feature title="What is NexGen?" text="NexGen CyberShield is the pinnacle of cybersecurity innovation. AI-driven threat detection, military-grade encryption, and intuitive management redefine digital protection. Embrace resilience with real-time defense in a user-friendly suite. This is cybersecurity evolved."/>
      </div>
      <div className='ngen__whatngen-heading'>
        <h1 className='gradient__text'>Unlock Limitless Security Potential with NexGen</h1>
        <p>Explore the library</p>
      </div>
      <div className='ngen__whatngen-container'>
        <Feature title="Threat Intelligence" text="Elevate your security posture with NexGen's advanced threat intelligence. Real-time insights for active defense against evolving cyber threats."/>
        <Feature title="Cyber Knowledge" text="Empower your team with NexGen's comprehensive cybersecurity knowledgebase. Stay ahead in the digital landscape with up-to-date information and resources."/>
        <Feature title="Innovative Training" text="Immerse yourself in NexGen's cutting-edge educational platform. Elevate your team's skills and cybersecurity awareness for a safer digital future."/>
      </div>
    </div>
  )
}

export default WhatNGen
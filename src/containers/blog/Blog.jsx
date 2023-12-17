import React from 'react'
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='ngen__blog section__padding' id='blog'>
      <div className='ngen__blog-heading'>
        <h1 className='gradient__text'>Stay Ahead of Cyber Dynamics with Our Updates.</h1>
      </div>
      <div className='ngen__blog-container'>
        <div className='ngen__blog-container_groupA'>
          <Article imgUrl={blog01} date="May 29, 2021" title="Decoding the Cyber Threat Landscape: A NexGen Insight" />
        </div>
        <div className='ngen__blog-container_groupB'>
          <Article imgUrl={blog02} date="Sep 15, 2022" title="AI in Cybersecurity: NexGen's Pioneering Approach" />
          <Article imgUrl={blog03} date="Nov 03, 2021" title="The Rising Tide of Ransomware: NexGen's Defense Strategies" />
          <Article imgUrl={blog04} date="Jan 18, 2023" title="NexGen's Cyber Resilience Blueprint: Building a Secure Future" />
          <Article imgUrl={blog05} date="Aug 07, 2022" title="Securing the Internet of Things: NexGen's Vision for a Connected World" />
        </div>
      </div>
    </div>
  )
}

export default Blog
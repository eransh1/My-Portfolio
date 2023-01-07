import React from 'react'
import "../css/Experiences.css"

const Experiences = () => {
  return (
   <section id='experiences'>
    <h1 className='experiences_heading'>Experiences</h1>
    <div className='experince-cont'>
        <div className='experince-time-spent-cont'>
        <h2 className='experince-time-spent'>Nov 2022-Jan 2023</h2>
        </div>
        <div><div className='bulb-cont'></div></div>
        
        <div className='experince-info-cont'>
            <h2 className='experience-title'>Front-End-Intern</h2>
            <p className='experience-company-name'>StartUp Company</p>
            <div className='experince-work-cont'>
                <ol>
                    <li className='experience-list'>Create clean and well-tested React components according to specifications using React.js.</li>
                    <li className='experience-list'>Building reusable components and front-end libraries for future use.</li>
                    <li className='experience-list'>Work closely with the design team to reproduce the design flawlessly and translating designs and wireframes into high-quality code.</li>
                    <li className='experience-list'>Interact with the back-end team to integrate the front-end with the Node.js back-end.</li>
                    <li className='experience-list'>Work on adhering to the company's version control protocols religiously.</li>
                </ol>
            </div>

        </div>
    </div>
   </section>
  )
}

export default Experiences
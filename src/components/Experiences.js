import React from 'react'
import { useSelector } from 'react-redux'
import "../css/Experiences.css"

const Experiences = () => {

    const userDoc=useSelector((state)=>state.userDoc) 

  return (
   <section id='experiences'>
    <h1 className='experiences_heading'>Experiences</h1>
    {userDoc?.experience?.map((data)=>{

        return <div className='experince-cont'>
        <div className='experince-time-spent-cont'>
        <h2 className='experince-time-spent'>{data.from}-{data.to}</h2>
        </div>
        <div><div className='bulb-cont'></div></div>
        
        <div className='experince-info-cont'>
            <h2 className='experience-title'>{data.designation}</h2>
            <p className='experience-company-name'>{data.companyName}</p>
            <div className='experince-work-cont'>
                <ol>
                {data.responsibility.map((item)=>{
                    return <li className='experience-list'>{item}</li>
                })}
                </ol>
            </div>

        </div>
    </div>
    })}
    
   </section>
  )
}

export default Experiences
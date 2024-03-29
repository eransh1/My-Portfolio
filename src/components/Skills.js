import React from 'react'
import { useSelector } from 'react-redux'
import "../css/Skills.css"


const Skills = () => {

  const userDoc=useSelector((state)=>state.userDoc)
  
  return (
    <section id='skills'>
        <h2 className='skill-title'>My Skills</h2>
        <div className="row skills-row">
        {userDoc?.skillData?.map((item)=>{
          return <div className="col-sm-12 col-md-6 col-lg-3 skill-col" key={item.id}>
                <img className='skill-img' src={item.img} alt="react-img" />
                <h4 className='skill-name'>{item.title}</h4>
            </div>
        })}
        </div>
    </section>
  )
}

export default Skills
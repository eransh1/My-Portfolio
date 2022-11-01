import React from 'react'
import "../css/Projects.css"
import projectData from "./ProjectData"

const Projects = ({setProjectInfo}) => {

function handleInfoClick(item){
    setProjectInfo(item)
}


  return (   
   <section id='projects'>
    <h2 className='project-title'>Portfolio</h2>
    <div className="row project-row">
    {projectData.map((item)=>{
        return (<>
            <div className="col-sm-12 col-md-6 col-lg-4 project-col" key={item.id}>
        <img className='project-img' src={item.img} alt="react-img" />
        <h4 className='project-name'>{item.title}</h4>
        <div className='linkssss'>
        <button onClick={()=>handleInfoClick(item)} className='info-link'>INFO</button>
        <a className='project-link' href={item.link}>VISIT</a>
        </div>
    </div>
        </>)
    })}
    
    </div>
   </section>
  )
}

export default Projects
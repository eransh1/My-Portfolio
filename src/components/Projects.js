import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "../css/Projects.css"


const Projects = ({setProjectInfo}) => {
const userDocProjectData=useSelector((state)=>state.userDoc.projectData)
const[projectArray,setProjectArray]=useState([])

useEffect(()=>{
    if(userDocProjectData){
        let tempArr=[]
        userDocProjectData.map((data)=>{return tempArr.unshift(data)})
        // console.log("tempArr",tempArr)
        setProjectArray(tempArr)
 
    }

},[userDocProjectData])

function handleInfoClick(item){
    setProjectInfo(item)
}


  return (   
   <section id='projects'>
    <h2 className='project-title'>Portfolio</h2>
    <div className="row project-row">
    {projectArray?.map((item)=>{
        return (<>
            <div className="col-sm-12 col-md-6 col-lg-4 project-col" key={item.id}>
        <img className='project-img' src={item.img} alt="react-img" />
        <h4 className='project-name'>{item.title}</h4>
        <div className='linkssss'>
        <button onClick={()=>handleInfoClick(item)} className='info-link'>INFO</button>
        <a className='project-link' href={item.link} target="_blank" rel="noreferrer">VISIT</a>
        </div>
    </div>
        </>)
    })}
    
    </div>
   </section>
  )
}

export default Projects
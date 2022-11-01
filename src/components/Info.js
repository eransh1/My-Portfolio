import React from 'react'
import "../css/Info.css"

const Info = ({projectInfo,setProjectInfo}) => {

 function handleCloseInfoClick(){
    setProjectInfo(null)
 } 
    
  return (
    <section id='info'>
        <div className='info'>
            <h1 className='info-item-title'>{projectInfo.title}
            <button onClick={()=>handleCloseInfoClick()} className='close-link'><i className="fa-solid fa-xmark"></i></button>
            </h1>
            <ul className='info-cont'>
                {projectInfo.info.map((item)=>{
                    return <li>{item}</li>
                })}
            </ul>
            <div className='extra-link-cont'>
            {projectInfo.gDocsLink?<a className='googleDocLink' href={projectInfo.gDocsLink}><i className="fa-solid fa-link"></i></a>:null}
            {projectInfo.videoLink?<a className='videoLink' href={projectInfo.videoLink}><i className="fa-solid fa-video"></i></a>:null}
            </div>
            <div className='skills-cont'>
            <div className='row'>
                {projectInfo.skills.map((item)=>{
                    return <div className='col-3 skill-name'>{item}</div>
                })}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Info
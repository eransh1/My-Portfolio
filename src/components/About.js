import React from 'react'
import "../css/About.css"
import Myimage from "../images/Myimage2.png"



const About = () => {
  return (
    <>
   <section id='about'>
    <div className='row about-row'>
        <div className="col-sm-12 col-md-12 col-lg-6 about-col-left">
            <h1 className='about-h1'>I'M <span className='about-span'>Ansh Bansal</span></h1>
            <p className='about-p'>Frontend Developer</p>
            <a href="#contact"><button className='download-cv'>Contact Me</button></a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6 about-col-right">
            <div className='my-image'>
                <img className='my-imagee' src={Myimage} alt="my-photo" />
                <div className='linkss'>
                <hr className='line' />
                <a className='linkss-link' href="https://github.com/eransh1"><i className="fa-brands fa-github"></i></a>
                <a className='linkss-link' href="https://www.linkedin.com/in/ansh-bansal-697562107"><i className="fa-brands fa-linkedin"></i></a>
                <a className='linkss-link' href="mailto:eranshbansal@gmail.com"><i className="fa-solid fa-envelope"></i></a>
            </div>
            </div>
            
        </div>
    </div>

    
   </section>
   <div className='about-intro'>
        <div className='row about-row'>
            <div className="col-sm-12 col-md-1 col-sm-1 intro-col-left">
                <h2 className='about-intro-about'>About</h2>
                <hr  className='hr-line'/>
            </div>
            <div className="col-sm-12 col-md-11 col-sm-11 intro-col-right">
                <p className='about-intro-text'>My name is Ansh Bansal. I am a frontend developer based in Punjab,focused on creating scalable frontend products with great user experinces.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default About
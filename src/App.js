import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Info from './components/Info'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Experiences from './components/Experiences'

const App = () => {

  const[projectInfo,setProjectInfo]=useState(null)

  console.log(projectInfo)

  return (
   <>
   
<ToastContainer />
<Navbar />
<About />
<Skills />
<Projects setProjectInfo={setProjectInfo} />
{projectInfo?<Info projectInfo={projectInfo} setProjectInfo={setProjectInfo} />:null}
<Experiences/>
<Contact />
   </>
  )
}

export default App
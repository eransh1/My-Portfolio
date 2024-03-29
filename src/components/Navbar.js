import React,{useState,useEffect} from 'react'
import "../css/Navbar.css"
import "../augustina font/style.css"
import { useSelector,useDispatch } from 'react-redux'
import { setUserDoc } from '../store/userDocSlice'
import { addDoc, collection, doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import {db} from "../firebase"


const Navbar = () => {
const dispatch=useDispatch()
const [userDocData,setUserDocData]=useState(null)
const userDoc=useSelector((state)=>state.userDoc)


// console.log(userDoc,"userDoc")

//GET DATA FROM FIREBASE

useEffect(() => {
  async function fetchUserDocFromFirebase(){
    const userDataRef = collection(db,"Users");
    const q = query(userDataRef);
    const querySnapshot = await getDocs(q);
   
    querySnapshot.forEach((doc) => {
      
      if(doc.id==="eranshbansal@gmail.com"){
        setUserDocData({...doc.data(),id:doc.id}) 
      }
    
    }); 
  }
fetchUserDocFromFirebase()
}, [])

//ADDING USERDOC DATA TO STORE
useEffect(()=>{
if (userDocData) {
dispatch(setUserDoc(userDocData))
}
},[userDocData])

useEffect(()=>{
  const updateFirebase=async()=>{ 
    const userDocumentRef=doc(db,"Users","eranshbansal@gmail.com")
  await updateDoc(userDocumentRef,{}).then(()=>{console.log("updated")})
  }
  // updateFirebase()
},[])

//Adding Scrooling Event  
const[isScroll,setIsScroll]=useState(false)

  const change = () =>{
    if(window.scrollY >= 80){
      setIsScroll(true)
    }
    else{
      setIsScroll(false)
    }
 };
 window.addEventListener('scroll', change);



  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-cont" id='navbar-conttt'>
  <div className="container-fluid">
    <h2 id="brand-home" className="navbar-brand"><span class="grey-left"> &lt;</span>Ansh Bansal<span class="grey-right">/&gt;</span></h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-ul">
      <div className='nav-itemss'>
      <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#projects">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#experiences">Experiences</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#contact">Contact</a>
        </li>
      </div>
        
      </ul>
      <a href={userDoc?.resume} target="_blank"><button className='download-cv'>Download CV</button></a>
    </div>
  </div>
</nav>

{isScroll?<a href="#brand-home"><div className='circlee'><i className="fa-solid fa-arrow-up"></i></div></a>:null}
    </>
  )
}

export default Navbar
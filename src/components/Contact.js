import React, { useState } from 'react'
import "../css/Contact.css"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "@emailjs/browser";
import spinner from "../images/WHITE Spinner-1s-343px.svg"

const Contact = () => {
const[contactData,setContactData]=useState({name:"",email:"",message:""})
const[loading,setLoading]=useState(false)

function handleFormInputChange(e){
  const{name,value}=e.target
  setContactData((prev)=>{
    return {...prev,[name]:value}
  })
}



// connect with firebase
const submitData = async (event) => {
  event.preventDefault();
  setLoading(true)
  const { name, email,message } = contactData;
if(!name||!email||!message){
  toast.error("Plz fill the data");
  setLoading(false)
  return
}
  // if (name && email && message) {
  //   const res = fetch(
  //     "https://porfoliodata-default-rtdb.firebaseio.com/ContactMeRecords.json",
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name,
  //         email,
  //         message,
  //       }),
  //     }
  //   );

  //   if (res) {
  //     setContactData({
  //       name:"",
  //       email: "",
  //       message: "",
  //     });
  //     toast("Message Send");
  //   } else {
  //     toast("Error plz fill the data again");
  //   }
  // } else {
  //   toast("Plz fill the data");
  // }
  let templateParams = {
    from_name: name,
    from_email:email,
    message
  };

  try {
    const response=await emailjs
     .send(
       process.env.REACT_APP_EMAIL_js_SERVICE_ID,
       process.env.REACT_APP_EMAIL_js_TEMPLATE_ID,
       templateParams,
       process.env.REACT_APP_EMAIL_js_SECRET_KEY
     )
    //  console.log("SUCCESS!", response.status, response.text); 
    setContactData({
            name:"",
            email: "",
            message: "",
          }); 
          setLoading(false)  
     toast.success("Message Send");
   } catch (error) {
     console.log(error);
     toast.error(error?.text);
     setLoading(false)
   }


};


  return (
    <>
        <section id='contact'>
        <h2 className='contact-title'>Contact Me</h2>
        <div className="row contact-row">
          <div className="col-sm-12 col-md-6 col-lg-6 contact-left-col">
            <p className='contact-about'>Hello there, feel free to contact me any time.I will get back to you within two business days and if it's urgent , my social handle would be better in situation like this.</p>
          <p className='contact-email'>Email : eranshbansal@gmail.com</p>
          <div className='social-handle'>
          <a className='linkss-linkk' href="https://github.com/eransh1"><i className="fa-brands fa-github"></i></a>
          <a className='linkss-linkk' href="https://www.linkedin.com/in/ansh-bansal-697562107"><i className="fa-brands fa-linkedin"></i></a>
          <a className='linkss-linkk' href="mailto:eranshbansal@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 contact-right-col">
            <form className='contact-form'>
              <input onChange={handleFormInputChange} type="text" name='name' id='name' placeholder='Your Name' value={contactData.name} />
              <input onChange={handleFormInputChange} type="text" name='email' id='email' placeholder='Your Email' value={contactData.email} />
              <textarea onChange={handleFormInputChange} name="message" id="message" rows="3" placeholder='Your Message' value={contactData.message}></textarea>
              <button disabled={loading} onClick={submitData} type="submit" className='send-button'>{loading ? (
                      <img
                        className="spinner_contact_us"
                        src={spinner}
                        alt="loader"
                      />
                    ) : (
                      "Send"
                    )}</button>
            </form>
          </div>
        </div>
        </section>
    </>
  )
}

export default Contact
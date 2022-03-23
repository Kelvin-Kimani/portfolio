import React, { useRef, useState } from 'react'
import { images } from '../../constants'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import './Footer.scss'


const Footer = () => {

  const form = useRef();
  const [fullName, setFullName] = useState('')
  const [emailAddress, setEmailAddress] = useState('')
  const [message, setMessage] = useState('')
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    setLoading(true);
    
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(() => {
          setIsFormSubmitted(true);
          console.log("Message sent successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );

  }

  return (
    <>
      <div className='app__footer-wrapper' id='contact'>

        <h2 className='head-text'>Take a <span>coffee</span> & chat with me</h2>

        <div className='app__footer-cards'>

            <div className='app__footer-card'>
                <img src={images.email} alt='email'/>
                <a href='mailto:kelvinkim996@gmail.com' className='p-text'>kelvinkim996@gmail.com</a>
            </div>

            <div className='app__footer-card'>
                <img src={images.mobile} alt='mobile'/>
                <a href='tel: +254790838747' className='p-text'>+254790838747</a>
            </div>
          
        </div>
        
        {!isFormSubmitted ? 
        
            <form ref={form} onSubmit={handleSubmit} className='app__footer-form app__flex'>
            <div className='app__flex'>
              <input className='p-text' type='text' name='fullName' placeholder='Full Names' required value={fullName} onChange={(e) => setFullName(e.target.value)}/>
            </div>

            <div className='app__flex'>
              <input className='p-text' type='email' name='emailAddress' placeholder='Email Address' required value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)}/>
            </div>

            <div>
              <textarea className='p-text' name='message' placeholder='Your Message' value={message} required onChange={(e) => setMessage(e.target.value)}/>
            </div>
            <button type='submit'>{ loading ? 'Sending...' : 'Send Message'}</button>
          </form>
      : 
          <motion.div 
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='success-message'
          >
            <h3 className='head-text'>Thank you for reaching out!</h3>
          </motion.div>
      } 
        
      </div>



      <footer className="rights">
          <p className="p-text">All Rights Reserved  &copy; {new Date().getFullYear()}</p>
          <p className="p-text">Design and Developed by Kelvin Kimani</p>
        </footer>

        
    </>
  )
}

export default Footer
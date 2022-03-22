import React from 'react'
import { images } from '../../constants'

import './Footer.scss'

const Footer = () => {
  return (
    <>
      <div className='app__footer-wrapper'>

        <h2 className='head-text' id='contact'>Take a <span>coffee</span>& chat with me</h2>

        <div className='app__footer-cards'>

            <div className='app__footer-card'>
                <img src={images.email} alt='email'/>
                <a href='mailto:kelvinkimaniapps@gmail.com' className='p-text'>kelvinkimaniapps@gmail.com</a>
            </div>

            <div className='app__footer-card'>
                <img src={images.mobile} alt='mobile'/>
                <a href='tel: +254790838747' className='p-text'>+254790838747</a>
            </div>
          
        </div>
        
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Full Names'/>
          </div>

          <div>
            <textarea className='p-text' placeholder='Your Message' />
          </div>
          <button type='button' className='p-text'>Send Message</button>
        </div>
        


        <div className="rights">
          <p className="p-text">All Rights Reserved  &copy; {new Date().getFullYear()}</p>
          <p className="p-text">Design and Developed by Kelvin Kimani</p>
        </div>

      </div>
    </>
  )
}

export default Footer
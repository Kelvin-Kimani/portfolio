import React, { useState } from 'react'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion'
import './Navbar.scss'

import { images } from '../../constants'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>
      
      <div className='app__navbar-logo'>
        <a href='#home'>
          <img src={images.logo} alt="logo"/>
        </a>
      </div>
      
      <ul className='app__navbar-links'>
        {['home', 'skills', 'projects', 'about', 'contact'].map((item) => (
            <li className='app__flex p-text' key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
        ))}
      </ul>

      <div className='app__navbar-accounts'>
        <a href='https://github.com/Kelvin-Kimani' target="_blank" rel="noopener noreferrer">
          <AiFillGithub size="2rem"/>
        </a>


        <a href='https://www.linkedin.com/in/kelvinkimani' target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size="2rem"/>
        </a>

      </div>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          
          { toggle && (
              <motion.div
                whileInView={{ x: [300, 0] }}
                transition={{ duration: 0.85, ease: 'easeInOut' }}
              >
                <HiX onClick={() => setToggle(false)}/>
                <ul>
                  {['home', 'skills', 'projects', 'about', 'contact'].map((item) => (
                    <li key={item}>
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                  ))}

                </ul>                            
                <a href='https://github.com/Kelvin-Kimani'>
                      <AiFillGithub size="2rem"/>
                </a>

                <a href='https://www.linkedin.com/in/kelvinkimani'>
                      <AiFillLinkedin size="2rem"/>
                </a>
              </motion.div>
            )}
      </div>
    </nav>
  )
}

export default Navbar
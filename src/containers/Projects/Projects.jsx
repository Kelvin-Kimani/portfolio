import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { projects } from '../../constants'
import { motion } from 'framer-motion'

import './Projects.scss'

const Projects = () => {

  return (
    <>

      <div className='app__projects-wrapper' id='projects'>
        
          <h2 className='head-text'>Projects</h2>
          
          <motion.div
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__project-portfolio">


            {projects.map((project, index) => (
              <div className="app__project-item app__flex" key={index}>
                <div
                  className="app__project-img app__flex"
                >
                  <img src={project.image} alt={project.name} />

                  <motion.div
                    whileHover={{ opacity: [0, 1] }}
                    transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                    className="app__project-hover app__flex"
                  >
                    <a href={project.visit} target="_blank" rel="noreferrer">
                      <motion.div
                        whileInView={{ scale: [0, 1] }}
                        whileHover={{ scale: [1, 0.90] }}
                        transition={{ duration: 0.25 }}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </motion.div>
                    </a>
                  </motion.div>
                </div>

                <div className="app__project-content app__flex">
                  <h4 className="bold-text">{project.title}</h4>
                  <p className="p-text" style={{ marginTop: 10 }}>{project.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
      </div>
      
    </>
  )
}

export default Projects
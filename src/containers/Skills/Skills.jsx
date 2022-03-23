import React from 'react'
import { motion } from 'framer-motion'
import { experiences, skills } from '../../constants'
import { devops } from '../../constants/skills'

import './Skills.scss'

const Skills = () => {
  return (
    <>

    <div className='app__skills-wrapper' id='skills'>

      <h2 className="head-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        
        <div className="app__skills-exp">
            {experiences.map((experience) => (
              <motion.div
                className="app__skills-exp-item"
                key={experience.year}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{experience.year}</p>
                </div>
                <motion.div className="app__skills-exp-works">
                  {experience.works.map((work, index) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={work.name}
                        key={index}
                      >
                        <h4 className="bold-text">{work.name}</h4>
                        <p className="p-text">{work.company}</p>
                        <p className='description'>{work.desc}</p>
                      </motion.div>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
        

        <div className='app__skills-languages-devops'>

            <h4>Languages & Frameworks</h4>
            
            <motion.div className="app__skills-list">    
              {skills.map((skill, index) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={index}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={skill.src} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </motion.div>

            <h4>DevOps</h4>

            <motion.div className="app__skills-list">    
              {devops.map((devopsSkill, index) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={index}
                >
                  <div
                    className="app__flex"
                    style={{ backgroundColor: devopsSkill.bgColor }}
                  >
                    <img src={devopsSkill.src} alt={devopsSkill.name} />
                  </div>
                  <p className="p-text">{devopsSkill.name}</p>
                </motion.div>
              ))}

            </motion.div>
        </div>



      </div>

    </div>
      
    </>
  )
}

export default Skills
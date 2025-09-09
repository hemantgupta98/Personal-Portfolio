import './About.css'
import React from 'react'
import { assets } from '../assets/Images/asstes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUser } from '@fortawesome/free-solid-svg-icons'

const About = () => {
      return (
            <>
                  <div className="about">
                        <div className="about-section">
                              <h1><FontAwesomeIcon icon={faUser} /> About <span>Me</span></h1>
                        </div>
                        <div className="about-img">
                              <img src={assets.hemant} alt="" />
                        </div>
                        <div className="about-text">
                              <div className="text-content">
                                    <h1>I'm Hemant</h1>
                                    <p className="role">Full Stack Developer</p>
                                    <p>I am a Full-Stack developer based in Ranchi, India. I am
                                          an BCA(Bachlero of computer application) pre-final year Student
                                          from Jharkhand Rai University Ranchi. I am very passionate about
                                          improving my coding skills  developing websites. I build Websites using MERN
                                          Stack and full-Stack. Working for myself to improve my skills. Love to
                                          build full-Stack clones.
                                    </p>
                                    <p className="email">Email : <span>hemantgupta8800@gmail.com</span></p>
                                    <p className="place">Place : <span>Ranchi, India</span></p>
                                    <div className="btn">
                                          <button>Resume <FontAwesomeIcon icon={faAngleRight} /></button>
                                    </div>
                              </div>

                        </div>

                  </div>
            </>
      )
}

export default About
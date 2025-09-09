import './Main.css'
import React from 'react'
import { assets } from '../assets/Images/asstes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
      return (
            <>
                  <div className="eductaion">
                        <div className="education-tag">
                              <h1><FontAwesomeIcon icon={faDesktop} /> My <span>Education</span></h1>
                        </div>
                        <div className="education-tag-2">
                              <p>Chase Excellence Success Will Follow You! </p>
                        </div>

                        <div className="education-content">

                              <div id='both-content' className="jru-content">
                                    <div className="jru-img">
                                          <img id='education-img' src={assets.jru} alt="" />
                                    </div>
                                    <div className="jru-text">
                                          <h1>Bachelor Of Computer Application
                                                (Information Technology)
                                          </h1>
                                          <p>Jharkhand Rai Universtiy | JRU, Ranchi</p>
                                          <p className="year">2024-2027 | Pursuing</p>
                                    </div>
                              </div>
                              <div id='both-content' className="annada-content">
                                    <div className="annada-img">
                                          <img id='education-img' src={assets.annada} alt="" />
                                    </div>
                                    <div className="annada-text">
                                          <h1>Intermediate Schooling</h1>
                                          <h1>Commerce</h1>
                                          <p>Annada Collage Hazaribagh | ACH, Hazaribagh</p>
                                          <p className="year-2">
                                                2022-2024 | Completed
                                          </p>
                                    </div>
                              </div>
                        </div>
                  </div>
            </>

      )
}

export default Main
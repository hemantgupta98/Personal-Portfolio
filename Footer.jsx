import './Footer.css'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faEnvelope, faLocation, faLocationDot, faMap, faPhone, faLink, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const footer = () => {
      return (
            <>
                  <div className="footer">
                        <div className="footer-tag">
                              <div className="footer-tag-text">
                                    <h1>Hemant's Portfolio</h1>
                                    <p>Thank you for visting my personal portfolio website.</p>
                                    <p>Connect with me over socials.</p>
                              </div>
                        </div>
                        <div className="footer-link">
                              <div className="footer-link-heading">
                                    <h1>Quick Links</h1>
                              </div>
                              <div className="links">
                                    <p><span><FontAwesomeIcon icon={faAngleRight} /></span>  Home</p>
                                    <p><span><FontAwesomeIcon icon={faAngleRight} /></span>  About</p>
                                    <p><span><FontAwesomeIcon icon={faAngleRight} /></span>  Skill</p>
                                    <p><span><FontAwesomeIcon icon={faAngleRight} /></span>  Education</p>
                                    <p><span><FontAwesomeIcon icon={faAngleRight} /></span>  Contact</p>
                              </div>
                        </div>
                        <div className="footer-contact">
                              <div className="contact-heading">
                                    <h1>Contact Info</h1>
                              </div>
                              <div className="contact-detail">
                                    <p><span><FontAwesomeIcon icon={faPhone} /></span> +91 9867742834</p>
                                    <p><span><FontAwesomeIcon icon={faEnvelope} /></span> hemantgupta8800@gmail.com</p>
                                    <p><span><FontAwesomeIcon icon={faLocationDot} /></span> Ranchi,India-834010</p>
                              </div>
                        </div>
                        <div className="footerend">
                              <div className='div'>
                                    <div className="content">
                                          <p>Designed  by <span>Hemant Gupta</span></p>
                                    </div>
                              </div>

                        </div>
                  </div >
            </>
      )
}

export default footer
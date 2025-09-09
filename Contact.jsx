import './Contact.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faUser, faHeadSideCough, faHeadSideMask, faHeadphones, faHeadphonesAlt, faHeadphonesSimple, faHeadset, faVoicemail, faMailBulk, faEnvelope, faPhone, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons'



const Contact = () => {

      return (
            <div className="contact">
                  <div className="contact-tag">
                        <h1><FontAwesomeIcon icon={faHeadset} /> Get <span>In Touch</span></h1>
                  </div>
                  <div className="main-contact">
                        <div className="contact-form">
                              <div id='box' className="name">
                                    <FontAwesomeIcon icon={faUser} />   <input type="text" placeholder='Name' />
                              </div>
                              <div id='box' className="email">
                                    <FontAwesomeIcon icon={faEnvelope} />  <input type="email" name="email" placeholder='Email' />
                              </div>


                              <div id='box' className="phone">
                                    <FontAwesomeIcon icon={faPhone} />  <input type="number" name="number" placeholder='Phone' />
                              </div>
                              <div className="message">
                                    <textarea name="text" id='box' className='input'> Message</textarea>

                              </div>
                              <div className="btn">
                                    <button >Submit <FontAwesomeIcon icon={faPaperPlane} /></button>
                              </div>
                        </div>

                  </div>

            </div>
      )
}

export default Contact
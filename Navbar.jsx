import './Navbar.css'
import React, { useState } from 'react'
import { assets } from '../assets/Images/asstes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faList } from '@fortawesome/free-solid-svg-icons'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import _gsap from 'gsap/gsap-core'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Skill from '../Skill/Skill'
import Main from '../Main/Main'
import Contact from '../Contact/Contact'



const Navbar = () => {
      return (

            <>
                  <div className="main-header">

                        <div className="header">
                              <div className="header-content">
                                    <h1>Hemant</h1>
                              </div>
                              <div className="img-section">
                                    <ul>

                                          <li>About</li>
                                          <li>Skill</li>
                                          <li>Education</li>
                                          <li>Contact</li>

                                    </ul>
                              </div>

                        </div>
                        <div className="person-section">
                              <div className="person">
                                    <div className="person-img">
                                          <img src={assets.person} alt="" />
                                    </div>
                              </div>
                              <div className="text">
                                    <h1>Hi There,</h1>
                                    <h1>I'm Hemant <span>Gupta</span></h1>
                                    <p className='work'>I am Into <span className='span-1'>Full Stack Development</span></p>
                              </div>
                              <div className="btn">
                                    <button>About Me <FontAwesomeIcon icon={faAngleDown} /></button>
                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Navbar
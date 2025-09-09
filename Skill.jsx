import './Skill.css'
import React from 'react'
import { assets } from '../assets/Images/asstes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faCodeBranch } from '@fortawesome/free-solid-svg-icons'


const Skill = () => {
      return (
            <>
                  <div className="skill">
                        <div className="skill-heading">
                              <h1><FontAwesomeIcon icon={faCode} />  Skill & Ability</h1>
                        </div>
                        <div className="skill-item">
                              <div className="skill-content">
                                    <div className="A">
                                          <div id="skill" className="skill-1">
                                                <img id='img' src={assets.python_icon} alt="" />
                                                <h1 id='h1'>Pyhton</h1>
                                          </div>
                                          <div id="skill" className="skill-2">
                                                <img id='img' src={assets.js_icon} alt="" />
                                                <h1 id='h1'>Java Script</h1>
                                          </div>
                                          <div id="skill" className="skill-3">
                                                <img id='img' src={assets.css_icon} alt="" />
                                                <h1 id='h1'>CSS</h1>
                                          </div>
                                          <div id="skill" className="skill-4">
                                                <img id='img' src={assets.html_icon} alt="" />
                                                <h1 id='h1'>HTML</h1>
                                          </div>
                                    </div>
                                    <div className="B">
                                          <div id="skill" className="skill-5">
                                                <img id='img' src={assets.chakra_icon} alt="" />
                                                <h1 id='h1'>Chakra UI</h1>
                                          </div>
                                          <div id="skill" className="skill-6">
                                                <img id='img' src={assets.tailwind_icon} alt="" />
                                                <h1 id='h1'>Tailwind CSS</h1>
                                          </div>

                                          <div id="skill" className="skill-7">
                                                <img id='img' src={assets.bootstrap_icon} alt="" />
                                                <h1 id='h1'>Bootsrtap</h1>
                                          </div>
                                          <div id="skill" className="skill-8">
                                                <img id='img' src={assets.aws_icon} alt="" />
                                                <h1 id='h1'>AWS</h1>
                                          </div>
                                    </div>
                                    <div className="C">
                                          <div id="skill" className="skill-9">
                                                <img id='img' src={assets.express_icon} alt="" />
                                                <h1 id='h1'>Express Js</h1>
                                          </div>
                                          <div id="skill" className="skill-10">
                                                <img id='img' src={assets.node_icon} alt="" />
                                                <h1 id='h1'>Node Js</h1>
                                          </div>
                                          <div id="skill" className="skill-11">
                                                <img id='img' src={assets.mongodb_icon} alt="" />
                                                <h1 id='h1'>MongoDB</h1>
                                          </div>
                                          <div id="skill" className="skill-12">
                                                <img id='img' src={assets.mysql_icon} alt="" />
                                                <h1 id='h1'>MySQL</h1>
                                          </div>
                                    </div>
                                    <div className="D">
                                          <div id="skill" className="skill-13">
                                                <img id='img' src={assets.firebase_icon} alt="" />
                                                <h1 id='h1'>Fire Base</h1>
                                          </div>
                                          <div id="skill" className="skill-14">
                                                <img id='img' src={assets.redux_icon} alt="" />
                                                <h1 id='h1'>Redux</h1>
                                          </div>
                                          <div id="skill" className="skill-15">
                                                <img id='img' src={assets.react_icon} alt="" />
                                                <h1 id='h1'>React</h1>
                                          </div>
                                          <div id="skill" className="skill-16">
                                                <img id='img' src={assets.git_icon} alt="" />
                                                <h1 id='h1'>Github</h1>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </>
      )
}

export default Skill
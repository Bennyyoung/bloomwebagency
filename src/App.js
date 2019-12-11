import React, { useState } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import {NavbarToggler} from 'reactstrap'
import "./App.css"
import TextLoop from "react-text-loop"
import "animate.css/animate.min.css";
import profile from './images/profile.jpeg'
import BWA from './images/BWA_logo.jpg'

import portitem1 from './images/portitem1.jpeg'
import portitem2 from './images/portitem2.jpeg'
import portitem3 from './images/portitem3.jpeg'

const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const Toggle = () => setIsOpen(!isOpen);
    return (
          <div>
                <header>
                  <div className="menu-toggler" onClick={Toggle} isOpen={isOpen}> 
                    <div className="bar half start" onClick={Toggle} isOpen={isOpen} ></div>
                    <div className="bar" onClick={Toggle} isOpen={isOpen} ></div>
                    <div className="bar half end" onClick={Toggle} isOpen={isOpen} ></div>
                  </div>
                  
                  <nav className="top-nav" isOpen={isOpen}>
                    <ul className="nav-list" isOpen={isOpen}>
                    <ScrollAnimation
                      animateIn='fadeIn'
                      scrollableParentSelecor='#scrolly-div-animatePreScroll'
                      animatePreScroll={false}>
                        {/* <NavbarToggler onClick={Toggle} />
                        <li><a href="#Home" onClick={Toggle} className="nav-link">Home</a></li>
                        <li><a href="#about" onClick={Toggle} className="nav-link">About</a></li>
                        <li><a href="#services" onClick={Toggle} className="nav-link">Services</a></li>
                        <li><a href="#portfolio" onClick={Toggle} className="nav-link">Portfolio</a></li>
                        <li><a href="#experience" onClick={Toggle} className="nav-link">Experience</a></li>
                        <li><a href="#contact" onClick={Toggle}  className="nav-link">Contact</a></li>
                     */}
                     </ScrollAnimation>
                    </ul>
                  </nav>
                  <div className="landing-text">
                    <h1>BLOOM WEB AGENCY</h1>
                    <TextLoop interval={950}>
                    	<h6>We do <TextLoop>Web Design</TextLoop></h6>
                    	<h6><TextLoop>Web Development</TextLoop> </h6>
                    	<h6>and <TextLoop>Mobile Development</TextLoop> </h6>

                    </TextLoop>
                  </div>
                </header>
                
                  
            <ScrollAnimation animateIn='fadeIn'
                      scrollableParentSelecor='#scrolly-div-animatePreScroll'
                      animatePreScroll={false}>
              <section className="about" id="about">
                  <div className="container">
                    <div className="profile-img">
                      <img src={BWA} alt="" />
                    </div>
                    <div className="about-details">
                      <div className="about-heading">  
                          <h1>About</h1>
                          <h6>Us</h6>
                        </div>  
                          <p>Bloom Web Agency consist of a group of enthusiastic Frontend and Backend developers that design and develop Web and Mobile applications using the following Web technologies MongoDB, Express, React and Node (MERN stack) etc. Another web technology we make use is PHP
                          
                          </p>
                          <div className="social-media">
                          <ul className="nav-list">
                            <li>
                              <a href="https://www.facebook.com/Bloom-Web-Agency-107730554053669/" className="icon-link">
                                <i className="fab fa-facebook-square"></i>
                              </a>
                            </li>
                            <li>
                              <a href="https://www.instagram.com/bloomwebagency/" className="icon-link">
                                <i className="fab fa-instagram"></i>
                              </a>
                            </li>
                          </ul>
                  </div>
                      </div>
                    </div>
              </section>

              <section className="services" id="services">
                <div className="container">
                  <div className="section-heading">
                    <h1>Services</h1>
                    <h6>What we can do for you</h6>                    
                  </div>
                  <div className="my-skills">
                      <div className="skill">
                        <div className="icon-container">
                          <i className="fas fa-layer-group"></i>
                        </div>
                        <h1>Web Design & Development</h1>
                        <p>We create website and web apps of high quality that are highly responsive web friendly and mobile friendly using one of the best and fastest mobile technologies, the MERN stack(MongoDB, Express, React and Node) which is utilised in most upcoming industries</p>
                      </div>
                      <div className="skill">
                        <div className="icon-container">
                          <i className="fas fa-code"></i>
                        </div>
                        <h1>Mobile Development</h1>
                        <p>Well for mobile development we utilise most especially the React Native, a frontend library for writing native apps which is like saying react specifically designed for making mobile apps</p>
                      </div>
                  </div>
                </div>
              </section>

              <section className="portfolio" id="portfolio">
                <div className="container">
                  <div className="section-heaading">
                    <h1>Works</h1>
                    <h6>View some of our recent works</h6>
                  </div>
                  <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={portitem1} alt=""/>
                      </div>
                      <div className="portfolio-description has-margin-right">
                        <a href="https://insureway.herokuapp.com">
                          <h3>InsureWay</h3>
                        </a>
                        
                        <h4>The Insurance Website</h4>
                        <p>The insurance website was meant to be used as a platform where students belonging to a university starting with covenant university where they can register their devices at their begining of the semester and have it insured for theft and spoiled. A registration fee of 1000 per month</p>
                        <a href="https://bloomtailor.herokuapp.com">
                          <h3>Bloom Tailor</h3>
                        </a>
                        <h4>The Tailor Website</h4>

                        <p>The tailor website is a platform intending to connects tailors to customers, adopting the uber model</p>
                      </div>
                  </div>
                  {/* <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={portitem2} alt=""/>
                      </div>
                      <div className="portfolio-description has-margin-right">
                        <h6>Web Development</h6>
                        <a href="http://balogungift.ga"><h1>A portfolio</h1></a>
                        <p>A portfolio of one of our team gift balogun</p>
                      </div>
                  </div> */}
                  {/* <div className="portfolio-item">
                      <div className="portfolio-img">
                        <img src={portitem3} alt=""/>
                      </div>
                      <div className="portfolio-description has-margin-right">
                        <h6>Web Design</h6>
                        <h1>Product sketch</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ligula vel tellus semper ullamcorper vitae quis risus. Fusce mattis, nunc vitae interdum ornare, orci ante tincidunt libero, vel maximus eros leo lobortis risus. Ut vulputate fermentum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                        <a href="#" className="cta">View Details</a>
                      </div>
                  </div> */}
                </div>
              </section>

              {/* <section className="experience" id="experience">
                <div className="container">
                  <div className="section-heading">
                    <h1>Work Experience</h1>
                    <h6>Past and current jobs</h6>
                  </div>

                  <div className="timeline">
                    <ul>
                      <li className="date" data-date="2011 - Present">
                        <h1>Google</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ligula vel tellus semper ullamcorper vitae quis risus. Fusce mattis, nunc vitae interdum ornare, orci ante tincidunt libero, vel maximus eros leo lobortis risus. Ut vulputate fermentum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                      </li>

                      <li className="date" data-date="2008 - 2011">
                        <h1>Facebook</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ligula vel tellus semper ullamcorper vitae quis risus. Fusce mattis, nunc vitae interdum ornare, orci ante tincidunt libero, vel maximus eros leo lobortis risus. Ut vulputate fermentum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                      </li>

                      <li className="date" data-date="2002 - 2011">
                        <h1>Microsoft</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae ligula vel tellus semper ullamcorper vitae quis risus. Fusce mattis, nunc vitae interdum ornare, orci ante tincidunt libero, vel maximus eros leo lobortis risus. Ut vulputate fermentum eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </section> */}

              {/* <section className="contact" id="contact">
                <div className="container">
                  <div className="section-heading">
                    <h1>Contact</h1>
                    <h6>Let's work together</h6>
                  </div>
                  <form action="">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name..." required />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email..." required></input>
                    <label for="services">Services</label>
                    <select name="services" id="services">
                      <option value="">Web Design</option>
                      <option value="">Web Development</option>
                      <option value="">Web Design/Development</option>
                    </select>
                    <label for="subject">Subject:</label>
                    <textarea name="subject" id="subject" cols="10" row="10"></textarea>
                    <input type="submit" value="Submit"/>
                  </form>
                </div>
              </section> */}
              <p style={{textAlign:"center", fontWeight: "bold"}}><a style={{color: "pink"}} href="https://drive.google.com/file/d/1uGhAn4Oa8y9aZiU3jL8Fo4QTGs1AGDY2/view?usp=sharing">Request our quote to see our pricing</a>
              </p>
              <footer className="copyright">
                {/* <div className="up" id="up">
                    <i className="fas fa-chevron-up"></i>
                </div> */}
                <div>
                  <p>Km 10 Idiroko Rd, Covenant University. Ota, Ogun State</p>
                  <p><a href="">+234 907 846 7458</a></p>
                  
                  <p><a href="mailto: softbloom28@gmail.com">Send Us An Email</a></p>
                  <p>&copy; 2019 Bloom Web Agency</p>

                </div>
              </footer>
            </ScrollAnimation>
          </div>
    );
  }

export default App;

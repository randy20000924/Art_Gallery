import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {GiClawHammer,GiCat} from 'react-icons/gi'
import {BsFileZipFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
            <div className="about_me-image">
              <img src={ME} alt="About Image"/>
            </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <GiClawHammer className='about_icon'/>
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about_card">
              <BsFileZipFill className='about_icon'/>
              <h5>Project</h5>
              <small>2 Cooperation Project</small>
            </article>

            <article className="about_card">
              <GiCat className='about_icon'/>
              <h5>Cat</h5>
              <small>2 Lovely Cat</small>
            </article>
          </div>
          <p>
          True mastery of any skill takes a lifetime.
          </p>
          <p>
          Sweat is the lubricant of success.
          </p>
          <p>
          Every noble work is at first impossible.
          </p>
          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
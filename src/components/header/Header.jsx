import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import UseAnimations from "react-useanimations";
import arrowDown from 'react-useanimations/lib/arrowDown'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h2>Hello I'm</h2>
        <h1>Randy Chang</h1>
        <h5 className="text-light">A Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
        <a className='scroll_down-animation'><UseAnimations animation={arrowDown} strokeColor="#FFFFFF" size={40}/></a>
      </div>
    </header>
  )
}

export default Header
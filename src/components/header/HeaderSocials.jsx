import React from 'react'
import {BsLinkedin,BsFacebook} from 'react-icons/bs'
import UseAnimations from "react-useanimations";
import github from 'react-useanimations/lib/github'
import linkedin from 'react-useanimations/lib/linkedin'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://linkedin.com/in/chang-randy-4b6699252" target="_blank" rel="noreferrer noopenner">
          <UseAnimations animation={linkedin} strokeColor="#FFFFFF" size={40}/></a>
          
        <a href="https://github.com/randy20000924" target="_blank" rel="noreferrer noopenner">
          <UseAnimations animation={github} strokeColor="#FFFFFF" size={40}/></a>
    </div>
  )
}

export default HeaderSocials
import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {RiSearchEyeFill} from 'react-icons/ri'
import {FaRegHandPointDown} from 'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiSearchEyeFill /></a>
      <a href='#footer' onClick={() => setActiveNav('#footer')} className={activeNav === '#footer' ? 'active' : ''}><FaRegHandPointDown /></a>
    </nav>
  )
}

export default Nav
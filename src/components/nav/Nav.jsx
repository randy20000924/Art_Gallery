import React from 'react'
import './nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {FaUserAstronaut} from 'react-icons/fa'
import {GiSecretBook} from 'react-icons/gi'
import {BsCollectionPlay} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAstronaut /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSecretBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsCollectionPlay /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav
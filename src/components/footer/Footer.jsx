import React from 'react'
import './footer.css'
import UseAnimations from "react-useanimations";
import facebook from 'react-useanimations/lib/facebook'
import instagram from 'react-useanimations/lib/instagram'
import twitter from 'react-useanimations/lib/twitter'

function Footer() {
  return (
    <footer>
      <a href='#' className='footer_logo'>RANDY</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/ChangYaoLunRandy/" target="_blank" rel="noreferrer noopenner">
          <UseAnimations animation={facebook} strokeColor="#FFFFFF" size={40}/></a>

        <a href="https://www.instagram.com/randyoooooooo/" target="_blank" rel="noreferrer noopenner">
          <UseAnimations animation={instagram} strokeColor="#FFFFFF" size={40}/></a>
        
        <a href="https://twitter.com/RandyChang0924/" target="_blank" rel="noreferrer noopenner">
          <UseAnimations animation={twitter} strokeColor="#FFFFFF" size={40}/></a>  
      </div>
      <div className='footer_copyright'>
        <small>&copy; Randy Chang. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
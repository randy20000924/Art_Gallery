import React from 'react'
import './header.css'
import ss from '../../assets/logo.png'


const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1 className='h10'>Art Gallery</h1>
        <div className="me">
          <img src={ss} alt="me"  className='img'/>
        </div>
      </div>  
    </header>
  )
}

export default Header
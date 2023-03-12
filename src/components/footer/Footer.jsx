import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer id='footer'>
      <a href='#' className='footer_logo'>Art</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
      </ul>
      <div className='footer_copyright'>
        <small>&copy; All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
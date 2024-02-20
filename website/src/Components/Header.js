import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
      <div className='header_container'>
        <div className='logo'>
          <img src='/assets/textlogo.webp' alt="background logo"/>
        </div>
        <div className='bg'></div>
      </div>
    </div>
  )
}

export default Header
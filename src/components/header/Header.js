import React from 'react'
import './Header.css'
import logo from '../../assets/images/p-b-logo@2x.png'

const Header = () => {
  return (
    <div className='header'>
      <div className='flex-header'>
        <div className='left-containers'>
          <img src={logo} alt='logo' />
          <p>Profile Editor</p>
        </div>
        <div className='right-containers'>
          <p>Contact</p>
          <p>FAQs</p>
          <p>Save and Exit</p>
        </div>
      </div>
    </div>
  )
}

export default Header

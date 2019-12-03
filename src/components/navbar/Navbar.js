import React from './node_modules/react'
import './Navbar.css'
import progress from '../../assets/images/8@2x.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='progress-bar'>
        <img src={progress} alt='progress' />
      </div>
      <div className='menu-item'>
        <p>COMPANY INFO</p>
      </div>
      <div className='menu-item'>
        <p>MY FIRM</p>
      </div>
      <div className='menu-item'>
        <p>DEALS</p>
      </div>
      <div className='menu-item'>
        <p>FINANCIALS</p>
      </div>
    </div>
  )
}

export default Navbar

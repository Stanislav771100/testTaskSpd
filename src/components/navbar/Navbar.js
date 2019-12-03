import React from 'react'
import './Navbar.css'
import progress from '../../assets/images/8@2x.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='progressBar'>
        <img src={progress} alt='progress' />
      </div>
      <div className='menuItem'>
        <p>COMPANY INFO</p>
      </div>
      <div className='menuItem'>
        <p>MY FIRM</p>
      </div>
      <div className='menuItem'>
        <p>DEALS</p>
      </div>
      <div className='menuItem'>
        <p>FINANCIALS</p>
      </div>
    </div>
  )
}

export default Navbar

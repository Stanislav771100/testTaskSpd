import React from './node_modules/react'
import './Content.css'
import ItemOffice from '../ItemsOffice/ItemOffice'

const Content = () => {
  return (
    <div className='content'>
      <div className='margin-content'>
        <div className='header-screen'>
          <p className='header-item'>OFFICES</p>
          <p className='header-item-blur'> | COMPANY INFO</p>
        </div>
        <div className='description'>
          <p>Updating your location and contact information helps you appeal to regional investors and service providers.</p>
        </div>
        <div className='linehr' />
        <div className='top-element'>
          <button className='button-add-new'>Add New Office</button>
          <p className='counter'>Offices</p>
        </div>
        <ItemOffice />
        <div className='linehr' />
        <div className='footer'>
          <div className='left-element-footer'>
            <button className='back-button'>Back</button>
            <p>Provide additional comments</p>
          </div>
          <div className='footer-button'>
            <button className='skip-button'>Skip this step</button>
            <button className='continue-button'>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

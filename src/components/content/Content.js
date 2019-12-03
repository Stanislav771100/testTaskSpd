import React from 'react'
import './Content.css'
import ItemOffice from './../itemsOffice/ItemOffice'

const Content = () => {
  return (
    <div className='content'>
      <div className='marginContent'>
        <div className='headerScreen'>
          <p className='headerItem'>OFFICES</p>
          <p className='headerItemBlur'> | COMPANY INFO</p>
        </div>
        <div className='description'>
          <p>Updating your location and contact information helps you appeal to regional investors and service providers.</p>
        </div>
        <div className='linehr' />
        <div className='topElement'>
          <button className='buttonAddNew'>Add New Office</button>
          <p className='counter'>Offices</p>
        </div>
        <ItemOffice />
        <div className='linehr' />
        <div className='footer'>
          <div className='leftElementFooter'>
            <button className='backButton'>Back</button>
            <p>Provide additional comments</p>
          </div>
          <div className='footerButton'>
            <button className='skipButton'>Skip this step</button>
            <button className='continueButton'>Continue</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

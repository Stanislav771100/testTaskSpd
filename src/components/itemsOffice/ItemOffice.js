import React from './node_modules/react'
import './ItemOffice.css'

const ItemOffice = () => {
  return (
    <div className='main-block'>
      <div className='content-block'>
        <div className='value-item'>
          <div className='address-item'>
            <p>Address:</p>
          </div>
          <div className='props-values'>
          
          </div>

        </div>
        <div className='value-item'>
          <div className='contactsItem'>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
          <div className='props-values'>
          
          </div>
        </div>
        <div className='buttons-item'>
          
          <button className='remove-button'>Remove</button>
          <button className='edit-button'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default ItemOffice

import React from 'react'
import './itemOffice.css'

const ItemOffice = () => {
  return (
    <div className='mainBlock'>
      <div className='contentBlock'>
        <div className='valueItem'>
          <div className='addressItem'>
            <p>Address:</p>
          </div>
          <div className='propsValues'>
          
          </div>

        </div>
        <div className='valueItem'>
          <div className='contactsItem'>
            <p>Phone:</p>
            <p>Email:</p>
          </div>
          <div className='propsValues'>
          
          </div>
        </div>
        <div className='buttonsItem'>
          
          <button className='removeButton'>Remove</button>
          <button className='editButton'>Edit</button>
        </div>
      </div>
    </div>
  )
}

export default ItemOffice

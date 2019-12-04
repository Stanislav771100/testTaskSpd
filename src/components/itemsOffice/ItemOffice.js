import React, { useState } from 'react'
import './ItemOffice.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteOffice, editOffice } from './../../actions/index'
import AddItem from './../AddItem/AddItem'

const ItemOffice = (props) => {
  const [editMode, setEditMode] = useState(false)
  console.log(props)
  return (
    <>
      {!editMode ? <div className='main-block'>
        <div className='content-block'>
          <div className='value-item'>
            <div className='address-item'>
              <p>Address:</p>
              <p>{props.office.city}</p>
            </div>
            <div className='props-values' />

          </div>
          <div className='value-item'>
            <div className='contactsItem'>
              <p>Phone:</p>
              <p>Email:</p>
            </div>
            <div className='props-values' />
          </div>
          <div className='buttons-item'>

            <button onClick={() => { props.deleteOffice(props.index) }} className='remove-button'>Remove</button>
            <button onClick={() => { setEditMode(true) }} className='edit-button'>Edit</button>
          </div>
        </div>
      </div>
        : <AddItem office={props.office} onCancel={() => { setEditMode(false) }} onSave={(office) => {
          props.editOffice(office, props.index)
          setEditMode(false)
        }} />
      }
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ deleteOffice, editOffice }, dispatch)

})

export default connect(null, mapDispatchToProps)(ItemOffice)

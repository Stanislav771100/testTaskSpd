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
            </div>
            <div className='props-values'>
              <p>{props.office.code}</p>
              <p>{props.office.province}</p>
              <p>{props.office.secondAddress}</p>
              <p>{props.office.city + ' ' + props.office.street}</p>
              <p>{props.office.country}</p>
            </div>
          </div>
          <div className='value-item'>
            <div className='contacts-item'>
              <p>Phone:</p>
              <p>Email:</p>
            </div>
            <div className='props-values'>
              <p>{props.office.phone}</p>
              <p>{props.office.email}</p>
            </div>
          </div>
          <div className='buttons-item'>

            <button onClick={() => { props.deleteOffice(props.index) }} className='remove-button'>Remove</button>
            <button onClick={() => { setEditMode(true) }} className='edit-button'>Edit</button>
          </div>
        </div>
      </div>
        : <AddItem office={props.office} onCancel={() => { setEditMode(false) }} onSave={(office) => {
          props.showAdd(false) 
          props.editOffice(office, props.index)
        }} />
      }
    </>
  )
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ deleteOffice, editOffice }, dispatch)

})

export default connect(null, mapDispatchToProps)(ItemOffice)

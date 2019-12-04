import React, { useState, useEffect } from 'react'
import './AddItem.css'
import { connect } from 'react-redux'
import { changeOffice } from '../../actions/index'
import { bindActionCreators } from 'redux'

const AddItem = (props) => {
  const [country, setCountry] = useState(props.office ? props.office.country : '')
  const [province, setProvince] = useState('')
  const [code, setCode] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [secondAddress, setSecondAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [fax, setFax] = useState('')
  const [email, setEmail] = useState('')
  const [officeType, setOfficeType] = useState(false)
  const [office, setOffice] = useState(null)

  const { changeOffice } = props

  useEffect(() => {
    if (office) {
      changeOffice(office)
    }
  }, [office, changeOffice]
  )
  function clickCancel () {
    if (props.onCancel) {
      props.onCancel()
    } else {
      props.setShowAddItem(!props.showAddItem)
    }
  }
  const saveOffice = () => {
    if (props.onSave) {
      props.onSave({ country, province, code, city, street, secondAddress, phone, fax, email, officeType })
    } else {
      setOffice({ country, province, code, city, street, secondAddress, phone, fax, email, officeType })
    }
  }
  return (
    <div className='main-edit-block'>
      <div className='content-edit'>
        <div className='block-edit'>
          <div className='adress-labels'>
            <p>*Country:</p>
            <p>*State/Province:</p>
            <p>*Postal Code:</p>
            <p>*City:</p>
            <p>*Street Address:</p>
            <p>Address 2:</p>

          </div>
          <div className='adress-inputs'>
            <input onChange={e => setCountry(e.target.value)} value={country} />
            <input onChange={e => setProvince(e.target.value)} value={province} />
            <input onChange={e => setCode(e.target.value)} value={code} />
            <input onChange={e => setCity(e.target.value)} value={city} />
            <input onChange={e => setStreet(e.target.value)} value={street} />
            <input onChange={e => setSecondAddress(e.target.value)} value={secondAddress} />
          </div>

        </div>
        <div className='block-edit-contacts'>
          <div className='contacts-labels'>
            <p>Phone:</p>
            <p>Fax:</p>
            <p>Email:</p>
            <p>Office Type:</p>

          </div>
          <div className='contacts-inputs'>
            <input onChange={e => setPhone(e.target.value)} value={phone} />
            <input onChange={e => setFax(e.target.value)} value={fax} />
            <input onChange={e => setEmail(e.target.value)} value={email} />
            <input onChange={e => setOfficeType(e.target.value)} value={officeType} className='checkbox' type='checkbox' />
            {console.log(officeType)}
          </div>
        </div>
        <div className='block-edit-buttons'>
          <button onClick={clickCancel} className='cancel-button'>Cancel</button>
          <button onClick={saveOffice} className='save-button'>Save</button>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    office: state.officeReducer.data
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ changeOffice }, dispatch)

})
export default connect(mapStateToProps, mapDispatchToProps)(AddItem)

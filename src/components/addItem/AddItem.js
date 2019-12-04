import React, { useState } from 'react'
import './AddItem.css'
import { connect } from 'react-redux'

const ItemOffice = (props) => {
  const [country, setCountry] = useState('')
  const [province, setProvince] = useState('')
  const [code, setCode] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [secondAddress, setSecondAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [fax, setFax] = useState('')
  const [email, setEmail] = useState('')
  const [officeType, setOfficeType] = useState(false)
  const [office, setOffice] = useState([])

  function clickCancel () {
    console.log(props)
    props.setShowAddItem(!props.showAddItem)
  }
  function saveOffice () {
    setOffice(country, province, code, city, street, secondAddress, phone, fax, email, officeType)
    props.changeStateProp('data', office, 'main')
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
            <input onChange={e => setOfficeType(e.target.value)} className='checkbox' type='checkbox' />
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
    office: state.office.data
  }
}
export default connect(mapStateToProps)(ItemOffice)

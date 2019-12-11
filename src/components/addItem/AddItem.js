import React, { useState, useEffect } from 'react'
import './AddItem.css'
import { connect } from 'react-redux'
import { changeOffice } from '../../actions/index'
import { bindActionCreators } from 'redux'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector'

const AddItem = (props) => {
  console.log(props.office.province)
  const [country, setCountry] = useState(props.office ? props.office.country : '')
  const [province, setProvince] = useState(props.office ? props.office.province : '')
  const [code, setCode] = useState(props.office ? props.office.code : '')
  const [city, setCity] = useState(props.office ? props.office.city : '')
  const [street, setStreet] = useState(props.office ? props.office.street : '')
  const [secondAddress, setSecondAddress] = useState(props.office ? props.office.secondAddress : '')
  const [phone, setPhone] = useState(props.office ? props.office.phone : '')
  const [fax, setFax] = useState(props.office ? props.office.fax : '')
  const [email, setEmail] = useState(props.office ? props.office.email : '')
  const [officeType, setOfficeType] = useState(props.office ? props.office.officeType : false)
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

  function saveOffice () {
    console.log(country, province)
    if (props.onSave) {
      props.onSave({ country, province, code, city, street, secondAddress, phone, fax, email, officeType })
    } else if ((country && province && code && street)) {
      setOffice({ country, province, code, city, street, secondAddress, phone, fax, email, officeType })
    }
  }
  function selectCountry (val) {
    setCountry(val)
  }

  const [codeCheck, setCheckCode] = useState(true)
  const checkCode = () => {
    const regexCode = /\d{5,5}/gim
    const codeCheck = code
    if (code && codeCheck.match(regexCode)) {
      setCheckCode(!codeCheck)
    } else {
    }
  }
  const [provinceCheck, setCheckProvince] = useState(true)
  const checkProvince = () => {
    const regexProvince = /(?=.*[a-z])(?=.*[A-Z]).{3,}\D/gim
    const provinceCheck = province
    if (province && provinceCheck.match(regexProvince)) {
      setCheckProvince(false)
      console.log(false)
    }
  }
  const [cityCheck, setCheckCity] = useState(true)
  const checkCity = () => {
    const regexCity = /(?=.*[a-z])(?=.*[A-Z]).{3,}\D/gim
    const cityCheck = city
    if (city && cityCheck.match(regexCity)) {
      setCheckCity(false)
    }
  }
  const [streetCheck, setCheckStreet] = useState(true)
  const checkStreet = () => {
    const regexStreet = /(?=.*[a-z])(?=.*[A-Z]).{3,}\D/gim
    const streetCheck = street
    if (street && streetCheck.match(regexStreet)) {
      setCheckStreet(false)
      console.log(streetCheck)
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
            <CountryDropdown
              className='dropdown'
              value={country}
              onChange={(val) => selectCountry(val)} />
            <p>{province && provinceCheck && 'Invalid province'}</p>
            <input onBlur={checkProvince} onChange={e => setProvince(e.target.value)} value={province} />
            <p>{code && codeCheck ? 'Invalid code' : ''}</p>
            <input onBlur={checkCode} onChange={e => setCode(e.target.value)} value={code} />
            <p>{city && cityCheck ? 'Invalid city' : ''}</p>
            <input onBlur={checkCity} onChange={e => setCity(e.target.value)} value={city} />
            <p>{street && streetCheck ? 'Invalid street' : ''}</p>
            <input onBlur={checkStreet} onChange={e => setStreet(e.target.value)} value={street} />
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

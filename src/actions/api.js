import { ADD_API } from './types'

export function addApi (api, country, province, code, street, secondAddress, phone, fax, email, officeType, city) {
  return {
    type: ADD_API,
    payload: api,
    countryPayload: country,
    provincePayload: province,
    codePayload: code,
    streetPayload: street,
    secondAddressPayload: secondAddress,
    phonePayload: phone,
    faxPayload: fax,
    emailPayload: email,
    officeTypePayload: officeType,
    cityPayload: city
  }
}

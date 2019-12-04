import * as actionTypes from './types'

export function changeOffice (value) {
  return (
    {
      type: actionTypes.OFFiCE_CHANGE,
      state: {
        value: value
      }
    }
  )
}
export function editOffice (value, index) {
  return (
    {
      type: actionTypes.OFFiCE_EDIT,
      state: {
        value,
        index
      }
    }
  )
}
export function deleteOffice (index) {
  return (
    {
      type: actionTypes.OFFiCE_DELETE,
      state: {
        index
      }
    }
  )
}

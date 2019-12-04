import { OFFiCE_CHANGE, OFFiCE_EDIT, OFFiCE_DELETE } from '../actions/types'
import update from 'immutability-helper'

const initialState = {
  data: []
}

const officeReducer = (state = initialState, action) => {
  let newDate
  switch (action.type) {
    case OFFiCE_CHANGE:
      newDate = [...state.data, action.state.value]
      return update(state, {
        data: { $set: newDate }
      })
    case OFFiCE_EDIT:
      newDate = [...state.data]
      newDate[action.state.index] = action.state.value
      return update(state, {
        data: { $set: newDate }
      })
    case OFFiCE_DELETE:
      newDate = state.data.filter((item, index) => {
        return index !== action.state.index
      })
      return update(state, {
        data: { $set: newDate }
      })
    default:
      return state
  }
}

export default officeReducer

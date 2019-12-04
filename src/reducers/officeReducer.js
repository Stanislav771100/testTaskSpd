import { OFFiCE_CHANGE } from '../actions/types'
import update from 'immutability-helper'

const initialState = {
  data: {}
}

const officeReducer = (state = initialState, action) => {
  switch (action.type) {
    case OFFiCE_CHANGE:
      return update(state, {
        [action.state.prop]: { $set: action.state.value }
      })
    default:
      return state
  }
}

export default officeReducer

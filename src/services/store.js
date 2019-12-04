import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import officeReducer from '../reducers/officeReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  office: officeReducer
})

const configureStore = () => {
  return createStore(
    rootReducer,
    undefined,
    compose(applyMiddleware(...[thunk]))
  )
};

export default configureStore

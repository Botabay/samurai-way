import { combineReducers, createStore } from 'redux'
import { dialogReducer } from './dialogReducer'
import { profileReducer } from './profileReducer'
import { subjectReducer } from './subjectReducer'

const reducers = combineReducers({
  dialogReducer,
  profileReducer,
  subjectReducer
})
export const store = createStore(reducers);
import { combineReducers, legacy_createStore } from 'redux'
import { dialogReducer } from './dialogReducer'
import { profileReducer } from './profileReducer'
import { subjectReducer } from './subjectReducer'
import { usersReducer } from './usersReducer'

const reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    subject: subjectReducer,
    users: usersReducer
})
export type AppRootStateType = ReturnType<typeof reducers>
export const store = legacy_createStore(reducers);
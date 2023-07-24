import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { dialogReducer } from './dialogReducer'
import { profileReducer } from './profileReducer'
import { subjectReducer } from './subjectReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import { appReducer } from './appReducer'

const rootReducer = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    subject: subjectReducer,
    users: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store=store;
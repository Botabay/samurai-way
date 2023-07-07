import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { dialogReducer } from './dialogReducer'
import { profileReducer } from './profileReducer'
import { subjectReducer } from './subjectReducer'
import { usersReducer } from './usersReducer'
import { authReducer } from './authReducer'
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    dialogs: dialogReducer,
    profile: profileReducer,
    subject: subjectReducer,
    users: usersReducer,
    auth: authReducer
})
export type AppRootStateType = ReturnType<typeof reducers>
export const store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

// type Window {
//     store: AppRootStateType; // Здесь вы можете указать конкретный тип для store вместо any
//   }
  
//   // Присваивание значению переменной store объекта window
//   window.store :Window = store;

// // Приведение типа объекта window к типу, содержащему свойство store
// interface MyWindow extends Window {
//     store1: any; // Здесь вы можете указать конкретный тип для store вместо any
//   }
  
//   // Присваивание значения переменной store объекту MyWindow (с приведением типа)
//   const myWindow = window as MyWindow;
//   myWindow.store1 = store;
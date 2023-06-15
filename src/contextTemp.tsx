import { FC, createContext } from "react";
import { store } from "./redux/reduxStore";
import { AppRootStateType } from './redux/reduxStore'

// export const TContext = createContext<AppRootStateType>(store.getState())
const TContext = createContext(store)

export const Provider =(props:any)=>{
    return (
        <TContext.Provider value={store}>
            {props.children}
        </TContext.Provider>
    )
}

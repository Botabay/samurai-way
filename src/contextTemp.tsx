import { createContext } from "react";
import { store } from "./redux/reduxStore";
// import { AppRootStateType } from './redux/reduxStore'

// export const TContext = createContext<AppRootStateType>(store.getState())
export const TContext = createContext(store)

export const Provider =({children, ...rest}:any)=>{
    return (
        <TContext.Provider value={store}>
            {children}
        </TContext.Provider>
    )
}

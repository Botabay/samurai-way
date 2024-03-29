import { ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "./reduxStore";
import { FormAction } from "redux-form";
import { getAuthDataTC } from "./authReducer";

export type AppDataType = typeof initialState

export type setInitializedACType = ReturnType<typeof setInitializedAC>

type ActionsType = setInitializedACType

const initialState = {
    initialized: false,
}
export const appReducer = (state: AppDataType = initialState, action: ActionsType): AppDataType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return { ...state, initialized: true }
        }
        default: return state;
    }
}

export const setInitializedAC = () => ({
    type: INITIALIZED_SUCCESS
}) as const;

const INITIALIZED_SUCCESS = 'APP/INITIALIZED_SUCCESS';
export const setInitializedTC = () => async (dispatch: ThunkDispatch<
    AppRootStateType,
    unknown,
    ActionsType | FormAction
>) => {    
    await dispatch(getAuthDataTC());
    dispatch(setInitializedAC())
}

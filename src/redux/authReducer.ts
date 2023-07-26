import { AnyAction, Dispatch } from "redux";
import { authAPI } from "../api/api";
import { ThunkDispatch } from "redux-thunk";
import { AppRootStateType } from "./reduxStore";
import { FormAction, stopSubmit } from "redux-form";

export type UsersDataType = typeof initialState

export type setAuthACType = ReturnType<typeof setAuthAC>

type ActionsType = setAuthACType

const initialState = {
    email: null as string | null,
    login: null as string | null,
    userId: null as string | null,
    isAuth: false,
}
export const authReducer = (state: UsersDataType = initialState, action: ActionsType): UsersDataType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return action.payload
        }
        default: return state;
    }
}

export const setAuthAC = ({ email, login, userId, isAuth }: UsersDataType) => ({
    type: SET_USER_DATA,
    payload: { email, login, userId, isAuth }
} as const)

const SET_USER_DATA = 'AUTH/SET_USER_DATA'
export const getAuthDataTC = () => (dispatch: Dispatch<AnyAction>) => {
    return authAPI.getAuthData()
        .then(data => {
            dispatch(setAuthAC({ ...data.data, userId: data.data.id, isAuth: true }))
        })
}

export const loginTC = ({ email, password, rememberMe = false }: { email: string, password: string, rememberMe: boolean }) => (dispatch: ThunkDispatch<
    AppRootStateType,
    unknown,
    ActionsType | FormAction
>) => {
    authAPI.toLogin({ email, password, rememberMe })
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(getAuthDataTC())
            } else {
                dispatch(stopSubmit('login', {
                    _error: res.data.messages.length > 0 ?
                        res.data.messages[0] :
                        'common error'
                }))
            }
        })
}
export const logoutTC = ({ email, password, rememberMe = false }: {
    email: string,
    password: string,
    rememberMe: boolean
}) => (dispatch: ThunkDispatch<AppRootStateType, unknown, ActionsType>) => {
    authAPI.toLogout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthAC({
                    email: null, login: null, userId: null, isAuth: false
                }))
            }
        })
}

